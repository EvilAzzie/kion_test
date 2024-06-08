import { ElementRecord } from "../ComponentRecords";

export const SearchFiedlSelectors: ElementRecord = {
  search: {
    name: 'search',
    locator: '[aria-label="Найти в Дзене"]'
  },
} as const;
