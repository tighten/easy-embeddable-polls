<template>
  <div id="app">
    <EasyStaticPoll
      :allow-custom-answer="true"
      field-goal-key="tGhtN"
      :multiple-choice="true"
      :choices="{
        'one': 'This is the first choice',
        'two': 'This is the first choice',
        'three': 'This is the first choice',
        'four': 'This is the first choice',
      }"
    />
  </div>
</template>

<script>
import EasyStaticPoll from './components/EasyStaticPoll.vue';

export default {
  name: 'app',
  components: {
    EasyStaticPoll,
  },
};
</script>
