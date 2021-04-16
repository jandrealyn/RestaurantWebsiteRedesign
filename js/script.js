console.log('javascript');

window.onload=function(){

  $(document).ready(function(){

    $("#thanks").hide();
    $(".rectanglecart").hide();
    $(".carti").click(function(){
      $(".rectanglecart").toggle();
    });

  });

  $.fn.outerHTML = function(){

    // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
    return (!this.length) ? this : (this[0].outerHTML || (
      function(el){
          var div = document.createElement('div');
          div.appendChild(el.cloneNode(true));
          var contents = div.innerHTML;
          div = null;
          return contents;
    })(this[0]));

  }

  var sumPrice=0;
  document.getElementById('entree').addEventListener('click', function(){
    var itemName = "Dumplings";
    var price = 10;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('amount').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "Total = NZ $" + sumPrice;

  });

  document.getElementById('entree1').addEventListener('click', function(){
    var itemName = "Dumplings";
    var price = 10;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('amount').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "Total = NZ $" + sumPrice;

  });

  document.getElementById('entree2').addEventListener('click', function(){
    var itemName = "Dumplings";
    var price = 10;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('amount').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "Total = NZ $" + sumPrice;

  });

  document.getElementById('main').addEventListener('click', function(){
    var itemName = "Laksa";
    var price = 18;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('amount').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "<br> Total = NZ $ " + sumPrice;

  });

  document.getElementById('main1').addEventListener('click', function(){
    var itemName = "Laksa";
    var price = 18;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('amount').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "<br> Total = NZ $ " + sumPrice;

  });

  document.getElementById('main2').addEventListener('click', function(){
    var itemName = "Laksa";
    var price = 18;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('amount').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "<br> Total = NZ $ " + sumPrice;

  });

  document.getElementById('dessert').addEventListener('click', function(){
    var itemName = "Fruit Bowl";
    var price = 12;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('price').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "<br> Total = NZ $ " + sumPrice;

  });

  document.getElementById('dessert1').addEventListener('click', function(){
    var itemName = "Fruit Bowl";
    var price = 12;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('price').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "<br> Total = NZ $ " + sumPrice;

  });

  document.getElementById('dessert2').addEventListener('click', function(){
    var itemName = "Fruit Bowl";
    var price = 12;
    sumPrice += parseInt(price);
    document.getElementById('itemName').innerHTML += itemName + "<br>";
    document.getElementById('price').innerHTML += price + "<br>";
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML += "<br> Total = NZ $ " + sumPrice;

  });

  // --- cart script ---

}
