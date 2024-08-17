import Category from '@/Components/CategoryList/Category';
import Header from '@/Components/Header/page';
import Hero from '@/Components/Hero/Hero';
// import Commingsoon from '../Components/ComingSoon/Page';
import Footer from '@/Components/Footer/page';
export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Category/>
      <Footer/>
    </main>
  );
}
