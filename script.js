
let interactable = document.getElementById("interactable")
let player = document.getElementById("player")

interactable.addEventListener('mouseenter', () => {
  player.play();
})

interactable.addEventListener('mouseleave', () => {
  player.pause();
})

player.addEventListener('pause', () => {
  document.body.style.backgroundColor = "#e9a4aa";
})

player.addEventListener('play', () => {
  document.body.style.backgroundColor = "#58ccd1";
})

player.addEventListener('timeupdate', () => {
  console.log("the current time is:", player.currentTime)

  
  if(player.currentTime > 5 ){
   
        interactable.style.borderRadius = "30px";
        if(player.currentTime > 40 ){
   
            interactable.style.borderRadius = "80px";
        
        }
        if(player.currentTime > 30 ){
   
            interactable.style.borderRadius = "70px";
        
        }
        if(player.currentTime > 20 ){
   
            interactable.style.borderRadius = "60px";
        
        }
        if(player.currentTime > 10 ){
   
            interactable.style.borderRadius = "50px";
        
        }
   
  }

  
 
  
})