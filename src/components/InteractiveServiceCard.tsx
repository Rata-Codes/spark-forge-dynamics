
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
  iconBg = "from-spark-purple/20 to-spark-blue/20",
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
        "bg-white dark:bg-spark-dark/80 shadow-sm hover:shadow-lg",
        "border border-transparent hover:border-spark-purple/20",
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
          <h4 className="font-semibold text-sm text-spark-purple mb-2">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-2 text-spark-purple">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className={cn(
        "absolute bottom-0 right-0 w-32 h-32 opacity-5 rounded-full",
        "transition-all duration-500",
        isExpanded ? "scale-150" : "scale-100"
      )}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none"/>
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1"/>
          <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Hover effect circuit lines */}
      <div className={cn(
        "absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300",
        isExpanded ? "opacity-10" : "group-hover:opacity-5"
      )}>
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 Q25,20 25,50 T50,80 T75,50 T100,20" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M0,80 Q25,80 25,50 T50,20 T75,50 T100,80" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
    </div>
  );
};

export default InteractiveServiceCard;
