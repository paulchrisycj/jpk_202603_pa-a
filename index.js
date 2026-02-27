const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ============================================================
// DATA
// ============================================================

const associateCerts = [
  { id: 1, name: "Solutions Architect", type: "Architect", duration: 130, cost: 150, passingScore: 720 },
  { id: 2, name: "Developer", type: "Developer", duration: 130, cost: 150, passingScore: 720 },
  { id: 3, name: "SysOps Administrator", type: "Operations", duration: 130, cost: 150, passingScore: 720 },
  { id: 4, name: "Data Engineer", type: "Data", duration: 130, cost: 150, passingScore: 720 },
  { id: 5, name: "Machine Learning Engineer", type: "Data", duration: 170, cost: 150, passingScore: 720 },
  { id: 6, name: "Cloud Practitioner", type: "Foundational", duration: 90, cost: 100, passingScore: 700 },
  { id: 7, name: "AI Practitioner", type: "Foundational", duration: 90, cost: 100, passingScore: 700 },
  { id: 8, name: "Database Specialty", type: "Data", duration: 180, cost: 150, passingScore: 750 },
  { id: 9, name: "DevOps Engineer", type: "Developer", duration: 130, cost: 150, passingScore: 720 },
  { id: 10, name: "Network Engineer", type: "Operations", duration: 130, cost: 150, passingScore: 720 },
  { id: 11, name: "Security Engineer", type: "Operations", duration: 130, cost: 150, passingScore: 720 },
  { id: 12, name: "Data Analytics", type: "Data", duration: 130, cost: 150, passingScore: 720 },
  { id: 13, name: "Cloud Support Engineer", type: "Foundational", duration: 90, cost: 100, passingScore: 700 },
  { id: 14, name: "Solutions Planner", type: "Architect", duration: 130, cost: 150, passingScore: 720 },
  { id: 15, name: "Migration Engineer", type: "Architect", duration: 170, cost: 150, passingScore: 750 },
  { id: 16, name: "API Developer", type: "Developer", duration: 130, cost: 150, passingScore: 720 },
  { id: 17, name: "Serverless Developer", type: "Developer", duration: 130, cost: 150, passingScore: 720 },
  { id: 18, name: "Infrastructure Engineer", type: "Operations", duration: 170, cost: 150, passingScore: 750 },
];

const professionalCerts = [
  { id: 1, name: "Solutions Architect Professional", domain: "Architecture", passingScore: 750, cost: 300, duration: 180 },
  { id: 2, name: "DevOps Engineer Professional", domain: "DevOps", passingScore: 750, cost: 300, duration: 180 },
  { id: 3, name: "Cloud Security Professional", domain: "Security", passingScore: 770, cost: 300, duration: 180 },
  { id: 4, name: "Data Engineering Professional", domain: "Data", passingScore: 750, cost: 300, duration: 180 },
  { id: 5, name: "Machine Learning Professional", domain: "AI/ML", passingScore: 750, cost: 300, duration: 180 },
  { id: 6, name: "Network Design Professional", domain: "Networking", passingScore: 750, cost: 300, duration: 180 },
  { id: 7, name: "Advanced Networking Professional", domain: "Networking", passingScore: 770, cost: 300, duration: 180 },
  { id: 8, name: "Big Data Analytics Professional", domain: "Data", passingScore: 750, cost: 300, duration: 180 },
  { id: 9, name: "Cloud Migration Professional", domain: "Architecture", passingScore: 750, cost: 300, duration: 180 },
  { id: 10, name: "Security Operations Professional", domain: "Security", passingScore: 770, cost: 300, duration: 180 },
  { id: 11, name: "Platform Engineer Professional", domain: "DevOps", passingScore: 750, cost: 300, duration: 180 },
  { id: 12, name: "AI Solutions Professional", domain: "AI/ML", passingScore: 750, cost: 300, duration: 180 },
  { id: 13, name: "Infrastructure Architect Professional", domain: "Architecture", passingScore: 770, cost: 300, duration: 180 },
  { id: 14, name: "Application Developer Professional", domain: "DevOps", passingScore: 750, cost: 300, duration: 180 },
  { id: 15, name: "Database Administrator Professional", domain: "Data", passingScore: 750, cost: 300, duration: 180 },
  { id: 16, name: "Cloud Compliance Professional", domain: "Security", passingScore: 770, cost: 300, duration: 180 },
  { id: 17, name: "Serverless Architecture Professional", domain: "Architecture", passingScore: 750, cost: 300, duration: 180 },
  { id: 18, name: "Deep Learning Professional", domain: "AI/ML", passingScore: 770, cost: 300, duration: 180 },
  { id: 19, name: "Container Services Professional", domain: "DevOps", passingScore: 750, cost: 300, duration: 180 },
  { id: 20, name: "IoT Solutions Professional", domain: "Architecture", passingScore: 750, cost: 300, duration: 180 },
];

