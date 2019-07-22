
const searchUrl='https://jsonplaceholder.typicode.com/photos';
var current_page = 1;
var records_per_page = 10;

$(document).ready(function(){

      $("#searchButton").click(function(){

          $.get(searchUrl, function(data){
            
            changePage(1);

                 $("#button_prev").click(function(){
                
                    var cur_page = document.getElementById("page").innerText;
         
                    if (cur_page > 1) {
                        cur_page--;
                        changePage(cur_page);
                    }
                  
                });

               $("#button_next").click(function(){
                
                   var cur_page = document.getElementById("page").innerText;
  
                    if (cur_page < numPages()) {
                        cur_page++;
                        changePage(cur_page);
                    }
                });

                 function numPages()
                {
                    return Math.ceil(data.length / records_per_page);
                }


                function changePage(page)
                {
                    var button_next = document.getElementById("button_next");
                    var button_prev = document.getElementById("button_prev");
                    
                    var page_span = document.getElementById("page");
                 
                    // Validate page
                    if (page < 1) page = 1;
                    if (page > numPages()) page = numPages();

                    $("#displayBox").innerHTML = '';

                    for (var p = (page-1) * records_per_page; p < (page * records_per_page); p++) {
                         var item = data[p];

                      //Image number
                      for(key in item){
                        if(key == "id"){
                          resultNumber = item[key];
                        }
                      }

                      //Image url
                      for(key in item){
                          if(key == "url"){
                           resultImage = item[key];                                          
                          }
                      }                  
                 
                      $("#displayBox").append('<div class="row"><div class="col-md-2"></div><div class="col-md-2"></div><div class="col-md-2">Image No. : '+resultNumber+'</div><div class="col-md-2"><img src='+resultImage+'></div></div><br>');

                    }
                    page_span.innerHTML = page;

                    if (page == 1) {
                        button_prev.style.visibility = "hidden";
                    } else {
                        button_prev.style.visibility = "visible";
                    }

                    if (page == numPages()) {
                        button_next.style.visibility = "hidden";
                    } else {
                        button_next.style.visibility = "visible";
                    }
                }
                //end of main for loop   


                // for(var i=0; i<10; i++){
                //      var item = data[i];

                //     //Image number
                //     for(key in item){
                //       if(key == "id"){
                //         resultNumber = item[key];
                //       }
                //     }

                //     //Image url

                //     for(key in item){
                //         if(key == "url"){
                //          resultImage = item[key];                                          
                //         }
                //     }                  
               
                //     $("#displayBox").append('<div class="row"><div class="col-md-2"></div><div class="col-md-2"></div><div class="col-md-2">Image No. : '+resultNumber+'</div><div class="col-md-2"><img src='+resultImage+'></div></div><br>');

                  
                // }


          });
      });
  });
