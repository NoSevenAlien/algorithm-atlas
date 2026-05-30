const algorithms = [
  {
    name: "线性回归",
    category: "监督学习",
    level: "入门",
    priority: 1,
    tasks: ["回归", "预测", "解释性建模"],
    summary: "用线性函数拟合输入特征与连续目标之间的关系，是理解损失函数、正则化和特征工程的起点。",
    strengths: ["可解释性强", "训练速度快", "适合作为基线模型"],
    limits: ["难以表达强非线性", "对异常值敏感", "依赖特征设计"],
    useCases: ["房价预测", "需求预测", "业务指标归因"],
    prereq: ["线性代数", "最小二乘", "梯度下降"]
  },
  {
    name: "岭回归与 Lasso",
    category: "监督学习",
    level: "入门",
    priority: 2,
    tasks: ["回归", "特征选择", "正则化"],
    summary: "在线性回归中加入 L2 或 L1 正则项，控制模型复杂度并缓解过拟合。",
    strengths: ["稳定性好", "能处理多重共线性", "Lasso 可做稀疏特征选择"],
    limits: ["仍受线性假设限制", "需要调正则强度", "特征缩放很重要"],
    useCases: ["高维表格数据", "风险评分", "可解释预测"],
    prereq: ["线性回归", "正则化", "交叉验证"]
  },
  {
    name: "逻辑回归",
    category: "监督学习",
    level: "入门",
    priority: 3,
    tasks: ["分类", "概率估计", "风险评分"],
    summary: "通过 Sigmoid 或 Softmax 将线性输出映射为类别概率，是分类任务最常用的强基线。",
    strengths: ["概率输出清晰", "部署成本低", "解释性好"],
    limits: ["表达能力有限", "需要处理非线性特征", "类别不平衡需额外策略"],
    useCases: ["转化率预测", "信用评分", "医学二分类"],
    prereq: ["交叉熵", "最大似然", "分类指标"]
  },
  {
    name: "朴素贝叶斯",
    category: "监督学习",
    level: "入门",
    priority: 4,
    tasks: ["分类", "文本分类", "概率建模"],
    summary: "基于贝叶斯定理和条件独立假设进行快速分类，尤其适合稀疏文本特征。",
    strengths: ["训练极快", "小数据表现稳", "适合高维稀疏输入"],
    limits: ["独立假设过强", "特征相关时性能下降", "概率校准有限"],
    useCases: ["垃圾邮件识别", "情感分类", "新闻分类"],
    prereq: ["概率论", "贝叶斯公式", "词袋模型"]
  },
  {
    name: "K 近邻",
    category: "监督学习",
    level: "入门",
    priority: 5,
    tasks: ["分类", "回归", "相似度检索"],
    summary: "根据最近邻样本的标签或数值做预测，直观但对距离度量和数据规模敏感。",
    strengths: ["无需显式训练", "概念直观", "可适配多种距离函数"],
    limits: ["推理成本高", "高维空间退化", "对特征缩放敏感"],
    useCases: ["相似商品推荐", "异常样本初筛", "小规模分类"],
    prereq: ["距离度量", "特征缩放", "验证集"]
  },
  {
    name: "支持向量机",
    category: "监督学习",
    level: "进阶",
    priority: 8,
    tasks: ["分类", "回归", "小样本建模"],
    summary: "寻找最大间隔超平面，并可通过核函数处理非线性边界。",
    strengths: ["小中型数据强", "核技巧灵活", "泛化能力好"],
    limits: ["大数据训练慢", "参数选择敏感", "概率输出需校准"],
    useCases: ["生物信息分类", "文本分类", "工业缺陷识别"],
    prereq: ["凸优化", "核函数", "间隔最大化"]
  },
  {
    name: "决策树",
    category: "树模型",
    level: "入门",
    priority: 6,
    tasks: ["分类", "回归", "规则提取"],
    summary: "通过特征分裂形成树状规则，易解释，是集成树模型的基础。",
    strengths: ["可解释", "处理非线性", "不强依赖特征缩放"],
    limits: ["容易过拟合", "单树稳定性弱", "外推能力差"],
    useCases: ["规则发现", "客户分群", "审批策略"],
    prereq: ["信息增益", "基尼系数", "剪枝"]
  },
  {
    name: "随机森林",
    category: "树模型",
    level: "入门",
    priority: 7,
    tasks: ["分类", "回归", "特征重要性"],
    summary: "通过 Bagging 训练多棵决策树并投票或平均，显著提升稳定性。",
    strengths: ["鲁棒性好", "调参相对简单", "可估计特征重要性"],
    limits: ["模型较大", "解释性弱于单树", "高维稀疏文本不一定占优"],
    useCases: ["风控", "流失预测", "制造质量预测"],
    prereq: ["决策树", "Bootstrap", "方差降低"]
  },
  {
    name: "Gradient Boosting",
    category: "树模型",
    level: "进阶",
    priority: 9,
    tasks: ["分类", "回归", "排序"],
    summary: "逐步训练弱学习器来修正前一轮残差，是现代表格数据竞赛与业务建模的核心思想。",
    strengths: ["精度高", "适合表格数据", "可处理复杂非线性"],
    limits: ["调参较多", "训练可能较慢", "对噪声和泄漏敏感"],
    useCases: ["点击率预测", "信用风险", "搜索排序"],
    prereq: ["决策树", "梯度下降", "集成学习"]
  },
  {
    name: "XGBoost",
    category: "树模型",
    level: "进阶",
    priority: 10,
    tasks: ["分类", "回归", "排序"],
    summary: "高性能梯度提升树实现，引入正则化、二阶梯度和系统级优化。",
    strengths: ["精度强", "工程成熟", "缺失值处理友好"],
    limits: ["参数复杂", "模型解释需工具辅助", "深度特征表达有限"],
    useCases: ["Kaggle 表格任务", "金融风控", "广告预估"],
    prereq: ["Gradient Boosting", "正则化", "树模型调参"]
  },
  {
    name: "LightGBM",
    category: "树模型",
    level: "进阶",
    priority: 11,
    tasks: ["分类", "回归", "排序"],
    summary: "微软推出的高效 GBDT 框架，使用直方图算法、叶子优先生长和类别特征支持。",
    strengths: ["训练快", "内存效率高", "适合大规模表格数据"],
    limits: ["小数据易过拟合", "需要控制叶子复杂度", "类别特征需谨慎处理"],
    useCases: ["大规模风控", "推荐排序", "销售预测"],
    prereq: ["GBDT", "直方图分桶", "过拟合控制"]
  },
  {
    name: "CatBoost",
    category: "树模型",
    level: "进阶",
    priority: 12,
    tasks: ["分类", "回归", "类别特征"],
    summary: "对类别特征和有序提升做了专门设计，减少目标泄漏并降低预处理负担。",
    strengths: ["类别特征友好", "默认参数强", "抗泄漏设计"],
    limits: ["训练资源可能较高", "生态略小于 XGBoost", "超大规模需评估成本"],
    useCases: ["电商用户画像", "广告模型", "欺诈检测"],
    prereq: ["GBDT", "目标编码", "交叉验证"]
  },
  {
    name: "K-Means",
    category: "无监督学习",
    level: "入门",
    priority: 13,
    tasks: ["聚类", "分群", "向量量化"],
    summary: "通过迭代更新簇中心，将样本划分为 K 个相似群体。",
    strengths: ["简单高效", "适合大规模数据", "结果易解释"],
    limits: ["需要预设 K", "偏好球形簇", "对初始值和异常值敏感"],
    useCases: ["客户分群", "图像压缩", "Embedding 聚类"],
    prereq: ["欧氏距离", "聚类评估", "特征缩放"]
  },
  {
    name: "层次聚类",
    category: "无监督学习",
    level: "入门",
    priority: 15,
    tasks: ["聚类", "谱系分析", "探索性分析"],
    summary: "构建样本之间的层次树，适合观察不同粒度的聚类结构。",
    strengths: ["无需预设簇数", "可视化直观", "适合小中型探索"],
    limits: ["大数据成本高", "合并策略影响大", "早期错误难修正"],
    useCases: ["用户层级分群", "基因表达分析", "文档主题探索"],
    prereq: ["距离矩阵", "链接准则", "树状图"]
  },
  {
    name: "DBSCAN",
    category: "无监督学习",
    level: "进阶",
    priority: 16,
    tasks: ["聚类", "噪声识别", "空间数据"],
    summary: "基于密度连接发现任意形状簇，并将低密度点识别为噪声。",
    strengths: ["无需指定簇数", "能识别异常点", "支持非球形簇"],
    limits: ["参数 eps 敏感", "密度差异大时困难", "高维表现变差"],
    useCases: ["地理热点发现", "异常检测", "轨迹聚类"],
    prereq: ["密度估计", "距离度量", "邻域搜索"]
  },
  {
    name: "Gaussian Mixture Model",
    category: "无监督学习",
    level: "进阶",
    priority: 17,
    tasks: ["聚类", "概率密度", "软分配"],
    summary: "用多个高斯分布混合表示数据分布，通过 EM 算法估计参数。",
    strengths: ["输出软概率", "可建模椭圆簇", "概率解释清晰"],
    limits: ["分布假设较强", "初始值敏感", "需要选择组件数"],
    useCases: ["声学建模", "异常检测", "客户概率分群"],
    prereq: ["高斯分布", "EM 算法", "最大似然"]
  },
  {
    name: "主成分分析 PCA",
    category: "降维与表示",
    level: "入门",
    priority: 14,
    tasks: ["降维", "去噪", "可视化"],
    summary: "寻找最大方差方向，将高维数据投影到低维空间。",
    strengths: ["速度快", "线性可解释", "常用于预处理"],
    limits: ["只能捕捉线性结构", "对尺度敏感", "主成分语义不一定清晰"],
    useCases: ["特征压缩", "数据可视化", "噪声过滤"],
    prereq: ["协方差矩阵", "特征值分解", "标准化"]
  },
  {
    name: "t-SNE",
    category: "降维与表示",
    level: "进阶",
    priority: 31,
    tasks: ["可视化", "Embedding 分析", "局部结构"],
    summary: "保持局部相似性，将高维样本映射到二维或三维，常用于可视化聚类结构。",
    strengths: ["可视化效果好", "揭示局部群簇", "适合探索 Embedding"],
    limits: ["不适合推理变换", "全局距离不可过度解读", "参数敏感"],
    useCases: ["模型诊断", "文本向量可视化", "单细胞数据分析"],
    prereq: ["概率分布", "KL 散度", "流形学习"]
  },
  {
    name: "UMAP",
    category: "降维与表示",
    level: "进阶",
    priority: 32,
    tasks: ["可视化", "降维", "流形学习"],
    summary: "基于拓扑和邻域图的非线性降维方法，通常比 t-SNE 更快并较好保留全局结构。",
    strengths: ["速度较快", "可用于新样本变换", "可视化清晰"],
    limits: ["参数仍敏感", "理论门槛更高", "结果存在随机性"],
    useCases: ["Embedding 可视化", "生物数据降维", "聚类前处理"],
    prereq: ["邻域图", "流形假设", "距离度量"]
  },
  {
    name: "孤立森林",
    category: "异常检测",
    level: "入门",
    priority: 24,
    tasks: ["异常检测", "欺诈识别", "质量监控"],
    summary: "通过随机切分特征空间，利用异常点更容易被隔离的特性计算异常分数。",
    strengths: ["无需标签", "速度快", "适合高维表格"],
    limits: ["异常定义依赖数据分布", "解释性有限", "需设置污染率"],
    useCases: ["交易欺诈", "设备故障", "日志异常"],
    prereq: ["树模型", "异常分数", "无监督评估"]
  },
  {
    name: "One-Class SVM",
    category: "异常检测",
    level: "进阶",
    priority: 33,
    tasks: ["异常检测", "边界学习", "小样本"],
    summary: "学习正常样本所在区域的边界，将边界外样本视为异常。",
    strengths: ["适合小样本", "核函数灵活", "理论清晰"],
    limits: ["大数据慢", "参数敏感", "高维稀疏场景困难"],
    useCases: ["工业质检", "安全入侵检测", "医学异常筛查"],
    prereq: ["SVM", "核函数", "密度边界"]
  },
  {
    name: "ARIMA",
    category: "时间序列",
    level: "进阶",
    priority: 25,
    tasks: ["预测", "趋势建模", "季节性分析"],
    summary: "经典统计时间序列模型，通过自回归、差分和移动平均建模序列依赖。",
    strengths: ["解释性强", "小数据可用", "统计诊断成熟"],
    limits: ["线性假设明显", "多变量扩展不便", "复杂非平稳模式困难"],
    useCases: ["库存预测", "流量预测", "金融时间序列"],
    prereq: ["自相关", "平稳性", "差分"]
  },
  {
    name: "Prophet",
    category: "时间序列",
    level: "入门",
    priority: 26,
    tasks: ["业务预测", "季节性", "节假日效应"],
    summary: "面向业务时间序列的可解释预测模型，将趋势、季节性和节假日组合建模。",
    strengths: ["上手快", "可解释", "处理缺失和节假日方便"],
    limits: ["复杂非线性有限", "极短序列不稳", "精度不一定胜过专用模型"],
    useCases: ["销售预测", "访问量预测", "运营规划"],
    prereq: ["时间序列拆解", "趋势", "季节性"]
  },
  {
    name: "多层感知机 MLP",
    category: "深度学习基础",
    level: "入门",
    priority: 18,
    tasks: ["分类", "回归", "非线性建模"],
    summary: "由全连接层和非线性激活组成，是理解神经网络训练的基础结构。",
    strengths: ["表达能力强于线性模型", "结构简单", "适配多种数据"],
    limits: ["对结构化先验利用少", "参数量可能大", "需要归一化与正则化"],
    useCases: ["表格深度模型", "Embedding 后分类", "函数逼近"],
    prereq: ["反向传播", "激活函数", "优化器"]
  },
  {
    name: "卷积神经网络 CNN",
    category: "计算机视觉",
    level: "入门",
    priority: 19,
    tasks: ["图像分类", "检测", "分割"],
    summary: "使用卷积核提取局部空间特征，曾长期是视觉任务的主力架构。",
    strengths: ["参数共享", "空间归纳偏置强", "推理效率高"],
    limits: ["全局依赖建模弱", "迁移到非网格数据困难", "大模型趋势下需与注意力结合"],
    useCases: ["图像识别", "医学影像", "工业视觉"],
    prereq: ["卷积", "池化", "特征图"]
  },
  {
    name: "ResNet",
    category: "计算机视觉",
    level: "进阶",
    priority: 27,
    tasks: ["图像分类", "特征提取", "视觉骨干"],
    summary: "通过残差连接缓解深层网络退化问题，是视觉模型设计的里程碑。",
    strengths: ["训练深层网络稳定", "迁移学习生态丰富", "结构清晰"],
    limits: ["对长程关系有限", "参数效率不如新型架构", "需要数据增强"],
    useCases: ["图像分类", "检测骨干", "医学影像特征"],
    prereq: ["CNN", "残差连接", "BatchNorm"]
  },
  {
    name: "U-Net",
    category: "计算机视觉",
    level: "进阶",
    priority: 28,
    tasks: ["图像分割", "医学影像", "像素级预测"],
    summary: "编码器-解码器加跳跃连接结构，擅长保留局部细节并输出像素级结果。",
    strengths: ["小数据医学场景强", "定位精细", "结构可扩展"],
    limits: ["依赖标注质量", "大图训练成本高", "跨域泛化需增强"],
    useCases: ["器官分割", "缺陷分割", "遥感分割"],
    prereq: ["CNN", "上采样", "Dice 指标"]
  },
  {
    name: "YOLO",
    category: "计算机视觉",
    level: "进阶",
    priority: 29,
    tasks: ["目标检测", "实时视觉", "边缘部署"],
    summary: "单阶段目标检测系列，以高速度和工程可用性闻名。",
    strengths: ["实时性强", "生态成熟", "部署友好"],
    limits: ["小目标和密集目标需调优", "版本众多需谨慎选型", "标注成本较高"],
    useCases: ["安防检测", "工业检测", "自动驾驶感知"],
    prereq: ["边界框", "NMS", "检测指标"]
  },
  {
    name: "循环神经网络 RNN",
    category: "序列模型",
    level: "入门",
    priority: 20,
    tasks: ["序列建模", "文本", "时间序列"],
    summary: "按时间步递归处理序列数据，是理解序列模型的经典入口。",
    strengths: ["结构直观", "适合短序列", "参数共享"],
    limits: ["长依赖困难", "并行效率低", "梯度消失明显"],
    useCases: ["早期语言模型", "简单序列预测", "信号处理"],
    prereq: ["隐藏状态", "BPTT", "梯度消失"]
  },
  {
    name: "LSTM 与 GRU",
    category: "序列模型",
    level: "进阶",
    priority: 21,
    tasks: ["序列建模", "时间序列", "语音"],
    summary: "通过门控机制缓解 RNN 的长依赖问题，仍常用于小模型和时序场景。",
    strengths: ["长依赖优于普通 RNN", "适合流式数据", "小规模部署成本低"],
    limits: ["并行性弱", "超长上下文困难", "在 NLP 主流任务中被 Transformer 替代"],
    useCases: ["设备时序预测", "语音特征建模", "金融序列"],
    prereq: ["RNN", "门控机制", "序列损失"]
  },
  {
    name: "Attention",
    category: "深度学习基础",
    level: "进阶",
    priority: 22,
    tasks: ["序列建模", "对齐", "上下文聚合"],
    summary: "根据 Query、Key、Value 计算动态加权聚合，是 Transformer 和现代大模型的核心机制。",
    strengths: ["建模长程依赖", "可并行", "可解释一定程度的关联"],
    limits: ["复杂度随序列长度平方增长", "注意力权重不等同因果解释", "长上下文需优化"],
    useCases: ["机器翻译", "文本生成", "多模态对齐"],
    prereq: ["向量相似度", "Softmax", "矩阵乘法"]
  },
  {
    name: "Transformer",
    category: "大模型与 NLP",
    level: "进阶",
    priority: 23,
    tasks: ["NLP", "生成式模型", "多模态"],
    summary: "基于自注意力和前馈网络的通用架构，支撑了现代语言模型、视觉模型和多模态模型。",
    strengths: ["并行训练", "可扩展性强", "迁移能力强"],
    limits: ["训练成本高", "长上下文成本高", "需要大规模数据与工程"],
    useCases: ["大语言模型", "机器翻译", "代码生成"],
    prereq: ["Attention", "位置编码", "LayerNorm"]
  },
  {
    name: "BERT",
    category: "大模型与 NLP",
    level: "进阶",
    priority: 34,
    tasks: ["文本理解", "分类", "信息抽取"],
    summary: "双向 Transformer 编码器，通过掩码语言模型预训练，擅长文本理解任务。",
    strengths: ["理解任务强", "微调成熟", "中文生态丰富"],
    limits: ["生成能力弱", "输入长度有限", "推理成本高于传统模型"],
    useCases: ["文本分类", "实体识别", "问答匹配"],
    prereq: ["Transformer Encoder", "预训练", "微调"]
  },
  {
    name: "GPT 类自回归语言模型",
    category: "大模型与 NLP",
    level: "高级",
    priority: 35,
    tasks: ["文本生成", "对话", "智能体"],
    summary: "使用因果语言建模逐 token 生成文本，是现代大语言模型应用的核心范式。",
    strengths: ["生成能力强", "少样本泛化", "可通过工具调用扩展能力"],
    limits: ["可能幻觉", "成本和延迟需控制", "对齐和安全要求高"],
    useCases: ["聊天助手", "代码生成", "知识问答"],
    prereq: ["Transformer Decoder", "Tokenization", "RLHF 或偏好优化"]
  },
  {
    name: "Vision Transformer",
    category: "计算机视觉",
    level: "高级",
    priority: 36,
    tasks: ["图像分类", "视觉骨干", "多模态"],
    summary: "将图像切分为 Patch 后送入 Transformer，把 NLP 架构迁移到视觉领域。",
    strengths: ["全局建模强", "大数据预训练效果好", "易与多模态融合"],
    limits: ["小数据不如 CNN 稳", "算力需求高", "位置和局部细节需设计"],
    useCases: ["大规模视觉预训练", "多模态检索", "图像分类"],
    prereq: ["Transformer", "Patch Embedding", "数据增强"]
  },
  {
    name: "自编码器 Autoencoder",
    category: "生成式模型",
    level: "进阶",
    priority: 37,
    tasks: ["表示学习", "降维", "去噪"],
    summary: "通过编码器压缩输入再由解码器重构，学习潜在表示。",
    strengths: ["无监督学习表示", "可做去噪", "结构灵活"],
    limits: ["表示可能缺乏语义", "重构目标不一定匹配下游", "易学到恒等映射"],
    useCases: ["异常检测", "图像去噪", "预训练表示"],
    prereq: ["神经网络", "重构损失", "瓶颈层"]
  },
  {
    name: "变分自编码器 VAE",
    category: "生成式模型",
    level: "高级",
    priority: 38,
    tasks: ["生成建模", "潜变量", "表示学习"],
    summary: "用概率潜变量建模数据分布，通过重参数化技巧训练可生成样本的编码器-解码器。",
    strengths: ["潜空间连续", "概率解释清楚", "适合表示学习"],
    limits: ["生成样本可能模糊", "目标函数权衡复杂", "后验坍塌风险"],
    useCases: ["图像生成", "异常检测", "分子生成"],
    prereq: ["概率图模型", "KL 散度", "重参数化"]
  },
  {
    name: "GAN",
    category: "生成式模型",
    level: "高级",
    priority: 39,
    tasks: ["图像生成", "风格迁移", "数据增强"],
    summary: "生成器与判别器对抗训练，曾是高质量图像生成的主流路线。",
    strengths: ["样本锐利", "可做图像到图像转换", "生成速度快"],
    limits: ["训练不稳定", "模式崩塌", "评估困难"],
    useCases: ["人脸生成", "超分辨率", "图像翻译"],
    prereq: ["对抗训练", "CNN", "生成模型评估"]
  },
  {
    name: "扩散模型 Diffusion Model",
    category: "生成式模型",
    level: "高级",
    priority: 40,
    tasks: ["图像生成", "视频生成", "多模态生成"],
    summary: "学习逐步去噪过程，从噪声生成高质量样本，是当前图像与视频生成的重要范式。",
    strengths: ["生成质量高", "训练较稳定", "条件控制能力强"],
    limits: ["采样成本高", "推理延迟明显", "版权和安全治理复杂"],
    useCases: ["文生图", "图像编辑", "视频生成"],
    prereq: ["马尔可夫过程", "去噪目标", "U-Net 或 Transformer"]
  },
  {
    name: "对比学习",
    category: "自监督学习",
    level: "高级",
    priority: 41,
    tasks: ["表示学习", "检索", "预训练"],
    summary: "通过拉近正样本、推远负样本来学习判别性表示。",
    strengths: ["减少标签依赖", "适合检索", "跨模态对齐有效"],
    limits: ["增强策略关键", "负样本设计影响大", "批量大小常影响效果"],
    useCases: ["图文检索", "视觉预训练", "语义相似度"],
    prereq: ["Embedding", "相似度学习", "InfoNCE"]
  },
  {
    name: "Masked Autoencoding",
    category: "自监督学习",
    level: "高级",
    priority: 42,
    tasks: ["预训练", "视觉表示", "语言表示"],
    summary: "遮盖部分输入并学习重建，被用于 BERT、MAE 等多种预训练任务。",
    strengths: ["标签需求低", "可扩展", "适合大规模预训练"],
    limits: ["重建目标和下游可能不一致", "训练资源高", "遮盖策略影响大"],
    useCases: ["语言模型预训练", "视觉预训练", "多模态预训练"],
    prereq: ["Transformer", "自监督目标", "编码器-解码器"]
  },
  {
    name: "矩阵分解",
    category: "推荐系统",
    level: "入门",
    priority: 30,
    tasks: ["推荐", "协同过滤", "Embedding"],
    summary: "将用户-物品交互矩阵分解为低维隐向量，捕捉偏好结构。",
    strengths: ["经典有效", "解释简单", "适合显式或隐式反馈"],
    limits: ["冷启动困难", "上下文特征利用弱", "稀疏数据需正则化"],
    useCases: ["电影推荐", "商品推荐", "音乐推荐"],
    prereq: ["矩阵分解", "协同过滤", "隐向量"]
  },
  {
    name: "因子分解机 FM",
    category: "推荐系统",
    level: "进阶",
    priority: 43,
    tasks: ["点击率预估", "稀疏特征", "推荐"],
    summary: "用低维向量建模稀疏特征之间的二阶交互，是 CTR 模型的重要基础。",
    strengths: ["适合高维稀疏特征", "交互建模高效", "小数据也可用"],
    limits: ["高阶交互有限", "特征工程仍重要", "表达力不如深度模型"],
    useCases: ["广告点击率", "推荐排序", "转化率预估"],
    prereq: ["线性模型", "Embedding", "特征交叉"]
  },
  {
    name: "Wide & Deep",
    category: "推荐系统",
    level: "进阶",
    priority: 44,
    tasks: ["推荐", "CTR", "排序"],
    summary: "结合记忆性的线性宽模型和泛化性的深模型，兼顾规则特征与深度表达。",
    strengths: ["业务特征友好", "表达能力强", "工程实践成熟"],
    limits: ["特征管道复杂", "调参成本高", "需要大规模数据"],
    useCases: ["应用商店推荐", "广告排序", "内容推荐"],
    prereq: ["逻辑回归", "MLP", "Embedding 特征"]
  },
  {
    name: "DeepFM",
    category: "推荐系统",
    level: "高级",
    priority: 45,
    tasks: ["推荐", "CTR", "特征交互"],
    summary: "将 FM 的低阶交互和深度网络的高阶交互联合训练，减少人工特征交叉。",
    strengths: ["端到端", "兼顾低阶和高阶交互", "推荐任务表现强"],
    limits: ["训练和线上特征一致性要求高", "解释性有限", "冷启动仍需策略"],
    useCases: ["广告 CTR", "电商推荐", "信息流排序"],
    prereq: ["FM", "MLP", "推荐系统指标"]
  },
  {
    name: "图神经网络 GNN",
    category: "图学习",
    level: "高级",
    priority: 46,
    tasks: ["节点分类", "链接预测", "图表示"],
    summary: "在图结构上通过消息传递聚合邻居信息，学习节点、边或整图表示。",
    strengths: ["利用关系结构", "适合非欧几里得数据", "可与深度模型融合"],
    limits: ["过平滑", "大图采样复杂", "动态图和异构图工程难"],
    useCases: ["社交网络", "知识图谱", "药物发现"],
    prereq: ["图论", "消息传递", "Embedding"]
  },
  {
    name: "GCN",
    category: "图学习",
    level: "高级",
    priority: 47,
    tasks: ["节点分类", "半监督学习", "图表示"],
    summary: "将卷积思想推广到图结构，通过规范化邻接矩阵聚合邻居特征。",
    strengths: ["结构简洁", "半监督节点分类强", "理论直观"],
    limits: ["层数加深易过平滑", "处理异质关系有限", "大图需采样"],
    useCases: ["论文分类", "社群分析", "知识图谱补全"],
    prereq: ["GNN", "邻接矩阵", "谱图理论"]
  },
  {
    name: "GAT",
    category: "图学习",
    level: "高级",
    priority: 48,
    tasks: ["节点分类", "关系建模", "图注意力"],
    summary: "在图邻居聚合中引入注意力权重，让模型学习不同邻居的重要性。",
    strengths: ["邻居权重自适应", "可解释性相对更好", "适合异质影响"],
    limits: ["计算成本更高", "大图扩展复杂", "注意力权重仍需谨慎解释"],
    useCases: ["推荐图", "交通网络", "知识图谱"],
    prereq: ["GNN", "Attention", "邻居采样"]
  },
  {
    name: "Q-Learning",
    category: "强化学习",
    level: "进阶",
    priority: 49,
    tasks: ["离散控制", "策略学习", "价值函数"],
    summary: "通过更新状态-动作价值函数学习最优策略，是强化学习入门核心算法。",
    strengths: ["模型无关", "概念清晰", "适合小型离散环境"],
    limits: ["状态空间大时困难", "探索效率低", "连续动作需扩展"],
    useCases: ["网格世界", "简单游戏", "调度原型"],
    prereq: ["马尔可夫决策过程", "Bellman 方程", "探索与利用"]
  },
  {
    name: "DQN",
    category: "强化学习",
    level: "高级",
    priority: 50,
    tasks: ["游戏智能体", "离散动作", "深度强化学习"],
    summary: "用神经网络近似 Q 函数，并通过经验回放和目标网络稳定训练。",
    strengths: ["处理高维状态", "经典深度 RL 起点", "适合离散动作"],
    limits: ["样本效率低", "训练不稳定", "连续控制需其他算法"],
    useCases: ["Atari 游戏", "离散控制", "仿真策略"],
    prereq: ["Q-Learning", "神经网络", "经验回放"]
  },
  {
    name: "PPO",
    category: "强化学习",
    level: "高级",
    priority: 51,
    tasks: ["策略优化", "连续控制", "RLHF"],
    summary: "通过限制策略更新幅度实现稳定的策略梯度优化，是实用强化学习常用算法。",
    strengths: ["稳定性较好", "适用范围广", "工程生态成熟"],
    limits: ["样本效率仍有限", "超参敏感", "奖励设计困难"],
    useCases: ["机器人控制", "游戏智能体", "偏好优化"],
    prereq: ["策略梯度", "优势函数", "Actor-Critic"]
  },
  {
    name: "A3C / A2C",
    category: "强化学习",
    level: "高级",
    priority: 52,
    tasks: ["策略学习", "并行训练", "控制"],
    summary: "Actor-Critic 框架下同时学习策略和值函数，A3C 使用异步多环境提升探索。",
    strengths: ["并行探索", "训练较灵活", "适合多环境仿真"],
    limits: ["实现复杂", "稳定性依赖细节", "被 PPO 等方法部分取代"],
    useCases: ["游戏智能体", "仿真控制", "资源调度"],
    prereq: ["Actor-Critic", "策略梯度", "并行采样"]
  },
  {
    name: "因果森林",
    category: "因果推断",
    level: "高级",
    priority: 53,
    tasks: ["异质处理效应", "因果分析", "政策评估"],
    summary: "结合随机森林思想估计不同人群的处理效应，常用于个性化干预分析。",
    strengths: ["能估计异质效应", "非线性能力强", "适合观测数据探索"],
    limits: ["因果假设仍关键", "解释和置信区间需谨慎", "对混杂变量敏感"],
    useCases: ["营销干预", "医疗方案评估", "政策分析"],
    prereq: ["潜在结果框架", "混杂控制", "随机森林"]
  },
  {
    name: "双重机器学习 DML",
    category: "因果推断",
    level: "高级",
    priority: 54,
    tasks: ["因果效应", "高维控制", "经济计量"],
    summary: "使用机器学习估计 nuisance 函数，再通过正交化降低偏差，估计因果参数。",
    strengths: ["适合高维协变量", "理论稳健", "可结合多种 ML 模型"],
    limits: ["假设复杂", "实现需交叉拟合", "不解决未观测混杂"],
    useCases: ["价格弹性", "政策评估", "广告增量"],
    prereq: ["因果推断", "交叉拟合", "正交估计"]
  },
  {
    name: "模型蒸馏",
    category: "MLOps 与优化",
    level: "进阶",
    priority: 55,
    tasks: ["模型压缩", "部署优化", "迁移"],
    summary: "用大模型或教师模型的软标签训练小模型，在性能和成本之间取得平衡。",
    strengths: ["降低延迟和成本", "保留教师知识", "适合端侧部署"],
    limits: ["依赖教师质量", "任务迁移可能损失", "需要设计蒸馏目标"],
    useCases: ["移动端识别", "小模型客服", "边缘推理"],
    prereq: ["Softmax 温度", "迁移学习", "模型评估"]
  },
  {
    name: "量化",
    category: "MLOps 与优化",
    level: "进阶",
    priority: 56,
    tasks: ["推理优化", "模型压缩", "边缘部署"],
    summary: "将模型权重或激活从高精度转换为低精度表示，减少内存占用和推理成本。",
    strengths: ["显著降本", "推理更快", "部署友好"],
    limits: ["精度可能下降", "硬件和算子支持重要", "大模型量化需校准"],
    useCases: ["LLM 推理", "移动端视觉", "实时服务"],
    prereq: ["数值精度", "校准集", "推理引擎"]
  }
];

