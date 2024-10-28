
import "./App.css";
import ResultView from "./Components/ResultView";
import ServiceComponent from "./Components/ServiceComponent";
import SuccessView from "./Components/SuccessView";
import ExpertiseComponent from "./Components/ExpertiseComponent";
import TestimonialsView from "./Components/TestimonialsView";
import OurProcessView from "./Components/OurProcessView";
import FaqView from "./Components/FaqView";
import BlogView from "./Components/BlogView";
import CtaView from "./Components/CtaView";
import FooterView from "./Components/FooterView";
import HeroView from "./Components/HeroView";
import image1 from "../src/assets/img/Image111.png"
import image2 from "../src/assets/img/Image112.png"


const caseStudies = [
  {
    brand: 'Radiance Cosmetics',
    imgSrc: image1,
    words : "562+",
    description: 'The strategic digital marketing efforts for Radiance Cosmetics not only enhanced their online presenc...',
  },
  {
    brand: 'Luxe Apparel',
    imgSrc: image2,
    words : "562+",
    description: 'The strategic digital marketing efforts transformed the brand’s online presence and sales perfor...',
  },
];

function App() {
  return (
    <>
      <HeroView />
      <ResultView />
      <ServiceComponent />
      <SuccessView caseStudies={caseStudies} />
      <ExpertiseComponent />
      <TestimonialsView />
      <OurProcessView />
      <FaqView />
      <BlogView />
      <CtaView />
      <FooterView />
    </>

    
  );
}

export default App;
