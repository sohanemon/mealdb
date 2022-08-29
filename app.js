const main = document.getElementById("main");

function create(meal) {
  let count = 0;
  const div = document.createElement("div");
  div.className =
    "max-w-sm w-80 overflow-hidden rounded-xl bg-yellow-50 shadow-md duration-200 hover:ring-2 ring-yellow-300  hover:shadow-xl";
  div.innerHTML = `
        <img
          src=${meal?.strMealThumb}
          alt="plant"
          class="h-60 object-cover w-full"
        />
        <div class="p-5">
          <button title="Visit ${meal?.strCategory} category"
            class="category w-max rounded-full mr-3 px-4  ring-blue-700 ring-1 text-blue-700 hover:bg-blue-700 hover:text-white"
          >
            ${meal?.strCategory}
          </button>
          <button title="More ${meal?.strArea} foods"
            class="area w-max rounded-full px-4 pb-1 ring-yellow-500 ring-1 text-yellow-500 hover:bg-yellow-500 hover:text-white"
          >
            ${meal?.strArea}
          </button>
          <p class=" text-lg mb-5 text-gray-700 font-semibold my-2">
            ${meal?.strMeal}
            <a href=${meal?.strSource} target='_blank'>
                 <svg class='w-4 inline fill-blue-500 cursor-pointer mx-1 align-text-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/>
                 </svg>
            </a>
          </p>

          
            <label for=${
              meal?.idMeal
            } class="see-more w-full text-center cursor-pointer block rounded-md bg-yellow-400 py-2 font-semibold text-white hover:bg-yellow-500 hover:shadow-md duration-75 active:scale-90">See More</label>

            <input type="checkbox" id=${meal?.idMeal}  class="modal-toggle" />
            <label for=${meal?.idMeal}  class="modal cursor-pointer">
            <label class="modal-box relative p-0" for="">
                 <img
                    src=${meal?.strMealThumb}
                    alt="plant"
                    class="object-cover h-60 w-full"
                    />
                <div class='p-4'>
                    <h1 class= 'text-2xl font-semibold'>${meal?.strArea} ${
    meal?.strMeal
  }<a title='Visit ${meal?.strSource}' href=${meal?.strSource} target='_blank'>
                 <svg class='w-6 fill-current hover:fill-blue-600 inline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"/></svg>
            </a></h1>
                    <p>${meal?.strTags ? meal.strTags : "No tags available"}</p>
                </div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Ingredients</th>
                            <th>Measures</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <h1 class='text-center text-2xl font-semibold my-4 text-gray-600'>Video Tutorial</h1>
                <iframe class='w-full aspect-video' src=${meal?.strYoutube.replace(
                  "watch?v=",
                  "embed/"
                )}>
                </iframe>
            </label>
            </label>   
        </div>
`;

  /* --------------------------------------------------------------------- */
  const ingredients = Object.keys(meal)
    .slice(9, 29)
    .filter((e) => meal[e])
    .map((e) => meal[e]);
  const measures = Object.keys(meal)
    .slice(29, 49)
    .filter((e) => meal[e])
    .map((e) => meal[e]);
  ingredients.map((e, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `

            <th>${i + 1}</th>
            <td>${e}</td>
            <td>${measures[i]}</td>
        `;
    div.querySelector("tbody").append(tr);
  });
  /* --------------------------------------------------------------------- */

  main.append(div);
  /* --------------------------------------------------------------------- */
}
const dataFetch = (key = "search.php?s=") => {
  main.innerHTML = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/${key}`)
    .then((res) => res.json())
    .then((data) =>
      data.meals
        ? data.meals.map((e) => create(e))
        : alert(`${key} not found.Please try another`)
    );
};

dataFetch();
