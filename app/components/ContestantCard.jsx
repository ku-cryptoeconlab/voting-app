// components/ContestantCard.jsx
import React from "react";
import PropTypes from "prop-types";

const ContestantCard = ({ contestant, onVote }) => {
  // Defensive check
  if (!contestant) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-red-100">
        <p className="text-red-500">Error: Contestant data is missing.</p>
      </div>
    );
  }

  const { image, name, description, id } = contestant;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src={image || "/images/default.jpg"} // Fallback image
        alt={name || "Contestant"}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {name || "Unnamed Contestant"}
        </div>
        <p className="text-gray-700 text-base">
          {description || "No description available."}
        </p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => onVote(id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Vote
        </button>
      </div>
    </div>
  );
};

// Define prop types for better type checking
ContestantCard.propTypes = {
  contestant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
  onVote: PropTypes.func.isRequired,
};

export default ContestantCard;
