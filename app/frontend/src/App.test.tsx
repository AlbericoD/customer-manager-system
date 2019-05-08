import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { store } from './store';
import App from './App';
Enzyme.configure({
  adapter: new Adapter()
});
describe('Component App', () => {
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot ', () => {
    const component = shallow(app);
    expect(component).toMatchSnapshot();
  });
});
