import React from "react";
import EVE from "./Eve";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { wrap } from "module";

describe("Impressum Component", () => {
  it("Check if TypeError occure", () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <Eve />
        </MemoryRouter>
      )
    ).not.toThrow(TypeError);
  });
});
