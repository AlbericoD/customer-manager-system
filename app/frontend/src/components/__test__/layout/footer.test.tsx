import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Footer } from '../../layout';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Component Footer', () => {
  let props = [{ href: 'test', text: 'test' }];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer links={props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot', () => {
    const component = shallow(<Footer links={props} />);
    expect(component).toMatchSnapshot();
  });
});
