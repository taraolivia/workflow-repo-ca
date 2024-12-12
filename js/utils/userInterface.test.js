// #### `isActivePath` Function. I will be testing for this:
// 1. Returns `true` when the current path matches `href` exactly.
// 2. Returns `true` for the root path (`"/"`) when the path is `"/"` or `"/index.html"`.
// 3. Returns `true` when the current path includes the `href`.
// 4. Returns `false` when paths don't match.

import { describe, expect, it } from "vitest";
import { isActivePath } from "../utils/userInterface";

describe("isActivePath", () => {
  it("Returns `true` when the current path matches `href` exactly.", () => {
    expect(isActivePath("/home", "/home")).toBe(true);
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/index.html", "/index.html")).toBe(true);
  });

  it("Returns `true` for the root path (/) when the path is `/` or `/index.html`", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("Returns `true` when the current path includes the `href`.", () => {
    //for home page
    expect(isActivePath("/", "/index.html")).toBe(true);
    expect(isActivePath("/", "/")).toBe(true);
    //for venue page
    expect(isActivePath("/venue", "/venue/index.html")).toBe(true);
    //for register page
    expect(isActivePath("/register", "/register/index.html")).toBe(true);
    //for login page
    expect(isActivePath("/login", "/login/index.html")).toBe(true);
  });

  it("Returns `false` when paths don't match.", () => {
    expect(isActivePath("/register", "/login/index.html")).toBe(false);
    expect(isActivePath("/venue", "/register/index.html")).toBe(false);
    expect(isActivePath("/", "/login/index.html")).toBe(false);
  });
});
