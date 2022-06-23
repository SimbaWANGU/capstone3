import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import FootballItems from '../components/FootballItems';

describe('Home page body section tests', () => {
  const testData = {
    photo: 'https://photo.example.com',
    name: 'Example',
    id: 1,
    goalsScored: 5,
  };

  it('Component renders as expected', () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <FootballItems
            photo={testData.photo}
            name={testData.name}
            id={testData.id}
            goalsScored={testData.goalsScored}
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
          <FootballItems
            photo={testData.photo}
            name={testData.name}
            id={testData.id}
            goalsScored={testData.goalsScored}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByTestId('footballItemDisplay')).toBeInTheDocument();
  });
});
