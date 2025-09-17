"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement } from "@/store/slices/counterSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <main className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-3xl">Counter: {count}</h1>
      <div className="flex gap-2">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </main>
  );
}
