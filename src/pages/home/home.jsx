import React from 'react';
import './homepage.css';

function Home() {
  return (
    <div className="home-page">
      
      <div className="hero-section">
        <div className="hero-left">
          <h1>AI For Everyone</h1>
          <p>
          Join us on an exciting journey to explore the limitless possibilities of Artificial Intelligence. 
          Our expert-led courses provide a perfect blend of knowledge and hands-on experience in AI and Machine Learning, empowering you to excel in the rapidly evolving digital world.
          We also engage in research and development to create innovative AI solutions that address challenges across various fields. 
          Together, let’s transform your understanding of AI and unlock new career opportunities while making a positive impact!

          </p>
          <button className="cta-btn">Get Started</button>
        </div>

        {/* Right Side: Image */}
        <div className="hero-right">
          <img
            src="https://via.placeholder.com/300"
            alt="AI learning"
            className="hero-image"
          />
        </div>
      </div>

      <div className="why-choose-us-container">
        <div className="why-choose-us-left">
            <img src="https://via.placeholder.com/300" alt="Why Choose Us" className="why-image"/>
            </div>
            <div className="why-choose-us-right">
                <h2>Why Choose Us</h2>
                <ul>
                  <li><strong>Expert Trainers:</strong> Learn from an international team of experienced AI professionals and researchers who bring a wealth of knowledge and practical insights to the classroom.</li>
                  <li><strong>Hands-on Learning:</strong> Engage in real-world projects that provide practical experience, enabling you to apply your skills in meaningful ways.</li>
                  <li><strong>Comprehensive Domains:</strong> Access specialized training tailored to various industries, including healthcare, finance, engineering, agriculture, and more, ensuring you gain relevant expertise.</li>
                  <li><strong>Continuous Support:</strong> Enjoy lifetime access to a wealth of resources, updates, and a vibrant global AI community that fosters collaboration and networking.</li>
                  <li><strong>Live Project Experience:</strong> Learn by working on real-world AI and ML projects, allowing you to build a robust portfolio that showcases your skills to potential employers.</li>
                </ul>

        </div>
      </div>

      <div className="fields-and-domains-container">
        {/* Title and Description */}
        <div className="fields-and-domains-header">
          <h2>AI Fields and Domains</h2>
        </div>

        {/* Content Layout with List and Image */}
        <div className="fields-and-domains-content">
          {/* Left Side: List and Button */}
          <div className="fields-list-and-button">
            <ul>
              <li><strong>Engineering:</strong> AI enhances processes like design optimization, predictive maintenance, and automation in various engineering fields.</li>
              <li><strong>Medical & Pharmaceutical:</strong> AI plays a crucial role in diagnostics, drug discovery, personalized medicine, and healthcare data management.</li>
              <li><strong>Agriculture:</strong> From precision farming to crop disease detection, AI helps boost agricultural productivity and sustainability.</li>
              <li><strong>Finance:</strong> AI-driven models are used for financial forecasting, fraud detection, algorithmic trading, and personalized banking experiences.</li>
              <li><strong>Automotive:</strong> AI powers autonomous vehicles, predictive maintenance, and enhanced manufacturing processes in the automotive industry.</li>
              <li><strong>Retail:</strong> AI transforms customer experience, inventory management, and sales forecasting with tailored recommendations and demand planning.</li>
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="fields-image">
            <img src="path-to-your-image.jpg" alt="AI Fields" />
          </div>
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-content">
          <h2>Ready to Transform Your Future with AI?</h2>
          <p>Join our AI and ML programs and gain hands-on experience from industry experts. Whether you're a beginner or a professional, we have the right course to help you excel in your field. Start your AI journey with us today and make an impact tomorrow!</p>
        </div>
        <div className="cta-button">
          <button className="contact-us-btn">Contact Us</button>
        </div>
      </div>

      <div className="approach-container">
        <div className="approach-left">
              <h2>Our Approach</h2>
              <p>Our approach emphasizes a blend of theoretical knowledge and practical application to provide a comprehensive learning experience in Artificial Intelligence and Machine Learning. 
                We create an interactive environment where students engage in hands-on projects and collaborate with peers, guided by our expert trainers. By integrating cutting-edge research and the latest technologies, we ensure our curriculum remains relevant to industry needs. Tailoring our training to various fields allows us to empower individuals to solve real-world challenges effectively. 
                Whether you’re starting your journey or looking to advance your skills, our approach is designed to unlock your potential in the dynamic world of AI.</p>
        </div>
        <div className="approach-right">
            <img src="https://via.placeholder.com/300" alt="Why Choose Us" className="approach-image"/>
        </div>
      </div>


    </div>
  );
}

export default Home;
