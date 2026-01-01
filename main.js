const toastProgress = document.querySelector(".toast-progress");
const toastImg = document.querySelector(".notification img");
const toastMsg = document.querySelector(".notification span");
const toast = document.querySelector(".toast");
let timeInterval;

const toastObj = [
  {
    text: "article submitted succefully",
    color: "#2ecc71",
    progressColor: "#0da34c",
    type: "submit",
    img: "./assets/check.png",
  },
  {
    text: "failed unexpected error",
    color: "#e74c3c",
    progressColor: "#b52717ff",
    type: "failed",
    img: "./assets/fail.png",
  },
  {
    text: "Do POTD and Earn Coins",
    color: "#3498db",
    progressColor: "#1372b0ff",
    type: "info",
    img: "./assets/info.png",
  },
  {
    text: "warning! server error",
    color: "#f1c40f",
    progressColor: "#b19215ff",
    type: "warning",
    img: "./assets/warning.png",
  },
];

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const toastData = toastObj.find(
      (obj) => obj.type === e.target.dataset.type
    );

    clearTimeout(timeInterval);
    toast.classList.remove("show");
    toast.classList.remove("hide");
    toastProgress.classList.remove("animate");

    void toast.offsetWidth;
    /**
    without this line (void toast.offsetWidth;):

     * we remove the class .animate the browser notes this but doesnt do the repaint of the screen
     * we add the class and the browser also notes but doesnt redraw the screen
     * Your function finishes, and the browser decides to do the necessary calculations 
     to make the page match what you've asked for... but nothing has changed! 
     You've put the page back into the same state it had before the click handler began. 
     Since nothing has changed, the display stays the same; no animation runs
     */

    if (toastData) {
      toastProgress.setAttribute("data-type", toastData.type + "-progress");
      toast.style.backgroundColor = toastData.color;
      toast.classList.add("show");
      toast.classList.remove("hide");
      toastProgress.classList.add("animate");
      toastMsg.textContent = toastData.text;
      toastImg.src = toastData.img;

      timeInterval = setTimeout(() => {
        toast.classList.remove("show");
        toast.classList.add("hide");
        toastProgress.classList.remove("animate");
      }, 5000);
    } else {
      return;
    }
  });
});
