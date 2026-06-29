function runCode() {
  const codeInput = document.getElementById("codeInput");
  const output = document.getElementById("output");

  output.textContent = "";

  const originalLog = console.log;

  console.log = function(message) {
    output.textContent += message + "\n";
  };

  try {
    eval(codeInput.value);
  } catch (error) {
    output.textContent = "Error: " + error.message;
  }

  console.log = originalLog;
}

function resetCode() {
  const codeInput = document.getElementById("codeInput");
  const output = document.getElementById("output");

  codeInput.value = 'console.log("Hello, computer!");';
  output.textContent = "";
}
