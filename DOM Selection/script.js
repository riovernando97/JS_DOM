// getElementById('...') -> mengembalikan 'element'
const judul = document.getElementById('judul');

judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Kristian Rio Vernando';

// getElementsByTagName('...') -> mengembalikan 'HTML Collection'
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// getElementsByClass('...') -> mengembalikan 'HTML Collection'
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';

// querySelector('...') -> mengembalikan 'element'
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.backgroundColor = 'lightgreen';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = '#020043';
li2.style.color = '#fff';

// querySelectorAll('...') -> mengembalikan 'element'
const paraf = document.querySelectorAll('p');
for (let i = 0; i < paraf.length; i++) {
  paraf[i].style.backgroundColor = 'brown';
  paraf[i].style.color = '#fff';
  paraf[i].style.fontFamily = 'cursive';
}
