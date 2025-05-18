import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas ,   } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div>
            <footer className="text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Youssef. All rights reserved.</p>
                    <p>Follow us on social media:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://github.com/YS-1911" className=" h-[25px] w-[25px]" ><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                        <a href="https://www.facebook.com/youssef.mohammed.52831666" className=" h-[25px] w-[25px]" ><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="" /></a>
                        <a href="tel:01096486984" className=" h-[25px] w-[25px]" ><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" /></a>
                        <a href="https://www.linkedin.com/in/%D9%8A%D9%88%D8%B3%D9%81-%D9%85%D8%AD%D9%85%D8%AF-341a5232b/" className=" h-[25px] w-[25px]" ><img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="" /></a>
                    </div>
                </div>
            </footer>
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
