import "./App.css";

const inquiryUrl = "https://forms.gle/C9pJwNvVt4EM8trF9";

const services = [
  {
    number: "01",
    title: "Google Business Profile setup",
    description:
      "Create a profile or improve the one you already have. We help review your business details, category, hours, contact information, and online presence.",
  },
  {
    number: "02",
    title: "Verification guidance",
    description:
      "Get help understanding Google's available verification steps and what you may need to prepare. Google makes the final verification decision.",
  },
  {
    number: "03",
    title: "Gemini setup assistance",
    description:
      "We'll help you check eligibility and use supported Business Profile features with Gemini where those features are available to your account.",
  },
];

const inclusions = [
  "Google Business Profile setup or optimization",
  "Business information and category review",
  "Verification guidance",
  "Gemini eligibility and setup assistance",
  "Complimentary LoveView QR setup",
  "Guidance on collecting customer feedback",
];

const faqs = [
  {
    question: "What does the ₹2,000 service include?",
    answer:
      "It includes one-time assistance with Google Business Profile setup or optimization, verification guidance, Gemini setup assistance for eligible profiles, and one complimentary LoveView QR setup for your business.",
  },
  {
    question: "Can you guarantee my business will appear in Gemini answers?",
    answer:
      "No. We help you prepare accurate business information and use supported features where available. Google controls verification, feature eligibility, recommendations, and search rankings, so placement cannot be guaranteed.",
  },
  {
    question: "What if I already have a Google Business Profile?",
    answer:
      "That's absolutely fine. We can review your existing profile and help improve its setup. You should not create a duplicate profile for the same business location.",
  },
  {
    question: "Is there a monthly subscription?",
    answer:
      "This package is a one-time ₹2,000 setup service. Any future paid or recurring services would be explained separately before you agree to them.",
  },
  {
    question: "What is the complimentary LoveView QR?",
    answer:
      "It's a QR code configured for your business that customers can scan to share feedback through the LoveView experience. The QR does not guarantee Google reviews, ratings, or business growth.",
  },
  {
    question: "Do you need my Google password?",
    answer:
      "You should retain control of your Google account. We can guide you through the steps and you can complete sensitive account actions yourself. Never share your password or verification codes with anyone.",
  },
];

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4.5 10.4 3.4 3.4 7.6-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 15.5 15.2 4.8M6 4.8h9.2V14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="LoveView home">
      <span className="brand-mark" aria-hidden="true">L</span>
      <span>Love<span className="brand-accent">View</span></span>
    </a>
  );
}

