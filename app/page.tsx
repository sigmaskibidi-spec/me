export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-purple-600/20 blur-[140px] rounded-full mt-[-200px]" />
      </div>

      {/* 🧭 Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-tight">Nexus</h1>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Product</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Docs</a>
        </div>
      </nav>

      {/* 🚀 Hero */}
      <section className="relative z-10 text-center px-6 mt-20 max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Build without <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            limits.
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          A modern platform to build, deploy, and scale your ideas — directly from your phone.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white/10 transition">
            Live Demo
          </button>
        </div>
      </section>

      {/* 📊 Features */}
      <section className="relative z-10 mt-32 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Blazing Fast",
            desc: "Deploy instantly with global edge performance."
          },
          {
            title: "Modern UI",
            desc: "Clean, aesthetic design that actually looks premium."
          },
          {
            title: "Mobile Built",
            desc: "Yes, you literally built this from your phone."
          }
        ].map((f, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </div>
        ))}

      </section>

      {/* 💎 CTA */}
      <section className="relative z-10 mt-32 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to build something insane?
        </h2>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-xl font-medium hover:scale-105 transition">
          Start Now
        </button>
      </section>

      {/* 🪶 Footer */}
      <footer className="relative z-10 mt-32 py-10 text-center text-gray-500 text-sm">
        Built with GitHub + Vercel 🚀
      </footer>

    </main>
  );
}