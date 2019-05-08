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
		once_chart();
		$.getScript($.js()+'/component/ngh_compo.js',()=>{				  			  	
			  $('.top a').eq(0).click(function(){
					$('#b').empty();
				  $(ngh_compo.l_buy()).appendTo('#b');
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't2');
		          $(this).attr('class', 'on');			  
			  	});			  
			  $('.top a').eq(1).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't3');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_medo()).appendTo('#b');	
			  	});			  
			  $('.top a').eq(2).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't4');
		          $(this).attr('class', 'on');
		     	 $('#b').empty();
					$(ngh_compo.trx()).appendTo('#b');			
			  	});			  
			  $('#chr_1').empty();
			  	$(ngh_compo.chr()).appendTo('#chr_1');
             })
	};	
	/*once 차트 */
	let once_chart=()=>{
		$.getJSON($.ctx()+'/ngh/once',d=>{
			/*왼쪽 값*/			
			let tp = new Array();
			$.each(d.ls,(i,j)=>{
				tp[i] = j.price;
			});
			 $('#l_val').empty();
			 let prev1 = (tp[0] - tp[1]) / tp[1] *100;
			 let minue = tp[0] - tp[1]			 
			 let col = "";
			 let prev = "1147";
			 let giho = "";
			 if (tp[0] > tp[1]) {
				col = "up";
				giho = "+";
			}else{
				col = "down";
				/*giho = "-";*/
			};			
			 $('<div id="l_val">'
					 +'	<div class="'+col+' ty01">'
					 +'		<span class="first">'
					 +'		 <strong id="now_price">'+tp[0]+'</strong>'
					 +'		  <em>KRW</em>'
					 +'		  </span>'
					 +'		  <span>'
					 +'		  <p class="tit">전일대비</p> '
					 +'			<strong>'+giho+''+prev1.toFixed(2)+'%</strong>'
					 +'		<strong class="upDown">'+giho+''+minue+'</strong></span>'
					 +'	</div>'
					 +'	</div>').appendTo('.marketB');
			 /*오른쪽 네비*/
			 $('#r_root').empty();			 
				let arr=[{txt : '원스코인', name : 'once'},	  
		              {txt : '비트코인', name : 'bit'},
		              {txt : '비트코인캐시', name : 'cash'}, 
		              {txt : '리플', name : 'riple'}, 
		              {txt : '이더리움', name : 'ethd'},
		              {txt : '이오스',},
		              {txt : '에이다'},
		              {txt : '쿼크체인'},
		              {txt : '아이오타'},
		              {txt : '아르고'},
		              {txt : '트론'},
		              {txt : '앵커'},
		              {txt : '메디블록'},
		              {txt : '엔진코인'},
		              {txt : '코스모스인'},
		              {txt : '이오스'}
		              ];				
				$.each(arr,(i,j)=>{
					$('<tbody>'
						 +'	<tr class="'+col+' on">'
						 +'		<td>'
						 +'			<span class="bookmark">'
						 +'				<a href="#">즐겨찾기</a>'
						 +'			</span>'
						 +'		</td>'
						 +'		<td class="cAlign"><a href="#">'
						 +'				<div class="bar down">'
						 +'					<span class="line" style="top: 13.3682px; height: 0.519935px;">-</span>'
						 +'					<span class="box" style="top: 13.5px; height: 1px;">-</span>'
						 +'				</div>'
						 +'			</a>'
						 +'		</td>'
						 +'		<td class="tit">'
						 +'			<a href="#">'
						 +'				 <strong>'+j.txt+'</strong>'
						 +'			</a>'
						 +'		 	<em>BTC<span>/KRW</span></em>'
						 +'		</td>'
						 +'		<td class="price">'
						 +'			<strong>'+tp[0]+'</strong>'
						 +'			<span class=""> </span>'
						 +'		</td>'
						 +'		<td class="percent">'
						 +'			<p>'+giho+''+prev1.toFixed(2)+'%</p>'
						 +'			<em>'+giho+''+minue+'</em>'
						 +'		</td>'
						 +'		<td class="rAlign">'
						 +'			<p>40,636<i>백만</i></p>'
						 +'		</td>'
						 +'	</tr>	'
					 +'</tbody>')
					  .attr('name', j.name)
		              .appendTo('.highlight')
		              .click(function(){
		                  let that = $(this).attr('name');
		                  switch(that){
		                  case 'once':
		                		alert('once');		                		
		                      break;
		                  case 'bit':
		                		alert('bit');		                		
		                       break;
		                  case 'cash':
		                		alert('cash');		                		
		                       break;
		                  case 'riple':
		                		alert('riple');		                		
		                       break;
		                  }
		             });
					/*click*/
				});
				/*each*/
		});
	}	
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
