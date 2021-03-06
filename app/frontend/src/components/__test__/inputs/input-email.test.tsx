import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { Email } from '../../inputs';
import { store } from '../../../store';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Component Email', () => {
  const createUser = (
    <Provider store={store}>
      <Email />
    </Provider>
  );
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(createUser, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot', () => {
    const component = shallow(createUser);
    expect(component).toMatchSnapshot();
  });
});
