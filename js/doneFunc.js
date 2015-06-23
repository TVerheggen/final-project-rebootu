// move today list item to track list for today's date
            var doneFunc = function() {
                console.log("donefunc");
                var text = this.parentNode; 

                // dateFunc();
                function dateFunc() {
                    var header;
                    console.log("dateFunc");
                    
                    // get date and time
                    var date = new Date();
                    //console.log("date: " + date);

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
                    //console.log("weekday: " + weekday);

                    var today = date.getDay();
                    //console.log("today: " + today);

                    // get month name
                    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    var month = monthNames[date.getMonth()];
                    //console.log("month: " + month);

                    //get full year
                    var year = date.getFullYear();
                    //console.log("year: " + year);

                    // build new list title for today
                    var title = weekday + ', ' + month + ' ' + today + ', ' + year;
                    //console.log("title: " + title);

                    header = "<h3 id=track " + title + "> " + title + " </h3>";
                    //console.log("header: " + header);  

                    return header; 

                };
                // var header = dateFunc();


                console.log("header: " + header);
              
                // remove all buttons
                $('.delete', text).remove();
                $('.minus', text).remove();

                // check if this header already exists
                //headerCheck();

                // if header exists, append item. if header does not exist, create new ul, append header
                // headerCreate();
                function headerCreate(header) {
                    var newDay = header + "<ul></ul>";
                    console.log("newDay: " + newDay);
                }



                // append list item 
                //$('ul', id=today).append(text);
             
            }; 
