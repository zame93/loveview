

export default function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-indigo-600">
            LoveView
          </h1>

          <div className="hidden md:flex gap-8 text-slate-600">
            <a href="#features">Features</a>
<a href="#pricing">Pricing</a>
<a href="#industries">Industries</a>
<a href="#contact">Contact</a>
</div>
          <a
  href="https://forms.gle/C9pJwNvVt4EM8trF9"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 transition"
>
  Book Demo
</a>

        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-6 pb-16">

        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">

          <div>

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm text-indigo-700">
              Reputation & Retention Management
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
  Get More Reviews.
  <br />
  Recover Unhappy Customers.
  <br />
  <span className="text-indigo-600">
    Grow Repeat Business.
  </span>
</h1>

            <p className="mt-6 text-xl text-slate-600">
              Capture feedback first, route happy customers to Google Reviews,
              and recover unhappy customers before they're lost forever.
            </p>

            <div className="mt-8 flex gap-4">
              <a
  href="https://forms.gle/C9pJwNvVt4EM8trF9"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition"
>
  Book Demo
</a>

              <button className="rounded-lg border border-slate-300 px-6 py-3">
                See Live Demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>✓ More Reviews</span>
              <span>✓ Better Ratings</span>
              <span>✓ Repeat Customers</span>
              <span>✓ Multi-Location Ready</span>
            </div>

          </div>

          <div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">

  <div className="flex items-center justify-between">
    <h3 className="font-bold text-lg">
      LoveView Dashboard
    </h3>

    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
      Live
    </span>
  </div>

  <div className="mt-8 grid grid-cols-2 gap-4">

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-indigo-600">
        4.8
      </div>
      <div className="text-sm text-slate-500">
        Average Rating
      </div>
    </div>

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-indigo-600">
        482
      </div>
      <div className="text-sm text-slate-500">
        Reviews
      </div>
    </div>

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-green-600">
        92%
      </div>
      <div className="text-sm text-slate-500">
        Satisfaction
      </div>
    </div>

    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-3xl font-bold text-violet-600">
        134
      </div>
      <div className="text-sm text-slate-500">
        Recovered
      </div>
    </div>

  </div>

  <div className="mt-8 rounded-xl bg-slate-50 p-5">
    <div className="text-sm font-semibold text-slate-700">
      Recent Reviews
    </div>

    <div className="mt-4 space-y-3">

      <div className="flex justify-between">
        <span>⭐⭐⭐⭐⭐ Amazing food & service</span>
        <span className="text-green-600">Posted</span>
      </div>

      <div className="flex justify-between">
        <span>⭐⭐⭐⭐ Great customer experience</span>
        <span className="text-green-600">Posted</span>
      </div>

      <div className="flex justify-between">
        <span>⭐⭐ Slow delivery issue</span>
        <span className="text-orange-500">Private Feedback</span>
      </div>

    </div>
  </div>

</div>
          </div>
        </div>

        </section>

<section className="border-t border-slate-200 py-20">
  <div className="mx-auto max-w-6xl px-6">
    <h2 className="text-center text-3xl font-bold">
      Trusted by Growth-Focused Businesses
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-4">

      <div className="rounded-2xl border p-6">
        <div className="text-4xl font-bold text-indigo-600">4.8</div>
        <div>Average Rating</div>
      </div>

      <div className="rounded-2xl border p-6">
        <div className="text-4xl font-bold text-indigo-600">482</div>
        <div>Reviews Generated</div>
      </div>

      <div className="rounded-2xl border p-6">
        <div className="text-4xl font-bold text-indigo-600">92%</div>
        <div>Satisfaction</div>
      </div>

      <div className="rounded-2xl border p-6">
        <div className="text-4xl font-bold text-indigo-600">134</div>
        <div>Recovered Customers</div>
      </div>

    </div>
  </div>
