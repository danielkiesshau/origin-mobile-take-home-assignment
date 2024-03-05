import {PermissionsAndroid, Platform} from 'react-native';
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

  public async requestPermission(): Promise<boolean> {
    if (Platform.OS === 'ios') {
      return this.requestPermissionIOS();
    }

    return this.requestPermissionAndroid();
  }

  async requestPermissionIOS(): Promise<boolean> {
    return (await this.geo.requestAuthorization('whenInUse')) === 'granted';
  }

  private async requestPermissionAndroid(): Promise<boolean> {
    if (Number(Platform.Version) < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    return false;
  }
}

export default new GeoLocation();
