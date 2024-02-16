import { createRoot } from 'react-dom/client';
import  Episode from './component/episode/Episode';
import './global.css';
import { episodes } from './component/episode/episody';

const App= () => {
  return (
  <>
    <div className="container"> 
        {episodes.map(e => <div key={e.num}><Episode key={e.num} num={e.num} title={e.title} guest={e.guest}></Episode></div>)}
    </div>
  </>
  )
}

createRoot(
  document.querySelector('#app'),
).render(<App />);
