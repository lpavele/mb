function initClarityIcons() {
    var clarity_icons_api_1 = require("clarity-icons/clarity-icons-api");
    var clarity_icons_element_1 = require("clarity-icons/clarity-icons-element");
    var core_shapes_1 = require("clarity-icons/shapes/core-shapes");
    var essential_shapes_1 = require("clarity-icons/shapes/essential-shapes");
    var clarityIcons = clarity_icons_api_1.ClarityIconsApi.instance;
    clarityIcons.add(core_shapes_1.CoreShapes);
    clarityIcons.add(essential_shapes_1.EssentialShapes);
    if (!window.hasOwnProperty("ClarityIcons")) {
        window.ClarityIcons = clarityIcons;
        customElements.define("clr-icon", clarity_icons_element_1.ClarityIconElement);
    }
}

initClarityIcons();