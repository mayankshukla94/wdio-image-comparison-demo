import * as sharedUtility from "../pageobjects/shared_utility";

describe("Image Comparison", () => {
  describe("for Viewport", () => {
    it("saves the baseline image", async () => {
      await browser.url(`https://www.google.com`);
      await browser.saveScreen("homepage");
    });

    it("compares the baseline image", async () => {
      await browser.url(`https://www.yahoo.in`);

      const testOptions = sharedUtility.getTestOptions();
      const result = await browser.checkScreen("homepage", testOptions);

      expect(result.misMatchPercentage).toEqual(0);
    });
  });
});
