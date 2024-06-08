import test, { expect, Page } from "@playwright/test";
import { ElementType } from "../ComponentRecords";
import { NavigationIcons } from "./navigatioinSidebarConstants";

export default class NavigationSidebar {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async open(menu: ElementType): Promise<void> {
    await test.step(`Click on navigation sidebar button '${menu.name}'`, async () => {
      await this.page.locator(menu.locator).click();
    });
  }

  async checkButtonIsSelected(button: ElementType): Promise<void> {
    await test.step(`Check that navigation sidebar button '${button.name}' is selected`, async () => {
      await expect(this.page.locator(button.locator)).toHaveAttribute(
        'aria-selected',
        'true'
      );
    });
  }

  async checkIconHasStatus(icon: ElementType, status: 'default' | 'selected'): Promise<void> {
    await test.step(`Check that navigation sidebar '${icon.name}' icon has ${status} status`, async () => {
      await expect(this.page.locator(`${icon.locator} use`)).toHaveAttribute(
        'xlink:href',
        NavigationIcons[icon.name][status]
      );
    });
  }
};
