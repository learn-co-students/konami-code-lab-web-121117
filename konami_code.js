const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init()  {
  let index = 0
  document.body.addEventListener('keydown', function(e) {

    const key = parseInt(e.detail || e.which)
    if (key === code[index]) {
      console.log("you hit the right key!")
      index++

      if (index === code.length) {
        alert("Hurray!");
        index = 0
      }
    } else {
      console.log("you hit the wrong key!")
      index = 0
    }
  })
}
