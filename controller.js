(function() {
  //Handle Nav menu
  create_nav.addEventListener("click", function(evt) {
    view.show_element("create");
  });
  test_nav.addEventListener("click", function(evt) {
    view.show_element("test");
    view.update_slide(db.get_image());
  });
  settings_nav.addEventListener("click", function(evt) {
    view.show_element("settings");
  });

  var slide_image = document.getElementById("slide_image");
  slide_image.addEventListener("click", function(evt) {
    view.update_slide(db.get_image());
  });

  var delete_button = document.getElementById("image_overlay");
  delete_button.addEventListener('click', function(evt) {
    db.remove(db.count);
    view.update_slide(db.get_image());
  });

  //Handle Add form
  var create_form = document.getElementById("create_form");
  create_form.addEventListener("submit", function(evt) {
    db.add(create_form.querySelector('input[name="artist"]').value, create_form.querySelector('input[name="title"]').value, create_form.querySelector('input[name="year"]').value, create_form.querySelector('input[name="url"]').value);
    [].slice.call(create_form.querySelectorAll('#create_form > input[type=text]'))
    .forEach(function(ele){ele.value = "";});
  });

  //Handle Settings Form
  var settings = document.getElementById("settings_form");
  settings.querySelector('select[name="mode"]').value = localStorage.mode;
  settings.querySelector('input[name="database"]').value = localStorage.current_database;
  settings.addEventListener("submit", function(evt) {
    console.log('got here');
    db.name.set(settings.querySelector('input[name="database"]').value);
    db.mode.set(settings.querySelector('select[name="mode"]').value);
    console.log("saved settings");
  });
})();
