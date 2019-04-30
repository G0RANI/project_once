var coinart = coinart||{}
coinart=(()=>{
	let _,js,compojs;
//	let path =()=>{
//		_= $.ctx();
//		js= $.js();
//		compojs =js + '/component/compo.js';
//	};
	let init =(x)=>{
		coinart.$.init(x);
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView =()=>{
		naver('1');
	};
	let naver=(x)=>{
		$('#index_list').empty();
		$('.btnViewA').remove();
		$('.pagination').empty();
		$.getJSON($.ctx()+'/crawler/naver/1',d=>{
			$.each(d.ls,(i,j)=>{
				$('<tr><th target="_blank" class="crawler_text">'+j.nseq+'</th>'
						+'<td><p class="txt"><a href="'+j.url+'" target="_blank">'+j.title+'</a></p></td>'
						+'<td class="crawler_text">'+j.adate+'</td>'
						+'</tr>').appendTo('#index_list');
				$('.crawler_text').css('text-align','center');
										
			});
		});
		page();
		$(this).click(function(){
			$('#index_list').empty();
			$('.pagination').empty();
			page();
		});
		
	};
	let page=()=>{
		let i;
		let j =1;
		for(i=1;i<=10;i++){
			$('<li class="page-item"><a class="page-link" id="page'+i+'"">'+i+'</a></li>')
							.appendTo('.pagination').click(function(){					
//								alert($(this).text());
								$.getJSON($.ctx()+'/crawler/naver/'+$(this).text(),d=>{
									$.each(d.ls,(i,j)=>{										
										$('<tr><th target="_blank" class="crawler_text">'+j.nseq+'</th>'
												+'<td><p class="txt"><a href="'+j.url+'" target="_blank">'+j.title+'</a></p></td>'
												+'<td class="crawler_text">'+j.adate+'</td>'
												+'</tr>').appendTo('#index_list');
										$('.crawler_text').css('text-align','center');
																
									});
								});
							});
			j+=10;
		};
	};
	return{init:init, naver:naver};
})();
coinart.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				coinart.naver();
				})
			}
		};