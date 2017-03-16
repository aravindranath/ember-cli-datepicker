/* jshint node: true */
'use strict';

// For ember-cli < 2.7 findHost doesnt exist so we backport from that version
// for earlier version of ember-cli.
//https://github.com/ember-cli/ember-cli/blame/16e4492c9ebf3348eb0f31df17215810674dbdf6/lib/models/addon.js#L533
  function findHostShim() {
    let current = this;
    let app;
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));
    return app;
  }

module.exports = {
  name: 'ember-cli-bootstrap-datepicker',

  included: function(app) {
    let findHost = this._findHost || findHostShim;
    let app = findHost.call(this);

    app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/js/bootstrap-datepicker.js');
    app.import(app.bowerDirectory + '/bootstrap-datepicker/dist/css/bootstrap-datepicker.css');
  }
};
