"use strict";
var ngh=ngh || {};

ngh=(()=>{
	let init=(x)=>{
		ngh.$.init(x);
	};
	let onCreate=()=>{	
		setContentView();
	};
	let setContentView=()=>{	
		alert('기호 js 들어왔다');
		once_chart();
		right_con();
	};
	let once_chart=()=>{
		alert('ONCE 들어왔다');
	/*	$.ajax({
			 url : $.ctx()+'/ngh/once',
	   		 type : 'get',
	   		 dataType : 'json',
	   		 contentType : 'application/json',
	   		 success : d =>{
	   			 alert('성공');
	            },
	            error : e=>{
	             alert('실패');
	            }
		});*/
	}
/*	let right_con=()=>{
		$.getScript($.js()+'/component/ngh_compo.js',()=>{
			$('#right_con').empty();
			$(ngh_compo.r_con()).appendTo('#right_con');
			
			let arr=[{
	               txt : '비트', name : 'mypage'},	  
	              {txt : '비트', name : 'del'}, 
	              {txt : '비트', name : 'update'}, 
	              {txt : '비트', name : 'shop'}, 
	              {txt : '비트', name : 'history'},
	              {txt : '비트', name : 'basket'
	         }];
			$.each(arr,(i,j)=>{
				 $('<td><a href="#">'+j.txt+'</a></td>')
				  .attr('strong', j.name)
				  .appendTo('#right_con');
				  
				
			});
		});
	};*/
	return{init:init,
		onCreate:onCreate};
})();

ngh.$ = {
        init : (x)=>{
            $.getScript(x+'/resources/js/router.js',()=>{
                $.extend(new Session(x));
                ngh.onCreate();
                })
            }
        };
