<script>
import axios from 'axios';

export default {
    data() {
        return {
            answer: [],
            customAnswer: null,
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
          default: '',
        },
        fieldGoalFormKey: {
            type: String,
            default: '',
        },
        multipleChoice: {
            type: Boolean,
            default: false,
        },
        onSubmitErrorHook: {
            type: Function,
            default() {
                return (error) => { console.error(error) };
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
                name: 'choices[]'
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
                    }
                },
            },
            customAnswerAttrs: {
                value: this.customAnswer,
            },
            customAnswerEvents: {
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
            return axios({
                url:  this.fieldGoalEndpoint || this.endpoint,
                data: {
                    answer: this.formattedAnswer,
                    customAnswer: this.customAnswer,
                },
                ...this.requestConfig,
            });
        },
    },
}
</script>
