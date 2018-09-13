<template>
  <div id="app">
    <poll :multiple-choice="false" field-goal-form-key="tGhtN" :allow-custom-answer="true" :choices="{ 'one': 'anotha one', 'two': 'anotha two' }">
    </poll>
  </div>
</template>

<script>
import Poll from './components/Poll.vue';
import RenderlessPoll from './components/RenderlessPoll.vue';

export default {
  name: 'app',
  components: {
    Poll,
    RenderlessPoll,
  },
};
</script>
