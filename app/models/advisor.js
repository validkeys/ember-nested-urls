import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  clients:  DS.hasMany('client', { async: true })
});
