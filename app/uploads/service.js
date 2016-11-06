import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  saveMovie (newMovie) {
    return this.get('ajax').post('/movies', {
      data: newMovie,
      contentType: false,
      processData: false,
    });
  },
});
