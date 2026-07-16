import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { resources } from "@/data/resources";

const ResourcesSection = () => {
  const featured = resources.slice(0, 3);

  return (
    <section id="resources" className="section-padding bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
            For New Moms
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-4">
            Parenting Resource Guide
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Warm, honest guidance for the beautiful, messy, tender first year — from feeding
            and sleep to healing and self-care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((r, i) => (
            <Link
              to={`/resources/${r.slug}`}
              key={r.slug}
              className="group animate-fade-in bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="text-primary font-semibold">{r.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {r.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-2 leading-snug">
                  {r.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {r.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Explore All Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
