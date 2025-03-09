const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "TOTAL WAR",
      price: 69.99,
      flavours: [
        {
          code: "red",
          img: "./img/TotalWar.png",
        },
        {
          code: "orange",
          img: "./img/orangeblood.png",
        },
      ],
    },
    {
      id: 2,
      title: "ON WHEY PROTEIN",
      price: 89.99,
      flavours: [
        {
          code: "creme",
          img: "./img/whey.png",
        },
        {
          code: "chocolate",
          img: "./img/chocolate.png",
        },
      ],
    },
    {
      id: 3,
      title: "ON CASEIN PROTEIN",
      price: 89.99,
      flavours: [
        {
          code: "chocolate",
          img: "./img/Casein.png",
        },
        {
          code: "white",
          img: "./img/vanilla.png",
        },
      ],
    },
    {
      id: 4,
      title: "BCAAS",
      price: 47.99,
      flavours: [
        {
          code: "pink",
          img: "./img/BCAAS.png",
        },
        {
          code: "orange",
          img: "./img/pineapple.png",
        },
      ],
    },
    {
      id: 5,
      title: "Creatine",
      price: 75.99,
      flavours: [
        {
          code: "gray",
          img: "./img/creatine.png",
        }
      ],
    },
  ];

let chosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductFlavours = document.querySelectorAll(".flavour")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        chosenProduct = products[index]
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.flavours[0].img
        currentProductFlavours.forEach((flavour, index)=>{
            flavour.style.backgroundColor = chosenProduct.flavours[index].code

        });
    });
});

currentProductFlavours.forEach((flavour, index)=>{
    flavour.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.flavours[index].img
    })
})

currentProductSizes.forEach((size, index)=>{
  size.addEventListener("click", ()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor = "white"
      size.style.color = "black"
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});