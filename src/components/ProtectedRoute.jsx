import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { useState, useEffect } from 'react';
import LoginPage from './loginPage';
import styles from './header.module.css';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, userRole } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLogin(true);
      setShouldRedirect(false);
    }
  }, [isAuthenticated]);

  const handleCloseDialog = () => {
    setShowLogin(false);
    setShouldRedirect(true);
  };

  if (!isAuthenticated) {
    if (shouldRedirect) {
      return <Navigate to="/" replace />;
    }
    
    return (
      <>
        {showLogin && (
          <div className={styles.dialogOverlay} onClick={handleCloseDialog}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
              <LoginPage onClose={handleCloseDialog} />
            </div>
          </div>
        )}
      </>
    );
  }

  if (requiredRole && userRole !== requiredRole) {
    // Redirect to home if user doesn't have required role
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;