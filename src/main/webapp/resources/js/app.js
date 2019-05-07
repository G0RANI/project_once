"use strict";
var app=app || {};
app=(()=>{
	let init=x=>{
		app.$.init(x);
	};
	let onCreate=()=>{	
		setContentView();
		$('#home').click(function(e){
			e.preventDefault();
            location.assign($.ctx());
        });
        $('#ngh').click(function(e){
        	e.preventDefault();
            location.assign($.ctx()+"/ngh");
        });
        $('#kth').click(function(e){
        	e.preventDefault();
            location.assign($.ctx()+"/kth");
        });
        $('#ksa').click(function(e){    
        	e.preventDefault();
            location.assign($.ctx()+"/ksa");
        });
	};
	let setContentView=()=>{	
		$.when(
			$.getScript($.js()+'/component/component.js')		
		).done(()=>{
			auth.init();
		});
	};
	return{
		init:init,
		onCreate:onCreate
	};
})();

app.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				app.onCreate();
				})
			}
		};