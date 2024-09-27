import React, { useState } from 'react';
import './fields.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function AiFields() {
  
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer: "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. It involves learning, reasoning, and self-correction."
    },
    {
      question: "How can I enroll in the AI courses?",
      answer: "You can enroll in AI courses by clicking the 'Enroll Now' button on our website and filling out the registration form. Our team will contact you with further details."
    },
    {
      question: "Do I need prior experience to join?",
      answer: "No, our courses are designed for all skill levels. Whether you're a beginner or a seasoned professional, we have tailored programs for you."
    },
    {
      question: "Are the AI courses online or offline?",
      answer: "Our AI courses are available online with interactive live sessions and hands-on projects."
    }
  ];
  return (
    <div>
      {/* Banner Component */}
        <div className="banner">
          <p className="banner-text">
            Join with us to boost your skills and career in AI fields and domains !
          </p>
          <button className="enroll-btn">Enroll Now</button>
        </div>

      <div className="field-container">
        <div className="field-left">
          <h1>AI Fields</h1>
          <p>
            Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing industries worldwide. From healthcare to agriculture, AI’s transformative potential is unlocking new efficiencies, insights, and opportunities. Our specialized training programs empower individuals across diverse fields to leverage AI for innovation and problem-solving. With AI becoming an integral part of modern industries, the need for skilled professionals is at an all-time high. Whether you're a student, a professional, or a business leader, this is the perfect time to dive into AI and reshape your future.
          </p>
        </div>
        <div className="field-right">
          <img 
            src="https://via.placeholder.com/300" 
            alt="AI Training" 
            className="responsive-image" 
          />
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


       {/* FAQ Section with Image on Left */}
       <div className="faq-section">
        <div className="faq-container">
          {/* Left side: FAQ Image */}
          <div className="faq-image">
            <img src="https://via.placeholder.com/400x300" alt="FAQ" />
          </div>

          {/* Right side: FAQ Questions */}
          <div className="faq-questions">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  {activeFAQ === index ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
                {activeFAQ === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default AiFields;
