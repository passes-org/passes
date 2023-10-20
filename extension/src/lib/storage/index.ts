import { defineExtensionStorage } from '@webext-core/storage';
import browser from 'webextension-polyfill';
import { storageKey } from './storageKey';

export interface ExtensionStorageSchema {
  passEngineURI: string;
  passEngineUserkey: string | null;
};

export const extensionStorage = defineExtensionStorage<ExtensionStorageSchema>(
  browser.storage.local,
);

export const passEngineURI = storageKey(extensionStorage, 'passEngineURI', 'https://genesis.xyz/request');
export const passEngineUserkey = storageKey(extensionStorage, 'passEngineUserkey', null);
