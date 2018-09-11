import { mount } from '@vue/test-utils';
import RenderlessPoll from '@/components/RenderlessPoll.vue';

describe('RenderlessPoll.vue', () => {
    it('sets default values', () => {
        const wrapper = mount(RenderlessPoll, {
            scopedSlots: { default: () => {} },
        });
        expect(wrapper.vm.allowCustomAnswer).toEqual(false);
        expect(wrapper.vm.buttonText).toEqual('Submit Answer');
        expect(wrapper.vm.choices).toEqual({});
        expect(wrapper.vm.customAnswerLabel).toEqual('Other');
        expect(wrapper.vm.endpoint).toEqual('');
        expect(wrapper.vm.fieldGoalFormKey).toEqual('');
        expect(wrapper.vm.multipleChoice).toEqual(false);
        expect(wrapper.vm.requestConfig).toEqual({});
        expect(wrapper.vm.thankYouMessage).toEqual('Your answer has been submitted.');
    });

    it('returns a null field goal endpoint if the field goal form key was not passed in', () => {
        const wrapper = mount(RenderlessPoll, {
            scopedSlots: { default: () => {} },
        });
        expect(wrapper.vm.fieldGoalEndpoint).toEqual(null);
    });

    it('returns a fully formed field goal endpoint if the field goal form key is passed in', () => {
        const wrapper = mount(RenderlessPoll, {
            scopedSlots: { default: () => {} },
            propsData: { 'field-goal-form-key': 'tGhtN' },
        });
        expect(wrapper.vm.fieldGoalEndpoint).toEqual('https://fieldgoal.io/f/tGhtN');
    });

    it('returns the answer as a string if there is only one answer', () => {
        const wrapper = mount(RenderlessPoll, {
            scopedSlots: { default: () => {} },
        });
        wrapper.setData({ answer: ['bar'] })
        expect(wrapper.vm.formattedAnswer).toEqual('bar');
    });

    it('returns the answer as an array if there are multiple answers', () => {
        const wrapper = mount(RenderlessPoll, {
            scopedSlots: { default: () => {} },
        });
        wrapper.setData({ answer: ['bar', 'foo'] })
        expect(wrapper.vm.formattedAnswer).toEqual(['bar', 'foo']);
    });

    it('uses a radio input type if multiple choice is false', () => {
        const wrapper = mount(RenderlessPoll, {
            scopedSlots: { default: () => {} },
            propsData: { 'multiple-choice': false },
        });
        expect(wrapper.vm.inputType).toEqual('radio');
    });

    it('uses a checkbox input type if multiple choice is true', () => {
        const wrapper = mount(RenderlessPoll, {
            scopedSlots: { default: () => {} },
            propsData: { 'multiple-choice': true },
        });
        expect(wrapper.vm.inputType).toEqual('checkbox');
    });
});
