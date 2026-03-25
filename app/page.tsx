export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Nexus UI 🚀
      </h1>

      <p className="text-gray-400 text-center max-w-lg mb-8">
        You just deployed a modern site using GitHub + Vercel on mobile.
        Now let’s make it beautiful.
      </p>

      <button className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
        Get Started
      </button>
    </main>
  );
}