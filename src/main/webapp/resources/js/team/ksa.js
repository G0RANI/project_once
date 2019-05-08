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
                 $('.tabB a').eq(0).click(function(){
                        alert('충전');                                                
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                        $('.TabArea').empty();
                        $(ksa_compo.d_w_krw()).appendTo('.TabArea');
                        charge_btn(cust_id);
                    });
                 $('.tabB a').eq(1).click(function(){
                        alert('출금');
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                        $('.TabArea').empty();
                        $('.TabArea').html(ksa_compo.d_w_application());
                 });
                 $('.tabB a').eq(2).click(function(){
                        alert('입출금');
                        $('.tabB a').attr('class', '');
                        $(this).attr('class', 'on');
                        $('.TabArea').empty();
                        $('.TabArea').html(ksa_compo.d_w_trx());            
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
                $.ajax({
                  	 url:$.ctx()+'/retrieve_cust/'+cust_id,
                  	 data:cust_id,
                  	 type:'POST',
                  	 dataType:'json',
                  	 contentType:'application/json',
                  	 success:s=>{
                  		 alert('성공!'+s.hcoin);
                  			 $('#total_price strong').eq(1).empty();			/*총평가금액*/
                    		 $('#total_price strong').eq(1).html(s.hcoin+' <i>KRW</i>');
                    		 
                    		 $('#assets strong').eq(1).empty();			/*총보유자산*/
                    		 $('#assets strong').eq(1).html(s.hcoin+' <i>KRW</i>');
                  	      $('.ty04 a').eq(0).click(function(){
                              alert('보유코인');
                              $('.ty04 a').attr('class', '');
                              $(this).attr('class', 'on');
                              $('.ownB').empty();
                              $('.ownB').html(ksa_compo.investment_hcoin());
                              $('#total_price strong').eq(1).empty();			/*총평가금액*/
                     		 $('#total_price strong').eq(1).html(s.hcoin+' <i>KRW</i>');
                     		 
                     		 $('#assets strong').eq(1).empty();			/*총보유자산*/
                     		 $('#assets strong').eq(1).html(s.hcoin+' <i>KRW</i>');
                          });
                  	 },
                  	 error:e=>{	 
                  		 alert('실패!');
                  	 }
                });
                $('.ty04 a').eq(1).click(function(){
                	 $.ajax({
                      	 url:$.ctx()+'/retrieve_trx/'+cust_id,
                      	 data:cust_id,
                      	 type:'POST',
                      	 dataType:'json',
                      	 contentType:'application/json',
                      	 success:s=>{
                      		 alert('성공!'+s.hcoin);
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
                                $('.ty04 a').attr('class', '');
                                $(this).attr('class', 'on');
                                $('.ownB').empty();
                                $('.ownB').html(ksa_compo.investment_trx());
                                $('.ty04 tbody').empty();
                              	  $('.ty04 tbody').html('<tr>'
                        		  			+'<td class="lAlign">'+convert(tx_date)+'</td>'
         			                			+'<td class="cAlign"><strong>'+s.tseq+'</strong></td>'
         			                			+'<td class="cAlign up">'+s.rw+'</td>'
         			                			+'<td><strong>0.00015797 <i>'+s.rwm+'</i></strong></td>'
         			                			+'<td><strong>0.00015797 <i>'+s.rwm+'</i></strong></td>'
         			                			+'<td><strong>0.00015797 <i>'+s.rwm+'</i></strong></td>'
         			                			+'</tr>');
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
            }
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
       			 $('.totalB p').empty();
       			 $('<p> '+s.hcoin+' <i>KRW</i></p>').appendTo('.totalB');
       			 $('#won strong').eq(1).empty();
       			 $('#won strong').eq(1).html('<strong>'+s.pprice+' <i>KRW</i></strong>');
       			 $('#bitcoin strong').eq(1).empty();
       			 $('#bitcoin strong').eq(1).html('<strong>'+s.hcoin+' <i>BTC</i></strong>');
       			 $('.btnB em').empty();
           		 $('.btnB em').html('계좌번호  :  '+s.acnum);
           		 $('#acc').remove();
           		 $('<a id="charge" class="btn" style="padding-top:1px;" title="충전하기">충전하기</a>').appendTo('.btnB');
           		 $('#charge').click(e=>{
   					 e.preventDefault();
   					 window.open('payment', "a", "width=1000, height=800, left=100, top=50");		 
   				 });
           		 $('.serchBt').click(e=>{
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
		        	             alert(JSON.stringify(res));
		        	             alert(JSON.stringify(authObj));
		        	             console.log(res.id);
		        	             console.log(res.kaccount_email);
		        	             console.log(res.properties['nickname']);
		        	             console.log(authObj.access_token);
		        	             Kakao.Auth.setAccessToken(authObj.access_token, true);
		        	         	 sessionStorage.setItem('session', Kakao.Auth.getAccessToken());
		        	         	 sessionStorage.setItem('info', res.id);
		        	         	$.ajax({
		    	             		url:x+'/login',
		    	             		type: 'POST',
		    	             		data: JSON.stringify(res, authObj),
		    	             		dataType:'json',
		    	             		contentType : "application/json; charset=UTF-8",
		    	             		success:(res)=>{
		    	             			alert('성공');
		    	             			location.assign(x);
		    	             		},
		    	             		error:(err)=>{
		    	             			alert('실패');
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
       /* Kakao.Auth.logout(function(){
        	alert("카카오로그아웃");
        });*/
        location.assign($.ctx());
    };
	
	return{init:init, kakao:kakao};
})();