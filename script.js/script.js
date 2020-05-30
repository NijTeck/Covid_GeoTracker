

  $(document).ready(function() {
    $.getJSON("https://api.covid19api.com/summary", function (data) {
      console.log(data);
  });

  });
