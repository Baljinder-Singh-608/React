import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/landing-page';
import PageLayout from "./components/layout";
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import AddBook from './pages/addBook';
import MemberList from './pages/memberList';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/newbook" element={<AddBook />} />
        <Route path="/memberList" element={<MemberList />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
