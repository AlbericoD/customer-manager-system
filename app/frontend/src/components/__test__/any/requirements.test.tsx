import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { Requiments, IRequiments } from '../../any';

Enzyme.configure({
  adapter: new Adapter()
});

describe('Component Requiments', () => {
  let props: IRequiments = {
    title: 'test',
    children: <></>
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Requiments {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('render snapshot', () => {
    const component = shallow(<Requiments {...props} />);
    expect(component).toMatchSnapshot();
  });
});
