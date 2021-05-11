## CSS-in-JS-NodeJS

## Installation

```console
npm install --save css-in-js-nodejs
```

## Example


### Given an example css file (test.css)

```css
.main-wrapper {
    flex-direction: row;
    display: flex;
    flex: 1;
  }
  #content {
    flex: 1;
  }
  ul {
    padding: 20px 0;
    flex: 1;
  }
  li {
    font-family:'Lato';
    color: whitesmoke;
    line-height: 44px;
  }

  @media screen and (max-width: 992px) {
    body {
      background-color: blue;
    }
  }

html {
    font-family: Gill Sans Extrabold, sans-serif;
    mask-image: url("masks.svg#mask1");
}
```


### test.js

```js
import fs from 'fs';
import cssToJS from 'css-to-js-nodejs';

const input = fs.readFileSync('./test.css', 'utf8');

const output = main(input);
console.log(output)
/*

{
  '.main-wrapper': { flexDirection: 'row', display: 'flex', flex: '1' },
  '#content': { flex: '1' },
  ul: { padding: '20px 0', flex: '1' },
  li: { fontFamily: "'Lato'", color: 'whitesmoke', lineHeight: '44px' },
  'screen and (max-width: 992px)': { body: { backgroundColor: 'blue' } },
  html: {
    fontFamily: 'Gill Sans Extrabold, sans-serif',
    maskImage: 'url("masks.svg#mask1")'
  }
}

*/
```

## Need help or want to donate to help me make Open Source projects?

- Send me a message on [Twitter](https://twitter.com/evenstensberg)!
- [Donate](https://github.com/sponsors/evenstensberg)