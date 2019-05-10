<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="https://service.iamport.kr/js/iamport.payment-1.1.5.js"></script>
        <title>결제 페이지</title>
    </head>
    <body>
<script>
	function _GET(search) {
	    var obj = {};
	    var uri = decodeURI(search);
	        uri = uri.slice(1,uri.length);
	
	    var param = uri.split('&');
	    
	    for (var i = 0; i < param.length; i++) {
	        var devide = param[i].split('=');
	        obj[devide[0]] = devide[1];
	    }
	
	    return obj;
	}
	
	window.onload = function () {
	    var search = window.location.search;
	    var getData =  _GET(search);
	    var sender = document.querySelector('#sender');
	
	    sender.value = getData.val;
	}

	(function(){
		var IMP = window.IMP;
        IMP.init('imp75272689'); 
        IMP.request_pay({
            pg: 'inicis', 
            pay_method: 'card',
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: '금액 충전',
            amount: 1000, 
            buyer_email: sessionStorage.getItem('email'),
            buyer_name: '구매자이름',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
            m_redirect_url: 'http://localhost:8080/web/payments/complete'
        }, function (rsp) {
            console.log(rsp);
            if (rsp.success) {
                var msg = '결제가 완료되었습니다.';
                msg += '고유ID : ' + rsp.imp_uid;
                msg += '상점 거래ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인번호 : ' + rsp.apply_num;
                let data = {id:sessionStorage.getItem('info'),money:rsp.paid_amount};
                $.ajax({
                  	 url:'/payment',
                  	 data: data,
                  	 type:'POST',
                  	 dataType:'json',
                  	 contentType:'application/json',
                  	 success:s=>{
                  		 alert('성공');
                  	 },
                  	 error:e=>{
                  		 alert('실패');
                  	 }
                });
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
        });
	})();
</script>
    </body>

    </html>