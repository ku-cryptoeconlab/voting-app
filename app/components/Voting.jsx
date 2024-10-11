"use client";
import React, { useEffect, useState } from "react";
import ContestantCard from "./ContestantCard.jsx";

const VotePage = () => {
  const [contestants, setContestants] = useState([]);

  useEffect(() => {
    const fetchContestants = async () => {
      const data = [
        {
          id: 1,
          name: "Alice Johnson",
          description: "Experienced leader with a vision for the future.",
          image: "/images/pentagram.png",
        },
        {
          id: 2,
          name: "Bob Smith",
          description: "Dedicated to community service and engagement.",
          image: "/images/pentagram.png",
        },
        // Add more contestants as needed
      ];
      setContestants(data);
    };

    fetchContestants();
  }, []);

  const handleVote = async (contestantId) => {
    try {
      // Implement your voting logic here
      // This could involve interacting with a smart contract or an API
      console.log(`Voted for contestant with ID: ${contestantId}`);

      // Example: Sending a POST request to your backend
      /*
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contestantId }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Your vote has been recorded!');
      } else {
        alert('There was an issue recording your vote.');
      }
      */
    } catch (error) {
      console.error("Error voting:", error);
      alert("An error occurred while processing your vote.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Vote for Your Favorite Contestant
      </h1>
      <div className="flex flex-wrap justify-center">
        {contestants.map((contestant) => (
          <ContestantCard
            key={contestant.id}
            contestant={contestant}
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
};

export default VotePage;
