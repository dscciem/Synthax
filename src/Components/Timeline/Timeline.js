import React from "react";
import DiscordLogo from "../Banner/assets/Discord.svg";
import Heading from "../Heading/Heading";

function Timeline() {
  return (
    <section style={{ backgroundColor: "#f9f9f9" }}>
      <Heading title="Timeline" lineWidth="20rem" />
      <div className="text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of Synthax 2.0
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the Synthax 2.0 process. Go through all the
              steps to know the exact process of the event. If any queries
            </p>
            <a
              href="https://discord.gg/7b6Q5TNt3h"
              rel="noreferrer"
              target="_blank"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-2 border border-yellow-300 hover:border-transparent"
              style={{ display: "flex" }}
            >
              <img src={DiscordLogo} alt="Discord Button" className="w-12" />
              <span style={{ margin: "8px 20px 0px 20px" }}>Contact Us</span>
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      20-29 September, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Call for Project Admins, If you have existing projects or
                      have particular project idea in mind (website, app, etc),
                      then this is the perfect opportunity for you to get it
                      built while also helping numerous students in turn.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">
                      20-30 September, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Call for Project Contributors, If you have basic git
                      skills or are first timers or even veteran developers,
                      Synthax 2.0 would be a perfect opportunity to get a taste
                      of contributing in a open source projects.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      27 September - 30 October, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Event Duration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Synthax aims to bring students into the world of open
                      source development and see the power of unified
                      problem-solving in real time. The projects that we will
                      host have been carefully hand-picked to invigorate
                      creative thinking and encourage collaboration among all
                      participants.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">
                      1st Week of November
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Result Declaration &amp; Prize Distribution
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
