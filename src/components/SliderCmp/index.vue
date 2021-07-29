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
          <a
            href=""
            data-da=".main-slider__body,991.98"
            class="content-main__button btn"
            >Shop Now</a
          >
        </div>
        <div class="main-slider__slider slider-main">
          <div class="slider-main__controls controls-slider-main">
            <div class="controls-slider-main__dotts"></div>
            <div class="controls-slider-main__arrows slider-arrows">
              <BtnTag
                iconClass="hor_chevron"
                classes="slider-arrow slider-arrow_prev"
              ></BtnTag>
              <BtnTag
                iconClass="hor_chevron"
                classes="slider-arrow slider-arrow_next"
              ></BtnTag>
            </div>
          </div>
          <!-- <div class="slider-main__body _swiper"> -->
          <!-- <div class="slider-main__slide" v-for="i in 3" :key="i"> -->
          <!-- <swiper-slide class="slider-main__slide" v-for="i in 3" :key="i"> -->
          <Swiper class="slider-main__body _swiper">
            <SwiperSlide class="slider-main__slide">
              <div class="slider-main__image _ibg">
                <ImgTag src="img/main-slider/01.jpg" alt="Image" />
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

// Import Swiper styles
// import 'swiper/swiper.scss';

// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/navigation/navigation.min.css';

// import './style.css';

// import Swiper core and required modules
// import SwiperCore, { Parallax, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
// SwiperCore.use([Parallax, Pagination, Navigation]);

export default {
  name: 'SliderCmp',
  components: {
    BtnTag,
    ImgTag,
    LinkTag,
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang='scss' src='@scssCmp/SliderCmp.scss'>
</style>
