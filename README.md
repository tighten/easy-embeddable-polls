# easy-static-polls

## Overview

`easy-static-polls` provides you with Vue components for easily embedding polls into your website. Two component are offered out of the box:

- A basic `Poll` configurable by use of props. Outputs a simple HTML structure with semantic class names.
- A `RenderlessPoll` which follows the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/). This option gives you complete control over the output of the poll while still allowing `easy-static-polls` to handle the business logic for you.

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

Here's an [example on JSBin]().

## Usage

### Props

| Name | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| afterSubmitHook | Function | Empty function | A callback that is run after the poll has been successfully submitted. Receives a response object as a parameter. |
| allowCustomAnswer | Boolean | false | Gives users the option to enter a custom answer via a text field. |
| buttonText | String | "Submit Answer" | Text that will appear in the submit button. |
| choices | Object | `{}` | The options users can choose in the poll. Should be formatted as a key value object. Example: `{ 'favorite_fruit': 'Favorite Fruit' }` |
| customAnswerLabel | String | "Other" | The label that will appear for the custom answer option. |
| endpoint | String | undefined | A URL where the poll will be submitted to. |
| fieldGoalFormKey | String | undefined| Form key for a [FieldGoal](https://fieldgoal.io) form. If used, the `endpoint` prop will be overwritten with a FieldGoal endpoint.|
| multipleChoice | Boolean | false | Determines whether or not a user should be able to choose multiple options. |
| onSubmitErrorHook | Function | Empty function | A callback that is run when a poll encounters an error when submitted. Receives an error object as a parameter. |
| requestConfig | Object |  `{}`  | An [axios](https://github.com/axios/axios) configuration object that will be used on the poll submission request. |
| thankYouMessage | String | "Your answer has been submitted." | A message that will be displayed after the user submits the poll. |

