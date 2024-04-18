import React from "react";
import { Carousel } from "./components/Carousel.tsx";
import VadLogo from "./components/vad_logo.js";
import TextOverlay from "./components/TextOverlay";
import LowerSection from "./components/LowerSection";
import ScrollToTop from "./components/ScrollToTop.js";
import MiddleSection from "./components/MiddleSection.js";
import NewCarousel from "./components/NewCarousel.js";
import ParallaxCom from "./components/ParallaxCom.js";
import SlidingText from "./components/SlidingText.js";
import SlidingText2 from "./components/SlidingText2.js";
import VideoCarousel from "./components/VideoCarousel.js";
import ParallaxImg1 from "./components/ParallaxImg1.js";
import EndHead from "./components/EndHead.js";
import ContactUs from "./components/ContactUs.js";
import Footer from "./components/Footer.js";

import car1 from "./img/SlidesImage3.png";
import car2 from "./img/SlidesImage2.png";
import car3 from "./img/SlidesImage1.png";

import logoImage from "./img/vad_logo2.png";

import gif1 from "./gifs/gif1.gif";
import gif2 from "./gifs/gif2.gif";
import gif3 from "./gifs/gif3.gif";
import gif4 from "./gifs/gif4.gif";

import Slider1 from "./img/Slider1.png";
import Slider2 from "./img/Slider2.png";
import Slider3 from "./img/Slider3.png";
import Slider4 from "./img/Slider4.png";
import Slider5 from "./img/Slider5.png";
import Slider6 from "./img/Slider6.png";
import Slider7 from "./img/Slider7.png";
import Slider9 from "./img/Slider9.png";
import Slider10 from "./img/Slider10.png";
import Slider11 from "./img/Slider11.png";

import Slider21 from "./img/Slider2-1.png";
import Slider22 from "./img/Slider2-2.png";
import Slider23 from "./img/Slider2-3.png";
import Slider24 from "./img/Slider2-4.png";
import Slider25 from "./img/Slider2-5.png";

import cafe1 from "./img/Cafe1-01.jpg";
import cafe2 from "./img/Cafe2-01.jpg";
import logo1 from "./img/shopLogo1.jpeg";
import logo2 from "./img/shopLogo2.png";

import insta from "./img/instagram.png";
import fb from "./img/facebook.png";
import yt from "./img/youtube.png";
import logoV from "./img/VadilalLogo.png";

import contactImg from "./img/ContactImage.jpg";

import ChocoFudge from "./img/Choco Fudge.png";
import AmericanNuts from "./img/American Nuts.png";
import Rajwadi from "./img/Rajwadi.png";
import ChocoFlingo from "./img/Choco Crackle Flingo.png";
import GourmetCrackle from "./img/Gourmet_Choco Crakle.png";
import Falooda from "./img/Gourmet Natural Tub_Falooda.png";
import BPK from "./img/BPK-Badam Pista Kesar.png";
import CookieSandwich from "./img/Cookie Icecream Sandwich.png";
import GulabJamun from "./img/Gourmet Natural_Gulab Jamun.png";
import ChocoOverload from "./img/Chocolate Overload.png";

import VideoPhoto1 from "./img/VideoPhoto1.jpg";
import VideoPhoto2 from "./img/VideoPhoto2.jpg";
import VideoPhoto3 from "./img/VideoPhoto3.jpg";
import VideoPhoto4 from "./img/VideoPhoto4.jpg";
import PlayButton from "./img/PlayButton.png";

import Par1 from "./img/parallax1.png";
import Par2 from "./img/parallax2.png";
import Par3 from "./img/parallax3.png";
import Par4 from "./img/parallax4.png";
import Par5 from "./img/parallax5.png";
import Par6 from "./img/parallax6.png";
import Par7 from "./img/parallax7.png";
import Par8 from "./img/parallax8.png";

