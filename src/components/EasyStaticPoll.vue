<script>
import axios from 'axios';

export default {
    data() {
        return {
            answer: [],
            customAnswer: null,
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
        endpoint: {
          type: String,
          default: '',
        },
        fieldGoalFormKey: {
            type: String,
            default: null,
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
    },
    computed: {
        finalEndpoint() {
            if (this.fieldGoalFormKey) {
                return `https://fieldgoal.io/f/${this.fieldGoalFormKey}`;
            }

            return this.endpoint;
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
            buttonEvents: {
                click: (e) => {
                    this.submit()
                        .then((response) => this.afterSubmitHook(response))
                        .catch((error) => this.onSubmitErrorHook(error));
                },
            },
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
            endpoint: this.finalEndpoint,
            inputType: this.inputType,
        });
    },
    methods: {
        submit() {
            return axios({
                url: this.finalEndpoint,
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
