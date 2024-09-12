import { SearchParams } from "nuqs/parsers";
import { Suspense } from "react";
import { paramsCache, paramsSerializer } from "./search-params";
import PokemonGridContent from "./pokemon-grid-content";


export default function PokemonGrid({ searchParams }: { searchParams: SearchParams }) {
  const { limit, offset } = paramsCache.parse(searchParams)

  return (
    <Suspense key={paramsSerializer({ limit, offset })} fallback={<div className="text-red-500 font-bold text-2xl">Loading...</div>}>
      <PokemonGridContent />
    </Suspense>
  );
}

