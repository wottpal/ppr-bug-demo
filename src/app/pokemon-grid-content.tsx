'use client'

import { useQueryStates } from "nuqs";
import { params, paramsSerializer } from "./search-params";
import { use, useTransition } from "react";
import PaginationButtons from "./pagination-buttons";

export default function PokemonGridContent() {
  const [{ limit, offset }] = useQueryStates(params)
  const promise = Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${paramsSerializer({ limit, offset })}`).then(res => res.json()),
    new Promise(resolve => setTimeout(resolve, 500)) // increase delay for visibility
  ])
  const [data] = use(promise)
  const [transition, startTransition] = useTransition()

  if (transition) {
    return <div className="text-yellow-500 font-bold text-2xl">Loading...</div>
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data.results.map((pokemon: any) => (
          <div key={pokemon.name} className="size-52 rounded-xl flex items-center justify-center bg-gray-900">{pokemon.name}</div>
        ))}
      </div>

      <PaginationButtons startTransition={startTransition} />
    </>
  );
}
