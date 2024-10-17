import React, { useState } from "react";
// import { type } from "./../../node_modules/arg/index.d";

const ModelWindow = () => {
  const [open, setOpen] = useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="min-h-screen bg-slate-300 flex flex-col justify-center items-center ">
        <button
          className="bg-green-600 py-2 px-5 rounded-full hover:bg-green-500 transition-all ease-linear"
          onClick={handleClickOpen}
        >
          Open Modal
        </button>
      </div>
      {open && (
        <div className="min-h-screen w-full top-0 left-0  fixed bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 bg-opacity-60 flex flex-col justify-center items-center ">
          <div className="bg-slate-200 py-7 px-28 shadow-lg">
            <h3 className="text-lg my-2 ">Are You Sure, To Buy!</h3>
            <div className="flex gap-7">
              <button
                type="button"
                className="bg-red-500 py-1 px-7  rounded-md  my-4"
                onClick={handleCancel}
              >
                No
              </button>

              <button
                type="button"
                className="bg-blue-500 py-1 px-7 rounded-md my-4"
                onClick={handleConfirm}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModelWindow;
