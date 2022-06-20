/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/HomePage.scss';
import PageHeader from '../components/PageHeader';
import FootballItems from '../components/FootballItems';

function HomePage({ data }) {
  console.log(data);
  return (
    <>
      <PageHeader />
      <div className="grid">
        {data.map((comp) => (
          <FootballItems
            key={comp.league.id}
            name={comp.league.name}
            seasons={comp.seasons.length}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
