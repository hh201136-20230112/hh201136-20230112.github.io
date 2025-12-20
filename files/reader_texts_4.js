console.log("开始载入文本内容")
const text = "<p>HH_LM技术报告-20251220</p><p>HLM git V0.0.60-release</p><p>近期,我们大范围修改了模型架构,具体修改项目:</p><p>&nbsp;&nbsp;暂时移除token退出路由,层间参数共享,LoRA等暂时未使用的模块</p><p>&nbsp;&nbsp;修改GQA分组查询注意力的查询头数从16到8,键值头数从8到4</p><p>&nbsp;&nbsp;修改模型层数从6层到8层</p><p>&nbsp;&nbsp;修改数据集加载器,使其可以更均匀的读取训练数据集中的各个部分</p><p>&nbsp;&nbsp;模型参数从25M增长到34M</p><p>模型预训练:</p><p>1. 模型配置:</p><p>&nbsp;&nbsp;上下文长度:512token</p><p>&nbsp;&nbsp;词表大小:6403</p><p>&nbsp;&nbsp;批次大小:16</p><p>&nbsp;&nbsp;层数:8</p><p>&nbsp;&nbsp;查询头数:12</p><p>&nbsp;&nbsp;键值头数:4</p><p>&nbsp;&nbsp;嵌入维度:512维</p><p>&nbsp;&nbsp;dropout概率:0.1</p><p>&nbsp;&nbsp;RoPE缩放因子:10000</p><p>2. 训练配置:</p><p>&nbsp;&nbsp;数据集:18000条预训练训练数据,2000条验证数据(在minimind-pretrain_hq.jsonl中以50步长读取)</p><p>&nbsp;&nbsp;训练批次:共1轮,每轮1125批次,学习率预热90批次</p><p>&nbsp;&nbsp;学习率:0.0002</p><p>3. 训练结果:</p><p>&nbsp;&nbsp;新的模型拟合速度似乎比之前的模型略慢</p><p>&nbsp;&nbsp;模型在学习率预热结束时(约100批次)产生的波动更大</p><p>&nbsp;&nbsp;模型梯度被控制的比此前更好,波动非常小</p><p>&nbsp;&nbsp;在训练结束时,模型loss下降到3.7~3.9</p><p>模型生成测试:  我们测试了18中不同生成参数的搭配,模型在温度为0.3时倾向于生成大量的&quot;,&quot;,在温度大于等于0.7时,模型出现了部分词语,以及一些短句同时,生成结果中的无法解码的token大大减少</p><p>总结:  本次训练为技术验证,故只训练了1125批次,目前看来,新的架构的性能比原先的更强,并且整体设计更加合理,模型在训练轮次更少,学习率更低的情况下获得了比上一代模型更强的生成能力,下一步我们将进行更大规模的训练以评估模型性能</p><p>附件(由于github访问速度较慢,上传至蓝奏云): <a href='https://wwbkh.lanzoul.com/b00romtn2j'>&lt;loss曲线和训练log文件,密码:1111&gt;</a></p><p>最后编辑:2025/12/20</p><p>如果有改进建议请发送邮件至:hh201136@126.com  :D</p>"

const tempDiv = document.createElement("div");
tempDiv.innerHTML = text;

while (tempDiv.firstChild) {
    text_HTML_obj.appendChild(tempDiv.firstChild);
}

// 插入到目标位置
targetElement.appendChild(text_HTML_obj);