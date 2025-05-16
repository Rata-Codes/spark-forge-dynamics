
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface InteractiveServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBg?: string;
  index: number;
}

const InteractiveServiceCard: React.FC<InteractiveServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features,
  iconBg = "from-amber-500/20 to-amber-600/10",
  index 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={cn(
        "relative rounded-xl transition-all duration-500 ease-in-out overflow-hidden",
        "bg-card/80 shadow-sm hover:shadow-lg",
        "border border-transparent hover:border-amber-500/30",
        isExpanded ? "h-[340px]" : "h-[220px]",
        "animate-fade-in opacity-0"
      )}
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
      onClick={toggleExpand}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start">
          <div className={cn(
            "p-3 bg-gradient-to-br rounded-lg w-14 h-14 mb-5 flex items-center justify-center",
            iconBg
          )}>
            {icon}
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-secondary/80 backdrop-blur-sm rounded-full transform transition-transform">
            {isExpanded ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L10 2M2 2L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6H10M6 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        
        <div className={cn(
          "mt-4 opacity-0 transition-all duration-300",
          isExpanded ? "opacity-100 translate-y-0" : "translate-y-8"
        )}>
          <h4 className="font-semibold text-sm text-amber-500 mb-2">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-2 text-amber-600">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Tech-themed background elements */}
      <div className={cn(
        "absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300",
        isExpanded ? "opacity-10" : "group-hover:opacity-5"
      )}>
        {/* Circuit board pattern */}
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="0.5" fill="none">
            <rect x="10" y="10" width="10" height="10" />
            <rect x="40" y="10" width="20" height="20" />
            <rect x="70" y="20" width="15" height="15" />
            <rect x="20" y="40" width="30" height="10" />
            <rect x="60" y="50" width="20" height="20" />
            <rect x="10" y="70" width="10" height="20" />
            
            <line x1="20" y1="15" x2="40" y2="15" />
            <line x1="60" y1="20" x2="70" y2="20" />
            <line x1="30" y1="40" x2="30" y2="20" />
            <line x1="70" y1="35" x2="70" y2="50" />
            <line x1="50" y1="50" x2="60" y2="60" />
            <line x1="20" y1="70" x2="40" y2="70" />
            <line x1="80" y1="50" x2="90" y2="50" />
          </g>
        </svg>
      </div>
      
      {/* Accent shimmer */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1 gold-shimmer",
        isExpanded ? "opacity-100" : "opacity-0"
      )}></div>
      
      {/* Tech corner element */}
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 opacity-20",
        "transition-all duration-500",
        isExpanded ? "scale-110" : "scale-100"
      )}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="20" r="15" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="80" cy="20" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
          <line x1="65" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="1"/>
          <line x1="80" y1="35" x2="80" y2="50" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
    </div>
  );
};

export default InteractiveServiceCard;
