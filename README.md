# inline-math-equation-for-notion

This repository include three **js** scripts.

- notion-inline-math-equations-web.js
- notiton-inline-math-equations-mac.js
- notion-inline-render-by-inlineCode.js

## Inline math equations for Notion.so

`notion-inline-math-equations-web.js` is valid for Notion.so.

1. Firstly, install [violentmonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag?utm_source=chrome-ntp-icon).
2. Open dashboard.
3. Left above button - install from url;
4. insert url: https://raw.githubusercontent.com/MLZC/inline-math-equation-for-notion/master/notion-inline-math-equations-web.js
5. Confirm installation.

### Feature

- Does not need any norm math block.
- Use "$$" instead of "\`$$\`", doesn't need `command + e` to enter inline code model before.

### Inline math equations for Notion Mac App

Prepare in advance:

1. Download `notiton-inline-math-equations-mac.js`.
2. Notion App for mac.

And do the following step:

1. Open /Applications folder by using Finder;
2. Find Notion and Right-clicking.
3. Shown Package Contents;
4. Continue  into:
   >/Applications/Notion.app/Contents/Resources/app/renderer/preload.js
5. Insert all contents from `notiton-inline-math-equations-mac.js` at the end of `preload.js`.

Features same as previous one.

# notion-inline-render-by-inlineCode.js

Instructions for use:
  - Make sure you have at least one normal math block on your page
  - Use inline code starting with "\$" and end with "\$". For example: `$E=mc^2$`, or \$E=mc^2\$ select the string before and press `command + E`.
  - Press `Alt` to rerender all inline math. You can of course change the shortcut in the code below.
  - The inline math will revert to inline code when the block becomes active.