// Append Value to Display
function appendValue(value) {
  document.getElementById("display").value += value;
}

// Clear Display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Delete Last Character
function deleteLast() {
  let currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}

// Calculate Expression
function calculate() {
  try {
      document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch (e) {
      document.getElementById("display").value = "Error";
  }
}

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
