# easy-embeddable-polls

## Overview

`easy-embeddable-polls` provides you with Vue components for easily embedding polls into your website. Two components are offered out of the box:

- A basic `Poll` configurable by use of props. Outputs simple markup with semantic class names.
- A `RenderlessPoll` which follows the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).
This option gives you complete control over the markup of the poll while still allowing `easy-embeddable-polls` to handle the business logic for you.

## Install

#### NPM

First, install `easy-embeddable-polls` via your preferred package manager:

```bash
$ npm install easy-embeddable-polls --save
```

Then register any relevant components in your JavaScript:

```js
import Vue from 'vue'
import { Poll, RenderlessPoll } from 'easy-embeddable-polls'

Vue.component('poll', Poll)
Vue.component('renderless-poll', RenderlessPoll)
```

Now you can use the components in your markup:

```html
<poll :choices="{ 'banana': 'Banana', 'apple': 'Apple' }"></poll>
```

#### CDN

Simply include `vue` & `easy-embeddable-polls` - we recommend using [unpkg](https://unpkg.com/#/).

```html
<script src="https://unpkg.com/vue@latest"></script>
<!-- use the latest release -->
<script src="https://unpkg.com/easy-embeddable-polls@latest"></script>
<!-- or point to a specific release -->
<script src="https://unpkg.com/easy-embeddable-polls@1.0.0"></script>
```

Then register any relevant components in your JavaScript:

```js
Vue.component('poll', easyEmbeddablePolls.Poll);
Vue.component('renderless-poll', easyEmbeddablePolls.RenderlessPoll);
```

Now you can use the components in your markup:

```html
<poll :choices="{ 'banana': 'Banana', 'apple': 'Apple' }"></poll>
```

Here's an [example on JSBin](https://jsbin.com/zohebew/edit?html,js,output).

## Usage

### Poll

The basic `Poll` component offers a handful of props that allow you to customize your poll. These props are outlined below:

#### Props

| Name | Type | Default value | Description |
| :--- | :--- | :--- | :--- |
| allowCustomAnswer | Boolean | false | Gives users the option to enter a custom answer via a text field. |
| buttonText | String | "Submit Answer" | Text that will appear in the submit button. |
| choices | Object | `{}` | The answers users can choose in your poll. Should be formatted as a key value object. Example: `{ 'banana_bread': 'Banana Bread' }` |
| customAnswerLabel | String | "Other" | The label that will appear for the custom answer option. |
| endpoint | String | undefined | A URL where your poll answers will be submitted to. |
| fieldGoalFormKey | String | undefined| Form key for a [FieldGoal](https://fieldgoal.io) form. If used, a FieldGoal URL will be automatically used as the endpoint.|
| multipleChoice | Boolean | false | Determines whether or not a user can choose choose multiple answers. |
| requestConfig | Object |  `{}`  | An [axios](https://github.com/axios/axios) configuration object that will be used on your poll submission request. |
| submitErrorHook | Function | Empty function | A callback that is run when an error is encountered after a poll is submitted. Receives an error object as a parameter. |
| submitSuccessHook | Function | Empty function | A callback that is run after your poll has been successfully submitted. Receives a response object as a parameter. |
| thankYouMessage | String | "Your answer has been submitted." | A message that will be displayed after a user submits your poll. |
| title | String | undefined | A title that will appear at the top of your poll. |

An implementation of the `Poll` component can be seen in [the demo](https://github.com/tightenco/easy-embeddable-polls/blob/master/src/Demo.vue).

### RenderlessPoll

A `RenderlessPoll` component is offered in addition to the `Poll` component for situations where you need to heavily customize the outputted markup of the poll.
The `RenderlessPoll` component follows the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).
We will not dive into the concept of renderless components in this documentation, instead recommending you read the previously linked article to familiarize yourself.

Below is an example of an implementation of the `RenderlessPoll` component, including all slot props. It should be noted as well that the [`Poll` component](https://github.com/tightenco/easy-embeddable-polls/blob/master/src/components/Poll.vue) itself is an implementation of the `RenderlessPoll` component.

```js
<renderless-poll endpoint="http://www.example.com" :choices="{'banana_bread': 'Banana Bread', 'wheat_bread': 'Wheat Bread', 'sourdough_bread': 'Sourdough Bread'}">
  <div slot-scope="{ allowCustomAnswer, buttonEvents, buttonText, choices, choiceAttrs, choiceEvents, customAnswerChoiceAttrs, customAnswerChoiceEvents, customAnswerChoiceSelected, customAnswerInputAttrs, customAnswerInputEvents, customAnswerLabel, inputType, submitted, thankYouMessage, title }">
    <div v-if="submitted">
      {{ thankYouMessage }}
    </div>
    <div v-else>
      <span v-if="title">
        {{ title }}
      </span>
      <div
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
      <div v-if="allowCustomAnswer">
        <input
          id="custom_answer_choice"
          v-bind="customAnswerChoiceAttrs"
          v-on="customAnswerChoiceEvents"
        />
        <label for="custom_answer_choice">{{ customAnswerLabel }}</label>
        <input
          type="text"
          v-if="customAnswerChoiceSelected"
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
```

## License

[MIT](https://github.com/tightenco/easy-embeddable-polls/blob/master/LICENSE.md)

