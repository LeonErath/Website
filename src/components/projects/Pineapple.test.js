import React from "react";
import Pineapple from "./Pineapple";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { wrap } from "module";

describe("Impressum Component", () => {
  it("Check if TypeError occure", () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <Pineapple />
        </MemoryRouter>
      )
    ).not.toThrow(TypeError);
  });
});