</section>
<section className="py-16 bg-slate-50">
  <div className="mx-auto max-w-6xl px-6">

    <h2 className="text-center text-4xl font-bold">
      From Visit To Repeat Customer In 3 Steps
    </h2>

    <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
      LoveLink captures customer sentiment before it becomes public and routes every customer to the right next step.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-3">

      <div className="rounded-2xl border bg-white p-8">
        <div className="text-sm font-semibold text-indigo-600">
          STEP 1
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Customer Visits
        </h3>

        <p className="mt-3 text-slate-600">
          Customer scans a QR code or receives a review request link.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-8">
        <div className="text-sm font-semibold text-indigo-600">
          STEP 2
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Customer Rates Experience
        </h3>

        <p className="mt-3 text-slate-600">
          LoveView captures feedback privately before it reaches Google.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-8">
        <div className="text-sm font-semibold text-indigo-600">
          STEP 3
        </div>

        <h3 className="mt-4 text-2xl font-bold">
          Smart Routing
        </h3>

        <p className="mt-3 text-slate-600">
          Happy customers go to Google Reviews. Unhappy customers enter LoveBack recovery.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-16 bg-indigo-600 text-white">
  <div className="mx-auto max-w-6xl px-6">

    <div className="grid items-center gap-12 lg:grid-cols-2">

      <div>
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
          LoveBack™ Recovery System
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">
          Recover Customers Before They Leave For Good
        </h2>

        <p className="mt-6 text-xl text-indigo-100">
          LoveBack automatically identifies unhappy customers and launches
          recovery workflows before negative experiences become public.
        </p>

        <div className="mt-10 space-y-4">

          <div className="flex gap-3">
            <span>✓</span>
            <span>Instant Alerts</span>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <span>Recovery Offers</span>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <span>Retention Campaigns</span>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <span>Customer Win-Back Automation</span>
          </div>

        </div>
      </div>

      <div>

        <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">

          <h3 className="font-bold text-xl">
            Recovery Dashboard
          </h3>

          <div className="mt-8 space-y-4">

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              Customer unhappy → Offer sent
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              Recovery rate: 38%
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              Revenue recovered: $2,540
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
<section className="py-16 bg-white">
  <div className="mx-auto max-w-6xl px-6 text-center">

    <h2 className="text-5xl font-bold">
      What 500 Customers Per Month Could Mean
    </h2>

    <p className="mt-6 text-xl text-slate-600">
      Small improvements in reputation create measurable revenue growth.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-4">

      <div className="rounded-2xl border p-8">
        <div className="text-4xl font-bold text-indigo-600">
          50+
        </div>
        <div className="mt-2">
          New Reviews
        </div>
      </div>

      <div className="rounded-2xl border p-8">
        <div className="text-4xl font-bold text-indigo-600">
          15+
        </div>
        <div className="mt-2">
          Recovered Customers
        </div>
      </div>

      <div className="rounded-2xl border p-8">
        <div className="text-4xl font-bold text-indigo-600">
          Higher
        </div>
        <div className="mt-2">
          Local Rankings
        </div>
      </div>

      <div className="rounded-2xl border p-8">
        <div className="text-4xl font-bold text-indigo-600">
          More
        </div>
        <div className="mt-2">
          Bookings
        </div>
      </div>

    </div>

    <div className="mt-16 rounded-3xl bg-indigo-600 p-12 text-white">

      <div className="text-lg">
        Potential Revenue Recovered
      </div>

      <div className="mt-4 text-6xl font-bold">
        $2,500+
      </div>

      <div className="mt-2 text-indigo-100">
        Every Month
      </div>

    </div>

  </div>
</section>

<section id="features" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-14">
      <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
        Why LoveView
      </span>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        Why Businesses Choose LoveView
      </h2>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Built for busy local businesses that want more reviews,
        better customer insights, and repeat customers.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
        <div className="text-3xl mb-4">📱</div>
        <h3 className="text-xl font-semibold mb-2">
          No App Required
        </h3>
        <p className="text-gray-600">
          Customers simply scan a QR code and share feedback instantly.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
        <div className="text-3xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-2">
          2-Minute Setup
        </h3>
        <p className="text-gray-600">
          Launch your LoveLink, LoveBack, and dashboard in minutes.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
        <div className="text-3xl mb-4">🛡️</div>
        <h3 className="text-xl font-semibold mb-2">
          Capture Private Feedback
        </h3>
        <p className="text-gray-600">
          Unhappy customers share concerns privately before posting public reviews.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
        <div className="text-3xl mb-4">⭐</div>
        <h3 className="text-xl font-semibold mb-2">
          Generate More Reviews
        </h3>
        <p className="text-gray-600">
          Guide satisfied customers directly to your Google review page.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
        <div className="text-3xl mb-4">🎁</div>
        <h3 className="text-xl font-semibold mb-2">
          Reward Customer Loyalty
        </h3>
        <p className="text-gray-600">
          Offer discounts, freebies, and rewards that encourage repeat visits.
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
        <div className="text-3xl mb-4">📊</div>
        <h3 className="text-xl font-semibold mb-2">
          Actionable Insights
        </h3>
        <p className="text-gray-600">
          See trends, common complaints, and customer satisfaction in one dashboard.
        </p>
      </div>

    </div>

    <div className="mt-12 flex flex-wrap justify-center gap-4">
      <div className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
        ✓ No App Required
      </div>

      <div className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
        ✓ Setup In Minutes
      </div>

      <div className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
        ✓ Mobile Friendly
      </div>

      <div className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium">
        ✓ Works With Existing Workflow
      </div>
    </div>

  </div>
