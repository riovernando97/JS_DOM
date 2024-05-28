// Event click
document.getElementById('clickButton').addEventListener('click', function () {
  alert('Button clicked!');
});

// Event input
document.getElementById('inputField').addEventListener('input', function () {
  console.log('Input field value:', this.value);
});

// Event mouseenter dan mouseleave
const hoverMeDiv = document.getElementById('hoverMe');
hoverMeDiv.addEventListener('mouseenter', function () {
  this.style.backgroundColor = 'lightgreen';
  this.innerText = 'Mouse is over';
});
hoverMeDiv.addEventListener('mouseleave', function () {
  this.style.backgroundColor = 'lightblue';
  this.innerText = 'Hover Over Me';
});
