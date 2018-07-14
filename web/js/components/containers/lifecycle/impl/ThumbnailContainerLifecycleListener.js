const {ContainerLifecycleListener} = require("../ContainerLifecycleListener");

/**
 * Listens to the lifecycle of .thumbnail
 */
class ThumbnailContainerLifecycleListener extends ContainerLifecycleListener {

    constructor(container) {
        super();
        this.container = container;
        this.listener = null;

    }

    register(callback) {

        this.listener = event => {

            if (event.target && event.target.className === "thumbnailImage") {
                callback(this.container);
            }

        };

        let mutatingElement = this.container.querySelector(".thumbnailSelectionRing");

        mutatingElement.addEventListener('DOMNodeInserted', this.listener, false);

    };

    unregister() {
        this.container.removeEventListener('DOMNodeInserted', this.listener, false);
        this.listener = null;
    }

}

module.exports.ThumbnailContainerLifecycleListener = ThumbnailContainerLifecycleListener;
