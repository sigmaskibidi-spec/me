export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      
      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-1/4"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Build without <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            limits.
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          A modern website built entirely on your phone using GitHub and Vercel.
          Clean. Fast. Powerful.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-xl hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}