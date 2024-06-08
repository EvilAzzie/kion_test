import { ElementRecord } from "../ComponentRecords";

export const VideoPlayerSelectors: ElementRecord = {
  tabbar: {
    name: 'tabbar',
    locator: '.video-viewer-player__controls._is-visible',
  },
  fullScreen: {
    name: 'full screen',
    locator: '[aria-label="Полноэкранный просмотр"]',
  },
  video: {
    name: 'video',
    locator: '[aria-label="Видеоплеер"]',
  },
  videoFullscreen: {
    name: 'videon in fullscreen mode',
    locator: '[aria-label="Видеоплеер"] ._is-fullscreen',
  },
} as const;
