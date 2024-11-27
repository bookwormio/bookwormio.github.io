import React from "react";
import "./TutorialPageDisplay.css";
import placeholder_screenshot from "../../assets/placeholder_screenshot.png";
import bookworm_icon from "../../assets/bookworm_icon.png";

const TutorialPageDisplay = () => {
  return (
    <div className="tutorial-page">
      <div className="tutorial-content">
        <div className="tutorial-header">
          <h1>
            BookW
            <img src={bookworm_icon} alt="o" />
            rm Tutorial
          </h1>
          <div className="tutorial-subtitle">How to use BookWorm</div>
        </div>

        <div className="tutorial-sections">
          {/* Section 1 - Left Image */}
          <div className="tutorial-section left-image">
            <div className="section-image">
              <img
                src={placeholder_screenshot}
                alt="Create Account Screenshot"
              />
            </div>
            <div className="section-content">
              <h2>Create an Account or Sign In</h2>
              <p>
                Get started by creating your account or signing in to an
                existing one.
              </p>
            </div>
          </div>

          {/* Section 2 - Right Image */}
          <div className="tutorial-section right-image">
            <div className="section-content">
              <h2>Discover Books</h2>
              <p>
                Find books using the search functionality, or scan a book you
                have at hand using the barcode scanner. Books can be added to
                your shelves.
              </p>
            </div>
            <div className="section-image">
              <img src={placeholder_screenshot} alt="Search Page Screenshot" />
            </div>
          </div>

          {/* Section 3 - Left Image */}
          <div className="tutorial-section left-image">
            <div className="section-image">
              <img src={placeholder_screenshot} alt="User Search Screenshot" />
            </div>
            <div className="section-content">
              <h2>Connect with Fellow Readers</h2>
              <p>
                Following users allows you to expand your network of readers.
                Search for a user you know - try following Nicole Forrester and
                Sam Christensen!
              </p>
            </div>
          </div>

          {/* Section 4 - Right Image */}
          <div className="tutorial-section right-image">
            <div className="section-content">
              <h2>Make It Your Own</h2>
              <p>
                The profile is home to your bookshelves, previous posts, badges
                and reading metrics. You can edit and manage your account and
                view your achievements.
              </p>
            </div>
            <div className="section-image">
              <img src={placeholder_screenshot} alt="Profile Page Screenshot" />
            </div>
          </div>

          {/* Section 5 - Left Image */}
          <div className="tutorial-section left-image">
            <div className="section-image">
              <img src={placeholder_screenshot} alt="Create Post Screenshot" />
            </div>
            <div className="section-content">
              <h2>Share Your Reading Journey</h2>
              <p>
                Share your reading progress by making posts as you go! BookWorm
                will keep track of your previous bookmark, so you can focus on
                adding photos and sharing your thoughts.
              </p>
            </div>
          </div>

          {/* Section 6 - Right Image */}
          <div className="tutorial-section right-image">
            <div className="section-content">
              <h2>Stay Connected</h2>
              <p>
                Crucial to any good social media, BookWorm features a page for
                users to view their friend's recent posts, leave likes and
                comments and see their reading progress.
              </p>
            </div>
            <div className="section-image">
              <img src={placeholder_screenshot} alt="Posts Feed Screenshot" />
            </div>
          </div>

          {/* Section 7 - Left Image */}
          <div className="tutorial-section left-image">
            <div className="section-image">
              <img
                src={placeholder_screenshot}
                alt="Recommendations Screenshot"
              />
            </div>
            <div className="section-content">
              <h2>Find Your Next Great Read</h2>
              <p>
                After adding some books to your shelves, use our recommendation
                algorithm to suggest a book for you. Click "generate
                recommendations" to see a list of books that fit your reading
                taste!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPageDisplay;
