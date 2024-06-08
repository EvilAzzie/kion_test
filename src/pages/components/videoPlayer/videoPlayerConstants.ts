import { ElementRecord } from "../ComponentRecords";

export const VideoPlayerSelectors: ElementRecord = {
  tabbar: {
    name: 'tabbar',
    locator: '[class="zen-ui-video-video-controls__composer _name_area-combined"]',
  },
  fullScreen: {
    name: 'full screen',
    locator: '[aria-label="Полноэкранный просмотр"]',
  },
} as const;
