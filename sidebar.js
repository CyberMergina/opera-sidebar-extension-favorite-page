var bookmark = {
  key: 'ext-favolite-list',
  getVal : function(){
    var name = document.getElementById('name');
    var url = document.getElementById('url');
    var data = {
      name : name.value,
      url : url.value,
    };
    name.value = "";
    url.value = "";
    return data;
  },
  list: {},
  get : function(){
    var list = localStorage.getItem(this.key);
    if ( list === "" || list === undefined || list === null ) return false;
    this.list = JSON.parse(list);
    var ul = document.getElementById('favorite-list');
    var keys = Object.keys(this.list);
    for ( var i = 0; keys.length > i; i++ ) {
      var li = document.createElement('li');
      li.id = 'page' + (i + 1);
      var a = document.createElement('a');
      a.text = keys[i];
      a.target = "brank";
      a.href = this.list[keys[i]];
      li.appendChild(a);
      ul.appendChild(li);
    }
  },
  set: function(){
    var value = this.getVal();
    this.list[value.name] = value.url;
    var ul = document.getElementById('favorite-list');
    var li = document.createElement('li');
    li.id = 'page' + this.list.length;
    var a = document.createElement('a');
    a.text = value.name;
    a.target = "brank";
    a.href = value.url;
    li.appendChild(a);
    ul.appendChild(li);
  },
  remove: function(id){
    var elm = document.getElementById('page' + id);
  }
};


document.addEventListener("DOMContentLoaded", function(event) {

  bookmark.get();

  window.onkeydown = function(e){
    if ( e.altKey && e.keyCode != 18 ) {
      console.log(e.keyCode); 
    }
  };

  var btn = document.getElementById('push');
  btn.addEventListener("click", function(e){
    bookmark.set(name, url);
  });

});
