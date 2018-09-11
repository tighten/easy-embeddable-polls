<template>
  <form :action="formAction" :method="method" @submit="submit">
    <div v-for="(choice, key) in choices" :key="key">
      <input :type="type" :id="key" :value="key" v-model="answer">
      <label :for="key">{{ choice }}</label>
    </div>
    <div v-if="allowCustomAnswer">
      <input type="text" v-model="customAnswer" />
    </div>
    <input type="submit" :value="buttonText" />
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EasyStaticPoll',
  data() {
    return {
      answer: [],
      customAnswer: null,
    };
  },
  props: {
    action: {
      type: String,
      default: '',
    },
    allowCustomAnswer: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: 'Submit Answer',
    },
    choices: {
      type: Object,
      default: {},
    },
    fieldGoalKey: {
      type: String,
      default: '',
    },
    method: {
      type: String,
      default: 'POST',
    },
    multipleChoice: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formAction() {
      if (this.fieldGoalKey) {
        return `https://fieldgoal.io/f/${this.fieldGoalKey}`;
      }

      return this.action;
    },
    type() {
      if (this.multipleChoice) {
        return 'checkbox';
      }

      return 'radio';
    },
  },
  methods: {
    submit() {
      axios({
        method: this.method,
        url: this.formAction,
        data: {
          answer: this.answer,
          customAnswer: this.customAnswer,
        }
      });
    },
  }
};
</script>
