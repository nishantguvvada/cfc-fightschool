import landingVideo from '../assets/landing.mp4';
import landingPoster from '../assets/about-image.jpg'

export const Hero = () => {
    return (
        <>
            <div>
                <main className="flex flex-col max-md:gap-20 md:flex-row pb-8 items-center justify-center mt-18 px-4 md:px-16 lg:px-24 xl:px-32">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-slate-700 saturate-[175%] antialiased tracking-tight hover:text-[#acfcc3ff] transition delay-300 duration-300 ease-in-out cursor-pointer text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl">
                            fightschool™ 
                        </h1>
                        <h2 className="text-center md:text-left text-3xl text-slate-700 max-w-lg mt-2">
                            Plan, personalize and optimize your game.
                        </h2>
                        <div className="flex items-center gap-4 mt-8 text-sm">
                            <button className="hover:bg-slate-100 text-slate-400 shadow-md active:scale-95 transition rounded-md px-7 h-11 hover:cursor-pointer">
                                Register
                            </button>
                            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 transition text-slate-600 rounded-md px-6 h-11 hover:cursor-pointer hover:bg-[#acfcc3ff]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                                <span>Watch demo</span>
                            </button>
                        </div>
                        <p className="text-center md:text-left text-sm text-slate-400 max-w-lg mt-2">
                            By registering, you agree with our<br/>
                            Terms and Conditions and Privacy Policy
                        </p>
                    </div>
                    <video className="border rounded-xl
                        w-[350px]
                        aspect-[350/460]
                        object-cover" 
                    poster={landingPoster} controls>
                        <source src={landingVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </main>
            </div>
        </>
    )
}