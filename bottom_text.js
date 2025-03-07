//用于更改底部信息栏
var load_start_time = Date.now();
function get_html_load_time()
{
    var web_start_run_date_obj = new Date(2024,10,20,20,0,0,0);
    var load_over_time = Date.now();
    var web_start_run_time = (Date.now()-web_start_run_date_obj)/1000;//转换为秒
    web_start_run_time/=60;//转换为分钟
    web_start_run_time/=60;//转换为小时
    web_start_run_time/=24;//转换为天
    web_start_run_time = web_start_run_time.toString().split(".")[0];
    document.getElementById("bottom_text").innerHTML="搭建于2024.10.20 网站版本:v0.0.9 加载用时:"+(load_over_time-load_start_time)+"ms 网站已经运行了"+web_start_run_time+"天 :D";
}