import React from 'react';
import '../styles/HomePage.scss';
import PageHeader from '../components/PageHeader';
import FootballItems from '../components/FootballItems';

function HomePage() {
  return (
    <>
      <PageHeader />
      <div className="grid">
        <FootballItems />
        <FootballItems />
        <FootballItems />
        <FootballItems />
      </div>
    </>
  );
}

export default HomePage;
