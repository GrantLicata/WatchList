import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/movieList" element={<MovieList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
