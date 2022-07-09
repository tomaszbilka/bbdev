import { Routes, Route } from 'react-router-dom';
import Layout from 'components/UI/Layout';
import Blog from 'pages/Blog';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Offer from 'pages/Offer';
import Post from 'pages/Post';
import Portfolio from './pages/Portfolio';
import Success from 'pages/Success';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:sort" element={<Blog />} />
        <Route path="/blog/posts/:slug" element={<Post />} />
        <Route path="/portfolio/:sort" element={<Portfolio />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
