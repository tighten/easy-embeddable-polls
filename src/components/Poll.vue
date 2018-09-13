<template>
  <renderless-poll v-bind="$attrs">
    <div slot-scope="{ allowCustomAnswer, buttonEvents, buttonText, choices, choiceAttrs, choiceEvents, customAnswerChoiceAttrs, customAnswerChoiceEvents, customAnswerInputAttrs, customAnswerInputEvents, customAnswerLabel, inputType, submitted, thankYouMessage }">
      <div v-if="submitted" class="thank-you">
        {{ thankYouMessage }}
      </div>
      <div v-else>
        <div
          class="choice"
          v-for="(choice, key) in choices"
          :key="key"
        >
          <input
            :id="key"
            :value="key"
            v-bind="choiceAttrs"
            v-on="choiceEvents"
          />
          <label :for="key">{{ choice }}</label>
        </div>
        <div v-if="allowCustomAnswer" class="choice custom-answer-choice">
          <input
            id="custom_answer_choice"
            v-bind="customAnswerChoiceAttrs"
            v-on="customAnswerChoiceEvents"
          />
          <label for="custom_answer_choice">{{ customAnswerLabel }}</label>
          <input
            v-bind="customAnswerInputAttrs"
            v-on="customAnswerInputEvents"
          />
        </div>
        <button
          type="submit"
          v-on="buttonEvents"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </renderless-poll>
</template>

<script>
import RenderlessPoll from './RenderlessPoll.vue';

export default {
  name: 'poll',
  components: {
    RenderlessPoll,
  },
};
</script>
