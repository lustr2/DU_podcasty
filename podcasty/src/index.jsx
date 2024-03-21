import { createRoot } from 'react-dom/client';
import  Episode from './component/episode';
import './global.css';
import  { episodes } from './episody';

const App = () => {
  return (
  <>
    <div className="container"> 
      <div className="episodes-list">
        {episodes.map(e => 
            <Episode 
              key={e.num} 
              num={e.num} 
              title={e.title} 
              guest={e.guest}
            ></Episode>
            )}
      </div>
    </div>
  </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
