import $ from 'jquery';
$(function(){
    $('a.col-6.shadow.btn').on('mouseenter', function(e){
        $(this).toggleClass('bg-danger');
    })
    $('a.col-6.shadow.btn').on('mouseleave', function(e){
        $(this).removeClass('bg-danger');
    })
    
    $('input[name="week"]+label.form-control.text-center.mt-1').on('click', function(e){
        $(this).toggleClass('bg-success');
    })

    $('label[name="price"]').on('click', function(){
        $(this).addClass('bg-success');
        // console.log($(this));
    })
    // for(var i =0; i<$('input[type="checkbox"]').length; i++){
    //     // if($('input[type="checkbox"]')[i].checked){
    //     //     $('label.form-control.text-center.mt-1').css('background-color', 'red');
    //     // }
    //     console.log($('input[type="checkbox"]')[i].checked);
    // }

    // $('input[type="checkbox"]').on('change',function(){
    //     // console.log($(this)[0].id);
    //     if($(this)[0].id == $('label.form-control.text-center.mt-1')[0].htmlFor){
    //         // $('label.form-control.text-center.mt-1').css('background-color', 'red');
    //         console.log('ok');
    //     }else{
    //         console.log('xx');
    //     }
    // })

});
