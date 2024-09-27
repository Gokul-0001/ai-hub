import React from 'react';
import './about.css';
import { FaLightbulb, FaBullseye, FaHandshake, FaRegHandPaper } from 'react-icons/fa';


function AboutUs() {
  return (
    <div className="about-us-container">

      <div className="layout-container">
        <div className="layout-left">
          <h1>About Us</h1>
          <p>
          We are a passionate team of AI and Machine Learning enthusiasts who believe that AI is for everyone. At our AI and ML Training Hub, we strive to provide high-quality, hands-on training that bridges the gap between theoretical knowledge and practical application in real-world scenarios. Our aim is to democratize AI education and empower individuals across various fields to integrate AI and ML into their careers, businesses, and research.

          <br></br>We aren’t just instructors; we are innovators, developers, and thought leaders with extensive experience in the AI and ML industries. Our international network of experts spans various industries and academic disciplines, ensuring that our programs are globally relevant and locally impactful.
          </p>
        </div>
        <div className="layout-right">
          <img 
            src="https://via.placeholder.com/300" 
            alt="AI Training" 
            className="responsive-image" 
          />
        </div>
      </div>

      <div className="proverb-section">
        <blockquote>
          "AI for Everyone"—We strive to make AI education accessible to all, regardless of their profession, academic background, or expertise. 
          We aim to foster a global AI community that embraces technological innovation, continuous learning, and positive societal impact.
        </blockquote>
      </div>
      <div className="card-container">
        {/* Vision Card */}
        <div className="card">
          <h3 className="card-title">
            <FaLightbulb className="card-icon" /> Vision
          </h3>
          <p>
            To create an accessible and inclusive learning environment where anyone, regardless of their background or profession, can become proficient in AI and ML. 
            We envision a future where AI literacy is widespread, empowering people to enhance their work, research, and everyday life.
          </p>
        </div>

        {/* Mission Card */}
        <div className="card">
          <h3 className="card-title">
            <FaBullseye className="card-icon" /> Mission
          </h3>
          <p>
            Our mission is to provide world-class, practical, and hands-on AI and ML training to individuals from all walks of life. 
            We focus on teaching not just the theoretical aspects of AI, but also how to apply AI and ML technologies to solve real-world challenges in diverse domains such as engineering, healthcare, agriculture, and business.
          </p>
        </div>
      </div>

      {/* Values Card */}
      <div className="values-card">
        <h3 className="card-title">
          <FaHandshake className="card-icon" /> Values
        </h3>
        <ul>
          <li><strong>Inclusivity:</strong> AI is for everyone, not just tech experts. Our goal is to make AI accessible to a diverse audience.</li>
          <li><strong>Innovation:</strong> We continuously evolve our programs to stay on top of AI advancements and encourage creative AI applications.</li>
          <li><strong>Integrity & Ethics:</strong> We emphasize responsible AI development for a positive societal impact.</li>
          <li><strong>Continuous Learning:</strong> AI evolves rapidly, and we focus on lifelong learning to keep learners up to date.</li>
          <li><strong>Real-World Impact:</strong> Every course we offer focuses on real-world applications and practical use of AI.</li>
        </ul>
      </div>

      <div className="text-banner">
        <p>Empower individuals with the skills to thrive in an AI-powered world by offering accessible, high-quality training and fostering a community of continuous learners.</p>
      </div>

      <div className="experience">
        <h3 className="card-title"><FaRegHandPaper className="card-icon"/>Expertise and Experience </h3>
        <p>With a team of seasoned professionals who have worked on cutting-edge AI and ML projects globally, we bring decades of combined experience in various industries. Our instructors have expertise in fields such as healthcare, finance, agriculture, engineering, and more. This diverse experience allows us to cater to a broad range of learners and offer specialized programs tailored to specific industries. Our international experts collaborate with industry leaders, ensuring that our training programs stay aligned with the latest industry trends and innovations.</p>
      </div>

    </div>
  );
}

export default AboutUs;
