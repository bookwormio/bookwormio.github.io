import "./PrivacyPageDisplay.css";

import bookworm_icon from "../../assets/bookworm_icon.png";

const PrivacyPageDisplay = () => {
  return (
    <div className="tutorial-page body-class">
      <div className="tutorial-content">
        <div className="tutorial-header">
          <h1 className="heading-primary">
            BookW
            <img src={bookworm_icon} alt="o" />
            rm Privacy Policy
          </h1>
        </div>
      </div>
      <div className="container-class">
        <p className="text-left">
          <strong>Effective Date:</strong> January 1, 2025
        </p>

        <h2 className="heading-secondary">1. Introduction</h2>
        <p className="text-left">
          BookWorm is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our mobile application and services.
        </p>

        <h2 className="heading-secondary">2. Information We Collect</h2>
        <p className="text-left">
          We collect the following types of information to provide and improve our services:
        </p>
        <ul className="text-left">
          <li>
            <strong>Personal Information:</strong> Name, email address, and other details provided during account registration.
          </li>
          <li>
            <strong>Activity Data:</strong> Information related to your reading habits, book searches, posts, comments, and likes.
          </li>
        </ul>

        <h2 className="heading-secondary">3. How We Use Your Information</h2>
        <p className="text-left">We use the information we collect to:</p>
        <ul className="text-left">
          <li>Provide core functionalities, such as book recommendations, social features, and book management.</li>
          <li>Facilitate user interactions, such as friend requests and post engagement.</li>
          <li>Improve app performance, user experience, and personalized features.</li>
        </ul>

        <h2 className="heading-secondary">4. How We Share Your Information</h2>
        <p className="text-left">We do not sell your personal information. We may share your data with:</p>
        <ul className="text-left">
          <li>
            <strong>Other Users:</strong> To enable social features like friend lists, posts, and challenges.
          </li>
          <li>
            <strong>Legal Compliance:</strong> When required by law or to protect our users' rights and safety.
          </li>
        </ul>

        <h2 className="heading-secondary">5. Data Storage and Security</h2>
        <p className="text-left">
          We use secure methods to store your data and take reasonable precautions to protect it from unauthorized access or disclosure. However, no system is completely secure. Please protect your account credentials.
        </p>

        <h2 className="heading-secondary">6. Third-Party Services</h2>
        <p className="text-left">
          Our app integrates with external APIs, such as the Google Books API. These third parties have their privacy policies, and we encourage you to review them.
        </p>

        <h2 className="heading-secondary">7. Your Choices</h2>
        <p className="text-left">You can manage your data by:</p>
        <ul className="text-left">
          <li>Updating or deleting your account information.</li>
          <li>Adjusting your app settings to control notifications and data sharing.</li>
          <li>Contacting us to request data deletion.</li>
        </ul>

        <h2 className="heading-secondary">8. Children’s Privacy</h2>
        <p className="text-left">
          BookWorm is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children.
        </p>

        <h2 className="heading-secondary">9. Changes to This Policy</h2>
        <p className="text-left">
          We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or via email.
        </p>

        <h2 className="heading-secondary">10. Contact Us</h2>
        <p className="text-left">
          If you have questions about this Privacy Policy, please contact any of the founders.
        </p>
      </div>
      <footer className="footer-class">
        &copy; 2025 BookWorm. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPageDisplay;
