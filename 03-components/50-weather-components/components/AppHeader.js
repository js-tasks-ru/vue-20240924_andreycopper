import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',

  template: `
    <h1 class="title">
      <slot></slot>
    </h1>
  `
});
