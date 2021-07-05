import Tooltip from './components/Tooltip';
import './App.css';

const Content=()=>{
  return (
    <div>
      <h1>Contentコンポーネント</h1>
    </div>
  )
}

function App() {
  return (
    <div 
      style={{
        width:'500px',
        margin:'0 auto',
      }}
    >
      <h1>Reactで始めるTooltipの実装</h1>
      <Tooltip
        content={
          <span style={{color: 'orange', fontWeight:'bold'}}>
            Tooltipに表示させたい内容をここに記述します。
          </span>
        }
        location='top'
      >
          <button>ToolTip</button>
          <p>hoge</p>
          {/* ネストさせてるから、子コンポーネントがpropsのchildrenで取得できる */}

      </Tooltip>
      <div>ここから文章は続きます。</div>
      
    </div>
  );
}

export default App;
