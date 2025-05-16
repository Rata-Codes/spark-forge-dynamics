
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface ProfessionalServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBg?: string;
  index: number;
}

const ProfessionalServiceCard: React.FC<ProfessionalServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features,
  iconBg = "from-amber-500/20 to-amber-600/10",
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative rounded-lg transition-all duration-500 ease-out overflow-hidden group",
        "bg-[#1A1812]/70 backdrop-blur-sm border border-amber-500/10",
        "hover:shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/30",
        "animate-fade-in opacity-0"
      )}
      style={{ animationDelay: `${0.15 + index * 0.1}s`, height: "auto", minHeight: "360px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col relative z-10 transition-all duration-300">
        <div className="flex items-start">
          <div className={cn(
            "p-3 bg-gradient-to-br rounded-lg w-12 h-12 mb-4 flex items-center justify-center",
            iconBg,
            "shadow-inner shadow-amber-600/30"
          )}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-amber-50">{title}</h3>
        <p className="text-amber-100/70 text-sm mb-4">{description}</p>
        
        <div className="mt-6">
          <div className="h-px w-full bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 my-3"></div>
          
          <h4 className="font-medium text-xs text-amber-400 mb-2">KEY TECHNOLOGIES</h4>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {features.slice(0, 3).map((feature, idx) => (
              <span 
                key={idx} 
                className="text-xs px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300"
              >
                {feature}
              </span>
            ))}
          </div>
          
          <div className={cn(
            "transition-all duration-500",
            isHovered ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0 overflow-hidden"
          )}>
            <p className="text-xs text-amber-100/70 leading-relaxed">
              {features[3]}
            </p>
          </div>
        </div>
      </div>
      
      {/* Circuit board background */}
      <div className={cn(
        "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBzdHJva2U9IiNGNTlFMEIiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjIiPjxwYXRoIGQ9Ik0xMCAxMGgxMHYxMEgxMHoiLz48cGF0aCBkPSJNMzAgMTBIMjBWMzBoMTB2MTBoLTIwdjEwaDMwVjQwaDEwVjIwSDQwVjEweiIvPjxwYXRoIGQ9Ik01MCAxMGgxMHY0MGgtMTB2LTEwaDEwVjMwaC0xMFYyMGgxMFYxMHoiLz48L2c+PC9zdmc+')] bg-center opacity-0 transition-opacity duration-500",
        isHovered ? "opacity-10" : ""
      )}></div>
      
      {/* Accent corner */}
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent",
        "transform origin-top-right transition-all duration-500",
        isHovered ? "opacity-100 scale-110" : "opacity-50 scale-100"
      )}></div>
      
      {/* Bottom gradient line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent",
        "transform transition-all duration-500",
        isHovered ? "opacity-100" : "opacity-30"
      )}></div>
      
      {/* Edge glow effect */}
      <div className={cn(
        "absolute inset-0 border-2 border-amber-500/0 rounded-lg transition-all duration-500",
        isHovered ? "border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]" : ""
      )}></div>
    </div>
  );
};

export default ProfessionalServiceCard;
