export const Education = () => {
  return (
    <div className="mx-auto w-10/12  ">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
          id="tag"
        ></div>
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className=" font-bold text-gray-800 text-xl">
              Fullstack Javascript
            </h3>
            <h3 className=" font-bold text-gray-800 text-xl underline">
              Hacktiv 8
            </h3>
            <p className="mb-3 font-bold text-gray-800 text-sm">
              Jul 2022 - Oct 2022
            </p>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Studied matters related to software development and software
              architecture, passed with a final score of 95.3.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className=" font-bold text-gray-800 text-xl">
              Information Systems
            </h3>
            <h3 className=" font-bold text-gray-800 text-xl underline">
              Multi Data Palembang University
            </h3>
            <p className="mb-3 font-bold text-gray-800 text-sm">
              Sep 2018 - May 2022
            </p>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Bachelor of Computer Science, majoring in software development and
              software architecture. Graduated in May 2022 with a final GPA of
              3.91 out of 4.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className=" font-bold text-gray-800 text-xl">
              Natural Sciences Major
            </h3>
            <h3 className=" font-bold text-gray-800 text-xl underline">
              SMA Methodist-2 Palembang
            </h3>
            <p className="mb-3 font-bold text-gray-800 text-sm">2015 - 2018</p>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              During high school, I studied science and graduated in 2018 with
              an average of 8.3 out of 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
