import { useParams } from "react-router-dom";
import { useEffect } from "react";
import creators from "../data/creators";
import trainingVideos from "../data/training";

export const Trainer = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const { trainerId } = useParams();

    const trainer = creators.find((c) => c.id == trainerId);
    
    const videos = trainingVideos[trainerId] || [];

    return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Trainer Info */}
      <h1 className="mt-8 text-3xl hover:text-[#acfcc3ff] cursor-pointer text-slate-600 font-bold dark:text-slate-100">{trainer.name} {trainer.lastName}</h1>

      {/* Videos Section */}
      <div className="mt-10">
        <ul className="flex items-center gap-8 pt-8">
          <li className="flex items-center gap-2 cursor-pointer hover:underline hover:decoration-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-slate-600 dark:text-slate-100"
              >
                {/* Video Frame */}
                <rect x="2" y="5" width="20" height="16" rx="2" ry="2" />

                {/* Play Symbol */}
                <polygon points="10 9 15 12 10 15" fill="currentColor" stroke="none" />
              </svg>
            <p className="text-slate-800 dark:text-slate-100">
              Course Videos ({videos.length})
            </p>
          </li>

          <li className="flex items-center gap-2 cursor-pointer hover:underline hover:decoration-slate-400">
            {/* <DocumentTextIcon className="w-6 h-6 text-slate-600" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-slate-600 dark:text-slate-100"
            >
              {/* Outer Circle */}
              <circle cx="12" cy="12" r="9" />

              {/* Dot of the "i" */}
              <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />

              {/* Stem of the "i" */}
              <line x1="12" y1="11" x2="12" y2="16" />
            </svg>
            <p className="text-slate-800 dark:text-slate-100">
              About
            </p>
          </li>
        </ul>
        <div className="w-full h-px bg-gray-300 my-2" />

        {videos.length === 0 ? (
          <p className="text-slate-800">No videos available for this course.</p>
        ) : (
          <div className="space-y-4">
            {videos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => { console.log(index)}}
                className="border-b border-slate-200 p-4 hover:shadow hover:bg-slate-100 cursor-pointer transition dark:hover:bg-slate-400"
              >
                <div className="flex flex-row items-start gap-4">
                  <span>
                    <img className="rounded-lg" src={video.thumbnail}/>
                  </span>

                  <div>
                    <h3 className="font-semibold text-slate-600 dark:text-slate-100">
                      {video.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-8 dark:text-slate-100">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}