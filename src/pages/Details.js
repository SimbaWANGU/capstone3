/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailsBody from '../components/DetailsBody';
import DetailsHeader from '../components/DetailsHeader';
import Header from '../components/Header';
import '../styles/Details.scss';

function Details() {
  // const selector = useSelector((state) => (state.topScorer));

  // const getScorerData = () => {
  //   const urlArray = window.location.href.split('/');
  //   const arrayLength = urlArray.length - 1;
  //   const scorer = selector.find((object) => object.id === parseInt(urlArray[arrayLength], 10));
  //   return scorer;
  // };

  // useEffect(() => {}, [getScorerData()]);

  // const scorerData = getScorerData();

  const scorerData = {
    appearances: 35,
    goalsScored: 23,
    id: 186,
    minutesPlayed: 3021,
    name: "Heung-Min Son",
    photo: "https://media.api-sports.io/football/players/186.png",
    rating: "7.505714",
    shotsOnTarget: 49,
    team: "Tottenham",
    totalShots: 69,
  };

  return (
    <div className="details">
      <Header />
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
