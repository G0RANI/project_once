"use strict";
var kth=kth || {};
kth=(()=>{
	let init=()=>{
		onCreate();
		alert("김태혁");
	};
	let onCreate=()=>{
		$('#once').empty();
		 $.getScript($.js()+'/component/kth_compo.js',()=>{
			 $(kth_compo.cs_form()).appendTo('#once');
			 $('#nav2 a').attr('class', '');
			 $('#kth2').attr('class', 'on');
			 });
		setContentView();
	};
	let setContentView=()=>{	
		
				
	};
	return{init:init};
})();
