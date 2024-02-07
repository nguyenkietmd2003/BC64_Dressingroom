fetch("../Data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    navPanes = data.tabPanes;
  })
  .catch((error) => {
    alert(error);
  });

let navPanes;
let Order;
const renders = (type) => {
  const grid = document.createElement("div");
  grid.classList.add("row");
  const filter = navPanes.filter((ITem) => ITem.type === type);
  filter.forEach((ITem) => {
    const IT = document.createElement("div");
    IT.classList.add("col-md-4");
    IT.innerHTML = `
      <div class="card">
        <div class="card-body">
          <p class="card-title" style="color: red">${ITem.name}</p>
          <img src="${ITem.imgSrc_png}" width="250" height="200" style="border: 1px solid black">
          <button class="btn-primary btn" data-id="${ITem.id}" style="display: block;">order</button>
        </div>
      </div>
    `;
    IT.querySelector("button").addEventListener("click", () => {
      showITem(ITem.id);
    });
    grid.appendChild(IT);
  });
  const tabContent = document.querySelector(".tab-content");
  tabContent.innerHTML = "";
  tabContent.appendChild(grid);
};

document.querySelectorAll(".nav-pills li").forEach((button) => {
  button.addEventListener("click", function () {
    const type = this.id;
    renders(type);
  });
});

const find = (array, idToFind) => {
  return array.find((ITem) => ITem.id === idToFind) || null;
};

const showITem = (id) => {
  const rs = find(navPanes, id);
  switch (rs.type) {
    case "topclothes":
      Order = "bikinitop";
      break;
    case "botclothes":
      Order = "bikinibottom";
      break;
    case "shoes":
      Order = "feet";
      break;
    case "handbags":
      Order = "handbag";
      break;
    case "necklaces":
      Order = "necklace";
      break;
    case "hairstyle":
      Order = "hairstyle";
      break;
    case "background":
      Order = "background";
      break;
    default:
      break;
  }
  if (Order === "bikinitop" || Order === "bikinibottom") {
    let elem = document.querySelector(`.${Order}`);
    let imgElement = elem.querySelector("img") || document.createElement("img");
    imgElement.src = `${rs.imgSrc_png}`;
    elem.appendChild(imgElement);
  } else {
    let elem = document.querySelector(`.${Order}`);
    elem.style.backgroundImage = `url(${rs.imgSrc_png})`;
  }
};

const DIV = document.querySelector(".contain");
const div = DIV.children;
let classList = [];

for (let i = 0; i < div.length; i++) {
  classList.push(div[i].classList);
}
