console.log("开始载入文本内容")
const text = "<p>HLM  git V0.0.62-release</p><p>我们在HLM-V1-gitV0.0.61模型的基础上继续训练,模型的loss首次下降到了2.7~2.9</p><p>1. 模型参数:无变化</p><p>2. 训练参数:</p><p> - lr:0.0003->0.00003</p><p> - 学习率调度器:余弦退火(无学习率预热)</p><p> - 数据集:更换了读取的区域</p><p> - 训练批次:共1轮,每轮1125批次</p><p>3. 训练结果:</p><p> - 截止目前为止,此模型已经完成了3375批次,约27M(27,648,000)token的预训练(预训练轮次依然过少,模型仍处于早期预训练阶段,预训练需要十亿token级别的数据量)</p><p> - 模型loss进一步下降到2.7~2.9</p><p> - 无明显过拟合迹象</p><p> - 模型梯度逐渐上升的迹象似乎逐渐减弱</p><p> - 在评估中,模型可以在低于1.2的温度下完成部分预测下一个token的任务,虽然在句子的生成上依然效果不佳(测试样本较少,测试可能较为主观,仅作为参考),但是已经说明了模型的预训练有效</p><p>4. 总结:</p><p>  模型比起V0.0.57版本使用了高于5000批次的预训练后降到3.0,新模型到达相同的loss值仅使用了五分之三的批次,说明了一个深而窄的模型比一个浅而宽的模型在语言生成任务上更具优势</p><p>  同时,模型的预训练轮次依然不足(语言模型需要小于2.5的loss才能输出有意义的内容),还需进一步训练</p><p>附件(由于github访问速度较慢,上传至蓝奏云):</p><p><a href = 'https://wwbkh.lanzoul.com/b00ronipod'>&lt;loss曲线和训练log文件,密码:1111&gt;</a></p><p>最后编辑:2025/12/27</p><p>如果有改进建议请发送邮件至:hh201136@126.com :D</p>"
const tempDiv = document.createElement("div");
tempDiv.innerHTML = text;

while (tempDiv.firstChild) {
    text_HTML_obj.appendChild(tempDiv.firstChild);
}

// 插入到目标位置
targetElement.appendChild(text_HTML_obj);