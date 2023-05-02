/*Background Color Change App
In this app, the background color of the canvas changes when the user clicks on a button.

Key concepts covered :-
1.) eventListener()
2.) Array
3.) Math.random()

*/

//Select 7 colors
let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];

//change the background of canvas when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);
    //grab the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})