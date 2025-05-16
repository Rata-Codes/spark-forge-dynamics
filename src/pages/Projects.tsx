
import React, { useEffect, useState } from "react";
import TechParticles from "@/components/TechParticles";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import ProjectCard from "@/components/ProjectCard";
import { Loader2 } from "lucide-react";

interface Project {
  id: string;
  ProjectName: string;
  ProjectLink: string;
  Description: string;
  Image: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.airtable.com/v0/appkKccLAGrYOPAcu/tblQhXsg2wYMa1KPn', {
          headers: {
            'Authorization': 'Bearer patcWr0ljbUna72fs.2cf84158eccfb42382d11a3d0cb2420fc1048410bafa6d2ddc1f82131828191c',
            'Content-Type': 'application/json'
          },
          method: 'GET'
        });
        
        if (!response.ok) {
          console.error("Response status:", response.status);
          console.error("Response text:", await response.text());
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        console.log("Airtable response data:", data);
        
        if (data && data.records) {
          const fetchedProjects = data.records.map((record: any) => ({
            id: record.id,
            ProjectName: record.fields.ProjectName || "",
            ProjectLink: record.fields.ProjectLink || "",
            Description: record.fields.Description || "",
            Image: record.fields.Image || ""
          }));
          
          setProjects(fetchedProjects);
        } else {
          throw new Error('Invalid data format received');
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#121212] text-foreground">
      {/* Tech-themed particles */}
      <TechParticles />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Projects Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient-professional">Projects</span></h2>
            <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
              Explore our portfolio of innovative solutions and successful client projects.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-12 w-12 text-amber-500 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center p-8 bg-[#1A1812]/70 backdrop-blur-sm border border-amber-500/10 rounded-lg">
              <p className="text-amber-100">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.ProjectName}
                  description={project.Description}
                  imageUrl={project.Image}
                  projectLink={project.ProjectLink}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Professional accent elements */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
      </section>
      
      {/* Footer Section */}
      <FooterSection />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
};

export default Projects;
