import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { MenuAction, IMenuAction } from '../../any';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Component MenuAction', () => {
  let props: IMenuAction = {
    name: 'test',
    buttonCancel: 'test',
    element: 'p',
    header: 'test',
    icon: 'user',
    sizeModal: 'small',
    children: <></>
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MenuAction {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot', () => {
    const component = shallow(<MenuAction {...props} />);
    expect(component).toMatchSnapshot();
  });
});
