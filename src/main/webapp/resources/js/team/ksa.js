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
				 
				 $('#event_ok a').click(function(){
						$('#event_ok').attr('class', 'bgNone');
						$(this).attr('class', 'bgNone on');
						$(this).html('<div id="checkVerifMethodModal">'
								+'    <div class="upbitDim">'
								+'    </div>'
								+'    <section class="popup01" style="position: fixed;">'
								+'        <article>'
								+'            <strong class="tit">알림</strong>'
								+'            <p>이메일 설정이 변경되었습니다.</p>'
								+'            <span><a href="#">확인</a></span>'
								+'        </article>'
								+'    </section>'
								+'</div>');
					 
				 });
				 $('#info_ok').click(function(){
						$('#info_ok').attr('class', '');
						$(this).attr('class', 'bgNone on');
				 });
			 });
			break;
		}
	};
	
	let kakao=(x)=>{
		Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');  //여기서 아까 발급받은 키 중 javascript키를 사용해준다.
	    // 카카오 로그인 버튼을 생성합니다.
		$('#custom-login-btn').click(function loginWithKakao() {
		      // 로그인 창을 띄웁니다.
		      Kakao.Auth.login({
		        success: function(authObj) {
		        	 Kakao.API.request({
		        	       url: '/v1/user/me',
		        	       success: function(res) {
		        	             alert(JSON.stringify(res)); //<---- kakao.api.request 에서 불러온 결과값 json형태로 출력
		        	             alert(JSON.stringify(authObj)); //<----Kakao.Auth.createLoginButton에서 불러온 결과값 json형태로 출력
		        	             console.log(res.id);//<---- 콘솔 로그에 id 정보 출력(id는 res안에 있기 때문에  res.id 로 불러온다)
		        	             console.log(res.kaccount_email);//<---- 콘솔 로그에 email 정보 출력 (어딨는지 알겠죠?)
		        	             console.log(res.properties['nickname']);//<---- 콘솔 로그에 닉네임 출력(properties에 있는 nickname 접근 
		        	         // res.properties.nickname으로도 접근 가능 )
		        	             console.log(authObj.access_token);//<---- 콘솔 로그에 토큰값 출력
		        	             Kakao.Auth.setAccessToken(authObj.access_token, true);
		        	         	$.ajax({
		    	             		url:x+'/login',
		    	             		type: 'POST',
		    	             		data: JSON.stringify(res, authObj),
		    	             		dataType:'json',
		    	             		contentType : "application/json; charset=UTF-8",
		    	             		success:function(res){
		    	             			/*sessionStorage.setItem('ls',Kakao.Auth.getAccessToken());*/
		    	             			alert('저장된엑세스토큰'+Kakao.Auth.getAccessToken());
		    	             			location.assign(x+"/ngh");
		    	             			/*$('#nav3').empty();
		    	             			$('<li><a style="cursor:pointer" id="ksa_m" title="마이페이지">마이페이지</a></li>').appendTo('#nav3');
		    	             			$('<li><a style="cursor:pointer" id="logout" title="로그아웃">로그아웃</a></li>').appendTo('#nav3');*/
		    	             		},
		    	             		error:function(err){
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