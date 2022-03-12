import React, { useState } from 'react';

type Props = {
  voteHistoryString: string;
};

export const VoteHistory: React.FC<Props> = ({ voteHistoryString }) => {
  const data = JSON.parse(voteHistoryString);

  // console.log(data);

  const players = Object.keys(data);
  const currentMissionNum = data[players[0]].length;

  // console.log("Current mission num: ", currentMissionNum);

  const missions = [1, 2, 3];

  return (
    <div>
      <table>
        <tbody id="voteHistoryTable" className="voteHistoryTableClass">
          <tr>
            {/* This is the top left corner that is empty. */}
            <td></td>
            {missions.map((num) => (
              <td>Mission {num}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
