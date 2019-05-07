var coinart = coinart||{}
coinart=(()=>{
	let init =(x)=>{
		coinart.$.init(x);
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView =()=>{
		naver();
		youtube();
	};
	let naver=(x)=>{
		$('#word').empty();
		$('#index_list').empty();
		$('.btnViewA').remove();
		$('.pagination').empty();
		$('<div id="word"></div>').appendTo('.ty01');
		$.getJSON($.ctx()+'/crawler/naver/'+x,d=>{
			$.each(d.ls,(i,j)=>{
				$('<tr><th target="_blank" class="crawler_text">'+j.nseq+'</th>'
						+'<td><p class="txt"><a href="'+j.url+'" target="_blank">'+j.title+'</a></p></td>'
						+'<td class="crawler_text">'+j.adate+'</td>'
						+'</tr>').css('font-size','14px').appendTo('#index_list');
				$('.crawler_text').css('text-align','center');										
			});
		word();
		let i=0;
		for(i=1;i<=10;i++){
			if(x==i){
				$('<li class="page-item active" aria-current="page"><a class="page-link" id="page'+i+'"">'+i+'</a></li>').css('cursor','pointer')
				.appendTo('.pagination')
				.click(function(){
					naver($(this).text());
				});
			}else{
				$('<li class="page-item"><a class="page-link" id="page'+i+'"">'+i+'</a></li>').css('cursor','pointer')
				.appendTo('.pagination')
				.click(function(){
					naver($(this).text());
				});
			}
			
		}
		
		
		
		});

	};
	let word =()=>{
		var width = 960,
	    height = 500
	var svg = d3.select("#word").append("svg")
	    .attr("width", width)
	    .attr("height", height);
	d3.csv("resources/csv/csv.csv", function (data) {
	    showCloud(data)
	    setInterval(function(){
	         showCloud(data)
	    },10000)
	});
	//scale.linear: 선형적인 스케일로 표준화를 시킨다.
	//domain: 데이터의 범위, 입력 크기
	//range: 표시할 범위, 출력 크기
	//clamp: domain의 범위를 넘어간 값에 대하여 domain의 최대값으로 고정시킨다.
	wordScale = d3.scale.linear().domain([0, 100]).range([0, 150]).clamp(true);
	var keyword1 = ["가상화폐", "암호화폐", "빗썸", "비트코인", "리플", "이더리움", "코빗", "오미세고"]
	var keyword2 = ["오르고", "하락세", "상승세", "소폭", "대폭", "하락", "상승", "오름세", "내림세","상승전망","하락예상","상승예상","올라","내려"]
	var svg = d3.select("svg")
	            .append("g")
	            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	function showCloud(data) {
	    d3.layout.cloud().size([width, height])
	        //클라우드 레이아웃에 데이터 전달
	        .words(data)
	        .rotate(function (d) {
	            return d.text.length > 3 ? 0 : 90;
	        })
	        //스케일로 각 단어의 크기를 설정
	        .fontSize(function (d) {
	            return wordScale(d.frequency);
	        })
	        //클라우드 레이아웃을 초기화 > end이벤트 발생 > 연결된 함수 작동 
	        .on("end", draw)
	        .start();
	    function draw(words) {
	        var cloud = svg.selectAll("text").data(words)
	        //Entering words
	        cloud.enter()
	            .append("text")
	            .style("font-family", "overwatch")
	            .style("fill", function (d) {
	                return (keyword1.indexOf(d.text) > -1 ? "#fbc280" : (keyword2.indexOf(d.text) > -1 ? "#398dff" : "#405275"))
	            })
	            .style("fill-opacity", .5)
	            .attr("text-anchor", "middle")
	            .attr('font-size', 1)
	            .text(function (d) {
	                return d.text;
	            });
	        cloud
	            .transition()
	            .duration(600)
	            .style("font-size", function (d) {
	                return d.size + "px";
	            })
	            .attr("transform", function (d) {
	                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
	            })
	            .style("fill-opacity", 1);
	    }
	}
	};
	youtube =()=>{
//		$('#decode').remove();
		$('#basic').empty();
		$.getJSON($.ctx()+'/crawler/youtube',d=>{
			$.each(d.lis,(i,j)=>{
				$('<li><a href="'+j.url+'" target="_blank"'
						+'		                                rel="noopener noreferrer"><img'
						+'		                                    src="'+j.img+'"'
						+'		                                    width="150" height="86"><strong>'+j.title
						+'		                                        </strong><span>'+j.adate+'</span></a><a'
						+'		                                href="'+j.youUrl+'" target="_blank"'
						+'		                                rel="noopener noreferrer"><img'
						+'		                                    src="'+j.youImg+'"'
						+'		                                    width="150" height="86"><strong>'+j.youTitle
						+'		                                        </strong><span>'+j.youDate+'</span></a></li>').appendTo('#basic');
			});
			});
	};
	return{init:init,
		naver:naver,
		youtube:youtube};
})();
coinart.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				coinart.naver(1);
				coinart.youtube();
				})
			}
		};