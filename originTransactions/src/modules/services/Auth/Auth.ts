import LocalStorage, {LocalStorageKeys} from '@libs/localStorage/localStorage';

export default class Auth {
  public signIn(email: string, password: string): boolean {
    const hasEmail = LocalStorage.get(LocalStorageKeys.USER_EMAIL) === email;
    const hasPassword =
      LocalStorage.get(LocalStorageKeys.USER_PASSWORD) === password;

    if (hasEmail && hasPassword) {
      LocalStorage.set(LocalStorageKeys.IS_SIGNED_IN, 'true');
      return true;
    }

    return false;
  }
}
