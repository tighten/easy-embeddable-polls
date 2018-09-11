<template>
    <single-choice-poll v-bind="$attrs" :multiple-choice="true">
    </single-choice-poll>
</template>

<script>
import SingleChoicePoll from './SingleChoicePoll.vue';

export default {
    components: {
        SingleChoicePoll,
    },
};
</script>
