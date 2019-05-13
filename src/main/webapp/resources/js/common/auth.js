"use strict";
var auth = auth || {};
auth=(()=>{
     let init =()=>{
    	onCreate();
     };
     let onCreate =()=>{
        setContentView();
     };
     let setContentView =()=>{
    	$('#kth2').click(e=>{
    		e.preventDefault();
    		kth_();
    	 });
    	$('#ksa_d').click(e=>{
    		e.preventDefault();
    		ksa_('d');
    	});
    	$('#ksa_i').click(e=>{
    		e.preventDefault();
    		ksa_('i');
    	});
    	$('#ksa_m').click(e=>{
    		e.preventDefault();
    		ksa_('m');
    	});  
     };
     let ngh_=()=>{
    	 $.getScript($.js()+'/team/ngh.js',()=>{ngh.init();});
     };
     let kth_=()=>{
    	 $.getScript($.js()+'/team/kth.js',()=>{kth.init();});
     };
     let ksa_=(x)=>{
    	 $.getScript($.js()+'/team/ksa.js',()=>{ksa.init(x);});
     };
     return {init:init, ngh_:ngh_, kth_:kth_};
})();
