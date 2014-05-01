'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$scope', '$location', '$document', function($scope, $location, $document) {
    $scope.items = [
      {path: '/home', title: '首页'},
      {path: '/photos', title: '相册'},
      {path: '/spaces', title: '太空科幻'},
      {path: '/about', title: '关于'},
    ];
    $scope.top = "";
    $scope.isActive = function(item) {
      if (item.path == $location.path()) {
        return true;
      }
      return false;
    };
    $scope.BackToTop = function() {
      $document.scrollTop(0, 200);
    };    
  }])

  .controller('HomeCtrl', ['$scope', function($scope) {

  
  }])

  .controller('PhotosCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      var newWidth = 600 + slides.length;
      slides.push({
        image: 'http://placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])

  .controller('SpacesCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(index) {
      slides.push({
        image: 'http://dofa.u.qiniudn.com/image/space/太空科幻' + index + '.jpg'
      });
    };
    for (var i=1; i<26; i++) {
      $scope.addSlide(i);
    }
  }])

  .controller('AboutCtrl', ['$scope', function($scope) {


  }]);
