const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let idx = 0;

function init() {
  const body = document.querySelector('body')

  body.addEventListener('keydown', (event) => {
    const key = parseInt(event.detail || event.which)
    if (code.includes(key) && (code[idx] === key)){
      idx++
      if (idx === (code.length-1)){
        alert("Code entered!")
        idx = 0
      }
    } else {
      idx = 0
    };
  })
};
