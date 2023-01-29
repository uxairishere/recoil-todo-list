import logo from './logo.svg';
import './App.css';
import { RecoilRoot } from 'recoil';
import TodoListMain from './components/TodoListMain';

function App() {
  return (
    <div className='home-container'>
    <h2 className='home-h2'>Todo list using recoil.js</h2>
      <RecoilRoot>
        <TodoListMain />
      </RecoilRoot>
    </div>
  );
}

export default App;