const glossary = [
  ["过拟合", "模型在训练集表现很好，但对新数据泛化较差，通常需要正则化、数据增强或更严格验证。"],
  ["偏差-方差权衡", "偏差代表模型假设过强带来的系统误差，方差代表模型对数据扰动的敏感程度。"],
  ["交叉验证", "将数据多次划分为训练和验证部分，用更稳健的方式评估模型泛化能力。"],
  ["特征工程", "将原始数据转换为更适合模型学习的输入，是传统机器学习效果的重要来源。"],
  ["Embedding", "将离散对象映射为连续向量，使模型能够计算相似度并学习语义结构。"],
  ["预训练与微调", "先在大规模通用数据上训练表示，再针对具体任务进行少量更新。"],
  ["Prompt Engineering", "通过设计输入指令、上下文和约束，引导大语言模型产生更可靠输出。"],
  ["模型漂移", "线上数据分布或目标关系发生变化，导致模型效果逐渐下降。"],
  ["可解释性", "理解模型为何做出某个预测的能力，常用于风控、医疗和合规场景。"]
];

const mapGroups = [
  ["数学基础", ["线性代数", "概率统计", "优化方法", "信息论"]],
  ["传统机器学习", ["线性模型", "SVM", "树模型", "集成学习"]],
  ["无监督与表示", ["聚类", "降维", "异常检测", "自监督学习"]],
  ["深度网络", ["MLP", "CNN", "RNN", "Attention", "Transformer"]],
  ["应用方向", ["NLP", "计算机视觉", "推荐系统", "图学习"]],
  ["生成式模型", ["VAE", "GAN", "扩散模型", "大语言模型"]],
  ["决策智能", ["强化学习", "因果推断", "A/B 测试", "策略优化"]],
  ["工程化", ["特征平台", "模型服务", "监控告警", "蒸馏量化"]]
];

