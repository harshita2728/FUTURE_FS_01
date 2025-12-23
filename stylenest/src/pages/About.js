import React from "react";

function About() {
  return (
    <>
      {/* ABOUT HEADER */}
      <section className="about-hero">
        <h1>About StyleNest</h1>
        <p>
          Where fashion meets confidence. Designed for people who love
          simplicity, quality, and modern style.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            StyleNest is a modern fashion destination created for individuals
            who believe that style is a form of self-expression. We focus on
            delivering high-quality clothing and accessories that combine
            comfort, durability, and trend-forward design.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make stylish fashion accessible to everyone.
            We aim to provide premium-quality products at affordable prices,
            ensuring that every customer feels confident and comfortable in
            what they wear.
          </p>

          <h2>Why Choose Us</h2>
          <ul className="about-list">
            <li>Carefully curated fashion collections</li>
            <li>High-quality materials and craftsmanship</li>
            <li>Customer-focused shopping experience</li>
            <li>Affordable pricing with premium feel</li>
          </ul>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="about-values">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              Every product is selected with attention to detail to ensure
              durability and comfort.
            </p>
          </div>

          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We continuously explore modern designs and trends to bring
              fresh styles to our customers.
            </p>
          </div>

          <div className="value-card">
            <h3>Trust</h3>
            <p>
              Transparency and customer satisfaction are at the heart of
              everything we do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
