import { useRegion } from "@/context/RegionContext";
import { useCart } from "@/context/CartContext";
import { Region, getRegionInfo } from "@/lib/currency";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";

const RegionToggle = () => {
  const { region, setRegion } = useRegion();
  const { cartItems, clearCart } = useCart();
  const currentRegion = getRegionInfo(region);

  const regions: Region[] = ['US', 'IN'];

  const handleRegionChange = (newRegion: Region) => {
    if (newRegion === region) return;
    
    // Warn user if cart has items
    if (cartItems.length > 0) {
      const confirmed = window.confirm(
        'Changing your region will clear your cart as prices differ between regions. Continue?'
      );
      if (!confirmed) return;
      clearCart();
    }
    
    setRegion(newRegion);
    const newRegionInfo = getRegionInfo(newRegion);
    toast.success(`Switched to ${newRegionInfo.name}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
        <span>{currentRegion.flag}</span>
        <span>{currentRegion.code}</span>
        <ChevronDown className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {regions.map((r) => {
          const info = getRegionInfo(r);
          const isSelected = region === r;
          
          return (
            <DropdownMenuItem
              key={r}
              onClick={() => handleRegionChange(r)}
              className={`flex items-center gap-2 cursor-pointer ${
                isSelected ? 'bg-primary/10' : ''
              }`}
            >
              <span>{info.flag}</span>
              <span>{info.name}</span>
              {isSelected && (
                <span className="ml-auto text-primary">✓</span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RegionToggle;
