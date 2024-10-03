import React, { useState, useEffect ,useRef } from 'react';
import './homepage.css';
import A from '../../images/A.webp'; 

const sectors = [
  {
    title: "Engineering",
    content: "AI is revolutionizing the engineering sector by automating complex designs and simulations. In civil, mechanical, electrical, and electronics engineering, AI optimizes processes, predicts system failures, and enhances safety. With AI-driven modeling and predictive analytics, engineers can create more efficient, sustainable, and cost-effective solutions. Furthermore, AI tools streamline project management by predicting timelines and costs, ensuring that projects stay on track. Collaborative robotics, or cobots, enhance workforce productivity by taking on repetitive tasks, allowing engineers to focus on innovation. AI also aids in materials science, enabling the discovery of new materials with desirable properties. Overall, AI is enhancing creativity and efficiency, transforming traditional engineering practices."
  },
  {
    title: "Medical",
    content: "AI is transforming medical sciences by improving diagnostics, personalized treatment plans, and accelerating drug discovery. With AI-powered medical imaging, predictive analytics, and virtual health assistants, patient outcomes are becoming more precise. AI enhances research and operational efficiency in hospitals, revolutionizing patient care and treatment strategies. Machine learning algorithms analyze patient data to identify risk factors, leading to earlier interventions. Additionally, AI chatbots provide 24/7 support to patients, answering queries and managing appointments. In genomics, AI aids in understanding genetic disorders, paving the way for tailored therapies. By integrating AI into telemedicine, healthcare providers can reach patients in remote areas, ensuring broader access to quality care. AI is ultimately redefining how we approach healthcare delivery and medical research."
  },
  {
    title: "Agriculture",
    content: "AI plays a pivotal role in agriculture and environmental management by automating precision farming techniques. Through data from sensors and drones, AI monitors soil health, weather patterns, and crop conditions, enabling farmers to optimize yields. In environmental sciences, AI aids in managing resources, tracking climate change, and promoting sustainability. By analyzing historical data, AI helps predict crop performance, allowing farmers to make informed decisions about planting and harvesting. Furthermore, AI-driven robots can automate tasks such as planting, weeding, and harvesting, significantly reducing labor costs. AI systems also enhance supply chain efficiency by predicting demand and optimizing distribution routes. In fisheries and aquaculture, AI monitors water quality and fish health, ensuring sustainable practices. Overall, AI is making agriculture smarter and more sustainable, securing food production for future generations."
  },
  {
    title: "Transport & Automotive",
    content: "AI is driving advancements in transport and automotive industries by enabling autonomous vehicles, smart traffic systems, and improved logistics. AI enhances vehicle safety with real-time monitoring and predictive maintenance. In public transport, AI-powered solutions help manage routes, optimize fuel efficiency, and reduce emissions for a sustainable future. Smart traffic management systems use AI to analyze traffic patterns, minimizing congestion and improving travel times. Additionally, AI algorithms enhance ride-sharing services by optimizing driver-passenger matching, reducing wait times. Fleet management software powered by AI monitors vehicle performance, schedules maintenance, and analyzes driver behavior for safety. AI also plays a crucial role in urban planning by providing insights into transportation needs and future developments. These innovations are not only making transport safer but also more efficient and eco-friendly."
  },
  {
    title: "Chemical & Infrastructure",
    content: "AI optimizes chemical production by analyzing processes and ensuring efficiency in industrial operations. In infrastructure, AI enables predictive maintenance for buildings and smart cities, improving safety and sustainability. AI-driven systems enhance resource management and streamline construction, ensuring that infrastructure is built faster and smarter. In chemical engineering, AI assists in the formulation of new materials and chemicals, accelerating research and development cycles. Additionally, AI algorithms can forecast equipment failures, allowing for timely maintenance and reducing downtime. The integration of AI in smart city initiatives promotes energy efficiency by optimizing resource allocation based on real-time data. Furthermore, AI can enhance safety protocols by predicting hazards and managing emergency responses. As a result, AI is leading to safer, more efficient industrial and infrastructural practices."
  },
  {
    title: "Aeronautics & Aviation",
    content: "AI is revolutionizing aeronautics by improving flight safety, automating air traffic control, and enhancing fuel efficiency. AI-powered systems assist in optimizing flight paths, ensuring smoother operations and reducing delays. In aviation, AI enhances predictive maintenance, enabling safer, more efficient aircraft operations while reducing operational costs. AI analyzes vast amounts of flight data to identify trends, improving decision-making for airline management. Additionally, machine learning algorithms can enhance passenger experience by predicting needs and preferences, enabling personalized services. AI is also used in flight simulators for pilot training, providing realistic scenarios and enhancing training effectiveness. In unmanned aerial vehicles (UAVs), AI enables autonomous navigation and obstacle avoidance, expanding the possibilities for aerial applications. Overall, AI is reshaping the aviation landscape, making it safer and more efficient."
  },
  {
    title: "Arts",
    content: "AI is enhancing creativity in arts and humanities by generating music, visual art, and literature. It also helps researchers analyze historical and cultural data with advanced algorithms, uncovering new insights. AI-powered tools assist in preserving cultural heritage through digitization, while also fostering creativity in the modern arts landscape. For instance, AI algorithms can analyze styles of famous artists, enabling the creation of new artwork that emulates those styles. In music, AI can compose original pieces or provide accompaniment, inspiring musicians to explore new genres. Additionally, AI tools can help writers generate ideas, enhance storytelling, and even create poetry. In the film industry, AI assists in script analysis and audience prediction, optimizing production strategies. The integration of AI in the arts is pushing boundaries, inspiring collaboration between human creativity and machine intelligence."
  },
  {
    title: "Statistics",
    content: "AI is transforming statistics and data sciences by automating data analysis, improving prediction models, and uncovering hidden patterns. With machine learning algorithms, data scientists can analyze large datasets faster and with greater accuracy. AI enables deeper insights across industries, leading to more informed decision-making and innovation. Predictive analytics powered by AI helps businesses anticipate trends and customer behavior, allowing for strategic planning. Moreover, AI algorithms can identify anomalies in data, enhancing fraud detection and risk management. In the social sciences, AI assists researchers in analyzing survey data and deriving meaningful conclusions. By automating routine tasks, data scientists can focus on interpreting results and developing new hypotheses. Overall, AI is not just a tool but a catalyst for innovation in statistics, driving advancements in various fields and shaping data-driven decision-making."
  }
];


