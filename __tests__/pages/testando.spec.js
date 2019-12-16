
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';    

enzyme.configure({ adapter: new Adapter() });
    
describe(<testando/>, () => {
    test('Please, implement this test', () => {
        expect(1).toBe(1);
    });
});