import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Region, detectRegion } from "@/lib/currency";

interface RegionContextType {
  region: Region;
  setRegion: (region: Region) => void;
  isFirstVisit: boolean;
  setFirstVisitComplete: () => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

const REGION_STORAGE_KEY = 'littlewonders_region';
const FIRST_VISIT_KEY = 'littlewonders_first_visit';

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const [region, setRegionState] = useState<Region>('US');
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const storedRegion = localStorage.getItem(REGION_STORAGE_KEY) as Region | null;
    const hasVisited = localStorage.getItem(FIRST_VISIT_KEY);

    if (storedRegion) {
      setRegionState(storedRegion);
      setIsFirstVisit(false);
    } else if (!hasVisited) {
      // First visit - auto-detect and show modal
      const detectedRegion = detectRegion();
      setRegionState(detectedRegion);
      setIsFirstVisit(true);
    } else {
      // Has visited but no stored region - use detection
      const detectedRegion = detectRegion();
      setRegionState(detectedRegion);
    }
    
    setIsInitialized(true);
  }, []);

  const setRegion = (newRegion: Region) => {
    setRegionState(newRegion);
    localStorage.setItem(REGION_STORAGE_KEY, newRegion);
  };

  const setFirstVisitComplete = () => {
    setIsFirstVisit(false);
    localStorage.setItem(FIRST_VISIT_KEY, 'true');
    localStorage.setItem(REGION_STORAGE_KEY, region);
  };

  // Don't render children until we've initialized to prevent flash
  if (!isInitialized) {
    return null;
  }

  return (
    <RegionContext.Provider
      value={{
        region,
        setRegion,
        isFirstVisit,
        setFirstVisitComplete,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return context;
};
