<template lang='pug'>
.footer__subscribe.subscribe
  .subscribe__title._footer-title Stay Updated
  FormTag.subscribe__form(data-message='subscribe', data-test, action='#')
    input.subscribe__input._req._email(
      autocomplete='off',
      type='text',
      name='form[]',
      data-error='Ошибка',
      data-value='Enter your email'
    )
    BtnTag.subscribe__button(iconClass='telegram', type='submit')
</template>

<script>
import FormTag from '@tags/FormTag';
import BtnTag from '@tags/BtnTag';

export default {
  name: 'FooterForm',
  components: {
    FormTag,
    BtnTag,
  },
};
</script>
