<template>
    <div id="app">
        <multiple-choice-poll :after-submit-hook="afterSubmit" :allow-custom-answer="true" :choices="{ 'one': 'anotha one', 'two': 'anotha two' }">
        </multiple-choice-poll>
    </div>
</template>

<script>
import RenderlessPoll from './components/RenderlessPoll.vue';
import SingleChoicePoll from './components/SingleChoicePoll.vue';
import MultipleChoicePoll from './components/MultipleChoicePoll.vue';

export default {
  name: 'app',
  components: {
    RenderlessPoll,
    SingleChoicePoll,
    MultipleChoicePoll,
  },
  methods: {
    afterSubmit(error) {
        console.log('DONE', error)
    }
  }
};
</script>
