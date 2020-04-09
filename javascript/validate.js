
       function check(){
        var _tien_1=document.getElementById('tien_1');
        var _tien_2=document.getElementById('tien_2');
    if (_tien_1.value=='') {
        $("#tien_1").addClass('red_border');
        $('#error_1_1').removeClass('hidden');
        return false;
    } else {
        $('#tien_1').removeClass('red_border');
        $('#error_1_1').addClass('hidden');
        // return true;
    }
    if (_tien_2.value=='') {
        $("#tien_2").addClass('red_border');
        $('#error_2_1').removeClass('hidden');
        return false;
    } else {
        $("#tien_2").removeClass('red_border');
        $('#error_2_1').addClass('hidden');
        return true;
    }}
    var flag = true;
    function check_eye(){
        if(flag) {
            $('#tien_2').attr('type', 'text');
            $('.eye').html('<i class="fas fa-eye"></i>');
            flag =false;
        }  else {
            $('#tien_2').attr('type', 'password');
            $('.eye').html('<i class="fas fa-eye-slash"></i>');
            flag=true;
        }
    }