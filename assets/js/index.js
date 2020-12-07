$(function(){
    getUserInfo()
    var layer = layui.layer
    $('#btn')



function getUserInfo(){
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token')||''
        },
        success: function(res){
            if(res.status !== 0){
            return  layui.layer.msg('获取用户信息失败')
        }
        renderAvatar(res.data)
        }
    })
    function  renderAvatar(user) {
        var name = user.nickname || user.username
        $('#')
    }
}
})