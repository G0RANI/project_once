<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html lang="en">

<title>ONCE</title>

<head>
<meta charset="UTF-8">
<meta http-equiv="Expires" content="Mon, 06 Jan 1990 00:00:01 GMT">
<meta http-equiv="Expires" content="-1">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">

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
<script src="https://cdn.upbit.com/js/bluebird-3.3.4.min.js"
	integrity="sha384-Zum86V5Chub72Pcj/UopirJ0QwQ+LgKZFTlVMt/yaVwYbROQJl/q8Nj2e72vZel2"
	crossorigin="anonymous"></script>
<script src="https://cdn.upbit.com/js/jquery-3.2.1.min.js"
	integrity="sha384-xBuQ/xzmlsLoJpyjoggmTEz8OWUFM0/RC5BsqQBDX2v5cMvDHcMakNTNrHIW2I5f"
	crossorigin="anonymous"></script>
<script src="https://cdn.upbit.com/js/pc-inline-1.2.js"
	integrity="sha384-qTbmS4jWPoNJ/fbbtBgeNTj7u3P1Mlp0wn9pKGGp1+ehUyuSFYVGJosc800zYG+n"
	crossorigin="anonymous"></script>
<!-- <script async="" src="https://platform.twitter.com/widgets.js"></script> -->
<style data-styled="" data-styled-version="4.2.0"></style>
<link rel="icon" href="data:;base64, iVORw0KGo=">
<link rel="stylesheet" href="${css}kth/chat.css">

<!-- <script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/material.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
  -->
<script src="http://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="http://www.amcharts.com/lib/3/serial.js"></script>
<script src="http://www.amcharts.com/lib/3/themes/light.js"></script>
<script src="http://www.amcharts.com/lib/3/amstock.js"></script>
<style type="text/css">

 #chartdiv {
  width: 100%;
  height: 350px;
} 
#chartdiv_1 {
  width: 100%;
  height: 500px;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
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
										<em class="logo" style="background: url(&quot;/web/resources/img/logo3.png&quot;) 0px 0px / cover no-repeat;">-</em> 
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
													<span class="inforB">
														<div class="title">
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
										<span class="marketB">
										<div id="l_val">
										<div class="down ty01">
												<span class="first">
												 <strong></strong>
												  <em>KRW</em>
												  </span>
												  <span>
												  <p class="tit">전일대비</p> 
														<strong></strong>
												<strong class=""></strong></span>
											</div>
										</div>
											
											</span>
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
														<stx-hu-tooltip style="left: -1000px; right: auto; top: 131px;">
														<stx-hu-tooltip-field auto=""> <stx-hu-tooltip-field-name>일시:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value></stx-hu-tooltip-field>
														<stx-hu-tooltip-field auto="">
														 <stx-hu-tooltip-field-name>가격:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
														</stx-hu-tooltip-field>
														<stx-hu-tooltip-field auto="">
														 <stx-hu-tooltip-field-name>거래량:</stx-hu-tooltip-field-name>
														<stx-hu-tooltip-field-value></stx-hu-tooltip-field-value>
														</stx-hu-tooltip-field>
														</stx-hu-tooltip>
														<!-- 메인차트 -->
														<div id="chartdiv"></div>
													</div>
												</div>
											</div> 
										</span>
									</div>
								</article>
								<div class="halfB">
									<div class="leftB" style="height: 420px;">
									<span class="dataNone" id="exchangeChartiq1">
											<div id="chartIQexchangeChartiq1" class="">
												<ciq-ui-wrapper>
													 	<span></span>
													 	<span></span>
														<span></span>
													<nav class="ciq-nav-mini">
														<div class="left">
															<strong><translate original="미니차트">미니차트</translate></strong>
														</div>
													</nav>
													</ciq-ui-wrapper>
													<div class="exchangeChartiq1 ciq-chart-area" style="height: 374px;">
														<div id="chartContainerexchangeChartiq1"
															class="chartContainer toolbarOn"
															style="background-color: rgb(255, 255, 255);">
															<div id="chartdiv_1"></div>
															<div class=""></div>
															<!-- 미니차트 -->
														</div>
													</div>
												</div>
												</span>
										
										</article>
									</div>
									<div class="rightB">
										<article id="l_buy">
											<span class="tabB">
											
											<ul class="top">
													<li class="t2"><a class="on" title="매수">매수</a></li>
													<li class=""><a  class="" title="매도">매도</a></li>
													<li class=""><a  class="" title="거래내역">거래내역</a></li>
												</ul>
												</span>
												<span id="b" class="orderB" style="height: 374px;">
												<div style="height: 347px;">
													<dl>
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
															<input id="count" type="text" class="txt All" placeholder="0"
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
																value="">
														</dd>
														<dt></dt>
														<dd></dd>
													</dl>
													<div class="FixedBottom">
														<span class="commission"><p class="fr last">수수료(부가세
																포함): 0.05%</p>
															<p class="fr">최소주문금액: 1,000 KRW</p></span>
														<ul class="btnB">
														<li class="ty04"><a href="#" title="매수">매수</a></li>
														</ul>
													</div>
												</div>
												</span>
										</article>
										<article>
											
										</article>
									</div>
								</div>
								<article>
									<span class="tabB">
										<ul class="top">
											<li><a href="#" class="on" title="체결">체결</a></li>
											<li><a href="#" class="" title="일별">일별</a></li>
										</ul>
										<div id="chr_1">
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
											<div id="bt_list" class="scrollB" style="height: 360px;">
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
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>


<script src="${js}ngh/nghchart.js"></script>

<script>
app.init('${ctx}');
ngh.init('${ctx}');
app.$$.init();
</script>
</html>
