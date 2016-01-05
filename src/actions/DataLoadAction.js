"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var alt_1 = require("../alt");
var ActionBase_1 = require("./ActionBase");
var DataLoadActions = (function (_super) {
    __extends(DataLoadActions, _super);
    function DataLoadActions() {
        _super.apply(this, arguments);
    }
    DataLoadActions.prototype.fetchUsrProfile = function (uid) {
        return uid;
    };
    return DataLoadActions;
})(ActionBase_1.AbstractActions);
exports.dataLoadActions = alt_1.alt.createActions(DataLoadActions);
