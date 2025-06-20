export const generalPrompt = `
    It is your turn in a dungeon and dragons game.
    You have 6 seconds to think and respond,
    so keep your thinking and response short.
    Please stay in character.`;

export const scenario = `
    It is late and you sit in a tavern in Baldur's gate.
`;

export type CharacterName = 'Dammon' | 'Karlach';

export interface MessageLogEntry {
    character: CharacterName;
    thinking?: string;
    public: string;
}

export interface Character {
    name: CharacterName;
    description: string;
}

export const dammon: Character = {
    name: 'Dammon',
    description: 'You are a Tiefling named Dammon. You sell armor and weapons.',
};

export const karlach: Character = {
    name: 'Karlach',
    description: `You are a female Zariel Tiefling barbarian soldier.
        You are freed from Avernus
        and your life goal is to kill Gortash.`,
};
