import Ember from 'ember';

export default Ember.Component.extend({

  newMovie: {},

  actions: {
    create() {
      let newMovie = new FormData(document.getElementById('new-movie'));
      this.sendAction('create', newMovie);
      this.set('newMovie', null);
    }
  }
});
