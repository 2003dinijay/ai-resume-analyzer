import { useState } from 'react';
import Navbar from '~/components/Navbar';
import FileUploader from '~/components/FileUploader';

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    setStatusText('Scanning your resume...');
    // TODO: Add your file upload / ATS logic here
  };

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>

          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume.scan.gif" className="w-full" />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips.</h2>
          )}

          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name"></label>
                <input
                  type="text"
                  placeholder="Company Name"
                  id="company-name"
                  className="border p-2 rounded"
                />
              </div>

              <div className="form-div">
                <label htmlFor="job-title"></label>
                <input
                  type="text"
                  placeholder="Job Title"
                  id="job-title"
                  className="border p-2 rounded"
                />
              </div>

              <div className="form-div">
                <label htmlFor="job-description"></label>
                <input
                  type="text"
                  placeholder="Job Description"
                  id="job-descriptione"
                  className="border p-2 rounded"
                />
              </div>

              <div className="form-div">
                <label htmlFor="uploader"></label>
                <FileUploader />
              </div>

              <button
                type="submit"
                className="primary-button"
              >
                Analyze Resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
