var chat = chat||{}
chat=(()=>{
     let init =()=>{
          onCreate();
          bot();
     };
     let onCreate =()=>{
         $('.msg_container_base').empty();
         $('#btn-input').keypress(function(e) {
            if (e.which == 13){
              setContentView();
              $('#btn-input').val('');
    }
         });
          $('#btn-chat').click(function(){
              setContentView();
              $('#btn-input').val('');
          });
     };
     let setContentView =()=>{
              let cust_id = sessionStorage.getItem('nickname');
              let cust_info = sessionStorage.getItem('info');
              let profile_image = sessionStorage.getItem('pic');
              if(cust_id ==null){
            	  cust_id= "고객"
              }
              if(profile_image ==null){
            	  profile_image ="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
              }
              let value = $('#btn-input').val();
              if(value !=""){
                  $('                    <div class="row msg_container base_sent">'
                            +'                        <div class="col-md-10 col-xs-10 ">'
                            +'                            <div class="messages msg_sent">'
                            +'                                <p>'+value+'</p>'
                            +'                            </div>'
                            +'                        </div>'
                            +'                        <div class="col-md-2 col-xs-2 avatar">'
                            +'                            <img src="'+profile_image+'" class=" img-responsive img">'
                            +'                        </div>'
                            +'                    </div>').appendTo('.msg_container_base');
                  $(".msg_container_base").scrollTop($(".msg_container_base")[0].scrollHeight);
              switch(value){
              case "수익률": case "내 수익": case "내 수익률":
            	  if(cust_info==null){
					  $('                    <div class="row msg_container base_receive">'
							  +'                        <div class="col-md-2 col-xs-2 avatar">'
							  +'                            <img src="/web/resources/img/logo3.png" class=" img-responsive img">'
							  +'                        </div>'
							  +'                        <div class="col-xs-10 col-md-10">'
							  +'                            <div class="messages msg_receive">'
							  +'                                <p>'+cust_id+'님 로그인 먼저 해주시겠어요?</p>'
							  +'                            </div>'
							  +'                        </div>'
							  +'                    </div>').appendTo('.msg_container_base');
					  $(".msg_container_base").scrollTop($(".msg_container_base")[0].scrollHeight);
            	  }else{
            		  
            		  $.ajax({
            			  url:$.ctx()+'/retrieve_acc/'+cust_info,
            			  data:cust_info,
            			  type:'POST',
            			  dataType:'json',
            			  contentType:'application/json',
            			  success:s=>{
            				  $.getJSON($.ctx()+'/ngh/once',d=>{
            					  let tp = new Array();
            					  $.each(d.ls,(i,j)=>{
            						  tp[i] = j.price;
            					  });
            					  let c_krw = tp[0] * s.hqua;
            					  let total_p = c_krw+parseInt(s.money); //총보유자산
            					  let text = parseFloat((total_p-s.tbprice)/s.tbprice*100).toFixed(2);
            					  $('                    <div class="row msg_container base_receive">'
            							  +'                        <div class="col-md-2 col-xs-2 avatar">'
            							  +'                            <img src="/web/resources/img/logo3.png" class=" img-responsive img">'
            							  +'                        </div>'
            							  +'                        <div class="col-xs-10 col-md-10">'
            							  +'                            <div class="messages msg_receive">'
            							  +'                                <p>'+cust_id+'님의 수익률은 '+text+'%입니다.</p>'
            							  +'                            </div>'
            							  +'                        </div>'
            							  +'                    </div>').appendTo('.msg_container_base');
            					  $(".msg_container_base").scrollTop($(".msg_container_base")[0].scrollHeight);
            				  });
            			  }
            		  });
            	  }
            	  break;
              case "4월 종가":
                  $.ajax({
                      url : $.ctx()+'/chat/'+value,
                      type : 'post',
                      data : JSON.stringify(),
                      dataType : 'json',
                      contentType : 'application/json',
                      success : d=>{
                    	   $.each(d.ls,(i,j)=>{
                    		   $('                    <div class="row msg_container base_receive">'
                    				   +'                        <div class="col-md-2 col-xs-2 avatar">'
                    				   +'                            <img src="/web/resources/img/logo3.png" class=" img-responsive img">'
                    				   +'                        </div>'
                    				   +'                        <div class="col-xs-10 col-md-10">'
                    				   +'                            <div class="messages msg_receive">'
                    				   +'                                <p>'+j.cpdate+'날 종가는 '+j.cp+'원 입니다</p>'
                    				   +'                            </div>'
                    				   +'                        </div>'
                    				   +'                    </div>').appendTo('.msg_container_base');
                    		   $(".msg_container_base").scrollTop($(".msg_container_base")[0].scrollHeight);
                    	   });
                      },
                      error : e =>{
                      }
             });
            	  break;
              case "once 현재시세": case "once시세": case "once 시세가": case "원스 현재가":case "원스 시세":
            	  let tp = new Array();
            	  $.getJSON($.ctx()+'/ngh/once/price',d=>{
            		  tp[1] = d.ls.price;
           	   $.each(d.ls,(i,j)=>{
        		   $('                    <div class="row msg_container base_receive">'
        				   +'                        <div class="col-md-2 col-xs-2 avatar">'
        				   +'                            <img src="/web/resources/img/logo3.png" class=" img-responsive img">'
        				   +'                        </div>'
        				   +'                        <div class="col-xs-10 col-md-10">'
        				   +'                            <div class="messages msg_receive">'
        				   +'                                <p>현재 once 시세는'+tp[1]+'원 입니다</p>'
        				   +'                            </div>'
        				   +'                        </div>'
        				   +'                    </div>').appendTo('.msg_container_base');
        		   $(".msg_container_base").scrollTop($(".msg_container_base")[0].scrollHeight);
           	   });
            });
            	  break;
              case "once 살까요" : case "once 팔까요" : 
            	  break;
              default:
                      $.ajax({
                           url : $.ctx()+'/chat/'+value,
                           type : 'post',
                           data : JSON.stringify(),
                           dataType : 'json',
                           contentType : 'application/json',
                           success : d=>{
                                $('                    <div class="row msg_container base_receive">'
                                          +'                        <div class="col-md-2 col-xs-2 avatar">'
                                          +'                            <img src="/web/resources/img/logo3.png" class=" img-responsive img">'
                                          +'                        </div>'
                                          +'                        <div class="col-xs-10 col-md-10">'
                                          +'                            <div class="messages msg_receive">'
                                          +'                                <p>'+d.ch.chatText+' '+cust_id+'님</p>'
                                          +'                            </div>'
                                          +'                        </div>'
                                          +'                    </div>').appendTo('.msg_container_base');
                                $(".msg_container_base").scrollTop($(".msg_container_base")[0].scrollHeight);
                           },
                           error : e =>{
                           }
                  });
            	  break;
              }
              }else{
            	  alert('올바르지 않은 문구입니다');
              }            	  

     };
     
     
     
     let bot=()=>{
          $(document).on('click', '.panel-heading span.icon_minim', function (e) {
              var $this = $(this);
              if (!$this.hasClass('panel-collapsed')) {
                  $this.parents('.panel').find('.panel-body').slideUp();
                  $this.addClass('panel-collapsed');
                  $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
              } else {
                  $this.parents('.panel').find('.panel-body').slideDown();
                  $this.removeClass('panel-collapsed');
                  $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
              }
          });
          $(document).on('focus', '.panel-footer input.chat_input', function (e) {
              var $this = $(this);
              if ($('#minim_chat_window').hasClass('panel-collapsed')) {
                  $this.parents('.panel').find('.panel-body').slideDown();
                  $('#minim_chat_window').removeClass('panel-collapsed');
                  $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
              }
          });
          $(document).on('click', '#new_chat', function (e) {
              var size = $( ".chat-window:last-child" ).css("margin-left");
               size_total = parseInt(size) + 400;
              alert(size_total);
              var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
              clone.css("margin-left", size_total);
          });
          $(document).on('click', '.icon_close', function (e) {
              //$(this).parent().parent().parent().parent().remove();
              $( "#chat_window_1" ).remove();
          });
     }
     return{init:init}
})();