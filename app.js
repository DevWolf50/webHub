
(function () {
var app = angular.module("gemsData", []);
app.controller("ContentController", function ($scope) {
  $scope.contentCards = gems;

});

app.controller("PannelControler", function($scope) {
  $scope.tab;
  $scope.setTab = function (setTab) {
    $scope.tab = setTab;
  }
  $scope.checkTab = function (checkTab) {
    return $scope.tab === checkTab;
  }
});

  var gems =[
    {
      class: "FrontEnd FrameWork",
      name: 'Angular',
      rating:5,
      popularity:98,
      jobMarket:95,
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
      class: "FrontEnd FrameWork",
      name:"React",
      rating: 4.5,
      popularity:85,
      jobMarket:62,
      description: "React is the one og the new hottest frameworks. It was developed by facebook",
      image:'react.png',

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
