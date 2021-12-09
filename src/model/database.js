const database = {
  init: key => {
    database.load(key) || localStorage.setItem(key, JSON.stringify([]));
  },

  save: (key, value) => {
    localStorage.setItem(key, JSON.stringify([...database.load(key), value]));
  },

  load: key => {
    return JSON.parse(localStorage.getItem(key));
  },
};

export default database;
