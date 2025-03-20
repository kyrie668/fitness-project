import { FC, useEffect, useState } from 'react';
import { useAuthStore } from '@/store/auth-store';
import { useNavigate, useParams, useSearchParams } from 'react-router';

const Login: FC = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const { setAuthenticated } = useAuthStore(); // 获取 Zustand 的认证更新方法
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const handleLogin = async () => {
    // 模拟登录逻辑
    const success = email === 'user@example.com' && password === 'password123';
    if (success) {
      setAuthenticated(true); // 登录成功，更新认证状态
      const returnTo = searchParams.get('returnTo') || '/';
      navigate(returnTo as string); // 登录后重定向到之前的页面或首页
    } else {
      alert('登录失败！请检查用户名和密码。');
    }
  };

  return (
    <div>
      <h1>登录</h1>
      <input
        type="email"
        placeholder="电子邮件"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default Login;
