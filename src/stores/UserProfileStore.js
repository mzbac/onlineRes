"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var alt_1 = require("../alt");
var DataLoadAction_1 = require("../actions/DataLoadAction");
var StoreBase_1 = require("./StoreBase");
var ProfileStore = (function (_super) {
    __extends(ProfileStore, _super);
    function ProfileStore() {
        _super.call(this);
        this.locations = [];
        this.errorMessage = null;
        this.bindListeners({
            handleFetchUsrProfile: DataLoadAction_1.dataLoadActions.fetchUsrProfile,
        });
    }
    ProfileStore.prototype.handleFetchUsrProfile = function (uid) {
        console.log("store listen to " + uid);
        var that = this;
        that.setState({});
    };
    return ProfileStore;
})(StoreBase_1.AbstractStoreModel);
exports.profileStore = alt_1.alt.createStore(ProfileStore);
