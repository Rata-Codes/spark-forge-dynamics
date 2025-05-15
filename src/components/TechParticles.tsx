
import React, { useEffect, useRef, useState } from 'react';
import { Code, Cpu, Database, Laptop, Smartphone } from 'lucide-react';

const TechParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const icons = [
      { element: <Code size={16} />, svg: 'M10 13.5l4-4-4-4M14 9H6' },
      { element: <Cpu size={16} />, svg: 'M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z M9 9h6v6h-6z M3 10h2 M3 14h2 M10 3v2 M14 3v2 M21 10h-2 M21 14h-2 M14 21v-2 M10 21v-2' },
      { element: <Laptop size={16} />, svg: 'M3 6m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z M2 17h20' },
      { element: <Smartphone size={16} />, svg: 'M12 18h.01M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z' },
      { element: <Database size={16} />, svg: 'M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0 M4 6v6a8 3 0 0 0 16 0v-6 M4 12v6a8 3 0 0 0 16 0v-6' }
    ];

    // Number of particles
    const particleCount = Math.floor(dimensions.width / 100);
    
    // Particle array
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      icon: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 10 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        icon: Math.floor(Math.random() * icons.length),
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Lines connection distance
    const maxDistance = 150;

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Bounce off edges
        if (particle.x > dimensions.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        if (particle.y > dimensions.height || particle.y < 0) {
          particle.speedY *= -1;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 135, 245, ${(1 - distance / maxDistance) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Draw tech icon
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;
        
        // Draw SVG path
        ctx.strokeStyle = '#9b87f5';
        ctx.lineWidth = 1.2;
        
        const path = new Path2D(icons[particle.icon].svg);
        const scale = particle.size / 24; // Scale based on original icon size (24px)
        
        ctx.scale(scale, scale);
        ctx.stroke(path);
        
        ctx.restore();
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0" 
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default TechParticles;
