import { Page } from "@playwright/test";
import BasePage from "./basePage";
import { Url } from "../../utils/constants";
import VideoFeed from "../components/videoFeed/videoFeed";

export default class MainPage extends BasePage {
  readonly videoFeed: VideoFeed;

  constructor(page: Page) {
    super(page);
    this.url = Url.main;
    this.videoFeed = new VideoFeed(page);
  }
}
