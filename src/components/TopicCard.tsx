import { Link } from "react-router-dom";

export default function TopicCard({ slug, title, description }: { slug: string; title: string; description: string }) {
  return (
<Link
  to={`/topics/${slug}`}
  // Use background-dark for contrast. Add subtle border and ring for depth.
  className="relative block p-6 rounded-2xl border border-border-subtle 
             bg-background-dark text-primary-text 
             hover:ring-2 hover:ring-accent-main transition-all duration-300 
             shadow-xl" // Add a base shadow
>
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p className="text-secondary-text text-base">{description}</p>
</Link>
  );
}
