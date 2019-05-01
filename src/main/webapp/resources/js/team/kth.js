"use strict";
var kth=kth || {};
kth=(()=>{
     let _,js,compojs;
     let path =()=>{
         _= $.ctx();
         js= $.js();
     }
     let init=()=>{
         path();
         onCreate();
     };
     let onCreate=()=>{
         $('#once').empty();
           $.getScript($.js()+'/component/kth_compo.js',()=>{
                $(kth_compo.cs_form()).appendTo('#once');
               $('#nav2 a').attr('class', '');
               $('#kth2').attr('class', 'on');
               list(1);
               setContentView();
          });
     };
     let setContentView=()=>{    
     };
     let list =(x)=>{
         $('#main_content').empty();
         $('.pagination').empty();
         $.getJSON(_+'/notice/'+x,d=>{
               $.each(d.ls,(i,j)=>{
                   $('<tr><td  class="lAlign">'+j.csq+'</td>'
                             +'<td  class="lAlign">'+j.title+'</td>'
                             +'<td  class="lAlign">'+j.cdate+'</td>'
                             +'<td  class="lAlign">'+j.views+'</td>'
                              +'</tr>').appendTo('#main_content');
               });
                  if(d.pxy.existPrev){
                       $('      <a class="page-link" aria-label="Previous">'
                    			+'        <span aria-hidden="true">&laquo;</span>'
                    			+'        <span class="sr-only">Previous</span>'
                    			+'      </a>').appendTo('.pagination')
                       .click(function(){
                            list(d.pxy.prevBlock);
                       });
                  }
                  let i=0;
                   for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
                       if(d.pxy.pageNum ==i){
                            $('<li class="page-item active"><a class="page-link" href="#">'+i+'</a></li>')
                            .appendTo('.pagination')
                            .click(function(){
                                alert('클릭한 페이지:  '+i);
                                 onCreate($(this).text());
                            });
                       }else{
                            $('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
                            .appendTo('.pagination')
                            .click(function(){
                                alert('클릭한 페이지:  '+i);
                                 onCreate($(this).text());
                            });
                       }
                  }
                  if(d.pxy.existNext){
                       $('      <a class="page-link" aria-label="Next">'
                    			+'        <span aria-hidden="true">&raquo;</span>'
                    			+'        <span class="sr-only">Next</span>'
                    			+'      </a>').appendTo('.pagination')
                       .click(function(){
                            onCreate(d.pxy.nextBlock);
                       });
                       
                  };
          });
          
     };
     return{init:init};
})();