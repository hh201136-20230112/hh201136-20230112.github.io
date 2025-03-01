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

const reader_texts=[
    "<h1>HH_CNN_EMNIST手写数字识别模型使用教程</h1>"+
    "<h3>1.安装python</h3>"+
    "<h3>2.安装pytorch</h3>"+
    "<p><b>CPU版本</b></p>"+
    '<div class="code"><code><p><b>命令行</b></p><p>pip3 install torch torchvision torchaudio</p></code></div>'+
    "<p>其他版本下载方法可以到pytorch官网查看</p>"+
    '<p><a href="https://pytorch.org/get-started/locally/">&lt;pytorch官网&gt;</a></p>'+
    "<h3>3.下载模型</h3>"+
    "<p>前往'下载'页面中下载模型</p>"+
    "<p>解压模型</p>"+
    "<h3>加载模型</h3>"+
    "<p>先导入需要的库</p>"+
    '<div class="code"><code><p><b>python</b></p><p>import&nbsp;torch</p><p>import&nbsp;numpy&nbsp;as&nbsp;np</p><p>import&nbsp;torch.nn&nbsp;as&nbsp;nn</p><p>import&nbsp;torch.nn.functional&nbsp;as&nbsp;f</p><p>from&nbsp;torchvision.datasets&nbsp;import&nbsp;EMNIST</p><p>import&nbsp;torchvision.transforms&nbsp;as&nbsp;transforms</p></code></div>'+
    "<p>然后编写模型类</p>"+
    '<div class="code"><code><p><b>python</b></p><p>class&nbsp;CNN(nn.Module):</p><p>&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;__init__(self,out_classes=10):</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__()</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;卷积层1(输入通道数:1,输出通道数:8,卷积核大小:5&times;5,步长:1,填充:1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;提取特征</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.conv1&nbsp;=&nbsp;nn.Conv2d(1,&nbsp;8,&nbsp;kernel_size=5,&nbsp;stride=1,&nbsp;padding=1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;批归一层1</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;加速训练</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.bn1&nbsp;=&nbsp;nn.BatchNorm2d(8)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;池化层(池化核大小:2&times;2,步长:2)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;对特征进行采样</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.pool&nbsp;=&nbsp;nn.MaxPool2d(kernel_size=2,&nbsp;stride=2)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;卷积层2(输入通道数:8,输出通道数:16,卷积核大小:3&times;3,步长:1,填充:1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;提取特征</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.conv2&nbsp;=&nbsp;nn.Conv2d(8,&nbsp;16,&nbsp;kernel_size=3,&nbsp;stride=1,&nbsp;padding=1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;批归一层2</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;加速训练</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.bn2&nbsp;=&nbsp;nn.BatchNorm2d(16)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;卷积层3(输入通道数:16,输出通道数:32,卷积核大小:3&times;3,步长:1,填充:1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;提取特征</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.conv3&nbsp;=&nbsp;nn.Conv2d(16,&nbsp;32,&nbsp;kernel_size=3,&nbsp;stride=1,&nbsp;padding=1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;批归一层3</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;加速训练</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.bn3&nbsp;=&nbsp;nn.BatchNorm2d(32)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;卷积层4(输入通道数:32,输出通道数:64,卷积核大小:3&times;3,步长:1,填充:1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;提取特征</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.conv4&nbsp;=&nbsp;nn.Conv2d(32,&nbsp;64,&nbsp;kernel_size=3,&nbsp;stride=1,&nbsp;padding=1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;批归一层4</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;加速训练</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.bn4&nbsp;=&nbsp;nn.BatchNorm2d(64)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;卷积层5(输入通道数:64,输出通道数:128,卷积核大小:3&times;3,步长:1,填充:1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;提取特征</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.conv5&nbsp;=&nbsp;nn.Conv2d(64,&nbsp;128,&nbsp;kernel_size=3,&nbsp;stride=1,&nbsp;padding=1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;批归一层5</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;加速训练</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.bn5&nbsp;=&nbsp;nn.BatchNorm2d(128)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;Dropout层</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;防止过拟合</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.dropout&nbsp;=&nbsp;nn.Dropout(0.5)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;全连接层1(输入大小:128&times;1&times;1,输出大小:256)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;进行分类</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.fc1&nbsp;=&nbsp;nn.Linear(128&nbsp;*&nbsp;6&nbsp;*&nbsp;6,&nbsp;256)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;全连接层2(输入大小:256&times;1&times;1,输出大小:out_classes)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;进行分类</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.fc2&nbsp;=&nbsp;nn.Linear(256&nbsp;*&nbsp;1&nbsp;*&nbsp;1,&nbsp;out_classes)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;forward(self,&nbsp;x):</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;f.relu(self.bn1(self.conv1(x)))&nbsp;#&nbsp;把原始图像(28&times;28)传入卷积层1</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;f.relu(self.bn2(self.conv2(x)))&nbsp;#&nbsp;把特征数据传入卷积层2</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;self.pool(x)&nbsp;#&nbsp;把特征数据进行池化</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;f.relu(self.bn3(self.conv3(x)))&nbsp;#&nbsp;把池化后的特征数据传入卷积层3</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;f.relu(self.bn4(self.conv4(x)))&nbsp;#&nbsp;把池化后的特征数据传入卷积层4</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;f.relu(self.bn5(self.conv5(x)))&nbsp;#&nbsp;把池化后的特征数据传入卷积层5</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;self.pool(x)&nbsp;#&nbsp;把特征数据再次进行池化</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;x.reshape(x.shape[0],&nbsp;-1)&nbsp;#&nbsp;展平数据为一维向量</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;self.dropout(x)&nbsp;#&nbsp;通过Dropout层防止过拟合</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;f.relu(self.fc1(x))&nbsp;#&nbsp;把展平后的特征数据传入全连接层1</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;self.dropout(x)&nbsp;#&nbsp;通过Dropout层防止过拟合</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;=&nbsp;self.fc2(x)&nbsp;#&nbsp;把全连接层1的输出传入全连接层2</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;x&nbsp;#&nbsp;输出分类结果</p></code></div>'+
    "<p>创建模型实例并且加载模型数据</p>"+
    '<div class="code"><code><p><b>python</b></p><p>model=&nbsp;CNN(47)</p><p>model.load_state_dict(torch.load(&quot;./HH_CNN_EMNIST_V14.pth&quot;))</p></code></div>'+
    "<p>然后就可以通过以下函数使用模型了</p>"+
    '<div class="code"><code><p><b>python</b></p><p>def&nbsp;get_img_label_from_model(img,model):</p><p>&nbsp;&nbsp;&nbsp;&nbsp;xb=img.unsqueeze(0)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;yb=model(xb)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;_,preds=torch.max(yb,dim=1)</p><p>&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;preds[0].item()</p></code></div>'+
    "<p>模型输入:28乘28的灰度图像</p>"+
    "<p>以下是将png图像转换成模型可以读取的格式的代码(使用PIL库)(不包含裁剪图像的代码)</p>"+
    '<div class="code"><code><p><b>python</b></p><p>from&nbsp;PIL&nbsp;import&nbsp;Image</p><p>img=np.array(Image.open(img_name).convert(&apos;L&apos;))/255.0&nbsp;#&nbsp;读取灰度图像</p><p>img_tensor=torch.from_numpy(img).float().unsqueeze(0)&nbsp;#&nbsp;转换为张量</p><p>model_out=get_img_label_from_MNIST(img_tensor,model)&nbsp;#&nbsp;使用模型预测</p><p>print(model_out)</p></code></div>'+
    "<h4>模型训练超参数</h4>"+
    "<p>输入数据大小:28*28=784</p>"+
    "<p>输出的类别数:47</p>"+
    "<p>学习率:0.0005</p>"+
    "<p>批大小:100</p>"+
    "<p>训练轮数:5*10 # 实际上没有达到这么多,因为在约第15次训练时触发了早停</p>"+
    "<p>训练集大小:697932 + 116323 # 训练数据集+测试数据集</p>"+
    "<p>损失函数:nn.CrossEntropyLoss() # 交叉熵损失函数</p>"+
    "<p>优化器:torch.optim.Adam() # Adam优化器</p>"+
    "<p>&nbsp;</p>"+
    "<p>&nbsp;</p>"+
    "<p>&nbsp;</p>"+
    "<p>ps:如果有错误或者改进建议可以发送邮件至 hh201136@126.com :D</p>"+
    "<p>---最后编辑时间:2025&nbsp;3&nbsp;1<p>"
]

if (get_file>=reader_texts.length)
{
    document.write("<h1>输入的查询ID无效 :(</h1>");
}
else
{
    document.write(reader_texts[get_file]);
}