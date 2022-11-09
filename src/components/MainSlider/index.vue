<template lang="pug">
section.page__main-slider.main-slider
  .main-slider__container.section-container
    .main-slider__body
      .main-slider__content.content-main
        h1.content-main__title High-Quality Furniture Just For You
        .content-main__text Our furniture is made from selected and best quality materials that are suitable for your dream home
        a.btn.content-main__button(href='') Shop Now
      .main-slider__slider.slider-main
        .slider-main__controls.controls-slider-main
          .controls-slider-main__dotts.swiper-pagination-clickable.swiper-pagination-bullets
            span(
              v-for='i in slides',
              :key='i',
              :class='getBulletClasses(i)',
              @click='setSlide(i)'
            )
          .controls-slider-main__arrows.slider-arrows
            BtnTag(
              iconClass='hor_chevron',
              classes='slider-arrow slider-arrow_prev',
              @click.native='prev'
            )
            BtnTag(
              iconClass='hor_chevron',
              classes='slider-arrow slider-arrow_next',
              @click.native='next'
            )
        Swiper.slider-main__body._swiper(
          ref='mySwiper',
          :options='swiperOption'
        )
          SwiperSlide.slider-main__slide(v-for='i in slides', :key='i')
            .slider-main__image._ibg 
              ImgTag(
                :src='"img/main-slider/" + i + ".jpg"',
                :alt='"Image " + i'
              )
            LinkTag.slider-main__content(
              data-swiper-parallax-opacity='0',
              data-swiper-parallax-x='-100%'
            )
              .slider-main__title Bohauss
              .slider-main__text Luxury big sofa 2-seat
              .slider-main__price._icon-arrow-link Rp 17.000.000
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
