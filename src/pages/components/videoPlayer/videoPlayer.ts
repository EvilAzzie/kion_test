import test, { expect, Page } from "@playwright/test";
import { ElementType } from "../ComponentRecords";
import { VideoPlayerSelectors } from "./videoPlayerConstants";

export default class VideoPlayer {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async checkTabbarIsVisible(status = true): Promise<void> {
    await test.step(`Check tabbar of video is${status ? '' : ' not'} visible`, async () => {
      status
      ? await expect(this.page.locator(VideoPlayerSelectors.tabbar.locator)).toBeVisible()
      : await expect(this.page.locator(VideoPlayerSelectors.tabbar.locator)).not.toBeVisible()
    });
  };

  async checkVideoIsFullscreen(): Promise<void> {
    await test.step(`Check video is fullscreen`, async () => {
      await expect(this.page.locator(VideoPlayerSelectors.videoFullscreen.locator)).toBeVisible();
    });
  }

  async hoverVideo(): Promise<void> {
    await test.step(`Hover video`, async () => {
      await this.page.locator(VideoPlayerSelectors.video.locator).hover();
    });
  };

  async clickOnElement(element: ElementType): Promise<void> {
    await test.step(`Click on video element ${element}`, async () => {
      await this.page.locator(element.locator).click();
    });
  };
};
