window.onload = function() {
  var audio = document.getElementById('Audi');
  audio.play();
};

const l="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelectorAll("h4").forEach(h4 => {
  h4.onmouseover = event => {
    let iterations=-3;
    const interval = setInterval(()=> {
      event.target.innerText = event.target.innerText.split("").map((letter, index)=>{
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return l[Math.floor(Math.random()*26)];
      }).join("");
      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iterations+=1/10;
    },20);
  }
});
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
}, false);
document.addEventListener("keydown", function(e) {  if ((e.key == "F12" || e.keyCode == 123) || (e.ctrlKey && e.shiftKey && (e.key == "I" || e.keyCode == 73))) {
    e.preventDefault();
  }
}, false);