const state = {
  query: "",
  category: "all",
  level: "all",
  sort: "priority",
  compare: new Set(),
  lang: ["zh", "en"].includes(localStorage.getItem("atlas-lang")) ? localStorage.getItem("atlas-lang") : "zh"
};

const i18n = {
  zh: {
    brandName: "Algorithm Atlas",
    brandSub: "机器学习与深度学习知识库",
    navLibrary: "算法库",
    navMap: "知识图谱",
    navTracks: "学习路径",
    navGlossary: "术语",
    heroEyebrow: "Structured algorithm encyclopedia",
    heroTitle: "机器学习与深度学习算法全景知识站",
    heroCopy:
      "从线性模型、树模型、聚类、降维，到 Transformer、扩散模型、强化学习与 MLOps，用统一结构整理算法原理、适用场景、优缺点和学习优先级。",
    browseLibrary: "浏览算法库",
    viewTracks: "查看学习路径",
    statAlgorithms: "算法条目",
    statDomains: "知识方向",
    statView: "技术视角",
    introOneKicker: "Knowledge model",
    introOneTitle: "统一算法卡片",
    introOneText: "每个算法都包含任务类型、难度、核心思想、典型应用、优势、限制和推荐前置知识，适合查阅与扩展。",
    introTwoKicker: "Explore smoothly",
    introTwoTitle: "轻量快速体验",
    introTwoText: "页面采用模块化数据渲染、即时搜索、筛选和对比面板，适合快速查阅，也方便持续扩展。",
    introThreeKicker: "Broad coverage",
    introThreeTitle: "覆盖主流算法方向",
    introThreeText: "内置机器学习、深度学习、NLP、CV、推荐、图学习、生成式模型与强化学习的主流算法。",
    libraryKicker: "Algorithm library",
    libraryTitle: "算法库",
    libraryText: "搜索、筛选和对比算法，快速判断一个方法是否适合你的任务。",
    searchLabel: "搜索",
    categoryLabel: "方向",
    levelLabel: "难度",
    sortLabel: "排序",
    allCategories: "全部方向",
    allLevels: "全部难度",
    sortPriority: "学习优先级",
    sortName: "名称",
    sortLevel: "难度",
    compareTitle: "对比清单",
    compareText: "在算法卡片中勾选最多 3 个算法，查看任务、优势和限制差异。",
    mapKicker: "Knowledge map",
    mapTitle: "知识图谱",
    mapText: "从数学基础到工程部署，理解算法之间的依赖关系。",
    tracksKicker: "Learning tracks",
    tracksTitle: "学习路径",
    tracksText: "按目标选择路径，避免在算法海洋里迷路。",
    glossaryKicker: "Glossary",
    glossaryTitle: "核心术语",
    footerText: "© 2026 外星七号 Alien No.7. All rights reserved.",
    searchPlaceholder: "输入算法、任务、应用场景...",
    result: (shown, total) => `共 ${shown} 个算法，已收录 ${total} 个主流条目`,
    compareEmpty: "尚未选择算法。",
    compareAction: "对比",
    detailAction: "详情",
    maxCompare: "最多选择 3 个算法进行对比。",
    strengths: "优势",
    limits: "限制",
    useCases: "典型应用",
    prereq: "推荐前置知识",
    strongPoint: "强项",
    limitation: "限制"
  },
  en: {
    brandName: "Algorithm Atlas",
    brandSub: "Machine Learning and Deep Learning Library",
    navLibrary: "Library",
    navMap: "Map",
    navTracks: "Tracks",
    navGlossary: "Glossary",
    heroEyebrow: "Structured algorithm encyclopedia",
    heroTitle: "Machine Learning and Deep Learning Algorithm Atlas",
    heroCopy:
      "A structured knowledge base covering linear models, tree ensembles, clustering, dimensionality reduction, Transformers, diffusion models, reinforcement learning, and MLOps.",
    browseLibrary: "Browse Library",
    viewTracks: "Learning Tracks",
    statAlgorithms: "Algorithms",
    statDomains: "Domains",
    statView: "Viewpoint",
    introOneKicker: "Knowledge model",
    introOneTitle: "Unified Algorithm Cards",
    introOneText: "Each algorithm card summarizes tasks, difficulty, core ideas, applications, strengths, limits, and recommended prerequisites.",
    introTwoKicker: "Explore smoothly",
    introTwoTitle: "Fast Interactive Experience",
    introTwoText: "Instant search, filters, comparison, and modular data rendering make the site easy to read and easy to extend.",
    introThreeKicker: "Broad coverage",
    introThreeTitle: "Mainstream Algorithm Coverage",
    introThreeText: "The library covers classical ML, deep learning, NLP, computer vision, recommendation, graph learning, generative models, and reinforcement learning.",
    libraryKicker: "Algorithm library",
    libraryTitle: "Algorithm Library",
    libraryText: "Search, filter, and compare algorithms to quickly decide which method fits your task.",
    searchLabel: "Search",
    categoryLabel: "Domain",
    levelLabel: "Level",
    sortLabel: "Sort",
    allCategories: "All domains",
    allLevels: "All levels",
    sortPriority: "Learning priority",
    sortName: "Name",
    sortLevel: "Level",
    compareTitle: "Comparison",
    compareText: "Select up to 3 algorithms to compare tasks, strengths, and limits.",
    mapKicker: "Knowledge map",
    mapTitle: "Knowledge Map",
    mapText: "Understand dependencies from mathematical foundations to production deployment.",
    tracksKicker: "Learning tracks",
    tracksTitle: "Learning Tracks",
    tracksText: "Choose a track by goal and learn with a clearer route.",
    glossaryKicker: "Glossary",
    glossaryTitle: "Core Glossary",
    footerText: "© 2026 外星七号 Alien No.7. All rights reserved.",
    searchPlaceholder: "Search algorithms, tasks, or use cases...",
    result: (shown, total) => `${shown} algorithms shown from ${total} mainstream entries`,
    compareEmpty: "No algorithm selected yet.",
    compareAction: "Compare",
    detailAction: "Details",
    maxCompare: "Select up to 3 algorithms for comparison.",
    strengths: "Strengths",
    limits: "Limits",
    useCases: "Use cases",
    prereq: "Prerequisites",
    strongPoint: "Strength",
    limitation: "Limit"
  }
};

