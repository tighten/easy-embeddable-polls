<template>
  <poll :allow-custom-answer="true"
    button-text="Submit My Bread Choice"
    :choices="{ 'banana_bread': 'Banana Bread', 'wheat_bread': 'Wheat Bread', 'sourdough_bread': 'Sourdough Bread' }"
    customAnswerLabel="Other Bread"
    endpoint="https://jsonplaceholder.typicode.com/posts"
    :multiple-choice="false"
    thank-you-message="Thanks for your opinion on bread!"
    title="What's your favorite bread?"
    :submitErrorHook="onError"
    :submitSuccessHook="onSuccess"
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
  }
};
</script>

<style>
body {
  background: #ecf0f4;
}

.easy-embeddable-poll {
  border: 1px solid #dde1e7;
  margin: 0 auto;
  max-width: 320px;
}

.easy-embeddable-poll-title-wrapper {
  background: #fff;
  border-bottom: 1px solid #dde1e7;
  font-weight: bold;
  padding: 15px 20px;
}

.easy-embeddable-poll-choices {
  background: #fff;
  padding: 20px 20px 10px 20px;
}

.easy-embeddable-poll-choice {
  margin-bottom: 10px;
}

.easy-embeddable-poll-choice input[type="radio"] {
  margin-right: 5px;
}

.easy-embeddable-poll-custom-answer-choice label {
  margin-right: 5px;
}

.easy-embeddable-poll-submit-wrapper {
  background: #f5f9fc;
  padding: 20px;
}

.easy-embeddable-poll-submit {
  appearance: none;
  background: #1c28eb;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.easy-embeddable-poll-thank-you {
  background: #fff;
  padding: 20px;
  text-align: center;
}
</style>
