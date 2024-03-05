import LocalStorage, {LocalStorageKeys} from '@libs/localStorage/localStorage';

interface User {
  email: string;
  password: string;
  username: string;
}

interface UserMap {
  [email: string]: User;
}

export default class AuthService {
  public exit() {
    LocalStorage.set(LocalStorageKeys.IS_SIGNED_IN, false);
  }

  public signUp(email: string, password: string, username: string) {
    const users = LocalStorage.get<UserMap>(LocalStorageKeys.USERS) || {};

    users[email] = {email, password, username};

    LocalStorage.set(LocalStorageKeys.USERS, users);
  }

  public signIn(email: string, password: string): boolean {
    const users = LocalStorage.get<UserMap>(LocalStorageKeys.USERS);

    if (!users) {
      return false;
    }
    const samePassword = users[email]?.password === password;

    if (users[email] && samePassword) {
      LocalStorage.set(LocalStorageKeys.IS_SIGNED_IN, 'true');
      return true;
    }

    return false;
  }
}
