import { Page } from '@playwright/test';

export default class WebBrowser {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async awaitPagePromise(): Promise<Page> {
        const context = this.page.context();
        const [newPage] = await Promise.all([
          context.waitForEvent('page'),
        ]);

        await newPage.waitForLoadState();
        return newPage;
    }
}
