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
			alert(sessionStorage.getItem('session'));
			
			$.getScript($.js()+'/component/ksa_compo.js',()=>{
			if(sessionStorage.getItem('session') === null){
				$('#once').html(ksa_compo.kakao_login);
				kakao('<%=application.getContextPath()%>');
			}else{
				 $(ksa_compo.d_w_charge()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
				 $('#ksa_d').attr('class', 'on');
				 $('.tabB a').eq(0).click(function(){
						alert('충전');
						$('.tabB a').attr('class', '');
						$(this).attr('class', 'on');
						$('.TabArea').empty();
						$(ksa_compo.d_w_krw()).appendTo('.TabArea');
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
				 $(ksa_compo.investment_coin()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
				 $('#ksa_i').attr('class', 'on');	
				 $('.ty04 a').eq(0).click(function(){
						alert('보유코인');
						$('.ty04 a').attr('class', '');
						$(this).attr('class', 'on');
						$('.ownB').empty();
						$('.ownB').html(ksa_compo.investment_hcoin());
					});
				 $('.ty04 a').eq(1).click(function(){
						alert('거래내역');
						$('.ty04 a').attr('class', '');
						$(this).attr('class', 'on');
						$('.ownB').empty();
						$('.ownB').html(ksa_compo.investment_trx());
				 });
			});
			break;
		case 'm':
			$('#once').empty();
			 $.getScript($.js()+'/component/ksa_compo.js',()=>{
				 $(ksa_compo.cust_infor()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
				 $('.listB a').eq(0).click(function(){
						alert('회원정보');
						$('.listB a').attr('class', '');
						$(this).attr('class', 'on');
						$('#right').empty();
						$('#right').html(ksa_compo.cust_info_navi());
				 });
				 $('.listB a').eq(2).click(function(){
						alert('접속관리');
						$('.listB a').attr('class', '');
						$(this).attr('class', 'on');
						$('#right').empty();
						$('#right').html(ksa_compo.cust_acc());
				 });
			 });
			break;
		}
	};
	
	let kakao=(x)=>{
		Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');
		$('#custom-login-btn').click(function loginWithKakao() {
		      Kakao.Auth.login({
		        success: function(authObj) {
		        	 Kakao.API.request({
		        	       url: '/v1/user/me',
		        	       success: function(res) {
		        	             alert(JSON.stringify(res));
		        	             alert(JSON.stringify(authObj));
		        	             console.log(res.id);
		        	             console.log(res.kaccount_email);
		        	             console.log(res.properties['nickname']);
		        	             console.log(authObj.access_token);
		        	             Kakao.Auth.setAccessToken(authObj.access_token, true);
		        	         	 sessionStorage.setItem('session', Kakao.Auth.getAccessToken());
		        	         	$.ajax({
		    	             		url:x+'/login',
		    	             		type: 'POST',
		    	             		data: JSON.stringify(res, authObj),
		    	             		dataType:'json',
		    	             		contentType : "application/json; charset=UTF-8",
		    	             		success:function(res){
		    	             			alert('성공');
		    	             			location.assign(x+"/ngh");
		    	             			/*$('#nav3').empty();
		    	             			$('<li><a style="cursor:pointer" id="ksa_m" title="마이페이지">마이페이지</a></li>').appendTo('#nav3');
		    	             			$('<li><a style="cursor:pointer" id="logout" title="로그아웃">로그아웃</a></li>').appendTo('#nav3');*/
		    	             		},
		    	             		error:function(err){
		    	             			alert('실패');
		    	             			kakao(x);
		    	             		}
		    	             	});
		        	           }
		        	         })
		        },
		        fail: function(err) {
		          alert(JSON.stringify(err));
		        }
		      });
		    });
	};	
	return{init:init, kakao:kakao};
})();