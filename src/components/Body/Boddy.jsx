import React from "react";
import "./boddy.css";

function Boddy() {
  return (
    <div className="mainBody">
      <h5>Work From Home anywhere in USA $25 per hour for 25-40 hours</h5>
      <div >
        <h4>Here is the Job description :</h4>

      
      <ol type="1" style={{ listStyleType: 'number' }}>
        <li>Transcribe, review and interpret all lease data before entry into the database.</li>
        <li>Ensure all data is accurately and swiftly entered.</li>
        <li>Review all documents that come in for accuracy (this makes the data entry people’s jobs easier).</li>
        <li>Update, correct any and all inaccuracies in the database.</li>
      </ol>
 
        {/* <p>
           1.⁠ ⁠Transcribe, review and interpret all lease data before entry
          into the database.
        </p>
        <p> 2.⁠ Ensure all data is accurately and swiftly entered..</p>
        <p>
           3.⁠ Review all documents that come in for accuracy (this makes the
          data entry people’s jobs easier).
        </p>
        <p> 4.⁠ Update, correct any and all inaccuracies in the database.</p>
     */}
      </div>
      <button>Click here to apply</button>
    </div>
  );
}

export default Boddy;
