/*
#### Navigation

Write a test that:
- Navigates to the home page.
- Waits for the venue list to load.
- Clicks the first venue.
- Verifies that when the venue details page loads, there are the words “Venue details” in the heading.
*/

const { test, expect } = require("@playwright/test");

test.describe("Navigation", () => {
  test("Navigate to a venue details page and verify heading", async ({
    page,
  }) => {
    await page.goto("/");

    await page.waitForSelector("#venue-container");

    const firstVenue = page.locator("#venue-container a").first();
    await firstVenue.click();

    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
