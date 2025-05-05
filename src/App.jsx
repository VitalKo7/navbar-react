import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen relative bg-[url('/src/assets/seascape.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-slate-600 before:opacity-50">
        <div className="z-50 relative  text-white text-center p-10">
          <h1 className="text-4xl font-bold">Welcome to seascapes</h1>
        </div>
      </div>
    </>
  );
}

export default App;
