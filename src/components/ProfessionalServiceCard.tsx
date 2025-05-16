
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
        "hover:shadow-lg hover:shadow-amber-500/5 hover:border-amber-500/20",
        "animate-fade-in opacity-0 h-[280px]"
      )}
      style={{ animationDelay: `${0.15 + index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col relative z-10 transition-all duration-300">
        <div className="flex items-start">
          <div className={cn(
            "p-3 bg-gradient-to-br rounded-lg w-12 h-12 mb-4 flex items-center justify-center",
            iconBg
          )}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-amber-50">{title}</h3>
        <p className="text-amber-100/70 text-sm mb-4">{description}</p>
        
        <div className={cn(
          "mt-auto transition-all duration-300 transform",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="h-px w-full bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 my-3"></div>
          <h4 className="font-medium text-xs text-amber-400 mb-2">CAPABILITIES</h4>
          <ul className="text-xs text-amber-100/70 grid grid-cols-2 gap-x-2 gap-y-1">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="mr-1 text-amber-400 text-[8px]">■</span>
                {feature}
              </li>
            ))}
          </ul>
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
        "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent",
        "transform transition-all duration-500",
        isHovered ? "opacity-100" : "opacity-30"
      )}></div>
    </div>
  );
};

export default ProfessionalServiceCard;
