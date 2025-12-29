export const Footer = () => {
    return (
        <>
            <footer className="m-4">
                <div className="w-full text-slate-600 mx-auto max-w-screen-lg px-4 py-2 shadow-md rounded-md lg:px-8 lg:py-3 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-body sm:text-center">© 2025 <a href="#" className="hover:underline">fightschool™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}