function Home() {
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const [loadingLineIndex, setLoadingLineIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingLineIndex(currentIndex);
      setSelectedSector(sectors[currentIndex]); 


      const nextIndex = (currentIndex + 1) % sectors.length;
      setCurrentIndex(nextIndex);

 
      setTimeout(() => {
        setLoadingLineIndex(-1);
      }, 500); 
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [currentIndex]); 

  const handleSectorClick = (index) => {
    setLoadingLineIndex(index);
    setSelectedSector(sectors[index]); // Update content
    setCurrentIndex(index); // Update current index

    // Reset loading line index after a delay
    setTimeout(() => {
      setLoadingLineIndex(-1); // Reset loading line index after the animation
    }, 500); // Match this time with your animation duration
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Path: The Platform for AI Growth and Innovation for Everyone</h1>
          <p>
            Join our community focused on training and mentorship in AI. Acquire hands-on experience and collaborate on
            cutting-edge projects that advance technology and improve lives across multiple sectors.
          </p>
          <div className="button-container">
            <a href="#explore" className="get-started-button">Explore Now</a>
            <a href="/contact" className="investor-button">Join Us</a>
          </div>

          {/* Marquee Section */}
          <div className="marquee-section">
            <div className="scroll">
              <div className="scroll-content">
                <span>Engineering</span>
                <span>Medical</span>
                <span>Agriculture</span>
                <span>Transport</span>
                <span>Automotive</span>
                <span>Chemical</span>
                <span>Infrastructure</span>
                <span>Aeronautics</span>
                <span>Aviation</span>
                <span>Arts</span>
                <span>Statistics</span>
                <span>Robotics</span>

                {/* Duplicate the content for seamless scrolling */}
                <span>Engineering</span>
                <span>Medical</span>
                <span>Agriculture</span>
                <span>Transport</span>
                <span>Automotive</span>
                <span>Chemical</span>
                <span>Infrastructure</span>
                <span>Aeronautics</span>
                <span>Aviation</span>
                <span>Arts</span>
                <span>Statistics</span>
                <span>Robotics</span>
                
              </div>
            </div>
          </div>

        </div>
      </div>  

      {/* Who We Are Section */}
      <div className="who-we-are-section">
        <h2>Building the Future of Artificial Intelligence</h2>
        <p>AI Concepts Hub is committed to advancing innovation and nurturing growth in the realm of Artificial Intelligence. Our dedicated team of experts is focused on equipping individuals and organizations with the knowledge and practical skills necessary to thrive in this rapidly evolving field.</p>

        <div className="why-choose-us-container">
          <div className="why-choose-us-right">
            <ul>
              <li>
                <span>Practical Learning Experience</span>
                <p>Join in hands-on projects that allow you to apply AI concepts in real-world scenarios, ensuring that you gain valuable experience and confidence in your skills.</p>
              </li>
              <li>
                 <span>Specialized Training Across Fields</span>
                 <p>Access targeted training programs designed for various sectors, including medical, engineering, finance, agriculture, and more, empowering you with industry-specific knowledge.</p>
               </li>
               <li>
                <span>AI-Driven Solutions Development</span>
                <p>Engage in the development of innovative AI projects aimed at solving complex problems and simplifying processes across various industries, showcasing our commitment to not only training but also implementing effective AI solutions.</p>
              </li>
            </ul>
          </div>
          <div className="why-choose-us-left">
            <img src={A} alt="Why Choose Us" className="why-image" />
          </div>
        </div>
      </div>

      {/* AI Solutions Section */}
      <div className="b-container">
        <div className="b-content">
          <h3>AI Solutions for Real-World Challenges - Combining Innovation and Training to Simplify Complex Problems Across Industries</h3>
        </div>
      </div>

      {/* AI Fields Section */}
      <div className="ai-fields-section" id="explore">
        <h3>Explore Our Various AI Fields</h3>
        <p>
          AI Concepts Hub is dedicated to showcasing the diverse applications of artificial intelligence across multiple sectors. We provide insights and training to help individuals and organizations leverage AI to solve real-world challenges, fostering innovation in healthcare, finance, and beyond.
        </p>

        <div className="fields-container">
          <div className="sectors-container">
            {sectors.map((sector, index) => (
              <div key={index} style={{ position: 'relative', marginBottom: '20px' }}>
                <div
                  className={`vertical-line ${loadingLineIndex === index ? 'loading-line' : ''}`}
                ></div>
                <div
                  className={`sector-item ${selectedSector.title === sector.title ? 'active' : ''}`} // Add active class
                  onClick={() => handleSectorClick(index)}
                >
                  {sector.title}
                </div>
              </div>
            ))}
          </div>
          <div className="sector-content">
            <h3>{selectedSector.title}</h3>
            <p>{selectedSector.content}</p>
          </div>
        </div>
      </div>


      <div className="join-banner-container">
      <div className="join-banner-content">
        <h1 className="join-banner-title">Join Our Team</h1>
        <p className="join-banner-paragraph">
          We are always on the lookout for talented and passionate individuals to join our innovative and forward-thinking team. 
          If you are ready to make a difference, apply today!
        </p>
        <button className="join-banner-button">Join Now</button>
      </div>
    </div>


    <div className="h-contact-container">
      <div className="h-contact-left">
        <h3>Need Assistance? We're Here for You!</h3>
        <p className="h-contact-paragraph">
          We would love to hear from you! Whether you have a question, feedback, or would like to learn more about our services, feel free to reach out.
        </p>
        <p className="h-contact-paragraph">
          Our team is here to assist you with any inquiries. Fill out the form and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="h-contact-right">
        <form className="h-contact-form">

          <input type="text" id="name" name="name" placeholder="Name" required />

          <input type="email" id="email" name="email" placeholder="Email" required />

          <input type="text" id="subject" name="subject" placeholder="Subject" required></input>

          <textarea id="message" name="message" placeholder="Your message" required></textarea>

          <button type="submit" className="h-contact-submit-button">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Home;
