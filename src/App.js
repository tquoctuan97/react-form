import { LoggedRoute, NotFound, PrivateRoute } from 'components/Common';
import AccountPage from 'features/auth/page/AccountPage';
import SignUpPage from 'features/auth/page/SignUpPage';
import TodoPage from 'features/todos/page/TodoPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route index element={<AccountPage />} />
      </Route>
      <Route path="/" element={<LoggedRoute />}>
        <Route index element={<SignUpPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/loggin" element="Login" />
      </Route>
      <Route path="/todo" element={<TodoPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
