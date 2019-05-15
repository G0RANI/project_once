"use strict";
var ngh=ngh || {};

ngh=(()=>{
	let id = sessionStorage.getItem('info');
	let init=(x)=>{
		ngh.$.init(x);
	};
	let onCreate=()=>{	
		setContentView();
	};
	let setContentView=()=>{
		once_chart();

        $.getScript($.js()+'/component/kth_compo.js',()=>{
            $.getScript($.js()+'/team/chat.js',()=>{
         	   $('#chat_coin').remove();
                $(kth_compo.coin_chat()).appendTo('.bgWhite');
                chat.init();
            });
        });
		$.getScript($.js()+'/component/ngh_compo.js',()=>{			  
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
		          		//	주문시간 trx	구분 trx	체결가격trx	체결수량 trx	체결금액trx
		          		 	$('#trx').empty();
		          		 	$.each(s.ls, (i,j)=>{
		          		 		switch(j.rw){
		          		 		case '매수':
		          		 			$('#trx').append('<tr class="up">'
											+'<td><p>'+j.date+'</p></td>'
											+'<td>'+j.rw+'</td>'
											+'<td class="rAlign"><p>'+j.nprice+'</p></td>'
											+'<td class="rAlign"><p>'+j.unit+'</p></td>'
											+'<td class="rAlign"><p>'+j.tprice+'</p></td>'
											+'</tr>');
		          		 			break;
		          		 		case '매도':
		          		 			$('#trx').append('<tr class="down">'
											+'<td><p>'+j.date+'</p></td>'
											+'<td>'+j.rw+'</td>'
											+'<td class="rAlign"><p>'+j.nprice+'</p></td>'
											+'<td class="rAlign"><p>'+j.unit+'</p></td>'
											+'<td class="rAlign"><p>'+j.tprice+'</p></td>'
											+'</tr>');
		          		 			break;
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
                  $('#bt_ty01').attr('class', '');
                  $(this).attr('class', 'on');
                  $('#bt_list').empty();
                  $.each(d.ls, (i,j)=>{
                		switch(j.rw){
          		 		case '매수':
          		 			$('#bt_list').append('<tr>'
                        			+'<td class="lAlign">'+j.date+'</td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.nprice+' <i>KRW </i></strong></center></td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.unit+' <i>ONCE </i></strong></center></td>'
                        			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                        			+'</tr>');
          		 			break;
          		 		case '매도':
          		 		  $('#bt_list').append('<tr>'
                        			+'<td class="lAlign">'+j.date+'</td>'
                        			+'<td class="up" style="text-align: center;"><strong>'+j.nprice+' <i>KRW </i></strong></center></td>'
                        			+'<td class="down" style="text-align: center;"><strong>'+j.unit+' <i>ONCE </i></strong></center></td>'
                        			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                        			+'</tr>');
          		 			break;
          		 		}
                  });
			  	});
			  	
             })
	};
	/*once 차트 */
	let once_chart=()=>{
		$.getJSON($.ctx()+'/ngh/once/price',d=>{
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
				let arr={txt : '원스코인', name : 'once'};	 
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
						 +'				 <strong>'+arr.txt+'</strong>'
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
					  .attr('name', arr.name)
		              .appendTo('.highlight')
		              .click(function(){
		                  let that = $(this).attr('name');
		                  alert('아직 준비중입니다');
		             });
					/*click*/
				/*each*/
				
			//매수 	

				 
				
				$.getScript($.js()+'/component/ngh_compo.js',()=>{
					  if(sessionStorage.getItem('session') === null){
						  $('.top a').eq(0).
						  attr('class', 'on');
						  $('.top li').attr('class', 't2');
						  $('#b').empty();
						  $(ngh_compo.l_buy()).appendTo('#b');
						  $('#priceall').remove();
						  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
						  .prependTo('.marginB101');
						  $(' <li class="ty04"><a title="매수">매수</a></li>')
						  	.appendTo('#btn_mesu');
						  $('#btn_mesu').empty();
						  $('<li class="ty02 login"><a title="로그인" id="login2">로그인</a>').appendTo('#btn_mesu');
						  $('#login2').click(e=>{
							  e.preventDefault();
					          location.assign($.ctx()+"/ksa");
						  });

					  }else{
						  $('.top a').eq(0).
						  attr('class', 'on');
						  $('.top li').attr('class', 't2');
						  $('#b').empty();
						  $(ngh_compo.l_buy()).appendTo('#b');
						  $('#priceall').remove();
						  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
						  .prependTo('.marginB101');
						  $('#count').change(function(){
				              $('#allpr').attr('value', tp[0]*$('#count').val());
				          });
						  $(' <li class="ty04"><a title="매수">매수</a></li>')
						  	.appendTo('#btn_mesu');
						  $('#btn_mesu').empty();
						  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{			  
							  $('#my_money').empty();
							  $('<strong>'+d.rs.money+'</strong> <i>KRW</i>').appendTo('#now_money');
							  $(' <li class="ty04"><a title="매수">매수</a></li>')
							  	.appendTo('#btn_mesu');
							  $('#btn_mesu').click(()=>{
								  let price = tp[0];
								  let unit = $('#count').val();	  		
							  		let tprice = price*unit;					  
							  		if(d.rs.money>=tprice){
									  $.getJSON($.ctx()+'/ngh/buy/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{				        	  
							        	  alert('성공');
							          });
								  }else{
									  alert('돈없다');
								  }
							  });
						  });
					  }
			//매수 
        
			 //top 매수 버튼 눌렀을때
					  
					  $('.top a').eq(0).click(function(){
						  if(sessionStorage.getItem('session') === null){
							  $('.top a').attr('class', '');
							  $('.top li').attr('class', 't2');
					          $(this).attr('class', 'on');
							  $('#b').empty();
							  $(ngh_compo.l_buy()).appendTo('#b');
							  $('#priceall').remove();
							  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
							  .prependTo('.marginB101');
							  $(' <li class="ty04"><a title="매수">매수</a></li>')
							  	.appendTo('#btn_mesu');
							  $('#btn_mesu').empty();
							  $('<li class="ty02 login"><a title="로그인" id="login2">로그인</a>').appendTo('#btn_mesu');
							  $('#login2').click(e=>{
								  e.preventDefault();
						          location.assign($.ctx()+"/ksa");
						  });
						  }else{
							  $('#my_money').empty();
							  $('.top a').attr('class', '');
							  $('.top li').attr('class', 't2');
					          $(this).attr('class', 'on');
							  $('#b').empty();
							  $(ngh_compo.l_buy()).appendTo('#b');
							  $('#priceall').remove();
							  $( '<input id="priceall" type="text" class="txt All" value="'+tp[0]+'">')
							  .prependTo('.marginB101');
							  $('#count').change(function(){
					              $('#allpr').attr('value', tp[0]*$('#count').val());
					          });
							  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{			  
								  $('#my_money').empty();
								  $('<strong>'+d.rs.money+'</strong> <i>KRW</i>').appendTo('#now_money');
								  $(' <li class="ty04"><a title="매수">매수</a></li>')
								  	.appendTo('#btn_mesu');
								  $('#btn_mesu').click(()=>{
									  let price = tp[0];
									  let unit = $('#count').val();	  		
								  		let tprice = price*unit;					  
								  		if(d.rs.money>=tprice){
										  $.getJSON($.ctx()+'/ngh/buy/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{				        	  
								        	  alert('매수!!!성공');
								          });
									  }else{
										  alert('돈없다');
									  }
								  });
							  	});
						  }
					 });
			  //매수 버튼 눌렀을때
			 
			  //매도
			$('.top a').eq(1).click(function(){ 
			  if(sessionStorage.getItem('session') === null){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't3');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_medo()).appendTo('#b');
				  $('#now_val').remove();
				  $( '<input id="now_val" type="text" class="txt All" value="'+tp[0]+'">')
			  		.prependTo('.marginB1010');	
				  $('#btn_medo').empty();
				  $('<a title="로그인" id="login2">로그인</a>').appendTo('#btn_medo');
				  $('#login2').click(e=>{
					  e.preventDefault();
			          location.assign($.ctx()+"/ksa");
				  });
				  
			  }else{
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't3');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_medo()).appendTo('#b');
				  
				  $('#docount').change(function(){
					  $('#allprme').attr('value', tp[0]*$('#docount').val());
				  });
				  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{	
					  $('#my_money').empty();
					  $('<strong>'+d.rs.money+'</strong> <i>KRW</i>').appendTo('#now_money');
					  $('#now_val').remove();
					  $( '<input id="now_val" type="text" class="txt All" value="'+tp[0]+'">')
				  		.prependTo('.marginB1010');	
					  $('#btn_medo').click(()=>{
						  //if(d.rs.money>=tprice){
							  alert('가격'+tp[0]);
							  alert('id : '+id);
						  		let price = tp[0];
						  		let unit = $('#docount').val();
						  		let tprice = price*unit;
						          $.getJSON($.ctx()+'/ngh/medo/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{
						        	  alert('매도성공이다');
						          });
						 // }else{
							//  alert('매도 실패다');
						  //};
				    	  });
			  		});

			  }
			 });
			  //매도

			  });
			  //매도;
			  let ar =[{va:'일시:',tx:d.date},{va:'가격:',tx: tp[0]}];
			  $('#sub_main').empty();
			  $.each(ar,(i,j)=>{
				  $('<stx-hu-tooltip-field auto=""> '
						  +'<stx-hu-tooltip-field-name>'+j.va+'</stx-hu-tooltip-field-name>'
						  +'<stx-hu-tooltip-field-value>'+j.tx+'</stx-hu-tooltip-field-value>'
						  +'</stx-hu-tooltip-field>').appendTo('#sub_main');
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