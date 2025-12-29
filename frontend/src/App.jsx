import { Landing } from './components/Landing';
import { Trainer } from './components/Trainer';
import { Routes, Route } from 'react-router-dom';
import { TrainerLayout } from './components/TrainerLayout';
import { MainLayout } from './components/MainLayout';

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} /> */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route element={<TrainerLayout />}>
            <Route path="/trainer/:trainerId" element={<Trainer />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
