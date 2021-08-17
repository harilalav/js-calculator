
const LINKS = document.querySelectorAll("a");
for (var i = 0 ; i < LINKS.length; i++) {
    console.log(i);
    LINKS[i].addEventListener('click',function(event){
        event.preventDefault();
    });
 }
