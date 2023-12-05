import './App.css';
import Appbarlogin from './components/AppbarLogin/Appbarlogin';
import Footer from './components/footer-area/Footer';
import Layout from './layout.js/Layout';
import Routing from './routes/Routing';

function App() {
  return (
    <Layout>
      <Routing/>
      <Appbarlogin />
      <Footer />
    </Layout>
  );
}

export default App;
