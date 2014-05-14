'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$scope', '$location', '$document', function($scope, $location, $document) {
    $scope.items = [
      {path: '/home', title: '首页'},
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
    $scope.items = [
      {image: 'http://dofa.u.qiniudn.com/images/150x150/mcutv.png', heading: '嵌入式设计', content:'8051-based/PIC16/PIC32/stm32等平台', content2: 'USB/TCPIP各种协议我们都能帮你搞定', alt: 'alt1'},
      {image: 'http://dofa.u.qiniudn.com/images/150x150/web.png', heading: 'Web前端开发', content:'使用Bootstrap UI+AngularJs等新技术', content2: '让你的网站表现力更加优雅', alt: 'alt2'},
      {image: 'http://dofa.u.qiniudn.com/images/150x150/research.png', heading: '新技术研究', content:' 时刻关注技术前沿，掌控最新技术', content2: '在每一个角落体现我们惊艳的设计', alt: 'alt3'},
    ];
  
  }])


  .controller('AboutCtrl', ['$scope', function($scope) {
    $scope.items = [
      {image: 'http://dofa.u.qiniudn.com/images/150x150/150-1.png', heading: '关于网站', content:'网站格言', content2: 'There is a will, there is a way', alt: 'alt1'},
      {image: 'http://dofa.u.qiniudn.com/images/150x150/150-2.png', heading: '关于我', content:'我的QQ：516199859', content2: '我的email：bitbegin@gmail.com', alt: 'alt2'},
    ];

  }]);
