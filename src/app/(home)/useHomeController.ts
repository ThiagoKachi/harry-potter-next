'use client'

import { Character } from "@/entities/character";
import { useEffect, useState } from "react";

export function useHomeController() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  async function getCharactersList() {
    try {
      setIsLoading(true);
      const response = await fetch("https://harry-potter-api-en.onrender.com/characters");
      const data = await response.json();
      setCharacters(data);
    } catch {
      console.error("Error fetching characters");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCharactersList();
  }, []);

  const filteredCharacters = characters.length > 0
    ? characters
        .filter((character) => character.nickname
          .toLowerCase().includes(search.toLowerCase()))
    : []

  return { characters: filteredCharacters, search, setSearch, isLoading };
}