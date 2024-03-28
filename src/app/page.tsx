import Image from "next/image";
import axios from "axios";
import Project from "./components/Project";
import CreateProjectBtn from "./components/CreateProjectBtn";
export default function Home() {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;
  // if (baseURL) {
  //   axios
  //     .get(baseURL + "/")
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }

  return (
    <main className="flex min-h-screen p-24 flex-col items-center ">
      <div className="p-5  w-50  w-full ">
        <CreateProjectBtn />
      </div>
      <div className="p-5 border w-50 border-cyan-600 w-full flex-col items-center justify-between ">
        <h2 className="text-2xl text-cyan-200">PROJECTS</h2>
        <hr className="border-cyan-600 mb-4"></hr>

        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </main>
  );
}
