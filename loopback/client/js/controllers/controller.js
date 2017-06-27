gentra.controller('adminCtrl', function($scope,$http,$location,$localStorage){

$scope.addAdmin = function(){
 
 $http({
   method : "POST",
   url    : "/api/admins",
   data   : {firstname :$scope.firstname, lastname:$scope.lastname,
             username:$scope.username, email:$scope.email,
             password:$scope.password}
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.admins = response.data;
        $location.path('/login');
  }
 },function errorCallback(response){
  console.log('error',response);
});

}

/*login admin*/
$scope.login = function(){
 
 $http({
   method : "POST",
   url    : "/api/admins",
   data   : {
             username:$scope.username, 
             password:$scope.password
            }
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.admins = response.data;
        
        if($scope.admins!='')
            {
              $location.path('/productlist');
            }
        else{
              alert("Invalid credentials");
              $location.path('/login');
            }    
  }
 },function errorCallback(response){
  console.log('error',response);
});

}




$http({
   method : "GET",
   url    : "/api/people"  
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.people = response.data;
  }
 },function errorCallback(response){
  console.log('error',response);
});

/*add product*/
$scope.addProduct = function(){
 $http({
   method : "POST",
   url    : "/api/products",
   data   : {name : $scope.name, code: $scope.code, price: $scope.price,color: $scope.color}
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.product = response.data;
        $location.path('/productlist');
  }
 },function errorCallback(response){
  console.log('error',response);
});

}


/*list of products*/
$http({
   method : "GET",
   url    : "/api/products"  
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.products = response.data;
  }
 },function errorCallback(response){
  console.log('error',response);
});


/*edit product by */
$scope.ep = $localStorage.ep;
 $scope.editProduct = function(id){
  //alert(id);
 $http({
   method : "GET",
   url    : "/api/products/" + id  
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.EP = response.data;
        $localStorage.ep = $scope.EP;
        $location.path('/editP');
  }
 },function errorCallback(response){
  console.log('error',response);
});
}

/*save product by Id*/
$scope.addProductsave = function(id){
 $http({
   method : "POST",
   url    : "api/products/"+ id +"/replace",
   data   : {name : $scope.ep.name, code: $scope.ep.code, price: $scope.ep.price,color: $scope.ep.color}
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.prod = response.data;
        $location.path('/productlist');
  }
 },function errorCallback(response){
  console.log('error',response);
});

}

/*delete product*/
$scope.deleteProduct = function(id) 
  { 
    /*$location.path('/editcompany');*/
    $http({
    method:"DELETE",
    url:'/api/products/'+id,
  }).then(function successCallback(response) {
      if(response.data.error){
        $scope.error = response.data.error;
      }else{
        $scope.products.forEach(function(values,index)
       {
         if(values.id == id)
         {
           $scope.products.splice(index,1);
         }
       });
       }
      }, function errorCallback(response) {
      console.log('error',response);
    });
    }

/*add users*/
$scope.addUser = function(){
 
 $http({
   method : "POST",
   url    : "http://localhost:9999/adduser",
   data   : {
             firstname :$scope.firstname, lastname:$scope.lastname,
             username:$scope.username, email:$scope.email
            }
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
       alert(response.data);
        
  }
 },function errorCallback(response){
  console.log('error',response);
});

}

/*list of all users*/
$http({
   method : "GET",
   url    : "/api/candidates"  
 }).
 then(function successCallback(response){
  if(response.data.error){

    $scope.error = response.data.error;
  }
  else{
        
        $scope.Users = response.data;
        console.log($scope.Users);
  }
 },function errorCallback(response){
  console.log('error',response);
});

});

gentra.controller('mainCtrl', function($scope,$http,$location,$localStorage){

  $scope.logout = function(){ 
        $http({
            method:'get',
            url:'/api/admins',
        }).then(function successCallback(response){             
          $location.path('/login');
          
          
          
        }, function errorCallback(res){
          console.log("error");
        });
  };

});
