import test, { expect, Page } from "@playwright/test";
import { ElementType } from "../ComponentRecords";

export default class VideoPlayer {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async checkElementIsVisible(element: ElementType, status = true): Promise<void> {
    await test.step(`Check ${element.name} of video is${status ? '' : ' not'} visible`, async () => {
      status
      ? await expect(this.page.locator(element.locator)).toBeVisible()
      : await expect(this.page.locator(element.locator)).not.toBeVisible()
    });
  };

  async clickOnElement(element: ElementType): Promise<void> {
    await test.step(`Click on video element ${element.name}`, async () => {
     await this.page.locator(element.locator).click();
    });
  };
};
