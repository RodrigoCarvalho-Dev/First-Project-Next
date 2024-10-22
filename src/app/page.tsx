'use client';

import { useState } from 'react';
import Header from './components/header';
// Server Components => A gente não usa javascript no lado do Cliente
// Client Components => A gente usa javascript no lado do servidor e possuem interatividade com o usuário

export default async function Home() {

  const response = await fetch('https://api.github.com/users/diego3g');
  const user = await response.json();

  return (
    <>
          <pre>
            {JSON.stringify(user, null, 2)}
          </pre>
    </>
  );
}
