import Ember from 'ember';
// import AjaxService from 'ember-ajax/services/ajax';

export default Ember.Route.extend({
  // ajax: Ember.inject.service(),
  uploads: Ember.inject.service(),

  actions: {
    createMovie(newMovie) {
      console.log(newMovie);
      return this.get('uploads').saveMovie(newMovie)
      .then(console.log)
      .then(() => this.transitionTo('movies'))
      //  return this.get('ajax').post('/movies', {
      //    data: {
      //      movie: {
      //        title: movie.title,
      //        release_year: movie.release_year,
      //        poster: movie.poster
      //      },
      //    },
      //  })
      // let movie = this.get('store').createRecord('movie', data);
      // return movie.save()
      // .then(() => this.transitionTo('movies'))
      .catch((error) => console.error(error));
    },
  },
});
