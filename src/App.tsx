import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from "./components/Login"
import awsExports from './aws-exports';
import './App.css';

export default function App() {
  Amplify.configure({
      Auth: {
          region: awsExports.REGION,
          userPoolId: awsExports.USER_POOL_ID,
          userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
      }
  })

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // Calculate the maximum width for the center content
  const maxCenterWidth = 800; // You can adjust this value as per your requirement

  // Calculate the width for the center content based on window width
  const centerWidth = Math.min(windowSize[0], maxCenterWidth);

  return (
      <div className="App" style={{ width: centerWidth }}>
        <Navbar />
        <div className='content'>
        <Router>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
        </div>
      </div>
  );
}