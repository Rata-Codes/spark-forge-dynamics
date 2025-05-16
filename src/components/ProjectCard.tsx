
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ExternalLink, Laptop } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  projectLink
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative rounded-lg overflow-hidden group h-[380px] animate-fade-in opacity-0",
        "bg-[#1A1812]/60 backdrop-blur-sm border border-amber-500/10",
        "hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/30",
        "transition-all duration-500 ease-out"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-900/40 to-amber-700/20 flex items-center justify-center">
            <Laptop className="h-16 w-16 text-amber-500/50" />
          </div>
        )}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60",
          "transition-opacity duration-300",
          isHovered ? "opacity-80" : "opacity-60"
        )}></div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-3 text-amber-50">{title}</h3>
        <p className="text-amber-100/70 text-sm line-clamp-3 mb-4">{description}</p>
        
        <a 
          href={projectLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center text-amber-500 text-sm font-medium",
            "border border-amber-500/30 rounded-full px-4 py-2",
            "transition-all duration-300 group-hover:bg-amber-500/10",
            "hover:bg-amber-500/20"
          )}
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
      
      {/* Tech circuit background */}
      <div className={cn(
        "absolute inset-0 z-0 opacity-0 transition-opacity duration-500",
        isHovered ? "opacity-5" : ""
      )}>
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="0.5" fill="none">
            <rect x="10" y="10" width="80" height="80" />
            <circle cx="50" cy="50" r="30" />
            <line x1="20" y1="50" x2="80" y2="50" />
            <line x1="50" y1="20" x2="50" y2="80" />
            <circle cx="20" cy="20" r="5" />
            <circle cx="80" cy="20" r="5" />
            <circle cx="20" cy="80" r="5" />
            <circle cx="80" cy="80" r="5" />
          </g>
        </svg>
      </div>
      
      {/* Bottom accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0",
        isHovered ? "opacity-100" : "opacity-30"
      )}></div>
    </div>
  );
};

export default ProjectCard;
