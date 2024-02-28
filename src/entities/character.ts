export interface Books {
  id: number;
  title: string;
  releaseDay: string;
  author: string;
  description: string;
}

export interface Info {
  id: number;
  type: string;
  content: string;
}

export interface Spells {
  id: number;
  spell: string;
  use: string;
}

export interface Character {
  id: string;
  character: string;
  nickname: string;
  hogwartsStudent: boolean;
  hogwartsHouse: string;
  interpretedBy: string;
  child: string[];
  image: string;
}

export interface Characters {
  characters: Character[];
  info: Info[];
  spells: Spells[];
  books: Books[];
}