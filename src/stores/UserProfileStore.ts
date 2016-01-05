import {alt} from "../alt";
import {dataLoadActions} from "../actions/DataLoadAction";
import {AbstractStoreModel} from "./StoreBase";

export interface Location {
  id?:number;
  name?:string;
  has_favorite?:boolean;
}

interface State {
  locations: Array<Location>;
  errorMessage:string;
}


class ProfileStore extends AbstractStoreModel<State> {

  locations: Array<Location>;
  errorMessage:string;

  constructor() {
    super();
    this.locations = [];
    this.errorMessage = null;
    this.bindListeners({
      handleFetchUsrProfile: dataLoadActions.fetchUsrProfile,
    });


  }

  handleFetchUsrProfile(uid:string) {
    console.log("store listen to "+uid);
    //atom can't get the baseclass defination, use that = this as a workaround
    var that:any =this;
    that.setState({})
  }



}

//casting return store with extended methods
export const profileStore = alt.createStore<State>(ProfileStore);
