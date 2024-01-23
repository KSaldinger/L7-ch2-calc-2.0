const subTypeElement = document.querySelector("#subscription");
const subDurationElement = document.querySelector("#months");
const result = document.querySelector(".result");
const subType = "basic";
const subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  console.log();
});
