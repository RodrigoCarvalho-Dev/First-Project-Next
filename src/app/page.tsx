'use client';

import { Suspense } from 'react';
import { useEffect , useState } from 'react';
import Header from './components/header';
import GithubProfile from './components/profile/github-profile';
import LongWaitComponent from './components/profile/long-wait-component';
// Server Components => A gente não usa javascript no lado do Cliente
// Client Components => A gente usa javascript no lado do servidor e possuem interatividade com o usuário

// Streaming SSR => Ler/Escrever dados de forma parcial + Server-side Rendering
// Renderizar um componente pelo lado do servidor de forma parcial 

export default function Home() {

  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aspernatur rerum hic necessitatibus, soluta molestiae, eos est natus porro incidunt doloribus quam alias, quasi voluptates facere accusamus animi et? Magni.
      </p>
    
    <Suspense fallback={<p>Carregando LongWaitComponent...</p>}>
    <LongWaitComponent/>
    </Suspense>
      
    <Suspense fallback={
      <p>
        Carregando GitHub Profile...
      </p>
    }>
    <GithubProfile/>
    </Suspense>
      
    </div>
  )
}

// Suspense => gerencia quais components vão ser renderizados na tela primeiro junto com um loading personalizado
