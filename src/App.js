import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import fetchFootball from './api/fetchFootball';
import './App.scss';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import { getScorers } from './redux/topScorers/topScorers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function data() {
      const scorers = await fetchFootball();
      dispatch(getScorers(scorers));
    }
    data();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
