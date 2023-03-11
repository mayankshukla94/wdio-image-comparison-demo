import * as sharedUtility from "../pageobjects/shared_utility";

describe("Image Comparison", () => {
  describe("for Mobile devices", () => {
    it("saves the baseline image", async () => {
      await browser.url(`https://www.google.com`);
      await browser.emulateDevice("iPhone X");
      await browser.saveScreen("homepage");
    });

    it("compares the baseline image", async () => {
      await browser.url(`https://www.yahoo.in`);
      await browser.emulateDevice("iPhone X");

      const testOptions = sharedUtility.getTestOptions();
      const result = await browser.checkScreen("homepage", testOptions);

      expect(result.misMatchPercentage).toEqual(0);
    });
  });
});
