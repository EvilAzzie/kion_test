import test, { expect, Page } from "@playwright/test";
import BasePage from "./basePage";
import { Url } from "../../utils/constants";
import VideoPlayer from "../components/videoPlayer/videoPlayer";

export default class VideoPage extends BasePage {
  readonly videoPlayer: VideoPlayer;

  constructor(page: Page) {
    super(page);
    this.url = Url.video;
    this.videoPlayer = new VideoPlayer(page)
  }

  async checkPageIsOpenedByUrl(): Promise<void> {
    await test.step(`Check page is opened by url: ${Url.base}${this.url}`, async () => {
      await expect(this.page).toHaveURL(this.url);
    });
  }
}
