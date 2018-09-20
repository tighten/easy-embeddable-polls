<template>
  <renderless-poll v-bind="$attrs">
    <div class="easy-embeddable-poll" slot-scope="{ allowCustomAnswer, buttonAttrs, buttonEvents, buttonText, choices, choiceAttrs, choiceEvents, customAnswerChoiceAttrs, customAnswerChoiceEvents, customAnswerChoiceSelected, customAnswerInputAttrs, customAnswerInputEvents, customAnswerLabel, error, errorMessage, inputType, submitted, thankYouMessage, title }">
      <div v-if="error" v-html="errorMessage" class="easy-embeddable-poll-error"></div>
      <div v-else-if="submitted" v-html="thankYouMessage" class="easy-embeddable-poll-thank-you"></div>
      <div v-else>
        <div v-if="title" class="easy-embeddable-poll-title-wrapper">
          <span class="easy-embeddable-poll-title">{{ title }}</span>
        </div>
        <div class="easy-embeddable-poll-choices">
          <div
            class="easy-embeddable-poll-choice"
            v-for="choice in choices"
            :key="choice"
          >
            <input
              :id="choice"
              :value="choice"
              v-bind="choiceAttrs"
              v-on="choiceEvents"
            />
            <label :for="choice">{{ choice }}</label>
          </div>
          <div v-if="allowCustomAnswer" class="easy-embeddable-poll-choice easy-embeddable-poll-custom-answer-choice">
            <input
              id="custom_answer_choice"
              v-bind="customAnswerChoiceAttrs"
              v-on="customAnswerChoiceEvents"
            />
            <label for="custom_answer_choice">{{ customAnswerLabel }}</label>
            <div class="easy-embeddable-poll-custom-answer-input-wrapper">
              <input
                type="text"
                v-if="customAnswerChoiceSelected"
                v-bind="customAnswerInputAttrs"
                v-on="customAnswerInputEvents"
              />
            </div>
          </div>
        </div>
        <div class="easy-embeddable-poll-submit-wrapper">
            <button
              type="submit"
              class="easy-embeddable-poll-submit"
              v-bind="buttonAttrs"
              v-on="buttonEvents"
            >
              {{ buttonText }}
            </button>
        </div>
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
