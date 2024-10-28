

import { useEffect , useState } from 'react';
import Header from './components/header';
// Server Components => A gente não usa javascript no lado do Cliente
// Client Components => A gente usa javascript no lado do servidor e possuem interatividade com o usuário

// Streaming SSR => Ler/Escrever dados de forma parcial + Server-side Rendering
// Renderizar um componente pelo lado do servidor de forma parcial 

export default async function Home() {

  const response_user = await fetch('https://api.github.com/users/diego3g');
  const user = await response_user.json();

  return (
    <>
          <pre>
            {user.login}
          </pre>
    </>
  );
}
