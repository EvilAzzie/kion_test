import { ElementRecord, IconRecord } from '../ComponentRecords'

export const NavigationButtons: ElementRecord = {
  video: {
    name: 'video',
    locator: '[aria-label="Видео"] li',
  },
} as const;

export const NavigationIcons: IconRecord = {
  video: {
    default: new RegExp('#video_showcase_ac' + /.*?/.source),
    selected: new RegExp('#video_showcase_filled' + /.*?/.source),
  },
} as const;
