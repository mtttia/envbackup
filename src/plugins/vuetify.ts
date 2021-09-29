import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#d4a373',
        secondary: '#faedcd',
        accent: '#fefae0',
        error: '#ffadad',
        info: '#e9edc9',
        success: '#ccd5ae',
        warning: '#fdffb6'
      },
    },
  },
});
