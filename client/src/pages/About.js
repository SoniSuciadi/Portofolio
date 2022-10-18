import photo from "../assets/photo.png";
import "animate.css";
export const About = () => {
  return (
    <div className="h-full grid grid-cols-2 border-slate-800 ">
      <div className="flex justify-end animate__animated animate__backInLeft">
        <img className="w-96 " src={photo} />
      </div>
      <div className=" my-auto">
        <div className=" text-slate-800  py-6 w-3/4 ">
          <p className="text-5xl  ">Soni Suciadi</p>
          <p className="text-xl ">Fullstack Developer</p>
        </div>
        <p className="w-3/4">
          Fresh graduate from Multi Data Palembang University and Hacktiv8. I
          have passion and determined to keep learning new things and good
          motivation to work. Concentrated in system development and software
          architecture, since 4 years ago, and is a good problem solver, loves
          analysis and computation
        </p>
      </div>
    </div>
  );
};
