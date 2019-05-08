import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { ConfirmRemove, IConfirmRemove } from '../../any';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Component ConfirmRemove', () => {
  const confirmRemove = <ConfirmRemove name='test' remove={jest.fn()} />;
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(confirmRemove, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot', () => {
    const component = shallow(confirmRemove);
    expect(component).toMatchSnapshot();
  });
});
