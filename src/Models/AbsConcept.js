"use strict";

/*global require*/

var defineProperties = require('../../third_party/cesium/Source/Core/defineProperties');
var knockout = require('../../third_party/cesium/Source/ThirdParty/knockout');

var AbsConcept = function(code, name) {
    /**
     * Gets or sets the name of the concept item.  This property is observable.
     * @type {String}
     */
    this.code = code;

    /**
     * Gets or sets the name of the concept item.  This property is observable.
     * @type {String}
     */
    this.name = name;

    /**
     * Gets the list of absCodes contained in this group.  This property is observable.
     * @type {AbsConcept[]}
     */
    this.items = [];

    /**
     * Gets or sets a value indicating whether this concept item is currently open.  When an
     * item is open, its child items (if any) are visible.  This property is observable.
     * @type {Boolean}
     */
    this.isOpen = false;
    this.isCode = false;

    knockout.track(this, ['code', 'name', 'items', 'isOpen', 'isCode']);
};

defineProperties(AbsConcept.prototype, {
    /**
     * Gets a value indicating whether this item has child items.
     * @type {Boolean}
     */
    hasChildren : {
        get : function() {
            return this.items.length > 0;
        }
    }
});

/**
 * Toggles the {@link AbsConcept#isOpen} property.  If this item's list of children is open,
 * calling this method will close it.  If the list is closed, calling this method will open it.
 */
AbsConcept.prototype.toggleOpen = function() {
    this.isOpen = !this.isOpen;
};

module.exports = AbsConcept;
