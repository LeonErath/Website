import React from "react";
import Cloudy from "./Cloudy";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { wrap } from "module";

describe("Impressum Component", () => {
  it("Check if TypeError occure", () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <Cloudy />
        </MemoryRouter>
      )
    ).not.toThrow(TypeError);
  });
});
