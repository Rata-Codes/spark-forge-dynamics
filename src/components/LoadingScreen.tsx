
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState<number>(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 5, 100));
      } else {
        setTimeout(() => {
          onFinished();
        }, 500);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [progress, onFinished]);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <div className="relative mb-8">
        <div className="relative h-20 w-20 rounded-lg bg-gradient-to-br from-spark-purple to-spark-blue p-4 shadow-lg">
          <Zap className="h-full w-full text-white animate-pulse" />
          <div className="absolute -top-10 -left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-spin-slow"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/10 rounded-full blur-xl animate-spin-slow animation-delay-700"></div>
        </div>
        <div className="absolute -inset-4 rounded-2xl border border-spark-purple/20 animate-pulse-slow"></div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="font-bold text-2xl mb-2 relative">
          <span className="bg-gradient-to-r from-spark-purple via-spark-blue to-spark-purple bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient">SPARKS AI</span>
        </div>
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-widest mb-4">INTELLIGENT SOLUTIONS</div>
      </div>
      
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-spark-purple to-spark-blue rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-spark-purple font-medium">Loading... {progress}%</p>
      
      {/* Circuit animation background */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100" 
            fill="none" 
            stroke="url(#loadingCircuit1)" 
            strokeWidth="1.5"
            className="circuit-line"
          />
          <path 
            d="M100,0 Q150,50 100,100 T100,200 T100,300 T100,400" 
            fill="none" 
            stroke="url(#loadingCircuit2)" 
            strokeWidth="1.5"
            className="circuit-line"
          />
          <defs>
            <linearGradient id="loadingCircuit1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#1EAEDB" />
            </linearGradient>
            <linearGradient id="loadingCircuit2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1EAEDB" />
              <stop offset="100%" stopColor="#9b87f5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
