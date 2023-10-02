$(document).ready(function() {
  $(".filter button").click(function() {
    var filterValue = $(this).attr('data-filter');
    if (filterValue == 'all') {
      $(".image").show('1000');
    } else {
      $(".image").not('.' + filterValue).hide('3000');
      $(".image").filter('.' + filterValue).show('3000');
    }
    $(this).addClass('active').siblings().removeClass('active');
  });
});