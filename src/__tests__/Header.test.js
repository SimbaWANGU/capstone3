import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/Header';

it('Renders correctly', () => {
  const component = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Header title="testing" />
      </BrowserRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
