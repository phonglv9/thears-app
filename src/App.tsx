
import './App.css';
import ThearApp from './pages/ThearApp';
import ContainerMain from './components/ContainerMain';
import Search from './pages/Search';
import Login from './pages/Login';
import Post from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const postData = {
  user: {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/40'
  },
  image: 'https://via.placeholder.com/600x400',
  caption: 'This is a sample post caption!'
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThearApp />}  >
          <Route path='/' element={<ContainerMain children={<Post
            user={postData.user}
            image={postData.image}
            caption={postData.caption}
          />} />} />
          <Route path='/search' element={<ContainerMain children={<Search />} />} />

        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
