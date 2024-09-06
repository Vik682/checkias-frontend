import Image from "next/image";
import Head from "next/head";


export default function Home() {
  return (
   


    <div>
      <main className="ml-48 mt-16 p-4">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Updates & Support</h1>

          <p className="mb-4">
            Substandard evaluation will be asked to re-evaluate and will lead to <span className="text-red-500 font-bold">termination of the account</span>.
          </p>

          <h2 className="text-xl font-bold mb-2">Note:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Copies are expected to be evaluated within 24-48 hours of assigning; unassessed copies older than three days may be removed if we receive a student complaint, without prior notice.</li>
            <li>Questions marked for re-evaluation must be re-evaluated first and will not be considered as evaluated until done.</li>
          </ul>

          <p className="mb-4">
            For any issue - <a href="https://t.me/ConvertIAS feedback" className="underline">https://t.me/ConvertIAS feedback</a>
          </p>

          <div className="mb-4">
            <span className="inline-block bg-yellow-200 rounded-full px-2 py-1 text-sm font-semibold text-yellow-700 mr-2">New</span>
            <span>Quality and Dedication Bonus: <a href="#" className="underline">HERE</a> (Effective from 1st July)</span>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-yellow-200 rounded-full px-2 py-1 text-sm font-semibold text-yellow-700 mr-2">New</span>
            <span>Referral Bonus Policy & Form: <a href="#" className="underline">HERE</a></span>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-yellow-200 rounded-full px-2 py-1 text-sm font-semibold text-yellow-700 mr-2">New</span>
            <span>Claim Referral Bonus Form: <a href="#" className="underline">HERE</a></span>
          </div>
        </div>
      </main>
    </div>
  );
}


