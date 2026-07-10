import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { STORAGE_KEYS } from '@/utils/constants';

const AuthContext = createContext(null);
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;

const readStoredAuth = () => {
  const source = localStorage.getItem(STORAGE_KEYS.auth) ?? sessionStorage.getItem(STORAGE_KEYS.auth);
  if (!source) {
    return null;
  }

  try {
    return JSON.parse(source);
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => readStoredAuth());
  const timeoutRef = useRef(null);

  useEffect(() => {
    const store = auth?.rememberMe ? localStorage : sessionStorage;
    const fallback = auth?.rememberMe ? sessionStorage : localStorage;

    fallback.removeItem(STORAGE_KEYS.auth);

    if (auth) {
      store.setItem(STORAGE_KEYS.auth, JSON.stringify(auth));
    } else {
      localStorage.removeItem(STORAGE_KEYS.auth);
      sessionStorage.removeItem(STORAGE_KEYS.auth);
    }
  }, [auth]);

  useEffect(() => {
    if (!auth) return undefined;

    timeoutRef.current = window.setTimeout(() => {
      setAuth(null);
    }, SESSION_TIMEOUT_MS);

    const resetTimer = () => {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setAuth(null);
      }, SESSION_TIMEOUT_MS);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('click', resetTimer);

    return () => {
      window.clearTimeout(timeoutRef.current);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('click', resetTimer);
    };
  }, [auth]);

  const value = useMemo(
    () => ({
      auth,
      isAuthenticated: Boolean(auth?.accessToken),
      user: auth?.user ?? null,
      login: setAuth,
      logout: () => setAuth(null)
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
};
