import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import styles from './loginPage.module.css';

function LoginPage({ onClose }) {
  const { login, googleLogin, forgotPassword } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isResetMode, setIsResetMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch {    
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      // For demo purposes, using mock Google credentials
      // In a real app, this would integrate with Google OAuth
      await googleLogin(email || 'demo@example.com', 'Demo User');
      navigate('/');
    } catch {
      setError('Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    try {
      await forgotPassword(resetEmail);
      setMessage('Password reset email sent successfully!');
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.closeButton} onClick={onClose}>×</div>
      
      <h1 className={styles.title}>
        {isResetMode ? 'Reset Password' : 'Welcome Back'}
      </h1>

      {!isResetMode ? (
        <form className={styles.form} onSubmit={handleLogin}>
          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {/* Forgot Password */}
          <div className={styles.forgotPassword}>
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => setIsResetMode(true)}
            >
              Forgot password?
            </button>
          </div>

          {/* Error Message */}
          {error && <p className={styles.errorMessage}>{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={styles.submitButton}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Divider */}
          <div className={styles.divider}>
            <hr className={styles.dividerLine} />
            <span className={styles.dividerText}>OR</span>
            <hr className={styles.dividerLine} />
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className={styles.googleButton}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className={styles.googleIcon}
            />
            Continue with Google
          </button>
        </form>
      ) : (
        <form className={styles.form} onSubmit={handleForgotPassword}>
          {/* Reset Email */}
          <div className={styles.formGroup}>
            <label htmlFor="resetEmail" className={styles.label}>Email</label>
            <input
              type="email"
              id="resetEmail"
              className={styles.input}
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {/* Messages */}
          {error && <p className={styles.errorMessage}>{error}</p>}
          {message && <p className={styles.successMessage}>{message}</p>}

          {/* Reset Button */}
          <button
            type="submit"
            disabled={loading}
            className={styles.submitButton}
          >
            {loading ? 'Sending...' : 'Send Reset Email'}
          </button>

          {/* Back to Login */}
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => {
              setIsResetMode(false);
              setError('');
              setMessage('');
              setResetEmail('');
            }}
          >
            ← Back to Login
          </button>
        </form>
      )}

      {/* Create Account */}
      <p className={styles.footer}>
        Don't have an account?{" "}
        <Link to="/register" className={styles.link} onClick={onClose}>
          Create one
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
