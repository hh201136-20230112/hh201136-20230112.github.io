console.log("开始载入文本内容")
const text = "<p>HH_LM技术报告-20251109</p><p>Git仓库版本:V0.0.57</p><p>在此前的模型权重文件上继续训练,同时更改了使用的数据集范围(由0~20000变为10000~30000)</p><p>使用了更加严格的梯度裁剪(0%~60%-4.0,&nbsp;60%~80%-3.0,&nbsp;80%~100%-2.0)</p><p>学习率调整为0.0004,但是似乎依然过高</p><p>在训练过程中发现当学习率预热结束时(对于图中约4250的位置),模型的loss出现明显波动(突然上升到3.7~4.0),同时评估loss也出现同样情况,到达了3.7</p><p>在本次训练结束后,模型loss从3.5下降到了3.0~3.4</p><p>从输出来看,模型已经学习到了一些常见词语,如”周五”,”这句话”等,同时开始倾向于生成短句,并且学会了输出停止token,但是其中夹杂着很多无法解码的token,来源为minimind分词器的词表较小导致在编码时出现未登录词</p><p>(即OOV词,分词器在处理这种词时会尝试将其拆分成两个token),由于模型参数量较小,对于这种两个token组成的字符的处理能力可能不足,导致本来应连续输出的两个token只剩下一个或者是不连续,引发分词器解码时无法处理,被解码为未知字符�</p><p>&nbsp;</p><p>附件(由于github访问速度较慢,上传至蓝奏云):</p><p><a href=https://wwxv.lanzoul.com/b00roj73vi>&lt;loss曲线和训练log文件,密码:1111&gt;</a></p><p>&nbsp;</p><p>最后编辑:2025/11/9</p><p>如果有改进建议请发送邮件至:hh201136@126.com&nbsp;&nbsp;:D</p>"

const tempDiv = document.createElement("div");
tempDiv.innerHTML = text;

while (tempDiv.firstChild) {
    text_HTML_obj.appendChild(tempDiv.firstChild);
}

// 插入到目标位置
targetElement.appendChild(text_HTML_obj);