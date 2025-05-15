
import React, { useState, useEffect } from 'react';

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
      <div className="animate-spin-slow mb-8">
        <img src="/assets/sparks-logo.svg" alt="SparksAI Logo" className="h-24 w-24" />
      </div>
      
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-spark-purple to-spark-blue rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-spark-purple font-medium">Loading... {progress}%</p>
      
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-spark-purple/10 animate-pulse-slow"></div>
      <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-spark-blue/30 blur-xl animate-float"></div>
      <div className="absolute top-16 left-16 w-10 h-10 rounded-full bg-spark-purple/30 blur-xl animate-float-horizontal"></div>
    </div>
  );
};

export default LoadingScreen;
