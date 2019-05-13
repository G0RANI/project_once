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
		case 'login':
		/*	$('#once').empty();
			$.getScript($.js()+'/component/ksa_compo.js',()=>{
				 
				 $('#nav2 a').attr('class', '');
				 $('#ksa_d').attr('class', 'on');
			});*/
			break;
		case 'd':
            $('#once').empty();
            $.getScript($.js()+'/component/ksa_compo.js',()=>{
            if(sessionStorage.getItem('session') === null){
                location.assign($.ctx()+"/ksa");
            }else{
                 $(ksa_compo.d_w_charge()).appendTo('#once');
                 $('#nav2 a').attr('class', '');
                 $('#ksa_d').attr('class', 'on');
                 charge_btn(cust_id);
                 $('#off').click(e=>{logout()});
                 $('.tabB a').eq(0).click(function(){
                        alert('충전');                                                
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                     /*   $('.TabArea').empty();
                        $(ksa_compo.d_w_krw()).appendTo('.TabArea');
                        charge_btn(cust_id);*/
                    });
                 $('.tabB a').eq(1).click(function(){
                        alert('준비중입니다.');
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                     /*   $('.TabArea').empty();
                        $('.TabArea').html(ksa_compo.d_w_application());*/
                 });
                 $('.tabB a').eq(2).click(function(){
                        alert('준비중입니다.');
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                     /*   $('.TabArea').empty();
                        $('.TabArea').html(ksa_compo.d_w_trx());*/            
                 });
            }
            });
            break;
		case 'i':
			$('#once').empty();
            $.getScript($.js()+'/component/ksa_compo.js',()=>{
            if(sessionStorage.getItem('session') === null){
                location.assign($.ctx()+"/ksa");
            }else{
                $(ksa_compo.investment_coin()).appendTo('#once');
                $('#nav2 a').attr('class', '');
                $('#ksa_i').attr('class', 'on');   
                hcoin();
                $('#off').click(e=>{logout()});
                $('.ty04 a').eq(0).click(function(){
	                  alert('보유코인');
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
                      	 type:'POST',
                      	 dataType:'json',
                      	 contentType:'application/json',
                      	 success:s=>{
                            $('.ty04 a').attr('class', '');
                            $(this).attr('class', 'on');
                            $('.ownB').empty();
                            $('.ownB').html(ksa_compo.investment_trx());
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
                            $('#proSearch').change(function(){
                            	alert('값이 뭐냐?'+ $(this).val());
                            	 switch($(this).val()){
                                 case 'allType': 
                                	 alert('거래전체');
                                	 $.each(s.ls, (i,j)=>{
                                     $('.ty04 tbody').append('<tr>'
                                     		+'<td class="lAlign">'+j.date+'</td>'
                                     		+'<td class="cAlign up">'+j.rw+'</td>'
                                     		+'<td><strong><i>'+j.unit+'</i></strong></td>'
                                     		+'<td><strong><i>'+j.nprice+'</i></strong></td>'
                                     		+'<td><strong>'+j.unit*j.nprice+' <i>WON </i></strong></td>'
                                     		+'</tr>');
                                      });
                                	 break;
                                 case 'bid':  
                                	 alert('매수');
                                	 $('.ty04 tbody').empty();
                                	 $.each(s.ls, (i,j)=>{
                                		 if(j.rw==='매수'){
                                         $('.ty04 tbody').append('<tr>'
                                         		+'<td class="lAlign">'+j.date+'</td>'
                                         		+'<td class="cAlign up">'+j.rw+'</td>'
                                         		+'<td><strong><i>'+j.unit+'</i></strong></td>'
                                         		+'<td><strong><i>'+j.nprice+'</i></strong></td>'
                                         		+'<td><strong>0.00015797 <i>'+j.rwm+'</i></strong></td>'
                                         		+'</tr>');
                                		 }
                                          });
                                	 break;
                                 case 'ask':  
                                	 alert('매도');
                                	 $('.ty04 tbody').empty();
                                	 $.each(s.ls, (i,j)=>{
                                		 if(j.rw==='매도'){
                                         $('.ty04 tbody').append('<tr>'
                                         		+'<td class="lAlign">'+j.date+'</td>'
                                         		+'<td class="cAlign up">'+j.rw+'</td>'
                                         		+'<td><strong><i>'+j.unit+'</i></strong></td>'
                                         		+'<td><strong><i>'+j.nprice+'</i></strong></td>'
                                         		+'<td><strong>0.00015797 <i>'+j.rwm+'</i></strong></td>'
                                         		+'</tr>');
                                		 }
                                          });
                                	 break;
                                 case 'deposit':  
                                	 alert('입금');
                                	 $('.ty04 tbody').empty();
                                	 $.each(s.ls, (i,j)=>{
                                		 if(j.rw==='입금'){
                                         $('.ty04 tbody').append('<tr>'
                                         		+'<td class="lAlign">'+j.date+'</td>'
                                         		+'<td class="cAlign up">'+j.rw+'</td>'
                                         		+'<td><strong><i>'+j.unit+'</i></strong></td>'
                                         		+'<td><strong><i>'+j.nprice+'</i></strong></td>'
                                         		+'<td><strong>0.00015797 <i>'+j.rwm+'</i></strong></td>'
                                         		+'</tr>');
                                		 }
                                          });
                                	 break;
                                 }
                            	
                            });
                      	 },
                      	 error:e=>{	 
                      		 alert('실패!');
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
       		 	alert('성공'+s);
       		 	 $('#h_money').html('<p>'+s.money+' <i>KRW</i></p>');
       			 $('#won strong').eq(1).empty();
       			 $('#won strong').eq(1).html('<strong>'+s.money+' <i>KRW</i></strong>');
       			 $('#bitcoin strong').eq(1).empty();
       			 $('#bitcoin strong').eq(1).html('<strong>'+s.hqua+' <i>ONCE</i></strong>');
       			 $.getJSON($.ctx()+'/ngh/once',d=>{
       				let tp = new Array();
       				$.each(d.ls,(i,j)=>{
       					tp[i] = j.price;
       				});
       				let c_krw = tp[0] * s.hqua;
       				 $('.rAlign p').html('<p>'+c_krw+' <i>KRW</i></p>');
       				let total_p = c_krw+parseInt(s.money);
         			 $('.totalB p').empty();
         			 $('<p> '+total_p+' <i>KRW</i></p>').appendTo('.totalB');
         			 $('.rAlign p').html('<p>'+c_krw+' <i>KRW</i></p>');
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
           		 /*$('<a id="charge" class="btn" style="padding-top:1px;" title="충전하기">충전하기</a>').appendTo('.btnB');*/
           		 $('#charge').click(e=>{
   					 e.preventDefault();
   					 sessionStorage.setItem('cm', $('#money').val());
   					 window.open('payment', "a", "width=1000, height=800, left=100, top=50");
   				 });
           		/* $('.serchBt').click(e=>{
           			let search_word = $('.serchInput input').val();
               		$.ajax({
                      	 url:$.ctx()+'/search',
                      	 data:search_word,
                      	 type:'GET',
                      	 dataType:'json',
                      	 contentType:'application/json',
                      	 success:s=>{
                      		alert('성공!');
                      	 },
                      	 error:e=>{
                      		 alert('실패!');
                      	 }
                       });
           		 });*/
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
                   		 alert(account);
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
		      Kakao.Auth.login({
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
		        	         	 sessionStorage.setItem('pic', res.properties['profile_image']);
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
        sessionStorage.removeItem('session');
        Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');
        Kakao.Auth.logout(
        function(obj) {
        if(obj==true){}else{}
        location.assign($.ctx());
         }
        );
       /* Kakao.Auth.logout(function(){
        	alert("카카오로그아웃");
        });*/
        
    };
	let hcoin=()=>{
		 $.ajax({
          	 url:$.ctx()+'/retrieve_acc/'+cust_id,
          	 data:cust_id,
          	 type:'POST',
          	 dataType:'json',
          	 contentType:'application/json',
          	 success:s=>{
          		 	alert('성공');
          		  $.getJSON($.ctx()+'/ngh/once',d=>{
          			alert('성공2');                  			  
        				let tp = new Array();
        				$.each(d.ls,(i,j)=>{
        					tp[i] = j.price;
        				});
        				let c_krw = tp[0] * s.hqua;
        				let total_p = c_krw+parseInt(s.money); //총보유자산
        				
        				$('#total_price strong').eq(0).html(s.tbprice+' <i>KRW</i></strong>'); //총매수금액
              		  	$('#total_price strong').eq(1).html(total_p+' <i>KRW</i></strong>'); //총평가금액
              		  	//if문으로 class up, down 주기
              		  	if(0>(total_p-s.tbprice)){
                  		  	$('#evaluation strong')
                  		  	.eq(0)
                  		  	.attr('class', 'down')
                  		  	.html((total_p-s.tbprice)+' <i>KRW</i></strong>'); //총평가손익
                  		  	$('#evaluation strong')
                  		  	.eq(1)
                  		  	.attr('class', 'down')
                  		  	.html(parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2)+' <i>%</i></strong>'); //총평가수익률
              		  	}else{
              		  		$('#evaluation strong')
              		  		.eq(0)
              		  		.attr('class', 'up')
                  		  	.html((total_p-s.tbprice)+' <i>KRW</i></strong>'); //총평가손익
                  		  	$('#evaluation strong')
                  		  	.eq(1)
                  		  	.attr('class', 'up')
                  		  	.html(((total_p-s.tbprice)/s.tbprice*100).toFixed(2)+' <i>%</i></strong>'); //총평가수익률
              		  	}
              		  	$('#assets strong').eq(0).html(s.money+' <i>KRW</i>'); //보유 krw
              		 	$('#assets strong').eq(1).html(total_p+' <i>KRW</i></strong>'); //총보유자산
              		 	
              		 	$('#hcoin td').eq(0).html('<strong>'+s.hqua+' <i>BTC</i></strong>'); //보유수량
              		 	//$('#hcoin td').eq(1).html('<strong>'+s.qua+' <i>BTC</i></strong>'); 매수평균가
              		 	$('#hcoin td').eq(2).html('<em>'+s.tbprice+' <i>KRW</i></em>'); //매수금액
              		 	$('#hcoin td').eq(3).html('<em>'+total_p+' <i>KRW</i></em>'); //평가금액
              		 	$('#hcoin td').eq(4).html('<span><em class="down">'+((total_p-s.tbprice)/s.tbprice*100).toFixed(2)+' <i>%</i></em></span>'
              		 							 +'<span><em class="down">'+(total_p-s.tbprice)+' <i>KRW</i></em></span>'); //평가손익
          		  }); 
          	 },
          	 error:e=>{
          		 alert('실패');
          	 }
           });
    };
	
	return{init:init, kakao:kakao, logout:logout};
})();