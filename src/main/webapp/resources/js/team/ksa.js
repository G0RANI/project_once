"use strict";
var ksa=ksa || {};
ksa=(()=>{
	let init=(x)=>{
		onCreate(x);
	};
	let onCreate=(x)=>{	
		setContentView(x);
	};
	let setContentView=(x)=>{
		switch (x) {
		case 'd':
            $('#once').empty();
            $.getScript($.js()+'/component/ksa_compo.js',()=>{
                $.getScript($.js()+'/team/chat.js',()=>{
                	$('#chat_coin').remove();
                    $(kth_compo.coin_chat()).appendTo('.bgWhite');
                    chat.init();
                });
            if(sessionStorage.getItem('session') === null){
                location.assign($.ctx()+"/ksa");
            }else{
                 $(ksa_compo.d_w_charge()).appendTo('#once');
                 $('#nav2 a').attr('class', '');
                 $('#ksa_d').attr('class', 'on');
                 charge_btn(cust_id);
                 $('#off').click(e=>{logout()});
                 $('.tabB a').eq(0).click(function(){
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                     /*   $('.TabArea').empty();
                        $(ksa_compo.d_w_krw()).appendTo('.TabArea');
                        charge_btn(cust_id);*/
                    });
                 $('.tabB a').eq(1).click(function(){
                        alert('준비중입니다.');
                 });
                 $('.tabB a').eq(2).click(function(){
                        alert('준비중입니다.');
                 });
            }
            });
            break;
		case 'i':
			$('#once').empty();
            $.getScript($.js()+'/component/ksa_compo.js',()=>{
                $.getScript($.js()+'/team/chat.js',()=>{
                	$('#chat_coin').remove();
                    $(kth_compo.coin_chat()).appendTo('.bgWhite');
                    chat.init();
                });
            if(sessionStorage.getItem('session') === null){
                location.assign($.ctx()+"/ksa");
            }else{
                $(ksa_compo.investment_coin()).appendTo('#once');
                $('#nav2 a').attr('class', '');
                $('#ksa_i').attr('class', 'on');   
                hcoin();
                $('#off').click(e=>{logout()});
                $('.ty04 a').eq(0).click(function(){
	                  $('.ty04 a').attr('class', '');
	                  $(this).attr('class', 'on');
	                  $('.ownB').empty();
	                  $('.ownB').html(ksa_compo.investment_hcoin());
	                  hcoin();
	            });
             };
                $('.ty04 a').eq(1).click(function(){
                	 $.ajax({
                      	 url:$.ctx()+'/retrieve_trx/'+cust_id,
                      	 data:cust_id,
                      	 type:'GET',
                      	 dataType:'json',
                      	 contentType:'application/json',
                      	 success:s=>{
                            $('.ty04 a').attr('class', '');
                            $(this).attr('class', 'on');
                            $('.ownB').empty();
                            $('.ownB').html(ksa_compo.investment_trx());
                            $('.ty04 tbody').empty();     
                            $.each(s.ls, (i,j)=>{
                            	switch(j.rw){
                            	case '매수':
                            		$('.ty04 tbody').append('<tr>'
                                			+'<td class="lAlign">'+j.date+'</td>'
                                			+'<td class="cAlign up">'+j.rw+'</td>'
                                			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                			+'</tr>');
                            		break;
                            	case '매도':
                            		$('.ty04 tbody').append('<tr>'
                                			+'<td class="lAlign">'+j.date+'</td>'
                                			+'<td class="cAlign down">'+j.rw+'</td>'
                                			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                			+'</tr>');
                            		break;
                            	case '입금':
                            		$('.ty04 tbody').append('<tr>'
                                			+'<td class="lAlign">'+j.date+'</td>'
                                			+'<td class="cAlign up">'+j.rw+'</td>'
                                			+'<td><strong>0 <i>ONCE </i></strong></td>'
                                			+'<td><strong>0 <i>KRW </i></strong></td>'
                                			+'<td><strong>'+j.dmoney+' <i>KRW </i></strong></td>'
                                			+'</tr>');
                            		break;
                            	}
                            });
                            $('#proSearch').change(function(){
                            	 switch($(this).val()){
                                 case 'allType': 
                                	 $.each(s.ls, (i,j)=>{
                                		 if(j.rw==='매수'){
                                     		$('.ty04 tbody').append('<tr>'
                                         			+'<td class="lAlign">'+j.date+'</td>'
                                         			+'<td class="cAlign up">'+j.rw+'</td>'
                                         			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                         			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                         			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                         			+'</tr>');
                                     	}else if(j.rw==='매도'){
                                     		$('.ty04 tbody').append('<tr>'
                                         			+'<td class="lAlign">'+j.date+'</td>'
                                         			+'<td class="cAlign down">'+j.rw+'</td>'
                                         			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                         			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                         			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                         			+'</tr>');
                                     	}else{
                                     		$('.ty04 tbody').append('<tr>'
                                        			+'<td class="lAlign">'+j.date+'</td>'
                                        			+'<td class="cAlign up">'+j.rw+'</td>'
                                        			+'<td><strong>0 <i>ONCE </i></strong></td>'
                                        			+'<td><strong>0 <i>KRW </i></strong></td>'
                                        			+'<td><strong>'+j.dmoney+' <i>KRW </i></strong></td>'
                                        			+'</tr>');
                                     	}
                                      });
                                	 break;
                                 case 'bid':
                                	 $('.ty04 tbody').empty();
                                	 $.each(s.ls, (i,j)=>{
                                         $('.ty04 tbody').append('<tr>'
                                        		+'<td class="lAlign">'+j.date+'</td>'
                                     			+'<td class="cAlign up">'+j.rw+'</td>'
                                     			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                     			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                     			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                     			+'</tr>');
                                          });
                                	 break;
                                 case 'ask':  
                                	 $('.ty04 tbody').empty();
                                	 $.each(s.ls, (i,j)=>{
                                         $('.ty04 tbody').append('<tr>'
                                        		+'<td class="lAlign">'+j.date+'</td>'
                                     			+'<td class="cAlign down">'+j.rw+'</td>'
                                     			+'<td><strong>'+j.unit+' <i>ONCE </i></strong></td>'
                                     			+'<td><strong>'+j.nprice+' <i>KRW </i></strong></td>'
                                     			+'<td><strong>'+j.unit*j.nprice+' <i>KRW </i></strong></td>'
                                     			+'</tr>');
                                          });
                                	 break;
                                  case 'deposit':  
                                 	 $('.ty04 tbody').empty();
                                 	 $.each(s.ls, (i,j)=>{
                                 		$('.ty04 tbody').append('<tr>'
                                    			+'<td class="lAlign">'+j.date+'</td>'
                                    			+'<td class="cAlign up">'+j.rw+'</td>'
                                    			+'<td><strong>0 <i>ONCE </i></strong></td>'
                                    			+'<td><strong>0 <i>KRW </i></strong></td>'
                                    			+'<td><strong>'+j.dmoney+' <i>KRW </i></strong></td>'
                                    			+'</tr>');
                                           });
                                 	 break;
                                 }
                            });
                      	 },
                      	 error:e=>{	 
                      		 $('.ty04 a').attr('class', '');
                             $(this).attr('class', 'on');
                             $('.ownB').empty();
                             $('.ownB').html(ksa_compo.investment_trx());
                             $('.ty04 tbody').empty();
                           	 $('.ty04 tbody').html('<td colspan="8" class="dataNone"><p>과거 거래내역이 없습니다.</p></td>');
                      	 }
                    });
                });
           });
           break;
		}
	};
	
	
	
	
	let cust_id = sessionStorage.getItem('info');
	let charge_btn=(x)=>{
		$.ajax({
       	 url:$.ctx()+'/retrieve_acc/'+x,
       	 data:x,
       	 type:'POST',
       	 dataType:'json',
       	 contentType:'application/json',
       	 success:s=>{
       		 	 $('#h_money').html('<p>'+s.money+' <i>KRW</i></p>'); //KRW입출금의 보유금액
       			 $('#won strong').eq(1).html('<strong>'+s.money+' <i>KRW</i></strong>'); //원화 보유수량(평가금액)
       			 $('#oncecoin strong').eq(1).html('<strong>'+s.hqua+' <i>ONCE</i></strong>'); //원스 보유수량(평가금액)
       			 $.getJSON($.ctx()+'/ngh/once',d=>{
       				let tp = new Array();
       				$.each(d.ls,(i,j)=>{
       					tp[i] = j.price;
       				});
       				let c_krw = tp[0] * s.hqua; //원스코인->KRW로 변환한 값
       				 $('#oncecoin p').eq(1).html('<p>'+c_krw+' <i>KRW</i></p>'); //원스코인 평가금액
       				let total_p = c_krw+parseInt(s.money); //총 보유자산 값
         			 $('.totalB p').empty();
         			 $('<p> '+total_p+' <i>KRW</i></p>').appendTo('.totalB'); //총보유자산
     				if(s.money!='0' || s.hqua!='0'){
     					 $('#won p').html('<p align = "right">'+parseFloat((s.money/total_p)*100).toFixed(2)+'%</p>');// 원화 보유비중
               		 	 $('#oncecoin p').eq(0).html('<p align = "right">'+parseFloat((c_krw/total_p)*100).toFixed(2)+'%</p>');// 원스코인 보유비중
     				}else{
     					 $('#won p').html('<p align = "right">0%</p>');// 원화 보유비중
               		 	 $('#oncecoin p').eq(0).html('<p align = "right">0%</p>');// 원스코인 보유비중
     				}
       			 });
       			 $('.btnB em').empty();
           		 $('.btnB em').html('계좌번호  :  '+s.acnum);
           		 $('<dl class="inputB">'
           				+'<dd class="addr">'
           					+'<input id="money" type="text" placeholder="KRW" value="" style="color: rgb(153, 153, 153);">'
           					+'<a style="cursor:pointer" id="charge" title="충전">충전하기</a>'
           				+'</dd>'
           			+'</dl>').appendTo('.btnB');
           		 $('#h_money strmong').html('<strong>'+s.money+' <i>KRW</i></strong>');
           		 $('#acc').remove();
           		 $('#charge').click(e=>{
   					 e.preventDefault();
   					 sessionStorage.setItem('cm', $('#money').val());
   					 window.open('payment', "a", "width=1000, height=800, left=100, top=50");
   				 });
       	 },
       	 error:e=>{
                $('#acc').click(e=>{
               	 $.ajax({
                   	 url:$.ctx()+'/open_acc/'+x,
                   	 data:x,
                   	 type:'POST',
                   	 dataType:'json',
                   	 contentType:'application/json',
                   	 success:s=>{
                   		 let account= s.acnum;
                   		 $('.btnB em').empty();
                   		 $('.btnB em').html('계좌번호  :  '+s.acnum);
                   		 $('#acc').remove();
                   		 $('<a id="charge" class="btn" style="padding-top:1px;" title="충전하기">충전하기</a>').appendTo('.btnB');
                   		 $('#charge').click(e=>{
           					 e.preventDefault();
           					 window.open('payment', "a", "width=1000, height=800, left=100, top=50");		 
           				 });
                   	 },
                   	 error:e=>{
                   		 alert('실패!');
                   	 }
                    });
                });
       	 }
        });
	};
	let kakao=(x)=>{
		Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');
		$('#custom-login-btn').click(function loginWithKakao() {
		      Kakao.Auth.loginForm({
		        success: (authObj)=> {
		        	 Kakao.API.request({
		        	       url: '/v1/user/me',
		        	       success: (res)=>{
		        	             console.log(res.id);
		        	             console.log(res.kaccount_email);
		        	             console.log(res.properties['nickname']);
		        	             console.log(authObj.access_token);
		        	             Kakao.Auth.setAccessToken(authObj.access_token, true);
		        	         	 sessionStorage.setItem('session', Kakao.Auth.getAccessToken());
		        	         	 sessionStorage.setItem('info', res.id);
		        	         	 sessionStorage.setItem('nickname', res.properties['nickname']);
		        	         	 sessionStorage.setItem('pic', res.properties['thumbnail_image']);
		        	         	$.ajax({
		    	             		url:x+'/login',
		    	             		type: 'POST',
		    	             		data: JSON.stringify(res, authObj),
		    	             		dataType:'json',
		    	             		contentType : "application/json; charset=UTF-8",
		    	             		success:(res)=>{
		    	             			location.assign(x);
		    	             		},
		    	             		error:(err)=>{
		    	             			kakao(x);
		    	             		}
		    	             	});
		        	           }
		        	         })
		        },
		        fail: (err)=> {
		          alert(JSON.stringify(err));
		        }
		      });
		    });
	};	
	let logout=()=>{
		Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');
		Kakao.Auth.logout(function () {
				sessionStorage.removeItem('session');
		        sessionStorage.removeItem('info');
		    	sessionStorage.removeItem('nickname');
		    	sessionStorage.removeItem('pic');
		    	location.assign($.ctx());
			});
    };
	let hcoin=()=>{
		 $.ajax({
          	 url:$.ctx()+'/retrieve_acc/'+cust_id,
          	 data:cust_id,
          	 type:'POST',
          	 dataType:'json',
          	 contentType:'application/json',
          	 success:s=>{
          		  $.getJSON($.ctx()+'/ngh/once',d=>{
        				let tp = new Array();
        				$.each(d.ls,(i,j)=>{
        					tp[i] = j.price;
        				});
        				let c_krw = tp[0] * s.hqua;
        				let total_p = c_krw+parseInt(s.money); //총보유자산
        				if(s.tbprice!='0'){
        					$('#total_price strong').eq(0).html(s.tbprice+' <i>KRW</i></strong>'); //총매수금액
                  		  	$('#total_price strong').eq(1).html(total_p+' <i>KRW</i></strong>'); //총평가금액
                  		  	if(0>(total_p-s.tbprice)){
                      		  	$('#evaluation strong')
                      		  	.eq(0)
                      		  	.attr('class', 'down')
                      		  	.html((total_p-s.tbprice)+' <i>KRW</i></strong>'); //총평가손익
                      		  	$('#evaluation strong')
                      		  	.eq(1)
                      		  	.attr('class', 'down')
                      		  	.html(Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></strong>'); //총평가수익률
                      		  $('#hcoin td').eq(3).html('<span><em class="down">'+Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></em></span>'
   		 							 +'<span><em class="down">'+(total_p-s.tbprice)+' <i>KRW</i></em></span>'); //평가손익
                  		  	}else{
                  		  		$('#evaluation strong')
                  		  		.eq(0)
                  		  		.attr('class', 'up')
                      		  	.html((total_p-s.tbprice)+' <i>KRW</i></strong>'); //총평가손익
                      		  	$('#evaluation strong')
                      		  	.eq(1)
                      		  	.attr('class', 'up')
                      		  	.html(Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></strong>'); //총평가수익률
                      		  $('#hcoin td').eq(3).html('<span><em class="up">'+Math.abs(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2))+' <i>%</i></em></span>'
   		 							 +'<span><em class="up">'+(total_p-s.tbprice)+' <i>KRW</i></em></span>'); //평가손익
                  		  	}
                  		  	$('#assets strong').eq(0).html(s.money+' <i>KRW</i>'); //보유 krw
                  		 	$('#assets strong').eq(1).html(total_p+' <i>KRW</i></strong>'); //총보유자산
                  		 	$('#hcoin td').eq(0).html('<strong>'+s.hqua+' <i>BTC</i></strong>'); //보유수량
                  		 	$('#hcoin td').eq(1).html('<em>'+s.tbprice+' <i>KRW</i></em>'); //매수금액
                  		 	$('#hcoin td').eq(2).html('<em>'+total_p+' <i>KRW</i></em>'); //평가금액
                  		 	
        				}else{
        					$('#hcoin td').eq(3).html('<em>'+total_p+' <i>KRW</i></em>'); //평가금액
        					$('#assets strong').eq(0).html(s.money+' <i>KRW</i>'); //보유 krw
        					$('#assets strong').eq(1).html(s.money+' <i>KRW</i></strong>'); //총보유자산
        				}
          		  }); 
          	 },
          	 error:e=>{
          		 alert('실패');
          		 
          	 }
           });
    };
	
	return{init:init, kakao:kakao, logout:logout};
})();