import React from 'react';
import '../styles/HomePage.scss';
import { useSelector } from 'react-redux';
import PageHeader from '../components/PageHeader';
import FootballItems from '../components/FootballItems';

function HomePage() {
  const scorers = useSelector((state) => state.topScorer);

  return (
    <>
      <PageHeader />
      <div className="grid">
        {scorers.map((scorer) => (
          <FootballItems
            key={scorer.id}
            id={scorer.id}
            name={scorer.name}
            goalsScored={scorer.goalsScored}
            photo={scorer.photo}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
