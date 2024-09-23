import './App.css'
import Home from './pages/home'
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {

  return (
    <HelmetProvider>
    <Helmet>
      <title>TechInnov</title>
      <meta name="description" content="Descrição do meu site incrível." />
      <meta name="keywords" content="palavra-chave1, palavra-chave2, palavra-chave3" />
      <meta name="author" content="Seu Nome" />
      <link rel="canonical" href="https://www.seusite.com" />
    </Helmet>
    <div>
      <Home />
    </div>
  </HelmetProvider>
  )
}

export default App
