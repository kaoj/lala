var rphone=/^1[34578]\d{9}$/;
var rpass=/^[\w-`=\\\[\];',./~!@#$%^&*()_+|{}:">?]{6,}$/; 
var fphone=false;
var fpass=false;
//手机号失去焦点
$('.telephone').blur(function(){
    var telephone=$(this).val();
    if(telephone==''){
        $('.sjh').text('请输入手机号321');
        fphone=false;
    }else if(rphone.test(telephone)){
        $('.sjh').text('格式正确');
        fphone=true;
    }else{
        $('.shj').text('格式错误');
        fphone=false;
    }
  })
//密码失去焦点
$('.password').blur(function(){
    var password=$(this).val();
    if(password==''){
        $('.mm').text('请输入手机号');
        fpass=false;
    }else if(rphone.test(password)){
        $('.mm').text('格式正确');
        fpass=true;
    }else{
        $('.mm').text('格式错误');
        fpass=false;
    }
})
$('telephone').focus(function () {
    $('.zh').text('')
  })
  //点击注册按钮
$('.di2').click(function () {
    var phone=$('.telephone').val();
    var pass=$('.password').val();
if(sjh&mm){
    $.ajax({
        type:"post",
        url:"http://47.92.37.168/supermarket/data/register.php",
        async:true,
        data:{
            'user_phone':phone,
			'user_pass_word':pass
        },
        dataType:"jsonp",
        jsonp:"callback",
        jsonpCallback:"success_JsonpCallback",
        success:function(data){
            console.log(data);
            alert(11)
            if(data.msg=='success'){
                sessionStorage.setItem('username',phone);
					console.log(sessionStorage.getItem('username'))
//					alert('注册成功！');
					location.href="dl.html";
            }else if(data.msg=='error'){
                $('.reminder').text(data.reason);
            }

        }
        ,error:function(){
            alert('error!');
        }

    })
}
})
