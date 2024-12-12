// #### `isActivePath` Function
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

  it("Returns `true` for the root path (/) when the path is `/` or `/index.html", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "index.html")).toBe(true);
  });

  it("Returns `true` when the current path includes the `href`.", () => {});

  it("Returns `false` when paths don't match.", () => {});
});
