function createCard(house) {
  const card = document.createElement("div");
  const cardHeader = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardImg = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardDesc = document.createElement("p");
  const cardButton = document.createElement("button");
  cardHeader.appendChild(cardImg);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDesc);
  cardBody.appendChild(cardButton);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.classList.add("card");
  cardHeader.classList.add("card-header");
  cardBody.classList.add("card-body");
  cardImg.classList.add("card-img");
  cardTitle.classList.add("card-title");
  cardDesc.classList.add("card-description");
  cardButton.classList.add("card-button");
  cardImg.style.backgroundImage = `url('${house.img}')`;
  cardTitle.textContent = house.name;
  cardDesc.innerText = house.desc;
  cardButton.innerText = "Rent";
  return card;
}

for (const house of houseToRent) {
  // Options 1 : template html string

  // const template = `
  // <div class="card">
  //   <div class="card-header">
  //     <div class="card-img" style="background-image: url('${house.img}');"></div>
  //   </div>
  //   <div class="card-body">
  //     <h2 class="card-title">${house.name}</h2>
  //     <p class="card-description">This is the perfect house for you, come to visit it you'll love it </p>
  //     <button class="card-button">Rent</button>
  //   </div>
  // </div>`;
  // document.querySelector(".cards").innerHTML += template;


  // Options 2 : create html element
  const card = createCard(house);
  document.querySelector(".cards").appendChild(card);
}

document.getElementById("isAvailable").addEventListener("click", function(event) {
  document.querySelector(".cards").innerHTML = null;
  for (const house of houseToRent) {
    if (event.target.checked) {
      if (house.available) {
        const card = createCard(house);
        document.querySelector(".cards").appendChild(card);
      }
    }
    else {
      const card = createCard(house);
      document.querySelector(".cards").appendChild(card);
    }
  }
})

document.querySelector(".select").addEventListener("change", function(event) {
  document.querySelector(".cards").innerHTML = null;
  for (const house of houseToRent) {
    if (event.target.value === house.type && event.target.value !== 'All') {
      const card = createCard(house);
      document.querySelector(".cards").appendChild(card);
    }
    else {
      const card = createCard(house);
      document.querySelector(".cards").appendChild(card);
    }
  }

})