"use strict";
var kth=kth || {};
kth=(()=>{
	let init=()=>{
		onCreate();
	};
	let onCreate=()=>{	
		setContentView();
	};
	let setContentView=()=>{	
		$('#once').empty();
		 $.getScript($.js()+'/component/kth_compo.js',()=>{
			 $(kth_compo.cs_form()).appendTo('#once');
			 $('#nav2 a').attr('class', '');
			 $('#kth2').attr('class', 'on');
			 });	
	};
	return{init:init};
})();