'use client'

import Card from "@/components/card";
import Header from "@/components/header";
import { Spinner } from "@/components/spinner";
import { motion } from "framer-motion";
import Link from "next/link";
import { useHomeController } from "./useHomeController";

export default function Home() {
  const { characters, search, setSearch, isLoading } = useHomeController();

  return (
    <div>
      <Header searchTerm={search} onSetSearch={setSearch} />

      {isLoading && (
        <div className="w-full flex justify-center mt-[15%]">
          <Spinner />
        </div>
      )}
      <div className="gap-2.5 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((character) => {
          return (
            <Link key={character.id} href={`/character/${character.id}`} passHref>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 30
                }}
              >
                <Card character={character} />
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}