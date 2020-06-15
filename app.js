
const app = angular.module("MyApp", []);


app.controller("firstController", ["$http", function($http) {
  this.getAuthor = () => {
    $http({
      method:'GET',
    }).then( authors => {
      this.authors = authors;
      console.log(authors)
    }, error => {
      console.error(error);//something wrong with the request
    }).catch( err => console.log("Catch:", err))//something wrong with promise
  }

}])
