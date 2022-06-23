import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DetailsBody from '../components/DetailsBody';

describe('Details page body section tests', () => {
  const testData = {
    rating: 6,
    appearances: 10,
    goalsScored: 1,
    minutesPlayed: 1000,
    totalShots: 10,
    shotsOnTarget: 4,
  };

  it('Component renders as expected', () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DetailsBody
            rating={testData.rating}
            appearances={testData.appearances}
            goalsScored={testData.goalsScored}
            minutesPlayed={testData.minutesPlayed}
            totalShots={testData.totalShots}
            shotsOnTarget={testData.shotsOnTarget}
          />
        </BrowserRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Component is visible to the user', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DetailsBody
            rating={testData.rating}
            appearances={testData.appearances}
            goalsScored={testData.goalsScored}
            minutesPlayed={testData.minutesPlayed}
            totalShots={testData.totalShots}
            shotsOnTarget={testData.shotsOnTarget}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByTestId('detailsBodyDisplay')).toBeInTheDocument();
  });
});
