import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const users = await searchGithub();
      const detailedCandidates = await Promise.all(
        users.map(async (user: any) => {
          const details = await searchGithubUser(user.login);
          return details;
        })
      );
      setCandidates(detailedCandidates);
    };
    fetchCandidates();
  }, []);

  const handleAccept = () => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    const current = candidates[index];
    localStorage.setItem('savedCandidates', JSON.stringify([...saved, current]));
    setIndex((prev) => prev + 1);
  };

  const handleReject = () => {
    setIndex((prev) => prev + 1);
  };

  if (index >= candidates.length) {
    return <h2>No more candidates available</h2>;
  }

  const currentCandidate = candidates[index];

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentCandidate && <CandidateCard candidate={currentCandidate} />}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleReject}>-</button>
        <button onClick={handleAccept}>+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
