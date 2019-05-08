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
<link href="https://fonts.googleapis.com/css?family=Lato"
	rel="stylesheet">
<style type="text/css">
* {
	font-family: 'Lato', sans-serif;
}

.dp-wrap {
	margin: 0 auto;
	position: relative;
	perspective: 1000px;
	height: 100%;
}

.dp-slider {
	height: 100%;
	width: 100%;
	position: absolute;
	transform-style: preserve-3d;
}

.dp-slider div {
	transform-style: preserve-3d;
}

.dp_item {
	display: block;
	position: absolute;
	text-align: center;
	color: #FFF;
	border-radius: 10px;
	transition: transform 1.2s;
}

.dp-img img {
	border-left: 1px solid #fff;
}

#dp-slider .dp_item:first-child {
	z-index: 10 !important;
	transform: rotateY(0deg) translateX(0px) !important;
}

.dp_item[data-position="2"] {
	z-index: 9;
	transform: rotateY(0deg) translateX(10%) scale(0.9);
}

.dp_item[data-position="3"] {
	z-index: 8;
	transform: rotateY(0deg) translateX(20%) scale(0.8);
}

.dp_item[data-position="4"] {
	z-index: 7;
	transform: rotateY(0deg) translateX(30%) scale(0.7);
}

#dp-next, #dp-prev {
	position: absolute;
	top: 50%;
	right: 16%;
	height: 33px;
	width: 33px;
	z-index: 10;
	cursor: pointer;
}

#dp-prev {
	left: 15px;
	transform: rotate(180deg);
}

#dp-dots {
	position: absolute;
	bottom: 25px;
	z-index: 12;
	left: 38%;
	cursor: default;
}

#dp-dots li {
	display: inline-block;
	width: 13px;
	height: 13px;
	background: #ffff;
	border-radius: 50%;
}

#dp-dots li:hover {
	cursor: pointer;
	background: #FA8C8C;
	transition: background .3s;
}

#dp-dots li.active {
	background: #093687;
}

.dp_item {
	width: 85%;
}

.dp-content, .dp-img {
	text-align: left;
}

.dp_item {
	display: flex;
	align-items: center;
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
	border-top: 5px solid #093687;
}

.dp-content {
	padding-left: 100px;
	padding-right: 0;
	display: inline-block;
	width: 100%;
}

.dp-content h2 {
	color: #41414B;
	font-family: Circular Std Bold;
	font-size: 48px;
	max-width: 460px;
	margin-top: 8px;
	margin-bottom: 0px;
}

.dp-content p {
	color: #74747F;
	max-width: 490px;
	margin-top: 15px;
	font-size: 24px;
}

.dp-content .site-btn {
	margin-top: 15px;
	font-size: 13px;
	padding: 19px 40px;
}

.dp-img:before {
	background: -webkit-linear-gradient(-90deg, rgba(255, 255, 255, 0.25),
		rgba(255, 255, 255, 0));
	background: -o-linear-gradient(-90deg, rgba(255, 255, 255, 0.25),
		rgba(255, 255, 255, 0));
	background: -moz-linear-gradient(-90deg, rgba(255, 255, 255, 0.25),
		rgba(255, 255, 255, 0));
	background: linear-gradient(-90deg, rgba(255, 255, 255, 0.75),
		rgba(255, 255, 255, 0));
	content: "";
	position: absolute;
	height: 100%;
	width: 25%;
	z-index: 1;
	top: 0;
	pointer-events: none;
	background: -webkit-linear-gradient(-90deg, rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 0.75));
	background: -o-linear-gradient(-90deg, rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 0.75));
	background: -moz-linear-gradient(-90deg, rgba(255, 255, 255, 0),
		rgba(255, 255, 255, 0.75));
	background: linear-gradient(-90deg, rgba(255, 255, 255, 0),
		rgb(255, 255, 255));
}

.dp-img img {
	object-fit: cover;
	object-position: right;
}

#dp-slider, .dp-img img {
	height: 738px;
}

#dp-slider
 
.dp_item
:hover
:not
 
