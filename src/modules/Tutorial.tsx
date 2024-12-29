import { Navigate, useParams } from "react-router-dom";

function Tutorial() {
  const portal = useParams();

  const portals = [
    "edutorij",
    "thinkific",
    "teachable",
    "udemy",
    "khan-academy",
    "google-classroom",
    "moodle",
    "loomen",
  ];

  return (
    <>
      {portal.name && portals.includes(portal.name) ? (
        <>{portal.name}</>
      ) : (
        <Navigate to={"/eduportals"} replace />
      )}
    </>
  );
}

export default Tutorial;
