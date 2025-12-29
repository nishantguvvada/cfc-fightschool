import { CreatorCard } from "./CreatorCard";
import creators from "../data/creators";

export const CreatorCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {creators.map((creator, i) => (
          <li key={i}>
            <CreatorCard {...creator} />
          </li>
        ))}
      </ul>
    </div>
  );
}
