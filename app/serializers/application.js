import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForRelationship(key, relationship, method) {
    switch(relationship) {
      case "belongsTo":
        return `${key}Id`;
        break;
      case "hasMany":
        return `${key}Ids`;
        break;
      default:
        return this._super.apply(this, arguments);
    }
  }
});
