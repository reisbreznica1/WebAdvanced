var color = ['red', 'green', 'blue', 'purple'];

function changebgcolor(){
    document.querySelector('body').style.background = color[Math.floor(Math.random()*color.length)];
}


var names= ['Reis', 'Nehar', 'Rion', 'Bardhi'];

function changenames(){
    document.querySelector('p').innerHTML= names[Math.floor(Math.random()*names.length)];
}


setInterval(changebgcolor, 1000);
setInterval(changenames, 1000);