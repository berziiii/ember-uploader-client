import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('movies');
  this.route('movie', {path: '/movies/:movie_id'});
  this.route('new-movie');
});

export default Router;
