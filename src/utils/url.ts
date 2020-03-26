export class Url {
  static toString(baseUrl: string, path: string, params?: object): string {
    const url: URL = new URL(`${baseUrl}${path}`);
    if (params) {
      url.search = new URLSearchParams(params as URLSearchParams).toString();
    }
    return url.toString();
  }
}
