import axios, {AxiosInstance} from 'axios';

interface Dependencies {
  axios: AxiosInstance;
}

class Api {
  private axios: AxiosInstance;

  public constructor(
    dependencies: Dependencies = {
      axios,
    },
  ) {
    this.axios = dependencies.axios;
    // we could implement some interceptor here for custom app logic
  }

  public get(url: string) {
    return this.axios.get(url);
  }

  public post(url: string, body: any) {
    return this.axios.post(url, body);
  }
}

export default new Api();
