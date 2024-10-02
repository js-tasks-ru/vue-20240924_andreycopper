import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',

  setup() {
    const currenDate = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' });

    return {
      currenDate
    }
  },

  template: '<div>Сегодня {{ currenDate }}</div>'
});

const app = createApp(App);
app.mount('#app');

