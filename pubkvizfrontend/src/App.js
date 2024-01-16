import logo from './logo.svg';
import './App.css';
import Scoreboard from './components/Scoreboard';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage } from './components/RegisterPage';
import { LoginPage } from './components/LoginPage';
import { QuizEvents } from './components/QuizEvents';
import HomePage from './components/HomePage';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
       
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <LoginPage
             
            />
          }
        />
        <Route
          path="/register"
          element={<RegisterPage/>}
        />
       
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/events" element={<QuizEvents />} />
       
      </Routes>
      <Footer/>
      
    </BrowserRouter>

  );
}

export default App;
