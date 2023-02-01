import { Home, Error } from './pages';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGetProductsQuery } from './store/slices/apiGoodsSlice';

function App() {
  const { data, error, isLoading, isError } = useGetProductsQuery();

  return (
    <>
     <Router>
        <Navbar />
      <Routes>
        <Route exact path='/' element={<Home goods={data} isLoading={isLoading} isError={isError}/>} />
        <Route exact path='*' element={<Error />} />
        </Routes>
     </Router>
     </>
  );
}


export default App;
