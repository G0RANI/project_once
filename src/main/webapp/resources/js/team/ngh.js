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
		right_con();
		once_val();
	};
	
	/*once 차트 */
	let once_chart=()=>{
		alert('ONCE 들어왔다');
		
		$.getJSON($.ctx()+'/ngh/once',d=>{
			 $('#l_val').empty();
			 $('<div id="l_val">'
					 +'	<div class="down ty01">'
					 +'		<span class="first">'
					 +'		 <strong>'+d.ls+'</strong>'
					 +'		  <em>KRW</em>'
					 +'		  </span>'
					 +'		  <span>'
					 +'		  <p class="tit">전일대비</p> '
					 +'			<strong>-0.37%</strong>'
					 +'		<strong class="upDown">-23,000</strong></span>'
					 +'	</div>'
					 +'</div>').appendTo('.marketB');
			 
		/*	playAlert = setInterval(()=>{
				alert(d.ls);
			},3000);*/
		});
	}
	
	/*오른쪽 네비*/
	let right_con=()=>{
		
		alert('오른쪽  네비  들어왔다');
		$.getScript($.js()+'/component/ngh_compo.js',()=>{
			$('#r_root').empty();
			let arr=[{
	               txt : '원쓰코인', name : 'once'},	  
	              {txt : '비트코인', name : 'bit'},
	              {txt : '비트코인캐시', name : 'cash'}, 
	              {txt : '리플', name : 'riple'}, 
	              {txt : '이더리움', name : 'ethd'},
	              {txt : '이오스'},
	              {txt : '에이다'},
	              {txt : '쿼크체인'},
	              {txt : '아이오타'},
	              {txt : '아르고'},
	              {txt : '트론'},
	              {txt : '앵커'},
	              {txt : '메디블록'},
	              {txt : '엔진코인'},
	              {txt : '코스모스인'},
	              {txt : '이오스'},
	              ];
			$.each(arr,(i,j)=>{
				$('<tbody>'
					 +'	<tr id="" class="down on">'
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
					 +'			<strong>6,122,000</strong>'
					 +'			<span class=""> </span>'
					 +'		</td>'
					 +'		<td class="percent">'
					 +'			<p>-0.37%</p><em>-23,000</em>'
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
	                  $(this).addClass('active');
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
		/*getscript*/
	};
	/*right_nav*/
	/*SDSD*/
	
	
	/*let once_coin=()=>{
		$('#once').click(function(){
		
		})
	}
	
	let bit_coin=()=>{
		$('#bit').click(function(){
			alert('bit');
		})
	}
	
	let cash_coin=()=>{
		$('#cash').click(function(){
			alert('cash');
		})
	}
	
	let riple_coin=()=>{
		$('#riple').click(function(){
			alert('riple');
		})
	}*/
	 let once_val=()=>{
		 
		 
		
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
