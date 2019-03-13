window.open('https://www.instagram.com/iglixhukellari/', '_blank');
window.open('https://www.facebook.com/igli.xhukellari', '_blank');
window.open('https://steamcommunity.com/profiles/76561198149666211/', '_blank');
window.open('https://steamcommunity.com/profiles/76561198149666211/', '_blank');   
   
   
 const buttonone = document.getElementById('button-1');
 const buttontwo = document.getElementById('button-2');
 const buttonthree = document.getElementById('button-4');
 const buttonfour = document.getElementById('button-4');  

 function handclick(event){
     const target = event.target;
     const text = target.dataset.text;

     const bottle = target.parentElement.querySelector('p');
     bottle.textContent = text;

    
 }
   buttonone.addEventListener('click', handclick);
   buttontwo.addEventListener('click', handclick);
   buttonthree.addEventListener('click', handclick);
   buttonfour.addEventListener('click', handclick);