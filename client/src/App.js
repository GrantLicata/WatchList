import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import OneMovie from './components/OneMovie';
import EditForm from './components/EditForm';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Form/>}/>
          <Route path="/movieList" element={<MovieList/>}/>
          <Route path="/oneMovie/:id" element={<OneMovie/>} />
          <Route path="/edit/:id" element={<EditForm/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
