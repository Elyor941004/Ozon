var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var button = document.getElementsByClassName('button_transparent');
function digitalClick(){
    button[0].classList.add('active_color')
}
function ratingClick(){
    button[1].classList.add('active_color')
}
function showAnswer_1(){
    var bool = document.getElementById('answer_1').classList.contains('hide');
    if (bool){
        document.getElementById('answer_1').classList.remove('hide');
    }
    document.getElementById('answer_1').classList.add('show');
    document.getElementById('right_angle_1').classList.add('hide');
    var bool = document.getElementById('down_angle_1').classList.contains('hide');
    if (bool){
        document.getElementById('down_angle_1').classList.remove('hide');
    }
    document.getElementById('down_angle_1').classList.add('show');
    var bool = document.getElementById('right_angle_1').classList.contains('show');
    if (bool){
        document.getElementById('right_angle_1').classList.remove('show');
    }
}
function hideAnswer_1(){
    var bool = document.getElementById('answer_1').classList.contains('show');
    if (bool){
        document.getElementById('answer_1').classList.remove('show');
    }
    document.getElementById('answer_1').classList.add('hide');
    var bool = document.getElementById('right_angle_1').classList.contains('hide');
    if (bool){
        document.getElementById('right_angle_1').classList.remove('hide');
    }
    document.getElementById('right_angle_1').classList.add('show');
    var bool = document.getElementById('down_angle_1').classList.contains('show');
    if (bool){
        document.getElementById('down_angle_1').classList.remove('show');
    }
    document.getElementById('down_angle_1').classList.add('hide');
}
function showAnswer_2(){
    var bool = document.getElementById('answer_2').classList.contains('hide');
    if (bool){
        document.getElementById('answer_2').classList.remove('hide');
    }
    document.getElementById('answer_2').classList.add('show');
    document.getElementById('right_angle_2').classList.add('hide');
    var bool = document.getElementById('down_angle_2').classList.contains('hide');
    if (bool){
        document.getElementById('down_angle_2').classList.remove('hide');
    }
    document.getElementById('down_angle_2').classList.add('show');
    var bool = document.getElementById('right_angle_2').classList.contains('show');
    if (bool){
        document.getElementById('right_angle_2').classList.remove('show');
    }
}
function hideAnswer_2(){
    var bool = document.getElementById('answer_2').classList.contains('show');
    if (bool){
        document.getElementById('answer_2').classList.remove('show');
    }
    document.getElementById('answer_2').classList.add('hide');
    var bool = document.getElementById('right_angle_2').classList.contains('hide');
    if (bool){
        document.getElementById('right_angle_2').classList.remove('hide');
    }
    document.getElementById('right_angle_2').classList.add('show');
    var bool = document.getElementById('down_angle_2').classList.contains('show');
    if (bool){
        document.getElementById('down_angle_2').classList.remove('show');
    }
    document.getElementById('down_angle_2').classList.add('hide');
}
function showAnswer_3(){
    var bool = document.getElementById('answer_3').classList.contains('hide');
    if (bool){
        document.getElementById('answer_3').classList.remove('hide');
    }
    document.getElementById('answer_3').classList.add('show');
    document.getElementById('right_angle_3').classList.add('hide');
    var bool = document.getElementById('down_angle_3').classList.contains('hide');
    if (bool){
        document.getElementById('down_angle_3').classList.remove('hide');
    }
    document.getElementById('down_angle_3').classList.add('show');
    var bool = document.getElementById('right_angle_3').classList.contains('show');
    if (bool){
        document.getElementById('right_angle_3').classList.remove('show');
    }
}
function hideAnswer_3(){
    var bool = document.getElementById('answer_3').classList.contains('show');
    if (bool){
        document.getElementById('answer_3').classList.remove('show');
    }
    document.getElementById('answer_3').classList.add('hide');
    var bool = document.getElementById('right_angle_3').classList.contains('hide');
    if (bool){
        document.getElementById('right_angle_3').classList.remove('hide');
    }
    document.getElementById('right_angle_3').classList.add('show');
    var bool = document.getElementById('down_angle_3').classList.contains('show');
    if (bool){
        document.getElementById('down_angle_3').classList.remove('show');
    }
    document.getElementById('down_angle_3').classList.add('hide');
}
function showAnswer_4(){
    var bool = document.getElementById('answer_4').classList.contains('hide');
    if (bool){
        document.getElementById('answer_4').classList.remove('hide');
    }
    document.getElementById('answer_4').classList.add('show');
    document.getElementById('right_angle_4').classList.add('hide');
    var bool = document.getElementById('down_angle_4').classList.contains('hide');
    if (bool){
        document.getElementById('down_angle_4').classList.remove('hide');
    }
    document.getElementById('down_angle_4').classList.add('show');
    var bool = document.getElementById('right_angle_4').classList.contains('show');
    if (bool){
        document.getElementById('right_angle_4').classList.remove('show');
    }
}
function hideAnswer_4(){
    var bool = document.getElementById('answer_4').classList.contains('show');
    if (bool){
        document.getElementById('answer_4').classList.remove('show');
    }
    document.getElementById('answer_4').classList.add('hide');
    var bool = document.getElementById('right_angle_4').classList.contains('hide');
    if (bool){
        document.getElementById('right_angle_4').classList.remove('hide');
    }
    document.getElementById('right_angle_4').classList.add('show');
    var bool = document.getElementById('down_angle_4').classList.contains('show');
    if (bool){
        document.getElementById('down_angle_4').classList.remove('show');
    }
    document.getElementById('down_angle_4').classList.add('hide');
}
function showAnswer_5(){
    var bool = document.getElementById('answer_5').classList.contains('hide');
    if (bool){
        document.getElementById('answer_5').classList.remove('hide');
    }
    document.getElementById('answer_5').classList.add('show');
    document.getElementById('right_angle_5').classList.add('hide');
    var bool = document.getElementById('down_angle_5').classList.contains('hide');
    if (bool){
        document.getElementById('down_angle_5').classList.remove('hide');
    }
    document.getElementById('down_angle_5').classList.add('show');
    var bool = document.getElementById('right_angle_5').classList.contains('show');
    if (bool){
        document.getElementById('right_angle_5').classList.remove('show');
    }
}
function hideAnswer_5(){
    var bool = document.getElementById('answer_5').classList.contains('show');
    if (bool){
        document.getElementById('answer_5').classList.remove('show');
    }
    document.getElementById('answer_5').classList.add('hide');
    var bool = document.getElementById('right_angle_5').classList.contains('hide');
    if (bool){
        document.getElementById('right_angle_5').classList.remove('hide');
    }
    document.getElementById('right_angle_5').classList.add('show');
    var bool = document.getElementById('down_angle_5').classList.contains('show');
    if (bool){
        document.getElementById('down_angle_5').classList.remove('show');
    }
    document.getElementById('down_angle_5').classList.add('hide');
}
function showAnswer_6(){
    var bool = document.getElementById('answer_6').classList.contains('hide');
    if (bool){
        document.getElementById('answer_6').classList.remove('hide');
    }
    document.getElementById('answer_6').classList.add('show');
    document.getElementById('right_angle_6').classList.add('hide');
    var bool = document.getElementById('down_angle_6').classList.contains('hide');
    if (bool){
        document.getElementById('down_angle_6').classList.remove('hide');
    }
    document.getElementById('down_angle_6').classList.add('show');
    var bool = document.getElementById('right_angle_6').classList.contains('show');
    if (bool){
        document.getElementById('right_angle_6').classList.remove('show');
    }
}
function hideAnswer_6(){
    var bool = document.getElementById('answer_6').classList.contains('show');
    if (bool){
        document.getElementById('answer_6').classList.remove('show');
    }
    document.getElementById('answer_6').classList.add('hide');
    var bool = document.getElementById('right_angle_6').classList.contains('hide');
    if (bool){
        document.getElementById('right_angle_6').classList.remove('hide');
    }
    document.getElementById('right_angle_6').classList.add('show');
    var bool = document.getElementById('down_angle_6').classList.contains('show');
    if (bool){
        document.getElementById('down_angle_6').classList.remove('show');
    }
    document.getElementById('down_angle_6').classList.add('hide');
}
function showAnswer_7(){
    var bool = document.getElementById('answer_7').classList.contains('hide');
    if (bool){
        document.getElementById('answer_7').classList.remove('hide');
    }
    document.getElementById('answer_7').classList.add('show');
    document.getElementById('right_angle_7').classList.add('hide');
    var bool = document.getElementById('down_angle_7').classList.contains('hide');
    if (bool){
        document.getElementById('down_angle_7').classList.remove('hide');
    }
    document.getElementById('down_angle_7').classList.add('show');
    var bool = document.getElementById('right_angle_7').classList.contains('show');
    if (bool){
        document.getElementById('right_angle_7').classList.remove('show');
    }
}
function hideAnswer_7(){
    var bool = document.getElementById('answer_7').classList.contains('show');
    if (bool){
        document.getElementById('answer_7').classList.remove('show');
    }
    document.getElementById('answer_7').classList.add('hide');
    var bool = document.getElementById('right_angle_7').classList.contains('hide');
    if (bool){
        document.getElementById('right_angle_7').classList.remove('hide');
    }
    document.getElementById('right_angle_7').classList.add('show');
    var bool = document.getElementById('down_angle_7').classList.contains('show');
    if (bool){
        document.getElementById('down_angle_7').classList.remove('show');
    }
    document.getElementById('down_angle_7').classList.add('hide');
}
var goods_number_1 = document.getElementById('good_number_1');
var goods_number_2 = document.getElementById('good_number_2');
var goods_number_3 = document.getElementById('good_number_3');
var goods_number_4 = document.getElementById('good_number_4');
var goods_number_5 = document.getElementById('good_number_5');
var goods_number_6 = document.getElementById('good_number_6');
var goods_number_7 = document.getElementById('good_number_7');
var goods_number_8 = document.getElementById('good_number_8');
var goods_number_9 = document.getElementById('good_number_9');
var goods_number_10 = document.getElementById('good_number_10');
var goods_number_11 = document.getElementById('good_number_11');
var goods_number_12 = document.getElementById('good_number_12');
var goods_number_13 = document.getElementById('good_number_13');
var goods_number_14 = document.getElementById('good_number_14');
var goods_number_15 = document.getElementById('good_number_15');
var goods_number_16 = document.getElementById('good_number_16');
var goods_number_17 = document.getElementById('good_number_17');
var goods_number_18 = document.getElementById('good_number_18');
var goods_number_19 = document.getElementById('good_number_19');
var goods_number_20 = document.getElementById('good_number_20');
var goods_number_21 = document.getElementById('good_number_21');
var goods_number_22 = document.getElementById('good_number_22');
var goods_number_23 = document.getElementById('good_number_23');
var goods_number_24 = document.getElementById('good_number_24');
var goods_number_25 = document.getElementById('good_number_25');
function select_number_1(){
    var bool = goods_number_1.classList.contains('goods_number_active');
    if (bool){
        goods_number_1.classList.remove('goods_number_active');
    }else{
        goods_number_1.classList.add('goods_number_active');
    }
}
function select_number_2(){
    var bool = goods_number_2.classList.contains('goods_number_active');
    if (bool){
        goods_number_2.classList.remove('goods_number_active');
    }else{
        goods_number_2.classList.add('goods_number_active');
    }
}
function select_number_3(){
    var bool = goods_number_3.classList.contains('goods_number_active');
    if (bool){
        goods_number_3.classList.remove('goods_number_active');
    }else{
        goods_number_3.classList.add('goods_number_active');
    }
}
function select_number_4(){
    var bool = goods_number_4.classList.contains('goods_number_active');
    if (bool){
        goods_number_4.classList.remove('goods_number_active');
    }else{
        goods_number_4.classList.add('goods_number_active');
    }
}
function select_number_5(){
    var bool = goods_number_5.classList.contains('goods_number_active');
    if (bool){
        goods_number_5.classList.remove('goods_number_active');
    }else{
        goods_number_5.classList.add('goods_number_active');
    }
}
function select_number_6(){
    var bool = goods_number_6.classList.contains('goods_number_active');
    if (bool){
        goods_number_6.classList.remove('goods_number_active');
    }else{
        goods_number_6.classList.add('goods_number_active');
    }
}
function select_number_7(){
    var bool = goods_number_7.classList.contains('goods_number_active');
    if (bool){
        goods_number_7.classList.remove('goods_number_active');
    }else{
        goods_number_7.classList.add('goods_number_active');
    }
}
function select_number_8(){
    var bool = goods_number_8.classList.contains('goods_number_active');
    if (bool){
        goods_number_8.classList.remove('goods_number_active');
    }else{
        goods_number_8.classList.add('goods_number_active');
    }
}
function select_number_9(){
    var bool = goods_number_9.classList.contains('goods_number_active');
    if (bool){
        goods_number_9.classList.remove('goods_number_active');
    }else{
        goods_number_9.classList.add('goods_number_active');
    }
}
function select_number_10(){
    var bool = goods_number_10.classList.contains('goods_number_active');
    if (bool){
        goods_number_10.classList.remove('goods_number_active');
    }else{
        goods_number_10.classList.add('goods_number_active');
    }
}
function select_number_11(){
    var bool = goods_number_11.classList.contains('goods_number_active');
    if (bool){
        goods_number_11.classList.remove('goods_number_active');
    }else{
        goods_number_11.classList.add('goods_number_active');
    }
}
function select_number_12(){
    var bool = goods_number_12.classList.contains('goods_number_active');
    if (bool){
        goods_number_12.classList.remove('goods_number_active');
    }else{
        goods_number_12.classList.add('goods_number_active');
    }
}
function select_number_13(){
    var bool = goods_number_13.classList.contains('goods_number_active');
    if (bool){
        goods_number_13.classList.remove('goods_number_active');
    }else{
        goods_number_13.classList.add('goods_number_active');
    }
}
function select_number_14(){
    var bool = goods_number_14.classList.contains('goods_number_active');
    if (bool){
        goods_number_14.classList.remove('goods_number_active');
    }else{
        goods_number_14.classList.add('goods_number_active');
    }
}
function select_number_15(){
    var bool = goods_number_15.classList.contains('goods_number_active');
    if (bool){
        goods_number_15.classList.remove('goods_number_active');
    }else{
        goods_number_15.classList.add('goods_number_active');
    }
}
function select_number_16(){
    var bool = goods_number_16.classList.contains('goods_number_active');
    if (bool){
        goods_number_16.classList.remove('goods_number_active');
    }else{
        goods_number_16.classList.add('goods_number_active');
    }
}
function select_number_17(){
    var bool = goods_number_17.classList.contains('goods_number_active');
    if (bool){
        goods_number_17.classList.remove('goods_number_active');
    }else{
        goods_number_17.classList.add('goods_number_active');
    }
}
function select_number_18(){
    var bool = goods_number_18.classList.contains('goods_number_active');
    if (bool){
        goods_number_18.classList.remove('goods_number_active');
    }else{
        goods_number_18.classList.add('goods_number_active');
    }
}
function select_number_19(){
    var bool = goods_number_19.classList.contains('goods_number_active');
    if (bool){
        goods_number_19.classList.remove('goods_number_active');
    }else{
        goods_number_19.classList.add('goods_number_active');
    }
}
function select_number_20(){
    var bool = goods_number_20.classList.contains('goods_number_active');
    if (bool){
        goods_number_20.classList.remove('goods_number_active');
    }else{
        goods_number_20.classList.add('goods_number_active');
    }
}
function select_number_21(){
    var bool = goods_number_21.classList.contains('goods_number_active');
    if (bool){
        goods_number_21.classList.remove('goods_number_active');
    }else{
        goods_number_21.classList.add('goods_number_active');
    }
}
function select_number_22(){
    var bool = goods_number_22.classList.contains('goods_number_active');
    if (bool){
        goods_number_22.classList.remove('goods_number_active');
    }else{
        goods_number_22.classList.add('goods_number_active');
    }
}
function select_number_23(){
    var bool = goods_number_23.classList.contains('goods_number_active');
    if (bool){
        goods_number_23.classList.remove('goods_number_active');
    }else{
        goods_number_23.classList.add('goods_number_active');
    }
}
function select_number_24(){
    var bool = goods_number_24.classList.contains('goods_number_active');
    if (bool){
        goods_number_24.classList.remove('goods_number_active');
    }else{
        goods_number_24.classList.add('goods_number_active');
    }
}
function select_number_25(){
    var bool = goods_number_25.classList.contains('goods_number_active');
    if (bool){
        goods_number_25.classList.remove('goods_number_active');
    }else{
        goods_number_25.classList.add('goods_number_active');
    }
}