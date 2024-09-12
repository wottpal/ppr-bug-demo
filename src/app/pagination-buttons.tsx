'use client'

import { useQueryStates } from "nuqs"
import { params } from "./search-params"
import { TransitionStartFunction } from "react"

export default function PaginationButtons({ startTransition }: { startTransition: TransitionStartFunction }) {
  const [{ offset, limit }, setParams] = useQueryStates(params, {
    shallow: false,
    startTransition
  })

  return (
    <div className="flex gap-4 my-4 justify-end w-full">
      <button onClick={() => setParams({ offset: Math.max(offset - limit, 0) })}>Previous</button>
      <button onClick={() => setParams({ offset: offset + limit })}>Next</button>
    </div>
  )
}