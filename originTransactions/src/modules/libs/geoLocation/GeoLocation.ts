import Geolocation from 'react-native-geolocation-service';

class GeoLocation {
  geo: typeof Geolocation;

  constructor() {
    this.geo = Geolocation;
  }

  async getCurrentPosition(
    success: Geolocation.SuccessCallback,
    error: Geolocation.ErrorCallback | undefined,
  ) {
    this.geo.getCurrentPosition(success, error);
  }

  async requestAuthorization() {
    return this.geo.requestAuthorization('whenInUse');
  }
}

export default new GeoLocation();
