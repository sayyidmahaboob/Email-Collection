const scriptURL =
  "https://script.google.com/macros/s/AKfycbwUq2_vNHJQaXuDo-lr86sM9pFdp9I3llvB8PdriIcnsOsE1J-q9C-3nbFMQ-OLV0UjfQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing..!!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    //console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
