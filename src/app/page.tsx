import Navbar from "@/app/components/Navbar"
import Header from "@/app/components/Header"
import Achievement from "@/app/components/Achievement"
import About from "@/app/components/About"
import Services from "@/app/components/Services"
import Teams from "@/app/components/Teams"
import Project from "@/app/components/Project"
import Testimonial from "@/app/components/Testimonial"
import Faq from "@/app/components/Faq"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import Chat from "./components/Chat/Chat"

export default function HomePage() {
  return (
    <>
      <Chat />
      <Navbar />
      <Header />
      <Achievement />
      <About />
      <Services />
      <Teams />
      <Project />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
