# perfectly-aligned

## Usage
```html
<script src="/path/to/perfectly-aligned.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
    perfectlyAligned.init({
        backgroundImage: 'url(/path/to/image.jpg)', // [required]
        height: '1000px', // image height [required]
        minWidth: '1360px', // page min-width 
    });
});
</script>
```
### Hotkeys:
* **F4** - show/hide overlay
* **Numpad plus** - increase opacity
* **Numpad minus** - decrease opacity

## init(css, options)

### css
Default value:
```js
{
    position: 'absolute',
    left: '0',
    top: '0',
    display: 'none',
    width: '100%',
    height: 'auto',
    minWidth: '0',
    backgroundImage: 'none',
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    opacity: '0.3',
    zIndex: '100000',
    pointerEvents: 'none'
}
```

### options
Default value:
```js
{
    keyToggle: 115 // F4,
    keyIncreaseOpacity: 107 // Numpad plus,
    keyDecreaseOpacity: 109 // Numpad minus,
    opacityStep: 0.1
}
```