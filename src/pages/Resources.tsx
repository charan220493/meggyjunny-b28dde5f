import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { resources, resourceCategories } from "@/data/resources";

const Resources = () => {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState("All");

  if (slug) {
    const article = resources.find((r) => r.slug === slug);
    if (!article) {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container-main section-padding pt-32 text-center">
            <h1 className="text-3xl font-display text-primary mb-4">Article not found</h1>
            <Link to="/resources" className="text-primary underline">
              Back to Resources
            </Link>
          </main>
          <Footer />
        </div>
      );
    }
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 md:pt-32">
          <article className="container-main max-w-3xl px-4 pb-16">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> All Resources
            </Link>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="text-primary font-semibold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-6 leading-tight">
              {article.title}
            </h1>
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-[16/9] object-cover rounded-2xl shadow-md mb-8"
            />
            <div className="space-y-5 text-foreground/85 text-lg leading-relaxed">
              {article.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-12 p-6 bg-secondary/40 rounded-2xl text-center">
              <p className="text-muted-foreground text-sm mb-3">
                This guide is for general information and doesn't replace advice from your
                healthcare provider.
              </p>
              <Link
                to="/resources"
                className="text-primary font-medium hover:underline"
              >
                Read more resources →
              </Link>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  const filtered =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 md:pt-32">
        <section className="section-padding">
          <div className="container-main">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                For New Moms
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-4">
                Parenting Resource Guide
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Warm, honest guidance for the beautiful, messy, tender first year.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
              {resourceCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 md:px-5 py-2 rounded-full font-medium transition-all text-sm ${
                    activeCategory === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((r, i) => (
                <Link
                  to={`/resources/${r.slug}`}
                  key={r.slug}
                  className="group animate-fade-in bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${i * 0.08}s` }}
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
                    <h2 className="text-xl font-display font-semibold text-primary mb-2 leading-snug">
                      {r.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
