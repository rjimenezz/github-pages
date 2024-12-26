AFRAME.registerComponent('hand-tracking', {
    init: function() {
        this.hands = {
            left: null,
            right: null
        };
        
        // Initialize hand tracking
        this.el.sceneEl.addEventListener('enter-vr', () => {
            if (navigator.xr) {
                navigator.xr.requestSession('immersive-vr', {
                    optionalFeatures: ['hand-tracking']
                });
            }
        });
    },

    tick: function() {
        // Update hand positions
        if (this.hands.left) {
            this.hands.left.object3D.updateMatrixWorld();
        }
        if (this.hands.right) {
            this.hands.right.object3D.updateMatrixWorld();
        }
    }
});

AFRAME.registerComponent('grabbable', {
    schema: {
        highlight: {type: 'boolean', default: true}
    },

    init: function() {
        this.originalColor = this.el.getAttribute('material').color;
        this.isGrabbed = false;
        this.grabbingHand = null;

        this.el.addEventListener('gripdown', this.onGripDown.bind(this));
        this.el.addEventListener('gripup', this.onGripUp.bind(this));
        this.el.addEventListener('mouseenter', this.onHover.bind(this));
        this.el.addEventListener('mouseleave', this.onHoverEnd.bind(this));
    },

    onGripDown: function(evt) {
        if (!this.isGrabbed) {
            this.isGrabbed = true;
            this.grabbingHand = evt.detail.hand;
            if (this.data.highlight) {
                this.el.setAttribute('material', 'color', '#7bf');
            }
            this.el.emit('grab-start');
        }
    },

    onGripUp: function() {
        if (this.isGrabbed) {
            this.isGrabbed = false;
            this.grabbingHand = null;
            if (this.data.highlight) {
                this.el.setAttribute('material', 'color', this.originalColor);
            }
            this.el.emit('grab-end');
        }
    },

    onHover: function() {
        if (!this.isGrabbed && this.data.highlight) {
            this.el.setAttribute('material', 'color', '#ff4');
        }
    },

    onHoverEnd: function() {
        if (!this.isGrabbed && this.data.highlight) {
            this.el.setAttribute('material', 'color', this.originalColor);
        }
    },

    tick: function() {
        if (this.isGrabbed && this.grabbingHand) {
            const handPos = this.grabbingHand.object3D.position;
            this.el.object3D.position.copy(handPos);
        }
    }
});