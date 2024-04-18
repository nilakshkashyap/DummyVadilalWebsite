import React, { useEffect } from "react";
import ProductDisplay from "./components/ProductDisplay";
import Footer from "./components/Footer";
import logoImage from "./img/vad_logo2.png";
import VadLogo from "./components/vad_logo";
import waahVadilal from "./img/WaahVadilal.png";
import mainImage from "./img/mainImage.jpeg";
import ProductList from "./components/ProductList";
import Product1 from "./img/product1.jpg";
import Product2 from "./img/product2.jpg";
import Product3 from "./img/product3.jpg";
import Product4 from "./img/product4.jpg";
import Product5 from "./img/product5.jpg";
import Product6 from "./img/product6.jpg";
import Product7 from "./img/product7.jpg";
import Product8 from "./img/product8.jpg";
import Product9 from "./img/product9.jpg";
import Product10 from "./img/product10.jpg";
import Product11 from "./img/product11.jpg";
import Product12 from "./img/product12.jpg";
import Product13 from "./img/product13.jpg";
import Product14 from "./img/product14.jpg";
import Product15 from "./img/product15.jpg";
import Product16 from "./img/product16.jpg";
import Product17 from "./img/product17.jpg";
import Product18 from "./img/product18.jpg";
import Product19 from "./img/product19.jpg";
import Product20 from "./img/product20.jpg";
import Product21 from "./img/product21.jpg";
import Product22 from "./img/product22.jpg";
import Product23 from "./img/product23.jpg";
import ScrollToTop from "./components/ScrollToTop";

import insta from "./img/instagram.png";
import fb from "./img/facebook.png";
import yt from "./img/youtube.png";
import logoV from "./img/VadilalLogo.png";

const dataAll = [
  {
    name: "Gourmet Natural Tubs",
    img: Product1,
    review:
      "Rich, creamy, and delicious. Gourmet Natural’s classic Indian desserts are irresistibly tasty!",
  },
  {
    name: "Gourmet Tubs",
    img: Product2,
    review:
      "Celebrate your moments with some blissful scoops of marvellousness. Time to dig in!",
  },
  {
    name: "Flingo Icecream Cone",
    img: Product3,
    review:
      "An Ice Cream for every mood. Crispy, crunchy, nutty and an oozing delight to the core. ",
  },
  {
    name: "Badabite Icecream Candy",
    img: Product4,
    review:
      "Have a Bada Blast with Badabite that amazingly melts in your mouth.",
  },
  {
    name: "Ice Cream Cake",
    img: Product5,
    review: "Try Vadilal’s Ice Cream Cakes and enjoy the best of both worlds!",
  },
  {
    name: "Jumbo Icecream Cups",
    img: Product6,
    review:
      "Enjoy Big! Massive scoops of scintillating, melt-in-your-mouth, diversely rich Ice Cream.",
  },
  {
    name: "Chocolate Candies",
    img: Product7,
    review: "Hop onto a fun chocolatey ride you don’t want to ever miss.",
  },
  {
    name: "Ice Trooper Icecream",
    img: Product8,
    review:
      "Add more fun and colour to your moments of joy with our frosty delights on a stick. ",
  },
  {
    name: "Party Packs",
    img: Product9,
    review:
      "Make your social gatherings even more memorable. 20+ delectable reasons to party. ",
  },
  {
    name: "Dollies",
    img: Product10,
    review:
      "Enticingly lip-smacking and delicious. Bet you won't stop until you've tried them all.  ",
  },
  {
    name: "Frootful",
    img: Product11,
    review: "Refresh your mood with Frootful Ice Candies. ",
  },
  {
    name: "Gourmet Natural Kulfi",
    img: Product12,
    review:
      "Keep cool, beat the heat and tantalize your taste buds at the same time.",
  },
  {
    name: "Cool-Fi",
    img: Product13,
    review:
      "A perfectly refreshing treat for you and your loved ones. There’s one for every taste. ",
  },
  {
    name: "Shrikhand",
    img: Product14,
    review: "Our traditional favourite for your anytime and anywhere meal. ",
  },
  {
    name: "Consumer Bulk Packs",
    img: Product15,
    review:
      "Liven up the mood of any gathering with a bulk pack of deliciousness.",
  },
  {
    name: "Novelties",
    img: Product16,
    review:
      "Celebrate every moment with our refreshingly novel and iconic range of Novelties. ",
  },
  {
    name: "Cup Treats",
    img: Product17,
    review:
      "A scoop full of fun and joy to treat your friends, family and that special one. ",
  },
  {
    name: "No Sugar Icecream Cups",
    img: Product18,
    review:
      "For all health freaks out there! Now gorge on your favourite Ice Cream guilt-free.  ",
  },
  {
    name: "Gourmet Cups",
    img: Product19,
    review:
      "Our premium range of Ice Creams available in mouth-watering flavours.",
  },
  {
    name: "Cones",
    img: Product20,
    review:
      "A range of deliciousness wrapped in a crispy crunchy cone. Happy Munching! ",
  },

  {
    name: "Kulfis",
    img: Product21,
    review:
      "Gourmet flavours in the familiar shape of a classic Kulfi on a stick.",
  },
  {
    name: "Sunday Spins",
    img: Product22,
    review:
      "A range of deliciousness wrapped in a crispy crunchy cone. Happy Munching! ",
  },
  {
    name: "Sundae Cups",
    img: Product23,
    review: "A scoop full of classic Sundae flavours for you to indulge in!",
  },
];

