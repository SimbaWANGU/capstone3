import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchFootball from './api/fetchFootball';
import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
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
      <Header />
      <HomePage />
    </>
  );
}

export default App;
