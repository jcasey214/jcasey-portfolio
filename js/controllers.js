var projectList = [{
  name: 'Stumblr',
  thumb: 'assets/stumblrScaled.png',
  technologies: 'React, MongoDB, Express, PassportJS, Browserify',
  description: 'Stumblr is a mobile-first social barhopping app. It utilizes the Google Maps API to find bars near your current location or any location you choose to enter. Twitter functionality is integrated and allows users to tweet when they arrive at a bar on their list and tweet the badges they earn for different benchmarks. Stumblr was built in a week and a half by myself and two classmates without any prior experience using react.',
  github: 'http://www.github.com/designateddrinkers/stumblr',
  url: 'http://www.github.com/designateddrinkers/stumblr',
  video: 'https://youtu.be/2lOGaYJfwPQ'
},
{
  name: 'Griffinry',
  thumb: 'assets/griffinry.png',
  technologies: 'Node, Express, PostreSQL, Local Authentication and Google OAuth with Passport, Knexjs, Momentjs',
  description: 'Griffinry is a browser based virtual pet game that allows users to adopt, interact with and care for virtual Griffins. Users can signup and login with a site-specific username/password or can choose to use google authentication. After signing up, they can adopt up to 3 griffins and choose their colors and names. Over time, pet health decreases and energy increases. To recuperate health, you can take your pet to gather food/supplies. Griffinry was my first full stack group app and was build using an agile workflow managed with pivotal tracker.',
  github: 'http://www.github.com/griffinry',
  url: 'http://www.griffinry.com',
  video: 'https://youtu.be/D5DP6cTqO5k'
},{
  name: 'myFlicks',
  thumb: 'assets/myFlicks.png',
  technologies: 'Javascript, Bootstrap, TMDB API, Netlix Availability API, Local Storage',
  description: 'myFlicks is a movie search site that gives the user a simple clean search feature and indicates the availability of search results on Netflix streaming. Users can also save movies to their \'list\' to keep track of movies they want to see. Upon returning to the site, the user\'s list will be updated if the Netflix availability of any of their tracked films has changed. This was my first front-end application built after 4 weeks of Galvanize.',
  github: 'http://www.github.com/jcasey214/myFlicks',
  url: 'http://www.http://casey.g15.xyz/myFlicks/build/',
  video: 'https://youtu.be/x0jfv_VS5F8'
}];


var p1 = 'My name is Jon and I am a full stack web developer. I am passionate about using technology to solve real human problems. I am proficient in client-side and server-side javascript, HTML5, CSS3 & SQL but was taught to be language agnostic and apply the models of known langauages and frameworks to new environments.'

var p2 = 'I grew up in the south, but moved to Colorado as soon as I could. Like any good Colorado transplant, I love dogs, the outdoors and craft beer. When I\'m not casting my fly rod or hiking with my Golden Retreiver Roxy, I enjoy studying Stoic philosophy, primitive living skills, and homebrewing.'

var p3 = 'I spent several years working in corporate operations and training a for large international franchisor. Ultimately, my desire to make things (and 2 weeks in the desert with nothing but a blanket, poncho and knife) led me to reassess my career and start learning to program. I began by learning a little python and C but was eventually drawn to the web and javascript.'

var p4 = 'After several months of teaching myself, I sought a more focused approach and decided to quit my job and attend the Galvanize Full Stack Immersive Program in Denver. Now, I\'m ready to start building cool stuff with cool people and continue my education in the real world.'


var aboutSection = [
  p1,
  p2,
  p3,
  p4
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
