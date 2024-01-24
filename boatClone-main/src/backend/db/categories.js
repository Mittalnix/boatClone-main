import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "headphones",
    description:
      "The 7.1 Channel Surround Sound will lead you on your way to euphoria. The wired headphones also come with Dolby Atmos to provide you a theatre-like experience. Let your listening become a reality that you can live and feel with Easy Audio & Mic Driver Customization that isolates the noise, rendering you focused on your music",
  },
  {
    _id: uuid(),
    categoryName: "neckband",
    description:
      "Neckbands provide a hassle-free and comfortable experience for users who prefer a hands-free and lightweight solution for their listening needs. They are also perfect for those who want to enjoy their music without disturbing others.",
  },
  {
    _id: uuid(),
    categoryName: "smartWatch",
    description:
      "In this fast-moving era, let the best smart watches keep at pace with you. That is right! boAt smartwatches are here for you, whether you want to exercise or rest. Our smartwatches are equipped with multiple active sports modes, like cycling, workout, running, walking, climbing, and others — making staying fit easy.",
  },
  {
    _id: uuid(),
    categoryName: "speakers",
    description:
      "Tune into nirvana with the best Bluetooth speakers of all time. boAt speakers offer superior sound quality and performance, providing unparalleled clarity and precision with their signature sound. Whether you're listening to music in your home or at a party, these wireless Bluetooth speakers are the perfect way to enjoy your favourite tunes.",
  },
  {
    _id: uuid(),
    categoryName: "wirelessEarbuds",
    description:
      "Truly in ear wireless with no cables, no connectors, and no hassles. Designed for comfort and unstoppable music, always remain on your toes as Airdopes brings to you the dopest tech there is out there!",
  },
];
