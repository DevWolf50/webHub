(function() {
  var app = angular.module('gems', []);
  app.controller('GemController', function () {
    this.products = gems;

  });

  app.controller("PanelController", function () {
    this.tab = 1;
    this.selectTab = function (setTab) {
      this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    };


  } );

  app.controller("ReviewController",function () {
    this.review ={};
    this.addReview = function (product) {
      product.reviews.push(this.review);
      this.review={};
    }
  });


  var gems =[
    {
      class: "FrontEnd FrameWork",
      name: 'Angular',
      rating:5,
      description:'Angular is a front ened framework developed by Google.Its one of the most popular frame works out there.',
      images: [
        {
          full:'angular.jpg',
          thumb:'diasmall.jpg'
        }
      ],
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
      canPurchase: true
    },
    {
      name:"React",
      rating: 4.5,
      description: "React is the one og the new hottest frameworks. It was developed by facebook",
      images: [
        {
          full:'react.png',
          thumb:'diasmall.jpg'
        }
      ],
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
      canPurchase: true
    }
];

})();
