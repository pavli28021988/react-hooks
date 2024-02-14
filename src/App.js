
import StateTutorial from './UseState/StateTutorial';
import ReduserTutorial from './UseReduser/ReduserTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import ContextTutorial from './UseContext/ContextTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
import CallbackTutorial from './UseCallback/CallbackTutorial';

function App() {
  return (
    <div className="App">

    <StateTutorial/>
    <ReduserTutorial/>
    <EffectTutorial/>
    <RefTutorial/>
    <LayoutEffectTutorial/>
    <ImperativeHandle/>
    <ContextTutorial/>
    <MemoTutorial/>
    <CallbackTutorial/>
      
    </div>
  );
}

export default App;
