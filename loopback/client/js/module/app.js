var gentra = angular.module('gentra', ['ui.router','ngStorage']);

gentra.config(function($stateProvider,$urlRouterProvider){

     $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'js/views/login.html',
        controller: 'adminCtrl'
      })  
      .state('signup', {
        url: '/signup',
        templateUrl: 'js/views/signup.html',
        controller: 'adminCtrl'
      })
      .state('product', {
        url: '/product',
        templateUrl: 'js/views/product.html',
        controller: 'adminCtrl'
      })
      .state('productlist', {
        url: '/productlist',
        templateUrl: 'js/views/productlist.html',
        controller: 'adminCtrl'
      })
      .state('editP', {
        url: '/editP',
        templateUrl: 'js/views/editproduct.html',
        controller: 'adminCtrl'
      }).
      state('user', {
        url: '/user',
        templateUrl: 'js/views/addUser.html',
        controller: 'adminCtrl'
      })
      .state('userlist', {
        url: '/userlist',
        templateUrl: 'js/views/userlist.html',
        controller: 'adminCtrl'
      })      
      .state('person', {
        url: '/perosn',
        templateUrl: 'js/views/person.html',
        controller: 'adminCtrl'
      }) 
      .state('detail', {
        url: '/detail',
        templateUrl: 'js/views/detail.html',
        controller: 'adminCtrl'
      })    

      

    $urlRouterProvider.otherwise('/login');

});


  

    

