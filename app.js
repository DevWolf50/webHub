(function () {

angular.module("gemData",[])
.controller("GemController", function($scope) {
  $scope.contents = gems;
  $scope.tab;
  $scope.showThisTab = function (myTab) {
    $scope.tab = myTab
  }

});



  var gems =[
    {
      class: "MVC FrameWork",
      name: 'Angular',
      rating: 5,
      popularity: 95,
      jobMarket: 90,
      description:'Angular is a front ened framework developed by Google.Its one of the most popular frame works out there.',
      image:'angular.jpg',
      reviews:[
        {
          stars: 5,
          body: "I love Angular",
          author:"joe@thomas.com"
        },
        {
          stars: 1,
          body: "Angular Sucks",
          author:"tim@hater.com"
        }
      ],
    },
    {
      class: "MVC FrameWork",
      name:"React",
      rating: 4.5,
      popularity: 89,
      jobMarket: 72,
      description: "React is the one og the new hottest frameworks. It was developed by facebook",
      images:'react.png',
      reviews:[
        {
          stars: 4,
          body: "React is coming along",
          author:"angel@heaven.com"
        },
        {
          stars: 3,
          body: "React is an alright FrameWork",
          author:"joe@rogan.com"
        }
      ],
    }
];

})();
