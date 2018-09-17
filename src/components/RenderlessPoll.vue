<script>
import axios from 'axios';

export default {
  name: 'renderless-poll',
  data() {
    return {
      answer: [],
      customAnswer: null,
      customAnswerChoiceSelected: false,
      error: false,
      submitted: false,
    };
  },
  props: {
    allowCustomAnswer: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: 'Submit Answer',
    },
    choices: {
      type: Array,
      default() {
        return [];
      },
    },
    customAnswerLabel: {
      type: String,
      default: 'Other',
    },
    endpoint: {
      type: String,
      default: undefined,
    },
    errorMessage: {
      type: String,
      default: 'There was an error submitting your answer.',
    },
    fieldGoalFormKey: {
      type: String,
      default: undefined,
    },
    multipleChoice: {
      type: Boolean,
      default: false,
    },
    submitErrorHook: {
      type: Function,
      default() {
        return () => {};
      },
    },
    submitSuccessHook: {
      type: Function,
      default() {
        return () => {};
      },
    },
    requestConfig: {
      type: Object,
      default() {
        return {};
      },
    },
    thankYouMessage: {
      type: String,
      default: 'Your answer has been submitted.',
    },
    title: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    fieldGoalEndpoint() {
      if (this.fieldGoalFormKey) {
        return `https://fieldgoal.io/f/${this.fieldGoalFormKey}`;
      }

      return null;
    },
    formattedAnswer() {
      if (this.answer instanceof Array && this.answer.length === 1) {
        return this.answer[0];
      }

      return this.answer;
    },
    inputType() {
      if (this.multipleChoice) {
        return 'checkbox';
      }

      return 'radio';
    },
  },
  render() {
    return this.$scopedSlots.default({
      allowCustomAnswer: this.allowCustomAnswer,
      buttonEvents: {
        click: () => {
          this.submit()
            .then(() => this.submitted = true)
            .then(response => this.submitSuccessHook(response))
            .catch((error) => {
              this.error = true;
              this.submitErrorHook(error);
            });
        },
      },
      buttonText: this.buttonText,
      choices: this.choices,
      choiceAttrs: {
        value: this.answer,
        name: 'choices[]',
        type: this.inputType,
      },
      choiceEvents: {
        input: (e) => {
          const value = e.target.value;

          if (this.multipleChoice) {
            if (this.answer.indexOf(value) === -1) {
              this.answer.push(value);
            } else {
              this.answer.splice(this.answer.indexOf(value), 1);
            }
          } else {
            this.answer = value;
            this.customAnswerChoiceSelected = false;
          }
        },
      },
      customAnswerChoiceAttrs: {
        name: 'choices[]',
        type: this.inputType,
      },
      customAnswerChoiceEvents: {
        input: () => {
          this.customAnswerChoiceSelected = !this.customAnswerChoiceSelected;

          if (!this.multipleChoice) {
            this.answer = [];
          }
        },
      },
      customAnswerChoiceSelected: this.customAnswerChoiceSelected,
      customAnswerInputAttrs: {
        value: this.customAnswer,
      },
      customAnswerInputEvents: {
        input: (e) => {
          this.customAnswer = e.target.value;
        },
      },
      customAnswerLabel: this.customAnswerLabel,
      endpoint: this.fieldGoalEndpoint || this.endpoint,
      error: this.error,
      errorMessage: this.errorMessage,
      inputType: this.inputType,
      submitted: this.submitted,
      thankYouMessage: this.thankYouMessage,
      title: this.title,
    });
  },
  methods: {
    submit() {
      if (this.customAnswerChoiceSelected) {
        this.answer.push(this.customAnswer);
      }

      return axios({
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        url: this.fieldGoalEndpoint || this.endpoint,
        data: {
          answer: this.formattedAnswer,
        },
        ...this.requestConfig,
      });
    },
  },
};
</script>
