var list_x = document.getElementById('nav').getElementsByTagName('LI');
for(list_i = 0 ; list_i < list_x.length ; list_i++){
var list_v = list_x[list_i].getElementsByTagName('A')[0].innerHTML;
var list_u = list_v.slice(0,1);
if(list_u == '*'){
list_x[list_i].getElementsByTagName('A')[0].classList.add("nav_home");
list_x[list_i].getElementsByTagName('A')[0].innerHTML = list_v.slice(1);
  list_x[list_i].getElementsByTagName('A')[0].setAttribute('href' , 'http://' + window.location.hostname);
};
var list_c =  list_x[list_i].getAttribute('class');
if(list_c != 'done_'){
var list_y = list_x[list_i].getElementsByTagName('A')[0].innerHTML;
var list_z = list_y.search('sub');
if(list_z != -1){
var list_t = list_y.slice(3 , 4);
var list_e = list_y.slice(4);
list_x[list_i].getElementsByTagName('A')[0].innerHTML = list_e + " <span>&#709;</span>";
var list_m = list_x[list_i].innerHTML;
for(list_n = 0 ; list_n < list_t ; list_n++){
var list_g = list_x[list_i].innerHTML;
list_x[list_i+list_n+1].style.display = 'none';
list_x[list_i].innerHTML += 'comma' +  list_x[list_i+list_n+1].innerHTML;
};
var list_f = list_x[list_i].innerHTML;
var list_a = list_f.replace(/comma/g,"<li class='done_'>");
var list_h = list_m + "</li><ul class='drop_menu'>" + list_a + "</ul>";
list_x[list_i].innerHTML = list_h;
};
};
};
var list_k = document.getElementById('nav').getElementsByTagName('UL');
for(list_p = 1 ; list_p < list_k.length ; list_p++){
list_k[list_p].getElementsByTagName('A')[0].style.display = 'none';
};
var li_width = 0;
var check_drop = false;
var first_ul =  document.querySelectorAll('#nav ul:first-child')[0];
var x = document.querySelectorAll('#nav ul:first-child > li');
for(i = 0 ; i < x.length ; i++){
li_width += x[i].clientWidth;
};
li_width = li_width + 20;
function drop_menu(){
    if(check_drop == false){
    check_drop = true;
    first_ul.style.display = 'block';
    document.getElementById('nav').classList.add('dropped_menu');
        }else{
            first_ul.style.display = 'none';
            check_drop = false;
        };
};    
function detect_width() {
var win_width = window.innerWidth;
if(li_width >= win_width){
		first_ul.style.display = 'none';
		document.getElementById('nav').classList.add('clicked_menu');	
        document.getElementById('nav').setAttribute('onclick' , 'drop_menu()'); 
		
   }else{
       first_ul.style.display = 'block';
       document.getElementById('nav').classList.remove('clicked_menu');
       document.getElementById('nav').classList.remove('dropped_menu');
       document.getElementById('nav').setAttribute('onclick' , '');
   }
};
window.onresize = detect_width;
detect_width();
var hfloat = document.getElementById('Header1_headerimg');
var tfloat = document.getElementById('topheader');
var sfloat = document.getElementById('search-form');
var gfloat = document.getElementById('header_buttons');
var lfloat = document.getElementById('header_loading');
window.onscroll = function() {if(document.body.scrollTop > 30){
hfloat.style.height = '55px';
tfloat.style.height = '65px';
sfloat.style.marginTop = '0';
gfloat.style.marginTop = '3px';
lfloat.style.margin = '3px 0';
}else{
hfloat.style.height = '90px';
tfloat.style.height = '100px';
sfloat.style.marginTop = '17px';
gfloat.style.marginTop = '20px';
lfloat.style.margin = '20px 0';
};};
var x_postnum = document.getElementsByClassName('post-outer');
  for(i = 0 ; i < x_postnum.length ; i++){
var gt_pst_dt_in = document.getElementsByClassName('date_body')[i].getAttribute('title');
var gtdata = gt_pst_dt_in.split('-');
var pst_mon = gtdata[1];
var pst_day = gtdata[2].slice('0','2');
var pst_yea = gtdata[0];
var data_date = new Date();
var act_yea = data_date.getFullYear();
var act_mon = data_date.getMonth();
var act_day = data_date.getDate();
var f1 = (act_yea - pst_yea) * 365;
var f2 = ((act_mon+1) - pst_mon) * 30;
var f3 = act_day - pst_day ; 
var tot = f1 + f2 + f3;
if(tot < 0){
document.getElementsByClassName('post_super')[i].style.display = 'none';
document.getElementsByClassName('post_exclusive')[i].style.display = 'none';
document.getElementsByClassName('post_pinned')[i].style.display = 'block';
}else if(tot < 2){
document.getElementsByClassName('post_exclusive')[i].getElementsByTagName('I')[0].style.backgroundColor = '#f4f11a';
};
var x_search = x_postnum[i].getElementsByClassName('labels_body')[0].innerHTML;
var x_searched1 = x_search.search('مميز');
var x_searched2 = x_search.search('حصرى');
if(x_searched1 != -1){
document.getElementsByClassName('post_super')[i].getElementsByTagName('I')[0].style.backgroundColor = '#f44242';
};
if(x_searched2 != -1){
document.getElementsByClassName('post_exclusive')[i].getElementsByTagName('I')[0].style.backgroundColor = '#f4f11a';
};
  };
  function about_us(){
show_blacked_layer();
reset_about_us();
document.getElementById('about_us').innerHTML = "<i aria-hidden='true' class='fa fa-times'></i>";
document.getElementById('about_us').setAttribute('onclick' , 'close_blacked_layer()');
document.getElementById('about_us').getElementsByTagName('I')[0].style.color='#fff';
document.getElementById('about_us').getElementsByTagName('I')[0].style.background='tomato';
document.getElementById('first_button').style.bottom = '12%';
  };
  function contact_us(){
show_blacked_layer();
reset_contact_us()
document.getElementById('contact_us').innerHTML = "<i aria-hidden='true' class='fa fa-times'></i>";
document.getElementById('contact_us').setAttribute('onclick' , 'close_blacked_layer()');
document.getElementById('contact_us').getElementsByTagName('I')[0].style.color='#fff';
document.getElementById('contact_us').getElementsByTagName('I')[0].style.background='tomato';
document.getElementById('second_button').style.bottom = '12%';
  };
  function share_us(){
show_blacked_layer();
reset_share_us()
document.getElementById('share_us').innerHTML = "<i aria-hidden='true' class='fa fa-times'></i>";
document.getElementById('share_us').setAttribute('onclick' , 'close_blacked_layer()');
document.getElementById('share_us').getElementsByTagName('I')[0].style.color='#fff';
document.getElementById('share_us').getElementsByTagName('I')[0].style.background='tomato';
document.getElementById('third_button').style.bottom = '40%';
  };
  function show_blacked_layer(){
document.getElementsByClassName('blacked_layer')[0].classList.add('blacked_layer2');
  };
