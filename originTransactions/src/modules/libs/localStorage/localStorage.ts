import {MMKV} from 'react-native-mmkv';

export enum LocalStorageKeys {
  TRANSACTIONS = 'transactions',
}

export default class LocalStorage {
  static mmkv = new MMKV();

  public static get<T>(key: string): T | null {
    const result = LocalStorage.mmkv.getString(key);

    if (!result) {
      return null;
    }

    return JSON.parse(result);
  }

  public static set(key: string, value: object) {
    return LocalStorage.mmkv.set(key, JSON.stringify(value));
  }
}
