import { Character } from "@/entities/character"
import Image from "next/image"

interface CardProps {
  character: Character
}

export default function Card({ character }: CardProps) {
  return (
    <div className="bg-[#202024] border border-zinc-700 rounded-md p-6">
      <Image src={character.image} alt={character.nickname} width={100} height={100} className="w-full h-40 rounded-sm object-contain" />

      <div className="mt-4 space-y-2">
        <h2 className="font-medium">Character: {character.character}</h2>
        <p>Actor: {character.interpretedBy}</p>
        <p>House: {character.hogwartsHouse}</p>
      </div>
    </div>
  )
}