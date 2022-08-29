const main = document.getElementById("main");

function create(meal) {
  let count = 0;
  const div = document.createElement("div");
  div.className =
    "max-w-sm w-80 overflow-hidden rounded-xl bg-yellow-50 shadow-md duration-200  hover:shadow-xl";
  div.innerHTML = `
        <img
          src=${meal.strMealThumb}
          alt="plant"
          class="h-60 object-cover w-full"
        />
        <div class="p-5">
          <button title="Visit ${meal.strCategory} category"
            class="category w-max rounded-full mr-3 px-4  ring-blue-700 ring-1 text-blue-700 hover:bg-blue-700 hover:text-white"
          >
            ${meal.strCategory}
          </button>
          <button title="More ${meal.strArea} foods"
            class="area w-max rounded-full px-4 pb-1 ring-yellow-500 ring-1 text-yellow-500 hover:bg-yellow-500 hover:text-white"
          >
            ${meal.strArea}
          </button>
          <p class=" text-lg mb-5 text-gray-700 font-semibold my-2">
            ${meal.strMeal}
            <a href=${meal.strSource} target='_blank'>
                 <svg class='w-4 inline fill-blue-500 cursor-pointer mx-1 align-text-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/>
                 </svg>
            </a>
          </p>

          
            <label for=${
              meal.idMeal
            } class="see-more w-full text-center cursor-pointer block rounded-md bg-blue-600 py-2 font-semibold text-blue-50 hover:text-white hover:bg-blue-500 hover:shadow-md duration-75">open modal</label>

            <input type="checkbox" id=${meal.idMeal}  class="modal-toggle" />
            <label for=${meal.idMeal}  class="modal cursor-pointer">
            <label class="modal-box relative p-0" for="">
                 <img
                    src=${meal.strMealThumb}
                    alt="plant"
                    class="object-cover h-60 w-full"
                    />
                <div class='p-4'>
                    <h1 class= 'text-2xl font-semibold'>${meal.strArea} ${
    meal.strMeal
  }</h1>
                    <p>${meal.strTags ? meal.strTags : "No tags available"}</p>
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
                <iframe class='w-full aspect-video' src=${meal.strYoutube.replace(
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
  div.querySelector(".category").addEventListener("click", (e) => {
    console.log(meal.strCategory);
  });
  div.querySelector(".area").addEventListener("click", (e) => {
    console.log(meal.strArea);
  });
  div.querySelector(".see-more").addEventListener("click", (e) => {
    console.log(meal.strArea);
  });
  main.append(div);
  /* --------------------------------------------------------------------- */
}
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => data.meals.map((e) => create(e)));
