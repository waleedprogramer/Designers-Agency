import React from "react";

function Mission () {
  return (
    <div className="flex p-10 justify-between align-center gap-10 flex-col lg:flex-row">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-center text-4xl font-bold">Our Core Vision</h1>
        <p className="text-gray-600 mt-4">
          Empowering businesses to create impactful and visually stunning brand
          experiences that captivate audiences and drive success in the digital
          age.
        </p>
        <p className="text-gray-600 mt-4">
          Our team consists of experienced designers and developers. We have a
          wide variety of skills and backgrounds, allowing us to tackle projects
          of all sizes and complexities. We believe in the power of imagination
          and innovation.
        </p>
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-center text-4xl font-bold">Our Main Mission</h1>
        <p className="text-gray-600 mt-4">
          Our mission is to collaborate with businesses of all sizes, from
          startups to established brands, to provide innovative and creative
          design solutions.
        </p>
        <p className="text-gray-600 mt-4">
          We are committed to creating designs that inspire and connect our
          clients in the marketplace. Our focus is on understanding our clients'
          unique needs and delivering designs that not only meet but exceed
          their expectations.
        </p>
      </div>
    </div>
  );
};

export default Mission;
