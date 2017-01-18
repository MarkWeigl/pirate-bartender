$(document).ready(function(){


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

  ing = new Ingredient("strong", "A slug of whiskey");
  myPantry.addIngredient(ing);

  ing = new Ingredient("strong", "splash of gin");
  myPantry.addIngredient(ing);

  ing = new Ingredient("bitter", "splash of tonic");
  myPantry.addIngredient(ing);

  ing = new Ingredient("sweet", "Sugar cube");
  myPantry.addIngredient(ing);

  ing = new Ingredient("salty", "Olive on a stick");
  myPantry.addIngredient(ing);

  ing = new Ingredient("salty", "salt-dusted rim");
  myPantry.addIngredient(ing);

  ing = new Ingredient("salty", "rasher of bacon");
  myPantry.addIngredient(ing);

  ing = new Ingredient("bitter", "Shake of bitters");
  myPantry.addIngredient(ing);

  ing = new Ingredient("bitter", "splash of tonic");
  myPantry.addIngredient(ing);

  ing = new Ingredient("bitter", "twist of lemon peel");
  myPantry.addIngredient(ing);

  ing = new Ingredient("sweet", "spoonful of honey");
  myPantry.addIngredient(ing);

  ing = new Ingredient("sweet", "splash of cola");
  myPantry.addIngredient(ing);

  ing = new Ingredient("fruity", "slice of orange");
  myPantry.addIngredient(ing);

  ing = new Ingredient("fruity", "dash of cassis");
  myPantry.addIngredient(ing);

    ing = new Ingredient("fruity", "cherry on top");
  myPantry.addIngredient(ing);

  var Customer = function(name) {
    this.name = name;
    this.preferences = [];
    this.favorite = {};
  };

  Customer.prototype.addPreference = function(type) {
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

  Bartender.prototype.create = function(preferences, pantry) {
    var drink = new Drink;
    for (var i = 0; i < preferences.length; i++) {
      var ingredient = pantry.getIngredient(preferences[i]);
      drink.addIngredient(ingredient);
    }
  }

  $("#serveddrink").hide();

  var bob = new Bartender('Bob');

  var Question = function(text, type) {
    this.text = text;
    this.type = type;
  };

  var drink = new drink ('Xtra Strong Bulldog');
  bob.createDrink();
  var drink = new drink ('Salty Tabby');
  bob.createDrink();
  var drink = new drink ('Bitter Rattlesnake');
  bob.createDrink()
  var drink = new drink ('Sweet Parrot');
  bob.createDrink();
  var drink = new drink ('Fruity Poodle');
  bob.createDrink();



  var Drink = function () {
    this.name = '';
    this.ingredients = [];
  };

  Drink.prototype.addIngredient = function(ingredient) {
    this.ingredients.push(ingredient);
  };

  Pantry.prototype.getRandomByTaste = function(taste){
    var filteredIngredients = this.ingredients.filter(function(ingredient){
      return ingredient.category === taste;
    });
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

  Bartender.prototype.createDrink = function(pantry){
    var prop;
    this.preparedDrink = [];

    for (var preference in this.userPreferences) {
      if (this.userPreferences[preference]) this.preparedDrink.push(pantry.getRandomByTaste(preference).name);
    }
    return this.preparedDrink.length > 0;

  };

  Bartender.prototype.askQuestions = function(){
    var that = this;
    var html = "";
    for (i = 0; i < this.questions.length; i++) {
      html += "<p>"+ this.questions[i].text;
      html += "<input type='radio' name='question"+i+"' value='yes'> yes";
      html += "<input type='radio' name='question"+i+"' value='no'> no";
    } 
    $("#questions").append(html); 
    $("#questions").append("<button type='submit'>Submit</button>"); 
    $("#questions").submit(function(e){
      e.preventDefault();
      for (i =0; i <that.questions.length; i++) {
        var selector = "input[name='question"+i+"']:checked";
        var pref = $(selector).val();
        console.log(pref);
        if (pref === "yes") {
          customer.addPreference(that.questions[i].type);
        } 
      }
      $("#questions").hide();
      $("#serveddrink").show();
      console.log(customer);
    });
   // }
  };

    var customer;

  $("#greet").submit(function(e){
    e.preventDefault();
    var name = $("#customer").val();
    customer = new Customer(name);
    $("#greet").hide();
    bob.askQuestions();
  });

  var Question = function(text, type) {
    this.text = text;
    this.type = type;
  };
  
});