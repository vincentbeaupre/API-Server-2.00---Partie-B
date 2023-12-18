import Model from './model.js';

export default class Like extends Model {
    constructor()
    {
        super();
        this.addField('PhotoId', 'string');
        this.addField('UserId', 'string');        
    }
}