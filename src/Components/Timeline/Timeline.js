import React from "react";
import DiscordLogo from "../Banner/assets/Discord.svg";
import Heading from "../Heading/Heading";

function Timeline() {
  return (
    <section>
      <div className="bg-black text-white py-8">
        <h2 className="text-center text-6xl text-brown-light">Timeline</h2>
        <hr className="w-1/5 bg-yellow-light my-3 border-yellow-light border-2 ml-auto mr-auto" />
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
              href="#"
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
                      19-29 September, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Project Admin Registration Pick your favourite event(s)
                      and register in that event by filling the form
                      corresponding to that event. Its that easy :)
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
                      Project Contributors registration, Participate online. The
                      links for your registered events will be sent to you via
                      email and whatsapp groups. Use those links and show your
                      talent.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      {" "}
                      27 September - 30 October, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Event Duration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
