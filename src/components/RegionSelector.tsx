import { useRegion } from "@/context/RegionContext";
import { Region, getRegionInfo } from "@/lib/currency";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const RegionSelector = () => {
  const { region, setRegion, isFirstVisit, setFirstVisitComplete } = useRegion();

  const handleSelect = (selectedRegion: Region) => {
    setRegion(selectedRegion);
  };

  const handleConfirm = () => {
    setFirstVisitComplete();
  };

  const regions: Region[] = ['US', 'IN'];

  return (
    <Dialog open={isFirstVisit} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-brand font-semibold text-center text-primary">
            Welcome to Meggy &amp; Junny! 🎀
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Please select your location to see products and prices available in your region.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4 py-6">
          {regions.map((r) => {
            const info = getRegionInfo(r);
            const isSelected = region === r;
            
            return (
              <button
                key={r}
                onClick={() => handleSelect(r)}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
              >
                <span className="text-5xl">{info.flag}</span>
                <div className="text-center">
                  <p className="font-semibold text-foreground">{info.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Prices in {info.currency}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <Button 
          onClick={handleConfirm} 
          className="w-full btn-primary py-6 text-lg font-medium"
        >
          Continue Shopping
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default RegionSelector;
