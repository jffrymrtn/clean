---
layout: post
title: A Minimal Jekyll Theme
hero: hero.png
date:   2014-7-23 16:23:00
categories: post
---

## Intro

"Clean" is a minimal and simple theme for [Jekyll](http://jekyllrb.com/) inspired slightly by Google's Material Design (hovering social buttons) tweaked to look more clean and neutral.

[Demo Website](http://jffrymrtn.github.io/clean)

## Using Clean

### Installation

1. Fork the GitHub repository and clone it to your local machine.
2. In your Terminal.app, ``cd`` to your Clean repository.
3. Run ``jekyll serve --watch``.
4. On your browser of choice, go to localhost:4000

### Making Clean Your Own

Make sure to configure ``_config.yml`` and layouts/default.html to add in your URL, blog's name, keywords, website title, etc. Otherwise, you'll be stuck with a blog called, "Your blog name" :).

Here are some files you should change:

- _config.yml
- layouts/default.html
- README.md

### Adding and Removing Social Buttons

There are a default number of four social buttons hovering at the top of the website. You may add or remove any amount of buttons as you want. Here is where you can change them:

- Add or remove social buttons' HTML markups at ``layouts/default.html`` under the ``<div id="social">`` tag.
- For every social button you add **or** remove, you need to adjust the animation times (the order and delay in which they fade in on load). Do this in the CSS file ``css/main.css``.
    - Note: There is a 50ms delay between each social button, starting at 200ms for the first element.

For example:

If you remove the Facebook button, you'll be left with three social buttons: Twitter, GitHub, and Email. You'll need to go to ``css/main.css`` and remove the CSS for ``#fb`` and adjust the rest so that it looks like this:

```
#twitter {
  background: #0099FF;
  -webkit-animation-delay: 200ms;
}
#github {
  background: #000000;
  -webkit-animation-delay: 250ms;
}
#email {
  background: #E04A11;
  -webkit-animation-delay: 300ms;
}
```

### Pagination

This theme automatically paginates your posts (if you have more than 1 post) at ``url/#``.

### Adding Posts

Add posts as you normally would in Jekyll. If you don't know how yet, take a look at Jekyll's [documentations](http://jekyllrb.com/docs/posts/).

## Contributing to this Project on GitHub

I'm open to contributions and would love to work with people who think this theme could be better. Just give me a heads up to what you're doing by opening an [issue](https://github.com/jffrymrtn/clean/issues).

## Questions, Comments, Suggestions, Anything Else

You can get in touch with my the easiest on Twitter: [@jffrymrtn](https://twitter.com/jffrymrtn).

## Roboto Font

This repository includes the [Roboto Font from Google](http://www.google.com/design/spec/resources/roboto-font.html). The font is owned by them and is licensed under the [Apache License V2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

## License

The Jekyll Theme, Clean is licensed under the MIT license:

The MIT License (MIT)

Copyright (c) 2014 Jeff Martin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.