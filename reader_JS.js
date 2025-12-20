const url = new URL(window.location.href);// 获取当前页面 URL
const params = new URLSearchParams(url.search);// 获取所有查询参数
const get_file = params.get('id'); // 获取参数的值
var is_error_when_get_file = false;
console.log(get_file);
console.log(url);
// fetch("/texts/1.txt")
//     .then(text => console.log(text))
//     .catch(error => {console.error(error);
//                     is_error_when_get_file = true;});
// if(is_error_when_get_file)
// {

// }
const max_index = 4;// 当前可索引到的最大值
const text_HTML_obj = document.getElementById("texts");// 获取HTML对象

if (get_file == 0 || get_file > max_index) {
    text_HTML_obj.insertAdjacentHTML("beforeend", "<h1>加载内容时出错 :(</h1>");
    text_HTML_obj.insertAdjacentHTML("beforeend", "<p>错误信息:查询ID无效</p>");
    text_HTML_obj.insertAdjacentHTML("beforeend", "<p>请检查URL中的查询ID是否正确</p>");
    text_HTML_obj.insertAdjacentHTML("beforeend", "<p>有效的查询ID范围:1 ~ " + String(max_index) + "</p>");
    text_HTML_obj.insertAdjacentHTML("beforeend", "<p>如果你是在正常使用中遇到此问题,请在github上提交issue或者是发送邮件至:hh201136@126.com</p>");
    console.error("查询ID无效");
}
else {
    try {
        const script = document.createElement("script");
        script.src = "./files/reader_texts_" + String(get_file) + ".js";
        document.head.appendChild(script);
    } catch (error) {
        text_HTML_obj.insertAdjacentHTML("beforeend", "<h1>加载内容时出错 :(</h1>");
        text_HTML_obj.insertAdjacentHTML("beforeend", "<p>错误信息:" + String(error) + "</p>");
        console.error(error);
    }
}