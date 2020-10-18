var input = document.getElementById('input');
var btn = document.getElementById('button');
var output = document.getElementById('output');

function displayOutput() {
  const text = input.value;
  output.innerHTML = text;
}

btn.addEventListener('click', displayOutput);
