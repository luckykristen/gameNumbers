const input = document.querySelector("#guess");
const button = document.querySelector(".btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) 
        play();
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector("#guess").value;
        if (userNumber <1 || userNumber >20) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Try another number from 1 to 20, please.",
              })
        }

        else if (isNaN(userNumber)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please, enter a number!",
              })
        }

        else {
            if (userNumber < answer) {
                alert("Try higher number.");
            }

            else if (userNumber > answer) {
                alert("Try lower number.");
            }

            else {
                Swal.fire({
                    title: "VICTORY!",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                  });
            }
        }
}