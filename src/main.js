import Vue from 'vue';
import App from './app';
import 'element-ui/lib/theme-default/index.css';
import {
  Select,
  Button
} from 'element-ui';

Vue.component(Select.name, Select);
Vue.component(Button.name, Button);

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});
