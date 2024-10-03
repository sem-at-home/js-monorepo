import './styles.css'
import odinImage from './odin-icon.svg'
import greeting from './greeting';

console.log(greeting);

const image = document.createElement('img');
image.src = odinImage;
document.body.appendChild(image);

const header = document.createElement('h1');
header.innerText = greeting
document.body.append(header)