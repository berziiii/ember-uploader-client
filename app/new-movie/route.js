import Ember from 'ember';

export default Ember.Route.extend({
  uploads: Ember.inject.service(),

  actions: {
    createMovie(newMovie) {
      console.log(newMovie);
      return this.get('uploads').saveMovie(newMovie)
      .then(() => this.transitionTo('movies'))
      .catch((error) => console.error(error));
    },
  },
});
