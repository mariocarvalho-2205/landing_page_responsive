import Navbar from '../components/Navbar/Navbar.jsx'
import { Helmet } from 'react-helmet-async';
import Section_Transform from '../components/Section_Transform/Section_Transform.jsx';
import Section_BigCards from '../components/Section_BigCards/Section_BigCards.jsx';
import Section_Statement from '../components/Section_Statement/Section_Statement.jsx';
                                                                
const Home = () => {
    return (
        <div className='navbar'>
            <Helmet>
                <title>TechInnov</title>
                <meta name="description" content="Bem-vindo à página inicial do meu site incrível." />
            </Helmet>
            <Navbar />
            <Section_Transform />
            <Section_BigCards />
            <Section_Statement />
        </div>
    )
}

export default Home