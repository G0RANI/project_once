<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
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
	
	<!-- kth -->
	<link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/kth/kth.css"> 
	<script src="https://d3js.org/d3.v3.min.js"></script>
	<script src="https://rawgit.com/jasondavies/d3-cloud/master/build/d3.layout.cloud.js" type="text/JavaScript"></script>
	<style>
	@font-face {
		font-family: 'overwatch';
		src: url('<%=application.getContextPath()%>/resources/csv/koverwatch.woff2');
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
<body>
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
			<ul class="tnb">
				<li><a style="cursor:pointer" id="ksa" title="로그인">로그인</a></li>
			</ul>
		</section>
	</header>
</article>
<div class="trends" id="once">
	<div class="mainB">
		<section class="ty01">              
		<div id="word"></div>
		                <article>
		                    <span class="titB">
		                    <strong>
		                    <ahref="https://www.ubcindex.com" target="_blank" rel="noopener noreferrer">네이버뉴스</a></strong><span class="tabB tabR">
							</span></span>
							<table class="highlight tbl_index">
                                <colgroup>
                                    <col width="10">
                                    <col width="200">
                                    <col width="30">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="crawler_text">NO</th>
                                        <th class="crawler_text">제목</th>
                                        <th class="crawler_text">시간</th>
                                    </tr>
                                </thead>
                                <tbody id="index_list">
                                    <tr>
                                        <th><p class="name">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX03"
                                                    target="_blank" rel="noopener noreferrer">예측시장</a><span>2개 코인</span>
                                            </p></th>
                                        <td><p class="txt">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX03"
                                                    target="_blank" rel="noopener noreferrer">특정한 사건에 대한 참가자들의 예측을 기반으로 한 예측시장 플랫폼 구축을 목적으로 하는 암호화폐로 구성된 테마인덱스 </a>
                                            </p></td>
                                        <td><p class="change up">
                                                <strong>629.20</strong><span><i>41.67</i>+7.09%</span>
                                            </p></td>
                                        <td><p class="up">+57.11%</p></td>
                                        <td><p class="up">+48.05%</p></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <th><p class="name">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX07"
                                                    target="_blank" rel="noopener noreferrer">데이터저장 서비스</a><span>3개코인</span>
                                            </p></th>
                                        <td><p class="txt">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX07"
                                                    target="_blank" rel="noopener noreferrer">유휴 저장공간을 블록체인 기술을 통해 엮음으로써, 클라우드 스토리지 서비스를 수행하는 암호화폐로 구성된 테마인덱스 </a>
                                            </p></td>
                                        <td><p class="change up">
                                                <strong>619.82</strong><span><i>26.34</i>+4.44%</span>
                                            </p></td>
                                        <td><p class="up">+15.13%</p></td>
                                        <td><p class="up">+36.95%</p></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <th><p class="name">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX09"
                                                    target="_blank" rel="noopener noreferrer">대출 및 신용 서비스</a><span>3개 코인</span>
                                            </p></th>
                                        <td><p class="txt">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX09"
                                                    target="_blank" rel="noopener noreferrer">블록체인 기술을 기반으로, 기존의 은행권이 수행했던 대출이나 신용 기반의 서비스를 제공하는 암호화폐로 구성된 테마인덱스 </a>
                                            </p></td>
                                        <td><p class="change up">
                                                <strong>251.44</strong><span><i>7.12</i>+2.91%</span>
                                            </p></td>
                                        <td><p class="up">+96.31%</p></td>
                                        <td><p class="up">+116.57%</p></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <th><p class="name">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX15"
                                                    target="_blank" rel="noopener noreferrer">컨텐츠 생산 및 중개</a><span>11개  코인</span>
                                            </p></th>
                                        <td><p class="txt">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.THMIDX15"
                                                    target="_blank" rel="noopener noreferrer">미디어, 엔터테인먼트와 같은 컨텐츠의 생산 및 중개서비스를 지원하는 플랫폼을 가진 암호화폐로 구성된 테마인덱스 </a>
                                            </p></td>
                                        <td><p class="change up">
                                                <strong>431.36</strong><span><i>4.27</i>+1.00%</span>
                                            </p></td>
                                        <td><p class="up">+6.79%</p></td>
                                        <td><p class="up">+3.35%</p></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <th><p class="name">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.UBAI_ST"
                                                    target="_blank" rel="noopener noreferrer">UBAI BTC quote</a><span>189개 코인</span>
                                            </p></th>
                                        <td><p class="txt">
                                                <a href="https://www.ubcindex.com/indexes/IDX.UPBIT.UBAI_ST"
                                                    target="_blank" rel="noopener noreferrer">UBAI 인덱스를 비트코인 기준으로 환산한 인덱스 </a>
                                            </p></td>
                                        <td><p class="change up">
                                                <strong>679.66</strong><span><i>6.45</i>+0.96%</span>
                                            </p></td>
                                        <td><p class="down">-8.48%</p></td>
                                        <td><p class="down">-4.00%</p></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
		                    <a href="#" class="btnViewA">전체보기<em>▼</em></a>
		                </article>
				<div style="text-align: center;">
					<nav aria-label="Page navigation example">
						<ul class="pagination justify-content-center">
							<li class="page-item"><a class="page-link" >1</a></li>
							<li class="page-item"><a class="page-link" >2</a></li>
			 				<li class="page-item"><a class="page-link" >3</a></li>
							<li class="page-item"><a class="page-link" >4</a></li>
							<li class="page-item"><a class="page-link" >5</a></li>
							<li class="page-item"><a class="page-link" >6</a></li>
							<li class="page-item"><a class="page-link" >7</a></li>
							<li class="page-item"><a class="page-link" >8</a></li>
							<li class="page-item"><a class="page-link" >9</a></li>
							<li class="page-item"><a class="page-link" >10</a></li> 
						</ul>
					</nav>
				</div>
				<article>
		                    <span class="titB"><strong>암호화폐</strong><span
		                        class="tabB tabR"><ul class="col2">
		                                <li><a class="on" title="기간별 상승률">기간별 상승률</a></li>
		                            </ul></span></span>
		                    <table class="highlight ty03">
		                        <colgroup>
		                            <col width="*">
		                            <col width="128">
		                            <col width="124">
		                            <col width="124">
		                            <col width="124">
		                            <col width="124">
		                            <col width="130">
		                        </colgroup>
		                        <thead>
		                            <tr class="rAlignTh">
		                                <th>&nbsp;</th>
		                                <th class="lAlign center">KRW 마켓</th>
		                                <th class="center">1주일</th>
		                                <th class="center">1개월</th>
		                                <th class="center">3개월</th>
		                                <th class="center">6개월 </th>
		                                <th class="center">3년 </th>
		                            </tr>
		                        </thead>
		                        <tbody>
		                            <tr>
		  		                        <th><em class="logo"
		                                    style="background: url(https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png?1547034427) 0px 0px/cover no-repeat;">-</em><a
		                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-BAT"><strong>베이직어텐션토큰</strong></a></th>
		                                <td class="lAlign"><i>BAT/KRW</i></td>
		                                <td class=""><p class="up">+39.77%</p></td>
		                                <td class=""><p class="up">+110.57%</p></td>
		                                <td class=""><p class="up">+248.91%</p></td>
		                                <td class=""><p class="up">+52.72%</p></td>
		                                <td class=""><p class="" style="text-align: center;">-</p></td>
		                            </tr>
		                            <tr>
		                                <th><em class="logo"
		                                    style="background: url(https://assets.coingecko.com/coins/images/2102/large/refereum.png?1548608001) 0px 0px/cover no-repeat;">-</em><a
		                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-RFR"><strong>리퍼리움</strong></a></th>
		                                <td class="lAlign"><i>RFR/KRW</i></td>
		                                <td class=""><p class="up">+21.71%</p></td>
		                                <td class=""><p class="up">+24.60%</p></td>
		                                <td class=""><p class="up">+39.56%</p></td>
		                                <td class=""><p class="down">-52.57%</p></td>
		                                <td class=""><p class="" style="text-align: center;">-</p></td>
		                            </tr>
		                            <tr>
		                                <th><em class="logo"
		                                    style="background: url(https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png?1547035078) 0px 0px/cover no-repeat;">-</em><a
		                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-ENJ"><strong>엔진코인</strong></a></th>
		                                <td class="lAlign"><i>ENJ/KRW</i></td>
		                                <td class=""><p class="up">+21.02%</p></td>
		                                <td class=""><p class="up">+2.40%</p></td>
		                                <td class=""><p class="" style="text-align: center;">-</p></td>
		                                <td class=""><p class="" style="text-align: center;">-</p></td>
		                                <td class=""><p class="" style="text-align: center;">-</p></td>
		                            </tr>
		                            <tr>
		                                <th><em class="logo"
		                                    style="background: url(https://assets.coingecko.com/coins/images/309/large/Webp.net-resizeimage_%288%29.png?1547034073) 0px 0px/cover no-repeat;">-</em><a
		                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-REP"><strong>어거</strong></a></th>
		                                <td class="lAlign"><i>REP/KRW</i></td>
		                                <td class=""><p class="up">+20.58%</p></td>
		                                <td class=""><p class="up">+62.37%</p></td>
		                                <td class=""><p class="up">+52.89%</p></td>
		                                <td class=""><p class="up">+63.79%</p></td>
		                                <td class=""><p class="down">-39.83%</p></td>
		                            </tr>
		                            <tr>
		                                <th><em class="logo"
		                                    style="background: url(https://assets.coingecko.com/coins/images/1374/large/medibloc.png?1547035399) 0px 0px/cover no-repeat;">-</em><a
		                                    class="tit" href="/exchange?code=CRIX.UPBIT.KRW-MEDX"><strong>메디블록</strong></a></th>
		                                <td class="lAlign"><i>MEDX/KRW</i></td>
		                                <td class=""><p class="up">+19.57%</p></td>
		                                <td class=""><p class="up">+62.72%</p></td>
		                                <td class=""><p class="up">+134.38%</p></td>
		                                <td class=""><p class="up">+6.31%</p></td>
		                                <td class=""><p class="" style="text-align: center;">-</p></td>
		                            </tr>
		                        </tbody>
		                    </table>
		                    <a href="#" class="btnViewA">전체보기<em>▼</em></a>
		                </article>
		            </section>
		            <div id="right_content">
		            <section class="ty02">
		                <article>
		                    <span class="titB"><strong>비트코인 기초강의</strong></span>
		                    <span class="coinList">
		                    <ul class="clist" id="basic">
		                            <li><a href="https://youtu.be/6n2ka284nuA" target="_blank"
		                                rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1242:d6f16e43-5442-4fa7-9180-e8c1f581899e.png?1555572826"
		                                    width="150" height="86" alt="상승반전 시그널, 미래에 베팅?"><strong>상승반전
		                                        시그널, 미래에 베팅?</strong><span>19.04.18 16:33</span></a><a
		                                href="https://youtu.be/hO8CmfxJ-JE" target="_blank"
		                                rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1157:9fdd801f-d7de-4f20-96e8-50988961caf3.jpeg?1548313207"
		                                    width="150" height="86" alt="이더리움 하드포크 연기, 이유는?"><strong>이더리움
		                                        하드포크 연기, 이유는?</strong><span>19.01.24 16:00</span></a></li>
		                            <li><a href="https://youtu.be/KtdXPtq9YFQ" target="_blank"
		                                rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1150:04147163-55eb-4fff-9b7e-32531ee75c8f.jpeg?1547102527"
		                                    width="150" height="86" alt="드디어 ETF 승인 움직임이 보인다?"><strong>드디어
		                                        ETF 승인 움직임이 보인다?</strong><span>19.01.10 15:42</span></a><a
		                                href="https://youtu.be/pIyuD5YOQnY" target="_blank"
		                                rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1126:05ce3163-f60e-4a4d-8325-7f18fad37808.png?1543908839"
		                                    width="150" height="86" alt="G20, 암호화폐 인정하다?!"><strong>G20,
		                                        암호화폐 인정하다?!</strong><span>18.12.04 16:33</span></a></li>
		                        </ul></span><a class="largeThumb" href="https://youtu.be/6n2ka284nuA"
		                        target="_blank" rel="noopener noreferrer"><div
		                            class="thumbWrap">
		                            <div class="thumbImg">
		                                <img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1242:d6f16e43-5442-4fa7-9180-e8c1f581899e.png?1555572826"
		                                    alt="상승반전 시그널, 미래에 베팅?">
		                            </div>
		                            <div class="desc">
		                                <div class="title">상승반전 시그널, 미래에 베팅?</div>
		                                <div class="subText">
		                                    <div class="st01">쇼미더크립톡</div>
		                                    <div class="st02">19.04.18 16:33</div>
		                                </div>
		                            </div>
		                        </div></a>
		                </article>
		                <article id="decode">
		                    <span class="titB"><strong>암호화폐 해독하기</strong><span
		                        class="list_more"><a href="#" class="b_prv">이전</a><a
		                            href="#" class="b_nxt">다음</a></span></span><span class="coinList"><ul
		                            class="clist">
		                            <li><a
		                                href="https://1boon.kakao.com/upbit/5cb82566ed94d20001c27ea5"
		                                target="_blank" rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1238:491e9f3c-17b5-4a17-9c50-fd5bd43847dd.jpg?1555572627"
		                                    width="150" height="102" alt="메인넷이 뭐길래"><strong>메인넷이
		                                        뭐길래</strong><span>19.04.18 16:30</span></a><a
		                                href="https://1boon.kakao.com/upbit/5cb045c7ed94d20001243d89"
		                                target="_blank" rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1221:52b816f1-d9df-404c-8aae-187504e4c554.png?1555056043"
		                                    width="150" height="102" alt="중국 채굴 도태산업 지정..영향은?"><strong>중국
		                                        채굴 도태산업 지정..영향은?</strong><span>19.04.12 17:00</span></a></li>
		                            <li><a
		                                href="https://1boon.kakao.com/upbit/5cab00b5ed94d2000123ecb5"
		                                target="_blank" rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1201:c69b7f51-828c-4ce1-ba2c-53f76cefdc3a.jpg?1554711081"
		                                    width="150" height="102" alt="프로젝트 진행 상황, 가장 중요해!"><strong>프로젝트
		                                        진행 상황, 가장 중요해!</strong><span>19.04.08 16:55</span></a><a
		                                href="https://1boon.kakao.com/upbit/5c496747ed94d20001c93172"
		                                target="_blank" rel="noopener noreferrer"><img
		                                    src="https://api-manager-production.s3.ap-northeast-2.amazonaws.com/ftdcnt/data/1170:7e8bf4f2-2f20-4b89-bdc2-f73236bda2fb.png?1548313536"
		                                    width="150" height="102" alt="IoT와 블록체인의 기술융합, 미래는?"><strong>IoT와
		                                        블록체인의 기술융합, 미래는?</strong><span>19.01.24 16:05</span></a></li>
		                        </ul></span>
		                </article>
		            </section>
		            </div>
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
</body>
<!-- upbit -->
<script src="https://cdn.upbit.com/vendors-chunk-344e4004ead25be2326b.js"></script>
<script src="https://cdn.upbit.com/lodash-vendor-chunk-07379bacb0c3f397e40f.js"></script>
<script src="https://cdn.upbit.com/react-vendor-chunk-bceefdde649afea71d7f.js"></script>
<script src="https://cdn.upbit.com/commons-chunk-30703bb927f1099d8531.js"></script>
<script src="https://cdn.upbit.com/KR_PC-chunk-1b0a4e1e53868b6001ef.js"></script>

<!-- once -->
<script src="<%=application.getContextPath()%>/resources/js/common/auth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/common/util.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/component/component.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/component/ksa_compo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/component/kth_compo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/kth/scroll.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/common/util.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/ksa.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/kth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/ngh.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/team/coinart.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/router.js"></script>
<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>

<script type="text/javascript">initMoving(document.getElementById("right_content"), 50, 50, 50)</script>	
<script>
	app.init('<%=application.getContextPath()%>');
	coinart.init('<%=application.getContextPath()%>');
	app.$$.init();
</script>
</html>
