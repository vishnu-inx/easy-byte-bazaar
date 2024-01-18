import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow container mx-auto my-16 text-center overflow-y-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