const termEn = {
  入门: "Beginner",
  进阶: "Intermediate",
  高级: "Advanced",
  监督学习: "Supervised Learning",
  树模型: "Tree Models",
  无监督学习: "Unsupervised Learning",
  降维与表示: "Dimensionality and Representation",
  异常检测: "Anomaly Detection",
  时间序列: "Time Series",
  深度学习基础: "Deep Learning Basics",
  计算机视觉: "Computer Vision",
  序列模型: "Sequence Models",
  "大模型与 NLP": "Large Models and NLP",
  生成式模型: "Generative Models",
  自监督学习: "Self-Supervised Learning",
  推荐系统: "Recommender Systems",
  图学习: "Graph Learning",
  强化学习: "Reinforcement Learning",
  因果推断: "Causal Inference",
  "MLOps 与优化": "MLOps and Optimization",
  回归: "Regression",
  预测: "Prediction",
  解释性建模: "Interpretable modeling",
  特征选择: "Feature selection",
  正则化: "Regularization",
  分类: "Classification",
  概率估计: "Probability estimation",
  风险评分: "Risk scoring",
  文本分类: "Text classification",
  概率建模: "Probabilistic modeling",
  相似度检索: "Similarity search",
  小样本建模: "Small-data modeling",
  规则提取: "Rule extraction",
  特征重要性: "Feature importance",
  排序: "Ranking",
  类别特征: "Categorical features",
  聚类: "Clustering",
  分群: "Segmentation",
  向量量化: "Vector quantization",
  谱系分析: "Hierarchy analysis",
  探索性分析: "Exploratory analysis",
  噪声识别: "Noise detection",
  空间数据: "Spatial data",
  概率密度: "Density estimation",
  软分配: "Soft assignment",
  降维: "Dimensionality reduction",
  去噪: "Denoising",
  可视化: "Visualization",
  "Embedding 分析": "Embedding analysis",
  局部结构: "Local structure",
  流形学习: "Manifold learning",
  欺诈识别: "Fraud detection",
  质量监控: "Quality monitoring",
  边界学习: "Boundary learning",
  趋势建模: "Trend modeling",
  季节性分析: "Seasonality analysis",
  业务预测: "Business forecasting",
  季节性: "Seasonality",
  节假日效应: "Holiday effects",
  非线性建模: "Nonlinear modeling",
  图像分类: "Image classification",
  检测: "Detection",
  分割: "Segmentation",
  特征提取: "Feature extraction",
  视觉骨干: "Vision backbone",
  图像分割: "Image segmentation",
  医学影像: "Medical imaging",
  像素级预测: "Pixel-level prediction",
  目标检测: "Object detection",
  实时视觉: "Real-time vision",
  边缘部署: "Edge deployment",
  序列建模: "Sequence modeling",
  文本: "Text",
  语音: "Speech",
  对齐: "Alignment",
  上下文聚合: "Context aggregation",
  多模态: "Multimodal",
  NLP: "NLP",
  生成式模型: "Generative models",
  文本理解: "Text understanding",
  信息抽取: "Information extraction",
  文本生成: "Text generation",
  对话: "Conversation",
  智能体: "Agents",
  表示学习: "Representation learning",
  潜变量: "Latent variables",
  图像生成: "Image generation",
  风格迁移: "Style transfer",
  数据增强: "Data augmentation",
  视频生成: "Video generation",
  多模态生成: "Multimodal generation",
  检索: "Retrieval",
  预训练: "Pretraining",
  推荐: "Recommendation",
  协同过滤: "Collaborative filtering",
  点击率预估: "CTR prediction",
  稀疏特征: "Sparse features",
  特征交互: "Feature interaction",
  节点分类: "Node classification",
  链接预测: "Link prediction",
  图表示: "Graph representation",
  半监督学习: "Semi-supervised learning",
  关系建模: "Relation modeling",
  图注意力: "Graph attention",
  离散控制: "Discrete control",
  策略学习: "Policy learning",
  价值函数: "Value function",
  游戏智能体: "Game agents",
  离散动作: "Discrete actions",
  深度强化学习: "Deep reinforcement learning",
  策略优化: "Policy optimization",
  连续控制: "Continuous control",
  RLHF: "RLHF",
  并行训练: "Parallel training",
  控制: "Control",
  异质处理效应: "Heterogeneous treatment effects",
  因果分析: "Causal analysis",
  政策评估: "Policy evaluation",
  因果效应: "Causal effect",
  高维控制: "High-dimensional controls",
  经济计量: "Econometrics",
  模型压缩: "Model compression",
  部署优化: "Deployment optimization",
  迁移: "Transfer",
  推理优化: "Inference optimization"
};

