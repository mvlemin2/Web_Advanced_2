let loadingMessage = document.getElementById('loadingMessage');

window.addEventListener('load', function(){
   loadingMessage.textContent = 'Welcome!';
   
   verberg(function(){
    loadingMessage.style.display = 'none';
   }, 2000);
})