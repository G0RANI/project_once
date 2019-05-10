<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>ONCE</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script async="" src="https://www.google-analytics.com/analytics.js"></script>
	<link rel="stylesheet" media="all" href="https://cdn.upbit.com/server_assets/assets/application-eed45448fcc8d15913d4046f854336c3e6d7dc7618b691d2e0500aa6583b42aa.css">
    <link rel="stylesheet" media="screen" href="https://cdn.upbit.com/commons-common-30703bb927f1099d8531.css">
    <link rel="stylesheet" media="screen" href="https://cdn.upbit.com/KR_PC-common-1b0a4e1e53868b6001ef.css">
    <link rel="icon" type="image/jpg" href="/favicon.jpg" sizes="32x32">
    <link rel="shortcut icon" href="/favicon.jpg">
	<script src="https://cdn.upbit.com/js/bluebird-3.3.4.min.js" integrity="sha384-Zum86V5Chub72Pcj/UopirJ0QwQ+LgKZFTlVMt/yaVwYbROQJl/q8Nj2e72vZel2" crossorigin="anonymous"></script>
    <script src="https://cdn.upbit.com/js/bluebird-3.3.4.min.js" integrity="sha384-Zum86V5Chub72Pcj/UopirJ0QwQ+LgKZFTlVMt/yaVwYbROQJl/q8Nj2e72vZel2" crossorigin="anonymous"></script>
    <script src="https://cdn.upbit.com/js/jquery-3.2.1.min.js" integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f" crossorigin="anonymous"></script>
    <script src="https://cdn.upbit.com/js/pc-inline-1.2.js" integrity="sha384-qTbmS4jWPoNJ/fbbtBgeNTj7u3P1Mlp0wn9pKGGp1+ehUyuSFYVGJosc800zYG+n" crossorigin="anonymous"></script>
    <script async="" src="https://platform.twitter.com/widgets.js"></script>
    <style data-styled="" data-styled-version="4.2.0"></style>
    <link rel="icon" href="data:;base64, iVORw0KGo=">
    <link rel="stylesheet" href="${css}kth/chat.css">
<style>
    header section h1 img {
    text-indent: -1000em;
    display: inline-block;
    position: absolute;
    width: 90px;
    height: 70px;
    right: 20px;
    bottom: 1px;
    left: 0px;
    border-radius: 3px;
    top: 0px;
    cursor: pointer;
	}
	footer div img {  
	    text-indent: -1000em;
	    display: inline-block;
	    position: absolute;
	    width: 90px;
	    height: 90px;
	    right: 20px;
	    bottom: 1px;
	    left: 0px;
	    border-radius: 3px;
	    top: 0px;
	    cursor: pointer;  
	}
</style>
</head>
<body class="bgWhite">
<div id="root">
		<div>
			<div>
				<div class="">
					<div id="checkVerifMethodModal"></div>
					<div id="QuoteOrderConfirmPopup"></div>
					<article class="">
						<header class="" style="z-index: 100;">
							<section>
								<h1>
									<img src="/web/resources/img/logo2.png" id="home" alt="once">
								</h1>
								<nav id="nav2">
									<a style="cursor:pointer" class="" id="ngh" title="거래소">거래소</a>
									<a style="cursor:pointer" class="" id="ksa_d" title="입출금">입출금</a>
									<a style="cursor:pointer" class="" id="ksa_i" title="투자내역">투자내역</a>
									<a style="cursor:pointer" class="" id="kth" title="코인동향">코인동향</a>
									<a style="cursor:pointer" class="" id="kth2" title="고객센터">고객센터</a>
								</nav>
								<ul class="tnb" id="nav3">
									<li><a style="cursor:pointer" id="ksa" title="로그인">로그인</a></li>
								</ul>
							</section>
						</header>
					</article>
					<div class="" id="once">		
						<div class>
							<div class="eventMargin"></div>
							<section class="loginB">
								<article>
									<h2 class="logo">UPbit</h2>
										<img
									src="http://mud-kage.kakao.com/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg"
									width="380" id="custom-login-btn" style="cursor:pointer"/>
									<br>
									<div class="chkBox">
										<a href="#">checkbox</a><label for="">로그인 상태 유지</label>
									</div>
									<ul class="listB">
										<li>카카오계정으로 간편하고 안전하게 로그인(회원가입)할 수 있습니다.</li>
										<li>카카오계정이 기억나지 않으시나요?<a href="#" class="btnTxt"
											title="확인방법">확인방법</a></li>
									</ul>
								</article>
							</section>
						</div>
					</div>
					<footer class="sub">
						<div class="wrap">
							<img src="/web/resources/img/logo3.png" alt="once">
							<div class="aboutUs">
								<p class="contact">
									<span><a target="_blank" rel="noopener noreferrer">ONCE 주식회사</a></span>
									<span class="dark">고객센터 1234-1234</span>
								</p>
								<p class="address">
									<span>서울 마포구 백범로 23 구프라자 3층</span><span>대표 ONCE</span><span>사업자등록번호
										123-45-78910</span>
								</p>
								<div class="snsLink">
									<a target="_blank" rel="noopener noreferrer" 
										class="snsLink__item snsLink__item--twitter" title="twitter">twitter</a><a
										target="_blank" rel="noopener noreferrer" 
										class="snsLink__item snsLink__item--facebook" title="facebook">facebook</a><a
										target="_blank" rel="noopener noreferrer" 
										class="snsLink__item snsLink__item--medium" title="medium">medium</a><a
										target="_blank" rel="noopener noreferrer" 
										class="snsLink__item snsLink__item--naver" title="naver">naver</a><a
										target="_blank" rel="noopener noreferrer" 
										class="snsLink__item snsLink__item--linkedin" title="linkedin">linkedin</a>
								</div>
								
								<p class="copyright">Copyright © 2017 - 2019 ONCE Inc. All
									rights reserved.</p>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	</div>
</body>
<!-- upbit -->
<script src="https://cdn.upbit.com/vendors-chunk-344e4004ead25be2326b.js"></script>
<script src="https://cdn.upbit.com/lodash-vendor-chunk-07379bacb0c3f397e40f.js"></script>
<script src="https://cdn.upbit.com/react-vendor-chunk-bceefdde649afea71d7f.js"></script>
<script src="https://cdn.upbit.com/commons-chunk-30703bb927f1099d8531.js"></script>
<script src="https://cdn.upbit.com/KR_PC-chunk-1b0a4e1e53868b6001ef.js"></script>

<!-- once -->
<script src="${js}common/auth.js"></script>
<script src="${js}common/util.js"></script>
<script src="${js}component/component.js"></script>
<script src="${js}component/ksa_compo.js"></script>
<script src="${js}component/kth_compo.js"></script>
<script src="${js}kth/scroll.js"></script>
<script src="${js}app.js"></script>
<script src="${js}common/util.js"></script>
<script src="${js}team/ksa.js"></script>
<script src="${js}team/kth.js"></script>
<script src="${js}team/ngh.js"></script>
<script src="${js}app.js"></script>
<script src="${js}router.js"></script>
<script src="${js}team/chat.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script> 
	app.init('${ctx}');
	ksa.kakao('${ctx}');
	app.$$.init();
</script>
</html>