function close_blacked_layer(){
document.getElementsByClassName('blacked_layer')[0].classList.remove('blacked_layer2');
reset_header_buttons();
  };
  function reset_header_buttons(){
document.getElementById('about_us').innerHTML = "<i aria-hidden='true' class='fa fa-user-circle'></i>";
document.getElementById('contact_us').innerHTML = "<i aria-hidden='true' class='fa fa-phone'></i>";
document.getElementById('share_us').innerHTML = "<i aria-hidden='true' class='fa fa-share-alt'></i>";
document.getElementById('about_us').setAttribute('onclick' , 'about_us()');
document.getElementById('contact_us').setAttribute('onclick' , 'contact_us()');
document.getElementById('share_us').setAttribute('onclick' , 'share_us()');
document.getElementById('first_button').style.bottom = '-200%';
document.getElementById('second_button').style.bottom = '-200%';
document.getElementById('third_button').style.bottom = '-200%';
  };
  function reset_about_us(){
document.getElementById('contact_us').innerHTML = "<i aria-hidden='true' class='fa fa-phone'></i>";
document.getElementById('share_us').innerHTML = "<i aria-hidden='true' class='fa fa-share-alt'></i>";
document.getElementById('contact_us').setAttribute('onclick' , 'contact_us()');
document.getElementById('share_us').setAttribute('onclick' , 'share_us()');
document.getElementById('second_button').style.bottom = '-200%';
document.getElementById('third_button').style.bottom = '-200%';
  };
  function reset_contact_us(){
document.getElementById('about_us').innerHTML = "<i aria-hidden='true' class='fa fa-user-circle'></i>";
document.getElementById('share_us').innerHTML = "<i aria-hidden='true' class='fa fa-share-alt'></i>";
document.getElementById('about_us').setAttribute('onclick' , 'about_us()');
document.getElementById('share_us').setAttribute('onclick' , 'share_us()');
document.getElementById('first_button').style.bottom = '-200%';
document.getElementById('third_button').style.bottom = '-200%';
  };
  function reset_share_us(){
document.getElementById('contact_us').innerHTML = "<i aria-hidden='true' class='fa fa-phone'></i>";
document.getElementById('about_us').innerHTML = "<i aria-hidden='true' class='fa fa-user-circle'></i>";
document.getElementById('contact_us').setAttribute('onclick' , 'contact_us()');
document.getElementById('about_us').setAttribute('onclick' , 'about_us()');
document.getElementById('first_button').style.bottom = '-200%';
document.getElementById('second_button').style.bottom = '-200%';
  };
  var p_popular = document.getElementsByTagName('footer')[0].getElementsByClassName('PopularPosts')[0];
if(p_popular != undefined){
p_num = p_popular.getElementsByTagName('LI');
for(i = 0 ; i < p_num.length ; i++){
var p_img = p_num[i].getElementsByTagName('IMG')[0];
if(p_img != undefined){
p_img_url = p_img.getAttribute('src').replace('/w72-h72-p-k-no-nu/','/s250-c/');
p_img.setAttribute('src' , p_img_url);
}else{
p_num[i].style.display = 'none';
};
};
};
