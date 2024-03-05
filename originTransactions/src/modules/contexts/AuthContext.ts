import {createContext} from 'react';

export const AuthContext = createContext<[boolean, Function]>([
  false,
  () => {},
]);