(
:first-child
 
)
{
cursor
:
 
pointer
;


}
.site-btn {
	color: #fff;
	font-size: 18px;
	font-family: "Circular Std Medium";
	background: #FA8282;
	padding: 14px 43px;
	display: inline-block;
	border-radius: 2px;
	position: relative;
	top: -12px;
	text-decoration: none;
}

.site-btn:hover {
	text-decoration: none;
	color: #fff;
}

h1 {
	margin: 30px auto 30px auto;
	text-align: center;
}
</style>
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<link rel="preload" href="https://adservice.google.co.kr/adsid/integrator.js?domain=www.jqueryscript.net" as="script">
<script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script>
<script src="https://www.googletagservices.com/activeview/js/current/osd.js?cb=%2Fr20100101"></script>
<script src="https://pagead2.googlesyndication.com/pub-config/r20160913/ca-pub-2783044520727903.js"></script>
<script type="text/javascript" src="https://adservice.google.co.kr/adsid/integrator.js?domain=www.jqueryscript.net"></script>
<link rel="preload" href="https://adservice.google.com/adsid/integrator.js?domain=www.jqueryscript.net" as="script">
<script type="text/javascript" src="https://adservice.google.com/adsid/integrator.js?domain=www.jqueryscript.net"></script>
<link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/r20190501/r20190131/show_ads_impl.js" as="script">
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
									<a style="cursor: pointer" title="UpBit" id="home">UpBit</a>
								</h1>
								<nav id="nav2">
									<a style="cursor: pointer" class="" id="ngh" title="거래소">거래소</a>
									<a style="cursor: pointer" class="" id="ksa_d" title="입출금">입출금</a>
									<a style="cursor: pointer" class="" id="ksa_i" title="투자내역">투자내역</a>
									<a style="cursor: pointer" class="" id="kth" title="코인동향">코인동향</a>
									<a style="cursor: pointer" class="" id="kth2" title="고객센터">고객센터</a>
								</nav>
								<ul class="tnb">
									<li><a style="cursor: pointer" id="ksa" title="로그인">로그인</a></li>
									<li><a style="cursor: pointer" id="ksa_m" title="회원가입">회원가입</a></li>
								</ul>
							</section>
						</header>
					</article>
					<div class="" id="once">
						<h1>ONCE</h1>
						<!-- slider -->
						<div class="container" style="max-width: 1400px; margin: 0 auto;">
							<div id="slider">
								<div class="dp-wrap">
									<div id="dp-slider">
										<div class="dp_item" data-class="1" data-position="1">
											<div class="dp-content">
												<h2>Slide 1</h2>
												<p>This is Slide 1</p>
												<a href="#" class="site-btn">Read More…</a>
											</div>
											<div class="dp-img">
												<img class="img-fluid" src="https://placeimg.com/821/739/any" alt="investing">
											</div>
										</div>
										<div class="dp_item" data-class="2" data-position="2">
											<div class="dp-content">
												<h2>Slide 2</h2>
												<p>This is Slide 2</p>
												<a href="#" class="site-btn">Read More…</a>
											</div>
											<div class="dp-img">
												<img class="img-fluid" src="https://placeimg.com/821/738/any" alt="investing">
											</div>
										</div>
										<div class="dp_item" data-class="3" data-position="3">
											<div class="dp-content">
						
												<h2>Slide 3</h2>
												<p>This is Slide 3</p>
												<a href="#" class="site-btn">Read More…</a>
											</div>
											<div class="dp-img">
												<img class="img-fluid"
													src="https://placeimg.com/821/737/any" alt="investing">
											</div>
										</div>
										<div class="dp_item" data-class="4" data-position="4">
											<div class="dp-content">
						
												<h2>Slide 4</h2>
												<p>This is Slide 4</p>
												<a href="#" class="site-btn">Read More…</a>
											</div>
											<div class="dp-img">
												<img class="img-fluid"
													src="https://placeimg.com/821/736/any" alt="investing">
											</div>
										</div>
									</div>
						
									<span id="dp-next"> 
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
						        			<defs>
										        <style>
												.cls-1 {
													fill: none;
													stroke: #fa8c8c;
													stroke-miterlimit: 10;
													stroke-width: 7px;
												}
												</style>
						        			</defs>
						        			<path id="Rectangle_4_Copy" data-name="Rectangle 4 Copy" class="cls-1" d="M32.246,0V33.178L0,31.953" transform="translate(0.094 25.276) rotate(-45)"></path>
						      			</svg>
									</span> 
									<span id="dp-prev"> 
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
						        			<defs>
										        <style>
													.cls-1 {
														fill: none;
														stroke: #fa8c8c;
														stroke-miterlimit: 10;
														stroke-width: 7px;
													}
												</style>
						        			</defs>
						        			<path id="Rectangle_4_Copy" data-name="Rectangle 4 Copy" class="cls-1" d="M32.246,0V33.178L0,31.953" transform="translate(0.094 25.276) rotate(-45)"></path>
						      			</svg>
									</span>
									<ul id="dp-dots">
										<li data-class="1" class="active"></li>
										<li data-class="2"></li>
										<li data-class="3"></li>
										<li data-class="4"></li>
									</ul>
								</div>
							</div>
						</div>
						
						<iframe id="google_osd_static_frame_4839156847173" name="google_osd_static_frame" style="display: none; width: 0px; height: 0px;"></iframe>
						<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
						<script type="text/javascript">
						        jQuery(document).ready(function(){
						            function detect_active(){
						                // get active
						                var get_active = $("#dp-slider .dp_item:first-child").data("class");
						                $("#dp-dots li").removeClass("active");
						                $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
						            }
						            $("#dp-next").click(function(){
						                var total = $(".dp_item").length;
						                $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
						                $.each($('.dp_item'), function (index, dp_item) {
						                    $(dp_item).attr('data-position', index + 1);
						                });
						                detect_active();
						
						            });
						
						            $("#dp-prev").click(function(){
						                var total = $(".dp_item").length;
						                $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
						                $.each($('.dp_item'), function (index, dp_item) {
						                    $(dp_item).attr('data-position', index + 1);
						                });
						
						                detect_active();
						            });
						
						            $("#dp-dots li").click(function(){
						                $("#dp-dots li").removeClass("active");
						                $(this).addClass("active");
						                var get_slide = $(this).attr('data-class');
						                console.log(get_slide);
						                $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
						                $.each($('.dp_item'), function (index, dp_item) {
						                    $(dp_item).attr('data-position', index + 1);
						                });
						            });
						
						
						            $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
						                var get_slide = $(this).attr('data-class');
						                console.log(get_slide);
						                $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
						                $.each($('.dp_item'), function (index, dp_item) {
						                    $(dp_item).attr('data-position', index + 1);
						                });
						
						                detect_active();
						            });
						        });
						</script>
						<script type="text/javascript">
							var _gaq = _gaq || [];
							_gaq.push(['_setAccount', 'UA-36251023-1']);
							_gaq.push(['_setDomainName', 'jqueryscript.net']);
							_gaq.push(['_trackPageview']);
						
							(function() {
							var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
							ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
							var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
							})();
						</script>
						<iframe id="google_shimpl" style="display: none;"></iframe>
						<iframe id="google_esf" name="google_esf" src="https://googleads.g.doubleclick.net/pagead/html/r20190501/r20190131/zrt_lookup.html#" data-ad-client="ca-pub-2783044520727903" style="display: none;"></iframe>	
					</div>
					<footer class="sub">
						<div class="wrap">
							<a title="UpBit" class="logo" href="/home">Upbit</a>
							<div class="aboutUs">
								<p class="contact">
									<span><a target="_blank" rel="noopener noreferrer"
										href="#">두나무 주식회사</a></span><span class="dark">고객센터 1588-5682</span>
								</p>
								<p class="address">
									<span>서울시 강남구 테헤란로4길 14, 5층</span><span>대표 이석우</span><span>사업자등록번호
										119-86-54968</span>
								</p>
								<div class="snsLink">
									<a target="_blank" rel="noopener noreferrer" href="#"
										class="snsLink__item snsLink__item--twitter" title="twitter">twitter</a><a
										target="_blank" rel="noopener noreferrer" href="#"
										class="snsLink__item snsLink__item--facebook" title="facebook">facebook</a><a
										target="_blank" rel="noopener noreferrer" href="#"
										class="snsLink__item snsLink__item--medium" title="medium">medium</a><a
										target="_blank" rel="noopener noreferrer" href="#"
										class="snsLink__item snsLink__item--naver" title="naver">naver</a><a
										target="_blank" rel="noopener noreferrer" href="#"
										class="snsLink__item snsLink__item--linkedin" title="linkedin">linkedin</a>
								</div>
								<p class="company">
									<a target="_blank" rel="noopener noreferrer" href="#"
										title="BITTREX"><img
										src="https://static.upbit.com/upbit-pc/main/company01.gif"
										alt="BITTREX"></a><a target="_blank"
										rel="noopener noreferrer" href="#" title="BitGo"><img
										src="https://static.upbit.com/upbit-pc/main/company02.gif"
										alt="BitGo"></a><a target="_blank" rel="noopener noreferrer"
										href="#" title="KakaoPay"><img
										src="https://static.upbit.com/upbit-pc/main/company03.gif"
										alt="KakaoPay"></a><a target="_blank"
										rel="noopener noreferrer" href="#" title="삼성화재"><img
										src="https://static.upbit.com/upbit-pc/main/company04.gif"
										alt="삼성화재"></a>
								</p>
								<p class="copyright">Copyright © 2017 - 2019 Dunamu Inc. All
									rights reserved.</p>
							</div>
							<div class="footerMenu">
								<dl>
									<dt>회사</dt>
									<dd>
										<a target="_blank" rel="noopener noreferrer" href="#">회사소개</a>
									</dd>
									<dd>
										<a title="공지사항" href="#">공지사항</a>
									</dd>
									<dd>
										<a title="이용약관" href="#">이용약관</a>
									</dd>
									<dd>
										<a title="Open API 이용약관" href="#">Open API 이용약관</a>
									</dd>
									<dd>
										<a title="개인정보처리방침" href="#"><strong>개인정보처리방침</strong></a>
									</dd>
								</dl>
								<dl>
									<dt>고객지원</dt>
									<dd>
										<a title="자주하는 질문(FAQ)" href="#">자주하는 질문(FAQ)</a>
									</dd>
									<dd>
										<a target="_blank" rel="noopener noreferrer" href="#"
											title="카카오톡 문의(24시간)">카카오톡 문의(24시간)</a>
									</dd>
									<dd>
										<a title="1:1 문의하기" href="#">1:1 문의하기</a>
									</dd>
									<dd>
										<a title="Open API" href="#">Open API</a>
									</dd>
									<dd>
										<a title="거래 및 입출금 이용안내" href="#">거래 및 입출금 이용안내</a>
									</dd>
								</dl>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	</div>
