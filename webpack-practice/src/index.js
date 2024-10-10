import './styles.css'
import odinImage from './odin-icon.svg'
import greeting from './greeting';

console.log(greeting);

if(process.env.NODE_ENV !== 'production') {
    console.log('Development mode');
} else {
    console.log('Production mode');
}

const image = document.createElement('img');
image.src = odinImage;
document.body.appendChild(image);

const header = document.createElement('h1');
header.innerText = greeting
document.body.append(header)