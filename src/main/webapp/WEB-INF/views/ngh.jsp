<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html lang="en">

<title>ONCE</title>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" media="all"
	href="https://cdn.upbit.com/server_assets/assets/application-eed45448fcc8d15913d4046f854336c3e6d7dc7618b691d2e0500aa6583b42aa.css">
<link rel="stylesheet" media="screen"
	href="https://cdn.upbit.com/KR_PC-common-1b0a4e1e53868b6001ef.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script async="" src="https://www.google-analytics.com/analytics.js"></script>
<script
	src="https://cdn.upbit.com/manifest-bundle-f95e81eead967f24e5c0.js"></script>
<script src="https://cdn.upbit.com/js/bluebird-3.3.4.min.js"
	integrity="sha384-Zum86V5Chub72Pcj/UopirJ0QwQ+LgKZFTlVMt/yaVwYbROQJl/q8Nj2e72vZel2"
	crossorigin="anonymous"></script>
<script src="https://cdn.upbit.com/js/jquery-3.2.1.min.js"
	integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f"
	crossorigin="anonymous"></script>
<script src="https://cdn.upbit.com/js/pc-inline-1.2.js"
	integrity="sha384-qTbmS4jWPoNJ/fbbtBgeNTj7u3P1Mlp0wn9pKGGp1+ehUyuSFYVGJosc800zYG+n"
	crossorigin="anonymous"></script>
<script async="" src="https://platform.twitter.com/widgets.js"></script>
<style data-styled="" data-styled-version="4.2.0"></style>

<script src="http://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="http://www.amcharts.com/lib/3/serial.js"></script>
<script src="http://www.amcharts.com/lib/3/themes/light.js"></script>
<script src="http://www.amcharts.com/lib/3/amstock.js"></script>
<style type="text/css">
html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
}

#chartdiv {
	width: 100%;
	height: 100%;
}
#markdown_notice_body {
	margin: 0;
	padding: 0;
	border: 0;
	word-break: break-all;
	width: 100%;
	padding: 0;
}

#markdown_notice_body * {
	background: #ffffff;
	color: #666;
	font-family: 'Noto Sans KR';
	line-height: 1.5em;
	font-size: 16px;
	box-sizing: border-box;
}

#markdown_notice_body p {
	padding: 0;
	margin: 1em 0;
	line-height: 1.5em;
}

#markdown_notice_body a:link, #markdown_notice_body a:visited,
	#markdown_notice_body a:hover {
	color: #165ab0;
	text-decoration: none;
}

#markdown_notice_body h1, #markdown_notice_body h2,
	#markdown_notice_body h3, #markdown_notice_body h4,
	#markdown_notice_body h5, #markdown_notice_body h6 {
	color: #2b2b2b;
	font-weight: 500;
	margin: 0.67em 0;
	height: auto;
}

#markdown_notice_body strong {
	font-weight: 500;
}

#markdown_notice_body h1 {
	font-size: 20px;
}

#markdown_notice_body h2 {
	font-size: 18px;
}

#markdown_notice_body h3, #markdown_notice_body h4,
	#markdown_notice_body h5, #markdown_notice_body h6 {
	font-size: 16px;
}

#markdown_notice_body del {
	color: #165ab0;
	text-decoration: none;
}

#markdown_notice_body em {
	color: #d80e35;
	font-style: normal;
}

#markdown_notice_body hr {
	background-color: #eeeeee;
	border-color: #eeeeee;
	color: #eeeeee;
	border-style: solid;
	display: block;
	border-width: 1px;
}

#markdown_notice_body pre {
	padding: 16px;
	overflow: auto;
	background-color: #f9fafc;
	border-radius: 5px;
	border-style: solid;
	border-color: #e3e5ec;
	border-width: 1px;
	margin: 1em 0;
}

#markdown_notice_body code {
	background: transparent;
}

#markdown_notice_body li p {
	margin: 0;
	padding: 0;
}

#markdown_notice_body ol>li, #markdown_notice_body ul>li {
	margin-left: 30px;
	padding-right: 30px;
	border-bottom: 0;
}

#markdown_notice_body ol>li {
	list-style: decimal;
}

#markdown_notice_body ul>li {
	list-style: initial;
}

#markdown_notice_body ul, #markdown_notice_body ol {
	margin: 1em 0;
}

#markdown_notice_body ul li ul, #markdown_notice_body ul li ol,
	#markdown_notice_body ol li ul, #markdown_notice_body ol li ol {
	margin: 0;
}

#markdown_notice_body blockquote {
	margin: 0;
	padding: 0 1em;
	/* color: #6a737d; */
	border-left: 0.25em solid #e9ecf1;
}

#markdown_notice_body blockquote>:first-child {
	margin-top: 0;
}

