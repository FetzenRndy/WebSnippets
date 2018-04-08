# WebSnippets

WebSnippets is a work in progress, browser plugin allowing for the use of snippets in the Web.

## Demo
<div style="text-align:center">
    <img src="https://github.com/FetzenRndy/WebSnippets/blob/master/assets/Demo.gif?raw=true">
</div>

### Development

```
Run Tests: 
    $ npm test

Run Webpack
    $ npm run dev

Run Webpack and Tests in same process
    $ npm run devtest
```

## Activating the Extension in DEV mode.

##### NOTE FOR EVERY BROWSER : You will need to reload the extension after making code changes, in most browsers there is a "reload extension" button tho.

```
Chrome:
    1. Open 'chrome://extensions/'
    2. Make sure "Developer Mode" in the upper right corner is enabled.
    3. Click "Load Unpacked Extension" on the upper left side and navigate to the downloaded source and select the "manifest.json" file.
    4. Profit?

Firefox Quantum Dev-edition:
    1. Open 'about:debugging'
    2. Make sure "Enable add-on debugging" is enabled.
    3. Click "Load temporary Add-on" on the right side and navigate to the downloaded source and select the "manifest.json" file.
    4. Profit?

```