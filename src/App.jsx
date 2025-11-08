import HeaderProfile from './components/HeaderProfile';
import StoryHighlights from './components/StoryHighlights';
import PostsGrid from './components/PostsGrid';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-fuchsia-50 to-indigo-50">
      <HeaderProfile />
      <StoryHighlights />
      <PostsGrid />
      <FooterBar />
    </div>
  );
}

export default App;
