var db = {
  name : {
    get : function() { return localStorage.current_database; },
    set : function(name) { localStorage.current_database = name; }
  },
  mode : {
    get : function() { return localStorage.current_mode; },
    set : function(mode) { localStorage.current_mode = mode; }
  },
  count : 0,
  get : function() {
    //console.log(localStorage[this.name.get()]);
    // init if not exist
    if(!localStorage[this.name.get()]) {
      localStorage[this.name.get()] = JSON.stringify([]);
    }
    return JSON.parse(localStorage[this.name.get()]);
  },
  set : function(database) {
    localStorage[this.name.get()] = JSON.stringify(database);
  },
  add : function(artist, title, year, url) {
    var database = this.get();
    console.log(database);
    database.push({"artist":artist, "title":title, "year":year, "url":url});
    this.set(database);
  },
  remove : function(index) {
    var database = this.get();
    database.splice(index-1, 1);
    this.set(database);

  },
  get_image : function() {
    if(this.count >= this.get().length) {
      this.count = 0;
    } if(this.mode.get() == 'linear') {
      return this.get_next_image();
    } else {
      return this.get_random_image();
    }
  },
  get_random_image : function() {
    var database = this.get();
    var rand = Math.floor(Math.random() * database.length);
    return database[rand];
  },
  get_next_image : function() {
    var database = this.get();
    return database[this.count++];
  }
}
