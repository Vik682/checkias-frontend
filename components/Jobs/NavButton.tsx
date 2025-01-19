"use client"; // This directive tells Next.js that this is a Client Component
interface NavInput{
    currentStep:number , maxStep: number, handlePrevious:()=>void, handleNext:()=>void, handleSubmit:(React.MouseEventHandler)
}

const NavButton = ({currentStep , maxStep, handlePrevious, handleNext, handleSubmit}:NavInput) => {
  return (
    <div className="flex justify-between space-x-4 mt-4">
      {currentStep > 0 && (
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Previous
        </button>
      )}
      {currentStep < maxStep - 1 ? (
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Next
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Application
        </button>
      )}
    </div>
  );
};

export default NavButton;
