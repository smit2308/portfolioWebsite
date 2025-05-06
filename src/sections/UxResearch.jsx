import React from "react";
import { Compare } from "../components"; // Adjust path based on your structure

 const UxResearch = ({ imageBefore, imageAfter, image }) => {
  return (
    <div className="flex flex-col gap-12 text-left text-secondary mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Image Comparison */}
      <section>
        <h3 className="text-2xl font-semibold leading-1">Before & After Comparison </h3>
        <p className="font-light text-sm  mb-8">Swipe to reveal the change</p>
        <Compare
          firstImage={imageBefore}
          secondImage={imageAfter}
          className="w-full h-[400px]"
          initialSliderPercentage={50}
          slideMode="hover"
          showHandlebar={true}
          autoplay={false}
        
        />
      </section>
    <section className="flex flex-row gap-4">
      <p>Aligned homepage structure and visual language with USC’s centralized 
        <span className="font-bold"> MyUSC portal </span> 
        for a unified student experience</p>
   
      <img src={image} alt="MyViterbi" className="w-[500px]  rounded-lg shadow-lg mb-4" />
    </section>
         {/* Methods */}
         <section>
  <h3 className="text-2xl font-semibold mb-4">Research Methods</h3>
  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong>Pilot Testing & Design Gallery</strong><br />
      <span className="text-sm">
        <strong>Why:</strong> To gather early feedback on layout, visual hierarchy, and usability assumptions.<br />
        <strong>Outcome:</strong> Exposed critical issues with information overload and lack of visual clarity.
      </span>
    </li>
    <li>
      <strong>Moderated Usability Testing</strong><br />
      <span className="text-sm">
        <strong>Why:</strong> To measure user performance and gather verbalized frustration points.<br />
        <strong>Outcome:</strong> Revealed bottlenecks in D-Clearance flows, confusing icons, and lack of mobile compatibility.
      </span>
    </li>
    <li>
      <strong>Heuristic Evaluation (Nielsen’s 10)</strong><br />
      <span className="text-sm">
        <strong>Why:</strong> To systematically check for usability guideline violations.<br />
        <strong>Outcome:</strong> Identified lack of feedback, inconsistent layout, error prevention gaps, and poor help visibility.
      </span>
    </li>
  </ul>
</section>


   

      {/* UX Highlights */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Key UX Improvements</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Redesigned D-Clearance into a single screen with dropdowns and inline guidance</li>
          <li>Created mobile responsive version of the website</li>
          <li>Added pop-up confirmation dialogs to prevent accidental submissions</li>
          <li>Replaced ambiguous red X icons with labeled trash bin buttons</li>
          <li>Implemented a responsive mobile layout with optimized spacing and input accessibility</li>
          <li>Added search and filter capabilities for faster content discovery</li>
        </ul>
      </section>

         {/* Results Table */}
         <section>
  <h3 className="text-2xl font-semibold mb-4">Usability Test Results</h3>
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Metric</th>
          <th className="border border-gray-300 px-4 py-2">Current Design</th>
          <th className="border border-gray-300 px-4 py-2">New Design</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Task Completion Time (avg.)</td>
          <td className="border px-4 py-2">2m 14s</td>
          <td className="border px-4 py-2">1m 24s</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Number of Errors (avg.)</td>
          <td className="border px-4 py-2">1.5</td>
          <td className="border px-4 py-2">0</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Overall Experience</td>
          <td className="border px-4 py-2">2.2 / 5</td>
          <td className="border px-4 py-2">4.25 / 5</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Home Screen Experience</td>
          <td className="border px-4 py-2">2.5 / 5</td>
          <td className="border px-4 py-2">5.0 / 5</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Applying D-Clearance</td>
          <td className="border px-4 py-2">1.75 / 5</td>
          <td className="border px-4 py-2">4.75 / 5</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Deleting D-Clearance</td>
          <td className="border px-4 py-2">1.25 / 5</td>
          <td className="border px-4 py-2">4.75 / 5</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      {/* User Quotes */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">User Feedback Highlights</h3>
        <blockquote className="italic border-l-4 pl-4 border-primary">
          <p>"Much simpler and less frustrating to use D-clearance."</p>
          <p>"I like the quick access to important links and the options to customize."</p>
          <p>"The delete button here is more intuitive than the red cross."</p>
        </blockquote>
      </section>

{/* Limitations & Future Improvements */}
      <section>
  <h3 className="text-2xl font-semibold mb-4">Limitations & Future Improvements</h3>
  <ul className="list-disc pl-6 space-y-2">
    <li>The current design is a Figma prototype and lacks backend integration or real-time data.</li>
    <li>Some usability findings are based on a small sample (n = 4–5); further testing at scale is needed.</li>
    <li>Future iterations will implement full-stack development with user account persistence, D-clearance state logic, and real search/filter functions.</li>
    <li>More diverse testing (including mobile-first users and international students) can further validate edge cases.</li>
  </ul>
</section>

{/* Conclusion */}
<section>
  <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
  <p className="text-base">
    The redesign of MyViterbi demonstrated clear improvements in task completion speed, user satisfaction, and error prevention. 
    By centering the design process around real student feedback, usability heuristics, and iterative validation, we created a 
    streamlined and intuitive interface that addresses both desktop and mobile user needs. The success of this project lays 
    a strong foundation for engineering a fully functional version with real data integration and long-term scalability.
  </p>
</section>

{/* Takeaways */}
<section>
  <h3 className="text-2xl font-semibold mb-4">Takeaway</h3>
  <p className="text-base">
    This project reinforced the importance of user-centered design and iterative testing. It highlighted the need for continuous feedback loops and the value of heuristic evaluations in identifying usability issues. It completely changed my workflow, now I spend more time studying people than designing.
  </p>
</section>


   
    </div>
  );
};
export default UxResearch;