/**
 * Represents the HTTP GET Request Parameters of the MediaStack 'Live News' API Request.
 *
 * N.B. The interface contains only the parameters relevant to the purposes of this application.
 *
 * For reference, see [MediaStack Documentation](https://mediastack.com/documentation#:~:text=gb%2C%20de-,HTTP%20GET%20Request%20Parameters,-%3A).
 */
export interface IMediaStackApiRequestParams {
  limit: number;
  offset: number;

  // TODO: handle the properties below when adding filters
  // languages: string[];
  // keywords: string;
  // categories: string[];
  // date: string[];
}
