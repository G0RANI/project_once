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
			  
			  $('.top a').eq(2).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't4');
		          $(this).attr('class', 'on');
		     	  $('#b').empty();
		     	  $(ngh_compo.trx()).appendTo('#b');
		     	 /*if(sessionStorage.getItem('session') === null){		             
	                 $('#off').click(e=>{
	                     alert('클릭 로그아웃!');
	                     logout();
	                 });
	                };*/
			  	});
			  
			  $('#chr_1').empty();
			  	$(ngh_compo.chr()).appendTo('#chr_1');
			  	$.ajax({
                    url:$.ctx()+'/retrieve_trx/'+id,
                    data:id,
                    type:'POST',
                    dataType:'json',
                    contentType:'application/json',
                    success:s=>{
                       let tx_date = new Date(s.date);
                      function convert(x) {
                           var date = new Date(x),
                               mnth = ("0" + (date.getMonth()+1)).slice(-2),
                               day  = ("0" + date.getDate()).slice(-2),
                               hours  = ("0" + date.getHours()).slice(-2),
                               minutes = ("0" + date.getMinutes()).slice(-2);
                           var date2 = [date.getFullYear(), mnth, day].join("-");
                           var date3 = [hours, minutes ].join(":");
                          return [ date2, date3 ].join(" ");
                       }
                         $('#bt_ty01').attr('class', '');
                         $(this).attr('class', 'on');
                         $('#bt_list').empty();
                         $('#bt_list').html(ngh_compo.chr());
                         $('#bt_list').empty();
                         $('#bt_list').html(+'<tr class="up">'
			                                     +'<td class="cAlign">'
			                                     +'<p>'
			                                     +''+convert(tx_date)+''
			                                     +'</p>'
			                                     +'</td>'
			                                     +'<td><strong class="down">'+s.nprice+'</strong></td>'
			                                     +'<td>'+s.unit+'</td>'
			                                     +'<td class="rAlign">12,244,000</td>'
			                                     +'</tr>');
                    },
                    error:e=>{    
                        alert('실패!');
                        $('.ty01 a').attr('class', '');
                      $(this).attr('class', 'on');
                      $('.scrollB').empty();
                      $('.scrollB').html(ksa_compo.investment_trx());
                      $('.ty01 tbody').empty();
                         $('.ty01 tbody').html('<td colspan="8" class="dataNone"><p>과거 거래내역이 없습니다.</p></td>');
                    }
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
				
			//매수 	
		 	  $('.top a').eq(0).
			  attr('class', 'on');
			  $('.top li').attr('class', 't2');
			  $('#b').empty();
			  $(ngh_compo.l_buy()).appendTo('#b');
			  $('#priceall').remove();
			  let id = sessionStorage.getItem('info');
			  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{			  
				  $('#my_money').empty();
				  $('<strong>'+d.rs.money+'</strong> <i>KRW</i>').appendTo('#now_money');
				  $(' <li class="ty04"><a title="매수">매수</a></li>')
				  	.appendTo('#btn_mesu');
				  $('#btn_mesu').click(()=>{
					  let price = tp[0];
					  let unit = $('#count').val();	  		
				  		let id = sessionStorage.getItem('info');
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
			//매수 
			  
			  $( '<input id="priceall" type="text" class="txt" value="'+tp[0]+'">')
			  	.prependTo('.marginB101');
			  $('#count').change(function(){
				  $('#allpr').attr('value', tp[0]*$('#count').val());
			  });
			  
			  if(sessionStorage.getItem('session') === null){
				  $('#btn_mesu').empty();
				  $('<li class="ty02 login"><a title="로그인" id="login2">로그인</a>').appendTo('#btn_mesu');
				  $('#login2').click(e=>{
					  e.preventDefault();
			          location.assign($.ctx()+"/ksa");
				  });
			  } 
			  
			 //top 매수 버튼 눌렀을때
			 $('.top a').eq(0).click(function(){
				 
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't2');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_buy()).appendTo('#b');
				  $('#priceall').remove();
				  $( '<input id="priceall" type="text" class="txt" value="'+tp[0]+'">')
				  	.prependTo('.marginB101');				  
				  $('<li class="ty04"><a title="매수">매수</a></li>')
				  	.appendTo('#btn_mesu');
				  $('#btn_mesu').click(()=>{
				  		let price = tp[0];
				  		let unit = $('#count').val();
				  		let tprice = price*unit;
				  		let id = sessionStorage.getItem('info');
				          $.getJSON($.ctx()+'/ngh/buy/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{
				        	  alert('매수 성공했다!!!!쏴리질러!!!');
				          })
			    	  });
				  	});
			  //매수 버튼 눌렀을때
			 
			  //매도
			  $('.top a').eq(1).click(function(){
				  $('.top a').attr('class', '');
				  $('.top li').attr('class', 't3');
		          $(this).attr('class', 'on');
				  $('#b').empty();
				  $(ngh_compo.l_medo()).appendTo('#b');
					let id = sessionStorage.getItem('info');
				  $('#docount').change(function(){
					  $('#allprme').attr('value', tp[0]*$('#docount').val());
				  });
				  
				  if(sessionStorage.getItem('session') === null){
					  $('.ty02').empty();
					  $('<a title="로그인" id="login2">로그인</a>').appendTo('.ty02');
					  $('#login2').click(e=>{
						  e.preventDefault();
				          location.assign($.ctx()+"/ksa");
					  });
				  }
				  $.getJSON($.ctx()+'/ngh/mycoin/'+id,d=>{	
					  $('#my_money').empty();
					  $('<strong>'+d.rs.money+'</strong> <i>KRW</i>').appendTo('#now_money');
					  $('#now_val').remove();
					  $( '<input id="now_val" type="text" class="txt" value="'+tp[0]+'">')
				  		.prependTo('.marginB1010');	
					  $('#btn_medo').click(()=>{
						  //if(d.rs.money>=tprice){
							  alert('가격'+tp[0]);
						  		let price = tp[0];
						  		let id = sessionStorage.getItem('info');
						  		let unit = $('#docount').val();
						  		let tprice = price*unit;
						          $.getJSON($.ctx()+'/ngh/medo/'+unit+'/'+price+'/'+id+'/'+tprice,d=>{
						        	  alert('매도성공이다');
						          })
						  //}else{
							  /*alert('매도 실패다');*/
						 // };
				    	  });
			  		});
			  });
			  //매도
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