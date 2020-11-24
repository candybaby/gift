import Banner from "../components/Banner.vue";
import BestOfferBG1 from "./assets/bestoffer_1_bg.jpg";
import BestOfferBG2 from "./assets/bestoffer_2_bg.png";
import HotDealBG1 from "./assets/hotdeal_1_bg.jpg";
import HotDealBG2 from "./assets/hotdeal_2_bg.png";

export default {
  title: "Example/Banner",
  component: Banner,
  argTypes: {
    size: { control: { type: "select", options: ["large", "small"] } },
    contentPosition: {
      control: { type: "select", options: ["top", "bottom", "left", "right"] }
    },
    titleColor: { control: "color" },
    subTitleColor: { control: "color" },
    ctaBtnTextColor: { control: "color" },
    ctaBtnColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Banner },
  template: '<banner v-bind="$props" />'
});

export const LargeRight = Template.bind({});
LargeRight.args = {
  size: "large",
  contentPosition: "right",
  title: "紅玉玫瑰保濕奇肌精露凝霜組",
  // titleColor: "#ee5d79",
  subTitle: "抗衡彈力精粹5ML",
  // subTitleColor: "#363636",
  ctaBtnText: "SHOP NOW",
  // ctaBtnTextSize: "10px",
  // ctaBtnTextColor: "#ffffff",
  // ctaBtnColor: "#ee5d79",
  priceOrigin: "100 TWD",
  priceDiscount: "90 TWD",
  backgroundSrc: BestOfferBG1
};

export const LargeLeft = Template.bind({});
LargeLeft.args = {
  size: "large",
  contentPosition: "left",
  title: "紅玉玫瑰保濕奇肌精露凝霜組",
  // titleColor: "#ee5d79",
  subTitle: "抗衡彈力精粹5ML",
  // subTitleColor: "#363636",
  ctaBtnText: "SHOP NOW",
  // ctaBtnTextSize: "10px",
  // ctaBtnTextColor: "#ffffff",
  // ctaBtnColor: "#ee5d79",
  priceOrigin: "100 TWD",
  priceDiscount: "90 TWD",
  backgroundSrc: BestOfferBG2
};

export const SmallTop = Template.bind({});
SmallTop.args = {
  size: "small",
  contentPosition: "top",
  title: "紅玉玫瑰保濕奇肌精露凝霜組",
  // titleColor: "#ee5d79",
  subTitle: "抗衡彈力精粹5ML",
  // subTitleColor: "#363636",
  ctaBtnText: "SHOP NOW",
  // ctaBtnTextSize: "10px",
  // ctaBtnTextColor: "#ffffff",
  // ctaBtnColor: "#ee5d79",
  priceOrigin: "100 TWD",
  priceDiscount: "90 TWD",
  backgroundSrc: HotDealBG1
};

export const SmallBottom = Template.bind({});
SmallBottom.args = {
  size: "small",
  contentPosition: "bottom",
  title: "紅玉玫瑰保濕奇肌精露凝霜組",
  // titleColor: "#ee5d79",
  subTitle: "抗衡彈力精粹5ML",
  // subTitleColor: "#363636",
  ctaBtnText: "SHOP NOW",
  // ctaBtnTextSize: "10px",
  // ctaBtnTextColor: "#ffffff",
  // ctaBtnColor: "#ee5d79",
  priceOrigin: "100 TWD",
  priceDiscount: "90 TWD",
  backgroundSrc: HotDealBG2
};
