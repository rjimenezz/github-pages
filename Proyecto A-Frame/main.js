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
                    optionalFeatures: ['hand-tracking'],
                    requiredFeatures: ['local-floor']
                }).then((session) => {
                    console.log('Hand tracking session started');
                    session.addEventListener('handtrackingstart', () => {
                        console.log('Hand tracking active');
                    });
                });
            }
        });

        // Setup hand tracking events
        this.el.addEventListener('hand-tracking-started', () => {
            console.log('Hand tracking initialized');
        });

        this.el.addEventListener('hand-tracking-lost', () => {
            console.log('Hand tracking lost');
        });
    },

    tick: function() {
        // Update hand tracking state
        const hands = this.el.components['hand-tracking-controls'];
        if (hands) {
            if (hands.data.hand === 'left') {
                this.hands.left = hands;
            } else {
                this.hands.right = hands;
            }

            // Log hand positions for debugging
            if (this.hands.left) {
                const pos = this.hands.left.el.getAttribute('position');
                console.log('Left hand position:', pos);
            }
            if (this.hands.right) {
                const pos = this.hands.right.el.getAttribute('position');
                console.log('Right hand position:', pos);
            }
        }
    }
});