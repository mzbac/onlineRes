import {alt} from "../alt";
import {dataLoadActions} from "../actions/DataLoadAction";
import {AbstractStoreModel} from "./StoreBase";
var Firebase = require("firebase");

export interface UserProfile {
    summary: string;
    eduExp: Array<{}>;
    recentProjects: Array<string>;
    skills: Array<string>;
}

interface State {
    User: UserProfile;

}


class ProfileStore extends AbstractStoreModel<State> {
    User:UserProfile;

    constructor() {
        super();
        this.bindListeners({
            handleFetchUsrProfile: dataLoadActions.fetchUsrProfile,
            handleUpdateUsrSummary: dataLoadActions.UpdateUsrSummary
        });


    }

    handleFetchUsrProfile(uid:string) {
        var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com/users/" + uid);
        var that:any = this;
        ref.on("value", function (snapshot) {
            that.setState({User: snapshot.val()});
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        //action handler return false then store state don'change
        return false;
    }

    handleUpdateUsrSummary(req) {
        var that:any = this;
        that.User.summary = req.summaryText;
        var onComplete = function (error) {
            if (error) {
                console.log('Synchronization failed');
            } else {
                console.log('Synchronization succeeded');
                that.setState({User:that.User});
            }
        };
        var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com/users/" + req.uid);
        ref.update({summary: req.summaryText}, onComplete)
        return false;
    }

}

//casting return store with extended methods
export const profileStore = alt.createStore<State>(ProfileStore);
