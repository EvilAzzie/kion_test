import { test as baseTest } from '@playwright/test';
import VideoPage from '../pages/pages/videoPage';
import MainPage from '../pages/pages/mainPage';
import SearchResultsPage from '../pages/pages/searchResults/searchResultsPage';

type PagesFixture = {
  mainPage: MainPage;
  videoPage: VideoPage;
  searchResultsPage: SearchResultsPage;
};

export const test = baseTest.extend<PagesFixture>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  videoPage: async ({ page }, use) => {
    await use(new VideoPage(page));
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
});
