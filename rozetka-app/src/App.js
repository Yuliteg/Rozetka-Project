import { Home, Error } from './pages';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
     <Router>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='*' element={<Error />} />
        </Routes>
     </Router>
     </>
  );
}


export default App;
