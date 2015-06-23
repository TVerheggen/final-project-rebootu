// when the button is clicked, the text input is gathered, and entered into the table.  
			$(document).ready(function(){    
			    $("#btn1").click(function(){
			        var inputtext = $("#inputfield").val();
			        //$("#done-false").text(inputtext);
			    });     // put in td done and not done at the same time then show hide!  
			    	/*$("#done-true").text(inputtext).hide(inputtext);
			    });*/
			});


			/*function list {
			    var todoList = this;
			    todoList.todos = [
			      {text:'learn angular', done:true},
			      {text:'build an angular app', done:false}];*/


			// when items in the done-false table are moused over, the background turns grey.  
			// when these items are clicked they become hidden.  
			$("#done-false.td").on({
			    mouseenter: function(){
			        $(this).css("background-color", "lightgray");
			    },
			    click: function(){
			        $(this).hide();  
			    }
			});

			function myFunction() {
			    /*var x = document.createElement("DL");
			    x.setAttribute("id", "myDL");
			    document.body.appendChild(x);*/

			    var y = document.createElement("DT");
			    var txt1 = document.createTextNode(inputtext);
			    y.appendChild(txt1);
			    y.setAttribute("id", "todo");
			    document.getElementById("done-false").appendChild(y);

			    /*var z = document.createElement("DD");
			    var txt2 = document.createTextNode("Black hot drink");
			    z.appendChild(txt2);
			    document.getElementById("myDL").appendChild(z);*/





			    DROPDOWN

			    <div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">Due
  	<span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Today</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">This Week</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">This Month</a></li>
  </ul>
</div>
			}