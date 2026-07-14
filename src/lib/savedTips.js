export const SAVED_TIPS_STORAGE_KEY = 'room-smart:saved-tips';

const getBrowserStorage = storage => {
  if (storage) return storage;
  if (typeof window === 'undefined') return null;

  return window.localStorage;
};

export const loadSavedTips = storage => {
  try {
    const storedValue = getBrowserStorage(storage)?.getItem(SAVED_TIPS_STORAGE_KEY);
    if (!storedValue) return [];

    const parsedValue = JSON.parse(storedValue);
    if (!Array.isArray(parsedValue)) return [];

    return [...new Set(parsedValue.filter(tipId => typeof tipId === 'string'))];
  } catch {
    return [];
  }
};

export const saveSavedTips = (tipIds, storage) => {
  try {
    getBrowserStorage(storage)?.setItem(SAVED_TIPS_STORAGE_KEY, JSON.stringify(tipIds));
  } catch {
    // Saving tips is optional; private browsing and storage quotas can reject writes.
  }
};
