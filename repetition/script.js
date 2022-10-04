document.addEventListener("DOMContentLoaded", () =>{
    const decrementButton = document.getElementById("decrementButton")
    const displaySpam = document.getElementById("displaySpam");
    const incrementButton = document.getElementById("incrementButton");

    decrementButton.addEventListener("click", () => {
        displaySpam.innerText = displaySpam.innerText -1;
    });

    incrementButton.addEventListener("click", () => {
        displaySpam.innerText = parseInt(displaySpam.innerText) +1;
    });
});    