export default function Page() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 pt-24 md:pt-28 lg:pt-32 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-neon-blue drop-shadow-glow" />
              <span className="text-xs text-white/80">Now live: The Next-Gen Digital Marketplace</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Trade Digital Goods with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue drop-shadow-pink"> Futuristic Elegance</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              Discover, buy, and sell high-quality digital assets with a sleek glassmorphism interface. Secure, fast, and delightful.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#explore" className="rounded-full px-6 py-3 bg-white/10 ring-1 ring-white/15 backdrop-blur-md hover:bg-white/15 transition border border-white/5">
                Explore Marketplace
              </a>
              <a href="#sell" className="rounded-full px-6 py-3 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue text-black font-semibold drop-shadow-glow">
                Start Selling
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-white/60">
              <span className="text-sm">Trusted by creators worldwide</span>
              <div className="flex -space-x-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-white/10 ring-2 ring-black/30 backdrop-blur-md" />
                ))}
              </div>
            </div>
          </div>

          {/* Glass product preview card */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-neon-pink/10 via-neon-purple/10 to-neon-blue/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold">Featured Bundle</h3>
                  <p className="text-white/70 text-sm mt-1 max-w-sm">UI kits, icons, and animations curated for modern digital products.</p>
                </div>
                <span className="rounded-full px-3 py-1 text-xs bg-white/10 ring-1 ring-white/15">Top Seller</span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white/15 to-white/5 ring-1 ring-white/10" />
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/70">Starting at</p>
                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-pink">$29</p>
                </div>
                <button className="rounded-full px-5 py-2.5 bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">Add to Cart</button>
              </div>
            </div>

            {/* floating orbs */}
            <div className="absolute -top-10 -right-6 h-24 w-24 rounded-full bg-neon-pink/40 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-neon-blue/40 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="explore" className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Explore Categories</h2>
            <a className="text-sm text-neon-blue" href="#">View all</a>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "UI Kits",
              "Icons",
              "3D Models",
              "Illustrations",
              "Templates",
              "Animations",
            ].map((name) => (
              <a
                key={name}
                className="group rounded-2xl p-4 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition backdrop-blur-md"
                href="#"
              >
                <div className="aspect-square rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10" />
                <p className="mt-3 text-sm text-white/80 group-hover:text-white">{name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="sell" className="px-6 md:px-10 lg:px-16 pb-28">
        <div className="mx-auto max-w-6xl relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 via-neon-purple/10 to-neon-pink/20 blur-2xl rounded-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Sell your digital products with zero friction
                </h3>
                <p className="text-white/75 mt-2 max-w-2xl">
                  Upload, manage licenses, and get paid instantly. Analytics and customer management included.
                </p>
              </div>
              <div className="flex md:justify-end">
                <a className="rounded-full px-6 py-3 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-black font-semibold drop-shadow-glow" href="#">
                  Open a Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 lg:px-16 pb-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
          <p className="text-sm">? {new Date().getFullYear()} NeonGlass Market</p>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
