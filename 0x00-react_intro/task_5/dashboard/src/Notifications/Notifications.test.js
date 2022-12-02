import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import React from 'react';
import "../../config/setupTests"

describe("Testing the <Notifications /> componet", () => {
    it("Verify that Notifications renders without crashing", () => {
        shallow(<Notifications />)
    });

    it("Verify that Notifications renders the 3 list items without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3)
    });

    it("Verify that Notifications renders the text", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    });
})