function ProductPreview() {
  return (
    <div className="preview-wrap" aria-label="Illustration of the LoveView setup service">
      <div className="preview-glow preview-glow-one" />
      <div className="preview-glow preview-glow-two" />
      <div className="preview-card">
        <div className="preview-header">
          <div className="preview-heading">
            <span className="preview-icon" aria-hidden="true">⌖</span>
            <div>
              <strong>Your business setup</strong>
              <span>A clearer Google presence</span>
            </div>
          </div>
          <span className="status-pill"><i /> Guided setup</span>
        </div>
        <div className="profile-panel">
          <div className="profile-top">
            <span className="store-icon" aria-hidden="true">▦</span>
            <div>
              <strong>Google Business Profile</strong>
              <span>Business details · Category · Contact</span>
            </div>
          </div>
          <div className="check-list">
            {["Profile details reviewed", "Verification steps explained", "Gemini eligibility checked"].map((item) => (
              <div key={item}><span className="check-bubble"><CheckIcon /></span>{item}</div>
            ))}
          </div>
        </div>
        <div className="qr-panel">
          <div className="qr-art" aria-hidden="true">
            {Array.from({ length: 49 }, (_, i) => <span key={i} className={[0,1,2,3,7,10,14,15,17,20,21,23,24,25,27,28,30,31,33,35,36,37,38,39,42,43,45,46,47,48].includes(i) ? "qr-dark" : ""} />)}
          </div>
          <div>
            <span className="eyebrow">COMPLIMENTARY BONUS</span>
            <strong>Your LoveView QR</strong>
            <p>Make it easy for customers to share feedback.</p>
          </div>
        </div>
        <div className="preview-price">
          <div><span>One-time setup fee</span><strong>₹2,000</strong></div>
          <span className="no-monthly">No monthly fee</span>
        </div>
      </div>
      <p className="preview-note">Illustrative preview · Actual eligibility and setup depend on your business.</p>
    </div>
  );
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

export default function App() {
  return (
    <div id="top" className="site-shell">
      <div className="announcement">
        A better Google presence for your business — with a complimentary LoveView QR
      </div>

      <header className="site-header">
        <nav className="nav-container" aria-label="Main navigation">
          <Logo />
          <div className="nav-links">
            <a href="#services">Our service</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQs</a>
          </div>
          <a className="button button-primary nav-cta" href={inquiryUrl} target="_blank" rel="noreferrer">
            Request setup <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-orb" />
          <div className="hero-grid layout-container">
            <div className="hero-copy">
              <span className="hero-kicker"><span /> LOCAL BUSINESS VISIBILITY SETUP</span>
              <h1>Get your business <span>ready for Google</span> and Gemini.</h1>
              <p className="hero-description">
                We help local businesses set up or improve their Google Business Profile, navigate verification, and explore supported Gemini features — with a complimentary LoveView QR included.
              </p>
              <div className="hero-actions">
                <a className="button button-primary button-large" href={inquiryUrl} target="_blank" rel="noreferrer">Get started for ₹2,000 <ArrowIcon /></a>
                <a className="button button-secondary button-large" href="#services">Explore what's included</a>
              </div>
              <div className="hero-points">
                <span><CheckIcon /> One-time payment</span>
                <span><CheckIcon /> QR included</span>
                <span><CheckIcon /> Human setup guidance</span>
              </div>
              <p className="disclaimer">
                Google controls verification, feature eligibility, recommendations, and search results. We provide setup assistance; we don't promise rankings or placement in Gemini answers.
              </p>
            </div>
            <ProductPreview />
          </div>
        </section>

        <section className="value-strip" aria-label="Service highlights">
          <div className="value-strip-inner layout-container">
            <div><strong>₹2,000</strong><span>One-time service fee</span></div>
            <div><strong>1 business</strong><span>Personalized setup guidance</span></div>
            <div><strong>₹0 extra</strong><span>Complimentary LoveView QR</span></div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="layout-container">
            <div className="section-heading">
              <SectionLabel>ONE SERVICE. THREE CLEAR STEPS.</SectionLabel>
              <h2>The setup your business needs to get started.</h2>
              <p>No complicated software to learn. We'll help you work through the essentials and explain what happens next.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="qr-section" id="how-it-works">
          <div className="layout-container qr-grid">
            <div className="qr-copy">
              <SectionLabel>AND A LITTLE EXTRA</SectionLabel>
              <h2>Your LoveView QR comes complimentary.</h2>
              <p>After your profile setup, use a business-specific LoveView QR to make it easier for customers to share feedback. It gives you a practical next step after improving your online business presence.</p>
              <ul className="included-list">
                <li><CheckIcon /> A QR experience associated with your business</li>
                <li><CheckIcon /> An easy way for customers to share feedback</li>
                <li><CheckIcon /> No separate QR setup charge in this offer</li>
              </ul>
              <a className="button button-light" href={inquiryUrl} target="_blank" rel="noreferrer">Request your setup <ArrowIcon /></a>
            </div>
            <div className="feedback-demo">
              <div className="feedback-window">
                <div className="feedback-brand"><span>♡</span><div><strong>LoveView feedback</strong><small>A simple customer experience</small></div></div>
                <div className="rating-preview">
                  <strong>How was your experience?</strong>
                  <div className="stars" aria-label="Illustrative five-star display">★★★★★</div>
                  <p>A simple way to share feedback after a visit.</p>
                </div>
                <div className="included-chip"><span>Business QR setup</span><strong>Included</strong></div>
              </div>
              <p className="feedback-note">Illustrative product preview. Final experience depends on the current LoveView features.</p>
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing">
          <div className="layout-container">
            <div className="section-heading">
              <SectionLabel>STRAIGHTFORWARD PRICING</SectionLabel>
              <h2>One setup. One payment.</h2>
              <p>Everything in this service package for one clear price.</p>
            </div>
            <div className="pricing-card">
              <div className="pricing-top">
                <div>
                  <span className="plan-tag">LOVEVIEW BUSINESS LAUNCH</span>
                  <h3>Google Profile + Gemini setup assistance</h3>
                  <p>For one business location</p>
                </div>
                <div className="price-block"><strong>₹2,000</strong><span>One-time fee</span></div>
              </div>
              <div className="pricing-divider" />
              <div className="pricing-inclusions">
                {inclusions.map((item) => <div key={item}><CheckIcon />{item}</div>)}
              </div>
              <a className="button button-primary button-full button-large" href={inquiryUrl} target="_blank" rel="noreferrer">Request your business setup <ArrowIcon /></a>
              <p className="pricing-disclaimer">Google verification and feature eligibility are decided by Google. Search rankings and Gemini recommendations are not guaranteed.</p>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="layout-container faq-container">
            <div className="section-heading">
              <SectionLabel>COMMON QUESTIONS</SectionLabel>
              <h2>Before you get started.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}<span>+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-card layout-container">
            <SectionLabel>READY WHEN YOU ARE</SectionLabel>
            <h2>Make your business easier to find and understand.</h2>
            <p>Start with guided Google Business Profile setup assistance and receive your LoveView QR at no extra cost.</p>
            <a className="button button-white button-large" href={inquiryUrl} target="_blank" rel="noreferrer">Get started for ₹2,000 <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner layout-container">
          <div><Logo /><p>Practical Google Business Profile setup assistance for local businesses, with a LoveView customer feedback QR included.</p></div>
          <div className="footer-contact"><a href="mailto:hello@theloveview.com">hello@theloveview.com</a><span>Visakhapatnam, India</span><span>© {new Date().getFullYear()} LoveView. All rights reserved.</span></div>
        </div>
      </footer>
    </div>
  );
}
