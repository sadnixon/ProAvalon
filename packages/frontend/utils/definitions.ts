class Definitions {
  [index: string]: string;
}

type Aliases = {
  [index: string]: string[];
};

// prettier-ignore
const definitions: Definitions = {
    'approve': '1. (Of a player) to vote in favor of (a pick). 2. (Of the majority of the players in the game) to approve (a pick), allowing the players on it to vote for the current mission to succeed or fail. 3. A vote by a player in favor of a pick.',
    'assassin': 'A spy who can win the game for the spies if he guesses Merlin correctly after three missions succeed. Used in every standard online Avalon game.',
    'assassinate': '(Of the Assassin) to guess that (a player) is Merlin, winning the game for the spies if his guess is correct.',
    'assassination': 'The phase of the game in which the Assassin deliberates with his spymates in an attempt to guess Merlin, winning the game for the spies if his guess is correct.',
    'allegiance': 'Membership to a team.',
    'anti': '(Of a team) containing as few players as possible from (a previous team).',
    'card': '1. A card which is passed from one player to another at specific times during the game, which reveals the allegiance of the recipient to the passer or vice versa. The Lady of the Lake, the Sire of the Sea, or the Ref of the Rain. 2. To give a card to (another player).',
    'card chain': 'The group of players who have held a card during the game, especially if they have resed one another upon the passing of the card.',
    'claim': '1. To profess that one is (a role, especially Percival or Oberon). 2. To do something that causes other players to believe that one is (a role).',
    'clean': '(Of a team) containing no spies.',
    'confirmed': ' (Of a player) unquestionably (a role or allegiance).',
    'conf': '(Of a player) Confirmed; unquestionably (a role or allegiance).',
    'coordinate': '(Of a spy) to attempt to reveal one’s role to one’s spymates in order to make proper use of the fail order.',
    'counterclaim': 'To claim (a role) which another player has already claimed.',
    'critical mission': 'A mission which takes place after two previous missions have failed.',
    'danis': 'A principle which states that, in a 6p game, if the first two missions succeed, M3 should not contain all the players from M2, and M4 should be a repick of M2. Named after Avalon player thedaniman.',
    'dead merlin': 'A player who is the only Merlin candidate on a team.',
    'dirty': '(Of a team) containing one or more spies.',
    'double': '(Of a team) to contain exactly two spies.',
    'double fail': '(Of a mission) to fail with two fails.',
    'double float': '(Of a mission) to succeed despite doubling.',
    'fab 4': 'The four roles used in every standard online Avalon game',
    'fabulous 4': 'The four roles used in every standard online Avalon game',
    'fail': '1. (Of a spy) to vote for (a mission) to fail. 2. A vote [4] by a spy for a mission to fail. 3. (Of a mission) to have been failed by one or more spies. 4. A mission which fails.',
    'fail order': 'A principle which states that if multiple spies are on a mission, The first role on this list should fail it',
    'flip': 'To make an offpick that gives the same information as (a previous offpick).',
    'flip pick': 'To make an offpick that gives the same information as (a previous offpick).',
    'float': '1. (Of a mission) to succeed despite being dirty. 2. (Of a spy) to succeed (a mission).',
    'frame': '(Of a resistance) to act as if one is Percival and (another player) is Merlin, in an attempt to cause the spies to assassinate that player instead of Merlin.',
    'gauntlet': 'A scenario in which the hammer and one or more players immediately to the right of the hammer are spies, especially in a critical mission.',
    'golden rules': 'Three fundamental rules of online Avalon which every player must know',
    'hammer': '1. The fifth pick of a mission; if rejected, the spies win. 2. The player who made or will make that pick. 3. To be the hammer. 4. The player whose pick ought to be approved despite not being the fifth pick of a mission.',
    'hammer reject': 'To reject the hammer.',
    'hero vt': 'A Vanilla Town who tries too hard to get assassinated.',
    'ice': 'To spy (another player) forcefully.',
    'isolde': 'A resistance who knows Tristan. In games with Tristan and Isolde, the assassin may choose to assassinate two people, winning the game for spies if they are Tristan and Isolde. Only available on proavalon.com. Not used in standard online Avalon games.',
    'lady of the Lake': 'A card which begins with the player to the right of M1.1, is passed to another player immediately after M2, M3, and M4, and reveals the allegiance of the recipient to the passer. Used in standard 8-10p online Avalon games.',
    'lady': 'A card which begins with the player to the right of M1.1, is passed to another player immediately after M2, M3, and M4, and reveals the allegiance of the recipient to the passer. Used in standard 8-10p online Avalon games.',
    'leader': 'The player whose turn it is to pick.',
    'lovers': '1. Tristan and Isolde. 2. Teammates.',
    'mc': 'misclick',
    'merlin': 'A resistance who knows who the spies are. If the Assassin guesses Merlin correctly after three missions succeed, the spies win. Used in every standard online Avalon game. The Hidden Agenda equivalent of Commander.',
    'merlin candidate': 'A player whom the spies consider assassinating.',
    'mission': '1. A phase of the game in which players pick teams of a specified size until one is approved and the mission succeeds or fails. 2. A team which is approved.',
    'mordred': 'A spy who is not known by Merlin. Used in standard 9-10p online Avalon games. The Hidden Agenda equivalent of Deep Cover.',
    'morg': '1. (Of Percival) to believe that (a player whom he sees as “Merlin?”) is Morgana. 2. Morgana.',
    'morgana': 'A spy who appears as “Merlin?” to Percival. Used in every standard online Avalon game. The Hidden Agenda equivalent of False Commander.',  
    'oberon': 'A spy who does not know who the other spies are, and is not known by the other spies. Used in standard 7p and 10p online Avalon games. The Hidden Agenda equivalent of Blind Spy.',
    'offapprove': ' To approve (a pick) one is not on.',
    'offpick': 'To pick (a team) that does not include oneself; in a 2-player mission, to pick such a team and reject it indicates that the two players picked are of opposite allegiances.',
    'onpick': 'To pick (a team including oneself), especially with (another player) in a 2-player mission.',
    'onrej': ' To reject (a pick) that includes oneself.',
    'onreject': ' To reject (a pick) that includes oneself.',
    'out': 'To profess that you are (a role or allegiance, especially spy or Merlin), or to do something that makes other players believe such.',
    'override': 'To res (another player) while disregarding information they have given.',
    'pass': '(Of a mission) to succeed, especially in M4 in 7-10p games, in which two fails are required for a mission to fail.',
    'percival':  'A resistance who knows Merlin and Morgana but does not know who is who, instead seeing both as “Merlin?”. Used in every standard online Avalon game. The Hidden Agenda equivalent of Body Guard.',
    'pick': '1. A team of a specified size put forward by the leader, which each player approves or rejects. If the team is not approved, the player to the left of the leader becomes the leader. 2. To make (a pick). 3. The group of players on a pick.',
    'pickreject': ' To pick (a team) and reject it.',
    'power role': '1. Percival or Merlin. 2. Percival, Merlin, Tristan, or Isolde.',
    'proposal': '1. A pick. 2. A suggestion for what ought to be picked.',
    'punt': 'To pick a team which one believes is dirty.',
    'quadruple': '(Of a team) to contain four spies.',
    'ref': 'A card which begins with the player to the right of M1.1, is passed to another player immediately after a fail [4], and reveals the allegiance of the recipient to the passer. Only available on proavalon.com. Not used in standard online Avalon games. Named after Avalon player Ref-Rain.',
    'ref of the rain': 'A card which begins with the player to the right of M1.1, is passed to another player immediately after a fail [4], and reveals the allegiance of the recipient to the passer. Only available on proavalon.com. Not used in standard online Avalon games. Named after Avalon player Ref-Rain.',
    'reject': '1. (Of a player) to vote in opposition to (a pick). 2. (Of the majority of the players in the game) to reject (a pick). 3. A vote by a player in opposition to a pick.',
    'rej': '1. (Of a player) to vote in opposition to (a pick). 2. (Of the majority of the players in the game) to reject (a pick). 3. A vote by a player in opposition to a pick.',
    'repick': 'To make a pick that is identical to (a previous pick), especially the immediately previous pick.',
    'res': '1. To profess that (another player) is resistance. 2. A resistance.',
    'resberon': 'A resistance who claims Oberon in an attempt to confuse the spies.',
    'resign': 'To profess that you are a role or allegiance, especially spy or Merlin, or to do something that makes other players believe such.',
    'resistance': '1. The loyal servants of Arthur; the good team; the team that wins if three missions succeed and Merlin is not assassinated. 2. A member of the resistance.',
    'role': 'A special character with a unique ability; Merlin, Percival, Assassin, Morgana, Mordred, Oberon, Tristan, or Isolde.',
    'safe reject': 'To reject (a pick) in a critical mission which you would approve were it not a critical mission.',
    'sire': 'A card which begins with the player two seats to the right of M1.1, is passed to another player immediately after M2, M3, and M4, and reveals the allegiance of the passer to the recipient. Only available on proavalon.com. Not used in standard online Avalon games.',
    'sire of the sea': 'A card which begins with the player two seats to the right of M1.1, is passed to another player immediately after M2, M3, and M4, and reveals the allegiance of the passer to the recipient. Only available on proavalon.com. Not used in standard online Avalon games.',
    'sh': 'Secret Hilter',
    'shade': 'To spy (another player) subtly.',
    'silver rules': 'Three principles which are less strictly followed than the golden rules',
    'single': '(Of a team) to contain exactly one spy.',
    'slam': 'To pick (a clean team), especially unexpectedly.',
    'slam clean': 'To pick (a clean team), especially unexpectedly.',
    'specfluence': '(Of a spectator) to attempt to influence players in an ongoing game.',
    'speech play': '(Of a resistance) to attempt to influence the result of the assassination by chatting during the assassination.',
    'spies': 'The minions of Mordred; the evil team; the team that wins if three missions fail, Merlin is assassinated, or the hammer is rejected.',
    'spy': '1. To profess that (another player) is a spy. 2. A member of the spies.',
    'spymate': 'A fellow member of the spies.',
    'success': '1. A vote [4] for a mission to succeed. 2. A mission which succeeds.',
    'succeed': '1. To vote for (a mission) to succeed. 2. (Of a mission) to have not failed.',
    'suicidal merl': 'A Merlin who makes it obvious that he is Merlin.',
    'suicidal merlin': 'A Merlin who makes it obvious that he is Merlin.',
    'tofy': ' Tofy.',
    'toxic percy': 'A Percival who ignores Vanilla Towns and makes it obvious who Merlin and Morgana are.',
    'triple': '(Of a team) to contain three spies.',
    'triple fail': '(Of a mission) to fail with three fails.',
    'triple float': '(Of a mission) to succeed despite tripling.',
    'tristan': 'A resistance who knows Isolde. Only available on proavalon.com. Not used in standard online Avalon games.',
    'unmerlin': '(Of a resistance) to do something which causes the spies to believe that you are not Merlin.',
    'vanilla spy': 'A spy with no special role, whose role simply appears as “Spy”.',
    'vanilla town': 'A resistance with no special role, whose role simply appears as “Resistance”.',
    'viable': '(Of a team), logical and consistent with known information.',
    'vote': '1. To approve or reject. 2. To succeed or fail. 3. An approve or reject. 4. A success or fail.',
    'vh': 'Vote history',
};

// prettier-ignore
const aliases: Aliases = {
    'approve': ['app'],
    'counterclaim' : ['cc'],
    'card chain': ['card'],
    'critical mission': ['crit', 'critical'],
    'merlin': ['merl'],
    'mordred': ['mord'],
    'oberon': ['obe'],
    'offapprove': ['offapp'],
    'percival': ['perc', 'perci', 'percy', 'percival'],
    'pickreject': ['pickrej'],
    'power role': ['pr'],
    'reject': ['rej'],
    'unmerlin': ['unmerl'],
    'vanilla town': ['vt'],
    'vanilla spy': ['vs'],
}

Object.keys(aliases).forEach((key) => {
  aliases[key].forEach((alias) => {
    definitions[alias] = `${key}; ${definitions[key]}`;
  });
});

for (let i = 1; i <= 5; i += 1) {
  definitions[`m${i}`] = `Mission number ${i}`;
  for (let j = 1; j <= 5; j += 1) {
    definitions[`${i}.${j}`] = `Pick number ${i} of mission ${j}`;
  }
}

for (let i = 6; i <= 10; i += 1) {
  definitions[`${i}p`] = `A game with ${i} players.`;
}

export { Definitions, definitions };
