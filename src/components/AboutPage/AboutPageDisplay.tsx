import React from "react";
import "./AboutPageDisplay.css";

const AboutPageDisplay = () => {
  return (
    <div className={"about-page"}>
      <div className={"about-content"}>
        <div className={"about-header"}>
          <h1>About BookWorm</h1>
          <div className={"about-subtitle"}>Where reading becomes social</div>
        </div>

        <div className={"about-sections"}>
          <div className={"about-main"}>
            <div className={"about-description"}>
              <p>
                <strong>
                  BookWorm transforms the solitary act of reading into a social
                  experience. We've created a space where book lovers can
                  connect, share their reading journeys, and discover their next
                  favorite stories together.
                </strong>
              </p>
            </div>

            <div className={"about-body"}>
              <h2>Our Mission 🚀</h2>
              <p>
                In today's fast-paced digital world, we believe reading
                shouldn't be a lonely pursuit. BookWorm bridges the gap between
                traditional reading and social connectivity, helping readers
                build meaningful connections through their love of books.
              </p>
            </div>

            <div className={"about-body"}>
              <h2>What We Offer 🏆</h2>
              <p>
                BookWorm provides a comprehensive platform where you can{" "}
                <strong>track</strong> your reading progress,{" "}
                <strong>share</strong> thoughts through posts, and{" "}
                <strong>engage</strong> with a community of fellow readers. Our
                intuitive bookshelves help you organize your reading life, while
                our achievement system celebrates your reading milestones with
                custom badges. Whether you're documenting your current chapter
                or discovering new recommendations from friends, BookWorm keeps
                you engaged and motivated in your reading journey.
              </p>
            </div>
          </div>

          <div className={"about-body"}>
            <h2>Technology Behind the Magic 🪄</h2>
            <p>
              Built with modern technology for a seamless experience, BookWorm
              leverages{" "}
              <strong>
                {" "}
                <a href="https://reactnative.dev/">React Native</a>
              </strong>{" "}
              and{" "}
              <strong>
                {" "}
                <a href="https://www.typescriptlang.org/">Typescript</a>
              </strong>{" "}
              to deliver a smooth, native mobile experience across devices. Our
              platform is powered by
              <strong>
                {" "}
                <a href="https://firebase.google.com/">Firebase</a>
              </strong>{" "}
              for real-time social features and secure data management. For
              personalized book recommendations, we built a custom{" "}
              <strong>
                {" "}
                <a href="https://api.bookwormio.com/">Flask API</a>
              </strong>{" "}
              deployed on AWS Elastic Beanstalk, ensuring you always find your
              next great read.
            </p>
          </div>

          <div className={"about-body"}>
            <h2>Join Our Reading Revolution 📚</h2>
            <p>
              BookWorm is more than just an app – it's a{" "}
              <strong>community</strong> where every page turn can spark a
              conversation, where reading goals become shared achievements, and
              where literature lovers find their digital home. Ready to make
              reading more social? Join BookWorm today and connect with readers
              who share your passion for stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageDisplay;
