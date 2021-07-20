export default {
  methods: {
    isGadget() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent,
      );
    },
    isMobile() {
      return window.innerWidth < 768 && this.isGadget();
    },
    isPad() {
      // return (
      //   window.innerWidth >= 768 && window.innerWidth < 992 && this.isGadget()
      // );
      return window.innerWidth < 992 && this.isGadget();
    },
  },
};
