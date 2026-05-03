import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to showcase the Sri Lankan style loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && <Dashboard />}
    </div>
  );
}
