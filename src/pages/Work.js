import React from 'react';
import MultipleItems from '../components/slider';
import '../components/css/work.css';

const Work = () => {
  return (
    /* Past Work */
    <section className="pagesWrapper" id="pastWork">
      <div className="Workpage">
        <h2 className="header_sections" id="workHeader">
          <span className="num">0.2 </span>
          Work
        </h2>

        {/* cards */}

        <MultipleItems />
      </div>
    </section>
  );
};
export default Work;
