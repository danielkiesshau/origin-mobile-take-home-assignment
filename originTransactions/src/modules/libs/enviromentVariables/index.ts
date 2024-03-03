import Config from 'react-native-config';

export default {
  TRANSACTION_BASE_URL: Config.TRANSACTION_BASE_URL,
  IS_DEBUG: Boolean(Config.TRANSACTION_BASE_URL),
};
