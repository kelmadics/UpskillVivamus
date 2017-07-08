/**
 * Created by Le Charles de Villz on 08/07/2017.
 */

$(document).ready(function(){

   $.ajax({
       url: "json/tabledata.json",
       type: "get",
       datatype: "json",

       success: function (data) {
           console.log("JSON data requested");
           $("#show").click(function () {
               $.each(data, function(key, value) {
                   console.log(data);
                   $("#info").append(
                       "<tr>" +
                           "<td>" + key  + "</td>" +
                           "<td>" + value.firstname + "</td>" +
                           "<td>" + value.lastname + "</td>" +
                           "<td>" + value.age + "</td>" +
                           "<td>" + value.address + "</td>" +
                           "<td>" + value.postalcode + "</td>" +
                           "<td>" + value.gender + "</td>"+
                           "<td>" + value.civilstatus + "</td>"+
                       "</tr>"
                   );
               });
           });
       },
       error: function () {
           console.log("file not found")
       }
   })
});