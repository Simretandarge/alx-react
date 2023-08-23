import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  it("Header renders without any errors", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Verify that the components render img", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.App-header img")).toHaveLength(1);
  });

  it("Verify that the components render h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.App-header h1")).toHaveLength(1);
  });
})