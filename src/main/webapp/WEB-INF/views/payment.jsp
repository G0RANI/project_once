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
	(function(){
		var IMP = window.IMP;
        IMP.init('imp75272689'); 
        IMP.request_pay({
            pg: 'inicis', 
            pay_method: 'card',
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: '금액 충전',
            amount: sessionStorage.getItem('cm'), 
            buyer_email: sessionStorage.getItem('email'),
            buyer_name: '구매자이름',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
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
                    url:'/web/payment/'+sessionStorage.getItem('info'),
                    data:JSON.stringify(rsp.paid_amount),
                    type:'POST',
                    dataType:'json',
                    contentType:'application/json',
                    success:function (s){
                       alert('성공');
                    },
                    error:function (e){
                        alert('실패!');
                        location.assign($.ctx());
                    }
                });
          		sessionStorage.removeItem('cm');
                location.assign($.ctx());
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
                sessionStorage.removeItem('cm');
                close();
            }
            alert(msg);
        });
	})();
</script>
    </body>

    </html>