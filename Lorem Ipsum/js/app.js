const text = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis  distinctio beatae voluptatibus doloremque accusantium, esse repudiandae delectus fuga dolorem harum vitae eaque consequatur perferendis corporis? Optio amet commodi voluptate dolor necessitatibus atque explicabo voluptatum placeat doloremque! Praesentium, odio vel quibusdam nemo tenetur ducimus atque recusandae sunt consectetur placeat. Consectetur dicta tenetur aliquid soluta culpa animi necessitatibus laborum suscipit expedita. Nobis id odio consequatur, praesentium iusto, ullam explicabo iste quas tempore iure rerum aliquid.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.  sunt cumque quas distinctio beatae voluptatibus doloremque accusantium, esse repudiandae delectus fuga dolorem harum vitae eaque consequatur perfere`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus suscipit eum ab laborum suscipit expedita. Nobis id odio consequatur, praesentium iusto, ullam explicabo iste quas tempore iure rerum aliquid.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus suscipit eum ab impedit cupiditate, endis corporis? Optio amet reiciendis quaerat nihil ipsa natus praesentium non quia ea magnam rerum nulla, similique aut hic culpa reprehenderit, accusantium commodi voluptate dolor necessitatibus atque explicabo voluptatum placeat doloremque! Praesentium, odio vel quibusdam nemo tenetur ducimus atque recusandae sunt consectetur placeat. Consectetur dicta tenetur aliquid soluta culpa animi necessitatibus laborum suscipit expedita. Nobis id odio consequatur, praesentium iusto, ullam explicabo iste quas tempore iure rerum aliquid.`,
  `Lorem ipsum dolor sit amet consectetur  doloribus suscipit eum ab impedit cupiditate, sunt cumque quas distinctio .`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus suscipit eum ab impedit cupiditate, sunt cumque quas distinctio beatae voluptatibus doloremque accusantium, esse repudiandae delectus fuga dolorem harum vitae eaque consequatur perfere`,
  `Lnecessitatibus laborum suscipit expedita. Nobis id odio consequatur, praesentium iusto, ullam explicabo iste quas tempore iure rerum aliquid.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus suscipit eum ab quaerat nihil ipsa natus praesentium non quia ea magnam rerum nulla, similique aut hic culpa reprehenderit, accusantium commodi voluptate dolor necessitatibus atque explicabo voluptatum placeat doloremque! Praesentium, odio vel quibusdam nemo tenetur ducimus atque recusandae sunt consectetur placeat. Consectetur dicta tenetur aliquid soluta culpa animi necessitatibus laborum suscipit expedita. Nobis id odio consequatur, praesentium iusto, ullam explicabo iste quas tempore iure rerum aliquid.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus suscipit eum ab impedit cupiditate, sunt cumque quas distinctio .`,
];
const options_box = document.querySelector(".options-box");
const options_inside_box = document.querySelector(".options-inside-box");
const inside_box = document.querySelector(".inside-box");
const noOfPara = document.getElementById("noOfPara");
const bar = document.querySelector(".bar");
const noOfParaRange = document.getElementById("noOfParaRange");
const options_gerenate_button = document.querySelector(
  ".options-gerenate-button"
);
const generate_text = document.getElementById("generate-text");
const result_box = document.getElementById("result-box");
const result_inside_box = document.querySelector(".result-inside-box");
const result = document.querySelector(".lorem-text");

function syncParaNo(e) {
  const value = e.target.value;
  console.log(value);
  noOfPara.value = value;
  noOfParaRange.value = value;
}

document.getElementById("generate-text").addEventListener("click", function () {
  const value = parseInt(noOfPara.value);
  let tempText = text.slice(0, value);
  tempText = tempText
    .map((item) => `<p class="text-result">${item}</p>`)
    .join("");
  console.log(tempText);
  document.getElementById("lorem-text").innerHTML = tempText;
});

document.getElementById("copy").addEventListener("click", function () {
  const text_Area = document.createElement("textarea");
  const text = result_inside_box.innerText;
  if (!text) {
    return;
  }
  text_Area.value = text;
  document.body.appendChild(text_Area);
  text_Area.select();
  document.execCommand("copy");
  text_Area.remove();
  alert("Text copied to clipboard");
});

noOfPara.addEventListener("input", syncParaNo);
noOfParaRange.addEventListener("input", syncParaNo);