</section>
<section id="industries" className="py-16 bg-slate-50">
  <div className="mx-auto max-w-6xl px-6">

    <h2 className="text-center text-5xl font-bold">
      Built For Local Businesses
    </h2>

    <p className="mt-6 text-center text-xl text-slate-600">
      LoveView helps local businesses generate more reviews, recover unhappy customers, and grow repeat revenue.
    </p>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">🍽️</div>
        <h3 className="mt-4 font-bold">Restaurants</h3>
      </div>

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">☕</div>
        <h3 className="mt-4 font-bold">Cafes</h3>
      </div>

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">💇</div>
        <h3 className="mt-4 font-bold">Salons</h3>
      </div>

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">🏥</div>
        <h3 className="mt-4 font-bold">Clinics</h3>
      </div>

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">🏨</div>
        <h3 className="mt-4 font-bold">Hotels</h3>
      </div>

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">🏋️</div>
        <h3 className="mt-4 font-bold">Gyms</h3>
      </div>

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">🛍️</div>
        <h3 className="mt-4 font-bold">Retail</h3>
      </div>

      <div className="rounded-2xl border bg-white p-4 text-center shadow-sm">
        <div className="text-5xl">🔧</div>
        <h3 className="mt-4 font-bold">Service Businesses</h3>
      </div>

    </div>

  </div>
</section>
<section id="features" className="py-16">
  <div className="mx-auto max-w-6xl px-6">

    <h2 className="text-center text-5xl font-bold">
      Everything You Need To Grow Reviews
    </h2>

    <p className="mt-6 text-center text-xl text-slate-600">
      Powerful tools to generate reviews, recover customers, and grow revenue.
    </p>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div className="text-5xl">⭐</div>
        <h3 className="mt-4 text-xl font-bold">
          Review Generation
        </h3>
        <p className="mt-3 text-slate-600">
          Turn happy customers into public Google reviews automatically.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div className="text-5xl">💜</div>
        <h3 className="mt-4 text-xl font-bold">
          Customer Recovery
        </h3>
        <p className="mt-3 text-slate-600">
          Capture unhappy customers before negative reviews go public.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div className="text-5xl">📊</div>
        <h3 className="mt-4 text-xl font-bold">
          Dashboard Reporting
        </h3>
        <p className="mt-3 text-slate-600">
          Track reviews, satisfaction scores, and customer recovery metrics.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div className="text-5xl">📍</div>
        <h3 className="mt-4 text-xl font-bold">
          Multi-Location Support
        </h3>
        <p className="mt-3 text-slate-600">
          Manage multiple locations from one central dashboard.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div className="text-5xl">🎁</div>
        <h3 className="mt-4 text-xl font-bold">
          Offer Campaigns
        </h3>
        <p className="mt-3 text-slate-600">
          Win back unhappy customers using targeted recovery offers.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
        <div className="text-5xl">📱</div>
        <h3 className="mt-4 text-xl font-bold">
          QR Review Requests
        </h3>
        <p className="mt-3 text-slate-600">
          Collect customer feedback instantly using QR codes and links.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
  <div className="mx-auto max-w-4xl px-6 text-center">

    <h2 className="text-5xl font-bold">
      Ready To Get More Reviews?
    </h2>

    <p className="mt-6 text-xl text-indigo-100">
      Turn happy customers into public reviews and recover unhappy customers before they leave.
    </p>

    <a
  href="https://forms.gle/C9pJwNvVt4EM8trF9"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center mt-10 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-indigo-600 shadow-lg transition hover:scale-105"
>
  Book Demo
</a>
<p className="mt-4 text-sm text-indigo-100">
  No contracts • Setup in minutes • Multi-location ready
</p>
  </div>
</section>
<footer id="contact" className="border-t bg-slate-950 text-white">
  <div className="mx-auto max-w-6xl px-6 py-16">

    <div className="grid gap-12 md:md:grid-cols-3 gap-12">

      <div>
        <h3 className="text-2xl font-bold text-indigo-400">
          LoveView
        </h3>

        <p className="mt-4 text-slate-400">
          Turn happy customers into more reviews and recover unhappy customers before they leave.
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          Product
        </h4>

        <ul className="mt-4 space-y-2 text-slate-400">
          <li>Review Generation</li>
          <li>Customer Recovery</li>
          <li>Dashboard Reporting</li>
          <li>QR Feedback</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">
          Contact
        </h4>

        <ul className="mt-4 space-y-2 text-slate-400">
          <li>hello@loveview.com</li>
          <li>
  <a
    href="https://forms.gle/C9pJwNvVt4EM8trF9"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Book a Demo
  </a>
</li>
          <li>Visakhapatnam, India</li>
        </ul>
      </div>

    </div>

    <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      © 2026 LoveView. All rights reserved.
    </div>

  </div>
</footer>
</div>
)
}
