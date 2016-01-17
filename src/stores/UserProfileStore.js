var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var alt_1 = require("../alt");
var DataLoadAction_1 = require("../actions/DataLoadAction");
var StoreBase_1 = require("./StoreBase");
var Firebase = require("firebase");
var ProfileStore = (function (_super) {
    __extends(ProfileStore, _super);
    function ProfileStore() {
        _super.call(this);
        this.bindListeners({
            handleFetchUsrProfile: DataLoadAction_1.dataLoadActions.fetchUsrProfile,
            handleUpdateUsrSummary: DataLoadAction_1.dataLoadActions.UpdateUsrSummary
        });
    }
    ProfileStore.prototype.handleFetchUsrProfile = function (uid) {
        var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com/users/" + uid);
        var that = this;
        ref.on("value", function (snapshot) {
            that.setState({ User: snapshot.val() });
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        //action handler return false then store state don'change
        return false;
    };
    ProfileStore.prototype.handleUpdateUsrSummary = function (req) {
        var that = this;
        that.User.summary = req.summaryText;
        var onComplete = function (error) {
            if (error) {
                console.log('Synchronization failed');
            }
            else {
                console.log('Synchronization succeeded');
                that.setState({ User: that.User });
            }
        };
        var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com/users/" + req.uid);
        ref.update({ summary: req.summaryText }, onComplete);
        return false;
    };
    return ProfileStore;
})(StoreBase_1.AbstractStoreModel);
//casting return store with extended methods
exports.profileStore = alt_1.alt.createStore(ProfileStore);