const data2 = [
  {
    name: "Vanilla Brownie Fudge Icecream",
    img: VideoPhoto1,
    review:
      "A melt-in-the-mouth vanilla fudge, combined with rich chocolate brwonie",
    player: PlayButton,
    video: "https://www.youtube.com/watch?v=eV2lmJcz5H0",
  },
  {
    name: "Ice Cream Cake",
    img: VideoPhoto2,
    review:
      "A slice of colorfully layered, nutty and creamy icecream that will make you come back for more.",
    player: PlayButton,
    video: "https://www.youtube.com/watch?v=SpKTgqh6E-Y&t=1s",
  },
  {
    name: "Falooda Icecream",
    img: VideoPhoto3,
    review:
      "The Ultimate sweetness with scoops of Vadilal touch that you can relish anytime and anywhere.",
    player: PlayButton,
    video: "https://www.youtube.com/watch?v=9ihMfDjtLMc&t=1s",
  },
  {
    name: "Ice Cream Sandwich",
    img: VideoPhoto4,
    review:
      "Crispy chocolatey coverings on both ends with creamy, soft and delectable ice cream. This is one sandwich you will never say no to.",
    player: PlayButton,
    video: "https://www.youtube.com/watch?v=2hNkIVmS7cM",
  },
];

const data = [
  {
    name: "Choco Fudge",
    img: ChocoFudge,
    review: "Badabite Ice Cream Candy",
  },
  {
    name: "American Nuts",
    img: AmericanNuts,
    review: "Flingo Ice Cream Cone",
  },
  {
    name: "Rajwadi",
    img: Rajwadi,
    review: "Gourmet Natural Kulfi",
  },
  {
    name: "Choco Crackle Flingo",
    img: ChocoFlingo,
    review: "Flingo Ice Cream Cone",
  },
  {
    name: "Choco Crackle",
    img: GourmetCrackle,
    review: "Gourmet Tubs",
  },
  {
    name: "Falooda",
    img: Falooda,
    review: "Gourmet Natural Tubs",
  },
  {
    name: "Badam Pista Kesar",
    img: BPK,
    review: "Gourmet Natural Kulfi",
  },
  {
    name: "Cookie Ice Cream Sandwich",
    img: CookieSandwich,
    review: "Novelties",
  },
  {
    name: "Gulab Jamun",
    img: GulabJamun,
    review: "Gourmet Natural Tubs",
  },
  {
    name: "Chocolate Overload",
    img: ChocoOverload,
    review: "Ice Cream Cakes",
  },
];

const items = [
  { text: "Dollies", image: Slider1 },
  { text: "Flingo Ice Cream Cones", image: Slider2 },
  { text: "Ice Trooper Icecream", image: Slider3 },
  { text: "Bada Bite Icecream Candy", image: Slider4 },
  { text: "Shrikhand Cup", image: Slider5 },
  { text: "Cup Treats Icecreams", image: Slider6 },
  { text: "No Sugar Icecream Cups", image: Slider7 },
  { text: "Kulfis", image: Slider9 },
  { text: "Gourmet Cups", image: Slider10 },
  { text: "Cones", image: Slider11 },
];

const items2 = [
  { text: "Gourmet Natural Tubs", image: Slider21 },
  { text: "Gourmet Tubs", image: Slider22 },
  { text: "Ice Cream Cakes", image: Slider23 },
  { text: "Party Packs", image: Slider24 },
  { text: "Consumer Bulk Packs", image: Slider25 },
];

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
];

const gifs = [gif1, gif2, gif3, gif4];
const text = [
  "No Compromise on Quality!",
  "Creative and Innovative",
  "Naturally Pure",
  "Made with Care",
];

export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: "100%",
        width: "100%",
        height: "100vh",
        aspectRatio: "10 / 6",
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Carousel images={IMAGES} />
      <VadLogo logoImage={logoImage} />
      <TextOverlay />
      <MiddleSection />
      <LowerSection gifs={gifs} text={text} />
      <NewCarousel data={data} />
      <ParallaxCom
        Par1={Par1}
        Par2={Par2}
        Par3={Par3}
        Par4={Par4}
        Par5={Par5}
        Par6={Par6}
        Par7={Par7}
        Par8={Par8}
      />
      <SlidingText items={items} />
      <SlidingText2 items2={items2} />
      <VideoCarousel data2={data2} />
      <ParallaxImg1 image1={cafe1} image2={cafe2} logo1={logo1} logo2={logo2} />
      <EndHead />
      <ContactUs contactImg={contactImg} />
      <Footer insta={insta} fb={fb} yt={yt} logoV={logoV} />
      <ScrollToTop />
    </div>
  );
}
