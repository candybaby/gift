<template>
  <div>
    <a :class="wrapClasses">
      <div :class="contentClass">
        <section class="banner-text">
          <h2 class="title" :style="titleStyle">{{ title }}</h2>
          <p class="sub-title" :style="subTitleStyle">{{ subTitle }}</p>
        </section>
        <section class="banner-price">
          <span class="price-discount">{{ priceDiscount }}</span>
          <span class="price-origin">{{ priceOrigin }}</span>
        </section>
        <section class="banner-cta">
          <button :style="ctaBtnStyle">{{ ctaBtnText }}</button>
        </section>
      </div>
      <div class="banner-bg">
        <img :src="backgroundSrc">
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "Banner",
  props: {
    size: {
      type: String,
      default: "large",
      validator: function(value) {
        return ["large", "small"].indexOf(value) !== -1;
      }
    },
    contentPosition: {
      type: String,
      default: "right",
      validator: function(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) !== -1;
      }
    },
    title: {
      type: String,
      default: "Title"
    },
    /**
     * 標題顏色
     */
    titleColor: {
      type: String,
      default: "#ee5d79"
    },
    subTitle: {
      type: String,
      default: "subTitle"
    },
    /**
     * 副標題顏色
     */
    subTitleColor: {
      type: String,
      default: "#363636"
    },
    /**
     * 按鈕文字
     */
    ctaBtnText: {
      type: String,
      default: "SHOP NOW"
    },
    /**
     * 按鈕文字大小
     */
    ctaBtnTextSize: {
      type: String,
      default: "10px"
    },
    /**
     * 按鈕文字顏色
     */
    ctaBtnTextColor: {
      type: String,
      default: "#ffffff"
    },
    /**
     * 按鈕顏色
     */
    ctaBtnColor: {
      type: String,
      default: "#ee5d79"
    },
    priceOrigin: {
      type: String,
      default: "100.00"
    },
    priceDiscount: {
      type: String,
      default: "90.10"
    },
    /**
     * 底圖
     */
    backgroundSrc: {
      type: String
    }
  },
  computed: {
    wrapClasses() {
      let isLarge = "large" === this.size;
      return {
        "banner-wrap": true,
        "size-lg": isLarge,
        "size-sm": !isLarge
      };
    },
    contentClass() {
      return {
        "banner-content": true,
        [`postion-${this.contentPosition}`]: true
      };
    },
    titleStyle() {
      return {
        color: this.titleColor,
        "font-size": "40px"
      };
    },
    subTitleStyle() {
      return {
        color: this.subTitleColor,
        "font-size": "16px"
      };
    },
    ctaBtnStyle() {
      return {
        color: this.ctaBtnTextColor,
        "font-size": this.ctaBtnTextSize,
        "background-color": this.ctaBtnColor
      };
    }
  }
};
</script>

<style scoped>
@import "../assets/css/normalize.css";
@import "../assets/css/banner.css";
</style>
