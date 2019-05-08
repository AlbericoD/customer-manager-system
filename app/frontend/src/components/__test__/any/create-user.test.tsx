import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { CreateUser } from '../../any';
import { store } from '../../../store';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Component CreateUser', () => {
  const createUser = (
    <Provider store={store}>
      <CreateUser />
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
