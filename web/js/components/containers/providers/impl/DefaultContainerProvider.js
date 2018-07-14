const {DefaultContainerLifecycleListener} = require("../../lifecycle/impl/DefaultContainerLifecycleListener");
const {ContainerProvider} = require("../ContainerProvider");

class DefaultContainerProvider extends ContainerProvider {

    /**
     *
     * @return {Object<number,HTMLElement>}
     */
    getContainers() {
        return super._getContainers(".page");
    }

    /**
     * @Override
     * @param container {HTMLElement}
     * @return {ContainerLifecycleListener}
     */
    createContainerLifecycleListener(container) {
        return new DefaultContainerLifecycleListener(container);
    }

}

module.exports.DefaultContainerProvider = DefaultContainerProvider;