const algorithmEn = {
  线性回归: ["Linear Regression", "Fits a linear relationship between features and a continuous target, making it a strong baseline for regression and explanation."],
  "岭回归与 Lasso": ["Ridge Regression and Lasso", "Adds L2 or L1 regularization to linear regression to control complexity and reduce overfitting."],
  逻辑回归: ["Logistic Regression", "Maps linear scores to class probabilities and remains one of the strongest baselines for classification."],
  朴素贝叶斯: ["Naive Bayes", "Applies Bayes' rule with a conditional independence assumption, especially useful for sparse text features."],
  "K 近邻": ["K-Nearest Neighbors", "Predicts from the labels or values of nearby samples and depends heavily on distance design."],
  支持向量机: ["Support Vector Machine", "Finds a maximum-margin decision boundary and can model nonlinear patterns through kernels."],
  决策树: ["Decision Tree", "Builds interpretable branching rules through feature splits and forms the basis of many tree ensembles."],
  随机森林: ["Random Forest", "Combines many decision trees through bagging to improve stability and reduce variance."],
  "Gradient Boosting": ["Gradient Boosting", "Sequentially trains weak learners to correct residual errors and is highly effective for tabular tasks."],
  XGBoost: ["XGBoost", "A high-performance gradient boosting implementation with regularization, second-order gradients, and system optimization."],
  LightGBM: ["LightGBM", "A fast gradient boosting framework using histogram learning and leaf-wise tree growth."],
  CatBoost: ["CatBoost", "A gradient boosting framework designed for categorical features and leakage-resistant ordered boosting."],
  "K-Means": ["K-Means", "Partitions samples into K clusters by iteratively updating cluster centers."],
  层次聚类: ["Hierarchical Clustering", "Builds a hierarchy of clusters to inspect structure at different granularities."],
  DBSCAN: ["DBSCAN", "Finds density-connected clusters of arbitrary shapes and marks low-density points as noise."],
  "Gaussian Mixture Model": ["Gaussian Mixture Model", "Represents data as a mixture of Gaussian distributions and estimates parameters with EM."],
  "主成分分析 PCA": ["Principal Component Analysis", "Projects high-dimensional data onto directions with maximum variance for compression and visualization."],
  "t-SNE": ["t-SNE", "Maps high-dimensional data to low dimensions while preserving local similarity for visualization."],
  UMAP: ["UMAP", "A nonlinear manifold learning method that often preserves more global structure than t-SNE."],
  孤立森林: ["Isolation Forest", "Scores anomalies by how quickly random splits isolate a sample."],
  "One-Class SVM": ["One-Class SVM", "Learns a boundary around normal data and treats samples outside it as anomalies."],
  ARIMA: ["ARIMA", "A classical time-series model combining autoregression, differencing, and moving averages."],
  Prophet: ["Prophet", "A business-friendly forecasting model that combines trend, seasonality, and holiday effects."],
  "多层感知机 MLP": ["Multilayer Perceptron", "A feed-forward neural network built from dense layers and nonlinear activations."],
  "卷积神经网络 CNN": ["Convolutional Neural Network", "Uses convolutional filters to extract local spatial features from grid-like data."],
  ResNet: ["ResNet", "Uses residual connections to train very deep neural networks more reliably."],
  "U-Net": ["U-Net", "An encoder-decoder architecture with skip connections for precise pixel-level prediction."],
  YOLO: ["YOLO", "A family of single-stage object detectors known for real-time detection and deployment readiness."],
  "循环神经网络 RNN": ["Recurrent Neural Network", "Processes sequences step by step with a shared hidden state."],
  "LSTM 与 GRU": ["LSTM and GRU", "Gated recurrent networks that improve long-dependency modeling over vanilla RNNs."],
  Attention: ["Attention", "Dynamically aggregates information through query-key-value similarity and powers modern sequence models."],
  Transformer: ["Transformer", "A scalable architecture based on self-attention and feed-forward blocks for language, vision, and multimodal models."],
  BERT: ["BERT", "A bidirectional Transformer encoder pretrained with masked language modeling for text understanding."],
  "GPT 类自回归语言模型": ["GPT-style Autoregressive Language Models", "Generate text token by token with causal language modeling and power many conversational systems."],
  "Vision Transformer": ["Vision Transformer", "Splits images into patches and applies Transformer blocks to visual representation learning."],
  "自编码器 Autoencoder": ["Autoencoder", "Learns compressed representations by reconstructing inputs through an encoder-decoder structure."],
  "变分自编码器 VAE": ["Variational Autoencoder", "Models data with probabilistic latent variables and a differentiable reparameterization trick."],
  GAN: ["GAN", "Trains a generator and discriminator adversarially to produce sharp synthetic samples."],
  "扩散模型 Diffusion Model": ["Diffusion Model", "Learns a denoising process that turns noise into high-quality generated samples."],
  对比学习: ["Contrastive Learning", "Learns representations by pulling positive pairs together and pushing negative pairs apart."],
  "Masked Autoencoding": ["Masked Autoencoding", "Learns representations by masking parts of the input and reconstructing the missing content."],
  矩阵分解: ["Matrix Factorization", "Factorizes user-item interactions into low-dimensional latent vectors for recommendation."],
  "因子分解机 FM": ["Factorization Machine", "Models pairwise interactions between sparse features using latent vectors."],
  "Wide & Deep": ["Wide & Deep", "Combines memorization from linear features with generalization from deep neural networks."],
  DeepFM: ["DeepFM", "Jointly learns low-order FM interactions and high-order neural feature interactions."],
  "图神经网络 GNN": ["Graph Neural Network", "Learns node, edge, or graph representations through message passing over graph structure."],
  GCN: ["Graph Convolutional Network", "Generalizes convolution to graphs by aggregating normalized neighbor features."],
  GAT: ["Graph Attention Network", "Adds attention weights to graph neighborhood aggregation."],
  "Q-Learning": ["Q-Learning", "Learns an optimal action-value function for discrete decision-making tasks."],
  DQN: ["Deep Q-Network", "Approximates Q-values with neural networks and stabilizes training with replay and target networks."],
  PPO: ["Proximal Policy Optimization", "Optimizes policies while limiting update size for stable reinforcement learning."],
  "A3C / A2C": ["A3C / A2C", "Actor-Critic methods that learn both a policy and a value function, often with parallel environments."],
  因果森林: ["Causal Forest", "Uses tree ensembles to estimate heterogeneous treatment effects across subgroups."],
  "双重机器学习 DML": ["Double Machine Learning", "Combines machine learning with orthogonalization to estimate causal parameters with high-dimensional controls."],
  模型蒸馏: ["Model Distillation", "Trains a smaller model from a larger teacher to balance accuracy, latency, and cost."],
  量化: ["Quantization", "Reduces model precision to lower memory use and speed up inference."]
};

