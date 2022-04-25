export interface FetchApiParams {
  ( query: string, options?: { variables?: any } ): Promise<any>
}