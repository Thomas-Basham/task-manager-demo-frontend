import Image from "next/image";
import axios from "axios";
export default function Home() {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;
  if (baseURL) {
    axios
      .get(baseURL + "/potato")
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <>
      <header>
        <nav className="p-5 border border-cyan-600">
          <h1 className="text-3xl text-cyan-100">Task Manager Demo </h1>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="p-5 border w-50 border-cyan-600 w-full ">
          <h2 className="text-2xl">Tasks</h2>
        </div>
      </main>
    </>
  );
}
