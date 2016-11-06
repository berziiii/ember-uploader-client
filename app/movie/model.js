import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  release_year: DS.attr('number'),
  upload_url: DS.attr('string'),
  poster: DS.attr('file'),
});
