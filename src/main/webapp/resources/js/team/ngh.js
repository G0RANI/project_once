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
		let id = sessionStorage.getItem('info');
		once_chart();
		$.getScript($.js()+'/component/ngh_compo.js',()=>{
			
			  $('.top a').eq(1).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't3');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_medo()).appendTo('#b');
				  if(sessionStorage.getItem('session') === null){
					  $('.ty02').empty();
					  $('<a title="로그인" id="login2">로그인</a>').appendTo('.ty02');
					  $('#login2').click(e=>{
						  e.preventDefault();
				          location.assign($.ctx()+"/ksa");
					  });
				  }
			  	});
			  
			  $('.top a').eq(2).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't4');
		          $(this).attr('class', 'on');
		     	  $('#b').empty();
		     	  $(ngh_compo.trx()).appendTo('#b');
		     	  $.ajax({
		          	 url:$.ctx()+'/retrieve_trx/'+id,
		          	 data:id,
		          	 type:'GET',
		          	 dataType:'json',
		          	 contentType:'application/json',
		          	 success:s=>{
		          		 	alert('성공');
		          		//	주문시간 trx	구분 trx	체결가격trx	체결수량 trx	체결금액trx
		          		 	$('#trx').empty();
		          		 	$.each(s.ls, (i,j)=>{
		          		 		if(j.rw==='매수'){
				          		 	$('#trx').append('<tr class="up">'
												+'<td><p>'+j.date+'</p></td>'
												+'<td>'+j.rw+'</td>'
												+'<td class="rAlign"><p>'+j.nprice+'</p></td>'
												+'<td class="rAlign"><p>'+j.unit+'</p></td>'
												+'<td class="rAlign"><p>'+j.tprice+'</p></td>'
												+'</tr>');
		          		 		}else{
				          		 	$('#trx').append('<tr class="down">'
												+'<td><p>'+j.date+'</p></td>'
												+'<td>'+j.rw+'</td>'
												+'<td class="rAlign"><p>'+j.nprice+'</p></td>'
												+'<td class="rAlign"><p>'+j.unit+'</p></td>'
												+'<td class="rAlign"><p>'+j.tprice+'</p></td>'
												+'</tr>');
		          		 		}
				          	});
		          	 },
		          	 error:e=>{
		          		 alert('실패');
		          	 }
		           });
			  	});
			  
			  $('#chr_1').empty();
			  	$(ngh_compo.chr()).appendTo('#chr_1');
			  	$.getJSON($.ctx()+'/retrieve_all_trx',d=>{
			  	  alert('성공!');
                  $('#bt_ty01').attr('class', '');
                  $(this).attr('class', 'on');
                  $('#bt_list').empty();
                  $.each(d.ls, (i,j)=>{
                	  if(j.rw==='매수'){
                		  $('#bt_list').append('<tr>'
                        			+'<td class="lAlign">'+j.date+'</td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.nprice+' <i>KRW </i></strong></center></td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.unit+' <i>ONCE </i></strong></center></td>'
                        			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                        			+'</tr>');
                	  }else{
                		  $('#bt_list').append('<tr>'
                      			+'<td class="lAlign">'+j.date+'</td>'
                      			+'<td class="up" style="text-align: center;"><strong>'+j.nprice+' <i>KRW </i></strong></center></td>'
                      			+'<td class="down" style="text-align: center;"><strong>'+j.unit+' <i>ONCE </i></strong></center></td>'
                      			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                      			+'</tr>');
                	  }
                  });
			  	});
			  	/*$.ajax({
                    url:$.ctx()+'/retrieve_all_trx',
                    type:'GET',
                    contentType:'application/json',
                    success:s=>{
                        alert('성공!');
                         $('#bt_ty01').attr('class', '');
                         $(this).attr('class', 'on');
                         $('#bt_list').empty();
                         $.each(s.ls, (i,j)=>{
                         	$('#bt_list').append('<tr>'
                         			+'<td class="lAlign">'+j.date+'</td>'
                         			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                         			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                         			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                         			+'</tr>');
                         });
                    },
                    error:e=>{    
                        alert('실패!');
                    }
             });*/
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
				
		 	  $('.top a').eq(0).
			  attr('class', 'on');
			  $('.top li').attr('class', 't2');
			  $('#b').empty();
			  $(ngh_compo.l_buy()).appendTo('#b');
			  $('#priceall').remove();
			  $( '<input id="priceall" type="text" class="txt" value="'+tp[0]+'">')
			  	.prependTo('.marginB101');
			  $('#count').change(function(){
				  $('#allpr').attr('value', tp[0]*$('#count').val());
			  });
			/*  	$(function(){
				  $('.txt All').on('keyup',function(){
				            var cnt = $(".orderB").length;     
				            console.log(cnt);
				    for( var i=1; i< cnt; i++){
				       var sum = parseInt($(this).val()|| 0 );
				       sum++
				       console.log(sum);
				    }
				              var sum1 = parseInt($("#priceall").val() || 0 ); // input 값을 가져오며 계산하지만 값이 없을경우 0이 대입된다  뒷부분에 ( || 0 ) 없을경우 합계에 오류가 생겨 NaN 값이 떨어진다
				              var sum2 = parseInt($("#count").val() || 0);
				              var sum = sum1 * sum2 ;
				              console.log(sum);
				              $("#allpr").val(sum);
				          });
				  });*/

			  $(' <li class="ty04"><a title="매수">매수</a></li>')
			  	.appendTo('#btn_mesu')
			  	.click(()=>{
			  		alert('가격'+tp[0]);
			  		let price = tp[0];
			  		let unit = $('#count').val();
			  		let id = sessionStorage.getItem('info');
			  		let tprice = price*unit;
			          $.getJSON($.ctx()+'/ngh/buy/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{
			        	  
			        	  alert('성공');
			          })
		    	  });
			  if(sessionStorage.getItem('session') === null){
				  $('#btn_mesu').empty();
				  $('<li class="ty02 login"><a title="로그인" id="login2">로그인</a>').appendTo('#btn_mesu');
				  $('#login2').click(e=>{
					  e.preventDefault();
			          location.assign($.ctx()+"/ksa");
				  });
			  }
			 $('.top a').eq(0).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't2');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_buy()).appendTo('#b');
				  $('#priceall').remove();
				  $( '<input id="priceall" type="text" class="txt" value="'+tp[0]+'">')
				  	.prependTo('.marginB101');
				  
				  
				  
				  $(' <li class="ty04"><a title="매수">매수</a></li>')
				  	.appendTo('#btn_mesu')
				  	.click(()=>{
				  		alert('가격'+tp[0]);
				  		let price = tp[0];
				  		let unit = $('#count').val();
				  		let tprice = price*unit;
				  		let id = sessionStorage.getItem('info');
				          $.getJSON($.ctx()+'/ngh/buy/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{
				        	  alert('성공');
				          })
			    	  });
				  	});
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