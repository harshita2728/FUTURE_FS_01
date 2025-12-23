import React from "react";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>StyleNest</h1>
          <p>
            Discover fashion that defines your personality.  
            Premium styles, modern designs, and unmatched comfort.
          </p>
          <a href="/collection" className="btn-primary">
            Explore Collection
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why Choose StyleNest?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Premium Quality</h3>
            <p>
              We use high-quality materials to ensure comfort, durability,
              and long-lasting fashion.
            </p>
          </div>

          <div className="feature-card">
            <h3>Trendy Designs</h3>
            <p>
              Our collections are inspired by the latest fashion trends
              around the world.
            </p>
          </div>

          <div className="feature-card">
            <h3>Affordable Prices</h3>
            <p>
              Get stylish outfits at prices that fit your budget without
              compromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="highlight">
        <h2>New Season, New Style</h2>
        <p>
          Upgrade your wardrobe with our latest arrivals designed for
          modern lifestyles.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Ready to Elevate Your Style?</h2>
        <p>Shop the latest trends and redefine your fashion statement.</p>
        <a href="/collection" className="btn-secondary">
          Shop Now
        </a>
      </section>
    </>
  );
}

export default Home;
