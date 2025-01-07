import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home, Add, Single } from './pages/Index';

const App: React.FC = () => {
  return (
    <>
      <header className="py-5 bg-slate-200 flex items-center justify-center gap-5">
        <Link className="font-bold text-[20px]" to={"/"}>Home</Link>
        <Link className="font-bold text-[20px]" to={"/add"}>Create</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/:id" element={<Single />} />
      </Routes>
    </>
  );
};

export default App;
