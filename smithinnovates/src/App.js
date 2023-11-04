import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Home from './frontend/Home';
import Header from './frontend/Header';
import Login from './frontend/Login';
import Bookflight from './frontend/Bookflight';
import ChatBot from './frontend/Chatbot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/chatbot' element={(<> <Header /><ChatBot /></>)} />
      <Route path='/book-flight' element={(<> <Header /><Bookflight /></>)} />
      <Route path='/login' element={(<> <Header /><Login /></>)} />
        <Route path='/' element={(<> <Header /><Home /></>)} />
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