const trackData = {
  zh: [
    ["机器学习工程师", "基础到工程部署", 78, ["线性回归、逻辑回归、朴素贝叶斯", "决策树、随机森林、XGBoost、LightGBM", "特征工程、交叉验证、模型解释", "模型部署、监控、漂移检测"]],
    ["深度学习研究方向", "网络结构到生成模型", 64, ["MLP、CNN、RNN、LSTM、GRU", "Attention、Transformer、ViT", "自监督学习、对比学习、扩散模型", "微调、蒸馏、量化、多模态"]],
    ["业务数据科学", "分析、预测与决策", 72, ["聚类、降维、异常检测", "时间序列、因果推断、推荐系统", "A/B 测试、指标体系、解释性分析", "自动化报表与可复现实验"]]
  ],
  en: [
    ["Machine Learning Engineer", "From basics to production", 78, ["Linear and logistic regression, Naive Bayes", "Decision trees, random forests, XGBoost, LightGBM", "Feature engineering, validation, model interpretation", "Deployment, monitoring, and drift detection"]],
    ["Deep Learning Research", "Architectures to generative models", 64, ["MLP, CNN, RNN, LSTM, GRU", "Attention, Transformer, Vision Transformer", "Self-supervised learning, contrastive learning, diffusion models", "Fine-tuning, distillation, quantization, multimodal systems"]],
    ["Business Data Science", "Analysis, forecasting, and decisions", 72, ["Clustering, dimensionality reduction, anomaly detection", "Time series, causal inference, recommender systems", "A/B testing, metrics, interpretability", "Automated reports and reproducible experiments"]]
  ]
};

