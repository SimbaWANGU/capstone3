import React from 'react';
import '../styles/HomePage.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import FootballItems from '../components/FootballItems';

function HomePage() {
  const scorers = useSelector((state) => state.topScorer);

  return (
    <>
      <Header title="Top Scorers" />
      <PageHeader />
      <div className="grid">
        {scorers.map((scorer) => (
          <NavLink className="link" key={scorer.id} to={`/details/scorer/${scorer.id}`}>
            <FootballItems
              id={scorer.id}
              name={scorer.name}
              goalsScored={scorer.goalsScored}
              photo={scorer.photo}
            />
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default HomePage;
