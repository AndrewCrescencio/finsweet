# Generator components to nuxtjs

## Features

- Generate components
- Generate pages

## Structure

```
.
├── blueprint
│   └── components
│       ├── file.html
│       ├── file.js
│       ├── file.scss
│       ├── file.spec.js
│       └── file.vue
├── generators
│   └── components.js
├── util.js
└── vg
```

## Configs

In package.json add the following line in the scripts section:

```json
{
  "vg": "node ./vg/vg"
}
```

## Run

```bash
# run generate component
$ yarn vg component nameComponent

# run generate component without tests
$ yarn vg component nameComponent --skip-tests

# run generate page
$ yarn vg page namePage

# run generate page without tests
$ yarn vg page namePage --skip-tests
```

- Important: filenames must always be camel case

## Generate component example

```bash
$ yarn vg component fileExample
```

### Generated out tree

```
components
├── fileExample
│   ├── fileExample.component.html
│   ├── fileExample.component.js
│   ├── fileExample.component.scss
│   ├── fileExample.component.spec.js
│   └── index.vue
```

### content html

```html
<div>
  <p>New components fileExample</p>
</div>
```

### content js

```js
export default {
  name: 'ComponentsFileExampe',
}
```

### content scss

```scss
//New components fileExample
```

### content spec.js

```js
import { shallowMount } from '@vue/test-utils'
import FileExample from '@/components/fileExample'

describe('FileExample', () => {
  it('should render a FileExample when Vue creates it', () => {
    const wrapper = shallowMount(FileExample, {
      stubs: ['nuxt-link'],
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
```
