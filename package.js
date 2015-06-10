Package.describe({
  name: 'jrodmanu:jquery-fastbutton-meteor',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Removes the 300ms delay from click-related actions in mobile websites.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JrodManU/jquery-fastbutton-meteor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery','client');
  api.addFiles('jquery-fastbutton-meteor.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jrodmanu:jquery-fastbutton-meteor');
  api.addFiles('jquery-fastbutton-meteor-tests.js');
});
