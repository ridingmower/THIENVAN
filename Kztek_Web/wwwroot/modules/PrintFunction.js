﻿function printDiv(divID) {
    //Get the HTML of div
    var divElements = document.getElementById(divID).innerHTML;
    //Get the HTML of whole page
    var oldPage = document.body.innerHTML;

    //Reset the page's HTML with div's HTML only
    document.body.innerHTML =
        "<html><head><title></title></head><body>" +
        divElements + "</body>";

    //Print Page
    window.print();

    //Restore orignal HTML'
    document.body.innerHTML = oldPage;

    //reload
    window.location.reload();

    $('#sidebar').reload();

}
$(function () {

    //$('#sidebar').removeClass('sidebar-scroll');
    //$('#sidebar').addClass('menu-min');
    $('#sidebar').remove();
    //$('#sidebar-toggle-icon').removeClass('fa-angle-double-left');
    //$('#sidebar-toggle-icon').addClass('fa-angle-double-right');
    //$('#groupname1').hide();
    //$('#groupname2').hide();
});