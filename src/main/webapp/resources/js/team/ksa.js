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
<<<<<<< HEAD
				 /*$('#port').click(()=>{
					 
				 });*/
=======
>>>>>>> 30cd607270de7b90b9499281fb5d7c0d334a8c9e
			});
			break;
		case 'i':
			$('#once').empty();
			 $.getScript($.js()+'/component/ksa_compo.js',()=>{
				 $(ksa_compo.investment_coin()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
				 $('#ksa_i').attr('class', 'on');	
				 });
			break;
		case 'm':
			$('#once').empty();
			 $.getScript($.js()+'/component/ksa_compo.js',()=>{
				 $(ksa_compo.cust_infor()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
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
<<<<<<< HEAD
	return{init:init, kakao:kakao};
=======
	let port=()=>{
		var IMP = window.IMP; // 생략가능
        IMP.init('imp75272689'); 
        // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
        // i'mport 관리자 페이지 -> 내정보 -> 가맹점식별코드
        IMP.request_pay({
            pg: 'inicis', // version 1.1.0부터 지원.
            /* 
                'kakao':카카오페이, 
                html5_inicis':이니시스(웹표준결제)
                    'nice':나이스페이
                    'jtnet':제이티넷
                    'uplus':LG유플러스
                    'danal':다날
                    'payco':페이코
                    'syrup':시럽페이
                    'paypal':페이팔
                */
            pay_method: 'card',
            /* 
                'samsung':삼성페이, 
                'card':신용카드, 
                'trans':실시간계좌이체,
                'vbank':가상계좌,
                'phone':휴대폰소액결제 
            */
            merchant_uid: 'merchant_' + new Date().getTime(),
            /* 
                merchant_uid에 경우 
                https://docs.iamport.kr/implementation/payment
                위에 url에 따라가시면 넣을 수 있는 방법이 있습니다.
                참고하세요. 
                나중에 포스팅 해볼게요.
             */
            name: '주문명:결제테스트',
            //결제창에서 보여질 이름
            amount: 1000, 
            //가격 
            buyer_email: 'iamport@siot.do',
            buyer_name: '구매자이름',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
            m_redirect_url: 'https://www.yourdomain.com/payments/complete'
            /*  
                모바일 결제시,
                결제가 끝나고 랜딩되는 URL을 지정 
                (카카오페이, 페이코, 다날의 경우는 필요없음. PC와 마찬가지로 callback함수로 결과가 떨어짐) 
                */
        }, function (rsp) {
            console.log(rsp);
            if (rsp.success) {
                var msg = '결제가 완료되었습니다.';
                msg += '고유ID : ' + rsp.imp_uid;
                msg += '상점 거래ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인번호 : ' + rsp.apply_num;
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
        });
	};
	return{init:init, kakao:kakao, port:port};
>>>>>>> 30cd607270de7b90b9499281fb5d7c0d334a8c9e
})();