import { useNavigate } from "react-router-dom";

export const CreatorCard = ({
  id,
  name,
  lastName,
  image,
  courses,
  videos,
  cta,
}) => {

  const navigate = useNavigate();

  return (
    <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
      {/* Image */}
      <img
        src={image}
        alt={`${name} ${lastName}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-semibold leading-tight">
          {name} <span className="font-bold">{lastName}</span>
        </h3>

        <div className="mt-2 text-sm opacity-90">
          <div>Full access</div>
          <ul className="flex gap-3 text-xs mt-1">
            <li>{courses} courses</li>
            {videos && <li>{videos} videos</li>}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <button onClick={() => navigate(`/trainer/${id}`)} className="w-full h-11 rounded-md bg-white text-slate-700 font-medium hover:bg-[#acfcc3ff] cursor-pointer transition">
            {cta}
          </button>
        </div>
      </div>

      {/* Full clickable layer (optional) */}
      {/* <a href="#" className="absolute inset-0 z-10" aria-label="Open creator" /> */}
    </div>
  );
}
