import React from "react";
import bgImage from "../asserts/bg7.jpg";
import FormPage from "../FormPage";

const HeroPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="w-full h-screen px-5 mt-5 grid grid-rows-2 gap-5 md:grid-cols-2">
          <div className=" md:h-screen">
          <img 
            className="w-full h-full"
            src={bgImage} alt=''/>
          </div>
          <div className=" md:h-screen">
            <FormPage/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroPage;
