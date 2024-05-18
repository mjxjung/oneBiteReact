import Front from './components/Front.jsx';
import Login from './components/Login.jsx';
import Notfound from './pages/Notfound.jsx';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// .jsx 확장자 생략해도 ㄱㅊ

// component 이름은 대문자로
// 부모 component
// route안에는 route 컴포넌트<>만 쓸 수 있다..
function App() {
  const nav = useNavigate();

  const onclickButton = () => {
    nav("/login");
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path='/login' element={<Login />} />
      <Route path="*" element={<Notfound />} /> 
    </Routes>
    </>
  )
}

export default App
