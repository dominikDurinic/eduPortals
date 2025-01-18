import { portals } from "../context/eduPortalUrl";

type decisionTreeValue = {
  [key: string]: number[];
};

const decisionTree: decisionTreeValue[] = [
  //q 1
  { A: [1], B: [0, 2, 3], C: [0, 1, 2, 3] },
  //q 2
  { A: [0, 1, 2], B: [3], C: [0, 1, 2] },
  //q 3
  { A: [1, 2, 3], B: [0], C: [0, 1, 2, 3] },
  //q 4
  { A: [0, 2, 3], B: [1], C: [0, 1, 2, 3] },
  //q 5
  { A: [0, 1, 2], B: [3], C: [0, 1, 2, 3] },
  //q 6
  { A: [1, 2], B: [0, 3], C: [1, 2] },
  //q 7
  { A: [2], B: [1, 3], C: [0, 1, 2, 3] },
];

export function getAdvicePortal(answers: string[]) {
  const totalPoints = [0, 0, 0, 0];
  let max = totalPoints[0];
  let max_i = [];

  answers.forEach((answer, q_num) => {
    const points = decisionTree[q_num][answer];
    points.forEach((portal) => {
      totalPoints[portal] += 1;
    });
  });

  for (let i = 0; i < totalPoints.length; i++) {
    if (totalPoints[i] === max) {
      max_i.push(i);
    } else if (totalPoints[i] > max) {
      max = totalPoints[i];
      max_i = [];
      max_i.push(i);
    }
  }

  let response: string[] = [];

  response = max_i.map((ind) => {
    return portals[ind];
  });

  return response;
}
