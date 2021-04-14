import Route from '@ember/routing/route';

export default class ItemRoute extends Route {

    //need this for dynamic route
    model(params){
        return params.item_id;
    }
}
