import React from "react";
import JournalismFuture from "./JournalismFuture";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { wrap } from "module";

describe("Impressum Component", () => {
  it("Check if TypeError occure", () => {
    expect(() =>
      mount(
        <MemoryRouter>
          <JournalismFuture />
        </MemoryRouter>
      )
    ).not.toThrow(TypeError);
  });
});
