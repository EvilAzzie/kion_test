import { ElementRecord } from "../../components/ComponentRecords";

export const SearchReesultsPageSelectors: ElementRecord = {
  videoFilter: {
    name: 'video filter',
    locator: 'Видео и ролики',
  },
  videos: {
    name: 'videos',
    locator: '[aria-label="Карточка видео"]',
  },
} as const;
