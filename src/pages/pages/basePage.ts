import test, { Page } from "@playwright/test";
import NavigationSidebar from "../components/navigationSidebar/navigationSidebar";
import { Url } from "../../utils/constants";
import SearchField from "../components/searchField/searchField";

export default abstract class BasePage {
  protected readonly page: Page;

  protected url!: string;

  readonly navigationSidebar: NavigationSidebar;

  readonly searchField: SearchField;

  constructor(page: Page) {
    this.page = page;
    this.navigationSidebar = new NavigationSidebar(page);
    this.searchField = new SearchField(page);
  }

  async open(): Promise<void> {
    await test.step(`Wait for url: ${Url.base}${this.url}`, async () => {
      await this.page.goto(this.url);
    });
  }
}
