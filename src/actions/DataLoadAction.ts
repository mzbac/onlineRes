import {alt} from "../alt";
import {AbstractActions} from "./ActionBase";


interface Actions {
    fetchUsrProfile(uid:string):void;
    UpdateUsrSummary(summaryText:string,uid:string):void;
}

class DataLoadActions extends AbstractActions implements Actions {

    fetchUsrProfile(uid:string) {

        return uid;
    }
    UpdateUsrSummary(summaryText:string,uid:string){

        return {summaryText,uid};
    }
}

export const dataLoadActions = alt.createActions<Actions>(DataLoadActions);
