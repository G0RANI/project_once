var ksa_compo = ksa_compo || {};
ksa_compo = {
		cust_infor:()=>{
			return '<div id="root">'
			+'		<div class="">'
			+'			<div id="checkVerifMethodModal"></div>'
			+'			<div id="QuoteOrderConfirmPopup"></div>'
			+'			<div class="">'
			+'				<div class="subMain">'
			+'					<section class="ty01">'
			+'						<article class="naviB">'
			+'							<h3>마이페이지</h3>'
			+'							<div class="listB">'
			+'								<ul>'
			+'									<li><a href="#" class="on">회원정보</a></li>'
			+'									<li><a href="#" class="">보안인증</a></li>'
			+'									<li><a href="#" class="">접속관리</a></li>'
			+'									<li><a href="#" class="">Open API 관리</a></li>'
			+'								</ul>'
			+'							</div>'
			+'						</article>'
			+'					</section>'
			+'					<div>'
			+'						<section class="ty02">'
			+'							<article>'
			+'								<div class="inforB">'
			+'									<h3>회원정보</h3>'
			+'									<div class="tableB">'
			+'										<table class="ty02">'
			+'											<colgroup>'
			+'												<col width="140">'
			+'												<col width="*">'
			+'											</colgroup>'
			+'											<tbody>'
			+'												<tr>'
			+'													<th>이메일</th>'
			+'													<td class="email"></td>'
			+'												</tr>'
			+'												<tr>'
			+'													<th>닉네임</th>'
			+'													<td><input type="text" class="txt03"'
			+'														placeholder="yakimdojin"><a href="#" class="btn">닉네임변경</a>'
			+'														<p>2~12자, 특수문자/띄어쓰기 불가, 닉네임은 변경 시점으로부터 6개월 뒤 변경 가능합니다.</p></td>'
			+'												</tr>'
			+'												<tr>'
			+'													<th>이름</th>'
			+'													<td class="ans">실명인증 필요</td>'
			+'												</tr>'
			+'												<tr>'
			+'													<th>휴대폰</th>'
			+'													<td class="ans">실명인증 필요</td>'
			+'												</tr>'
			+'												<tr>'
			+'													<th>보안등급</th>'
			+'													<td class="ans">레벨 0</td>'
			+'												</tr>'
			+'												<tr class="last">'
			+'													<th>현금영수증</th>'
			+'													<td class="txt">등록된 발급 신청 정보가 없습니다.<a href=""'
			+'														class="btnSm">등록</a></td>'
			+'												</tr>'
			+'											</tbody>'
			+'										</table>'
			+'									</div>'
			+'									<div class="FullB">'
			+'										<h4>회원님의 현재 거래수수료</h4>'
			+'										<div class="tableB">'
			+'											<table class="ty02">'
			+'												<colgroup>'
			+'													<col width="25%">'
			+'													<col width="25%">'
			+'													<col width="25%">'
			+'													<col width="25%">'
			+'													<col width="*">'
			+'												</colgroup>'
			+'												<thead>'
			+'													<tr>'
			+'														<th>KRW 마켓</th>'
			+'														<th>BTC 마켓</th>'
			+'														<th>ETH 마켓</th>'
			+'														<th>USDT 마켓</th>'
			+'													</tr>'
			+'												</thead>'
			+'												<tbody>'
			+'													<tr>'
			+'														<td class="txt-center">0.05%</td>'
			+'														<td class="txt-center">0.25%</td>'
			+'														<td class="txt-center">0.25%</td>'
			+'														<td class="txt-center">0.25%</td>'
			+'													</tr>'
			+'												</tbody>'
			+'											</table>'
			+'											<p>※ 페이백 할인이 진행 중인 경우, 화면에 표시된 거래수수료를 선 수취 후 할인 금액만큼을 회원님'
			+'												계정으로 입금해 드립니다.</p>'
			+'											<a class="btnTxt" title="안내" href="/service_center/guide">거래수수료(부가세'
			+'												포함) 상세 안내 &gt;</a>'
			+'										</div>'
			+'									</div>'
			+'									<div class="agreeC">'
			+'										<h4>이용 동의 설정</h4>'
			+'										<div class="tableB">'
			+'											<table class="ty02">'
			+'												<colgroup>'
			+'													<col width="200">'
			+'													<col width="*">'
			+'												</colgroup>'
			+'												<tbody>'
			+'													<tr>'
			+'														<th>이벤트 등 안내(SMS,이메일) 수신동의</th>'
			+'														<td class="rdo"><div>'
			+'																<a href="#" class="bgNone on"><em>-</em>동의</a><a'
			+'																	href="#" class="bgNone"><em>-</em>미동의</a>'
			+'															</div>'
			+'															<div>'
			+'																<span class="clearT">※ 입출금 안내 등 중요한 고지사항은 이벤트 안내'
			+'																	수신 동의 여부와 관계없이 이메일로 발송됩니다.</span>'
			+'															</div></td>'
			+'													</tr>'
			+'													<tr>'
			+'														<th>개인정보 제3자 제공 동의</th>'
			+'														<td class="rdo"><div>'
			+'																<a href="#" class="bgNone"><em>-</em>동의</a><a href="#"'
			+'																	class="bgNone on"><em>-</em>미동의</a>'
			+'															</div>'
			+'															<div>'
			+'																<h5>제휴사인 Bittrex에 제공되며, 정보제공 동의 이후에 BTC/ETH/USDT 마켓'
			+'																	거래를 할 수 있습니다.</h5>'
			+'																<span class="marginT">※ 개인정보 제3자 제공 동의 해지 안내</span><span>개인정보'
			+'																	제3자 제공 동의를 해지하면 BTC/ETH/USDT 마켓 거래가 불가능합니다.</span>'
			+'															</div></td>'
			+'													</tr>'
			+'												</tbody>'
			+'											</table>'
			+'										</div>'
			+'										<a class="btnDrop" href="/mypage/customer_info/withdrawal">회원탈퇴</a>'
			+'									</div>'
			+'								</div>'
			+'							</article>'
			+'						</section>'
			+'					</div>'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
		},
		cust_acc:()=>{
			return '<div id="root">'
			+'		<div class="">'
			+'			<div id="checkVerifMethodModal"></div>'
			+'			<div id="QuoteOrderConfirmPopup"></div>'
			+'			<div class="">'
			+'				<div class="subMain">'
			+'					<section class="ty01">'
			+'						<article class="naviB">'
			+'							<h3>마이페이지</h3>'
			+'							<div class="listB">'
			+'								<ul>'
			+'									<li><a href="#" class="">회원정보</a></li>'
			+'									<li><a href="#" class="">보안인증</a></li>'
			+'									<li><a href="#" class="on">접속관리</a></li>'
			+'									<li><a href="#" class="">Open API 관리</a></li>'
			+'								</ul>'
			+'							</div>'
			+'						</article>'
			+'					</section>'
			+'					<section class="ty02">'
			+'						<article>'
			+'							<div class="inforB">'
			+'								<h3>접속관리</h3>'
			+'								<p class="txt incBtRight">'
			+'									회원님의 업비트 로그인 이력입니다. 직접 로그인하지 않은 기록이 있다면,<br>즉시 <a'
			+'										href="https://accounts.kakao.com/weblogin/find_password?continue=https://accounts.kakao.com/weblogin/account/info"'
			+'										target="_blank">카카오계정 비밀번호 변경</a> 및 모든 디바이스에서 로그아웃 해주세요.<a'
			+'										href="" class="LogoutBt">모든 디바이스에서 로그아웃</a>'
			+'								</p>'
			+'								<div class="tableB">'
			+'									<table class="ty01">'
			+'										<colgroup>'
			+'											<col width="*">'
			+'											<col width="195">'
			+'											<col width="200">'
			+'											<col width="125">'
			+'											<col width="165">'
			+'										</colgroup>'
			+'										<thead>'
			+'											<tr>'
			+'												<th>위치</th>'
			+'												<th>기종</th>'
			+'												<th>브라우저</th>'
			+'												<th>아이피</th>'
			+'												<th>일시</th>'
			+'											</tr>'
			+'										</thead>'
			+'										<tbody>'
			+'											<tr>'
			+'												<td class="lAlign">-</td>'
			+'												<td class="lAlign">Windows 6.1</td>'
			+'												<td class="lAlign">Chrome 73</td>'
			+'												<td>115.94.144.226</td>'
			+'												<td>2019.04.23 09:07:05</td>'
			+'											</tr>'
			+'											<tr>'
			+'												<td class="lAlign">-</td>'
			+'												<td class="lAlign">Windows 6.1</td>'
			+'												<td class="lAlign">Chrome 73</td>'
			+'												<td>115.94.144.226</td>'
			+'												<td>2019.04.22 17:52:57</td>'
			+'											</tr>'
			+'										</tbody>'
			+'									</table>'
			+'								</div>'
			+'							</div>'
			+'						</article>'
			+'					</section>'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
		},
		investment_coin:()=>{
			return '<div id="root">'
			+'		<div class="">'
			+'			<div id="checkVerifMethodModal"></div>'
			+'			<div id="QuoteOrderConfirmPopup"></div>'
			+'			<div class="">'
			+'				<div class="mainB">'
			+'					<section class="ty01">'
			+'						<article>'
			+'							<span class="tabB"><ul class="top ty04">'
			+'									<li><a class="on" title="보유코인" href="/investments/balance">보유코인</a></li>'
			+'									<li><a class="" title="거래내역" href="/investments/history">거래내역</a></li>'
			+'									<li><a class="" title="미체결"'
			+'										href="/investments/wait_orders">미체결</a></li>'
			+'									<li><a class="" title="입출금대기"'
			+'										href="/investments/wait_deposit_and_withdraws">입출금대기</a></li>'
			+'								</ul></span><span class="ownB"><div class="rMsg">'
			+'									<span>* 매수평균가, 평가금액, 평가손익, 수익률은 모두 <strong>KRW로'
			+'											환산한 추정값으로 참고용</strong>입니다.'
			+'									</span>&nbsp;<a href="#" class="tooltipDown"><div'
			+'											style="width: 270px;">'
			+'											<strong>[보유코인 유의사항]</strong>'
			+'											<p class="bgNone">'
			+'												<em>1.</em> 보유코인의 매수평균가, 평가금액, 평가손익, 수익률<br>은 모두 KRW로'
			+'												환산한 추정값으로 참고용입니다.'
			+'											</p>'
			+'											<p>'
			+'												업비트에서는 4가지의 기초화폐(KRW, BTC, ETH,<br>USDT)로 암호화폐를 거래할 수'
			+'												있습니다.'
			+'											</p>'
			+'											<p>'
			+'												4가지 기초화폐 중 어떤 것으로 거래하는가에 따라서<br>매수가격의 단위가 달라지며, 하나의 코인을'
			+'												2가지<br>이상의 기초화폐로 거래하게 되면 현재 수익률을<br>확인하는 것이 어려워지게'
			+'												됩니다.'
			+'											</p>'
			+'											<p>'
			+'												이를 위한 보완책으로 모든 가격의 단위를 KRW로<br>환산해 현재 추정 수익률을 참고용으로'
			+'												확인하실 수<br>있도록 제공합니다.'
			+'											</p>'
			+'											<p class="bgNone line">'
			+'												<em>2.</em> 보유코인의 매수/매도 및 입금/출금 내역을 모두<br>반영합니다. 입금 내역의'
			+'												매수평균가는 입금 시점의<br>시세를 반영해 계산합니다.'
			+'											</p>'
			+'											<p class="bgNone line">'
			+'												<em>3.</em> 계산 방식'
			+'											</p>'
			+'											<p>총평가: 보유 암호화폐의 평가금액 합계</p>'
			+'											<p>총 보유자산: 총평가 + 보유KRW</p>'
			+'											<p>'
			+'												매수평균가: 매수(입금) 체결 시 직전 매수평균가와<br>평균, 매도(출금) 체결 시 직전'
			+'												매수평균가 유지<br> <span>&gt; BTC 마켓의 매수가격은 BTC/KRW'
			+'													가격을 반영해<br>KRW로 환산(같은 방식으로 ETH 마켓과 USDT 마켓<br>가격도'
			+'													KRW로 환산)'
			+'												</span>'
			+'											</p>'
			+'											<p>매수금액: 보유수량 x 매수평균가</p>'
			+'											<p>'
			+'												평가금액: 보유수량 x 현재가<br> <span>&gt; 보유코인이 KRW마켓에'
			+'													상장되어 있으면 KRW<br>마켓 현재가 기준, 그렇지 않으면 BTC 마켓의 현재가<br>를'
			+'													KRW로 환산해서 평가금액 계산'
			+'												</span>'
			+'											</p>'
			+'											<p>평가손익: 평가금액 – 매수금액</p>'
			+'											<p>수익률: 평가손익 ÷ 매수금액</p>'
			+'											<p class="bgNone line">'
			+'												<em>※</em> 보유코인을 어떤 마켓에서 매매한 것인지에 따라서,<br>혹은 입출금이 빈번이'
			+'												발생하는 경우 수익률이 과대<br>혹은 과소평가되어 보일 수 있습니다. (고객님의 보유<br>수량에는'
			+'												영향을 미치지 않습니다.)<br> <span>이는 고객님의 수익평가에 대한 참고자료로,'
			+'													업비트는<br>제공된 편의정보를 기반으로 한 투자결과에 대한<br>책임을 지지 않습니다.'
			+'												</span>'
			+'											</p>'
			+'										</div></a>'
			+'								</div>'
			+'								<div class="acctB">'
			+'									<div class="box01">'
			+'										<span><em>총매수금액</em><strong>0 <i>KRW</i></strong></span><span><em>총평가금액</em><strong>-</strong></span>'
			+'									</div>'
			+'									<div class="box01">'
			+'										<span><em>총평가손익</em><strong>-</strong></span><span><em>총평가수익률</em><strong>-</strong></span>'
			+'									</div>'
			+'									<div class="box01">'
			+'										<span><em>보유 KRW</em><strong>0 <i>KRW</i></strong></span><span><em>총'
			+'												보유자산</em><strong>0 <i>KRW</i></strong></span>'
			+'									</div>'
			+'								</div>'
			+'								<table class="ty03">'
			+'									<colgroup>'
			+'										<col width="*">'
			+'										<col width="140">'
			+'										<col width="140">'
			+'										<col width="140">'
			+'										<col width="140">'
			+'										<col width="135">'
			+'										<col width="100">'
			+'									</colgroup>'
			+'									<thead>'
			+'										<tr>'
			+'											<th>보유코인</th>'
			+'											<th>보유수량</th>'
			+'											<th><a href="#" class="">매수평균가 <img'
			+'													src="https://cdn.upbit.com/images/ico_sort.267365d.png"'
			+'													alt=""></a></th>'
			+'											<th><a href="#" class="">매수금액 <img'
			+'													src="https://cdn.upbit.com/images/ico_sort.267365d.png"'
			+'													alt=""></a></th>'
			+'											<th><a href="#" class="selected">평가금액 <img'
			+'													src="https://cdn.upbit.com/images/ico_sort.267365d.png"'
			+'													alt=""></a></th>'
			+'											<th><a href="#" class="">평가손익(%) <img'
			+'													src="https://cdn.upbit.com/images/ico_sort.267365d.png"'
			+'													alt=""></a></th>'
			+'											<th>&nbsp;</th>'
			+'										</tr>'
			+'									</thead>'
			+'								</table>'
			+'								<div'
			+'									style="position: relative; overflow: hidden; width: 100%; height: 647px;">'
			+'									<div'
			+'										style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">'
			+'										<table class="ty03">'
			+'											<colgroup>'
			+'												<col width="*">'
			+'												<col width="140">'
			+'												<col width="140">'
			+'												<col width="140">'
			+'												<col width="140">'
			+'												<col width="135">'
			+'												<col width="100">'
			+'											</colgroup>'
			+'											<tbody>'
			+'												<tr>'
			+'													<td colspan="7" class="dataNone"><p>현재 보유중인 코인이'
			+'															없습니다.</p></td>'
			+'												</tr>'
			+'											</tbody>'
			+'										</table>'
			+'									</div>'
			+'									<div'
			+'										style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">'
			+'										<div'
			+'											style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div>'
			+'									</div>'
			+'									<div'
			+'										style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">'
			+'										<div'
			+'											style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 0px;"></div>'
			+'									</div>'
			+'								</div></span>'
			+'						</article>'
			+'					</section>'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
		},
		investment_trx:()=>{
			return'<div id="root">'
			+'		<div class="">'
			+'			<div id="checkVerifMethodModal"></div>'
			+'			<div id="QuoteOrderConfirmPopup"></div>'
			+'			<div class="">'
			+'				<div class="mainB">'
			+'					<section class="ty01">'
			+'						<article>'
			+'							<span class="tabB"><ul class="top ty04">'
			+'									<li><a class="" title="보유코인" href="/investments/balance">보유코인</a></li>'
			+'									<li><a class="on" title="거래내역" href="/investments/history">거래내역</a></li>'
			+'									<li><a class="" title="미체결"'
			+'										href="/investments/wait_orders">미체결</a></li>'
			+'									<li><a class="" title="입출금대기"'
			+'										href="/investments/wait_deposit_and_withdraws">입출금대기</a></li>'
			+'								</ul></span>'
			+'							<div class="profitW">'
			+'								<div class="proSearch">'
			+'									<select><option value="allType">거래 전체</option>'
			+'										<option value="bid">매수</option>'
			+'										<option value="ask">매도</option>'
			+'										<option value="deposit">입금</option>'
			+'										<option value="withdraw">출금</option></select>'
			+'								</div>'
			+'								<table class="ty04">'
			+'									<colgroup>'
			+'										<col width="95">'
			+'										<col width="90">'
			+'										<col width="90">'
			+'										<col width="*">'
			+'										<col width="145">'
			+'										<col width="145">'
			+'										<col width="120">'
			+'										<col width="135">'
			+'									</colgroup>'
			+'									<thead>'
			+'										<tr>'
			+'											<th>주문시간</th>'
			+'											<th>코인</th>'
			+'											<th>거래종류</th>'
			+'											<th>거래수량</th>'
			+'											<th>거래단가&nbsp;<a href="#" class="tooltip"><div>입출금'
			+'														내역의 거래단가는 입출금 시점의 시세를 반영해 계산합니다.</div></a></th>'
			+'											<th>거래금액</th>'
			+'											<th>수수료</th>'
			+'											<th>정산금액(수수료반영)</th>'
			+'										</tr>'
			+'									</thead>'
			+'								</table>'
			+'								<div class="scrollB" style="height: 720px;">'
			+'									<div'
			+'										style="position: relative; overflow: hidden; width: 100%; height: 720px;">'
			+'										<div'
			+'											style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">'
			+'											<table class="ty04">'
			+'												<colgroup>'
			+'													<col width="95">'
			+'													<col width="90">'
			+'													<col width="90">'
			+'													<col width="*">'
			+'													<col width="145">'
			+'													<col width="145">'
			+'													<col width="120">'
			+'													<col width="135">'
			+'												</colgroup>'
			+'												<tbody>'
			+'													<tr>'
			+'														<td colspan="8" class="dataNone"><p>과거 거래내역이'
			+'																없습니다.</p></td>'
			+'													</tr>'
			+'												</tbody>'
			+'											</table>'
			+'										</div>'
			+'										<div'
			+'											style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">'
			+'											<div'
			+'												style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div>'
			+'										</div>'
			+'										<div'
			+'											style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">'
			+'											<div'
			+'												style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 0px;"></div>'
			+'										</div>'
			+'									</div>'
			+'								</div>'
			+'							</div>'
			+'						</article>'
			+'					</section>'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
		},
		d_w_charge:()=>{
			return'<div id="root">'
			+'    <div class="">'
			+'      <div class="">'
			+'        <div class="mainB">'
			+'          <section class="ty01">'
			+'            <div class="halfB">'
			+'              <div class="leftB sizeUp sgdB">'
			+'                <article>'
			+'                  <div class="scrollB">'
			+'                    <div'
			+'                      style="position: relative; overflow: hidden; width: 100%; height: 870px;">'
			+'                      <div'
			+'                        style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">'
			+'                        <span class="totalB"><strong>총 보유자산</strong>'
			+'                          <p>'
			+'                            0 <i>KRW</i>'
			+'                          </p></span>'
			+'                        <div class="serchCoin">'
			+'                          <span class="serchInput"><input'
			+'                            placeholder="코인명/심볼검색" value=""><a href="#"'
			+'                            class="serchBt"></a><a href="#" class="cancelBt"></a></span><span'
			+'                            class="chkB"><a href="#" class="">checkbox</a><label'
			+'                            for="">보유코인만</label></span>'
			+'                        </div>'
			+'                        <table class="ty05 highlight">'
			+'                          <colgroup>'
			+'                            <col width="170">'
			+'                            <col width="130">'
			+'                            <col width="190">'
			+'                            <col width="*">'
			+'                          </colgroup>'
			+'                          <thead>'
			+'                            <tr>'
			+'                              <th>코인명</th>'
			+'                              <th><a href="#">보유비중 <img'
			+'                                  src="https://cdn.upbit.com/images/ico_up_down.0a6c534.png"'
			+'                                  alt=""></a></th>'
			+'                              <th>보유수량(평가금액)</th>'
			+'                              <th></th>'
			+'                            </tr>'
			+'                          </thead>'
			+'                          <tbody>'
			+'                            <tr class="on">'
			+'                              <td>'
			+'                                <img src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/krw-512.png" alt="원화" width=20px height=20px >'
			+'                                <a href="#" class="tit"><strong>원화</strong><i>KRW</i></a></td>'
			+'                              <td class="bar"><a href="#" style="width: 0%;"><p>0.00%</p></a></td>'
			+'                              <td class="rAlign"><strong>0 <i>KRW</i></strong></td>'
			+'                              <td class="cAlign"><span class="DW-Color">입출금</span></td>'
			+'                            </tr>'
			+'                            <tr class="">'
			+'                              <td>'
			+'                                <img src="https://static.upbit.com/logos/BTC.png" alt="비트코인" width=20px height=20px >'
			+'                                <a href="#" class="tit"><strong>비트코인</strong><i>BTC</i></a></td>'
			+'                              <td class="bar"><a href="#" style="width: 0%;"><p>0.00%</p></a></td>'
			+'                              <td class="rAlign"><strong>0 <i>BTC</i></strong>'
			+'                                <p>'
			+'                                  0 <i>KRW</i>'
			+'                                </p></td>'
			+'                              <td class="cAlign"><span class="DW-Color">입출금</span></td>'
			+'                            </tr>'
			+'                          </tbody>'
			+'                        </table>'
			+'                      </div>'
			+'                      <div'
			+'                        style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">'
			+'                        <div'
			+'                          style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"></div>'
			+'                      </div>'
			+'                      <div'
			+'                        style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">'
			+'                        <div'
			+'                          style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 57px; transform: translateY(0px);"></div>'
			+'                      </div>'
			+'                    </div>'
			+'                  </div>'
			+'                </article>'
			+'              </div>'
			+'              <div class="rightB sizeUp sgdB">'
			+'                <article>'
			+'                  <span class="titB"><strong>KRW 입출금</strong><a href="#"'
			+'                    class="refresh" title="새로고침">새로고침</a></span><span class="dlB"><dl'
			+'                      class="bg">'
			+'                      <dt class="first">보유금액</dt>'
			+'                      <dd class="first">'
			+'                        <strong>0 <i>KRW</i></strong>'
			+'                      </dd>'
			+'                      <dt>'
			+'                        거래대기 <a class="btn" title="보기"'
			+'                          href="/investments/wait_orders">보기</a>'
			+'                      </dt>'
			+'                      <dd>'
			+'                        <strong>0 <i>KRW</i></strong>'
			+'                      </dd>'
			+'                    </dl></span><span class="tabB"><ul>'
			+'                      <li><a id="dd" class="on" title="KRW충전">KRW충전</a></li>'
			+'                      <li><a id="ss" class="" title="출금신청">출금신청</a></li>'
			+'                      <li><a id="aa" class="" title="입출금내역">입출금내역</a></li>'
			+'                    </ul></span>'
			+'                  <div class="TabArea BgGrey KRW">'
			+'                    <span class="btnB"><em>KRW 입금(충전)을 위해 실명확인 입출금 계좌'
<<<<<<< HEAD
			+'                        인증이 필요합니다.</em><a id="port" class="btn btn-info btn-lg" data-toggle="modal" href="payment" title="실명확인 입출금 계좌 인증하기"'
			+'                      ">실명확인 입출금 계좌 인증하기</a></span><span'
=======
			+'                        인증이 필요합니다.</em><a class="btn" title="실명확인 입출금 계좌 인증하기"'
			+'                      ">실명확인 입출금 계좌 인증하기</a>'
>>>>>>> 30cd607270de7b90b9499281fb5d7c0d334a8c9e
			+'                      class="listB" style="height: 431px;"><strong><i>!</i>KRW'
			+'                        입출금 유의사항</strong>'
			+'                      <ul>'
			+'                        <li>KRW포인트 충전을 위한 전용번호는 <em>실명확인 입출금 계좌 인증 후</em> 발급'
			+'                          가능합니다.'
			+'                        </li>'
			+'                      </ul></span>'
			+'                  </div>'
			+'                </article>'
			+'              </div>'
			+'            </div>'
			+'          </section>'
			+'        </div>'
			+'      </div>'
			+'    </div>'
			+'  </div>'
		},
		d_w_application:()=>{
			return 
			'<div class="TabArea BgGrey KRW">'
			+'	<span class="btnB"> '
			+'		<em>KRW 출금은 보안등급 레벨3 부터 가능합니다.</em> '
			+'		<a class="btn" title="보안등급 상향 바로가기" href="/mypage/security_certificate">보안등급상향 바로가기</a>'
			+'	</span>'
			+'	<span class="listB" style="height: 456px;">'
			+'		<ul>'
			+'			<li>KRW 포인트 충전은 보안등급 레벨3 부터 가능합니다.</li>'
			+'			<li>현재 회원님의 보안등급은 레벨0 입니다.</li>'
			+'		</ul>'
			+'	</span>'
			+'</div>'
		},
		d_w_trx:()=>{
			return 
			'<span class="statementB">'
			+'	<div class="f_clear">'
			+'		<div class="selectB">'
			+'			<a href="#" class="select">전체</a>'
			+'		</div>'
			+'	</div>'
			+'	<div class="scrollB" style="height: 607px;">'
			+'		<div style="position: relative; overflow: hidden; width: 100%; height: 607px;">'
			+'			<div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">'
			+'				<div class="dataNone">'
			+'					<p>과거 입출금 내역이 없습니다.</p>'
			+'				</div>'
			+'				<table class="ty06 highlight">'
			+'					<colgroup>'
			+'						<col width="50">'
			+'						<col width="*">'
			+'						<col width="50">'
			+'						<col width="80">'
			+'						<col width="90">'
			+'					</colgroup>'
			+'				</table>'
			+'			</div>'
			+'			<div style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">'
			+'				<div style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;">'
			+'				</div>'
			+'			</div>'
			+'			<div style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">'
			+'				<div style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 0px;">'
			+'				</div>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
			+'	<div class="txtB">'
			+'		<p>* 전체 입출금 내역은 <strong><a href="/investments/history">거래내역</a></strong> 화면에서 확인 가능합니다.</p>'
			+'	</div>'
			+'</span>'
		},
		kakao_login:()=>{
			return '<div id="root">'
			+'	<div class="">'
			+'		<div id="checkVerifMethodModal">'
			+'			<div></div>'
			+'		</div>'
			+'		<div id="QuoteOrderConfirmPopup"></div>'
			+'		<div class="">'
			+'			<div>'
			+'				<div class="eventMargin"></div>'
			+'				<section class="loginB">'
			+'					<article>'
			+'						<h2 class="logo">UPbit</h2>'
			+'						<a id="custom-login-btn" href="javascript:loginWithKakao()">'
			+'							<img'
			+'							src="//mud-kage.kakao.com/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg"'
			+'							width="380" />'
			+'						</a>'
			+'						<div class="chkBox">'
			+'							<a href="#">checkbox</a><label for="">로그인 상태 유지</label>'
			+'						</div>'
			+'						<ul class="listB">'
			+'							<li>카카오계정으로 간편하고 안전하게 로그인(회원가입)할 수 있습니다.</li>'
			+'							<li>카카오계정이 기억나지 않으시나요?<a href="#" class="btnTxt"'
			+'								title="확인방법">확인방법</a></li>'
			+'						</ul>'
			+'					</article>'
			+'				</section>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
			+'</div>'
		},
		navi:()=>{
			return '<header class="" style="z-index: 100;">'
						+'<section>'
						+'<h1>'
							+'<a title="UpBit"">UpBit</a>'
						+'</h1>'
						+'<nav>'
							+'<a style="cursor:pointer" class="" id="ngh" title="거래소">거래소</a>'
							+'<a style="cursor:pointer" class="" id="ksa_d" title="입출금">입출금</a>'
							+'<a style="cursor:pointer" class="" id="ksa_i" title="투자내역">투자내역</a>'
							+'<a style="cursor:pointer" class="" id="kth" title="코인동향">코인동향</a>'
							+'<a style="cursor:pointer" class="" id="kth2" title="고객센터">고객센터</a>'
						+'</nav>'
						+'<ul class="tnb">'
							+'<li><a style="cursor:pointer" id="ksa" title="로그인">로그인</a></li>'
							+'<li><a style="cursor:pointer" title="회원가입">회원가입</a></li>'
						+'</ul>'
					+'</section>'
				+'</header>'
		}		
};