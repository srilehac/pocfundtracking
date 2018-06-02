import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('db');
  this.route('gov');
  this.route('nari');
  this.route('example');
  this.route('allocation');
  this.route('track');
});

export default Router;
