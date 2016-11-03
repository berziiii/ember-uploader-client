import Ember from 'ember';

export function coverPhoto(params) {
  if (params[0] === params[1]) {
    return false;
  }
}

export default Ember.Helper.helper(coverPhoto);
