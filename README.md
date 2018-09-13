# easy-static-polls

## Install

#### NPM

First, install `easy-static-polls` via your preferred package manager:

```bash
$ npm install easy-static-polls --save
```

Then register any relevant components in your JavaScript:

```js
import Vue from 'vue'
import { SingleChoicePoll, MultipleChoicePoll, RenderlessPoll } from 'easy-static-polls'

Vue.component('single-choice-poll', SingleChoicePoll)
Vue.component('multiple-choice-poll', MultipleChoicePoll)
Vue.component('renderless-poll', RenderlessPoll)
```

Now you can use the components in your markup:

```html
<single-choice-poll :choices="{ 'banana': 'Banana', 'apple': 'Apple' }"></single-choice-poll>
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
Vue.component('single-choice-poll', easyStaticPolls.SingleChoicePoll);
Vue.component('multiple-choice-poll', easyStaticPolls.SingleChoicePoll);
Vue.component('renderless-poll', easyStaticPolls.RenderlessPoll);
```

Now you can use the components in your markup:

```html
<single-choice-poll :choices="{ 'banana': 'Banana', 'apple': 'Apple' }"></single-choice-poll >
```

Here's an [example on JSBin]().

## Usage

### Props

| Name | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| afterSubmitHook | Function | Empty function | Description |
| allowCustomAnswer | Boolean | false | Notification's body message. Normally should be set up |
| buttonText | String | 'Submit Answer' | time before notifications gone |
| choices | Object | Empty object | Callback function |
| customAnswerLabel | Object | Empty object | Callback function |
| endpoint | String | undefined | Callback function |
| fieldGoalFormKey | String | undefined| Callback function |
| multipleChoice | Boolean | false | Callback function |
| onSubmitErrorHook | Function | Empty function | Callback function |
| requestConfig | Object | Empty object | Callback function |
| thankYouMessage | String | 'Your answer has been submitted.' | Callback function |

