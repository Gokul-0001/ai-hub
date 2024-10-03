import React from 'react';
import './about.css';
import { FaLightbulb, FaBullseye, FaHandshake, FaRegHandPaper } from 'react-icons/fa';
import Aboutusimg from '../../images/Aboutusimg.jpeg';


function AboutUs() {
  return (
    <div className="about-us-container">

      <div className="layout-container">
        <div className="layout-left">
          <h1>About Us</h1>
          <p>
          We are a passionate team of AI and Machine Learning enthusiasts who believe that AI is for everyone. At our AI and ML Training Hub, we strive to provide high-quality, hands-on training that bridges the gap between theoretical knowledge and practical application in real-world scenarios. Our aim is to democratize AI education and empower individuals across various fields to integrate AI and ML into their careers, businesses, and research. We aren’t just instructors; we are innovators, developers, and thought leaders with extensive experience in the AI and ML industries. 
          </p>
        </div>
        <div className="layout-right">
          <img 
            src={Aboutusimg}
            alt="AI Training" 
            className="responsive-image" 
          />
        </div>
      </div>


      <div className="v-container">

        <div className="v-right">
          <img 
            src={Aboutusimg}
            alt="AI Training" 
            className="responsive-image" 
          />
        </div>
        <div className="v-left">
          <h3>Vision</h3>
          <p>
            Our vision is to make artificial intelligence accessible to all, fostering innovation and learning for individuals and businesses alike. We aim to lead in AI education, bridging the gap between technology and its real-world applications. By empowering people with AI knowledge, we envision a future where AI transforms industries and improves lives globally. Our goal is to create an inclusive, responsible AI ecosystem that drives progress, sustainability, and human potential.
          </p>
        </div>
        
      </div>


      <div className="m-container">
      <div className="m-left">
  <h3>Mission</h3>
  <p>
  Our mission is to make AI accessible and practical, offering a platform that provides comprehensive learning experiences, tools, and resources. We are dedicated to fostering innovation, collaboration, and ethical AI practices, enabling learners to develop skills that can be applied to real-world challenges. Through our resources, and community, we aim to equip individuals and organizations with the knowledge they need to thrive in the AI-driven future.
  </p>
</div>
<div className="m-right">
  <img 
    src={Aboutusimg}
    alt="AI Training" 
    className="responsive-image" 
  />
</div>


</div>

<div className="b-container">
        <div className="b-content">
          <h3> Our goal is to democratize AI , ensuring that individuals from all walks of life can engage with and benefit from artificial intelligence, regardless of their field, experience, or knowledge level.</h3>
        </div>
      </div>
 
      <div className="connect-with-us">
      <h3>Connect with Us</h3>
      <p> We'd love to hear from you! Whether you have questions about our services, need assistance with AI concepts, 
        or just want to connect, feel free to reach out to us through any of the following ways. We value your input and look forward to working together 
        on your AI journey. Stay connected with us and let’s shape the future of AI together!</p>
      <div className="contact-details">
        <a className="em-li" href="mailto:info@aiconceptshub.com">Email : info@aiconceptshub.com</a>
      </div>
    </div>

    </div>
  );
}

export default AboutUs;
