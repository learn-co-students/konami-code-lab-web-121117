const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  const input = document.querySelector("body");

  input.addEventListener("keydown", function(e) {
    console.log(e.which);
    onKeyDownHandler(e);
  });

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        return alert("Hurray!");
        index = 0;
      }
    } else {
      debugger;
      index = 0;
    }
  }
}