const specialtyCerts = [
  { id: 1, name: "Advanced Networking Specialty", domain: "Networking", level: "Expert", cost: 300 },
  { id: 2, name: "Security Specialty", domain: "Security", level: "Expert", cost: 300 },
  { id: 3, name: "Machine Learning Specialty", domain: "AI/ML", level: "Expert", cost: 300 },
  { id: 4, name: "Database Specialty", domain: "Data", level: "Expert", cost: 300 },
  { id: 5, name: "Data Analytics Specialty", domain: "Data", level: "Advanced", cost: 300 },
  { id: 6, name: "SAP on AWS Specialty", domain: "Enterprise", level: "Expert", cost: 300 },
  { id: 7, name: "GameTech Specialty", domain: "Media", level: "Advanced", cost: 300 },
  { id: 8, name: "Alexa Skill Builder Specialty", domain: "AI/ML", level: "Advanced", cost: 300 },
  { id: 9, name: "IoT Specialty", domain: "IoT", level: "Expert", cost: 300 },
  { id: 10, name: "Media Services Specialty", domain: "Media", level: "Advanced", cost: 300 },
  { id: 11, name: "HPC Specialty", domain: "Compute", level: "Expert", cost: 300 },
  { id: 12, name: "Container Security Specialty", domain: "Security", level: "Expert", cost: 300 },
  { id: 13, name: "Blockchain Specialty", domain: "Enterprise", level: "Advanced", cost: 300 },
  { id: 14, name: "Edge Computing Specialty", domain: "IoT", level: "Expert", cost: 300 },
  { id: 15, name: "Serverless Specialty", domain: "Compute", level: "Advanced", cost: 300 },
  { id: 16, name: "DevSecOps Specialty", domain: "Security", level: "Expert", cost: 300 },
  { id: 17, name: "Cloud Financial Management Specialty", domain: "Enterprise", level: "Advanced", cost: 300 },
  { id: 18, name: "Quantum Computing Specialty", domain: "Compute", level: "Expert", cost: 300 },
];

// ============================================================
// ENDPOINTS
// ============================================================

// GET /associate-certs
// Query params: type (optional) — filter by type (Architect, Developer, Operations, Data, Foundational)
app.get("/associate-certs", (req, res) => {
  let results = [...associateCerts];
  const { type } = req.query;

  if (type) {
    results = results.filter(
      (cert) => cert.type.toLowerCase() === type.toLowerCase()
    );
  }

  res.json(results);
});

// GET /professional-certs
// Query params:
//   sort (optional): "name" (ascending) or "passingScore" (descending)
//   page (optional): page number, default 1
//   limit (optional): items per page, default 5
app.get("/professional-certs", (req, res) => {
  let results = [...professionalCerts];
  const { sort, page, limit } = req.query;

  if (sort === "name") {
    results.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  } else if (sort === "passingScore") {
    results.sort((a, b) => b.passingScore - a.passingScore);
  }

  const pageNum = parseInt(page) || 1;
  const limitNum = parseInt(limit) || 5;
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  results = results.slice(startIndex, endIndex);

  res.json(results);
});

// GET /specialty-certs
// Query params: search (optional) — matches name or domain (case-insensitive)
app.get("/specialty-certs", (req, res) => {
  let results = [...specialtyCerts];
  const { search } = req.query;

  if (search) {
    const searchLower = search.toLowerCase();
    results = results.filter(
      (cert) =>
        cert.name.toLowerCase().includes(searchLower) ||
        cert.domain.toLowerCase().includes(searchLower)
    );
  }

  res.json(results);
});

// ============================================================
// START SERVER
// ============================================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Set A API (AWS Certificates) running on port ${PORT}`);
});