#markdown_notice_body blockquote>:last-child {
	margin-bottom: 0;
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
									<a style="cursor:pointer" title="UpBit" id="home">UpBit</a>
								</h1>
								<nav id="nav2">
									<a style="cursor:pointer" class="on" id="ngh" title="거래소">거래소</a>
									<a style="cursor:pointer" class="" id="ksa_d" title="입출금">입출금</a>
									<a style="cursor:pointer" class="" id="ksa_i" title="투자내역">투자내역</a>
									<a style="cursor:pointer" class="" id="kth" title="코인동향">코인동향</a>
									<a style="cursor:pointer" class="" id="kth2" title="고객센터">고객센터</a>
								</nav>
								<ul class="tnb" id="nav3">
									<li><a style="cursor:pointer" id="ksa" title="로그인">로그인</a></li>
									<li><a style="cursor:pointer" id="ksa_m" title="회원가입">회원가입</a></li>
								</ul>
							</section>
						</header>
					</article>
					<div class="" id="once">
						<div class="mainB">
							<section class="ty01">
								<article>
									<span class="titB link">
									 <a href="" class="select">
										<em> 
											<img src="https://static.upbit.com/logos/BTC.png" 	alt="https://static.upbit.com/logos/BTC.png">
										</em> 
										<strong>원스코인</strong>
										<p>ONCE/KRW</p>
									</a> 
									<a href="" class="Arrow">Arrow</a>
										<div class="exchangeList" style="display: block;"></div>
										<div class="inforTab">
											<dl>
												<dt class="text-replace">시세, 정보 텝</dt>
												<dd class="on">
													<a>시세</a>
												</dd>
												<dd class="">
													<a>정보</a>
												</dd>
											</dl>
										</div>
									</span>
									<div style="display: none;">
										<div class="scrollB">
											<div
												style="position: relative; overflow: hidden; width: 100%; height: 572px;">
												<div
													style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
													<span class="inforB"><div class="title">
															Bitcoin
															<div class="linkWrap">
																<a href="https://bitcoin.org/" target="_blank">웹사이트</a>
																<a href="https://bitcoin.org/bitcoin.pdf"
																	target="_blank">백서</a> <a href="https://btc.com/"
																	target="_blank">블록조회</a>
															</div>
														</div>
														<div class="tableLayout">
															<table>
																<colgroup>
																	<col width="100px">
																	<col>
																	<col width="100px">
																	<col>
																</colgroup>
																<tbody>
																	<tr>
																		<th>최초발행</th>
																		<td>2009년 1월</td>
																		<th>시가총액</th>
																		<td>106.8조원(19.04.22 기준)</td>
																	</tr>
																	<tr>
																		<th>상장거래소</th>
																		<td>103개(17.11.06 기준)</td>
																		<th>블록 생성주기</th>
																		<td>10분</td>
																	</tr>
																	<tr>
																		<th>채굴 보상량</th>
																		<td>현재 12.5 BTC (반감기 일정에 따라 감소예정)</td>
																		<th>총 발행한도</th>
																		<td>21,000,000</td>
																	</tr>
																	<tr>
																		<th>합의 프로토콜</th>
																		<td>PoW</td>
																	</tr>
																</tbody>
															</table>
														</div>
														<div class="title">코인 소개</div>
														<div class="desc">
															<p>
																<span>비트코인은 최초로 구현된 암호화폐입니다. 발행 및 유통을 관리하는 중앙권력이나
																	중간상인 없이, P2P 네트워크 기술을 이용하여 네트워크에 참여하는 사용자들이 주체적으로 화폐를
																	발행하고 이체내용을 공동으로 관리합니다. 이를 가능하게 한 블록체인 기술을 처음으로 코인에 도입한
																	것이 바로 비트코인입니다.<br>
															</p>
														</div>
														<div class="title">코인 특징</div>
														<div class="desc">
															<p>
														</div>
														<div class="title">핵심 가치</div>
														<div class="desc">
															<p>
																<span>(키워드: 통화로 사용될 수 있는 보편성 및 편의성)<br></span><span>
																	<br>
															</p>
														</div>
														<div class="title">개발자 정보</div>
														<div class="tableLayout">
															<table>
																<colgroup>
																	<col width="100px">
																	<col width="*">
																	<col width="100px">
																	<col width="*">
																</colgroup>
																<tbody>
																	<tr>
																		<th>대표인물</th>
																		<td>나카모토 사토시(가명)</td>
																	</tr>
																</tbody>
															</table>
														</div>
														<div class="etcNotice">
															위 정보는 코인에 대한 이해를 돕기 위해서 제공하는 것으로, 투자 권유를 목적으로 하지 않습니다.<br>제공되는
															정보는 오류 또는 지연이 발생할 수 있으며, 두나무는 제공된 정보에 의한 투자결과에 대해 법적인 책임을
															지지 않습니다.<br>
														</div>
														<div class="apiBox">
															<div>
																<iframe id="twitter-widget-0" scrolling="no"
																	frameborder="0" allowtransparency="true"
																	allowfullscreen="true"
																	class="twitter-timeline twitter-timeline-rendered"
																	data-widget-id="profile:bitcoin" title="트위터 타임라인"
																	style="position: static; visibility: visible; display: inline-block; width: 300px; height: 530px; padding: 0px; border: none; max-width: 100%; min-width: 180px; margin-top: 0px; margin-bottom: 0px; min-height: 200px;"></iframe>
															</div>
														</div></span>
												</div>
												<div
													style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">
													<div
														style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2);"></div>
												</div>
												<div
													style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">
													<div
														style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2);"></div>
												</div>
											</div>
										</div>
									</div>
									<div style="display: block;">
										<span class="marketB"><div class="down ty01">
												<span class="first">
												 <strong>6,122,000</strong>
												  <em>KRW</em>
												  </span>
												  <span>
												  <p class="tit">전일대비</p> 
														<strong>-0.37%</strong>
												<strong class="upDown">-23,000</strong></span>
											</div>
											<div class="ty02">
												<a href="#"><div class="highstock"
														data-highcharts-chart="0" style="overflow: hidden;">
														<div id="highcharts-b33avt4-0" dir="ltr"
															class="highcharts-container "
															style="position: relative; overflow: hidden; width: 140px; height: 50px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
															<svg version="1.1" class="highcharts-root"
																style="font-family: &amp; amp; quot; Lucida Grande&amp;amp; quot; , &amp; amp; quot; Lucida Sans Unicode&amp;amp; quot; , Arial , Helvetica, sans-serif; font-size: 12px;"
																xmlns="http://www.w3.org/2000/svg" width="140"
																height="50" viewBox="0 0 140 50">
																<desc>Created with Highcharts 7.0.3</desc>
																<defs>
																<clipPath id="highcharts-b33avt4-1">
																<rect x="0" y="0" width="140" height="50" fill="none"></rect></clipPath>
																<clipPath id="highcharts-b33avt4-32">
																<rect x="0" y="13" width="140" height="37" fill="none"></rect></clipPath>
																<clipPath id="highcharts-b33avt4-33">
																<rect x="0" y="0" width="140" height="13" fill="none"></rect></clipPath></defs>
																<rect fill="transparent" class="highcharts-background"
																	x="0" y="0" width="140" height="50" rx="0" ry="0"></rect>
																<rect fill="none" class="highcharts-plot-background"
																	x="0" y="0" width="140" height="50"></rect>
																<rect fill="none" class="highcharts-plot-border"
																	data-z-index="1" x="0" y="0" width="140" height="50"></rect>
																<g class="highcharts-grid highcharts-xaxis-grid "
																	data-z-index="1">
																<path fill="none" data-z-index="1"
																	class="highcharts-grid-line" d="M -0.5 0 L -0.5 50"
																	opacity="1"></path>
																<path fill="none" data-z-index="1"
																	class="highcharts-grid-line" d="M 69.5 0 L 69.5 50"
																	opacity="1"></path>
																<path fill="none" data-z-index="1"
																	class="highcharts-grid-line" d="M 139.5 0 L 139.5 50"
																	opacity="1"></path></g>
																<g class="highcharts-grid highcharts-yaxis-grid "
																	data-z-index="1">
																<path fill="none" stroke="#e6e6e6" stroke-width="1"
																	data-z-index="1" class="highcharts-grid-line"
																	d="M 0 50.5 L 140 50.5" opacity="1"></path>
																<path fill="none" stroke="#e6e6e6" stroke-width="1"
																	data-z-index="1" class="highcharts-grid-line"
																	d="M 0 -0.5 L 140 -0.5" opacity="1"></path></g>
																<g class="highcharts-axis highcharts-xaxis "
																	data-z-index="2">
																<path fill="none" class="highcharts-tick"
																	stroke="#ccd6eb" stroke-width="1"
																	d="M -0.5 50 L -0.5 60" opacity="1"></path>
																<path fill="none" class="highcharts-tick"
																	stroke="#ccd6eb" stroke-width="1"
																	d="M 69.5 50 L 69.5 60" opacity="1"></path>
																<path fill="none" class="highcharts-tick"
																	stroke="#ccd6eb" stroke-width="1"
																	d="M 140.5 50 L 140.5 60" opacity="1"></path>
																<path fill="none" class="highcharts-axis-line"
																	stroke="#ccd6eb" stroke-width="1" data-z-index="7"
																	d="M 0 50.5 L 140 50.5"></path></g>
																<g class="highcharts-axis highcharts-yaxis "
																	data-z-index="2">
																<path fill="none" class="highcharts-axis-line"
																	data-z-index="7" d="M 0 0 L 0 50"></path></g>
																<g class="highcharts-series-group" data-z-index="3">
																<g data-z-index="0.1"
																	class="highcharts-series highcharts-series-0 highcharts-area-series "
																	transform="translate(0,0) scale(1 1)"
																	clip-path="url(#highcharts-b33avt4-1)">
																<path fill="rgba( 210, 79, 69, 0.1)"
																	d="M 0 3.125 L 1.4 13.125 L 2.8 14.375 L 4.2 18.125 L 5.6 23.75 L 7 26.25 L 8.4 30 L 9.8 36.25 L 11.2 28.125 L 12.6 25.625 L 14 30.625 L 15.4 37.5 L 16.8 36.875 L 18.2 35 L 19.6 31.875 L 21 33.125 L 22.4 31.25 L 23.8 31.25 L 25.2 28.75 L 26.6 28.125 L 28 20.625 L 29.4 22.5 L 30.8 25.625 L 32.2 30 L 33.6 25.625 L 35 27.5 L 36.4 27.5 L 37.8 25 L 39.2 22.5 L 40.6 26.25 L 42 25 L 42 12.5 L 40.6 12.5 L 39.2 12.5 L 37.8 12.5 L 36.4 12.5 L 35 12.5 L 33.6 12.5 L 32.2 12.5 L 30.8 12.5 L 29.4 12.5 L 28 12.5 L 26.6 12.5 L 25.2 12.5 L 23.8 12.5 L 22.4 12.5 L 21 12.5 L 19.6 12.5 L 18.2 12.5 L 16.8 12.5 L 15.4 12.5 L 14 12.5 L 12.6 12.5 L 11.2 12.5 L 9.8 12.5 L 8.4 12.5 L 7 12.5 L 5.6 12.5 L 4.2 12.5 L 2.8 12.5 L 1.4 12.5 L 0 12.5"
																	class="highcharts-area" data-z-index="0"
																	visibility="hidden"></path>
																<path fill="rgba( 18, 97, 196, 0.1)"
																	d="M 0 3.125 L 1.4 13.125 L 2.8 14.375 L 4.2 18.125 L 5.6 23.75 L 7 26.25 L 8.4 30 L 9.8 36.25 L 11.2 28.125 L 12.6 25.625 L 14 30.625 L 15.4 37.5 L 16.8 36.875 L 18.2 35 L 19.6 31.875 L 21 33.125 L 22.4 31.25 L 23.8 31.25 L 25.2 28.75 L 26.6 28.125 L 28 20.625 L 29.4 22.5 L 30.8 25.625 L 32.2 30 L 33.6 25.625 L 35 27.5 L 36.4 27.5 L 37.8 25 L 39.2 22.5 L 40.6 26.25 L 42 25 L 42 12.5 L 40.6 12.5 L 39.2 12.5 L 37.8 12.5 L 36.4 12.5 L 35 12.5 L 33.6 12.5 L 32.2 12.5 L 30.8 12.5 L 29.4 12.5 L 28 12.5 L 26.6 12.5 L 25.2 12.5 L 23.8 12.5 L 22.4 12.5 L 21 12.5 L 19.6 12.5 L 18.2 12.5 L 16.8 12.5 L 15.4 12.5 L 14 12.5 L 12.6 12.5 L 11.2 12.5 L 9.8 12.5 L 8.4 12.5 L 7 12.5 L 5.6 12.5 L 4.2 12.5 L 2.8 12.5 L 1.4 12.5 L 0 12.5"
																	class="highcharts-area highcharts-zone-area-0 highcharts-negative"
																	data-z-index="0"
																	clip-path="url(#highcharts-b33avt4-32)"></path>
																<path fill="rgba( 210, 79, 69, 0.1)"
																	d="M 0 3.125 L 1.4 13.125 L 2.8 14.375 L 4.2 18.125 L 5.6 23.75 L 7 26.25 L 8.4 30 L 9.8 36.25 L 11.2 28.125 L 12.6 25.625 L 14 30.625 L 15.4 37.5 L 16.8 36.875 L 18.2 35 L 19.6 31.875 L 21 33.125 L 22.4 31.25 L 23.8 31.25 L 25.2 28.75 L 26.6 28.125 L 28 20.625 L 29.4 22.5 L 30.8 25.625 L 32.2 30 L 33.6 25.625 L 35 27.5 L 36.4 27.5 L 37.8 25 L 39.2 22.5 L 40.6 26.25 L 42 25 L 42 12.5 L 40.6 12.5 L 39.2 12.5 L 37.8 12.5 L 36.4 12.5 L 35 12.5 L 33.6 12.5 L 32.2 12.5 L 30.8 12.5 L 29.4 12.5 L 28 12.5 L 26.6 12.5 L 25.2 12.5 L 23.8 12.5 L 22.4 12.5 L 21 12.5 L 19.6 12.5 L 18.2 12.5 L 16.8 12.5 L 15.4 12.5 L 14 12.5 L 12.6 12.5 L 11.2 12.5 L 9.8 12.5 L 8.4 12.5 L 7 12.5 L 5.6 12.5 L 4.2 12.5 L 2.8 12.5 L 1.4 12.5 L 0 12.5"
																	class="highcharts-area highcharts-zone-area-1 undefined"
																	data-z-index="0"
																	clip-path="url(#highcharts-b33avt4-33)"></path>
																<path fill="none"
																	d="M 0 3.125 L 1.4 13.125 L 2.8 14.375 L 4.2 18.125 L 5.6 23.75 L 7 26.25 L 8.4 30 L 9.8 36.25 L 11.2 28.125 L 12.6 25.625 L 14 30.625 L 15.4 37.5 L 16.8 36.875 L 18.2 35 L 19.6 31.875 L 21 33.125 L 22.4 31.25 L 23.8 31.25 L 25.2 28.75 L 26.6 28.125 L 28 20.625 L 29.4 22.5 L 30.8 25.625 L 32.2 30 L 33.6 25.625 L 35 27.5 L 36.4 27.5 L 37.8 25 L 39.2 22.5 L 40.6 26.25 L 42 25"
																	class="highcharts-graph" data-z-index="1"
																	stroke="#D24F45" stroke-width="1" visibility="hidden"></path>
																<path fill="none"
																	d="M 0 3.125 L 1.4 13.125 L 2.8 14.375 L 4.2 18.125 L 5.6 23.75 L 7 26.25 L 8.4 30 L 9.8 36.25 L 11.2 28.125 L 12.6 25.625 L 14 30.625 L 15.4 37.5 L 16.8 36.875 L 18.2 35 L 19.6 31.875 L 21 33.125 L 22.4 31.25 L 23.8 31.25 L 25.2 28.75 L 26.6 28.125 L 28 20.625 L 29.4 22.5 L 30.8 25.625 L 32.2 30 L 33.6 25.625 L 35 27.5 L 36.4 27.5 L 37.8 25 L 39.2 22.5 L 40.6 26.25 L 42 25"
																	class="highcharts-graph highcharts-zone-graph-0 highcharts-negative"
																	data-z-index="1" stroke="#0966C6" stroke-width="1"
																	clip-path="url(#highcharts-b33avt4-32)"></path>
																<path fill="none"
																	d="M 0 3.125 L 1.4 13.125 L 2.8 14.375 L 4.2 18.125 L 5.6 23.75 L 7 26.25 L 8.4 30 L 9.8 36.25 L 11.2 28.125 L 12.6 25.625 L 14 30.625 L 15.4 37.5 L 16.8 36.875 L 18.2 35 L 19.6 31.875 L 21 33.125 L 22.4 31.25 L 23.8 31.25 L 25.2 28.75 L 26.6 28.125 L 28 20.625 L 29.4 22.5 L 30.8 25.625 L 32.2 30 L 33.6 25.625 L 35 27.5 L 36.4 27.5 L 37.8 25 L 39.2 22.5 L 40.6 26.25 L 42 25"
																	class="highcharts-graph highcharts-zone-graph-1 "
																	data-z-index="1" stroke="#D24F45" stroke-width="1"
																	clip-path="url(#highcharts-b33avt4-33)"></path>
																<path fill="none"
																	d="M -10 3.125 L 0 3.125 L 1.4 13.125 L 2.8 14.375 L 4.2 18.125 L 5.6 23.75 L 7 26.25 L 8.4 30 L 9.8 36.25 L 11.2 28.125 L 12.6 25.625 L 14 30.625 L 15.4 37.5 L 16.8 36.875 L 18.2 35 L 19.6 31.875 L 21 33.125 L 22.4 31.25 L 23.8 31.25 L 25.2 28.75 L 26.6 28.125 L 28 20.625 L 29.4 22.5 L 30.8 25.625 L 32.2 30 L 33.6 25.625 L 35 27.5 L 36.4 27.5 L 37.8 25 L 39.2 22.5 L 40.6 26.25 L 42 25 L 52 25"
																	visibility="visible" data-z-index="2"
																	class="highcharts-tracker-line" stroke-linejoin="round"
																	stroke="rgba(192,192,192,0.0001)" stroke-width="21"></path></g>
																<g data-z-index="0.1"
																	class="highcharts-markers highcharts-series-0 highcharts-area-series  highcharts-tracker"
																	transform="translate(0,0) scale(1 1)"></g></g>
																<text x="70" text-anchor="middle"
																	class="highcharts-title" data-z-index="4"
																	style="color:#333333;font-size:18px;display:none;fill:#333333;"
																	y="24"></text>
																<text x="70" text-anchor="middle"
																	class="highcharts-subtitle" data-z-index="4"
																	style="color:#666666;fill:#666666;" y="24"></text>
																<g class="highcharts-axis-labels highcharts-xaxis-labels "
																	data-z-index="7"></g>
																<g 	class="highcharts-axis-labels highcharts-yaxis-labels "
																	data-z-index="7"></g>
																	</svg>
														</div>
													</div></a>
											</div>
											<div class="ty03">
												<dl class="first">
													<dt>고가</dt>
													<dd>
														<strong class="up"></strong>
													</dd>
													<dt>저가</dt>
													<dd>
														<strong class="down"></strong>
													</dd>
												</dl>
												<dl>
													<dt>거래량(24H)</dt>
													<dd>
														<strong></strong>&nbsp;<i class=""></i>
													</dd>
													<dt>거래대금(24H)</dt>
													<dd>
														<strong class=""></strong>&nbsp;<i class=""></i>
													</dd>
												</dl>
											</div> </span>
											 <span class="graphB" id="exchangeChartiq" style="display: block;">
											 <div id="chartIQexchangeChartiq" class="">
												<ciq-ui-wrapper> 
												<span></span> 
												<span></span>
												<span></span>
											
												</ciq-ui-wrapper>
												
												<!-- 차트 시작 -->
												<div class="exchangeChartiq ciq-chart-area">
													<div id="chartContainerexchangeChartiq"
														class="chartContainer toolbarOn"
														style="background-color: rgb(255, 255, 255);">
														
														<div class=""></div>
														<span class="stx-btn stx_annotation_save"
															style="display: none;" id="annotationSave"><translate
																original="save">save</translate></span><span
															class="stx-btn stx_annotation_cancel"
															style="display: none; margin-left: 10px;"
															id="annotationCancel"><translate original="cancel">cancel</translate></span>
														
														<div id="mSticky"
															style="display: none; top: 33px; right: 221.5px;">
															<span id="mStickyInterior" style="display: none;"></span>
															<span id="mStickyRightClick" class="rightclick_drawing"><span
																class="overlayEdit stx-btn" style="display: none"><span>&nbsp;</span></span>
																<span id="overlayTrashCan" class="stx-btn"
																style="display: none"><span>&nbsp;</span></span> <span
																id="mouseDeleteInstructions" style="display: none;"><span><translate
																			original="(">(</translate></span><span id="mouseDeleteText"><translate
																			original="right-click to delete">right
																		click to delete</translate></span><span id="mouseManageText"><translate
																			original="right-click to manage"> /
																		manage</translate></span><span><translate original=")">)</translate></span></span></span>
														</div>
														<div class="stx_crosshair stx_crosshair_x" style="left: 1037.5px; display: none;" id="crossX"></div>
														<div class="stx_crosshair stx_crosshair_y" style="top: 171px; left: 0px; width: 894px; display: none;"	id="crossY"></div>
														<div class="stx_chart_controls" style="display: block; bottom: 119px;" id="chartControls">
														
														</div>
														<div class="stx-float-date"style="left: 996.5px; bottom: 77px; visibility: hidden;" id="floatDate"></div>
														<div class="stx-panel-control" id="iconsTemplate">
															<div class="stx-panel-title"></div>
															<div class="stx-btn-panel">
																<span class="stx-ico-up"></span>
															</div>
															<div class="stx-btn-panel">
																<span class="stx-ico-focus"></span>
															</div>
															<div class="stx-btn-panel">
																<span class="stx-ico-down"></span>
															</div>
															<div class="stx-btn-panel">
																<span class="stx-ico-edit"></span>
															</div>
															<div class="stx-btn-panel">
																<span class="stx-ico-close"></span>
															</div>
														</div>
														<div class="stx-baseline-handle" style="display: none;" id="baselineHandle"></div>
														<div class="stx-holder stx-panel-chart" cq-panel-name="chart" 	style="right: 0px; top: 0px; left: 0px; height: 308px; display: block;">
															<div class="stx-subholder" cq-panel-name="chart" style="z-index: 1; left: 0px; width: 901px; top: 0px; height: 278px;">
																<div class="stx-panel-control stx-show stx-chart-panel" id="iconsTemplate">
																	<div class="stx-panel-title chart-title">BTC/KRW</div>
																	<div class="stx-btn-panel" style="display: none;">
																		<span class="stx-ico-up"></span>
																	</div>
																	<div class="stx-btn-panel" style="">
																		<span class="stx-ico-focus"></span>
																	</div>
																	<div class="stx-btn-panel">
																		<span class="stx-ico-down"></span>
																	</div>
																	<div class="stx-btn-panel" style="display: none;">
																		<span class="stx-ico-edit"></span>
																	</div>
																	<div class="stx-btn-panel" style="display: none;">
																		<span class="stx-ico-close"></span>
																	</div>
																</div>
																<div id="home" class="stx_jump_today home" 	style="display: none">
																	<span></span>
																</div>
															</div>
														</div> 
														<stx-hu-tooltip style="left: -1000px; right: auto; top: 131px;">
														<stx-hu-tooltip-field auto=""> <stx-hu-tooltip-field-name>일시:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value>04/22</stx-hu-tooltip-field-value></stx-hu-tooltip-field>
														<stx-hu-tooltip-field auto=""> <stx-hu-tooltip-field-name>시가:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value>6,128,000</stx-hu-tooltip-field-value></stx-hu-tooltip-field>
														<stx-hu-tooltip-field auto=""> <stx-hu-tooltip-field-name>고가:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value>6,134,000</stx-hu-tooltip-field-value></stx-hu-tooltip-field>
														<stx-hu-tooltip-field auto=""> <stx-hu-tooltip-field-name>저가:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value>6,121,000</stx-hu-tooltip-field-value></stx-hu-tooltip-field>
														<stx-hu-tooltip-field auto=""> <stx-hu-tooltip-field-name>종가:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value>6,123,000</stx-hu-tooltip-field-value></stx-hu-tooltip-field>
														<stx-hu-tooltip-field auto=""> <stx-hu-tooltip-field-name>거래량:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value>123.1</stx-hu-tooltip-field-value></stx-hu-tooltip-field></stx-hu-tooltip>
														<!-- 메인차트 -->
														<div id="chartdiv"></div>
													<!-- 	<canvas height="385" width="966" style="position: absolute; left: 0px; width: 966px; height: 385px;"></canvas>
														<canvas height="385" width="966" 	style="position: absolute; left: 0px; display: none; width: 966px; height: 385px;"></canvas>
														<canvas height="385" width="966" 	style="position: absolute; left: 0px; display: none; width: 966px; height: 385px;"></canvas> -->
													</div>
												</div>
											</div> 
										</span>
									</div>
								</article>
								<div class="halfB">
									<div class="leftB">
										<article>
											<span class="cell03 tabB type02"><div class="askPrice">
													<ul class="top">
														<li><a href="#" class="on" title="일반호가">일반호가</a></li>
														<li><a href="#" class="" title="누적호가">누적호가</a></li>
														<li><a href="#" class="" title="호가주문">호가주문</a>
															<div class="tooltip">
																<i></i>업데이트된 호가주문 기능으로 빠르고 간편하게 주문해보세요.<a href="">X</a>
															</div></li>
													</ul>
												</div>
												</span>
												<span class="askpriceB"><div class="scrollB" style="height: 629px;">
													<div style="position: relative; overflow: hidden; width: 100%; height: 629px;">
														<div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
															<table>
																<colgroup>
																	<col width="42">
																	<col width="120">
																	<col width="*">
																	<col width="120">
																	<col width="42">
																</colgroup>
																<tbody>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 12.8097%;">-</div>
																				<p>0.766</p></a></td>
																		<td class="downB"><a href="#"><div class="ty03">
																					<strong>6,136,000</strong>
																				</div>
																				<div class="ty02">-0.15%</div></a></td>
																		<td colspan="2" rowspan="15" class="inner01"><dl
																				class="first">
																				<dt>거래량</dt>
																				<dd>
																					6,642 <i>BTC</i>
																				</dd>
																				<dt>거래대금</dt>
																				<dd>
																					40,636 <i><img
																						src="https://cdn.upbit.com/images/ico_million.a7e2ecb.png"
																						alt="백만원"></i><em>(최근24시간)</em>
																				</dd>
																			</dl>
																			<dl>
																				<dt>52주 최고</dt>
																				<dd class="up">
																					10,963,000<em>(2018.05.06)</em>
																				</dd>
																				<dt>52주 최저</dt>
																				<dd class="down">
																					3,562,000<em>(2018.12.15)</em>
																				</dd>
																			</dl>
																			<dl>
																				<dt>전일종가</dt>
																				<dd>6,145,000</dd>
																				<dt>당일고가</dt>
																				<dd class="up">
																					6,163,000<em class="up">+0.29%</em>
																				</dd>
																				<dt>당일저가</dt>
																				<dd class="down">
																					6,092,000<em class="down">-0.86%</em>
																				</dd>
																			</dl></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 27.6096%;">-</div>
																				<p>1.652</p></a></td>
																		<td class="downB"><a href="#"><div 	class="ty03">
																					<strong>6,135,000</strong>
																				</div>
																			<div class="ty02">-0.16%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div 	style="width: 8.86624%;">-</div>
																				<p>0.530</p></a></td>
																		<td class="downB"><a href="#"><div 	class="ty03">
																					<strong>6,134,000</strong>
																				</div>
																				<div class="ty02">-0.18%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div 		style="width: 51.3802%;">-</div>
																				<p>3.074</p></a></td>
																		<td class="downB"><a href="#"><div 	class="ty03">
																					<strong>6,133,000</strong>
																				</div>
																				<div class="ty02">-0.20%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div 	style="width: 77.812%;">-</div>
																				<p>4.655</p></a></td>
																		<td class="downB"><a href="#"><div 	class="ty03">
																					<strong>6,132,000</strong>
																				</div>
																				<div class="ty02">-0.21%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 83.585%;">-</div>
																				<p>5.000</p></a></td>
																		<td class="downB"><a href="#"><div class="ty03">
																					<strong>6,131,000</strong>
																				</div>
																				<div class="ty02">-0.23%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 100%;">-</div>
																				<p>5.982</p></a></td>
																		<td class="downB"><a href="#"><div class="ty03">
																					<strong>6,130,000</strong>
																				</div>
																				<div class="ty02">-0.24%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div
																					style="width: 37.221%;">-</div>
																				<p>2.227</p></a></td>
																		<td class="downB"><a href="#"><div
																					class="ty03">
																					<strong>6,129,000</strong>
																				</div>
																				<div class="ty02">-0.26%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div
																					style="width: 25.8843%;">-</div>
																				<p>1.548</p></a></td>
																		<td class="downB"><a href="#"><div
																					class="ty03">
																					<strong>6,128,000</strong>
																				</div>
																				<div class="ty02">-0.28%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 19.1055%;">-</div>
																				<p>1.143</p></a></td>
																		<td class="downB"><a href="#"><div 				class="ty03">
																					<strong>6,127,000</strong>
																				</div>
																				<div class="ty02">-0.29%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 88.1533%;">-</div>
																				<p>5.273</p></a></td>
																		<td class="downB"><a href="#">
																				<div class="ty03">
																					<strong>6,126,000</strong>
																				</div>
																				<div class="ty02">-0.31%</div>
																		</a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 24.4421%;">-</div>
																				<p>1.462</p></a></td>
																		<td class="downB"><a href="#"><div 	class="ty03">
																					<strong>6,125,000</strong>
																				</div>
																				<div class="ty02">-0.33%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 50.151%;">-</div>
																				<p>3.000</p></a></td>
																		<td class="downB"><a href="#"><div class="ty03">
																					<strong>6,124,000</strong>
																				</div>
																			<div class="ty02">-0.34%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#">
																			<div style="width: 5.80194%;">-</div>
																				<p>0.347</p></a></td>
																		<td class="downB"><a href="#"><div class="ty03">
																					<strong>6,123,000</strong>
																				</div>
																				<div class="ty02">-0.36%</div></a></td>
																	</tr>
																	<tr class="down">
																		<td></td>
																		<td class="bar"><a href="#"><div style="width: 55.9475%;">-</div>
																				<p>3.347</p></a></td>
																		<td class="downB positionR"><a href="#"><div class="ty03">
																					<span class="selected"></span><strong>6,122,000</strong>
																				</div>
																				<div class="ty02">-0.37%</div></a></td>
																	</tr>
																	<tr class="up">
																		<td colspan="2" rowspan="15" class="inner02"><dl>
																				<dt>체결강도</dt>
																				<dd>+113.11%</dd>
																			</dl>
																			<div class="overflow">
																				<table>
																					<colgroup>
																						<col width="50%">
																						<col width="*">
																					</colgroup>
																					<thead>
																						<tr>
																							<th>체결가</th>
																							<th>체결량</th>
																						</tr>
																					</thead>
																					<tbody>
																						<tr>
																							<td>6,122,000</td>
																							<td class="up">2.000</td>
																						</tr>
																						<tr>
																							<td>6,122,000</td>
																							<td class="up">0.092</td>
																						</tr>
																						<tr>
																							<td>6,122,000</td>
																							<td class="down">0.289</td>
																						</tr>
																					</tbody>
																				</table>
																			</div></td>
																		<td class="downB"><a href="#">
																				<div class="ty03">
																					<strong>6,121,000</strong>
																				</div>
																				<div class="ty02">-0.39%</div>
																		</a></td>
																		<td class="bar"><a href="#"><div
																					style="width: 9.20584%;">-</div>
																				<p>0.551</p> </a></td>
																		<td class="last"></td>
																	</tr>
																	<tr class="up">
																		<td class="downB"><a href="#">
																				<div class="ty03">
																					<strong>6,120,000</strong>
																				</div>
																				<div class="ty02">-0.41%</div>
																		</a></td>
																		<td class="bar"><a href="#">
																				<div style="width: 11.4826%;">-</div>
																				<p>0.687</p>
																		</a></td>
																		<td class="last"></td>
																	</tr>
																	<tr class="up">
																		<td class="downB"><a href="#">
																				<div class="ty03">
																					<strong>6,119,000</strong>
																				</div>
																				<div class="ty02">-0.42%</div>
																		</a></td>
																		<td class="bar"><a href="#">
																				<div style="width: 31.3608%;">-</div>
																				<p>1.876</p>
																		</a></td>
																		<td class="last"></td>
																	</tr>
																	<tr class="up">
																		<td class="downB"><a href="#">
																				<div class="ty03">
																					<strong>6,118,000</strong>
																				</div>
																				<div class="ty02">-0.44%</div>
																		</a></td>
																		<td class="bar"><a href="#">
																				<div style="width: 34.2546%;">-</div>
																				<p>2.049</p>
																		</a></td>
																		<td class="last"></td>
																	</tr>
																	<tr class="up">
																		<td class="downB"><a href="#">
																				<div class="ty03">
																					<strong>6,117,000</strong>
																				</div>
																				<div class="ty02">-0.46%</div>
																		</a></td>

																		<td class="bar"><a href="#">
																				<div style="width: 66.135%;">-</div>
																				<p>3.956</p>
																		</a></td>
																		<td class="last"></td>
																	</tr>
																	<tr class="up">
																		<td class="downB"><a href="#"><div
																					class="ty03">
																					<strong>6,116,000</strong>
																				</div>
																				<div class="ty02">-0.47%</div></a></td>
																		<td class="bar"><a href="#"><div
																					style="width: 74.9488%;">-</div>
																				<p>4.483</p></a></td>
																		<td class="last"></td>
																	</tr>
																	<tr class="up">
																		<td class="downB"><a href="#"><div
																					class="ty03">
																					<strong>6,115,000</strong>
																				</div>
																				<div class="ty02">-0.49%</div></a></td>
																		<td class="bar"><a href="#"><div
																					style="width: 37.3129%;">-</div>
																				<p>2.232</p></a></td>
																		<td class="last"></td>
																	</tr>
																	<tr class="up">
																		<td class="downB"><a href="#"><div
																					class="ty03">
																					<strong>6,114,000</strong>
																				</div>
																				<div class="ty02">-0.50%</div></a></td>
																		<td class="bar"><a href="#"><div
																					style="width: 0.933641%;">-</div>
																				<p>0.056</p></a></td>
																		<td class="last"></td>
																	</tr>
																</tbody>
															</table>
														</div>
														<div style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">
															<div style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px; transform: translateX(0px);"></div>
														</div>
														<div style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">
															<div style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 292px; transform: translateY(166.269px);"></div>
														</div>
													</div>
												</div>
												<table class="total">
													<colgroup>
														<col width="42">
														<col width="120">
														<col width="*">
														<col width="120">
														<col width="42">
													</colgroup>
													<tbody>
														<tr>
															<td></td>
															<td class="rAlign" style="font-size: 12px;">40.005</td>
															<td class="askPrice"><p>
																	주문잔량합계<i>(BTC)</i>
																</p></td>
															<td class="lAlign" style="font-size: 12px;">27.692</td>
															<td class="last"></td>
														</tr>
													</tbody>
												</table>
											</span>
										</article>
									</div>
									<div class="rightB">
										<article>
											<span class="tabB"><ul class="top">
													<li class="t2"><a href="#" class="on" title="매수">매수</a></li>
													<li class="t3"><a href="#" class="" title="매도">매도</a></li>
													<li class="t4"><a href="#" class="" title="거래내역">거래내역</a></li>
												</ul></span><span class="orderB"><div style="height: 347px;">
													<dl>
														<dt class="checkOption">
															<strong>주문구분 <a href="#" class="tooltipDown"><div>
																		<h5>[지정가 주문]</h5>
																		주문 수량과 가격을 직접 결정하는 주문입니다. 매매체결 여부보다 가격을 우선으로 생각할 때 사용
																		합니다.
																		<h5>[시장가 주문]</h5>
																		매수 시 주문 금액/매도 시 주문 수량만 설정하면, 시장가격으로 즉시 체결시키는 주문입니다.
																		빠르게 매매를 체결하고 싶을 때 사용합니다.
																	</div></a></strong>
														</dt>
														<dd class="checkOption">
															<span class="chkB"><a class="on"><em>-</em>지정가</a><a
																class="disable"><em>-</em>시장가</a></span>
														</dd>
														<dt class="price">
															<strong>주문가능</strong>
														</dt>
														<dd class="price twinLIne">
															<strong>0</strong> <i>KRW</i>
														</dd>
														<dt class="marginB10">
															<strong>가격</strong> <i>(KRW)</i>
														</dt>
														<dd class="marginB10">
															<div class="inputB">
																<input type="text" class="txt" value="6,119,000"><a
																	href="#" class="minus" title="-">-</a><a href="#"
																	class="plus" title="+">+</a>
															</div>
														</dd>
														<dt class="marginB6">
															<strong>수량</strong> <i>(BTC)</i>
														</dt>
														<dd class="marginB6">
															<input type="text" class="txt All" placeholder="0"
																value="">
														</dd>
														<dd class="Quantity marginNone">
															<a href="#" class="qtBt">10%</a><a href="#" class="qtBt">25%</a><a
																href="#" class="qtBt">50%</a><a href="#" class="qtBt">100%</a><a
																class="qtInput">직접입력</a>
														</dd>
														<dt class="marginB6">
															<strong>주문총액</strong> <i>(KRW)</i>
														</dt>
														<dd class="marginB6">
															<input type="txt" class="txt All" placeholder="0"
																value="0.00">
														</dd>
														<dt></dt>
														<dd></dd>
													</dl>
													<div class="FixedBottom">
														<span class="commission"><p class="fr last">수수료(부가세
																포함): 0.05%</p>
															<p class="fr">최소주문금액: 1,000 KRW</p></span>
														<ul class="btnB">
															<li class="ty01"><a title="회원가입" href="/signup">회원가입</a></li>
															<li class="ty02"><a title="로그인" href="/signin">로그인</a></li>
														</ul>
													</div>
												</div></span>
										</article>
										<article>
											<span class="dataNone" id="exchangeChartiq1"><div id="chartIQexchangeChartiq1" class="">
												<ciq-ui-wrapper>
													 	<span></span>
													 	<span></span>
														<span></span>
													<nav class="ciq-nav-mini">
														<div class="left">
															<strong><translate original="미니차트">미니차트</translate></strong>
														</div>
															<div class="right-mini">
																<span>
																	<menu-select id="periodicitySelect1">
																	<span class="title">1일</span>
																		<menu-select-options classname="menu-hover">
																			<menu-option classname="option"> 
																				<translate original="1 Min">1분</translate> 
																			</menu-option> 
																		<menu-option classname="option">
																		 		<translate original="3 Min">3분</translate> 
																		</menu-option> 
																		</menu-select-options> 
																</menu-select> 
															</span>
														</div>
													</nav>
													</ciq-ui-wrapper>
													<div class="exchangeChartiq1 ciq-chart-area">
														<div id="chartContainerexchangeChartiq1"
															class="chartContainer toolbarOn"
															style="background-color: rgb(255, 255, 255);">
															<div class=""></div>
															<span class="stx-btn stx_annotation_save"
																style="display: none;" id="annotationSave"> <translate
																	original="save">save</translate>
															</span> <span class="stx-btn stx_annotation_cancel"
																style="display: none; margin-left: 10px;"
																id="annotationCancel"> <translate
																	original="cancel">cancel</translate>
															</span>
															<div id="mSticky">
																<span id="mStickyInterior"></span> <span
																	id="mStickyRightClick" class=""> <span
																	class="overlayEdit stx-btn" style="display: none">
																		<span>&nbsp;</span>
																</span> <span id="overlayTrashCan" class="stx-btn"
																	style="display: none"> <span>&nbsp;</span>
																</span> <span id="mouseDeleteInstructions"> <span>
																			<translate original="(">(</translate>
																	</span> <span id="mouseDeleteText"> <translate
																				original="right-click to delete">right
																			click to delete</translate>
																	</span> <span id="mouseManageText"> <translate
																				original="right-click to manage">/manage</translate>
																	</span> <span> <translate original=")">)</translate>
																	</span>
																</span>
																</span>
															</div>
															<div class="stx_crosshair stx_crosshair_x"
																style="display: none;" id="crossX"></div>
															<div class="stx_crosshair stx_crosshair_y"
																style="display: none;" id="crossY"></div>
															<div class="stx_chart_controls"
																style="display: block; bottom: 91.6px;"
																id="chartControls">
																<div id="chartSize">
																	<span id="zoomOut" class="stx-zoom-out">
																		<div class="zoom-div">
																			<translate original="*Alt+스크롤: 차트 기간 확대/축소">*Alt+스크롤:
																			차트 기간 확대/축소</translate>
																		</div>
																	</span> <span id="zoomIn" class="stx-zoom-in">
																		<div class="zoom-div">
																			<translate original="*Alt+스크롤: 차트 기간 확대/축소">*Alt+스크롤:차트
																			기간 확대/축소</translate>
																		</div>
																	</span>
																</div>
															</div>
															<div class="stx-float-date"
																style="visibility: hidden; left: 0px; bottom: 49.6px;"
																id="floatDate"></div>
															<div class="stx-ico-handle" style="display: none;"
																id="handleTemplate">
																<span></span>
															</div>
															<div class="stx-panel-control" id="iconsTemplate">
																<div class="stx-panel-title"></div>
																<div class="stx-btn-panel">
																	<span class="stx-ico-up"></span>
																</div>
																<div class="stx-btn-panel">
																	<span class="stx-ico-focus"></span>
																</div>
																<div class="stx-btn-panel">
																	<span class="stx-ico-down"></span>
																</div>
																<div class="stx-btn-panel">
																	<span class="stx-ico-edit"></span>
																</div>
																<div class="stx-btn-panel">
																	<span class="stx-ico-close"></span>
																</div>
															</div>
															<div class="stx-baseline-handle" style="display: none;"
																id="baselineHandle"></div>
															<div class="stx-holder stx-panel-chart"
																cq-panel-name="chart"
																style="right: 0px; top: 0px; left: 0px; height: 198.4px; display: block;">
																<div class="stx-subholder" cq-panel-name="chart"
																	style="z-index: 1; left: 0px; width: 415px; top: 0px; height: 168.4px;">
																	<div class="stx-panel-control stx-show stx-chart-panel"
																		id="iconsTemplate">
																		<div class="stx-panel-title chart-title">BTC/KRW</div>
																		<div class="stx-btn-panel" style="display: none;">
																			<span class="stx-ico-up"></span>
																		</div>
																		<div class="stx-btn-panel" style="">
																			<span class="stx-ico-focus"></span>
																		</div>
																		<div class="stx-btn-panel">
																			<span class="stx-ico-down"></span>
																		</div>
																		<div class="stx-btn-panel" style="display: none;">
																			<span class="stx-ico-edit"></span>
																		</div>
																		<div class="stx-btn-panel" style="display: none;">
																			<span class="stx-ico-close"></span>
																		</div>
																	</div>
																	<div id="home" class="stx_jump_today home"
																		style="display: none">
																		<span></span>
																	</div>
																</div>
															</div>
															<div class="stx-ico-handle"
																style="display: none; left: 0px; width: 415px;"
																id="null">
																<span></span>
															</div>
															<div class="stx-holder stx-panel-study"
																cq-panel-name="volume"
																style="right: 0px; top: 198.4px; left: 0px; height: 49.6px; display: block;">
																<div class="stx-subholder" cq-panel-name="volume"
																	style="z-index: 1; left: 0px; width: 415px; top: 0px; height: 49.6px;">
																	<div class="stx-panel-control stx-show"
																		id="iconsTemplate">
																		<div class="stx-panel-title">Volume</div>
																		<div class="stx-btn-panel">
																			<span class="stx-ico-up"></span>
																		</div>
																		<div class="stx-btn-panel" style="display: none;">
																			<span class="stx-ico-focus"></span>
																		</div>
																		<div class="stx-btn-panel" style="display: none;">
																			<span class="stx-ico-down"></span>
																		</div>
																		<div class="stx-btn-panel" style="display: none;">
																			<span class="stx-ico-edit"></span>
																		</div>
																		<div class="stx-btn-panel">
																			<span class="stx-ico-close"></span>
																		</div>
																	</div>
																</div>
															</div>
															<div class="stx-ico-handle"
																style="left: 0px; width: 415px; top: 195.5px;" id="null">
																<span></span>
																
															</div>
															<!-- 미니차트 -->
															<div id="chartdiv" height="248" width="480"></div>
															<canvas height="248" width="480"
																style="position: absolute; left: 0px; width: 480px; height: 248px;">
								</canvas>
															<canvas height="248" width="480"
																style="position: absolute; left: 0px; display: none; width: 480px; height: 248px;"></canvas>
															<canvas height="248" width="480"
																style="position: absolute; left: 0px; display: none; width: 480px; height: 248px;">
									</canvas>
														</div>
													</div>
												</div></span>
										</article>
									</div>
								</div>
								<article>
									<span class="tabB">
										<ul class="top">
											<li><a href="#" class="on" title="체결">체결</a></li>
											<li><a href="#" class="" title="일별">일별</a></li>
										</ul>
										<div>
											<table class="ty01">
												<colgroup>
													<col width="96">
													<col width="300">
													<col width="280">
													<col width="*">
												</colgroup>
												<thead>
													<tr>
														<th class="cAlign">체결시간</th>
														<th>체결가격(KRW)</th>
														<th>체결량(BTC)</th>
														<th class="rAlign">체결금액(KRW)</th>
													</tr>
												</thead>
											</table>
											<div class="scrollB" style="height: 360px;">
												<div
													style="position: relative; overflow: hidden; width: 100%; height: 360px;">
													<div
														style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
														<table class="ty01">
															<colgroup>
																<col width="96">
																<col width="300">
																<col width="280">
																<col width="*">
															</colgroup>
															<tbody>
																<tr class="up">
																	<td class="cAlign">
																		<p>
																			04.22 <i>16:40</i>
																		</p>
																	</td>
																	<td><strong class="down">6,122,000</strong></td>
																	<td>2.00000000</td>
																	<td class="rAlign">12,244,000</td>
																</tr>
																<tr class="up">
																	<td class="cAlign"><p>
																			04.22 <i>16:40</i>
																		</p></td>
																	<td><strong class="down">6,122,000</strong></td>
																	<td>0.09239728</td>
																	<td class="rAlign">565,656</td>
																</tr>
																<tr class="down">
																	<td class="cAlign"><p>
																			04.22 <i>16:40</i>
																		</p></td>
																	<td><strong class="down">6,122,000</strong></td>
																	<td>0.28934694</td>
																	<td class="rAlign">1,771,382</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div
														style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">
														<div
															style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div>
													</div>
													<div
														style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">
														<div
															style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 30px; transform: translateY(0px);">
														</div>
													</div>
												</div>
											</div>
										</div>
									</span>
								</article>
							</section>
							
							<section class="ty02">
								<div style="height:0px;"></div>
								<div id="right_content">
								<article>
										<span class="tabB">
										<ul class="ty05">
											<li><a href="#" class="on" title="원화거래">원화거래</a></li>
											<li><a href="#" class="" title="BTC">BTC</a></li>
											<li><a href="#" class="" title="ETH">ETH</a></li>
											<li><a href="#" class="" title="USDT">USDT</a></li>
											<li><a href="#" class="" title="보유코인">보유코인</a></li>
										</ul>
										<table class="highlight">
											<colgroup>
												<col width="26">
												<col width="26">
												<col width="94">
												<col width="88">
												<col width="78">
												<col width="*">
											</colgroup>
											<thead>
												<tr>
													<th colspan="3"><a href="#">한글명 <img
															src="https://cdn.upbit.com/images/ico_change.d5d17b3.png"
															alt=""></a></th>
													<th><a href="#">현재가 <img
															src="https://cdn.upbit.com/images/ico_up_down.0a6c534.png"
															alt=""></a></th>
													<th><a href="#">전일대비 <img
															src="https://cdn.upbit.com/images/ico_up_down.0a6c534.png"
															alt=""></a></th>
													<th><a href="#">거래대금 <img
															src="https://cdn.upbit.com/images/ico_up_down_2.a48699e.png"
															alt=""></a></th>
												</tr>
											</thead>
										</table>
										<div id="r_root">
										<div class="scrollB">
											<div style="position: relative; overflow: hidden; width: 100%; height: 630px;">
												<div id="right_con"
													style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
													<!-- 오른쪽 네비바 -->
													<table class="highlight">
														<colgroup>
															<col width="26">
															<col width="26">
															<col width="94">
															<col width="98">
															<col width="58">
															<col width="*">
														</colgroup>
														<tbody>
															<tr id="" class="down on">
																<td>
																	<span class="bookmark">
																		<a href="#">즐겨찾기</a>
																	</span>
																</td>
																<td class="cAlign"><a href="#">
																		<div class="bar down">
																			<span class="line" style="top: 13.3682px; height: 0.519935px;">-</span>
																			<span class="box" style="top: 13.5px; height: 1px;">-</span>
																		</div>
																	</a>
																</td>
																<td class="tit">
																	<a href="#">
																		 <strong>비트코인</strong>
																	</a>
																 	<em>BTC<span>/KRW</span></em>
																</td>
																<td class="price">
																	<strong>6,122,000</strong>
																	<span class=""> </span>
																</td>
																<td class="percent">
																	<p>-0.37%</p><em>-23,000</em>
																</td>
																<td class="rAlign">
																	<p>40,636<i>백만</i></p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div
													style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">
													<div
														style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;">
													</div>
												</div>
												<div
													style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">
													<div
														style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 107px; transform: translateY(0px);">
													</div>
												</div>
											</div>
										</div>
										</span>
										</div>
								</article>
								</div>
							</section>
							<footer>
							<div class="app__wrap--2K1mv">
								<a title="UpBit" class="app__logo--1S5fo" href="/home">Upbit</a>
								<div class="app__aboutUs--2XC3i">
									<p class="app__contact--2Xg-L">
										<span><a target="_blank" rel="noopener noreferrer"
											href="https://dunamu.com">원스 주식회사</a></span><span
											class="app__dark--24xsm">고객센터 1588-1313</span>
									</p>
									<p class="address">
										<span>서울 마포구 백범로 23, 3층</span><span>대표 once</span><span>사업자등록번호
											123-45-78944</span>
									</p>
									
									<div class="app__snsLink--6VrG4">
										<a target="_blank" rel="noopener noreferrer"
											href="https://twitter.com/upbitglobal"
											class="app__snsLink__item--3sEsb app__snsLink__item--twitter--PmHSZ"
											title="twitter">twitter</a><a target="_blank"
											rel="noopener noreferrer"
											href="https://www.facebook.com/upbit.exchange"
											class="app__snsLink__item--3sEsb app__snsLink__item--facebook--jcjXV"
											title="facebook">facebook</a><a target="_blank"
											rel="noopener noreferrer" href="https://medium.com/@upbit"
											class="app__snsLink__item--3sEsb app__snsLink__item--medium--204OY"
											title="medium">medium</a><a target="_blank"
											rel="noopener noreferrer"
											href="https://blog.naver.com/dunamupr"
											class="app__snsLink__item--3sEsb app__snsLink__item--naver--3WcT3"
											title="naver">naver</a><a target="_blank"
											rel="noopener noreferrer"
											href="https://www.linkedin.com/company/upbit-official"
											class="app__snsLink__item--3sEsb app__snsLink__item--linkedin--1eEkL"
											title="linkedin">linkedin</a>
									</div>
									
									<p class="app__company--3_rIE">
										<a target="_blank" rel="noopener noreferrer"
											href="https://bittrex.com" title="BITTREX"><img
											src="https://static.upbit.com/upbit-pc/main/company01.gif"
											alt="BITTREX"></a><a target="_blank"
											rel="noopener noreferrer" href="https://www.bitgo.com/"
											title="BitGo"><img
											src="https://static.upbit.com/upbit-pc/main/company02.gif"
											alt="BitGo"></a><a target="_blank"
											rel="noopener noreferrer"
											href="http://www.kakao.com/kakaopay/index.php/authentication/"
											title="KakaoPay"><img
											src="https://static.upbit.com/upbit-pc/main/company03.gif"
											alt="KakaoPay"></a><a target="_blank"
											rel="noopener noreferrer" href="https://www.samsungfire.com/"
											title="삼성화재"><img
											src="https://static.upbit.com/upbit-pc/main/company04.gif"
											alt="삼성화재"></a>
									</p>
									<p class="app__copyright--3yoJ_">Copyright © 2017 - 2019
										Dunamu Inc. All rights reserved.</p>
								</div>
								<div class="app__footerMenu--2F2rh">
									<dl>
										<dt>회사</dt>
										<dd>
											<a target="_blank" rel="noopener noreferrer"
												href="https://dunamu.com">회사소개</a>
										</dd>
										<dd>
											<a title="공지사항" href="/service_center/notice">공지사항</a>
										</dd>
										<dd>
											<a title="이용약관" href="/terms_of_service">이용약관</a>
										</dd>
										<dd>
											<a title="Open API 이용약관" href="/open_api_agreement">Open
												API 이용약관</a>
										</dd>
										<dd>
											<a title="개인정보처리방침" href="/privacy_policy"><strong>개인정보처리방침</strong></a>
										</dd>
									</dl>
									<dl>
										<dt>고객지원</dt>
										<dd>
											<a title="자주하는 질문(FAQ)" href="/service_center/faq">자주하는
												질문(FAQ)</a>
										</dd>
										<dd>
											<a target="_blank" rel="noopener noreferrer"
												href="https://static.upbit.com/common/bzc_kakao.html"
												title="카카오톡 문의(24시간)">카카오톡 문의(24시간)</a>
										</dd>
										<dd>
											<a title="1:1 문의하기" href="/service_center/qna">1:1 문의하기</a>
										</dd>
										<dd>
											<a title="Open API" href="/service_center/open_api_guide">Open
												API</a>
										</dd>
										<dd>
											<a title="거래 및 입출금 이용안내" href="/service_center/guide">거래
												및 입출금 이용안내</a>
										</dd>
									</dl>
								</div>
							</div>
						</footer>
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
<script src="<%=application.getContextPath()%>/resources/js/common/auth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/common/once.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/common/util.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/component/component.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/component/ksa_compo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/component/kth_compo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/kth/d3.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/kth/scroll.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/common/util.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/ksa.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/kth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/ngh.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/router.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/ngh/nghchart.js"></script>
<%-- <script src="<%=application.getContextPath()%>/resources/js/kth/scroll.js"></script>
<script type="text/javascript">initMoving(document.getElementById("right_content"), 50, 50, 50)</script>	 --%>
<script>
app.init('<%=application.getContextPath()%>');
ngh.init('<%=application.getContextPath()%>');
</script>
</html>
