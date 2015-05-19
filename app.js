//define song elements
var favorite = document.getElementById("favorite");
var thrill = document.getElementById("thrill");
var trans = document.getElementById("trans");
var where = document.getElementById("where");
//define header element
var element = document.getElementById("header");
// defaults to not playing
var isPlaying = false;

//player functions for each song
playButton1.addEventListener('click', function(){
 if (isPlaying === true) {
   isPlaying = false;
   favorite.pause();
   element.innerHTML = "Select a Song!"
   this.classList.remove("fa-stop");
   this.classList.add("fa-play");
 }
 else {
   favorite.play();
   isPlaying = true;
   element.innerHTML = "Now Playing <em>Favorite Food<em>";
   this.classList.remove("fa-play");
   this.classList.add("fa-stop");

 }
});

playButton2.addEventListener('click', function(){
 if (isPlaying === true) {
   isPlaying = false;
   thrill.pause();
   element.innerHTML = "Select a Song!"
   this.classList.remove("fa-stop");
   this.classList.add("fa-play");
 }
 else {
   thrill.play();
   isPlaying = true;
   element.innerHTML ="Now Playing Thrill of the Hunt"
   this.classList.remove("fa-play");
   this.classList.add("fa-stop");
 }
});

playButton3.addEventListener('click', function(){
 if (isPlaying === true) {
   isPlaying = false;
   trans.pause();
   element.innerHTML = "Select a Song!"
   this.classList.remove("fa-stop");
   this.classList.add("fa-play");
 }
 else {
   trans.play();
   isPlaying = true;
   element.innerHTML ="Now Playing Transgender Dysphoria Blues"
   this.classList.remove("fa-play");
   this.classList.add("fa-stop");
 }
});

playButton4.addEventListener('click', function(){
 if (isPlaying === true) {
   isPlaying = false;
   where.pause();
   element.innerHTML = "Select a Song!"
   this.classList.remove("fa-stop");
   this.classList.add("fa-play");
 }
 else {
   where.play();
   isPlaying = true;
   element.innerHTML ="Where I'm From"
   this.classList.remove("fa-play");
   this.classList.add("fa-stop");
 }
});
