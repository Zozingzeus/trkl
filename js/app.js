(function() {
    var app = angular.module('trklApp', []);
    
    app.controller('FeedController', function() {
       this.posts = posts;
    });
    
    var posts = [{
        title: "Test Post",
        image: "imgs/test.png",
        body: "This is a test post.",
        author: "Petter"
    },{
        title: "Test Post 2",
        body: "This a second test post.",
        author: "Lars"
    }]
})();