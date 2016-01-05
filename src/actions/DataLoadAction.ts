import {alt} from "../alt";
import {AbstractActions} from "./ActionBase";


interface Actions {
  fetchUsrProfile(uid:string):void;
}

class DataLoadActions extends AbstractActions implements Actions {

  fetchUsrProfile(uid:string) {

      return uid;
  }

}

export const dataLoadActions = alt.createActions<Actions>(DataLoadActions);
