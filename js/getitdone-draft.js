
// get today's date 
function dateFunc() {
    var header;
    console.log("dateFunc");
    
    // get date and time
    var date = new Date();

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

    var today = date.getDay();

    // get month name
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[date.getMonth()];

    //get full year
    var year = date.getFullYear();

    // build new list title for today
    return weekday + ', ' + month + ' ' + today + ', ' + year;
 };


$(document).ready(function(){
    $('form').submit(submitFunc);

     // clear input field
    $('#inputfield').val('');

    $('#btn1').hide();
    // show and hide sections.  How to make default? 
    $('#track').click(function() {
        $(".track").show();
        $(".plan").hide();
    })
    $('#plan').click(function() {
        $(".plan").show();
        $(".track").hide();
    })

     var deleteGlyph = "<button type='button' class='btn btn-default delete'><span class='glyphicon glyphicon-remove-circle' class='delete'></span></button>";
     var plusGlyph = "<button type='button' class='btn btn-default plus'><span class='glyphicon glyphicon-plus'></span></button>";
     var doneGlyph = "<button type='button' class='btn btn-default done'><span class='glyphicon glyphicon-ok'></span></button>"
     var minusGlyph = "<button type='button' class='btn btn-default minus'><span class='glyphicon glyphicon-minus'></span></button>"

    // var deleteBtn = "<button id='delete'>X</button>";
    // var urgentBtn = "<button id='urgent'>Urgent</button>";

    /**................................
    *
    * HELPER FUNCTIONS CALLED BY submitFunc
    *
    *................................*/

    // when text is clicked, date header is created, 
    var doneFunc = function() {
        console.log("donefunc");
        var text = this; 
      
        var title = dateFunc();
        //console.log("newDay: " + title);

        // append text to today's ul, creating new ul if necessary
        var newDay;
        function trackFunc() {
            console.log("trackFunc");
            var newDay; var uList;

            // if today's id does not yet exist, create it and append ul tags
            if (document.getElementById(title) == null) {
                   
                    // create header, concat to div and ul tags
                    var header = "<h4>" + title + "</h4>";
                    var newDay = "<div class='col-md-3'>" + header + "</div><ul id='" + title + "'></ul>";

            }; 
                                
            var ulId = "#" + title;
            // append <li> text to <ul id=title>  
            $(ulId).append(text);

            // append <div> to <div id=done> 
            $('#done').append(newDay);

            

        };    
        trackFunc();  
      
        // remove all buttons
        $('.delete', text).remove();
        $('.minus', text).remove();
     
    }; 


    var plusFunc = function() {
        console.log("plusFunc");
        var text = this.parentNode;

        // append item to today list
        $("#today").append(text);

        //maintain delete glyph functionality
        $('.delete', text).click(deleteFunc);

        // add doneFunc functionality
        // when the list item is clicked, it is moved to the done list
        //$(text).click(dateFunc);

        // remove plusGlyph and add minusGlyph
        $('.plus', text).remove();
        $(text).append(minusGlyph);
        
        //maintain minus glyph functionality
        $('.minus', text).click(minusFunc);

        // don't run doneFunc
        event.stopPropagation();

    }

    // click minus sign to move item back to list
    var minusFunc = function() {
        console.log("minusFunc");
        var text = this.parentNode;

        // append item to list
        $('#list').append(text);

        //maintain delete glyph functionality
        $('.delete', text).click(deleteFunc);

        // remove minusGlyph and add plusGlyph
        $('.minus', text).remove();
        $(text).append(plusGlyph);

        // maintain plusFunc functionality
        $('.plus', text).click(plusFunc);

        // don't run doneFunc
        event.stopPropagation();

    }
    
    //delete list item using delete button. stops bubbling to 'doneFunc' so item is not also moved to done list 
    var deleteFunc = function(event) {
        console.log("deleteFunc");
        var item = this.parentNode;
        item.remove();
        event.stopPropagation();
    };

    // toggles text red or black using fire button
    var urgentFunc = function(event) {
        console.log('urgent');
        $(this).parent('li').toggleClass('urgent');
        event.stopPropagation();
    };


    /**...............................
    *
    * MAIN
    *
    *................................*/


    // save user input when button is clicked - build to do list
    var submitFunc = $('#btn1').click(function(event){
        
        console.log("clicked");
        var inputtext = $('#inputfield').val();
        
        // build a node element <li> 
        var newItem = $("<li> " + plusGlyph + "<span>" + inputtext + "</span>" + deleteGlyph + "</li>");

        // when the list item is clicked, it is moved to the done list
        newItem.click(doneFunc);

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

    });  // close submitFunc()

}); // close document.ready()







   