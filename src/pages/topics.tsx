// src/pages/topics.tsx (Final Correction)

import { useParams } from "react-router-dom";
import React, { Suspense } from "react";
// 👇 FIX: Import the HeroCanvas component from its location
import HeroCanvas from "../components/HeroCanvas"; 


export default function TopicPage() {
  const { slug } = useParams<{ slug: string }>();

  // Fallback to prevent errors if slug is undefined during initial render
  if (!slug) {
      return <div className="text-center py-20 text-secondary-text">Topic not found or invalid URL structure.</div>;
  }
  
  // Use the single 'slug' parameter directly for the dynamic import
  const Content = React.lazy(() =>
    // 🛑 FIX: Use the ABSOLUTE ALIAS (@/) and include the .mdx extension directly
    // This provides a clear, consistent path for Vite to bundle.
    import(`@/content/${slug}.mdx`).catch((e) => {
        console.error("Failed to load MDX:", e);
        // This fallback remains correct assuming the file was created.
        return import("@/content/404.mdx"); 
    })
  );

  return (
    // Adjusting padding and max-width for Apple-style spaciousness
    <div className="min-h-screen px-4 md:px-8 py-16 max-w-6xl mx-auto">
      
      {/* Display the Hero Canvas here for visual impact */}
      <HeroCanvas /> 

      <Suspense fallback={<p className="text-center py-10 text-accent-main">Loading the topic...</p>}>
        {/* Render the dynamically loaded MDX content */}
        <Content />
      </Suspense>
    </div>
  );
}