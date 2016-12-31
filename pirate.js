/*
Objects:



Bartender
- Make drink

Cook
- Make burger



Question
- text
- type

*/

var Pantry = function() {
  this.ingredients = {};
};

Pantry.prototype.addIngredient = function(ingredient) {
  if (this.ingredients[ingredient.type]) {
    this.ingredients[ingredient.type].push(ingredient.description);
  } else {
    this.ingredients[ingredient.type] = [ingredient.description];
  }
};

Pantry.prototype.getIngredient = function(type) {
  if (this.ingredients[type]) {
    var random = Math.floor(Math.random() * this.ingredients[type].length);
    return this.ingredients[type][random];
  } else {
    return "error";
  }
};

var myPantry = new Pantry();

var Ingredient = function(type, description) {
  this.type = type;
  this.description = description;
};

var ing = new Ingredient("strong", "A glug of rum");
myPantry.addIngredient(ing);

ing = new Ingredient("strong", "A shot of whiskey");
myPantry.addIngredient(ing);

ing = new Ingredient("strong", "A jigger of brandy");
myPantry.addIngredient(ing);

ing = new Ingredient("strong", "A flaggon of mead");
myPantry.addIngredient(ing);

ing = new Ingredient("sweet", "A spoon of sugar");
myPantry.addIngredient(ing);

var Customer = function(name) {
  this.name = name;
  this.preferences = [];
  this.favorite = {};
};

Customer.prototype.addPreferences = function(type) {
  this.preferences.push(type);
};

var Worker = function(name) {
  this.name = name;
  this.customers = {};
};

Worker.prototype.greeting = function() {

};

var Bartender = function(name) {
  Worker.call(this, name);
  this.questions = [];
};

Bartender.prototype = Object.create(Worker.prototype);
Bartender.prototype.constructor = Bartender;

Bartender.prototype.addQuestion = function(question) {
  this.questions.push(question);
};

Bartender.prototype.createDrink = function(preferences, pantry) {
  var drink = new Drink;
  for (var i = 0; i < preferences.length; i++;) {
    var ingredient = pantry.getIngredient(preferences[i]);
    drink.addIngredient(ingredient);
  }


}

var bob = new Bartender('Bob');

var Question = function(text, type) {
  this.text = text;
  this.type = type;
};

var question = new Question ('Do ye like yer drinks strong?', 'strong');
bob.addQuestion(question);
var question = new Question ('Do ye like it with a salty tang?', 'salty');
bob.addQuestion(question);
var question = new Question ('Are ye a lubber who likes it bitter?', 'bitter');
bob.addQuestion(question);
var question = new Question ('Would ye like a bit of sweetness with yer poison?', 'sweet');
bob.addQuestion(question);
var question = new Question ('Are ye one for a fruity finish?', 'fruity');
bob.addQuestion(question);

var Drink = function () {
  this.name = '';
  this.ingredients = [];
};

Drink.prototype.addIngredient = function(ingredient) {
  this.ingredients.push(ingredient);
};