</body>
<!-- upbit -->
<script
	src="https://cdn.upbit.com/vendors-chunk-344e4004ead25be2326b.js"></script>
<script
	src="https://cdn.upbit.com/lodash-vendor-chunk-07379bacb0c3f397e40f.js"></script>
<script
	src="https://cdn.upbit.com/react-vendor-chunk-bceefdde649afea71d7f.js"></script>
<script
	src="https://cdn.upbit.com/commons-chunk-30703bb927f1099d8531.js"></script>
<script src="https://cdn.upbit.com/KR_PC-chunk-1b0a4e1e53868b6001ef.js"></script>

<!-- once -->
<script
	src="<%=application.getContextPath()%>/resources/js/common/auth.js"></script>
<script
	src="<%=application.getContextPath()%>/resources/js/common/util.js"></script>
<script
	src="<%=application.getContextPath()%>/resources/js/component/component.js"></script>
<script
	src="<%=application.getContextPath()%>/resources/js/component/ksa_compo.js"></script>
<script
	src="<%=application.getContextPath()%>/resources/js/component/kth_compo.js"></script>
<script
	src="<%=application.getContextPath()%>/resources/js/kth/scroll.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script
	src="<%=application.getContextPath()%>/resources/js/common/util.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/ksa.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/kth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/ngh.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/router.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>

<script>
	app.init('<%=application.getContextPath()%>');
	app.$$.init();
</script>
</html>