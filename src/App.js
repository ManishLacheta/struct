import React, {useState} from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtiles - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtiles - Light Mode';

    }

  }
  
  return (
    <>
    <Router>
      {/* <Navbar title ="TextUtiles" aboutText="About TextUtiles" /> */}
      <Navbar title ="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3" >
        <Routes>
          {/* use exact inside for better <Route exact path="********"> */}
          <Route path="/about" element={<About/>}/>       
          <Route path="/" element={
            <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode ={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
