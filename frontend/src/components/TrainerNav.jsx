import navbarImage from "../assets/navbar-image.jpg";

export const TrainerNav = () => {
    return (
        <nav className="w-full ">
        {/* Wrapper enforces rendered size */}
        <div className="flex md:hidden items-center justify-around px-4 h-16 bg-black">
            <a
            href="/"
            className="text-white text-lg font-semibold"
            >
            fightschool
            </a>

            <ul className="flex gap-4 text-white text-sm">
            <li>
                <a href="/" className="hover:text-[#acfcc3ff] transition">
                Home
                </a>
            </li>
            <li>
                <a href="/" className="hover:text-[#acfcc3ff] transition">
                Trainers
                </a>
            </li>
            </ul>
        </div>

        <div className="relative hidden md:block w-full h-64">
            {/* Navbar Image */}
            <img
            src={navbarImage}
            alt="Navbar"
            className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
            <div className="absolute inset-0 flex justify-around px-12 py-8">
            {/* Brand / Logo */}
            <a href="/" className="mr-4 block cursor-pointer py-1.5 text-xl text-white text-slate-700 font-semibold hover:text-[#acfcc3ff] transition delay-300 duration-300 ease-in-out">
                fightschool
            </a>

            {/* Navigation Links */}
            <ul className="flex gap-10 text-white font-medium">
                <li className="cursor-pointer hover:underline">
                    <a href="/" className="flex items-center">
                        Home
                    </a>
                </li>
                <li className="cursor-pointer hover:underline">
                    <a href="/" className="flex items-center">
                        Trainers
                    </a>
                </li>
                <li className="cursor-pointer hover:underline">
                    <a href="/" className="flex items-center">
                        Contact Us
                    </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};
