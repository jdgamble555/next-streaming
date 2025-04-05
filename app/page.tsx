import { Suspense } from "react";
import Todo from "./todo";
import Loading from "./loading";


export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center mt-5 gap-3">
      <h1 className="text-2xl">Todo</h1>
      <Suspense fallback={<Loading />}>
       <Todo />       
      </Suspense>
    </main>
  );
}
