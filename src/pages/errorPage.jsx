import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Ooupss!</h1>
      <p className="my-5 text-xl">Sorry, unexpected error has occured</p>
      <p>{error.statusText || error.massage}</p>
    </div>
  )
}
