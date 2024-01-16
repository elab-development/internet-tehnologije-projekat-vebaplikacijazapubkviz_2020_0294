import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-[84vh] flex flex-col justify-around">
      <section className="py-6 basis-1/3 bg-slate-500 grid place-items-center text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Join the Ultimate Pub Quiz Experience!
          </h2>
          <p className="text-lg mb-8">
            Engage in fun quizzes and challenge your knowledge.
          </p>
          <Link
            to="/register"
            className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-3 px-8 rounded"
          >
            Join Our Next Event
          </Link>
        </div>
      </section>
      <section
        id="about"
        className="py-6 basis-1/3 grid place-items-center bg-slate-400"
      >
        <div className="max-w-4xl flex flex-col justify-items-center text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Welcome to FE Pub, where knowledge meets entertainment in a lively
            and fun atmosphere! We pride ourselves on hosting the most engaging
            and thrilling pub quiz experiences that bring together friends,
            family, and trivia enthusiasts.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-slate-300 basis-1/3 grid place-items-center py-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More</h2>
          <p className="text-lg mb-8">
            Check out our upcoming events and view the scoreboard.
          </p>
          <Link
            to="/events"
            className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-3 px-8 rounded mr-4"
          >
            Upcoming events
          </Link>
          <Link
            to="/scoreboard"
            className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-3 px-8 rounded"
          >
            Scoreboard
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
