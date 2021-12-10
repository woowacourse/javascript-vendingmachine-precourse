const database = {
  init: (key, value = []) => {
    database.load(key) || localStorage.setItem(key, JSON.stringify([value]));
  },

  save: (key, value) => {
    localStorage.setItem(key, JSON.stringify([...database.load(key), value]));
  },

  load: key => {
    return JSON.parse(localStorage.getItem(key));
  },
};

export default database;