const dataImpulse = [
  {
    name: "Flingo Icecream Cone",
    img: Product3,
    review:
      "An Ice Cream for every mood. Crispy, crunchy, nutty and an oozing delight to the core. ",
  },
  {
    name: "Badabite Icecream Candy",
    img: Product4,
    review:
      "Have a Bada Blast with Badabite that amazingly melts in your mouth.",
  },

  {
    name: "Jumbo Icecream Cups",
    img: Product6,
    review:
      "Enjoy Big! Massive scoops of scintillating, melt-in-your-mouth, diversely rich Ice Cream.",
  },
  {
    name: "Chocolate Candies",
    img: Product7,
    review: "Hop onto a fun chocolatey ride you don’t want to ever miss.",
  },
  {
    name: "Ice Trooper Icecream",
    img: Product8,
    review:
      "Add more fun and colour to your moments of joy with our frosty delights on a stick. ",
  },

  {
    name: "Dollies",
    img: Product10,
    review:
      "Enticingly lip-smacking and delicious. Bet you won't stop until you've tried them all.  ",
  },
  {
    name: "Frootful",
    img: Product11,
    review: "Refresh your mood with Frootful Ice Candies. ",
  },
  {
    name: "Gourmet Natural Kulfi",
    img: Product12,
    review:
      "Keep cool, beat the heat and tantalize your taste buds at the same time.",
  },
  {
    name: "Cool-Fi",
    img: Product13,
    review:
      "A perfectly refreshing treat for you and your loved ones. There’s one for every taste. ",
  },
  {
    name: "Shrikhand",
    img: Product14,
    review: "Our traditional favourite for your anytime and anywhere meal. ",
  },

  {
    name: "Novelties",
    img: Product16,
    review:
      "Celebrate every moment with our refreshingly novel and iconic range of Novelties. ",
  },
  {
    name: "Cup Treats",
    img: Product17,
    review:
      "A scoop full of fun and joy to treat your friends, family and that special one. ",
  },
  {
    name: "No Sugar Icecream Cups",
    img: Product18,
    review:
      "For all health freaks out there! Now gorge on your favourite Ice Cream guilt-free.  ",
  },
  {
    name: "Gourmet Cups",
    img: Product19,
    review:
      "Our premium range of Ice Creams available in mouth-watering flavours.",
  },
  {
    name: "Cones",
    img: Product20,
    review:
      "A range of deliciousness wrapped in a crispy crunchy cone. Happy Munching! ",
  },

  {
    name: "Kulfis",
    img: Product21,
    review:
      "Gourmet flavours in the familiar shape of a classic Kulfi on a stick.",
  },
  {
    name: "Sunday Spins",
    img: Product22,
    review:
      "A range of deliciousness wrapped in a crispy crunchy cone. Happy Munching! ",
  },
  {
    name: "Sundae Cups",
    img: Product23,
    review: "A scoop full of classic Sundae flavours for you to indulge in!",
  },
];

const dataHome = [
  {
    name: "Gourmet Natural Tubs",
    img: Product1,
    review:
      "Rich, creamy, and delicious. Gourmet Natural’s classic Indian desserts are irresistibly tasty!",
  },
  {
    name: "Gourmet Tubs",
    img: Product2,
    review:
      "Celebrate your moments with some blissful scoops of marvellousness. Time to dig in!",
  },

  {
    name: "Ice Cream Cake",
    img: Product5,
    review: "Try Vadilal’s Ice Cream Cakes and enjoy the best of both worlds!",
  },

  {
    name: "Party Packs",
    img: Product9,
    review:
      "Make your social gatherings even more memorable. 20+ delectable reasons to party. ",
  },

  {
    name: "Consumer Bulk Packs",
    img: Product15,
    review:
      "Liven up the mood of any gathering with a bulk pack of deliciousness.",
  },
];

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <VadLogo logoImage={logoImage} />
      <ProductDisplay waahVadilal={waahVadilal} mainImage={mainImage} />
      <ProductList
        dataAll={dataAll}
        dataHome={dataHome}
        dataImpulse={dataImpulse}
      />
      <Footer insta={insta} fb={fb} yt={yt} logoV={logoV} />
      <ScrollToTop />
    </div>
  );
};

export default ProductPage;
