//Animation

var $money = $('.money');
 $('.money-section').waypoint(function (){ 
 $money.addClass('js-money-animate'); 
 }, 
 {offset: '60%'});