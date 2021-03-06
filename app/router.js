import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blog');
  this.route('medias');
  this.route('competences');
  this.route('contact');
});

export default Router;
