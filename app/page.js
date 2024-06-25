import Feature from "@Components/Feature";
import Footer from "@Components/Footer";
import Header from "@Components/Header";
import Hero from "@Components/Hero";
import Questions from "@Components/Questions";
import Testimonials from "@Components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Feature />
      <Testimonials />
      <Questions />
      <Footer />
    </main>
  );
}
