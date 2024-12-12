//#### `getUserName` Function
//Test that it:
//Returns the name from the user object in storage (first save a user object to storage).
//Returns `null` when no user exists in storage.

import { getUsername } from "./storage";
import { describe, expect, it, beforeEach } from "vitest";

// Mock for localStorage
beforeEach(() => {
  localStorage.clear();
});

describe("getUserName", () => {
  it("Returns the name from the user object in storage", () => {
    const user = { name: "Tara" };
    localStorage.setItem("user", JSON.stringify(user));

    const result = getUsername();

    expect(result).toBe("Tara");
  });

  it("Returns `null` when no user exists in storage", () => {
    const result = getUsername();

    expect(result).toBe(null);
  });
});
