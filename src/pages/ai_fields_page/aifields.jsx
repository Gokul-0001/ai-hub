import React, { useState } from 'react';
import './fields.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AiFieldsimg from '../../images/AiFieldsimg.png'; 


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
      question: "What kind of projects will I work on during the training?",
      answer: "Participants will engage in live projects that cover various domains such as engineering, medical, agriculture, transport, and more. This hands-on experience ensures that you apply your learning in real-world scenarios."
    },
    {
      question: "How does AI and ML training benefit my career?",
      answer: "Training in AI and ML enhances your skill set, making you more competitive in the job market. It adds significant value to your career, enabling you to secure better positions with attractive salaries and perks in an increasingly AI-driven world."
    },
    {
      question: "What topics are covered in the training?",
      answer: "Our training covers a wide range of topics, including AI applications, models, tools, generative AI, and customized AI solutions for various industries. You'll also learn about the legal and ethical responsibilities associated with AI and ML technologies."
    },
    {
      question: "How is the training delivered?",
      answer: "Training is delivered through online platforms, allowing flexibility in learning. We are also in the process of establishing a physical training center and test lab, which will be updated on our website."
    },
    {
      question: "What kind of support do you provide after training?",
      answer: "We offer continuous support, including mentorship, project guidance, and resources to help you apply your skills effectively. We are committed to ensuring your success even after the training concludes."
    },
    {
      question: "How can I contact you for more information?",
      answer: "You can contact us through our website's contact page, where you'll find options for privacy inquiries, ethical practices, and discussion forums for asking questions."
    },
    {
      question: "What are the current ongoing projects available for training?",
      answer: "We have a variety of ongoing projects, including building construction safety compliance, transport safety analysis, agricultural damage assessments, medical project management, and environmental monitoring. Participants can select projects aligned with their interests and career goals."
    },
    {
      question: "What is the importance of understanding AI and ML in today's world?",
      answer: "As the world increasingly embraces AI and ML technologies, understanding these fields is crucial for personal and professional growth. It enhances your ability to innovate, solve complex problems, and improve operational efficiencies across various industries."
    },
    {
      question: "Will I receive a certification upon completion of the training?",
      answer: "Yes, participants will receive a certification upon successful completion of the training program, validating your skills and knowledge in AI and ML technologies."
    }
  ];
  

  return (
    <div>
    

      <div className="field-container">
        <div className="field-left">
          <h1>AI Fields</h1>
          <p>
            Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing industries worldwide. From healthcare to agriculture, AI’s transformative potential is unlocking new efficiencies, insights, and opportunities. Our specialized training programs empower individuals across diverse fields to leverage AI for innovation and problem-solving. With AI becoming an integral part of modern industries, the need for skilled professionals is at an all-time high. Whether you're a student, a professional, or a business leader, this is the perfect time to dive into AI and reshape your future.
          </p>
        </div>
        <div className="field-right">
          <img src={AiFieldsimg} alt="AI Training" className="responsive-image" />
        </div>
      </div>

      <div className="fields-and-domains-container">
        <div className="fields-and-domains-header">
          <h2>AI Fields and Domains</h2>
        </div>
        <div className="fields-and-domains-content">
          <div className="fields-list-and-button">
          <ul>
  <li>
    <strong>Engineering: </strong> 
    AI optimizes engineering through predictive maintenance, automation, and simulations. It enhances design processes and improves safety in civil, mechanical, and electrical systems. AI-driven data analysis leads to smarter infrastructure and machinery.
  </li>
  <li>
    <strong>Medical Sciences: </strong> 
    AI improves healthcare by enhancing diagnostic precision, personalizing treatments, and accelerating drug discovery. It aids in analyzing medical images and predicting patient outcomes. AI streamlines clinical operations, improving efficiency.
  </li>
  <li>
    <strong>Agriculture & Environment: </strong> 
    AI enhances farming with precision agriculture, automating crop monitoring and optimizing resource use. It tracks environmental changes, aids in conservation efforts, and manages natural resources. AI improves agricultural sustainability and productivity.
  </li>
  <li>
    <strong>Transport & Automotive: </strong> 
    AI drives advancements in autonomous vehicles, smart traffic management, and route optimization. It increases vehicle efficiency and safety while reducing environmental impact. AI enables smart city infrastructure and enhanced transport systems.
  </li>
  <li>
    <strong>Chemical & Infrastructure: </strong> 
    AI optimizes chemical processes for efficiency and sustainability, ensuring safety and precision. In infrastructure, it enables smart cities and predictive maintenance. AI supports resource-efficient construction and infrastructure development.
  </li>
  <li>
    <strong>Aeronautics & Aviation: </strong> 
    AI enhances flight safety, automates air traffic control, and optimizes fuel consumption. It aids in autonomous flight systems and flight path optimization. AI ensures effective maintenance protocols in the aviation industry.
  </li>
  <li>
    <strong>Arts & Humanities: </strong> 
    AI supports creativity by generating art, music, and literature while analyzing cultural trends. It digitizes archives and enhances research in the humanities. AI tools provide deeper insights into human behavior and history.
  </li>
  <li>
    <strong>Statistics & Data Sciences: </strong> 
    AI automates data analysis, enhances predictive modeling, and improves forecasting accuracy. It helps uncover hidden patterns in large datasets. AI drives faster, data-driven decision-making across various industries.
  </li>
</ul>

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
          <h3>Frequenlty Asked Questions</h3>
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
