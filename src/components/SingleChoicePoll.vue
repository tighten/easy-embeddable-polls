<template>
    <renderless-poll v-bind="$attrs">
        <div slot-scope="{ allowCustomAnswer, buttonEvents, buttonText, choices, choiceAttrs, choiceEvents, customAnswerAttrs, customAnswerEvents, inputType, submitted, thankYouMessage }">
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
                        :type="inputType"
                        :id="key"
                        :value="key"
                        v-bind="choiceAttrs"
                        v-on="choiceEvents"
                    />
                    <label :for="key">{{ choice }}</label>
                </div>
                <div v-if="allowCustomAnswer" class="custom-answer">
                    <label for="custom_answer">Other</label>
                    <input
                        name="custom_answer"
                        v-bind="customAnswerAttrs"
                        v-on="customAnswerEvents"
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
    components: {
        RenderlessPoll,
    },
};
</script>
