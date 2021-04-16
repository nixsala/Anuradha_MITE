
document.getElementById("random-but").onclick=function()
{
    var x, y, z, random_col;
    x = Math.round(Math.random()*256);
    y = Math.round(Math.random()*256);
    z = Math.round(Math.random()*256);
    random_col = 'rgb('+x+','+y+','+z+')';

    document.getElementById("random-div").style.backgroundColor = random_col;
}


// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r},${g},${r})`;
    
//     document.getElementById("random-div").style.backgroundColor = r,g,b;


// }