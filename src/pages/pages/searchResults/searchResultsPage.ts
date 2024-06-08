import test, { Page } from "@playwright/test";
import BasePage from "../basePage";
import { SearchReesultsPageSelectors } from "./searchResultsPageConstants";

export default class SearchResultsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async selectVideoFilter(): Promise<void> {
    await test.step(`Select video filter`, async () => {
      await this.page
        .locator(SearchReesultsPageSelectors.videoFilter.locator).click();
    });
  };

  async clickVideoByIndex(video: number): Promise<void> {
    await test.step(`Click on video with index ${video}`, async () => {
      await this.page
        .locator(SearchReesultsPageSelectors.videos.locator)
        .nth(video)
        .click();
    });
  };
}
