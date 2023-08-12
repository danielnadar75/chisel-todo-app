import { pbkdf2Sync } from 'crypto';

export const generateHashFromPassword = (password: string, salt: string) =>
  pbkdf2Sync(password, salt, 1000, 64, 'sha256').toString('hex');
