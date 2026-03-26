import { useState } from 'react';
import { Settings, Copy, Sparkles, AlertTriangle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('first');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [output, setOutput] = useState('');

  const tabs = [
    { id: 'first', label: '首次病程' },
    { id: 'daily', label: '日常查房' },
    { id: 'discharge', label: '出院小结' },
  ];

  const handleGenerate = () => {
    // 占位：AI 生成逻辑（待实现）
    setOutput(`【${tabs.find(t => t.id === activeTab)?.label}】\n\n根据您提供的信息，AI 正在生成医疗文书...\n\n主诉及现病史：${input1 || '（待填写）'}\n中医四诊：${input2 || '（待填写）'}\n查体及阳性体征：${input3 || '（待填写）'}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    // 可以在这里添加复制成功的提示
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">医</span>
          </div>
          <h1 className="text-xl font-semibold text-slate-800">DocEase 医简</h1>
        </div>
        <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
          <Settings size={20} />
        </button>
      </header>

      {/* 主体区域：左右分栏 */}
      <main className="flex-1 flex overflow-hidden">
        {/* 左侧输入区 (40%) */}
        <section className="w-[40%] min-w-[360px] max-w-[480px] flex flex-col border-r border-slate-200 bg-white">
          {/* Tab 切换 */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`medical-tab flex-1 ${activeTab === tab.id ? 'medical-tab-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 输入表单区 */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* 输入框 1 */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                1. 主诉及现病史速记
              </label>
              <textarea
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="请输入患者主诉及现病史要点..."
                className="medical-input h-28"
              />
            </div>

            {/* 输入框 2 */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                2. 中医四诊（望闻问切）
              </label>
              <textarea
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="望：神色形态&#10;闻：声音气味&#10;问：症状问诊&#10;切：脉象舌象"
                className="medical-input h-32"
              />
            </div>

            {/* 输入框 3 */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">
                3. 查体及阳性体征
              </label>
              <textarea
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                placeholder="记录体格检查发现及阳性体征..."
                className="medical-input h-28"
              />
            </div>
          </div>

          {/* AI 生成按钮 */}
          <div className="p-5 border-t border-slate-200 bg-slate-50">
            <button
              onClick={handleGenerate}
              className="medical-btn-primary w-full py-3 text-base"
            >
              <Sparkles size={18} />
              AI 智能生成
            </button>
          </div>
        </section>

        {/* 右侧输出与预警区 (60%) */}
        <section className="flex-1 flex flex-col bg-slate-50">
          {/* 上部：标准文书预览 */}
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                标准文书预览
              </h2>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-300 rounded-md hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <Copy size={14} />
                一键复制
              </button>
            </div>
            
            <div className="flex-1 medical-card overflow-hidden flex flex-col">
              <textarea
                value={output}
                readOnly
                placeholder="AI 生成的医疗文书将显示在这里..."
                className="flex-1 w-full p-5 bg-white text-slate-700 resize-none focus:outline-none font-mono text-sm leading-relaxed"
              />
            </div>
          </div>

          {/* 下部：合规审查面板 */}
          <div className="px-6 pb-6">
            <div className="medical-card border-l-4 border-l-amber-500 p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={18} className="text-amber-600" />
                <h3 className="font-semibold text-slate-800">合规审查 (Pre-flight Check)</h3>
              </div>
              <p className="text-sm text-slate-600">
                系统就绪，等待审查...
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;