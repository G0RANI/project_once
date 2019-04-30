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
			 kakao();
		/*	$('#once').empty();
			$.getScript($.js()+'/component/ksa_compo.js',()=>{
				 
				 $('#nav2 a').attr('class', '');
				 $('#ksa_d').attr('class', 'on');
			});*/
			break;
		case 'd':
			$('#navi').empty();
			$('#navi').attr('class', '');
			$('#once').empty();
			 $.getScript($.js()+'/component/ksa_compo.js',()=>{
				 $(ksa_compo.navi()).appendTo('#navi');
				 $(ksa_compo.d_w_charge()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
				 $('#ksa_d').attr('class', 'on');
				 });
			break;
		case 'i':
			$('#navi').empty();
			$('#navi').attr('class', '');
			$('#once').empty();
			 $.getScript($.js()+'/component/ksa_compo.js',()=>{
				 $(ksa_compo.navi()).appendTo('#navi');
				 $(ksa_compo.investment_coin()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
				 $('#ksa_i').attr('class', 'on');	
				 });
			break;
		case 'm':
			$('#navi').empty();
			$('#navi').attr('class', '');
			$('#once').empty();
			 $.getScript($.js()+'/component/ksa_compo.js',()=>{
				 $(ksa_compo.navi()).appendTo('#navi');
				 $(ksa_compo.cust_infor()).appendTo('#once');
				 $('#nav2 a').attr('class', '');
				 });
			break;
		}
	};
	
	let kakao=(x)=>{
		Kakao.init('84c6f4f17078c92b08795e362bbe2d2d');  //여기서 아까 발급받은 키 중 javascript키를 사용해준다.
	    // 카카오 로그인 버튼을 생성합니다.
	    Kakao.Auth.createLoginButton({
	      container: '#custom-login-btn',
	      size:'large',
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
	    	             	$.ajax({
	    	             		url:x+'/login',
	    	             		type: 'POST',
	    	             		data: JSON.stringify(res, authObj),
	    	             		dataType:'json',
	    	             		contentType : "application/json; charset=UTF-8",
	    	             		success:function(res){
	    	             			 location.assign(x+"/ngh");
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
	};
	
	return{init:init, kakao:kakao};
})();