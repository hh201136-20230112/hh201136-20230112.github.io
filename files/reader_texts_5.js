console.log("开始载入文本内容")
const text = "<p>HLM&nbsp;git V0.0.61-release</p><p>我们基于HLM-V1-gitV0.0.60模型的基础上继续训练,模型的loss进一步下降</p><p>1. 模型参数:无变化</p><p>2. 训练参数:</p><p>&nbsp;-&nbsp;lr:0.0002->0.00002</p><p>&nbsp;-&nbsp;学习率调度器:余弦退火(无学习率预热)</p><p>&nbsp;-&nbsp;数据集:无变化</p><p>&nbsp;-&nbsp;训练批次:共1轮,每轮1125批次</p><p>3. 训练结果:</p><p>&nbsp;-&nbsp;模型loss进一步下降到3.2~3.4</p><p>&nbsp;-&nbsp;无明显过拟合迹象</p><p>&nbsp;-&nbsp;模型梯度出现逐渐上升的迹象</p><p>4. 总结:</p><p>本次训练时我们吸取了此前多次训练的教训,改为在继续训练时关闭学习率预热,这样可以减少学习率预热时浪费的训练时间</p><p>在两次训练中,我们均没有发现此前旧模型架构在训练时出现的最大梯度层转移现象</p><p>奇怪的是...梯度范数似乎呈现出逐渐上升的趋势</p><p>从loss曲线来看,模型依然没有到达平台期,我们计划在下一次训练中更换读取的数据集范围</p><p>5. 补充:</p><p>经过查询,此现象在论文Arxiv-2506.02285《Why Gradients Rapidly Increase Near the End of Training》(为什么训练后期梯度会迅速增加)中得到了解释,梯度范数逐渐上升的现象在语言模型和其他大型模型的训练中普遍存在,这是由权重衰减,归一化和学习率调度等多个因素综合导致的</p><p>附件(由于github访问速度较慢,上传至蓝奏云):</p><p><a href = 'https://wwbkh.lanzoul.com/b00romys4b'>&lt;loss曲线和训练log文件,密码:1111&gt;</a></p><p><a href = 'https://arxiv.org/abs/2506.02285'>&lt;《Why Gradients Rapidly Increase Near the End of Training》&gt;</a></p><p>最后编辑:2025/12/21</p><p>如果有改进建议请发送邮件至:hh201136@126.com  :D</p>"
const tempDiv = document.createElement("div");
tempDiv.innerHTML = text;

while (tempDiv.firstChild) {
    text_HTML_obj.appendChild(tempDiv.firstChild);
}

// 插入到目标位置
targetElement.appendChild(text_HTML_obj);