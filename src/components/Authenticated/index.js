import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const verifyToken = async () => {
        const authToken = Cookies.get('authToken');
        if (!authToken) {
          router.replace('/login');
          return;
        }

        try {
          const decryptedToken = CryptoJS.AES.decrypt(authToken, 'cookie-encrypted').toString(CryptoJS.enc.Utf8);
          if (!decryptedToken) {
            router.replace('/login');
            return;
          }
          setVerified(true);
        } catch (error) {
          router.replace('/login');
        }
      };

      verifyToken();
    }, [router]);

    if (!verified) {
      return <div>Verificando...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
