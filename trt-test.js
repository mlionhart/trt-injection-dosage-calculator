$(document).ready(function () {
  form1 = $('#form');

  // action on button click  
  $('#button').on('click', function () {
      // // get value selected in injection frequency field 
      // injection_frequency = $('#injection_frequency').val();

      // // get value selected in weekly dose field
      // weekly_dose = $('#weekly_dose').val();

      // // get handle to container that will be displaying text
      // container = $('#container');

      // // Calculate injection dosage based on desired weekly dose and desired injection frequency
      // result = (weekly_dose * injection_frequency) / 1400;

      // // Round result to nearest hundredth
      // result = result.toFixed(2);
     
      // // Build string of text to display result
      // info = "<h3>" + "Your " + "<span id='special'>" + "Injection Amount" + "</span>" + " is: " + "</h3>" + "<br>" + "<h1 id='specialH1'>" + result + "cc</h1> (based on a 200mg/ml vial)";
      

      // // display text
      // container.html(info);
      // $('.specialH1').css('margin-bottom', '10px');
      // $('h3').css('margin-top', '10px');
      // $('h3').css('margin-bottom', '-15px');
      // $('#specialH1').css('margin-bottom', '10px');
      // $('#specialH1').css('font-size', '48px');
      // container.css('padding', '5px 0');
      calc();
  });

  $('#injection_frequency, #weekly_dose').on('keydown', function (e) {
    if (e.which == 13) {
      e.preventDefault();
      calc();
    }
  });

  function calc() {
    // get value selected in injection frequency field
    injection_frequency = $("#injection_frequency").val();

    // get value selected in vial concentration field
    vial_concentration = $("#vial_concentration").val();

    // get value selected in weekly dose field
    weekly_dose = $("#weekly_dose").val();

    // get handle to container that will be displaying text
    container = $("#container");

    if ((weekly_dose == null) || (weekly_dose == '')) {
      info = `<h1 style="color:red;">Please Fill Out All Fields</h1>`;
      container.html(info);
      return;
    }

    // Calculate injection dosage based on desired weekly dose and desired injection frequency
    result = (weekly_dose * injection_frequency) / (7 * vial_concentration);

    // Round result to nearest hundredth
    result = result.toFixed(2);

    // Build string of text to display result
    info =
      "<h3>" +
      "Your " +
      "<span id='special'>" +
      "Injection Amount" +
      "</span>" +
      " is: " +
      "</h3>" +
      "<br>" +
      "<h1 id='specialH1'>" +
      result +
      // "cc</h1>() (based on a " + vial_concentration + "mg/ml vial)";
      `ml*</h1> <span id="ml">*Based on a ${vial_concentration} mg/ml vial</span>`;

    // display text
    container.html(info);
    $(".specialH1").css("margin-bottom", "10px");
    $("h3").css("margin-top", "10px");
    $("h3").css("margin-bottom", "-15px");
    $("#specialH1").css("margin-bottom", "10px");
    $("#specialH1").css("font-size", "48px");
    container.css("padding", "5px 0");
  }
});