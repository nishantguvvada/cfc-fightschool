import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <>
            <main className="flex flex-col min-h-screen">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}