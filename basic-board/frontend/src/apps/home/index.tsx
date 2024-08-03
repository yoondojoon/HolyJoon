import React, { useContext } from 'react';

import { AuthContext } from '../../context/auth/AuthProvider';

export default function Home() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <p>name: {auth.userName}</p>
      <p>birthday: {auth.birthday}</p>
    </div>
  );
}
