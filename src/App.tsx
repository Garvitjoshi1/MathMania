import { Routes, Route, Link } from "react-router-dom"; 
import TopicPage from "./pages/topics"; 

function Home() {
  const topics = [
    { slug: "calculus/derivative", name: "Derivatives" },
    { slug: "trig", name: "Trigonometry" },
    { slug: "eigen", name: "Eigenvalues" },
  ];

  return (
  // Apply bg-background-dark (or rely on body style) and text color for safety
  <div className="min-h-screen flex flex-col items-center justify-center text-center">
    {/* Apply the custom font style and color classes */}
    <h1 className="text-6xl font-extrabold tracking-tight mb-12 text-primary-text"> 
        Interactive Math Explorer
    </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-4xl px-8">
        {topics.map((t) => (
          <Link
  key={t.slug}
  to={`/topics/${t.slug}`}
  className="px-8 py-6 border border-border-subtle rounded-2xl
             bg-background-dark text-primary-text 
             hover:ring-2 hover:ring-accent-main hover:scale-[1.02] 
             transition-all duration-300 shadow-xl"
>
  <h3 className="text-xl font-semibold">{t.name}</h3>
</Link>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:slug" element={<TopicPage />} /> 
        <Route path="*" element={<div className="text-center py-40 text-4xl font-bold">404 | Page Not Found</div>} />
      </Routes>
  );
}

export default App;