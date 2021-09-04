import React, { useEffect, useState } from "react";
import Candidate from "./Candidate";
import "./CandidatesList.css";
import axios from "axios";

export default function CandidateList({ profileId }) {
  const [profiles, setProfiles] = useState([]);
  const [swiped, setSwiped] = useState([]);

  console.log("current user profileid:", profileId);
  // TODO
  useEffect(() => {
    console.log("useeffect runs");
    if (profiles.length === 0) {
      // get all profiles except current user's
      axios.get(`/api/profiles/${profileId}`).then((res) => {
        console.log("profiles res", res);
        const profiles = res.data;
        setProfiles([...profiles]);
      });
    }
    if (swiped.length === 0) {
      // get all candidates ids the current user has swiped
      axios.get(`/api/candidate/${profileId}`).then((res) => {
        console.log("candidates res", res);
        const profiles = res.data;
        setSwiped([...profiles]);
      });
    }
  }, []);

  // useEffect(() => {

  // }, []);

  console.log("all profiles except user:", profiles);

  // remove profiles that the user swiped before
  swiped.forEach((swipee) => {
    const i = profiles.findIndex(
      (profile) => parseInt(profile.id) === parseInt(swipee.candidate_dog_id)
    );
    if (i !== -1) {
      profiles.splice(i, 1);
    }
  });

  console.log("swiped users:", swiped);
  console.log("leftover profiles:", profiles);
  const candidateListItem = profiles.map((candidate) => {
    return (
      <Candidate
        key={candidate.id}
        candidate_id={candidate.id}
        name={candidate.name}
        imageUrl={candidate.imageurl}
        location={candidate.location}
        info={candidate.description}
        breed={candidate.breed}
        gender={candidate.gender}
        age={candidate.age}
        size={candidate.size}
        owner={candidate.owner}
        user_id={profileId}
      />
    );
  });

  return profiles.length > 0 && swiped.length > 0 ? (
    <div className="candidate">
      <div className="candidate_card" id="candidate_cardNone">
        <div className="candidate_none">
          <h1>You a bit too thirsty for doggos👀</h1>
          <h1>Drink some water and swipe again later🥵</h1>
        </div>
      </div>
      {candidateListItem}
    </div>
  ) : (
    <div></div>
  );
}
