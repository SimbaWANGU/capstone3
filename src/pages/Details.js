import React from 'react';
import { useSelector } from 'react-redux';
import DetailsBody from '../components/DetailsBody';
import DetailsHeader from '../components/DetailsHeader';
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
    <div className="details">
      <Header title={scorerData.name} />
      <DetailsHeader
        name={scorerData.name}
        photo={scorerData.photo}
        team={scorerData.team}
      />
      <DetailsBody
        rating={scorerData.rating}
        appearances={scorerData.appearances}
        goalsScored={scorerData.goalsScored}
        minutesPlayed={scorerData.minutesPlayed}
        totalShots={scorerData.totalShots}
        shotsOnTarget={scorerData.shotsOnTarget}
      />
    </div>
  );
}

export default Details;
