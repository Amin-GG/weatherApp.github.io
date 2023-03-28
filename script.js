const $ = document;
const form = $.querySelector(".form");
const input = $.querySelector(".form input");
const msg = $.querySelector(".form span");
const list = $.getElementById("list");
const apiKey = "30729f7b2582e3e4b1a5ecc3a2e00d9f";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      const li = document.createElement("li");
      const markup = `
        <li
        class="bg-white px-3 py-6 rounded-sm shadow-lg hover:-translate-y-1 transition-all duration-300 hover:cursor-default">
        <h2 class="text-3xl font-[vazirTH] relative">
        ${name}
        <span
        class="absolute -top-4 ml-2 text-lg right-0 bg-green-400 text-white shadow-md w-10 h-10 flex justify-center items-center rounded-[50%]"
        >${sys.country}</span>
        </h2>
        <p class="text-7xl mt-8 text-green-400 font-[vazirB]">${Math.round(
          main.temp
        )}<sup>c</sup></p>
            <figure>
            <img src="${icon}" class="mx-auto">
            <figurecaption>${weather[0]["description"]}
            </figurecaption>
            </figure>
            </li>
            `;
      li.innerHTML = markup;
      list.appendChild(li);
      msg.style.display = "none";
    })
    .catch(() => {
      msg.style.display = "block";
    });
  input.value = "";
});
