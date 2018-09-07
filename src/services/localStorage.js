import localStorage from 'store2';

class LocalStorage {
  get(key) {
    return localStorage.get(key);
  }

  set(key, value) {
    localStorage.set(key, value);
  }

  remove(key) {
    localStorage.remove(key);
  }
}

const Store = new LocalStorage();
export default Store;
