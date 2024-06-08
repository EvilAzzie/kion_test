import { NavigationButtons } from '../pages/components/navigationSidebar/navigatioinSidebarConstants';
import { FeedVideoSelectors } from '../pages/components/videoFeed/videoFeedConstants';
import { VideoPlayerSelectors } from '../pages/components/videoPlayer/videoPlayerConstants';
import VideoPage from '../pages/pages/videoPage';
import { test } from '../utils/fixture';

test.describe('DZEN', () => {

  test('Open video page from main one via navigation sidebar', async ({ mainPage, videoPage }) => {
    await mainPage.open();
    await mainPage.navigationSidebar.open(NavigationButtons.video);
    await videoPage.checkPageIsOpenedByUrl();
    await videoPage.navigationSidebar.checkButtonIsSelected(NavigationButtons.video);
    await videoPage.navigationSidebar.checkIconHasStatus(
      NavigationButtons.video,
      'selected'
    ); 
  });

  test('Open main page and check video feed', async ({ mainPage }) => {
    const videoIndex = 0;

    await mainPage.open();
    await mainPage.videoFeed.scrollTo();
    await mainPage.videoFeed.hoverVideoByIndex(videoIndex);

    for(let elem of Object.values(FeedVideoSelectors)) {
      await mainPage.videoFeed.checkElementOfVideoWithIndex(videoIndex, elem);
    }
  });

  test('Open video page, find and open video', async ({ videoPage, searchResultsPage, webBrowser }) => {
    const videoIndex = 0;
  
    await videoPage.open();
    await videoPage.searchField.search('Синий трактор');
    await searchResultsPage.clickVideoByIndex(videoIndex);

    const newPage = await webBrowser.awaitPagePromise()
    const secondTabVideoPage = new VideoPage(newPage);

    await secondTabVideoPage.videoPlayer.checkTabbarIsVisible();
    await secondTabVideoPage.videoPlayer.checkTabbarIsVisible(false);

    await secondTabVideoPage.videoPlayer.hoverVideo();
    await secondTabVideoPage.videoPlayer.clickOnElement(VideoPlayerSelectors.fullScreen);
    await secondTabVideoPage.videoPlayer.checkVideoIsFullscreen();
  });
})
