import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from '../../constants';
import ResumeCard from '~/components/ResumeCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Track applications and AI feedback for your resumes" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />
      <section className="main-section overflow-x-hidden">
        <div className="page-heading py-16" >
          <h1>Track your Applications and Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        {resumes.length > 0 ? (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-10 text-center">No resumes submitted yet.</p>
        )}
      </section>
    </main>
  );
}
