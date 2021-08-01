<template>
  <section class="page__main-slider main-slider">
    <div class="main-slider__container section-container">
      <div class="main-slider__body">
        <div class="main-slider__content content-main">
          <h1 class="content-main__title">
            High-Quality Furniture Just For You
          </h1>
          <div class="content-main__text">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </div>
          <a href="" class="btn content-main__button"> Shop Now </a>
        </div>
        <div class="main-slider__slider slider-main">
          <div class="slider-main__controls controls-slider-main">
            <div
              class="
                controls-slider-main__dotts
                swiper-pagination-clickable swiper-pagination-bullets
              "
            >
              <span
                v-for="i in slides"
                :key="i"
                :class="getBulletClasses(i)"
                @click="setSlide(i)"
              ></span>
            </div>
            <div class="controls-slider-main__arrows slider-arrows">
              <BtnTag
                iconClass="hor_chevron"
                classes="slider-arrow slider-arrow_prev"
                @click.native="prev"
              ></BtnTag>
              <BtnTag
                iconClass="hor_chevron"
                classes="slider-arrow slider-arrow_next"
                @click.native="next"
              ></BtnTag>
            </div>
          </div>
          <Swiper
            ref="mySwiper"
            class="slider-main__body _swiper"
            :options="swiperOption"
          >
            <SwiperSlide
              class="slider-main__slide"
              v-for="i in slides"
              :key="i"
            >
              <div class="slider-main__image _ibg">
                <ImgTag
                  :src="'img/main-slider/' + i + '.jpg'"
                  :alt="'Image ' + i"
                />
              </div>
              <LinkTag
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-x="-100%"
                class="slider-main__content"
              >
                <div class="slider-main__title">Bohauss</div>
                <div class="slider-main__text">Luxury big sofa 2-seat</div>
                <div class="slider-main__price _icon-arrow-link">
                  Rp 17.000.000
                </div>
              </LinkTag>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BtnTag from '@tags/BtnTag';
import ImgTag from '@tags/ImgTag';
import LinkTag from '@tags/LinkTag';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import 'swiper/swiper.scss';

export default {
  name: 'MainSlider',
  components: {
    BtnTag,
    ImgTag,
    LinkTag,
    Swiper,
    SwiperSlide,
  },
  data() {
    const $vm = this;

    return {
      swiperOption: {
        loop: true,
        speed: 600,
        parallax: true,
        on: {
          activeIndexChange: swiper => {
            $vm.setCurIndex(swiper.activeIndex);
            console.log(swiper);
          },
        },
      },
      slides: 3,
      curSlide: 0,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    getBulletClasses(index) {
      const baseClass = 'swiper-pagination-bullet';

      return {
        [baseClass]: true,
        [baseClass + '-active']: this.curSlide == index,
      };
    },
    setCurIndex(index) {
      if (index < 1) {
        index = this.slides;
      } else if (index > this.slides) {
        index = 1;
      }

      this.curSlide = index;
      console.log(this.curSlide);
    },
    setSlide(index) {
      this.swiper.slideTo(index);
      this.setCurIndex(index);
    },
    prev() {
      this.swiper.slidePrev();
      this.setCurIndex(this.swiper.activeIndex);
    },
    next() {
      this.swiper.slideNext();
      this.setCurIndex(this.swiper.activeIndex);
    },
  },
  mounted() {
    this.curSlide = this.swiper.activeIndex;
  },
};
</script>

<style lang='scss'>
@import '@scssCmp/MainSlider';
</style>
