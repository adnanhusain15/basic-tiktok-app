
import './App.css';

const serverApi = `http://192.168.1.11:4002/auth/tiktok`;

function App() {
  return (
    <div className="App">
      <a target={'_blank'} href={serverApi} rel="noreferrer">Continue with TikTok</a>
    </div>
  );
}

export default App;
