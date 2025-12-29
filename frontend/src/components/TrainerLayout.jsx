import { TrainerNav } from './TrainerNav';
import { Outlet } from 'react-router-dom';

export const TrainerLayout = () => {
    return (
        <>
            <TrainerNav />
            <main>
                <Outlet />
            </main>
        </>
    )
}