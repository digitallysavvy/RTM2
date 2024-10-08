// TODO: You can modify this to your user list
export const USERS = ['Tony', 'Lily', 'Jerry'];

export const DEFAULT_USERS = USERS.slice(0, 1);

export const DEFAULT_CIPHER_KEY = '';

export const DEFAULT_RTM_CONFIG = {
  // TODO: Please replace with your own Agora AppId
  appId: '',
  // TODO: Use token authentication when modifying to true
  appCertificate: false,
  encrypt: false,
  cipherKey: DEFAULT_CIPHER_KEY,
  logUpload: true,
  logLevel: 'debug',
  cloudProxy: false,
  presenceTimeout: 10,
  process: 'Testing Phase',
};

export const DEFAULT_CHANNEL_INFO = {
  msgChannelName: 'ms_channel',
  streamChannelName: 'st_channel',
  topic: 'first_topic',
};
