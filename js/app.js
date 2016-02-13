var app = angular.module('portfolio', []);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/about.html',
    controller: 'AboutController'
  })
  .when('/projects', {
    templateUrl: '../partials/projects.html',
    controller: 'ProjectsController'
  })
  .when('/resume', {
    templateUrl: '../partials/resume.html',
    controller: 'ResumeController'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});
