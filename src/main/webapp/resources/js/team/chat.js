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
                  $(".msg_container_base").scrollTop($(".msg_container_base")[0].scrollHeight);
    }
         });
          $('#btn-chat').click(function(){
              setContentView();
              $('#btn-input').val('');
          });
     };
     let setContentView =()=>{
              let value = $('#btn-input').val();
              let cust_id = sessionStorage.getItem('nickname');
              if(cust_id ==null){
            	  cust_id= "고객"
              }
              if(value !=""){
              $('                    <div class="row msg_container base_sent">'
                        +'                        <div class="col-md-10 col-xs-10 ">'
                        +'                            <div class="messages msg_sent">'
                        +'                                <p>'+value+'</p>'
                        +'                            </div>'
                        +'                        </div>'
                        +'                        <div class="col-md-2 col-xs-2 avatar">'
                        +'                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">'
                        +'                        </div>'
                        +'                    </div>').appendTo('.msg_container_base');
              $.ajax({
                   url : $.ctx()+'/chat/'+value,
                   type : 'post',
                   data : JSON.stringify(),
                   dataType : 'json',
                   contentType : 'application/json',
                   success : d=>{
                        $('                    <div class="row msg_container base_receive">'
                                  +'                        <div class="col-md-2 col-xs-2 avatar">'
                                  +'                            <img src="/web/resources/img/logo3.png" class=" img-responsive ">'
                                  +'                        </div>'
                                  +'                        <div class="col-xs-10 col-md-10">'
                                  +'                            <div class="messages msg_receive">'
                                  +'                                <p>'+d.ch.chatText+' '+cust_id+'님</p>'
                                  +'                            </div>'
                                  +'                        </div>'
                                  +'                    </div>').appendTo('.msg_container_base');
                   },
                   error : e =>{
                   }
          });
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