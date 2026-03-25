'use client'

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* 🌌 Background */}
      <div className="fixed inset-0 flex justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-purple-600/20 blur-[140px] rounded-full mt-[-200px]" />
      </div>

      {/* 🧭 Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Nexus</h1>

          <div className="flex gap-6 text-sm text-gray-400">
            <button onClick={() => scrollTo('features')} className="hover:text-white">Features</button>
            <button onClick={() => scrollTo('cta')} className="hover:text-white">Get Started</button>
          </div>
        </div>
      </nav>

      {/* 🚀 Hero */}
      <section className="text-center px-6 pt-28 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Build without <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            limits.
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          A real modern website — built on your phone using GitHub and Vercel.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => scrollTo('cta')}
            className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 active:scale-95 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollTo('features')}
            className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Explore
          </button>
        </div>
      </section>

      {/* 📊 Features */}
      <section id="features" className="mt-32 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Blazing Fast",
            desc: "Instant deploys with global performance."
          },
          {
            title: "Modern UI",
            desc: "Actually looks like a real product."
          },
          {
            title: "Built on Mobile",
            desc: "You made this from your phone. Insane."
          }
        ].map((f, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}

      </section>

      {/* 💎 CTA */}
      <section id="cta" className="mt-32 text-center px-6 pb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to build something insane?
        </h2>

        <button
          onClick={() => alert('You clicked it 😏')}
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl font-medium hover:scale-105 active:scale-95 transition"
        >
          Start Now
        </button>
      </section>

      {/* 🪶 Footer */}
      <footer className="text-center text-gray-500 text-sm pb-10">
        Built with GitHub + Vercel 🚀
      </footer>

    </main>
  )
}