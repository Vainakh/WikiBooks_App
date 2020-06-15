console.log("Angular")
const app = angular.module("MyApp", []);


app.controller("ApiController", ["$http", function($http) {
this.baseURL = "http://jservice.io/api/random";
this.randomQuestion;

this.value = 0;
this.valueAdded = false;
this.currentValue = 0

this.getRandomQuestion = () => {
  this.showAnswer = false;
  this.valueAdded = false;

    $http({
      method:'GET',
      url: this.baseURL
    }).then(response => {
      this.randomQuestion = response.data;
      this.currentValue = response.data[0].value;
      console.log(response.data);
      console.log(response.data[0].value);
    }, error => {
      console.error(error);//something wrong with the request
    }).catch( err => console.log("Catch:", err))//something wrong with promise
  }

    this.incrementValue = () => {
      if(!this.valueAdded) {
        this.value += this.currentValue;
        this.valueAdded = true;

      }
    }

    this.decrementValue = () => {
      if(!this.valueAdded) {
        this.value -= this.currentValue;
        this.valueAdded = true;
      }
    }

    this.resetValue = () => {
      this.value = 0;
    }


  this.toggleAnswer = () => {
    console.log(this.showAnswer)
    console.log("Hello World!");
    this.showAnswer = !this.showAnswer;
  }

}]);

// app.controller("QuizController", function() {
//   // this.showAnswer = false;
//   // this.randomQuestion;

//   // this.toggleAnswer = () => {
//   //   console.log(this.showAnswer)
//   //   console.log("Hello World!");
//   //   this.showAnswer = !this.showAnswer;
//   }

// });
