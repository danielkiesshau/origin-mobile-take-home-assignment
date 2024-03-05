import {MMKV} from 'react-native-mmkv';
import enviromentVariables from '../enviromentVariables';

export enum LocalStorageKeys {
  TRANSACTIONS = 'transactions',
  IS_SIGNED_IN = 'is_signed_in',
  USER_EMAIL = 'user_email',
  USER_PASSWORD = 'user_password',
}

export default class LocalStorage {
  static mmkv = new MMKV({
    encryptionKey: enviromentVariables.ENCRYPTION_KEY,
    id: 'originTransactions',
  });

  public static get<T>(key: string): T | null {
    const result = LocalStorage.mmkv.getString(key);

    if (!result) {
      return null;
    }

    return JSON.parse(result);
  }

  public static set(key: string, value: object | string) {
    return LocalStorage.mmkv.set(key, JSON.stringify(value));
  }
}
