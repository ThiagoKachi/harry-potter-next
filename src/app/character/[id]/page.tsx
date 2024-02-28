import Card from "@/components/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CharacterProps {
  params: {
    id: string
  }
}

async function characterDetails(id: string) {
  const response = await fetch(`https://harry-potter-api-en.onrender.com/characters/${id}`);
  const data = await response.json();
  return data;
}

export default async function Character({ params: { id } }: CharacterProps) {
  const character = await characterDetails(id);

  return (
    <div>
      <button type="button" className="mb-4">
        <Link href="/">
          <ArrowLeft size={24} />
        </Link>
      </button>
      <Card character={character} />
    </div>
  )
}