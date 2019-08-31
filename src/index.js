import avatar from './aaa.jpg'
import './index.scss'
var img = new Image();
img.src = avatar;
img.classList.add('avatar');

var root = document.getElementById('root');
console.log(root);
root.append(img);
