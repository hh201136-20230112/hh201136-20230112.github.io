console.log("开始载入文本内容")
const text = "<p>HH-LM-20251101</p><p>git-V0.0.55</p><p>本次训练使用了更新的模型架构,改进了FFN(feed-forward</p><p>networks前馈神经网络)的实现,&nbsp;使用SwiGLU激活函数代替了GELU,并且修改了归一化方法,&nbsp;使用RMSNorm代替了LayerNorm,并且发现了可能是导致模型效果不佳的原因:在语言模型头(language_model_head)前,未对解码器层最后输出的数据做归一化处理</p><p>本次训练参数:</p><p>模型:</p><p>27.59M(0.03B),6层解码器,上下文长度:512token,嵌入维度:512(为了降低模型参数量,嵌入维度从768维降到512维)</p><p>数据集:</p><p>来源:minimind的预训练数据集</p><p>第一次训练:5000行,193批次,2轮</p><p>第二次训练:10000行,378 批次,2轮</p><p>训练日志总结:</p><p>第一轮:loss:8.9&gt;5.9~6.2,耗时4229秒</p><p>第二轮:loss:6.1&gt;4.7~4.9,耗时7298秒</p><p>第二轮中,第50批次(全局 为436批次)时,疑似出现训练不稳定,并且伴随着疑似梯度爆炸的迹象(被梯度裁剪控制住了)</p><p>本次训练没有观察到此前训练中的模型梯度最大层转移的现象,并且从本次训练的loss曲线上来看,似乎这一次的loss曲线与以往都不同(以往的loss为快速下降到5.7左右,随后下降速度变慢,loss波动趋于稳定),但是本次的模型似乎依然有下降空间</p>"+
"<p>&nbsp;</p>"+
"<p>&nbsp;</p>"+
"<p>&nbsp;</p>"+
"<p>ps:如果有错误或者改进建议可以发送邮件至 hh201136@126.com :D</p>"+
"<p>---最后编辑时间:2025&nbsp;11&nbsp;9</p>"

const tempDiv = document.createElement("div");
tempDiv.innerHTML = text;

while (tempDiv.firstChild) {
    text_HTML_obj.appendChild(tempDiv.firstChild);
}

// 插入到目标位置
targetElement.appendChild(text_HTML_obj);