/**
 * Represents the API response of the MediaStack 'Live News' API Request.
 *
 * For reference, see [MediaStack Documentation](https://mediastack.com/documentation#:~:text=first%20available%20result.-,Example%20API%20Response%3A,-If%20your%20API).
 */
export interface IMediaStackApiResponse {
  pagination: IMediaStackPagination;
  data: IMediaStackNews[];
}

/**
 * Represents the pagination property of the MediaStack 'Live News' API response.
 *
 * For reference, see [MediaStack Documentation](https://mediastack.com/documentation#:~:text=first%20available%20result.-,Example%20API%20Response%3A,-If%20your%20API).
 */
export interface IMediaStackPagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

/**
 * Represents the data property of the MediaStack 'Live News' API response.
 * If no results are found for a specific query, the data object will contain no results.
 *
 * For reference, see [MediaStack Documentation](https://mediastack.com/documentation#:~:text=first%20available%20result.-,Example%20API%20Response%3A,-If%20your%20API).
 */
export interface IMediaStackNews {
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  source: string | null;
  image: string | null;
  category: string | null;
  language: string | null;
  country: string | null;
  published_at: string | null;
}
