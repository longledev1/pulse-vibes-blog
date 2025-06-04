import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARDlJQpPSXP8gf6EogKZ_ysvkMxbsRY5w',
  authDomain: 'pulse-vibes-blog.firebaseapp.com',
  projectId: 'pulse-vibes-blog',
  storageBucket: 'pulse-vibes-blog.firebasestorage.app',
  messagingSenderId: '176761332506',
  appId: '1:176761332506:web:f99ddaf461e091ae2242a3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
