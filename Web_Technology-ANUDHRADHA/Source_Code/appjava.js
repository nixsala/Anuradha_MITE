// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

//const allp=dcument.querySelectorAll('p');
//allp[0].innerText='I AM a paragraph!!!!'

const allLinks=document.querySelectorAll('a');

for(let link of allLinks){
    link.style.color='rgb(0,108,134)';
    link.style.textDecorationColor='magenta';
    link.style.textDecorationStyle='wavy'
}

