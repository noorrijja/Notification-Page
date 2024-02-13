const notificationButton = document.querySelector(".notification-4");

notificationButton.addEventListener("click", function () {
  const content = notificationButton.nextElementSibling;

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});

const read = document.querySelector(".mark-as-read");

read.addEventListener("click", function () {
  const number = document.querySelector(".unread-notifications");

  number.innerHTML = "0";
});
read.addEventListener("click", function () {
  const open = document.querySelectorAll(".read-notifications");

  open.forEach((open) => {
    open.style.backgroundColor = "white";
  });
});
read.addEventListener("click", function () {
  const circle = document.querySelectorAll(".active");

  circle.forEach((circle) => {
    circle.style.display = "none";
  });
});
