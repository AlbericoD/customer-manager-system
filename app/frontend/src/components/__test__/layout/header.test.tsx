import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Header, IHeader } from '../../layout';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Component Header', () => {
  let props: IHeader = { appName: 'test', brand: 'test' };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot', () => {
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });
});
