import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-techno' element={<TechnoAdd />} />
                <Route path='/all-techno' element={<TechnoList />} />
            </Routes>
        </div>
    );
};

export default App;