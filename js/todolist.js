/**************
VARIABLE DEFINITIONS
**************/

var deleteGlyph = "<button type='button' class='btn btn-default delete'><span class='glyphicon glyphicon-remove-circle'></span></button>";
var plusGlyph = "<button type='button' class='btn btn-default plus'><span class='glyphicon glyphicon-plus'></span></button>";
var doneGlyph = "<button type='button' class='btn btn-default done'><span class='glyphicon glyphicon-ok'></span></button>";
var minusGlyph = "<button type='button' class='btn btn-default minus'><span class='glyphicon glyphicon-minus'></span></button>";



/*************
HELPER FUNCTION DEFINITIONS
**************/

// get today's date 
var dateFunc = function() {  
    console.log("dateFunc");
    
    // get date and time
    var date = new Date();
    console.log(date);
    var header;
    // get weekday
    var allWeekdays = new Array(7);
    allWeekdays[0] =  "Sunday";
    allWeekdays[1] = "Monday";
    allWeekdays[2] = "Tuesday";
    allWeekdays[3] = "Wednesday";
    allWeekdays[4] = "Thursday";
    allWeekdays[5] = "Friday";
    allWeekdays[6] = "Saturday";

    var weekday = allWeekdays[date.getDay()]; 

    var today = date.getDate();
    console.log(today);

    // get month name
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[date.getMonth()];

    //get full year
    var year = date.getFullYear();

    // build new list title for today
    return weekday + ', ' + month + ' ' + today + ', ' + year;
 };

function stripStringFunc(dateString) {
    console.log("stripStringFunc");
    var stripString = dateString.replace(/,/g, '');
    return stripString.replace(/\s+/g, '');

};

function doneFunc() {
        console.log("donefunc");
        var text = this; 
        var parent = this.parentNode;
      
        var title = dateFunc();
        //console.log("newDay: " + title);

        var id = stripStringFunc(title);

        // append text to today's ul, creating new ul if necessary
        var newDay;

        // if today's id does not yet exist, create it and append ul tags
        if (document.getElementById(id) == null) {
               
                // create header, concat to div and ul tags
                var header = "<h4>" + title + "</h4>";
                var newDay = "<div class='col-md-3'>" + header + "<ul id='" + id + "'></ul></div>";

        }; 
                            
         // remove all buttons
        $('.delete', parent).remove();
        $('.minus', parent).remove();

        //var li = "<li>" + text + "</li>"

        // append <div> to <div id=done> 
        $('#done').prepend(newDay);
        
        //var ulId = "#" + id;
        // append <li> text to <ul id=title>  
        $('#' + id).append(parent);

        
                 
}; 

function plusFunc() {
    console.log("plusFunc");

    var text = this.parentNode;

    // append item to today list
    $('ul', "#dotoday").append(text);

    // remove plusGlyph and add minusGlyph
    $('.plus', text).remove();
    $(text).append(minusGlyph);

    //maintain minus glyph functionality
    $('.minus', text).click(minusFunc);

    // don't run doneFunc
    event.stopPropagation();

}

// click minus sign to move item back to list. stops bubbling to 'doneFunc' so item is not also moved to done list 
function minusFunc() {
    console.log("minusFunc");

    var text = this.parentNode;

    // append item to list
    $('#list').append(text);

    // remove minusGlyph and add plusGlyph
    $('.minus', text).remove();
    $(text).append(plusGlyph);

    // maintain plusFunc functionality
    $('.plus', text).click(plusFunc);

    // don't run doneFunc
    event.stopPropagation();

}

//delete list item using delete button. stops bubbling to 'doneFunc' so item is not also moved to done list 
function deleteFunc(event) {
    console.log("deleteFunc");

    var item = this.parentNode;
    item.remove();
    event.stopPropagation();

};

// preparing the page at initial load
function prepPageFunc() {
    console.log('pagePrep');

    // clear input field
    $('#inputfield').val('');

    $('.track').hide();

    // show and hide sections.   
    $('#track').click(function() {
        $(".track").show();
        $(".plan").hide();
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('active');

    });

    $('#plan').click(function() {
        $(".plan").show();
        $(".track").hide();
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('active');

    });
  
};

// save user input when button is clicked - build to do list
function submitFunc(event){
    console.log("submitFunc");

    var inputtext = $('#inputfield').val();
    
    // build a node element <li> 
    var newItem = $("<li><span class='text'>" + inputtext + "</span>" + deleteGlyph + plusGlyph + "</li>");

    // do i have to assign functionality to these elements now? 
    // when the list item is clicked, it is moved to the done list
    //newItem.click(doneFunc);

        //will use event delegation externally instead

        // click the delete button to delete list item
        $('.delete', newItem).click(deleteFunc);

        // click the minus button to move item back to list
        $('.minus', newItem).click(minusFunc);

        // click plus to add item to Today list
        $('.plus', newItem).click(plusFunc);
    

    // append new node to list
    $('#list').append(newItem);

    

    // clear input field
    $('#inputfield').val('');

    return false;

}; 

/****************
EVENT HANDLERS
****************/

// Attach a delegated event handlers to buttons
// delete
/*$( "li" ).on( "click", ".delete", function( event ) {
    //event.preventDefault();
    console.log("deleteClick");
}); */

/* plus button
$( "#list" ).on( "click", "a", function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
});

// minus button
$( "#list" ).on( "click", "a", function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
});
*/

$(document).ready(function(){
    $('form').submit(submitFunc);

    prepPageFunc();

    /*$( "li" ).on( "click", ".delete", function( event ) {
        //event.preventDefault();
        console.log("buttonclicked");
    }); */

    $("#today").on("click", ".text", doneFunc )
    //$("").on("click", ".plus", plusFunc )
    //$("").on("click", ".minus", minusFunc )
    //$("li").on("click", ".btn.btn-default.delete", deleteFunc )
});    




