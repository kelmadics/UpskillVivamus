/**
 * Created by Le Charles de Villz on 06/07/2017.
 */
/*MAIN PAGE - FORM 1*/
$("#btn2").click(function(event){
    event.preventDefault();




    $("#container1").hide();
    $("#container2").fadeIn();
    $(".one").removeClass("active");
    $(".two").addClass("active");
    $("h1").text("Vivamus interdum nunc ac sem fringilla");
    $("h2").text("Duis risus urna, mattis eget justo non, gravida ultrices diam");
    $("h3").hide();
});





/*MAIN PAGE - FORM 2*/

$("#btn3").click(function () {
    event.preventDefault();
    $("#container2").hide();
    $("#container1").fadeIn();
    $(".two").removeClass("active");
    $(".one").addClass("active");
    $(".three").removeClass("active");
    $("h1").text("In euismod sapien eu maximus tempus");
    $("h2").text("Vestibulum bibendum posuere dui, in pharetra est hendrerit ac.");
    $("h3").show();
});
$("#btn4").click(function () {
    event.preventDefault();
    $("#container2").hide();
    $("#container3").fadeIn();
    $(".two").removeClass("active");
    $(".three").addClass("active");
    $("h1").text("In euismod sapien eu maximus tempus");
    $("h2").text("Vestibulum bibendum posuere dui, in pharetra est hendrerit ac.");
    $("h3").show();
});


$("#paypal").click(function (event) {
    event.preventDefault();
    $("#tabcontentcreditcard").hide();
    $("#tabcontentpaypal").fadeIn();
    $("#creditcard").removeClass("wactive");
    $("#paypal").addClass("wactive");


});

$("#creditcard").click(function (event) {
    event.preventDefault();
    $("#tabcontentpaypal").hide();
    $("#tabcontentcreditcard").fadeIn();
    $("#paypal").removeClass("wactive");
    $("#creditcard").addClass("wactive");
});

/*MAIN PAGE - FORM 3*/

$("#btn5").click(function () {
    event.preventDefault();
    $("#container3").hide();
    $("#container2").fadeIn();
    $("h1").text("In euismod sapien eu maximus tempus");
    $("h2").text("Vestibulum bibendum posuere dui, in pharetra est hendrerit ac.");
    $("h3").hide();
    $(".three").removeClass("");
    $(".two").addClass("");

});
/*SUBMIT *****************************/
$("#btn6").click(function () {
    event.preventDefault();

    /*User Info*/
    localStorage.setItem("FirstName",$("#firstname").val());
    localStorage.setItem("LastName",$("#lastname").val());
    localStorage.setItem("Email",$("#email").val());
    localStorage.setItem("Contact",$("#number").val());

    /*Credit Card*/
    localStorage.setItem("DonationAmt",$("#amount").val());
    localStorage.setItem("HolderName",$("#holdername").val());
    localStorage.setItem("CardNumber",$("#cardnum").val());
    localStorage.setItem("SecurityCode",$("#cardcode").val());
    localStorage.setItem("ExpiryDate",$("#expiry").val());

    /*Pay pal*/
    localStorage.setItem("PaypalEmail",$("#paypalemail").val());

    /*Comment Field*/
    localStorage.setItem("Comment",$("#commentfield").val());


    if(localStorage.getItem("FirstName"))
        alert("Thank You!!");

    $("#container3").hide();
    $("#container2").hide();
    $("#container1").fadeIn();
    $(".three").removeClass("active");
    $(".two").removeClass("active");
    $(".one").addClass("active");
});


/*_______________________________________________________________________________*/


$(".one").click(function () {
    event.preventDefault();
    $("#container3").hide();
    $("#container2").hide();
    $("#container1").fadeIn();
    $(".three").removeClass("active");
    $(".two").removeClass("active");
    $(".one").addClass("active");
    $("h1").text("In euismod sapien eu maximus tempus");
    $("h2").text("Vestibulum bibendum posuere dui, in pharetra est hendrerit ac.");
    $("h3").show();
});
$(".two").click(function () {
    event.preventDefault();
    $("#container1").hide();
    $("#container3").hide();
    $("#container2").fadeIn();
    $(".three").removeClass("active");
    $(".one").removeClass("active");
    $(".two").addClass("active");
    $("h1").text("Vivamus interdum nunc ac sem fringilla");
    $("h2").text("Duis risus urna, mattis eget justo non, gravida ultrices diam");
    $("h3").hide();
});
$(".three").click(function () {
    event.preventDefault();
    $("#container1").hide();
    $("#container2").hide();
    $("#container3").fadeIn();
    $(".two").removeClass("active");
    $(".one").removeClass("active");
    $(".three").addClass("active");
    $("h1").text("In euismod sapien eu maximus tempus");
    $("h2").text("Vestibulum bibendum posuere dui, in pharetra est hendrerit ac.");
    $("h3").show();
});
$("#burgericon").click(function () {
    event.preventDefault();
    $("#burgermenu").fadeToggle();

});
$(document).ready(function () {

});



/*==========================================================*/

$("#button").click(function () {

    var panday = new Worker("js/webworker.js");
    panday.onmessage = function (event) {
        console.log("hello");

        $("#value").append(event.data)
    }
});


