app.controller('AboutController', function($scope, $rootScope) {
  $scope.greeting = "About Page";
  $rootScope.currentPage = 'about';
  $scope.aboutSection = [
    '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ' 2   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ' 3   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ' 4   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];
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
