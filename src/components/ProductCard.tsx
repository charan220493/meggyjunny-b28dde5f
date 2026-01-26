import { ShoppingCart } from "lucide-react";
import { Product, getProductPrice } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useRegion } from "@/context/RegionContext";
import { formatPrice } from "@/lib/currency";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { region } = useRegion();
  const price = getProductPrice(product, region);

  return (
    <div className="card-product group">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-accent uppercase tracking-wide">
          {product.category}
        </span>
        <h3 className="text-lg font-display font-semibold text-foreground mt-1 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">
            {formatPrice(price, region)}
          </span>
          <Button
            onClick={() => addToCart(product)}
            className="btn-primary gap-2 rounded-full"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
