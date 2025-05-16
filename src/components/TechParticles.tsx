
import React, { useEffect, useRef } from 'react';

const TechParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create tech-themed particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      type: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(30, 120, 255, ${Math.random() * 0.5 + 0.2})`;
        this.type = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around the screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        switch(this.type) {
          case 'square':
            ctx.rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            break;
          case 'triangle':
            ctx.moveTo(this.x, this.y - this.size/2);
            ctx.lineTo(this.x + this.size/2, this.y + this.size/2);
            ctx.lineTo(this.x - this.size/2, this.y + this.size/2);
            ctx.closePath();
            break;
          default:
            ctx.arc(this.x, this.y, this.size/2, 0, Math.PI * 2);
        }
        
        ctx.fill();
      }
    }

    // Create lines between particles
    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 20000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Create grid nodes
    class GridNode {
      x: number;
      y: number;
      size: number;
      alpha: number;
      pulseDirection: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 1;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
      }
      
      update() {
        this.alpha += 0.01 * this.pulseDirection;
        
        if (this.alpha >= 0.5) {
          this.pulseDirection = -1;
        } else if (this.alpha <= 0.1) {
          this.pulseDirection = 1;
        }
      }
      
      draw() {
        ctx.fillStyle = `rgba(30, 120, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const gridSize = 40;
    const gridNodes: GridNode[] = [];
    
    for (let x = 0; x < canvas.width; x += gridSize) {
      for (let y = 0; y < canvas.height; y += gridSize) {
        gridNodes.push(new GridNode(x, y));
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(30, 120, 255, 0.05)';
      ctx.lineWidth = 0.5;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw grid nodes
      gridNodes.forEach(node => {
        node.update();
        node.draw();
      });
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(30, 120, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-70"
    />
  );
};

export default TechParticles;
