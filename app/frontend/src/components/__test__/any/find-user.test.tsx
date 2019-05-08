import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { FindUser } from '../../any';
import { store } from '../../../store';
Enzyme.configure({
  adapter: new Adapter()
});

describe('Component FindUser', () => {
  const finduser = (
    <Provider store={store}>
      <FindUser />
    </Provider>
  );
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(finduser, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot', () => {
    const component = shallow(finduser, { context: { store } });
    expect(component).toMatchSnapshot();
  });
});
