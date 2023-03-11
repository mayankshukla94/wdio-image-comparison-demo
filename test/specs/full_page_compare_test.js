import * as sharedUtility from "../pageobjects/shared_utility";

describe("Image Comparison", () => {
  describe("for Full Page screen", () => {
    it("saves the baseline image", async () => {
      await browser.url(`https://www.google.com`);
      await browser.saveFullPageScreen("homepage");
    });

    it("compares the baseline image", async () => {
      await browser.url(`https://www.yahoo.in`);

      const testOptions = sharedUtility.getTestOptions();
      const result = await browser.checkFullPageScreen("homepage", testOptions);

      expect(result.misMatchPercentage).toEqual(0);
    });
  });
});
