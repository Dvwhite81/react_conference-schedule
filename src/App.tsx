import NavBar from './components/NavBar';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div className='app'>
      <NavBar isMobile={isMobile} />
    </div>
  );
}

export default App;
