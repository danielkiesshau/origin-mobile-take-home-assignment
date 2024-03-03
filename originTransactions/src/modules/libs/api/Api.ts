import axios, {AxiosInstance} from 'axios';
import enviromentVariables from '@libs/enviromentVariables';

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
    // this.axios.interceptors.request.use(
    //   this.requestInterceptor,
    //   this.interceptError,
    // );
    // this.axios.interceptors.response.use(
    //   this.responseInterceptor,
    //   this.interceptError,
    // );
  }

  private interceptError(error: any) {
    if (enviromentVariables.IS_DEBUG) {
      console.log('Request:', error);
    }

    return error;
  }

  private requestInterceptor(request: any) {
    if (enviromentVariables.IS_DEBUG) {
      console.log('Request:', request);
    }

    return request;
  }

  private responseInterceptor(response: any) {
    if (enviromentVariables.IS_DEBUG) {
      console.log('Response:', response.message);
    }

    return response;
  }
  public get(url: string) {
    console.log('get', url);
    return this.axios.get(url);
  }

  public post(url: string, body: any) {
    return this.axios.post(url, body);
  }
}

export default new Api();
