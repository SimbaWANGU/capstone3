import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DetailsHeader from '../components/DetailsHeader';

describe('Details page header section tests', () => {
  const testData = {
    photo: 'https://photo.example.com',
    name: 'Example',
    team: 'Example FC',
  };

  it('Component renders as expected', () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DetailsHeader photo={testData.photo} name={testData.name} team={testData.team} />
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
          <DetailsHeader photo={testData.photo} name={testData.name} team={testData.team} />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByTestId('detailsHeaderDisplay')).toBeInTheDocument();
  });
});
