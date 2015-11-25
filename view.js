var view = {
  show_element : function(to_show) {
    document.getElementById("create").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById(to_show).style.display = "block";
  },
  show : function(id) {
    console.log("called");
    var image_text = document.getElementById("text");
    image_text.style.display = "block";
    image_text.style.visibility = "visible";
  },
  hide : function(id) {
    var image_text = document.getElementById("text");
    image_text.style.display = "none";
    image_text.style.visibility = "hidden";
  },
  update_slide : function(slide) {
    var image_text = document.getElementById("text");
    image_text.innerHTML = slide.artist + "<br />" + slide.title + "<br />" + slide.year;
    document.getElementById("slide_image").src = slide.url;
  }
}
