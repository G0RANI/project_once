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
           $.getScript($.js()+'/team/chat.js',()=>{
        	   $('#chat_coin').remove();
               $(kth_compo.coin_chat()).appendTo('.bgWhite');
               chat.init();
           });
                $(kth_compo.cs_form()).appendTo('#once').css('margin-left','-80px');
               $('#nav2 a').attr('class', '');
               $('#kth2').attr('class', 'on');
               list(1);
          });
     };
     let list =(x)=>{
         $('#main_content').empty();
         $('.pagination').empty();
         $.getJSON(_+'/notice/'+x,d=>{
               $.each(d.ls,(i,j)=>{
                   $('<tr><td  class="lAlign title">'+j.csq+'</td>'
                             +'<td  class="lAlign" id="'+j.csq+'"><a style="cursor: pointer;">'+j.title+'</a></td>'
                             +'<td  class="lAlign">'+j.cdate+'</td>'
                             +'<td  class="lAlign">'+j.views+'</td>'
                             +'</tr>').appendTo('#main_content');
                   $('#'+j.csq).click(function(e){
                  	 e.preventDefault();
                 	detail(j.csq,x);
                   });
               });
                  if(d.pxy.existPrev){
                       $('<li class="page-item">'
                    		   +'  <a class="page-link" href="#" aria-label="Previous">'
                    		   +'    <span aria-hidden="true">&laquo;</span>'
                    		   +'    <span class="sr-only">Previous</span>'
                    		   +'  </a>'
                    		   +'</li>').css('cursor','pointer').appendTo('.pagination')
                       .click(function(){
                            list(d.pxy.prevBlock);
                       });
                  }
                  let i=0;
                   for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
                       if(d.pxy.pageNum ==i){
                            $('<li class="page-item active"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
                            .appendTo('.pagination')
                            .click(function(){
                                 list($(this).text());
                            });
                       }else{
                            $('<li class="page-item"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
                            .appendTo('.pagination')
                            .click(function(){
                                list($(this).text());
                            });
                       }
                  }
                  if(d.pxy.existNext){
                       $('<li class="page-item">'
                    		   +'  <a class="page-link" aria-label="Next">'
                    		   +'    <span aria-hidden="true">&raquo;</span>'
                    		   +'    <span class="sr-only">Next</span>'
                    		   +'  </a>'
                    		   +'</li>').css('cursor','pointer').appendTo('.pagination')
                       .click(function(){
                            list(d.pxy.nextBlock);
                       });
                       
                  };
          });
         $('.serchBt').click(function(){
             let val =$('#search_form').val();
               if(val==''||val.length<2){
                   alert('잘못된 입력입니다');
               }else{
                   let arr = {srch:val,
                           page:1}
                   search(arr);
               }
           });
           $('#search_form').keypress(function(e){
             if (e.which == 13){
                 let val =$('#search_form').val();
                 if(val==''||val.length<2){
                      alert('잘못된 입력입니다');
                 }else{
                      let arr = {srch:val,
                                page:1}
                      search(arr);
                 }
             }
           });
          
     };
     let search=(x)=>{
         $('#main_content').empty();
         $('.pagination').empty();
    	 $.getJSON($.ctx()+'/search/'+x.srch+'/'+x.page,d=>{
    		 if(d.ls!=''){
    			 $.each(d.ls,(i,j)=>{
    				 $('<tr><td  class="lAlign">'+j.csq+'</td>'
    						 +'<td  class="lAlign" id="'+j.csq+'"><a style="cursor: pointer;">'+j.title+'</a></td>'
    						 +'<td  class="lAlign">'+j.cdate+'</td>'
    						 +'<td  class="lAlign">'+j.views+'</td>'
    						 +'</tr>').appendTo('#main_content');
    				 $('#'+j.csq).click(function(e){
    					 e.preventDefault();
    					 detail(j.csq,x);
    				 });
    			 });
    			 if(d.pxy.existPrev){
    				 $('<li class="page-item">'
    						 +'  <a class="page-link" href="#" aria-label="Previous">'
    						 +'    <span aria-hidden="true">&laquo;</span>'
    						 +'    <span class="sr-only">Previous</span>'
    						 +'  </a>'
    						 +'</li>').css('cursor','pointer').appendTo('.pagination')
    						 .click(function(e){
    							 e.preventDefault();
    							 let arrprev = {srch:x.srch,
    									 page:d.pxy.prevBlock}
    							 search(arrprev);
    						 });
    			 }
    			 let i=0;
    			 for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
    				 if(d.pxy.pageNum ==i){
    					 $('<li class="page-item active"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
    					 .appendTo('.pagination')
    					 .click(function(){
    						 let arrpage = {srch:x.srch,
    								 page:$(this).text()}
    						 search(arrpage);
    					 });
    				 }else{
    					 $('<li class="page-item"><a class="page-link">'+i+'</a></li>').css('cursor','pointer')
    					 .appendTo('.pagination')
    					 .click(function(){
    						 let arrelse = {srch:x.srch,
    								 page:$(this).text()}
    						 search(arrelse);
    					 });
    				 }
    			 }
    			 if(d.pxy.existNext){
    				 $('<li class="page-item">'
    						 +'  <a class="page-link" aria-label="Next">'
    						 +'    <span aria-hidden="true">&raquo;</span>'
    						 +'    <span class="sr-only">Next</span>'
    						 +'  </a>'
    						 +'</li>').css('cursor','pointer').appendTo('.pagination')
    						 .click(function(){
    							 let arrnext = {srch:x.srch,
    									 page:d.pxy.nextBlock}
    							 search(arrnext);
    						 });
    				 
    			 };
    		 }else{
    			 nosrch();
    		 }
    	 }); 
     }
     let nosrch =()=>{
         $('.tableB').empty();
         $('<span class="resultBody">검색결과가 없습니다.</span>').appendTo('.tableB');
         $('.serchBt').click(function(){
             let val =$('#search_form').val();
               if(val==''||val.length<2){
               }else{
            	   $('.tableB').empty();
                   $('<table class="ty01">'
                			+'							<colgroup>'
                			+'								<col width="40">'
                			+'								<col width="*">'
                			+'								<col width="155">'
                			+'								<col width="100">'
                			+'							</colgroup>'
                			+'							<thead>'
                			+'								<tr>'
                			+'									<th>번호</th>'
                			+'									<th>제목</th>'
                			+'									<th>등록일</th>'
                			+'									<th>조회수</th>'
                			+'								</tr>'
                			+'							</thead>'
                			+'							<tbody id="main_content"></tbody></table>').appendTo('.tableB');
               }
           });
           $('#search_form').keypress(function(e){
             if (e.which == 13){
                 let val =$('#search_form').val();
                 if(val==''||val.length<2){
                 }else{
              	   $('.tableB').empty();
                   $('<table class="ty01">'
                			+'							<colgroup>'
                			+'								<col width="40">'
                			+'								<col width="*">'
                			+'								<col width="155">'
                			+'								<col width="100">'
                			+'							</colgroup>'
                			+'							<thead>'
                			+'								<tr>'
                			+'									<th>번호</th>'
                			+'									<th>제목</th>'
                			+'									<th>등록일</th>'
                			+'									<th>조회수</th>'
                			+'								</tr>'
                			+'							</thead>'
                			+'							<tbody id="main_content"></tbody></table>').appendTo('.tableB');
                 }
             }
           });
     };
     let detail =(x,y)=>{
    	 $('#once').empty();
    	 $.getJSON($.ctx()+'/detail/'+x,d=>{
    	   $.getScript($.js()+'/component/kth_compo.js',()=>{
    		   $(kth_compo.cs_detail()).appendTo('#once');
    		   $('#nav2 a').attr('class', '');
    		   $('#kth2').attr('class', 'on');
    		   $('.titB').empty();
    		   $('        <strong class="tit">'+d.cuse.title+'</strong><span><em>등록일'
    					+'            '+d.cuse.cdate+'<i>|</i><em>조회수 '+d.cuse.views+'</em>'
    					+'        	</em></span>').appendTo('.titB');
    		   $('#content').empty();
    		   $('<li>'+d.cuse.content+'</li>').appendTo('#content');
    		   $('.btnTy01').css('cursor','pointer').click(function(){
    		         $('#once').empty();
    		           $.getScript($.js()+'/component/kth_compo.js',()=>{
    		                $(kth_compo.cs_form()).appendTo('#once');
    		               $('#nav2 a').attr('class', '');
    		               $('#kth2').attr('class', 'on');
    		               if(y.srch==null){
    		            	   list(y);
    		               }else{
    		            	   search(y);	
    		            	   
    		               }
    		           });
    		   });
    	   })
    	 });
     };
     return{init:init};
})();

