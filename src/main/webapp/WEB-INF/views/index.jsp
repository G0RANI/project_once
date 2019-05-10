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
	<script src="https://cdn.upbit.com/js/bluebird-3.3.4.min.js" integrity="sha384-Zum86V5Chub72Pcj/UopirJ0QwQ+LgKZFTlVMt/yaVwYbROQJl/q8Nj2e72vZel2" crossorigin="anonymous"></script>
    <script src="https://cdn.upbit.com/js/bluebird-3.3.4.min.js" integrity="sha384-Zum86V5Chub72Pcj/UopirJ0QwQ+LgKZFTlVMt/yaVwYbROQJl/q8Nj2e72vZel2" crossorigin="anonymous"></script>
    <script src="https://cdn.upbit.com/js/jquery-3.2.1.min.js" integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f" crossorigin="anonymous"></script>
    <script src="https://cdn.upbit.com/js/pc-inline-1.2.js" integrity="sha384-qTbmS4jWPoNJ/fbbtBgeNTj7u3P1Mlp0wn9pKGGp1+ehUyuSFYVGJosc800zYG+n" crossorigin="anonymous"></script>
    <script async="" src="https://platform.twitter.com/widgets.js"></script>
    <style data-styled="" data-styled-version="4.2.0"></style>
	<link href="https://fonts.googleapis.com/css?family=Lato"rel="stylesheet">
	<link rel="icon" href="data:;base64, iVORw0KGo=">
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
	background: #093687;
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
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<script type="text/javascript" async="" src="https://ssl.google-analytics.com/ga.js"></script>
<script src="https://www.googletagservices.com/activeview/js/current/osd.js?cb=%2Fr20100101"></script>
<script src="https://pagead2.googlesyndication.com/pub-config/r20160913/ca-pub-2783044520727903.js"></script>
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
												<h2>Exchange</h2>
												<p>거래소</p>
											</div>
											<div class="dp-img">
												<img class="img-fluid" src="https://3.bp.blogspot.com/-uG4g2ru306M/WSmOaS9-dLI/AAAAAAAAA3Q/b4BlZd8-qsgoFv4aW2wOEzOijxmQ7Pm2QCLcB/s1600/NYSE.JPG" alt="investing">
											</div>
										</div>
										<div class="dp_item" data-class="2" data-position="2">
											<div class="dp-content">
												<h2>Wallets</h2>
												<p>입출금</p>
											</div>
											<div class="dp-img">
												<img class="img-fluid" src="https://img.seoul.co.kr/img/upload/2017/05/15/SSI_20170515143932.jpg" alt="investing">
											</div>
										</div>
										<div class="dp_item" data-class="3" data-position="3">
											<div class="dp-content">
												<h2>My Trade</h2>
												<p>투자내역</p>
											</div>
											<div class="dp-img">
												<img class="img-fluid" src="https://www.v-on.kr/wp-content/uploads/2018/11/%EB%B2%A4%EC%B2%98%EA%B8%B0%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%ED%88%AC%EC%9E%90%EA%B3%84%EC%95%BD%EC%84%9C-%ED%95%B4%EC%84%A4%EC%84%9C-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg" alt="investing">
											</div>
										</div>
										<div class="dp_item" data-class="4" data-position="4">
											<div class="dp-content">
												<h2>Trend</h2>
												<p>코인동향</p>
											</div>
											<div class="dp-img">
												<img class="img-fluid" src="http://platum.kr/wp-content/uploads/2016/03/12.jpg" alt="investing">
											</div>
										</div>
									</div>					
									<span id="dp-next"> 
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
						        			<defs>
										        <style>
												.cls-1 {
													fill: none;
													stroke: #093687;
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
														stroke: ##093687;
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
						<div style="background-color: rgb(255, 255, 255);">
							
							<article class="app__main--erefX home">
								<section class="app__container--2DgeA">
									<article class="app__DataDisplay--Wc51W">
										<div id="chart" style="margin-top: 60px;"
											class="app__wrap--2K1mv app__paddingSide--wUIeO">
											<div class="app__row--2t8gF">
												<div class="app__col-4--ls7AG">
													<div class="app__chartModule--3B8eL">
														<div class="app__header--2OuvG">
															<label>ONCE</label><span
																class="app__dataColor--1Uj_q app__down--2bdgI">1,085.62</span>
														</div>
														<div class="app__IndexData--I2viT">
															<label>ONCE Coin Index </label><span
																class="app__dataColor--1Uj_q app__down--2bdgI"><i></i><em>2.28</em>
																<em>-0.21%</em></span>
														</div>
														<div class="app__chart--1O1dA">
															<div>
																<div class="highstock" data-highcharts-chart="0"
																	style="overflow: hidden;">
																	<div id="highcharts-dknsddu-0" dir="ltr"
																		class="highcharts-container "
																		style="position: relative; overflow: hidden; width: 358px; height: 148px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
																		<svg version="1.1" class="highcharts-root"
																			style="font-family: &amp; quot; Lucida Grande&amp;quot; , &amp; quot; Lucida Sans Unicode&amp;quot; , Arial , Helvetica, sans-serif; font-size: 12px;"
																			xmlns="http://www.w3.org/2000/svg" width="358"
																			height="148" viewBox="0 0 358 148">
																			<desc>Created with Highcharts 7.0.3</desc>
																			<defs>
																			<clipPath id="highcharts-dknsddu-1">
																			<rect x="0" y="0" width="358" height="148"
																				fill="none"></rect></clipPath>
																			<linearGradient x1="1" x2="1" y1="1" y2="0"
																				id="highcharts-dknsddu-100">
																			<stop offset="0" stop-color="rgb(255,255,255)"
																				stop-opacity="0.2"></stop>
																			<stop offset="0.4" stop-color="rgb(219,223,229)"
																				stop-opacity="0.2"></stop>
																			<stop offset="1" stop-color="rgb(183,190,202)"
																				stop-opacity="0.2"></stop></linearGradient>
																			<clipPath id="highcharts-dknsddu-129">
																			<rect x="0" y="79" width="358" height="69"
																				fill="none"></rect></clipPath>
																			<clipPath id="highcharts-dknsddu-130">
																			<rect x="0" y="0" width="358" height="79" fill="none"></rect></clipPath></defs>
																			<rect fill="transparent"
																				class="highcharts-background" x="0" y="0"
																				width="358" height="148" rx="0" ry="0"></rect>
																			<rect fill="none" class="highcharts-plot-background"
																				x="0" y="0" width="358" height="148"></rect>
																			<g class="highcharts-plot-lines-0" data-z-index="0">
																			<path fill="none" class="highcharts-plot-line "
																				stroke="rgba(238, 238, 238, 1)" stroke-width="2"
																				stroke-dasharray="2,6" d="M 0 79 L 358 79"
																				visibility="visible"></path></g>
																			<rect fill="none" class="highcharts-plot-border"
																				data-z-index="1" x="0" y="0" width="358"
																				height="148"></rect>
																			<g class="highcharts-grid highcharts-xaxis-grid "
																				data-z-index="1">
																			<path fill="none" stroke="rgba(238, 238, 238, 0.4)"
																				stroke-width="1" data-z-index="1"
																				class="highcharts-grid-line" d="M -0.5 0 L -0.5 148"
																				opacity="1"></path>
																			<path fill="none" stroke="rgba(238, 238, 238, 0.4)"
																				stroke-width="1" data-z-index="1"
																				class="highcharts-grid-line" d="M 89.5 0 L 89.5 148"
																				opacity="1"></path>
																			<path fill="none" stroke="rgba(238, 238, 238, 0.4)"
																				stroke-width="1" data-z-index="1"
																				class="highcharts-grid-line"
																				d="M 178.5 0 L 178.5 148" opacity="1"></path>
																			<path fill="none" stroke="rgba(238, 238, 238, 0.4)"
																				stroke-width="1" data-z-index="1"
																				class="highcharts-grid-line"
																				d="M 268.5 0 L 268.5 148" opacity="1"></path>
																			<path fill="none" stroke="rgba(238, 238, 238, 0.4)"
																				stroke-width="1" data-z-index="1"
																				class="highcharts-grid-line"
																				d="M 358.5 0 L 358.5 148" opacity="1"></path></g>
																			<g class="highcharts-grid highcharts-yaxis-grid "
																				data-z-index="1">
																			<path fill="none" data-z-index="1"
																				class="highcharts-grid-line"
																				d="M 0 148.5 L 358 148.5" opacity="1"></path>
																			<path fill="none" data-z-index="1"
																				class="highcharts-grid-line" d="M 0 99.5 L 358 99.5"
																				opacity="1"></path>
																			<path fill="none" data-z-index="1"
																				class="highcharts-grid-line" d="M 0 49.5 L 358 49.5"
																				opacity="1"></path>
																			<path fill="none" data-z-index="1"
																				class="highcharts-grid-line" d="M 0 0.5 L 358 0.5"
																				opacity="1"></path></g>
																			<g class="highcharts-axis highcharts-xaxis "
																				data-z-index="2">
																			<path fill="none" class="highcharts-tick"
																				stroke="#ccd6eb" stroke-width="1"
																				d="M -0.5 148 L -0.5 158" opacity="1"></path>
																			<path fill="none" class="highcharts-tick"
																				stroke="#ccd6eb" stroke-width="1"
																				d="M 89.5 148 L 89.5 158" opacity="1"></path>
																			<path fill="none" class="highcharts-tick"
																				stroke="#ccd6eb" stroke-width="1"
																				d="M 178.5 148 L 178.5 158" opacity="1"></path>
																			<path fill="none" class="highcharts-tick"
																				stroke="#ccd6eb" stroke-width="1"
																				d="M 268.5 148 L 268.5 158" opacity="1"></path>
																			<path fill="none" class="highcharts-tick"
																				stroke="#ccd6eb" stroke-width="1"
																				d="M 358.5 148 L 358.5 158" opacity="1"></path>
																			<path fill="none" class="highcharts-axis-line"
																				stroke="#ccd6eb" stroke-width="1" data-z-index="7"
																				d="M 0 148.5 L 358 148.5"></path></g>
																			<g class="highcharts-axis highcharts-yaxis "
																				data-z-index="2">
																			<text x="-12" data-z-index="7" text-anchor="middle"
																				transform="translate(0,0) rotate(270 -12 74)"
																				class="highcharts-axis-title"
																				style="color:#666666;fill:#666666;" y="74">
																			<tspan>Values</tspan></text>
																			<path fill="none" class="highcharts-axis-line"
																				data-z-index="7" d="M 0 0 L 0 148"></path></g>
																			<g class="highcharts-series-group" data-z-index="3">
																			<g data-z-index="0.1"
																				class="highcharts-series highcharts-series-0 highcharts-area-series highcharts-color-0 "
																				transform="translate(0,0) scale(1 1)"
																				clip-path="url(#highcharts-dknsddu-1)">
																			<path fill="url(#highcharts-dknsddu-100)"
																				d="M 0 50.60003491933341 L 3.7684210526316 46.40669514800018 L 7.5368421052632 47.720379556000154 L 11.305263157895 45.006070483333374 L 15.073684210526 47.99487873266675 L 18.842105263158 47.994383351999986 L 22.610526315789 50.13530907333353 L 26.378947368421 50.6901461253336 L 30.147368421053 49.27649144200019 L 33.915789473684 47.201639556000245 L 37.684210526316 44.90309538866684 L 41.452631578947 42.72053171733333 L 45.221052631579 41.31060796599998 L 48.989473684211 41.527816367333486 L 52.757894736842 42.09877167999991 L 56.526315789474 43.58202782800001 L 60.294736842105 45.384497825333185 L 64.063157894737 46.994768140666906 L 67.831578947368 46.91589373599979 L 71.6 46.84997517733348 L 75.368421052632 47.461426324000186 L 79.136842105263 48.31911141000026 L 82.905263157895 52.61789923266684 L 86.673684210526 53.91867184933339 L 90.442105263158 58.034296746666755 L 94.210526315789 57.65662188599988 L 97.978947368421 56.50665093399999 L 101.74736842105 53.96948604600004 L 105.51578947368 50.344194152000014 L 109.28421052632 51.66311758733313 L 113.05263157895 51.306831094666876 L 116.82105263158 54.84480676266686 L 120.58947368421 59.16118394133326 L 124.35789473684 68.51811630933327 L 128.12631578947 78.86831959733358 L 131.89473684211 75.7473677720001 L 135.66315789474 83.13425783333349 L 139.43157894737 85.56150188800014 L 143.2 101.27634691733327 L 146.96842105263 117.81461905333336 L 150.73684210526 98.18329047733353 L 154.50526315789 95.54701250533344 L 158.27368421053 95.66419044466677 L 162.04210526316 97.08578878133332 L 165.81052631579 97.14835200733333 L 169.57894736842 102.36713047399974 L 173.34736842105 98.68145388933351 L 177.11578947368 99.93194348133356 L 180.88421052632 103.84572548533355 L 184.65263157895 117.18500065999996 L 188.42105263158 116.47579640133341 L 192.18947368421 110.99817792266657 L 195.95789473684 102.46399410600006 L 199.72631578947 97.89471156733325 L 203.49473684211 97.40730321666669 L 207.26315789474 90.73820565666672 L 211.03157894737 90.25833968200021 L 214.8 93.85526619199996 L 218.56842105263 90.03561840400002 L 222.33684210526 90.6707576166669 L 226.10526315789 97.14892782600023 L 229.87368421053 97.39442336866642 L 233.64210526316 92.9788178386668 L 237.41052631579 90.8321633086669 L 241.17894736842 94.52757851533312 L 244.94736842105 91.44035606266682 L 248.71578947368 91.79549104133352 L 252.48421052632 96.15550458933329 L 256.25263157895 98.36814163866669 L 260.02105263158 103.43248755666667 L 263.78947368421 102.47131717066694 L 267.55789473684 99.32135364533309 L 271.32631578947 98.05377086733338 L 275.09473684211 100.79209937800016 L 278.86315789474 103.7276096453335 L 282.63157894737 106.76414111133357 L 286.4 105.5969674533335 L 290.16842105263 102.97164491000011 L 293.93684210526 100.18332283800012 L 297.70526315789 99.81648322999996 L 301.47368421053 95.63434449333337 L 305.24210526316 94.8843822926667 L 309.01052631579 97.79926037333307 L 312.77894736842 103.63913342 L 316.54736842105 98.17391586133319 L 320.31578947368 95.70977506133354 L 324.08421052632 90.14747275866654 L 327.85263157895 89.58117503066694 L 331.62105263158 87.64377826799998 L 335.38947368421 83.76881054666644 L 339.15789473684 80.76880002933325 L 342.92631578947 83.4440666526665 L 346.69473684211 84.47527364800013 L 350.46315789474 83.3554810059998 L 354.23157894737 81.46988912733327 L 358 79.18914183666693 L 358 148 L 354.23157894737 148 L 350.46315789474 148 L 346.69473684211 148 L 342.92631578947 148 L 339.15789473684 148 L 335.38947368421 148 L 331.62105263158 148 L 327.85263157895 148 L 324.08421052632 148 L 320.31578947368 148 L 316.54736842105 148 L 312.77894736842 148 L 309.01052631579 148 L 305.24210526316 148 L 301.47368421053 148 L 297.70526315789 148 L 293.93684210526 148 L 290.16842105263 148 L 286.4 148 L 282.63157894737 148 L 278.86315789474 148 L 275.09473684211 148 L 271.32631578947 148 L 267.55789473684 148 L 263.78947368421 148 L 260.02105263158 148 L 256.25263157895 148 L 252.48421052632 148 L 248.71578947368 148 L 244.94736842105 148 L 241.17894736842 148 L 237.41052631579 148 L 233.64210526316 148 L 229.87368421053 148 L 226.10526315789 148 L 222.33684210526 148 L 218.56842105263 148 L 214.8 148 L 211.03157894737 148 L 207.26315789474 148 L 203.49473684211 148 L 199.72631578947 148 L 195.95789473684 148 L 192.18947368421 148 L 188.42105263158 148 L 184.65263157895 148 L 180.88421052632 148 L 177.11578947368 148 L 173.34736842105 148 L 169.57894736842 148 L 165.81052631579 148 L 162.04210526316 148 L 158.27368421053 148 L 154.50526315789 148 L 150.73684210526 148 L 146.96842105263 148 L 143.2 148 L 139.43157894737 148 L 135.66315789474 148 L 131.89473684211 148 L 128.12631578947 148 L 124.35789473684 148 L 120.58947368421 148 L 116.82105263158 148 L 113.05263157895 148 L 109.28421052632 148 L 105.51578947368 148 L 101.74736842105 148 L 97.978947368421 148 L 94.210526315789 148 L 90.442105263158 148 L 86.673684210526 148 L 82.905263157895 148 L 79.136842105263 148 L 75.368421052632 148 L 71.6 148 L 67.831578947368 148 L 64.063157894737 148 L 60.294736842105 148 L 56.526315789474 148 L 52.757894736842 148 L 48.989473684211 148 L 45.221052631579 148 L 41.452631578947 148 L 37.684210526316 148 L 33.915789473684 148 L 30.147368421053 148 L 26.378947368421 148 L 22.610526315789 148 L 18.842105263158 148 L 15.073684210526 148 L 11.305263157895 148 L 7.5368421052632 148 L 3.7684210526316 148 L 0 148"
																				class="highcharts-area" data-z-index="0"></path>
																			<path fill="none"
																				d="M 0 50.60003491933341 L 3.7684210526316 46.40669514800018 L 7.5368421052632 47.720379556000154 L 11.305263157895 45.006070483333374 L 15.073684210526 47.99487873266675 L 18.842105263158 47.994383351999986 L 22.610526315789 50.13530907333353 L 26.378947368421 50.6901461253336 L 30.147368421053 49.27649144200019 L 33.915789473684 47.201639556000245 L 37.684210526316 44.90309538866684 L 41.452631578947 42.72053171733333 L 45.221052631579 41.31060796599998 L 48.989473684211 41.527816367333486 L 52.757894736842 42.09877167999991 L 56.526315789474 43.58202782800001 L 60.294736842105 45.384497825333185 L 64.063157894737 46.994768140666906 L 67.831578947368 46.91589373599979 L 71.6 46.84997517733348 L 75.368421052632 47.461426324000186 L 79.136842105263 48.31911141000026 L 82.905263157895 52.61789923266684 L 86.673684210526 53.91867184933339 L 90.442105263158 58.034296746666755 L 94.210526315789 57.65662188599988 L 97.978947368421 56.50665093399999 L 101.74736842105 53.96948604600004 L 105.51578947368 50.344194152000014 L 109.28421052632 51.66311758733313 L 113.05263157895 51.306831094666876 L 116.82105263158 54.84480676266686 L 120.58947368421 59.16118394133326 L 124.35789473684 68.51811630933327 L 128.12631578947 78.86831959733358 L 131.89473684211 75.7473677720001 L 135.66315789474 83.13425783333349 L 139.43157894737 85.56150188800014 L 143.2 101.27634691733327 L 146.96842105263 117.81461905333336 L 150.73684210526 98.18329047733353 L 154.50526315789 95.54701250533344 L 158.27368421053 95.66419044466677 L 162.04210526316 97.08578878133332 L 165.81052631579 97.14835200733333 L 169.57894736842 102.36713047399974 L 173.34736842105 98.68145388933351 L 177.11578947368 99.93194348133356 L 180.88421052632 103.84572548533355 L 184.65263157895 117.18500065999996 L 188.42105263158 116.47579640133341 L 192.18947368421 110.99817792266657 L 195.95789473684 102.46399410600006 L 199.72631578947 97.89471156733325 L 203.49473684211 97.40730321666669 L 207.26315789474 90.73820565666672 L 211.03157894737 90.25833968200021 L 214.8 93.85526619199996 L 218.56842105263 90.03561840400002 L 222.33684210526 90.6707576166669 L 226.10526315789 97.14892782600023 L 229.87368421053 97.39442336866642 L 233.64210526316 92.9788178386668 L 237.41052631579 90.8321633086669 L 241.17894736842 94.52757851533312 L 244.94736842105 91.44035606266682 L 248.71578947368 91.79549104133352 L 252.48421052632 96.15550458933329 L 256.25263157895 98.36814163866669 L 260.02105263158 103.43248755666667 L 263.78947368421 102.47131717066694 L 267.55789473684 99.32135364533309 L 271.32631578947 98.05377086733338 L 275.09473684211 100.79209937800016 L 278.86315789474 103.7276096453335 L 282.63157894737 106.76414111133357 L 286.4 105.5969674533335 L 290.16842105263 102.97164491000011 L 293.93684210526 100.18332283800012 L 297.70526315789 99.81648322999996 L 301.47368421053 95.63434449333337 L 305.24210526316 94.8843822926667 L 309.01052631579 97.79926037333307 L 312.77894736842 103.63913342 L 316.54736842105 98.17391586133319 L 320.31578947368 95.70977506133354 L 324.08421052632 90.14747275866654 L 327.85263157895 89.58117503066694 L 331.62105263158 87.64377826799998 L 335.38947368421 83.76881054666644 L 339.15789473684 80.76880002933325 L 342.92631578947 83.4440666526665 L 346.69473684211 84.47527364800013 L 350.46315789474 83.3554810059998 L 354.23157894737 81.46988912733327 L 358 79.18914183666693"
																				class="highcharts-graph" data-z-index="1"
																				stroke="rgba(230, 231, 236, 1)" stroke-width="1"></path>
																			<path fill="none"
																				d="M -10 50.60003491933341 L 0 50.60003491933341 L 3.7684210526316 46.40669514800018 L 7.5368421052632 47.720379556000154 L 11.305263157895 45.006070483333374 L 15.073684210526 47.99487873266675 L 18.842105263158 47.994383351999986 L 22.610526315789 50.13530907333353 L 26.378947368421 50.6901461253336 L 30.147368421053 49.27649144200019 L 33.915789473684 47.201639556000245 L 37.684210526316 44.90309538866684 L 41.452631578947 42.72053171733333 L 45.221052631579 41.31060796599998 L 48.989473684211 41.527816367333486 L 52.757894736842 42.09877167999991 L 56.526315789474 43.58202782800001 L 60.294736842105 45.384497825333185 L 64.063157894737 46.994768140666906 L 67.831578947368 46.91589373599979 L 71.6 46.84997517733348 L 75.368421052632 47.461426324000186 L 79.136842105263 48.31911141000026 L 82.905263157895 52.61789923266684 L 86.673684210526 53.91867184933339 L 90.442105263158 58.034296746666755 L 94.210526315789 57.65662188599988 L 97.978947368421 56.50665093399999 L 101.74736842105 53.96948604600004 L 105.51578947368 50.344194152000014 L 109.28421052632 51.66311758733313 L 113.05263157895 51.306831094666876 L 116.82105263158 54.84480676266686 L 120.58947368421 59.16118394133326 L 124.35789473684 68.51811630933327 L 128.12631578947 78.86831959733358 L 131.89473684211 75.7473677720001 L 135.66315789474 83.13425783333349 L 139.43157894737 85.56150188800014 L 143.2 101.27634691733327 L 146.96842105263 117.81461905333336 L 150.73684210526 98.18329047733353 L 154.50526315789 95.54701250533344 L 158.27368421053 95.66419044466677 L 162.04210526316 97.08578878133332 L 165.81052631579 97.14835200733333 L 169.57894736842 102.36713047399974 L 173.34736842105 98.68145388933351 L 177.11578947368 99.93194348133356 L 180.88421052632 103.84572548533355 L 184.65263157895 117.18500065999996 L 188.42105263158 116.47579640133341 L 192.18947368421 110.99817792266657 L 195.95789473684 102.46399410600006 L 199.72631578947 97.89471156733325 L 203.49473684211 97.40730321666669 L 207.26315789474 90.73820565666672 L 211.03157894737 90.25833968200021 L 214.8 93.85526619199996 L 218.56842105263 90.03561840400002 L 222.33684210526 90.6707576166669 L 226.10526315789 97.14892782600023 L 229.87368421053 97.39442336866642 L 233.64210526316 92.9788178386668 L 237.41052631579 90.8321633086669 L 241.17894736842 94.52757851533312 L 244.94736842105 91.44035606266682 L 248.71578947368 91.79549104133352 L 252.48421052632 96.15550458933329 L 256.25263157895 98.36814163866669 L 260.02105263158 103.43248755666667 L 263.78947368421 102.47131717066694 L 267.55789473684 99.32135364533309 L 271.32631578947 98.05377086733338 L 275.09473684211 100.79209937800016 L 278.86315789474 103.7276096453335 L 282.63157894737 106.76414111133357 L 286.4 105.5969674533335 L 290.16842105263 102.97164491000011 L 293.93684210526 100.18332283800012 L 297.70526315789 99.81648322999996 L 301.47368421053 95.63434449333337 L 305.24210526316 94.8843822926667 L 309.01052631579 97.79926037333307 L 312.77894736842 103.63913342 L 316.54736842105 98.17391586133319 L 320.31578947368 95.70977506133354 L 324.08421052632 90.14747275866654 L 327.85263157895 89.58117503066694 L 331.62105263158 87.64377826799998 L 335.38947368421 83.76881054666644 L 339.15789473684 80.76880002933325 L 342.92631578947 83.4440666526665 L 346.69473684211 84.47527364800013 L 350.46315789474 83.3554810059998 L 354.23157894737 81.46988912733327 L 358 79.18914183666693 L 368 79.18914183666693"
																				visibility="visible" data-z-index="2"
																				class="highcharts-tracker-line"
																				stroke-linejoin="round"
																				stroke="rgba(192,192,192,0.0001)" stroke-width="21"></path></g>
																			<g data-z-index="0.1"
																				class="highcharts-markers highcharts-series-0 highcharts-area-series highcharts-color-0  highcharts-tracker"
																				transform="translate(0,0) scale(1 1)"
																				clip-path="none"></g>
																			<g data-z-index="0.1"
																				class="highcharts-series highcharts-series-1 highcharts-line-series "
																				transform="translate(0,0) scale(1 1)"
																				clip-path="url(#highcharts-dknsddu-1)">
																			<path fill="none"
																				d="M 0 73.0736479213331 L 3.7684210526316 80.20033501399976 L 7.5368421052632 81.20484019466643 L 11.305263157895 79.41050777999988 L 15.073684210526 85.16819652533351 L 18.842105263158 88.05265661000004 L 22.610526315789 93.20320880333344 L 26.378947368421 95.17480392600024 L 30.147368421053 91.45293850466643 L 33.915789473684 91.86710836466645 L 37.684210526316 95.55690965999995 L 41.452631578947 99.46557848600011 L 45.221052631579 98.55329193266684 L 48.989473684211 97.98560093266686 L 52.757894736842 95.8467683753331 L 56.526315789474 98.46510480066661 L 60.294736842105 96.83616201599975 L 64.063157894737 88.49499789999986 L 67.831578947368 87.8483704586665 L 71.6 85.74147891599992 L 75.368421052632 80.88864705000002 L 79.136842105263 81.66033846266679 L 82.905263157895 85.03895382333317 L 86.673684210526 89.50827602733354 L 90.442105263158 86.5181132079999 L 94.210526315789 88.3635293520002 L 97.978947368421 87.11886272133353 L 101.74736842105 85.32492068133317 L 105.51578947368 84.81613451999985"
																				class="highcharts-graph" data-z-index="1"
																				stroke="rgba(208, 80, 74, 1)" stroke-width="1.5"
																				visibility="hidden"></path>
																			<path fill="none"
																				d="M 0 73.0736479213331 L 3.7684210526316 80.20033501399976 L 7.5368421052632 81.20484019466643 L 11.305263157895 79.41050777999988 L 15.073684210526 85.16819652533351 L 18.842105263158 88.05265661000004 L 22.610526315789 93.20320880333344 L 26.378947368421 95.17480392600024 L 30.147368421053 91.45293850466643 L 33.915789473684 91.86710836466645 L 37.684210526316 95.55690965999995 L 41.452631578947 99.46557848600011 L 45.221052631579 98.55329193266684 L 48.989473684211 97.98560093266686 L 52.757894736842 95.8467683753331 L 56.526315789474 98.46510480066661 L 60.294736842105 96.83616201599975 L 64.063157894737 88.49499789999986 L 67.831578947368 87.8483704586665 L 71.6 85.74147891599992 L 75.368421052632 80.88864705000002 L 79.136842105263 81.66033846266679 L 82.905263157895 85.03895382333317 L 86.673684210526 89.50827602733354 L 90.442105263158 86.5181132079999 L 94.210526315789 88.3635293520002 L 97.978947368421 87.11886272133353 L 101.74736842105 85.32492068133317 L 105.51578947368 84.81613451999985"
																				class="highcharts-graph highcharts-zone-graph-0 highcharts-negative"
																				data-z-index="1" stroke="rgba(8, 102, 191, 1)"
																				stroke-width="1.5"
																				clip-path="url(#highcharts-dknsddu-129)"></path>
																			<path fill="none"
																				d="M 0 73.0736479213331 L 3.7684210526316 80.20033501399976 L 7.5368421052632 81.20484019466643 L 11.305263157895 79.41050777999988 L 15.073684210526 85.16819652533351 L 18.842105263158 88.05265661000004 L 22.610526315789 93.20320880333344 L 26.378947368421 95.17480392600024 L 30.147368421053 91.45293850466643 L 33.915789473684 91.86710836466645 L 37.684210526316 95.55690965999995 L 41.452631578947 99.46557848600011 L 45.221052631579 98.55329193266684 L 48.989473684211 97.98560093266686 L 52.757894736842 95.8467683753331 L 56.526315789474 98.46510480066661 L 60.294736842105 96.83616201599975 L 64.063157894737 88.49499789999986 L 67.831578947368 87.8483704586665 L 71.6 85.74147891599992 L 75.368421052632 80.88864705000002 L 79.136842105263 81.66033846266679 L 82.905263157895 85.03895382333317 L 86.673684210526 89.50827602733354 L 90.442105263158 86.5181132079999 L 94.210526315789 88.3635293520002 L 97.978947368421 87.11886272133353 L 101.74736842105 85.32492068133317 L 105.51578947368 84.81613451999985"
																				class="highcharts-graph highcharts-zone-graph-1 "
																				data-z-index="1" stroke="rgba(208, 80, 74, 1)"
																				stroke-width="1.5"
																				clip-path="url(#highcharts-dknsddu-130)"></path>
																			<path fill="none"
																				d="M -10 73.0736479213331 L 0 73.0736479213331 L 3.7684210526316 80.20033501399976 L 7.5368421052632 81.20484019466643 L 11.305263157895 79.41050777999988 L 15.073684210526 85.16819652533351 L 18.842105263158 88.05265661000004 L 22.610526315789 93.20320880333344 L 26.378947368421 95.17480392600024 L 30.147368421053 91.45293850466643 L 33.915789473684 91.86710836466645 L 37.684210526316 95.55690965999995 L 41.452631578947 99.46557848600011 L 45.221052631579 98.55329193266684 L 48.989473684211 97.98560093266686 L 52.757894736842 95.8467683753331 L 56.526315789474 98.46510480066661 L 60.294736842105 96.83616201599975 L 64.063157894737 88.49499789999986 L 67.831578947368 87.8483704586665 L 71.6 85.74147891599992 L 75.368421052632 80.88864705000002 L 79.136842105263 81.66033846266679 L 82.905263157895 85.03895382333317 L 86.673684210526 89.50827602733354 L 90.442105263158 86.5181132079999 L 94.210526315789 88.3635293520002 L 97.978947368421 87.11886272133353 L 101.74736842105 85.32492068133317 L 105.51578947368 84.81613451999985 L 115.51578947368 84.81613451999985"
																				visibility="visible" data-z-index="2"
																				class="highcharts-tracker-line"
																				stroke-linejoin="round"
																				stroke="rgba(192,192,192,0.0001)"
																				stroke-width="21.5"></path></g>
																			<g data-z-index="0.1"
																				class="highcharts-markers highcharts-series-1 highcharts-line-series  highcharts-tracker"
																				transform="translate(0,0) scale(1 1)"></g></g>
																			<text x="179" text-anchor="middle"
																				class="highcharts-title" data-z-index="4"
																				style="color:#333333;font-size:18px;display:none;fill:#333333;"
																				y="24"></text>
																			<text x="179" text-anchor="middle"
																				class="highcharts-subtitle" data-z-index="4"
																				style="color:#666666;fill:#666666;" y="24"></text>
																			<g
																				class="highcharts-axis-labels highcharts-xaxis-labels "
																				data-z-index="7"></g>
																			<g
																				class="highcharts-axis-labels highcharts-yaxis-labels "
																				data-z-index="7"></g></svg>
																	</div>
																</div>
															</div>
															<figure>
																<span class="app__color01--2pIY9"><i></i>당일</span>
																<span class="app__color02--c6PlO"><i></i>전일</span>
															</figure>
														</div>
													</div>
												</div>
												<div class="app__col-4--ls7AG">
													
												</div>
												<div class="app__col-4--ls7AG">
													<div class="app__SiseList--y53V_">
														<div class="app__header--2OuvG" style="cursor: pointer;">코인시세</div>
														<ul>
															<li><a href="/exchange?code=CRIX.UPBIT.KRW-BTC"><label>비트코인</label>
																<p class="app__data--2tSqF app__down--2bdgI down">
																		<span class="app__price--2O0u2">6,130,000 KRW</span><span
																			class="app__rate--30LLC">-0.24%</span>
																	</p></a></li>
															<li><a href="/exchange?code=CRIX.UPBIT.KRW-ETH"><label>이더리움</label>
																<p class="app__data--2tSqF app__up--eS0OI up">
																		<span class="app__price--2O0u2">197,700 KRW</span><span
																			class="app__rate--30LLC">+0.30%</span>
																	</p></a></li>
															<li><a href="/exchange?code=CRIX.UPBIT.KRW-XRP"><label>리플</label>
																<p class="app__data--2tSqF app__up--eS0OI up">
																		<span class="app__price--2O0u2">379 KRW</span><span
																			class="app__rate--30LLC">+1.61%</span>
																	</p></a></li>
															<li><a href="/exchange?code=CRIX.UPBIT.KRW-BCH"><label>비트코인캐시</label>
																<p class="app__data--2tSqF app__down--2bdgI down">
																		<span class="app__price--2O0u2">335,000 KRW</span><span
																			class="app__rate--30LLC">-0.53%</span>
																	</p></a></li>
															<li><a href="/exchange?code=CRIX.UPBIT.KRW-EOS"><label>이오스</label>
																<p class="app__data--2tSqF app__down--2bdgI down">
																		<span class="app__price--2O0u2">6,005 KRW</span><span
																			class="app__rate--30LLC">-0.99%</span>
																	</p></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</article>
						</div>	
					</div>
					<footer class="sub" style="margin-top: 0px;">
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
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>

<script>
	app.init('${ctx}');
	app.$$.init();
</script>
</html>