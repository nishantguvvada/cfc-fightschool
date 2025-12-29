import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Team } from "./Team";
import { CreatorCarousel } from './CreatorCarousel';
import { FAQ } from "./FAQ";

export const Landing = () => {
    return (
        <>
            <div>
                <Navbar />
                <main className="flex-grow">
                    <Hero />
                    <Team/>
                    <CreatorCarousel/>
                    <FAQ/>
                </main>
            </div>
        </>
    )
}