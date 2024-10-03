import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Chatbotpage.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false); // Manage the chat window state
    const [messages, setMessages] = useState([{ text: "Hello! How can I help you today?", sender: "bot" }]);
    const [input, setInput] = useState("");

    const qaPairs = [
        { question: "What is AI Concepts Hub?", answer: "The AI Concepts Hub is a platform dedicated to providing training in artificial intelligence and machine learning across various domains. We focus on hands-on projects and mentorship from international experts to help you excel in these fields." },
        { question: "What is the slogan for your training hub?", answer: "Our slogan is 'AI for Everyone.' We believe that AI and ML should be accessible to all, regardless of prior experience." },
        { question: "Who can enroll in the training programs?", answer: "Everyone can enroll! Our programs are suitable for students from various backgrounds, including arts, science, management, and engineering, as well as project managers, IT professionals, and medical practitioners." },
        { question: "What kind of training do you offer?", answer: "We offer online training that includes live sessions, hands-on projects, and continuous support in applying AI and ML technology across different fields." },
        { question: "How is the training structured?", answer: "The training is divided into modules focusing on awareness, application, testing, and deployment of AI and ML technologies, along with prototype creation and project execution." },
        { question: "Why should I take AI and ML training?", answer: "AI and ML are transforming industries. By participating in our training, you will enhance your career prospects, gain valuable skills, and secure better positions with competitive salaries." },
        { question: "What ongoing projects are available for students?", answer: "Our ongoing projects cover various domains such as building construction, transport safety, environmental analysis, and medical management. You will have opportunities to work on real-world challenges." },
        { question: "What domains do you cover in your training?", answer: "We cover a wide range of fields, including engineering, medical, pharmaceutical, agricultural, transport, and more. Check our dropdown menu for a full list of domains." },
        { question: "Can I work on live projects during the training?", answer: "Yes, participants will engage in live projects, applying what they learn in real-world scenarios to enhance their understanding and skills." },
        { question: "What support is available after training?", answer: "We offer continuous training and support, including mentorship and resources to help you implement your skills effectively in your career." },
        { question: "How can I contact you for more information?", answer: "You can reach out through our website's contact page, where you will find options for privacy inquiries, ethical practices, and discussion forums to ask questions." },
        { question: "Are there any special programs for R&D professionals?", answer: "Yes, we provide tailored training and mentoring programs specifically designed for research and development professionals." },
        { question: "How do I access project details after enrollment?", answer: "Once enrolled, you can log in to our portal. There are different access levels: general browsing for all visitors, detailed project information for enrolled students, and administrative details for project coordinators." },
        { question: "What can I see as a general visitor?", answer: "General visitors can view the training hub's main features, program details, and general information about AI and ML training." },
        { question: "What additional details can enrolled students access?", answer: "Enrolled students can view detailed information about their projects, including teammate details and specific training materials." },
        { question: "Do you offer AI services?", answer: "Yes, we offer AI services including machine learning, natural language processing, and AI integration." }
    ];

    const toggleChat = () => setIsOpen(!isOpen);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const sendMessage = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: "user" };
            setMessages([...messages, newMessage]);
            setInput(""); // Clear input after sending

            // Split the user's input into words for keyword matching
            const inputWords = input.toLowerCase().split(/\s+/);

            setTimeout(() => {
                // Find a match for the user's input in the predefined questions
                const matchedQA = qaPairs.find(qa =>
                    inputWords.some(word => qa.question.toLowerCase().includes(word))
                );

                const botMessage = matchedQA
                    ? { text: matchedQA.answer, sender: "bot" }
                    : { text: "I'm sorry, I don't have the answer to that question. Please contact support.", sender: "bot" };

                setMessages([...messages, newMessage, botMessage]);
            }, 1000); // Simulated delay
        }
    };

    return (
        <div className="chatbot">
            {/* Chatbot toggle icon */}
            <div className="chatbot-icon" onClick={toggleChat}>
                {isOpen 
                    ? <FontAwesomeIcon icon={faTimes} />  // Close icon
                    : <FontAwesomeIcon icon={faComments} /> // Chat icon
                }
            </div>

            {/* Chat window */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Chat with Us</h3>
                    </div>
                    <div className="chatbot-body">
                        {messages.map((message, index) => (
                            <div key={index} className={`chat-message ${message.sender}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-footer">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type a message..."
                        />
                        {/* Send button with send icon */}
                        <button onClick={sendMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
