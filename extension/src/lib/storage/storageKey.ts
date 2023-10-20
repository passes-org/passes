import type { ExtensionStorage } from '@webext-core/storage';
import { writable } from 'svelte/store';

/**
 * A Svelte store that writes to a webext storage key.
 */
export function storageKey<
  TStorageSchema extends Record<string, any>,
  TKey extends keyof TStorageSchema
>(
  storage: ExtensionStorage<TStorageSchema>, 
  key: TKey,
  initialValue: TStorageSchema[TKey]
) {
  const { subscribe, set: localSet } = writable(
    initialValue as any instanceof Function
      ? initialValue()
      : initialValue
  );

  // Whenever a new value is set, it gets persisted to the Storage
  const set = async (value: TStorageSchema[TKey]) => {
    await storage.setItem(key, value);
    localSet(value);
  };

  const remove = async () => {
    await storage.removeItem(key);
    localSet(undefined);
  };

  // Initialization logic to populate the store with Storage value if available
  storage.getItem(key)?.then((v) => {
    localSet(v !== undefined ? v : initialValue);
  });

  const get = () => {
    return storage.getItem(key);
  }

  return {
    get,
    subscribe,
    set,
    remove
  };
};