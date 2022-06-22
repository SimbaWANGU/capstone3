/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import '../styles/Details.scss';

function Details() {
  const selector = useSelector((state) => (state.topScorer));

  const getScorerData = () => {
    const urlArray = window.location.href.split('/');
    const arrayLength = urlArray.length - 1;
    const scorer = selector.find((object) => object.id === parseInt(urlArray[arrayLength], 10));
    return scorer;
  };

  const scorerData = getScorerData();

  return (
    <>
      <Header />
      <div>Details</div>
    </>
  );
}

export default Details;
