import { useState } from "react";
import "../jobss/job.css";
import { FiFilter } from "react-icons/fi";

const jobData = [
  { id: 1, title: "Frontend Developer", category: "IT" },
  { id: 2, title: "Backend Developer", category: "IT" },
  { id: 3, title: "Graphic Designer", category: "Design" },
  { id: 4, title: "UI/UX Designer", category: "Design" },
  { id: 5, title: "Project Manager", category: "Management" },
  { id: 6, title: "HR Specialist", category: "HR" },
  { id: 7, title: "Marketing Manager", category: "Marketing" },
  { id: 8, title: "Sales Executive", category: "Sales" },
  { id: 9, title: "Customer Support", category: "Support" },
  { id: 10, title: "QA Engineer", category: "Testing" },
];

const categories = [
  "All",
  "IT",
  "Design",
  "Management",
  "HR",
  "Marketing",
  "Sales",
  "Support",
  "Testing",
];

const Job = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs =
    selectedCategory === "All"
      ? jobData
      : jobData.filter((job) => job.category === selectedCategory);

  return (
    <div className="job">
      <div className="container">
        <div className="jobs_main">
          <div className="jobs_title">
            <h1>Find Your Job Today!</h1>
            <p>
              Connecting Talent with Opportunity: Your Gateway to Career Success
            </p>
          </div>

          <div className="jobs_filter">
            <button
              className="filter_toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span>Filter</span>
              <FiFilter size={18} />
            </button>

            <div className={`filter_dropdown ${showFilters ? "show" : ""}`}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter_btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="jobs_list_column">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job_card">
                <h3>{job.title}</h3>
                <p>{job.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
