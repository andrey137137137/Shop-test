export default {
  methods: {
    isGadget() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
          navigator.userAgent,
        )
      ) {
        return true;
      }

      return false;
    },
    isPad() {
      if (
        // window.innerWidth >= 768 &&
        window.innerWidth < 992 &&
        this.isGadget()
      ) {
        return true;
      }

      return false;
    },
  },
};
