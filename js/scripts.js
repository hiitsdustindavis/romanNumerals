// var romnum = function(number) {
//   var  = "1";
//   var converted = "I";
//
//   return converted;
// };





function toRoman(n) {
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for (var i = 0; i < decimals.length; i++) {
      if(n < 1)
          return "";

      if(n >= decimals[i]) {
          var conversion = roman[i] + toRoman(n - decimals[i]);
          return conversion;
      }
  }
};

$(function() {
  $("form#counter").submit(function(event) {
    var n = parseInt($("input#count-to").val());
    var numbers = toRoman(n);

    $(".output").text(numbers);

    $("#result").show();
    event.preventDefault();

  });
});
