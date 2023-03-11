import * as sharedUtility from "../pageobjects/shared_utility";

describe("Image Comparison", () => {
  describe("for Logo", () => {
    it("saves the baseline image", async () => {
      await browser.url(`https://www.google.com`);

      const googleLogo = await $("//img[@alt='Google']");

      await browser.saveElement(googleLogo, "logo");
    });

    it("compares the baseline image", async () => {
      await browser.url(`https://www.youtube.com`);

      const youTubeLogo = await $("(//yt-icon[@id='logo-icon'])[1]");

      const testOptions = sharedUtility.getTestOptions();
      const result = await browser.checkElement(
        youTubeLogo,
        "logo",
        testOptions
      );

      expect(result.misMatchPercentage).toEqual(0);
    });
  });
});