const glossaryData = {
  zh: glossary,
  en: [
    ["Overfitting", "The model performs well on training data but generalizes poorly to new data."],
    ["Bias-Variance Tradeoff", "Bias measures systematic error, while variance measures sensitivity to data changes."],
    ["Cross Validation", "Repeatedly splits data into training and validation folds for more robust evaluation."],
    ["Feature Engineering", "Transforms raw data into inputs that are more useful for learning algorithms."],
    ["Embedding", "Maps discrete objects into continuous vectors for similarity and semantic learning."],
    ["Pretraining and Fine-tuning", "Learns general representations first, then adapts them to a specific task."],
    ["Prompt Engineering", "Designs instructions and context to guide language model outputs."],
    ["Model Drift", "A production model degrades when data distributions or target relationships change."],
    ["Interpretability", "The ability to understand why a model produced a prediction."]
  ]
};

const mapGroupsData = {
  zh: mapGroups,
  en: [
    ["Mathematical Foundations", ["Linear algebra", "Probability", "Optimization", "Information theory"]],
    ["Classical Machine Learning", ["Linear models", "SVM", "Tree models", "Ensemble learning"]],
    ["Unsupervised and Representation", ["Clustering", "Dimensionality reduction", "Anomaly detection", "Self-supervised learning"]],
    ["Deep Networks", ["MLP", "CNN", "RNN", "Attention", "Transformer"]],
    ["Application Areas", ["NLP", "Computer vision", "Recommendation", "Graph learning"]],
    ["Generative Models", ["VAE", "GAN", "Diffusion models", "Large language models"]],
    ["Decision Intelligence", ["Reinforcement learning", "Causal inference", "A/B testing", "Policy optimization"]],
    ["Production", ["Feature platform", "Model serving", "Monitoring", "Distillation and quantization"]]
  ]
};

const els = {
  search: document.querySelector("#searchInput"),
  category: document.querySelector("#categoryFilter"),
  level: document.querySelector("#levelFilter"),
  sort: document.querySelector("#sortFilter"),
  grid: document.querySelector("#algorithmGrid"),
  count: document.querySelector("#resultCount"),
  compare: document.querySelector("#compareList"),
  dialog: document.querySelector("#algorithmDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  closeDialog: document.querySelector("#closeDialog"),
  statCount: document.querySelector("#statCount"),
  map: document.querySelector("#knowledgeMap"),
  glossary: document.querySelector("#glossaryGrid"),
  tracks: document.querySelector("#trackGrid"),
  langButtons: document.querySelectorAll("[data-lang]")
};

function uniqueCategories() {
  return [...new Set(algorithms.map((item) => item.category))].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function t(key) {
  const pack = i18n[state.lang] || i18n.zh;
  return pack[key] || i18n.zh[key] || key;
}

function tr(text) {
  if (state.lang === "zh") return text;
  return termEn[text] || text;
}

function getAlgorithmName(item) {
  if (state.lang === "zh") return item.name;
  return algorithmEn[item.name]?.[0] || item.name;
}

function getAlgorithmSummary(item) {
  if (state.lang === "zh") return item.summary;
  return algorithmEn[item.name]?.[1] || item.summary;
}

function translateArray(items) {
  return items.map((item) => tr(item));
}

function levelClass(level) {
  if (level === "入门") return "level-entry";
  if (level === "进阶") return "level-mid";
  return "level-high";
}

function visibleAlgorithms() {
  const query = state.query.trim().toLowerCase();
  const result = algorithms.filter((item) => {
    const haystack = [
      item.name,
      getAlgorithmName(item),
      item.category,
      tr(item.category),
      item.level,
      tr(item.level),
      item.summary,
      getAlgorithmSummary(item),
      ...item.tasks,
      ...translateArray(item.tasks),
      ...item.useCases,
      ...item.strengths,
      ...item.limits
    ]
      .join(" ")
      .toLowerCase();
    return (
      (!query || haystack.includes(query)) &&
      (state.category === "all" || item.category === state.category) &&
      (state.level === "all" || item.level === state.level)
    );
  });

  return result.sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name, "zh-CN");
    if (state.sort === "level") return a.level.localeCompare(b.level, "zh-CN") || a.priority - b.priority;
    return a.priority - b.priority;
  });
}

