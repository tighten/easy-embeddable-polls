<script>
import axios from 'axios';

export default {
  name: 'renderless-poll',
  data() {
    return {
      answer: [],
      customAnswer: null,
      customAnswerChoiceSelected: false,
      submitted: false,
    };
  },
  props: {
    afterSubmitHook: {
      type: Function,
      default() {
        return () => {};
      }
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
      default() {
        return {}
      }
    },
    customAnswerLabel: {
      type: String,
      default: 'Other',
    },
    endpoint: {
      type: String,
      default: undefined,
    },
    fieldGoalFormKey: {
      type: String,
      default: undefined,
    },
    multipleChoice: {
      type: Boolean,
      default: false,
    },
    onSubmitErrorHook: {
      type: Function,
      default() {
        return () => {};
      }
    },
    requestConfig: {
      type: Object,
      default() {
        return {}
      }
    },
    thankYouMessage: {
      type: String,
      default: 'Your answer has been submitted.',
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
        click: (e) => {
          this.submit()
            .then(() => this.submitted = true)
            .then((response) => this.afterSubmitHook(response))
            .catch((error) => this.onSubmitErrorHook(error));
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
        input: (e) => {
          this.customAnswerChoiceSelected = ! this.customAnswerChoiceSelected;

          if (! this.multipleChoice) {
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
      inputType: this.inputType,
      submitted: this.submitted,
      thankYouMessage: this.thankYouMessage,
    });
  },
  methods: {
    submit() {
      if (this.customAnswerChoiceSelected) {
        this.answer.push(this.customAnswer);
      }

      return axios({
        method: 'POST',
        url:  this.fieldGoalEndpoint || this.endpoint,
        data: {
          answer: this.formattedAnswer,
        },
        ...this.requestConfig,
      });
    },
  },
}
</script>
