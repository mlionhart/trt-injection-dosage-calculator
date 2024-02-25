$(document).ready(function () {
  form1 = $('#form');

  // action on button click  
  $('#button').on('click', function () {
      // get value selected in injection frequency field 
      injection_frequency = $('#injection_frequency').val();

      // get value selected in weekly dose field
      weekly_dose = $('#weekly_dose').val();

      // get handle to container that will be displaying text
      container = $('#container');

      // Calculate injection dosage based on desired weekly dose and desired injection frequency
      result = (weekly_dose * injection_frequency) / 1400;

      // Round result to nearest hundredth
      result = result.toFixed(2);
     
      // Build string of text to display result
      info = "<h3>" + "Your " + "<span id='special'>" + "Injection Amount" + "</span>" + " is: " + "</h3>" + "<br>" + "<h1 id='specialH1'>" + result + "mg</h1>";
      

      // display text
      container.html(info);
      $('.specialH1').css('margin-bottom', '10px');
      $('h3').css('margin-top', '10px');
      $('h3').css('margin-bottom', '-15px');
      $('#specialH1').css('margin-bottom', '10px');
      $('#specialH1').css('font-size', '48px');
      container.css('padding', '5px 0');
  });
});