const WalkImage = document.getElementById("Walk");
  window.onkeyup = function (e) { 
        const currentleft = parseInt(WalkImage.style.left);
        const currentTop = parseInt(WalkImage.style.top);
        
        if(e.key ==="ArrowRight") {
                WalkImage.style.left = currentleft + 10 + "px";
        }

         
        if(e.key ==="ArrowDown") {
                WalkImage.style.top = currentTop + 10 + "px";
        }
         
        if(e.key ==="ArrowUp") {
                WalkImage.style.top = currentTop - 10 + "px";
        }
         
        if(e.key ==="ArrowLeft") {
                WalkImage.style.left = currentleft - 10 + "px";
        }
               
              
}