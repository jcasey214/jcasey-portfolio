var projectList = [{
  name: 'myFlicks',
  thumb: 'assets/myFlicks.png',
  technologies: 'Javascript, Bootstrap, TMDB API, Netlix Availability API, Local Storage',
  description: 'myFlicks is a movie search site that gives the user a simple clean search feature and indicates the availability of search results on Netflix streaming. Users can also save movies to their \'list\' to keep track of movies they want to see. Upon returning to the site, the user\'s list will be updated if the Netflix availability of any of their tracked films has changed. A walkthrough can be viewed at ',
  github: 'http://www.github.com/jcasey214/myFlicks',
  url: 'http://www.http://casey.g15.xyz/myFlicks/build/'
},{
  name: 'Griffinry',
  thumb: 'assets/griffinry.png',
  technologies: 'Node, Express, PostreSQL, Local Authentication and Google OAuth with Passport, Knexjs, Momentjs',
  description: 'Griffinry is a browser based virtual pet game that allows users to adopt, interact with and care for virtual Griffins. Users can signup and login with a site-specific username/password or can choose to use google authentication. After signing up, they can adopt up to 3 griffins and choose their colors and names. Over time, pet health decreases and energy increases. To recuperate health, you can take your pet to gather food/supplies.',
  github: 'http://www.github.com/griffinry',
  url: 'http://www.griffinry.com'
},
{
  name: 'Stumblr',
  thumb: 'assets/stumblrScaled.png',
  technologies: 'React, MongoDB, Express, PassportJS, Browserify',
  description: 'Stumblr is a social barhopping app. It utilizes the Google Maps API to find bars near your current location or any location you choose to enter. Twitter functionality is integrated and allows users to tweet when they arrive at a bar on their list and tweet the badges they earn for different benchmarks. We built the app with a mobile first design and utilized React and MongoDB for performance.',
  github: 'http://www.github.com/designateddrinkers/stumblr',
  url: 'http://www.github.com/designateddrinkers/stumblr'
}];

var aboutSection = [
    '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ' 2   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ' 3   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ' 4   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
];


app.controller('AboutController', function($scope, $rootScope) {
  $scope.greeting = "About Page";
  $rootScope.currentPage = 'about';
  $scope.aboutSection = aboutSection;
  $scope.currentIndex = 0;
  $scope.nexSection = function(){
    console.log('clicked');
    if($scope.currentIndex < $scope.aboutSection.length){
      $scope.currentIndex += 1;
    }else{
      $scope.currentIndex = 0;
    }
  };
});

app.controller('ResumeController', function($scope, $rootScope){
  $scope.greeting = "Resume";
  $rootScope.currentPage = 'resume';
});

app.controller('ProjectsController', function($scope, $rootScope){
  $scope.greeting = "Projects";
  $rootScope.currentPage = 'projects';
  $scope.projectList = projectList;
});

app.controller('HomeController', function($scope){
  $scope.about = {};
  $scope.about.name = "Jonathan Casey";
  $scope.about.title = "Full Stack Developer";
  $scope.about.location = "Denver, CO";
});

app.controller('HeaderController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){
  $scope.getClass = function(path){
    if($location.path().substr(0, path.length) == path){
      return 'selectedPage';
    }else{
      return '';
    }
  }
}])
