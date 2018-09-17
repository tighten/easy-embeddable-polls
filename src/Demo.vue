<template>
  <poll :allow-custom-answer="true"
    button-text="Submit My Candy Choice"
    :choices="['Skittles', 'Starburst', 'Nerds']"
    custom-answer-label="Other Candy"
    endpoint="https://jsonplaceholder.typicode.com/posts"
    error-message="There was a problem submitting your favorite candy."
    :multiple-choice="false"
    :request-config="{ 'X-Requested-With': 'XMLHttpRequest' }"
    :submit-error-hook="onError"
    :submit-success-hook="onSuccess"
    thank-you-message="Thanks for your opinion on rainbow candy!"
    title="What's your favorite rainbow candy?"
  >
  </poll>
</template>

<script>
import Poll from './components/Poll.vue';

export default {
  name: 'app',
  components: {
    Poll,
  },
  methods: {
    onError(error) {
      console.error(error);
    },
    onSuccess(response) {
      console.log('Submitted Successfully!', response);
    },
  },
};
</script>

<style>
@import './main.css';

body {
  background: #ecf0f4;
}
</style>
