var perfectlyAligned = (function () {
    'use strict';

    var KEY_NUM_PLUS = 107;
    var KEY_NUM_MINUS = 109;
    var KEY_F4 = 115;

    function iterateObject(obj, callback) {
        var key, value;
        if (!obj) {
            return;
        }
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                value = obj[key];
                if (callback.call(value, key, value) === false) {
                    return;
                }
            }
        }
    }

    function extend(obj) {
        var i, n;
        obj = obj || {};
        for (i = 1, n = arguments.length; i < n; i++) {
            iterateObject(arguments[i], function (key, value) {
                obj[key] = value;
            });
        }
        return obj;
    }

    return {
        defaults: {
            css: {
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
            },
            options: {
                keyToggle: KEY_F4,
                keyIncreaseOpacity: KEY_NUM_PLUS,
                keyDecreaseOpacity: KEY_NUM_MINUS,
                opacityStep: 0.1
            }
        },
        isHidden: function () {
            return this.overlay.style.display === 'none';
        },
        show: function () {
            this.overlay.style.display = 'block';
        },
        hide: function () {
            this.overlay.style.display = 'none';
        },
        toggle: function () {
            this.isHidden() ? this.show() : this.hide();
        },
        opacity: function (value) {
            if (arguments.length) {
                this.overlay.style.opacity = Math.max(0, Math.min(value, 1));
            }
            else {
                return parseFloat(this.overlay.style.opacity);
            }
        },
        decreaseOpacity: function () {
            this.opacity(this.opacity() - this.options.opacityStep);
        },
        increaseOpacity: function () {
            this.opacity(this.opacity() + this.options.opacityStep);
        },
        init: function (css, options) {
            var self = this;
            self.overlay = document.createElement('div');
            self.options = extend({}, self.defaults.options, options);
            extend(self.overlay.style, self.defaults.css, css);
            document.body.appendChild(self.overlay);
            document.addEventListener('keydown', function (e) {
                switch (e.keyCode) {
                    case self.options.keyToggle:
                        self.toggle();
                        break;
                    case self.options.keyDecreaseOpacity:
                        self.decreaseOpacity();
                        break;
                    case self.options.keyIncreaseOpacity:
                        self.increaseOpacity();
                        break;
                }
            });
        }
    };
})();