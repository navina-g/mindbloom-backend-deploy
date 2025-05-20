// const MainLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <header className="bg-blue-600 text-white p-4">Mental Health App</header>
//       <main className="flex-1 p-4">{children}</main>
//       <footer className="bg-gray-200 text-center p-2">© 2025</footer>
//     </div>
//   );
// };

// export default MainLayout;
import './index.css'; // or App.css if that's where the animation lives

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200 text-gray-800 font-sans overflow-hidden">

      {/* Flower top-left */}
      <img
        src="/undraw_blooming_g9e9.svg"
        alt=""
        className="absolute top-8 left-4 w-32 opacity-20 pointer-events-none drift"
      />

      {/* Leaf top-right */}
      <img
        src="/undraw_fall_hngs.svg"
        alt=""
        className="absolute top-16 right-6 w-40 opacity-10 pointer-events-none"
      />

      {/* Flower bottom-right (rotated) */}
      <img
        src="/undraw_gardening_3tyw.svg"
        alt=""
        className="absolute bottom-8 right-0 w-48 opacity-15 rotate-45 pointer-events-none drift"
      />

      {/* Leaf bottom-left (flipped) */}
      <img
        src="/undraw_flowers_171u.svg"
        alt=""
        className="absolute bottom-0 left-8 w-56 opacity-10 scale-x-[-1] pointer-events-none"
      />

      {/* Page Content */}
      <header className="text-center py-6 z-10">
        <h1 className="text-3xl font-bold text-purple-800">🌸 MindBloom</h1>
        <p className="text-sm mt-2 text-gray-600 italic">
          You are enough. One breath at a time.
        </p>
      </header>

      <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-32 relative z-10">
        {children}
      </main>

      <footer className="bg-white/40 backdrop-blur-sm text-center text-sm text-gray-600 py-4 mt-8 rounded-t-xl shadow-inner relative z-10">
        © 2025 MindBloom. Bloom into your best self 🌱
      </footer>
    </div>
  );
};

export default MainLayout;