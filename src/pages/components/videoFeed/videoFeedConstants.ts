import { ElementRecord } from "../ComponentRecords";

export const FeedSelectors: ElementRecord = {
  feed: {
    name: 'feed',
    locator: '[aria-label="Лента Дзена"]',
  },
  videos: {
    name: 'videos',
    locator: '[aria-label="Карточка этажа"]',
  },
} as const;

export const FeedVideoSelectors: ElementRecord = {
  avatar: {
    name: 'avatar',
    locator: '[aria-label="Аватар канала"]',
  },
  channelName: {
    name: 'channel name',
    locator: 'a[aria-label="Название канала"]',
  },
  description: {
    name: 'description',
    locator: 'a[class^="card-video__title"]',
  },
  subscribe: {
    name: 'subscribe button',
    locator: '[aria-label="Подписаться"]',
  },
} as const;
