import { products } from "@/data/products";
import { useRegion } from "@/context/RegionContext";

const Hero = () => {
  const { region } = useRegion();
  
  // Filter products by region, then duplicate for seamless loop
  const regionProducts = products.filter((product) =>
    product.availableIn.includes(region)
  );
  const scrollProducts = [...regionProducts, ...regionProducts];

  return (
    <section id="home" className="pt-20 md:pt-24">
      {/* Hero Text */}
      <div className="section-padding gradient-warm">
        <div className="container-main text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-primary mb-6 animate-fade-in">
            Nurturing Little Moments
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Thoughtfully curated gifts and keepsakes for babies, new moms, and 
            the special moments that matter most.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("products");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary px-8 py-4 rounded-full text-lg font-medium animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Scrolling Products */}
      <div className="py-12 bg-brand-cream-medium overflow-hidden">
        <div className="flex animate-scroll">
          {scrollProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-64 md:w-80 mx-4"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="mt-4 text-center font-medium text-foreground">
                {product.name}
              </p>
              <p className="text-center text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
