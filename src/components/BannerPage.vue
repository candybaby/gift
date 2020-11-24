<template>
  <div>
    <!-- Hot Deal 區塊 Banner -->
    <h2 style="text-align: center;">Hot Deal</h2>
    <div class="b-container">
      <banner
        v-for="(banner, index) in hotBanners"
        :key="index"
        :size="banner.size"
        :content-position="banner.contentPosition"
        :title="banner.title"
        :sub-title="banner.subTitle"
        :cta-btn-text="banner.ctaBtnText"
        :price-origin="banner.priceOrigin"
        :price-discount="banner.priceDiscount"
        :background-src="banner.backgroundSrc"
      ></banner>
    </div>
    <!-- Best Offer 區塊 Banner -->
    <h2 style="text-align: center;">Best Offer</h2>
    <div class="b-container">
      <banner
        v-for="(banner, index) in bestBanners"
        :key="index"
        :size="banner.size"
        :content-position="banner.contentPosition"
        :title="banner.title"
        :sub-title="banner.subTitle"
        :cta-btn-text="banner.ctaBtnText"
        :price-origin="banner.priceOrigin"
        :price-discount="banner.priceDiscount"
        :background-src="banner.backgroundSrc"
      ></banner>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import BestOfferBG1 from "@/stories/assets/bestoffer_1_bg.jpg";
import BestOfferBG2 from "@/stories/assets/bestoffer_2_bg.png";
import HotDealBG1 from "@/stories/assets/hotdeal_1_bg.jpg";
import HotDealBG2 from "@/stories/assets/hotdeal_2_bg.png";

export default {
  name: "HelloWorld",
  components: {
    Banner
  },
  data() {
    return {
      hotBanners: [
        {
          size: "large",
          contentPosition: "right",
          title: "紅玉玫瑰保濕奇肌精露凝霜組",
          subTitle: "抗衡彈力精粹5ML",
          ctaBtnText: "SHOP NOW",
          priceOrigin: "100 TWD",
          priceDiscount: "90 TWD",
          backgroundSrc: BestOfferBG1
        },
        {
          size: "small",
          contentPosition: "top",
          title: "紅玉玫瑰保濕奇肌精露凝霜組",
          subTitle: "抗衡彈力精粹5ML",
          ctaBtnText: "SHOP NOW",
          priceOrigin: "100 TWD",
          priceDiscount: "90 TWD",
          backgroundSrc: HotDealBG1
        },
        {
          size: "small",
          contentPosition: "bottom",
          title: "紅玉玫瑰保濕奇肌精露凝霜組",
          subTitle: "抗衡彈力精粹5ML",
          ctaBtnText: "SHOP NOW",
          priceOrigin: "100 TWD",
          priceDiscount: "90 TWD",
          backgroundSrc: HotDealBG2
        }
      ],
      bestBanners: [
        {
          size: "large",
          contentPosition: "right",
          title: "紅玉玫瑰保濕奇肌精露凝霜組",
          subTitle: "抗衡彈力精粹5ML",
          ctaBtnText: "SHOP NOW",
          priceOrigin: "100 TWD",
          priceDiscount: "90 TWD",
          backgroundSrc: BestOfferBG1
        },
        {
          size: "large",
          contentPosition: "left",
          title: "紅玉玫瑰保濕奇肌精露凝霜組",
          subTitle: "抗衡彈力精粹5ML",
          ctaBtnText: "SHOP NOW",
          priceOrigin: "100 TWD",
          priceDiscount: "90 TWD",
          backgroundSrc: BestOfferBG2
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
