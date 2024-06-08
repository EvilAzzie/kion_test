import test, { expect, Page } from "@playwright/test";
import { FeedSelectors } from "./videoFeedConstants";
import { ElementType } from "../ComponentRecords";

export default class VideoFeed {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async scrollTo(): Promise<void> {
    await test.step(`Scroll to video feed`, async () => {
      await this.page.locator(FeedSelectors.feed.locator).scrollIntoViewIfNeeded();
    });
  }

  async hoverVideoByIndex(video: number): Promise<void> {
    await test.step(`Hover video in feed with index ${video}`, async () => {
      await this.page
        .locator(FeedSelectors.feed.locator)
        .locator(FeedSelectors.videos.locator)
        .nth(video)
        .hover();
    });
  };

  async checkElementOfVideoWithIndex(video: number, element: ElementType): Promise<void> {
    await test.step(`Check ${element.name} of video with index ${video}`, async () => {

      await expect(this.page
        .locator(FeedSelectors.feed.locator)
        .locator(FeedSelectors.videos.locator)
        .nth(video)
        .locator(element.locator)
      ).toBeVisible();
    });
  };
};
