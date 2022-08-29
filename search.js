const input = document.getElementById("input");
input.addEventListener("change", (e) => {
  dataFetch("search.php?s=" + e.target.value);
});

setTimeout(() => {
  const cats = document.getElementsByClassName("category");
  for (let cat of cats) {
    cat.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log(cat.innerText);
    });
  }
}, 3000);
