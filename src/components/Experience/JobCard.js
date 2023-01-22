import React from "react";

const JobCard = ({ data, cardIndex }) => {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <div className="job-card">
          <h3 className="job-header">
            {item.position}
            <span className="job-company"> at {item.company}</span>
          </h3>
          <p className="job-date">{item.date}</p>
          <div>
            <ul className="job-list">
              {Object.values(item.info).map((infoPiece) => (
                <li className="job-list-item">{infoPiece}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
