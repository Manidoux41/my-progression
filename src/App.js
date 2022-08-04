import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

const App = () => {

    const [technos, setTechnos] = useState([]);

    const handleAddTechno = (techno) => {
        console.log('handleAddTechno', techno);
    }

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<TechnoAdd handleAddTechno={handleAddTechno}/>} />
                <Route path='/list' element={<TechnoList />} />
            </Routes>
        </div>
    );
};

export default App;