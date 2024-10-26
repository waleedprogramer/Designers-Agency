import React from "react";
import Heading from "../components/Heading";
import Image from "next/image";
import Mission from '../components/Mission'
import story1 from "../images/story1.png";
import story2 from "../images/story2.png";
import story3 from "../images/story3.png";
import story4 from "../images/story4.png";

function About() {
  return (
    <>
      <div>
        <Heading
          title="Who We Are"
          subtitle="We think our story is worth sharing with you"
        />
        <p className="text-center mt-5 text-gray-500 lg:px-28">
          Established in 2008, we began as a small but ambitious team. We
          understood the importance of creative and tech-savvy solutions to help
          businesses succeed in the ever-changing digital landscape.
        </p>
      </div>
      <div className="p-10 flex flex-col md:flex-row gap-5 justify-evenly">
        <Image
          src={story1}
          alt=""
          className="rounded-2xl w-full md:w-3/5 border-5 border-solid"
          style={{ border: "10px solid black" }}
        />
        <Image
          src={story2}
          alt=""
          className="rounded-2xl w-full md:w-1/3 border-5 border-solid"
          style={{ border: "10px solid black" }}
        />
      </div>
      <div className="p-10 flex flex-col md:flex-row gap-5 justify-evenly">
        <Image
          src={story3}
          alt=""
          className="rounded-2xl w-full md:w-1/3 border-5 border-solid"
          style={{ border: "10px solid black" }}
        />
        <Image
          src={story4}
          alt=""
          className="rounded-2xl w-full md:w-3/5 border-5 border-solid"
          style={{ border: "10px solid black" }}
        />
      </div>

      <div>
        <Mission/>
      </div>
    </>
  );
}

export default About;
