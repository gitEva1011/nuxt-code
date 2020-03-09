/*import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);*/
import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import messages from 'assets/js/zh_CN';
Validator.updateDictionary({
  zh_CN: {
    messages
  }
});
const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'zh_CN',
  messages: null,
  strict: true
};
Vue.use(VeeValidate,config);


/*Validator.extend('mobile', {
    messages: {
      cn:field => field + '必须是11位手机号码',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});

const dictionary = {
    cn: {
        messages: {
            mobile: () => '必须是11位手机号码'
        }
    }
};

Validator.updateDictionary(dictionary);*/

