import React from 'react';
import styled from 'styled-components';

const Rating = styled.span`
  font-size: 2em;
`;

const RatingCard = ({ score }) => {
  switch (score) {
    case 5:
      return <Rating>⭐️⭐️⭐️⭐️⭐️</Rating>;
    case 4:
      return <Rating>⭐️⭐️⭐️⭐️️</Rating>;
    case 3:
      return <Rating>⭐️⭐️⭐️️</Rating>;
    case 2:
      return <Rating>⭐️⭐️️</Rating>;
    case 1:
      return <Rating>⭐️️</Rating>;
    default:
      return <Rating>No rating, yet.</Rating>;
  }
};

const Wrapper = styled.div`
  margin: 40px;
  text-align: center;
`;

const data = [
  { score: 5, userId: 1, flagged: false },
  { score: 4, userId: 1, flagged: false },
  { score: 1, userId: 1, flagged: false },
  { score: 3, userId: 1, flagged: false },
  { score: 2, userId: 1, flagged: false },
  { score: 2, userId: 2, flagged: false },
  { score: 4, userId: 3, flagged: true },
  { score: undefined, userId: undefined, flagged: undefined },
  { score: 4, userId: undefined, flagged: false },
  { score: 1, userId: undefined, flagged: false }
];

const isValidScoreObject = object =>
  typeof object.score === 'number' &&
  object.userId !== undefined &&
  !object.flagged;

const getAverageScore = scoreData => {
  let totalScore = 0, totalVotes = 0; // state
  for (let score of scoreData) { // iteration
    if (isValidScoreObject(score)) { // filtering
      totalScore += score.score; // incremental logic
      totalVotes += 1;
    }
  }
  if (totalScore > 0) {
    return totalScore / totalVotes; // calculation
  }
  return 0;
};

const addTwo = (a, b) => {
  console.log(a, b);
  return a + b;
};

const getAverageScoreFunctional = scoreData => {
  const scores = scoreData
    .filter(isValidScoreObject)
    .map(_ => _.score);
    console.log(scores);
  return scores.reduce(addTwo, 0) / scores.length;
};


export default class Demo extends React.Component {
  render () {
    return (
      <Wrapper>
        <RatingCard score={Math.round(getAverageScoreFunctional(data))} />
      </Wrapper>
    );
  }
};
