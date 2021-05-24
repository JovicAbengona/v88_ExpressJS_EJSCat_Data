var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/cars", function(request, response){
    response.render('cars');
});

app.get("/cars/new", function(request, response){
    response.render('form');
});

app.get("/cats", function(request, response){
    response.render('cats');
});

app.get("/snuggles", function(request, response){
    var snuggles = {
        pic: "cat_1.jpeg",
        name: "Snuggles",
        fave_food: "Meatballs",
        age: 3,
        sleeping_spots: [
            "under the couch",
            "on my keyboard",
        ]
    };
    response.render("cat_details", {cat: snuggles});
});

app.get("/sylvester", function(request, response){
    var sylvester = {
        pic: "cat_2.jpeg",
        name: "Sylvester",
        fave_food: "Pie",
        age: 8,
        sleeping_spots: [
            "on the floor mat",
            "on the bed",
        ]
    };
    response.render("cat_details", {cat: sylvester});
});

app.get("/goose", function(request, response){
    var goose = {
        pic: "cat_3.jpeg",
        name: "Goose",
        fave_food: "Anything",
        age: 15,
        sleeping_spots: [
            "on my lap",
            "any box (seriously)",
        ]
    };
    response.render("cat_details", {cat: goose});
});

app.use(function(request, response){
    response.render('404');
});

app.listen(8080, function(){
    console.log("Listening on 8080");
});