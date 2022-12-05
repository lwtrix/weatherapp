import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import CityWeather from './components/CityWeatherDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CitiesList />}/>
          <Route path='/:cityName' element={<CityWeather />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
