import test, { Page } from "@playwright/test";
import { SearchFiedlSelectors } from "./searchFieldConstants";
import { Delay } from "../../../utils/constants";

export default class SearchField {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async search(query: string): Promise<void> {
    await test.step(`Search for query: ${query}`, async () => {
      await this.page.locator(SearchFiedlSelectors.search.locator).fill(query);
      await this.page.locator(SearchFiedlSelectors.search.locator).press('Enter', { delay: Delay.keyPress });
    });
  }
};
