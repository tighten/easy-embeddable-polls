<template>
    <div id="app">
        <easy-static-poll
            :multiple-choice="false"
            :after-submit-hook="afterSubmit"
            field-goal-form-key="tGhtN"
            :choices="{ 'one': 'anotha one', 'two': 'anotha two' }"
        >
            <div slot-scope="{ buttonEvents, choices, choiceAttrs, choiceEvents, customAnswerAttrs, customAnswerEvents, endpoint, inputType }">
                {{ endpoint }}
                <div v-for="(choice, key) in choices" :key="key">
                    <input :type="inputType"
                        :id="key"
                        :value="key"
                        v-bind="choiceAttrs"
                        v-on="choiceEvents" />
                    <label :for="key">{{ choice }}</label>
                </div>
                <input placeholder="Custom Answer"
                    v-bind="customAnswerAttrs"
                    v-on="customAnswerEvents"
                />
                <button type="submit"
                    v-on="buttonEvents">Submit This</button>
            </div>
        </easy-static-poll>
    </div>
</template>

<script>
import EasyStaticPoll from './components/EasyStaticPoll.vue';

export default {
  name: 'app',
  components: {
    EasyStaticPoll,
  },
  methods: {
    afterSubmit(error) {
        console.log('DONE', error)
    }
  }
};
</script>
