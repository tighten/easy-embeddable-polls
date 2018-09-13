# easy-static-polls

## Overview

`easy-static-polls` provides you with Vue components for easily embedding polls into your website. Two components are offered out of the box:

- A basic `Poll` configurable by use of props. Outputs simple markup with semantic class names.
- A `RenderlessPoll` which follows the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).
This option gives you complete control over the markup of the poll while still allowing `easy-static-polls` to handle the business logic for you.

## Install

#### NPM

First, install `easy-static-polls` via your preferred package manager:

```bash
$ npm install easy-static-polls --save
```

Then register any relevant components in your JavaScript:

```js
import Vue from 'vue'
import { Poll, RenderlessPoll } from 'easy-static-polls'

Vue.component('poll', Poll)
Vue.component('renderless-poll', RenderlessPoll)
```

Now you can use the components in your markup:

```html
<poll :choices="{ 'banana': 'Banana', 'apple': 'Apple' }"></poll>
```

#### CDN

Simply include `vue` & `easy-static-polls.js` - we recommend using [unpkg](https://unpkg.com/#/).

```html
<script src="https://unpkg.com/vue@latest"></script>
<!-- use the latest release -->
<script src="https://unpkg.com/easy-static-polls@latest"></script>
<!-- or point to a specific release -->
<script src="https://unpkg.com/easy-static-polls@1.0.0"></script>
```

Then register any relevant components in your JavaScript:

```js
Vue.component('poll', easyStaticPolls.Poll);
Vue.component('renderless-poll', easyStaticPolls.RenderlessPoll);
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
| afterSubmitHook | Function | Empty function | A callback that is run after your poll has been successfully submitted. Receives a response object as a parameter. |
| allowCustomAnswer | Boolean | false | Gives users the option to enter a custom answer via a text field. |
| buttonText | String | "Submit Answer" | Text that will appear in the submit button. |
| choices | Object | `{}` | The answers users can choose in your poll. Should be formatted as a key value object. Example: `{ 'favorite_fruit': 'Favorite Fruit' }` |
| customAnswerLabel | String | "Other" | The label that will appear for the custom answer option. |
| endpoint | String | undefined | A URL where your poll answers will be submitted to. |
| fieldGoalFormKey | String | undefined| Form key for a [FieldGoal](https://fieldgoal.io) form. If used, a FieldGoal URL will be automatically used as the endpoint.|
| multipleChoice | Boolean | false | Determines whether or not a user can choose choose multiple answers. |
| onSubmitErrorHook | Function | Empty function | A callback that is run when an error is encountered after a poll is submitted. Receives an error object as a parameter. |
| requestConfig | Object |  `{}`  | An [axios](https://github.com/axios/axios) configuration object that will be used on your poll submission request. |
| thankYouMessage | String | "Your answer has been submitted." | A message that will be displayed after a user submits the your. |

### RenderlessPoll

A `RenderlessPoll` component is offered in addition to the `Poll` component for situations where you need to heavily customize the outputted markup of the poll.
The `RenderlessPoll` component follows the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).
We will not dive into the concept of renderless components in this documentation, instead recommending you read the previously linked article to familiarize yourself.

Renderless components work by sending slot props up to their wrapper components. The slot props offered by `easy-static-polls` are outlined below:

#### Slot Props

| Name | Description |
| :--- | :--- |
| allowCustomAnswer | Whether or not users can enter a custom answer into your poll. Equal to value of `allowCustomAnswer` prop. |
| buttonEvents | Events related to the submit poll button. Should be applied via `v-on` to your `<button>` element. |
| buttonText | Text that will appear in the submit button. Equal to value of `buttonText` prop. |
| choices | The options users can choose in your poll. Equal to value of `choices` prop. |
| choiceAttrs | Attributes related to the poll choices. Should be applied via `v-bind` to your choice `<input>` elements. |
| choiceEvents | Events related to the poll choices. Should be applied via `v-on` to your choice `<input>` elements. |
| customAnswerChoiceAttrs | Attributes related to the custom answer choice input. Should be applied via `v-bind` to your custom answer choice `<input>` element. |
| customAnswerChoiceEvents | Events related to the custom answer choice input. Should be applied via `v-on` to your custom answer choice `<input>` element. |
| customAnswerInputAttrs | Attributes related to the custom answer text input. Should be applied via `v-bind` to your custom answer `<input>` element. |
| customAnswerInputEvents | Events related to the custom answer text input. Should be applied via `v-on` to your custom answer `<input>` element. |
| customAnswerLabel | The label that will appear for the custom answer option. Equal to value of `customAnswerLabel` prop. |
| endpoint | The endpoint your poll will submit to. Equal to value of `endpoint` prop or FieldGoal URL if `fieldGoalFormKey` is present. |
| inputType | Equal to "radio" if `multipleChoice` prop is false or "checkbox" if `multipleChoice` is true. |
| submitted | A boolean denoating whether or not the form has been successfully submitted. |
| thankYouMessage | A message that will be displayed after a user submits your poll. Equal to value of `thankYouMessage` prop. |

## License

[MIT](https://github.com/tightenco/easy-static-polls/blob/master/LICENSE.md)