function renderFilters() {
  els.category.innerHTML = `<option value="all">${t("allCategories")}</option>`;
  uniqueCategories().forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = tr(category);
    els.category.append(option);
  });
  els.category.value = state.category;
  [...els.level.options].forEach((option) => {
    if (option.value === "all") option.textContent = t("allLevels");
    else option.textContent = tr(option.value);
  });
}

function renderCards() {
  const items = visibleAlgorithms();
  els.count.textContent = t("result")(items.length, algorithms.length);
  els.grid.innerHTML = items
    .map(
      (item) => `
      <article class="algorithm-card">
        <div class="card-head">
          <div>
            <h3>${getAlgorithmName(item)}</h3>
            <div class="pill-row">
              <span class="pill">${tr(item.category)}</span>
              <span class="pill ${levelClass(item.level)}">${tr(item.level)}</span>
            </div>
          </div>
        </div>
        <p>${getAlgorithmSummary(item)}</p>
        <div class="tag-row">
          ${item.tasks.map((task) => `<span class="tag">${tr(task)}</span>`).join("")}
        </div>
        <div class="card-actions">
          <label class="compare-toggle">
            <input type="checkbox" data-compare="${item.name}" ${state.compare.has(item.name) ? "checked" : ""} />
            ${t("compareAction")}
          </label>
          <button class="text-button" type="button" data-detail="${item.name}">${t("detailAction")}</button>
        </div>
      </article>
    `
    )
    .join("");
}

function renderCompare() {
  const selected = algorithms.filter((item) => state.compare.has(item.name));
  if (!selected.length) {
    els.compare.innerHTML = `<p>${t("compareEmpty")}</p>`;
    return;
  }

  els.compare.innerHTML = selected
    .map(
      (item) => `
      <div class="compare-chip">
        <strong>${getAlgorithmName(item)}</strong>
        <span>${tr(item.category)} · ${tr(item.level)}</span>
        <span>${t("strongPoint")}：${state.lang === "zh" ? item.strengths[0] : getAlgorithmSummary(item)}</span>
        <span>${t("limitation")}：${state.lang === "zh" ? item.limits[0] : tr(item.tasks[0])}</span>
      </div>
    `
    )
    .join("");
}

function renderDialog(name) {
  const item = algorithms.find((algorithm) => algorithm.name === name);
  if (!item) return;
  els.dialogContent.innerHTML = `
    <div class="dialog-inner">
      <div>
        <h2>${getAlgorithmName(item)}</h2>
        <div class="pill-row">
          <span class="pill">${tr(item.category)}</span>
          <span class="pill ${levelClass(item.level)}">${tr(item.level)}</span>
          ${item.tasks.map((task) => `<span class="tag">${tr(task)}</span>`).join("")}
        </div>
      </div>
      <p>${getAlgorithmSummary(item)}</p>
      <div class="detail-grid">
        <section class="detail-box">
          <h3>${t("strengths")}</h3>
          <ul>${(state.lang === "zh" ? item.strengths : [getAlgorithmSummary(item), "Works well as part of a broader modeling toolkit.", "Useful when its assumptions match the data."]).map((text) => `<li>${text}</li>`).join("")}</ul>
        </section>
        <section class="detail-box">
          <h3>${t("limits")}</h3>
          <ul>${(state.lang === "zh" ? item.limits : ["Requires validation against real data.", "Performance depends on feature quality, tuning, and deployment constraints.", "May need monitoring when data distribution changes."]).map((text) => `<li>${text}</li>`).join("")}</ul>
        </section>
        <section class="detail-box">
          <h3>${t("useCases")}</h3>
          <ul>${(state.lang === "zh" ? item.useCases : translateArray(item.tasks)).map((text) => `<li>${text}</li>`).join("")}</ul>
        </section>
        <section class="detail-box">
          <h3>${t("prereq")}</h3>
          <ul>${(state.lang === "zh" ? item.prereq : ["Core machine learning concepts", "Evaluation metrics", "Data preprocessing and validation"]).map((text) => `<li>${text}</li>`).join("")}</ul>
        </section>
      </div>
    </div>
  `;
  els.dialog.showModal();
}

function renderMap() {
  els.map.innerHTML = mapGroupsData[state.lang]
    .map(
      ([title, items], index) => `
      <article class="map-node" style="border-left-color: ${["#2364db", "#008c8c", "#2f8d46", "#a66f00"][index % 4]}">
        <h3>${title}</h3>
        <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    `
    )
    .join("");
}

function renderGlossary() {
  els.glossary.innerHTML = glossaryData[state.lang]
    .map(
      ([term, text]) => `
      <article class="glossary-item">
        <h3>${term}</h3>
        <p>${text}</p>
      </article>
    `
    )
    .join("");
}

function renderTracks() {
  els.tracks.innerHTML = trackData[state.lang]
    .map(
      ([title, meta, progress, steps]) => `
      <article class="track-card">
        <header>
          <span class="track-meta">${meta}</span>
          <h3>${title}</h3>
        </header>
        <ol class="track-steps">
          ${steps
            .map(
              (step, index) => `
              <li>
                <span class="step-number">${index + 1}</span>
                <span><strong>${state.lang === "zh" ? `阶段 ${index + 1}` : `Stage ${index + 1}`}</strong>${step}</span>
              </li>
            `
            )
            .join("")}
        </ol>
        <div class="track-progress" aria-label="${progress}%"><span style="width: ${progress}%"></span></div>
      </article>
    `
    )
    .join("");
}

function renderStaticText() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = state.lang === "zh" ? "Algorithm Atlas | 机器学习与深度学习知识库" : "Algorithm Atlas | Machine Learning and Deep Learning Library";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  els.search.placeholder = t("searchPlaceholder");
  els.langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });
}

function renderAll() {
  renderStaticText();
  renderFilters();
  renderCards();
  renderCompare();
  renderMap();
  renderTracks();
  renderGlossary();
}

function bindEvents() {
  els.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderCards();
  });
  els.category.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderCards();
  });
  els.level.addEventListener("change", (event) => {
    state.level = event.target.value;
    renderCards();
  });
  els.sort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderCards();
  });

  els.grid.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-detail]");
    if (detailButton) renderDialog(detailButton.dataset.detail);
  });

  els.grid.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-compare]");
    if (!checkbox) return;
    if (checkbox.checked && state.compare.size >= 3) {
      checkbox.checked = false;
      window.alert(t("maxCompare"));
      return;
    }
    if (checkbox.checked) state.compare.add(checkbox.dataset.compare);
    else state.compare.delete(checkbox.dataset.compare);
    renderCompare();
  });

  els.closeDialog.addEventListener("click", () => els.dialog.close());
  els.dialog.addEventListener("click", (event) => {
    if (event.target === els.dialog) els.dialog.close();
  });
  els.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("atlas-lang", state.lang);
      renderAll();
    });
  });
}

function initCanvas() {
  const canvas = document.querySelector("#networkCanvas");
  const ctx = canvas.getContext("2d");
  const nodes = Array.from({ length: 78 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0008,
    vy: (Math.random() - 0.5) * 0.0008,
    r: 1.4 + Math.random() * 2.2
  }));

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * scale));
    canvas.height = Math.max(1, Math.floor(rect.height * scale));
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function draw() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
    ctx.strokeStyle = "rgba(99, 206, 217, 0.22)";
    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > 1) node.vx *= -1;
      if (node.y < 0 || node.y > 1) node.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = (a.x - b.x) * width;
        const dy = (a.y - b.y) * height;
        const distance = Math.hypot(dx, dy);
        if (distance < 150) {
          ctx.globalAlpha = 1 - distance / 150;
          ctx.beginPath();
          ctx.moveTo(a.x * width, a.y * height);
          ctx.lineTo(b.x * width, b.y * height);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x * width, node.y * height, node.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

function init() {
  els.statCount.textContent = algorithms.length;
  renderAll();
  bindEvents();
  initCanvas();
}

try {
  init();
} catch (error) {
  console.error(error);
  const grid = document.querySelector("#algorithmGrid");
  const count = document.querySelector("#resultCount");
  if (count) count.textContent = "页面加载遇到问题，请刷新重试。";
  if (grid) {
    grid.innerHTML = `
      <article class="algorithm-card">
        <h3>内容加载失败</h3>
        <p>算法库数据仍在本地文件中，请刷新页面；如果问题持续，请检查浏览器控制台错误。</p>
      </article>
    `;
  }
}
