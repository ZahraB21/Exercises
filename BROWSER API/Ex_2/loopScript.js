let number = prompt("Enter a value to loop until it.");

for (let i = 1; i <= number; i++) {
  document.getElementById("values").innerHTML += `<p>${i}</p>`;
}
