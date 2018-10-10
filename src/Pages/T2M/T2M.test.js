import React from "react";
import T2M from "./T2M";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { wrap } from "module";

describe("Impressum Component", () => {
  it("Check if TypeError occure", () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <T2M />
        </MemoryRouter>
      )
    ).not.toThrow(TypeError);
  });
});
