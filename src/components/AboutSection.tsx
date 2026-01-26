const AboutSection = () => {
  return (
    <section id="about" className="section-padding gradient-sage">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-6">
              Crafted with Love
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Little Wonders, we believe every child deserves to grow up surrounded 
              by beautiful, thoughtfully designed products that spark imagination and 
              create lasting memories.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our collection features handpicked board books, puzzles, and gift hampers 
              that celebrate the joy of early childhood and the beautiful journey of 
              new parenthood.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">
                  500+
                </span>
                <span className="text-sm text-muted-foreground">Happy Families</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">
                  100%
                </span>
                <span className="text-sm text-muted-foreground">Handpicked</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-display font-bold text-primary">
                  5★
                </span>
                <span className="text-sm text-muted-foreground">Reviews</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&h=500&fit=crop"
              alt="Baby products"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=500&fit=crop"
              alt="Children playing"
              className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
