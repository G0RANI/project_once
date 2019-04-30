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
		naver();
		youtube();
	};
	let naver=(x)=>{
		$('#index_list').empty();
		$('.btnViewA').remove();
		$('.pagination').empty();
		$.getJSON($.ctx()+'/crawler/naver/'+x,d=>{
			$.each(d.ls,(i,j)=>{
				$('<tr><th target="_blank" class="crawler_text">'+j.nseq+'</th>'
						+'<td><p class="txt"><a href="'+j.url+'" target="_blank">'+j.title+'</a></p></td>'
						+'<td class="crawler_text">'+j.adate+'</td>'
						+'</tr>').css('font-size','14px').appendTo('#index_list');
				$('.crawler_text').css('text-align','center');										
			});
		
		
		let i=0;
		for(i=1;i<=10;i++){
			if(x==i){
				$('<li class="page-item active" aria-current="page"><a class="page-link" id="page'+i+'"">'+i+'</a></li>').css('cursor','pointer')
				.appendTo('.pagination')
				.click(function(){
					naver($(this).text());
				});
			}else{
				$('<li class="page-item"><a class="page-link" id="page'+i+'"">'+i+'</a></li>').css('cursor','pointer')
				.appendTo('.pagination')
				.click(function(){
					naver($(this).text());
				});
			}
		}
		
		
		
		});

	};
//	youtube =()=>{
//		$('.clist').empty();
//		$.getJSON($.ctx()+'/crawler/youtube/',d=>{
//			$.each(d.yo,(i,j)=>{
//				$('<li><a href="" target="_blank" rel="noopener noreferrer">'
//						+'       <img src="" width="150" height="86" >'
//						+'       <strong>상승반전 시그널, 미래에 베팅?</strong>'
//						+'            <span>19.04.18 16:33</span></a></li>'
//						+'    <a href="" target="_blank" rel="noopener noreferrer">'
//						+'       <img src="" width="150" height="86">'
//						+'       <strong>이더리움 하드포크 연기, 이유는?</strong>'
//						+'            <span>19.01.24 16:00</span></a></li>').appendTo('#basic');
//			});
//			});
//	};
	return{init:init,
		naver:naver};
})();
coinart.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				coinart.naver(1);
				})
			}
		};