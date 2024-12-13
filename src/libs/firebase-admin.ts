import { getApps, initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../../firebase-credential.json';

const firebaseAdminConfig = {
  credential: cert(serviceAccount as ServiceAccount),
};

const app = getApps().length === 0 
  ? initializeApp(firebaseAdminConfig) 
  : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };