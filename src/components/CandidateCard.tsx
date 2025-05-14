import { Candidate } from '../interfaces/Candidate.interface';

const CandidateCard = ({ candidate }: { candidate: Candidate }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '10px 0' }}>
      <img src={candidate.avatar_url} alt={candidate.name} width={100} />
      <h2>{candidate.name || candidate.login}</h2>
      <p><strong>Username:</strong> {candidate.login}</p>
      <p><strong>Location:</strong> {candidate.location}</p>
      <p><strong>Email:</strong> {candidate.email}</p>
      <p><strong>Company:</strong> {candidate.company}</p>
      <a href={candidate.html_url} target="_blank">GitHub Profile</a>
    </div>
  );
};

export default CandidateCard;
