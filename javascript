$(document).ready(function() {
  var vegan = true;
  $('.ingredient').click(function() {
    var totalNum = $('#total');
    var totalCarbs = $('#totalCarbs');
    var totalFats = $('#totalFats');
    var totalProteins = $('#totalProteins');
    var pressed = $(this).hasClass('clicked');
    var currentCalories = +totalNum.html();
    var currentCarbs = +totalCarbs.html();
    var currentFats = +totalFats.html();
    var currentProteins = +totalProteins.html();

    if (pressed) {
      $(this).removeClass('clicked');
      var calories = $(this).data('calories');
      var carbs = $(this).data('carbs');
      var fat = $(this).data('fat');
      +totalNum.html(currentCalories - calories);
      +totalCarbs.html(currentCarbs - carbs);
      +totalFats.html(currentFats - fat);
      +totalProteins.html(currentProteins - proteins);
    } else {
      $(this).addClass('clicked');
      var calories = $(this).data('calories');
      var carbs = $(this).data('carbs');
      var fat = $(this).data('fat');
      var proteins = $(this).data('fat');
      +totalNum.html(currentCalories + calories);
      +totalCarbs.html(currentCarbs + carbs);
      +totalFats.html(currentFats + fat);
      +totalProteins.html(currentProteins + fat);
    }

    var attr = $(this).attr('vegan');
    if (typeof attr !== typeof undefined && attr !== false) {
    	if(vegan) {
      	$('#type').text("This is Vegan!");
      	$('#typeImage').attr("src", "https://upload.wikimedia.org/wikipedia/hi/thumb/b/b2/Veg_symbol.svg/768px-Veg_symbol.svg.png");
      }
    } else {
      $('#type').text("This is not Vegan!");
      vegan = false;
      $('#typeImage').attr("src", "http://www.hellocurry.com/images/nonveg_icon.png");
    }
  });
});
