import React from "react";
import Impressum from "./impressum";
import { shallow } from "enzyme";

describe("Impressum Component", () => {
  it("start", () => {
    const wrapper = shallow(<Impressum />);
  });
});
