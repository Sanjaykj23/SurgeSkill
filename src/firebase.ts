import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config is loaded from environment variables (.env).
// See .env.example for the required keys. Never commit .env to version control.
// NOTE: Firebase client-side API keys are safe to expose in the browser —
// they identify your project but do NOT grant access. Security is enforced
// entirely by Firestore Security Rules (see firestore.rules).
const firebaseConfig = {
  apiKey:            (import.meta.env.VITE_FIREBASE_API_KEY            as string) || 'YOUR_API_KEY',
  authDomain:        (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN        as string) || 'mock.firebaseapp.com',
  projectId:         (import.meta.env.VITE_FIREBASE_PROJECT_ID         as string) || 'mock-project-id',
  storageBucket:     (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET     as string) || 'mock.appspot.com',
  messagingSenderId: (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string) || '123456789',
  appId:             (import.meta.env.VITE_FIREBASE_APP_ID             as string) || '1:123456789:web:mockapp',
  measurementId:     (import.meta.env.VITE_FIREBASE_MEASUREMENT_ID     as string) || 'G-MOCK',
};

const isMock = firebaseConfig.apiKey === 'YOUR_API_KEY' || firebaseConfig.apiKey.startsWith('your_');

const app = initializeApp(firebaseConfig);

// Only initialize analytics if not in offline mock mode
export const analytics = (!isMock && typeof window !== 'undefined') ? getAnalytics(app) : null;

export const auth           = getAuth(app);
export const db             = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();