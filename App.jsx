// // import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import LatestBlog from './Components/LatestBlog';
// // import PostDetail from './Components/PostDetail';
// import TestimonialsSection from './Components/TestimonialsSection';
// import TestimonialDetail from './Components/TestimonialDetail';

// function App() {
//     return (
//         <Router>
//             <div className="p-4">
//                 <Routes>
//                     <Route path="/" element={
//                         <>
//                             {/* <LatestBlog /> */}
//                             <TestimonialsSection />
//                         </>
//                     } />
//                     {/* <Route path="/post/:postId" element={<PostDetail />} /> */}
//                     <Route path="/testimonial/:testimonialId" element={<TestimonialDetail />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header';

// const Home = () => <div>Home Content</div>;
// const Services = () => <div>Services Content</div>;
// const About = () => <div>About Content</div>;
// const Contact = () => <div>Contact Content</div>;
// // const More = () => <div>More Content</div>;

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* <Route path="/more" element={<More />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '200px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


