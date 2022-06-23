import React from 'react';
import '../styles/PageHeader.scss';

function PageHeader() {
  return (
    <div className="pageHeader" data-testid="pageHeaderDisplay">
      <h1>Premier League</h1>
      <p>Top Scorers 2021/22</p>
    </div>
  );
}

export default PageHeader;
