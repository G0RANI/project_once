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
		$('.paging').remove();
		$.getJSON(_+'/notice/'+x,d=>{
			 $.each(d.ls,(i,j)=>{
				 $('<tr><td class="lAlign">'+j.nseq+'</td>'
						 +'<td class="lAlign">'+j.title+'</td>'
						 +'<td class="lAlign">'+j.cdate+'</td>'
						 +'<td class="lAlign">'+j.views+'</td>'
						 +'</tr>').appendTo('#main_content');
			 });
			 $('<div style="height: 50px" id="content_1"></div>')
				.appendTo('#main_content');

				let html ='<div class="center"> <div class="pagination">';
				html +='</div></div>';
				$(html).appendTo('#main_content');
				if(d.pxy.existPrev){
					$('<a>&laquo;</a>').appendTo('.pagination')
					.click(function(){
						list(d.pxy.prevBlock);
					});
				}
				let i=0;
				for(i=d.pxy.startPage;i<=d.pxy.endPage;i++){
					if(d.pxy.pageNum ==i){
						$('<a class=page active>'+i+'</a>')
						.appendTo('.pagination')
						.click(function(){
							alert('클릭한 페이지: '+i);
							onCreate($(this).text());
						});
					}else{
						$('<a class=page>'+i+'</a>')
						.appendTo('.pagination')
						.click(function(){
							alert('클릭한 페이지: '+i);
							onCreate($(this).text());
						});
					}
				}
				if(d.pxy.existNext){
					$('<a>&raquo;</a>').appendTo('.pagination')
					.click(function(){
						onCreate(d.pxy.nextBlock);
					});
					
				};
		 });
		 
	};
	return{init:init};
})();
