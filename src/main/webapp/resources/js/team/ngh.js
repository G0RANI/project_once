"use strict";
var ngh=ngh || {};

ngh=(()=>{
	let init=()=>{
		onCreate();
	};
	let onCreate=()=>{	
		setContentView();
	};
	let setContentView=()=>{	
		alert('기호 js 들어왔다');
		once_chart();
	};
	
	let once_chart=()=>{
		$('.amcharts-left-div').html();
		$.ajax({
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
		})
	}
	return{init:init};
})();