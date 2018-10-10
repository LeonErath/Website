import React from "react";
import Watchlist from "./Watchlist";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { wrap } from "module";

describe("Impressum Component", () => {
  it("Check if TypeError occure", () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <Watchlist />
        </MemoryRouter>
      )
    ).not.toThrow(TypeError);
  });
});
