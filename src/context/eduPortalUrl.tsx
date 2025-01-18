type eduPortalUrls = {
  [key: string]: string;
};

export const eduPortalUrl: eduPortalUrls = {
  edutorij: "https://edutorij.carnet.hr/",
  teachable: "https://teachable.com/",
  udemy: "https://www.udemy.com/teaching/?ref=teach_header",
  "google-classroom":
    "https://edu.google.com/workspace-for-education/classroom/",
};

export const portals = ["edutorij", "teachable", "udemy", "google-classroom"];

type eduPortalSimilars = {
  [key: string]: { name: string; simPortal: string };
};

export const similarPortals: eduPortalSimilars = {
  edutorij: {
    name: "Edutorij",
    simPortal: "Nažalost, trenutačno ne postoje slične inačice u Hrvatskoj.",
  },
  teachable: {
    name: "Teachable",
    simPortal: "Thinkific, Podia, Mighty Networks, ...",
  },
  udemy: {
    name: "Udemy",
    simPortal: " Khan Academy, Coursera, edX, Skillshare, ...",
  },
  "google-classroom": {
    name: "Google Classroom",
    simPortal: "Moodle, Loomen, ...",
  },
};
