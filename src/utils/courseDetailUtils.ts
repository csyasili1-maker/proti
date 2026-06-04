import type { Course } from '@/mocks/coursesData';

// ─── Program Highlights Generator ────────────────────────
export function generateHighlights(course: Course) {
  const modeIcons: Record<string, string> = {
    'Cloud Computing': 'ri-cloud-line',
    'Cybersecurity': 'ri-shield-check-line',
    'Cloud Security': 'ri-shield-keyhole-line',
    'AI & Machine Learning': 'ri-brain-line',
    'Data Engineering': 'ri-database-2-line',
    'Software Development': 'ri-code-s-slash-line',
    'Data Analytics & Science': 'ri-bar-chart-grouped-line',
    'BI & Visualization': 'ri-pie-chart-line',
    'CRM / Salesforce': 'ri-customer-service-2-line',
    'ITSM / ServiceNow': 'ri-settings-3-line',
    'DevOps & Automation': 'ri-git-branch-line',
    'ERP & Business Apps': 'ri-building-2-line',
    'Project Management': 'ri-task-line',
    'Database Technologies': 'ri-server-line',
    'Emerging Technologies': 'ri-rocket-line',
    'Full Stack Programs': 'ri-stack-line',
    'Business Analysis': 'ri-line-chart-line',
  };

  const icon = modeIcons[course.category] || 'ri-book-open-line';

  return [
    { icon: 'ri-time-line', label: 'Duration', value: `${course.duration} Weeks` },
    { icon: 'ri-live-line', label: 'Format', value: 'Live Instructor-Led Online' },
    { icon: 'ri-group-line', label: 'Batch Size', value: 'Small (Personal Attention)' },
    { icon: icon, label: 'Category', value: course.category },
    { icon: 'ri-bar-chart-box-line', label: 'Level', value: course.level },
    { icon: 'ri-briefcase-4-line', label: 'Placement Support', value: 'Resume, Mock Interviews, Job Assistance' },
    { icon: 'ri-award-line', label: 'Certificate', value: 'Industry-Recognized' },
  ];
}

// ─── Features Generator ──────────────────────────────────
export function generateFeatures(course: Course): string[] {
  const baseFeatures = [
    'Trainer-led live interactive sessions',
    'Real-time project work & hands-on labs',
    'Resume + LinkedIn profile optimization',
    'Mock interviews with industry hiring experts',
    'Structured placement assistance',
    'Lifetime access to learning resources',
    'Recorded sessions for anytime revision',
    'Dedicated mentor support throughout',
  ];

  const categoryFeatures: Record<string, string[]> = {
    'Cloud Computing': ['Access to cloud sandbox environments', 'Exam voucher guidance for AWS/Azure/GCP certifications'],
    'Cybersecurity': ['Virtual lab access for hands-on security testing', 'Exam prep for CompTIA, CEH, CISSP certifications'],
    'AI & Machine Learning': ['GPU-enabled cloud notebooks for model training', 'Access to real-world datasets for projects'],
    'Data Engineering': ['Cloud data platform access for pipeline building', 'Real ETL/ELT scenario simulations'],
    'Software Development': ['Code review sessions with senior developers', 'Portfolio project deployment on cloud platforms'],
    'DevOps & Automation': ['Cloud sandbox for CI/CD pipeline practice', 'Kubernetes cluster access for hands-on labs'],
  };

  const extras = categoryFeatures[course.category] || ['Industry-recognized course completion certificate'];
  return [...baseFeatures.slice(0, 5), ...extras, ...baseFeatures.slice(5)];
}

// ─── Curriculum Modules Generator ────────────────────────
export function generateCurriculumModules(course: Course): { title: string; icon: string; topics: string[] }[] {
  if (course.curriculum && course.curriculum.length > 0) {
    const chunkSize = Math.ceil(course.curriculum.length / 4);
    const moduleNames = ['Foundations', 'Core Skills', 'Applied Practice', 'Capstone & Career Prep'];

    return Array.from({ length: 4 })
      .map((_, index) => {
        const topics = course.curriculum!.slice(index * chunkSize, (index + 1) * chunkSize);
        return {
          title: `${course.title} ${moduleNames[index]}`,
          icon: index === 0 ? 'ri-book-open-line' : index === 1 ? 'ri-tools-line' : index === 2 ? 'ri-terminal-box-line' : 'ri-trophy-line',
          topics,
        };
      })
      .filter((module) => module.topics.length > 0);
  }

  const categoryModules: Record<string, { title: string; icon: string; topics: string[] }[]> = {
    'Cloud Computing': [
      { title: 'Cloud Foundations', icon: 'ri-cloud-line', topics: ['Introduction to Cloud Computing', 'Cloud Service Models (IaaS, PaaS, SaaS)', 'Deployment Models (Public, Private, Hybrid)', 'Major Cloud Providers Overview'] },
      { title: 'Core Infrastructure', icon: 'ri-server-line', topics: ['Compute Services Deep Dive', 'Storage Solutions', 'Networking & Content Delivery', 'Identity & Access Management'] },
      { title: 'Cloud Architecture', icon: 'ri-building-2-line', topics: ['Designing Scalable Architectures', 'High Availability & Fault Tolerance', 'Cost Optimization Strategies', 'Security Best Practices'] },
      { title: 'Advanced Topics', icon: 'ri-settings-3-line', topics: ['Serverless Computing', 'Containerization in the Cloud', 'Monitoring & Logging', 'Disaster Recovery Planning'] },
      { title: 'Certification Prep', icon: 'ri-award-line', topics: ['Exam Blueprint Review', 'Practice Tests & Drills', 'Common Pitfall Analysis', 'Exam-Day Strategy Session'] },
      { title: 'Capstone Project', icon: 'ri-trophy-line', topics: ['Design a cloud architecture from scratch', 'Implement security and compliance controls', 'Present architecture review to panel', 'Portfolio-ready project documentation'] },
    ],
    'Cybersecurity': [
      { title: 'Security Foundations', icon: 'ri-shield-check-line', topics: ['Information Security Principles', 'Threat Landscape Overview', 'Risk Management Frameworks', 'Security Governance & Compliance'] },
      { title: 'Network Security', icon: 'ri-wifi-line', topics: ['Firewall Configurations', 'IDS/IPS Systems', 'VPN & Secure Communications', 'Network Segmentation'] },
      { title: 'Threat & Vulnerability Management', icon: 'ri-bug-line', topics: ['Vulnerability Assessment Tools', 'Penetration Testing Methodology', 'Threat Intelligence & Hunting', 'Incident Response Planning'] },
      { title: 'Identity & Access', icon: 'ri-key-2-line', topics: ['Authentication & Authorization', 'Privileged Access Management', 'SSO & Federation', 'Zero Trust Architecture'] },
      { title: 'Cloud & Application Security', icon: 'ri-cloud-line', topics: ['Cloud Security Posture Management', 'Container Security', 'API Security', 'DevSecOps Integration'] },
      { title: 'Exam Prep & Capstone', icon: 'ri-trophy-line', topics: ['Certification Exam Review', 'Security Operations Simulation', 'Real-World Case Study Analysis', 'Final Assessment & Portfolio'] },
    ],
    'AI & Machine Learning': [
      { title: 'Python for Data Science', icon: 'ri-code-s-slash-line', topics: ['Python Refresher', 'NumPy & Pandas Deep Dive', 'Data Visualization (Matplotlib, Seaborn)', 'Jupyter Notebooks & Workflow'] },
      { title: 'Machine Learning Foundations', icon: 'ri-brain-line', topics: ['Supervised vs Unsupervised Learning', 'Regression & Classification', 'Model Evaluation Metrics', 'Feature Engineering'] },
      { title: 'Advanced ML Techniques', icon: 'ri-line-chart-line', topics: ['Ensemble Methods', 'Dimensionality Reduction', 'Clustering Algorithms', 'Hyperparameter Tuning'] },
      { title: 'Deep Learning', icon: 'ri-cpu-line', topics: ['Neural Networks Architecture', 'CNNs for Computer Vision', 'RNNs & Transformers for NLP', 'Transfer Learning'] },
      { title: 'GenAI & LLMs', icon: 'ri-robot-2-line', topics: ['Transformer Architecture', 'Prompt Engineering', 'RAG (Retrieval Augmented Generation)', 'Fine-tuning Techniques'] },
      { title: 'MLOps & Capstone', icon: 'ri-trophy-line', topics: ['Model Deployment Strategies', 'ML Pipelines & Orchestration', 'Model Monitoring & Governance', 'End-to-End ML Project'] },
    ],
    'Software Development': [
      { title: 'Programming Foundations', icon: 'ri-code-s-slash-line', topics: ['Language Syntax & Structure', 'Data Types & Variables', 'Control Flow & Logic', 'Functions & Scope'] },
      { title: 'Object-Oriented Programming', icon: 'ri-shapes-line', topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'Encapsulation & Abstraction', 'Design Patterns'] },
      { title: 'Web Development', icon: 'ri-global-line', topics: ['HTML5 & CSS3', 'JavaScript & TypeScript', 'Responsive Design', 'Frontend Frameworks'] },
      { title: 'Backend Development', icon: 'ri-server-line', topics: ['RESTful API Design', 'Database Integration', 'Authentication & Authorization', 'Server Deployment'] },
      { title: 'Testing & Quality', icon: 'ri-bug-line', topics: ['Unit Testing', 'Integration Testing', 'Test-Driven Development', 'CI/CD Pipelines'] },
      { title: 'Capstone Project', icon: 'ri-trophy-line', topics: ['Full-Stack Application Build', 'Code Review & Refactoring', 'Deployment to Production', 'Portfolio Presentation'] },
    ],
    'DevOps & Automation': [
      { title: 'DevOps Culture & Practices', icon: 'ri-git-branch-line', topics: ['DevOps Principles & CALMS', 'Continuous Integration/Delivery', 'Infrastructure as Code (IaC)', 'Configuration Management'] },
      { title: 'Containerization', icon: 'ri-box-3-line', topics: ['Docker Fundamentals', 'Image Building & Optimization', 'Docker Compose', 'Container Registry Management'] },
      { title: 'Orchestration', icon: 'ri-dashboard-line', topics: ['Kubernetes Architecture', 'Pods, Services, Deployments', 'ConfigMaps & Secrets', 'Helm Charts'] },
      { title: 'CI/CD Pipelines', icon: 'ri-refresh-line', topics: ['Jenkins/GitHub Actions', 'Automated Testing in Pipeline', 'Artifact Management', 'Blue-Green & Canary Deployments'] },
      { title: 'Monitoring & Observability', icon: 'ri-eye-line', topics: ['Logging with ELK/EFK Stack', 'Metrics with Prometheus & Grafana', 'Distributed Tracing', 'Alerting & Incident Management'] },
      { title: 'Capstone Project', icon: 'ri-trophy-line', topics: ['Design CI/CD Pipeline', 'Deploy Microservices to K8s', 'Set Up Full Observability', 'Disaster Recovery Drill'] },
    ],
    'Data Engineering': [
      { title: 'Data Engineering Landscape', icon: 'ri-database-2-line', topics: ['Data Engineering vs Data Science', 'Data Pipeline Architecture', 'Batch vs Stream Processing', 'Data Warehouse vs Data Lake'] },
      { title: 'SQL & Data Modeling', icon: 'ri-table-line', topics: ['Advanced SQL Techniques', 'Dimensional Modeling', 'Slowly Changing Dimensions', 'Query Optimization'] },
      { title: 'ETL/ELT Pipelines', icon: 'ri-arrow-left-right-line', topics: ['Extract-Load-Transform Patterns', 'Apache Airflow Orchestration', 'dbt for Transformations', 'Data Quality & Validation'] },
      { title: 'Big Data Processing', icon: 'ri-hard-drive-2-line', topics: ['Apache Spark Fundamentals', 'PySpark DataFrames', 'Streaming with Spark Structured Streaming', 'Performance Tuning'] },
      { title: 'Cloud Data Platforms', icon: 'ri-cloud-line', topics: ['AWS/Azure/GCP Data Services', 'Snowflake Architecture', 'Databricks Platform', 'Data Governance'] },
      { title: 'Capstone Project', icon: 'ri-trophy-line', topics: ['Design End-to-End Data Pipeline', 'Implement ETL with Airflow', 'Build Analytics Dashboard', 'Final Architecture Presentation'] },
    ],
    'Data Analytics & Science': [
      { title: 'Analytics Foundations', icon: 'ri-bar-chart-grouped-line', topics: ['Data Analysis Workflow', 'Statistical Thinking', 'Exploratory Data Analysis', 'Data Cleaning & Preparation'] },
      { title: 'Programming for Analytics', icon: 'ri-code-s-slash-line', topics: ['Python/R for Data Analysis', 'Data Manipulation Libraries', 'Statistical Computing', 'Automation Scripts'] },
      { title: 'Data Visualization', icon: 'ri-pie-chart-line', topics: ['Visual Design Principles', 'Chart Selection & Best Practices', 'Interactive Dashboards', 'Data Storytelling'] },
      { title: 'BI Tools Mastery', icon: 'ri-dashboard-line', topics: ['Power BI Fundamentals', 'Tableau Desktop', 'DAX & Calculations', 'Report Publishing & Sharing'] },
      { title: 'Advanced Analytics', icon: 'ri-line-chart-line', topics: ['Predictive Analytics', 'Time Series Analysis', 'A/B Testing', 'Business Metrics & KPIs'] },
      { title: 'Capstone Project', icon: 'ri-trophy-line', topics: ['End-to-End Business Analysis', 'Dashboard Creation', 'Executive Presentation', 'Portfolio Case Study'] },
    ],
    'BI & Visualization': [
      { title: 'BI Fundamentals', icon: 'ri-pie-chart-line', topics: ['Business Intelligence Concepts', 'Data Warehousing Basics', 'ETL for BI', 'KPI Design'] },
      { title: 'Power BI Deep Dive', icon: 'ri-dashboard-line', topics: ['Power Query & Data Modeling', 'DAX Functions', 'Report Design & Formatting', 'Power BI Service & Sharing'] },
      { title: 'Tableau Expertise', icon: 'ri-bar-chart-grouped-line', topics: ['Tableau Desktop Interface', 'Calculations & Parameters', 'Advanced Chart Types', 'Dashboard Actions & Interactivity'] },
      { title: 'Data Storytelling', icon: 'ri-chat-3-line', topics: ['Narrative Design', 'Audience-Centric Reporting', 'Executive Dashboard Design', 'Presentation Techniques'] },
      { title: 'Advanced BI', icon: 'ri-line-chart-line', topics: ['SQL for BI Analysts', 'Row-Level Security', 'Performance Optimization', 'Embedded Analytics'] },
      { title: 'Capstone Project', icon: 'ri-trophy-line', topics: ['Full BI Solution Design', 'Multi-Page Dashboard', 'KPI Framework Definition', 'Stakeholder Presentation'] },
    ],
  };

  // Fallback generic modules
  const genericModules = [
    { title: 'Foundations', icon: 'ri-book-open-line', topics: ['Introduction to the Domain', 'Core Concepts & Terminology', 'Industry Landscape', 'Tools & Environment Setup'] },
    { title: 'Core Skills', icon: 'ri-tools-line', topics: ['Essential Techniques', 'Hands-on Practice Labs', 'Real-World Scenario Exercises', 'Best Practices & Patterns'] },
    { title: 'Advanced Topics', icon: 'ri-settings-3-line', topics: ['Advanced Techniques', 'Optimization Strategies', 'Integration Patterns', 'Scaling Solutions'] },
    { title: 'Professional Readiness', icon: 'ri-briefcase-4-line', topics: ['Interview Preparation', 'Resume & LinkedIn Workshop', 'Mock Technical Interviews', 'Salary Negotiation Tips'] },
    { title: 'Exam Preparation', icon: 'ri-award-line', topics: ['Certification Blueprint', 'Practice Exams', 'Topic Review Sessions', 'Exam Strategy & Tips'] },
    { title: 'Capstone Project', icon: 'ri-trophy-line', topics: ['Project Planning & Design', 'Implementation & Testing', 'Documentation & Presentation', 'Portfolio Showcase'] },
  ];

  const selectedModules = categoryModules[course.category] || genericModules;

  return selectedModules.map((module) => ({
    ...module,
    title: `${course.title}: ${module.title}`,
    topics: module.topics.map((topic, index) =>
      index % 2 === 0 ? `${topic} for ${course.title}` : topic
    ),
  }));
}

export function generatePrerequisites(course: Course): string {
  if (course.prerequisites && course.prerequisites.trim().length > 0) {
    return course.prerequisites;
  }

  if (course.level === 'Beginner') {
    return `No prior ${course.category} experience is required for ${course.title}. Basic computer literacy, a willingness to practice hands-on labs, and interest in IT career growth are enough to start.`;
  }

  if (course.level === 'Intermediate') {
    return `${course.title} is best suited for learners with basic IT fundamentals, comfort using computers and web tools, and some exposure to ${course.category} concepts. Prior project or workplace experience is helpful but not mandatory.`;
  }

  return `${course.title} is designed for learners who already understand core IT concepts and want advanced, job-focused depth in ${course.category}. Prior exposure to systems, applications, databases, cloud platforms, or software delivery will help you move faster.`;
}

export function generateTargetAudience(course: Course): string[] {
  if (course.targetAudience && course.targetAudience.length > 0) {
    return course.targetAudience;
  }

  return [
    `Students and fresh graduates who want to build a practical career path in ${course.category}`,
    `Working professionals planning to move into ${course.title} or related IT roles`,
    `Developers, analysts, administrators, testers, or support engineers who want structured upskilling in ${course.title}`,
    `Career switchers who need guided training, portfolio projects, interview preparation, and placement support`,
  ];
}

// ─── Job Roles Generator ─────────────────────────────────
export function generateJobRoles(course: Course): string[] {
  const categoryRoles: Record<string, string[]> = {
    'Cloud Computing': ['Cloud Architect', 'Cloud Engineer', 'Solutions Architect', 'Cloud Administrator', 'DevOps Cloud Engineer', 'Cloud Consultant'],
    'Cybersecurity': ['Security Analyst', 'Penetration Tester', 'Security Engineer', 'SOC Analyst', 'Information Security Officer', 'Compliance Analyst'],
    'Cloud Security': ['Cloud Security Engineer', 'Security Architect', 'Cloud Compliance Analyst', 'DevSecOps Engineer', 'IAM Specialist', 'Security Consultant'],
    'AI & Machine Learning': ['Machine Learning Engineer', 'AI Engineer', 'Data Scientist (ML)', 'NLP Engineer', 'Computer Vision Engineer', 'MLOps Engineer'],
    'Data Engineering': ['Data Engineer', 'ETL Developer', 'Big Data Engineer', 'Data Platform Engineer', 'Data Pipeline Developer', 'Analytics Engineer'],
    'Software Development': ['Software Developer', 'Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'Application Developer', 'Systems Developer'],
    'Data Analytics & Science': ['Data Analyst', 'Business Analyst', 'Data Scientist', 'Analytics Consultant', 'BI Developer', 'Reporting Analyst'],
    'BI & Visualization': ['BI Developer', 'Tableau Developer', 'Power BI Developer', 'Data Visualization Specialist', 'Analytics Engineer', 'Dashboard Designer'],
    'CRM / Salesforce': ['Salesforce Developer', 'Salesforce Administrator', 'Salesforce Consultant', 'CRM Analyst', 'Salesforce Architect', 'CRM Developer'],
    'ITSM / ServiceNow': ['ServiceNow Developer', 'ServiceNow Administrator', 'ITSM Consultant', 'ServiceNow Architect', 'IT Service Manager', 'Platform Engineer'],
    'DevOps & Automation': ['DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer', 'Release Manager', 'Automation Architect', 'Infrastructure Engineer'],
    'ERP & Business Apps': ['ERP Consultant', 'SAP Consultant', 'ERP Developer', 'Business Systems Analyst', 'ERP Project Manager', 'Solutions Architect'],
    'Project Management': ['Project Manager', 'Scrum Master', 'Program Manager', 'PMO Analyst', 'Agile Coach', 'Delivery Manager'],
    'Database Technologies': ['Database Administrator', 'Database Developer', 'Data Architect', 'SQL Developer', 'Database Engineer', 'Data Modeler'],
    'Emerging Technologies': ['Blockchain Developer', 'IoT Engineer', 'RPA Developer', 'Innovation Specialist', 'Emerging Tech Consultant', 'Digital Transformation Analyst'],
    'Full Stack Programs': ['Full Stack Developer', 'Web Developer', 'Software Engineer', 'Application Architect', 'Technical Lead', 'Frontend/Backend Developer'],
    'Business Analysis': ['Business Analyst', 'Functional Consultant', 'Product Owner', 'Requirements Analyst', 'Process Analyst', 'Systems Analyst'],
  };

  return categoryRoles[course.category] || ['Software Engineer', 'Technical Consultant', 'IT Specialist', 'Technology Analyst', 'Systems Analyst', 'Application Support Engineer'];
}

// ─── Hiring Companies Generator ───────────────────────────
export function generateHiringCompanies(course: Course): string[] {
  const allCompanies = [
    'Amazon', 'Accenture', 'Cognizant', 'Capgemini', 'Infosys', 'TCS', 'Deloitte',
    'Wipro', 'HCL', 'Tech Mahindra', 'LTIMindtree', 'Mphasis',
    'Publicis Sapient', 'Persistent Systems', 'LTI',
  ];
  return allCompanies;
}

// ─── Salary Data Generator ────────────────────────────────
export function generateSalaryData(course: Course): { level: string; range: string }[] {
  const entrySuffix = course.category.includes('Cloud') || course.category.includes('AI') || course.category.includes('Cyber')
    ? '$75,000 – $95,000 / year'
    : course.category.includes('SAP') || course.category.includes('ERP')
    ? '$70,000 – $90,000 / year'
    : '$65,000 – $85,000 / year';

  const midSuffix = course.category.includes('Cloud') || course.category.includes('AI') || course.category.includes('Cyber')
    ? '$95,000 – $125,000 / year'
    : course.category.includes('SAP') || course.category.includes('ERP')
    ? '$90,000 – $115,000 / year'
    : '$80,000 – $105,000 / year';

  const seniorSuffix = course.category.includes('Cloud') || course.category.includes('AI') || course.category.includes('Cyber')
    ? '$125,000 – $165,000 / year'
    : course.category.includes('SAP') || course.category.includes('ERP')
    ? '$115,000 – $150,000 / year'
    : '$100,000 – $140,000 / year';

  return [
    { level: `Entry-Level ${course.category} Professional`, range: entrySuffix },
    { level: `Mid-Level ${course.category} Specialist`, range: midSuffix },
    { level: `Senior ${course.category} Expert`, range: seniorSuffix },
  ];
}

// ─── FAQ Generator ────────────────────────────────────────
export function generateFaqs(course: Course): { q: string; a: string }[] {
  const baseFaqs = [
    {
      q: 'Do I need prior experience in this field?',
      a: course.level === 'Beginner'
        ? 'Not at all! This program is specifically designed for beginners. We start from the fundamentals and build up step-by-step, making it accessible even if you have no prior experience in this domain.'
        : course.level === 'Intermediate'
        ? `Some familiarity with ${course.category} concepts is helpful but not required. The course starts with a strong foundation module and quickly ramps up to intermediate and advanced concepts.`
        : `Advanced proficiency in related fundamentals is recommended. This course assumes you already have foundational knowledge and focuses on advanced topics and real-world implementation.`,
    },
    {
      q: 'Will I receive placement support?',
      a: 'Yes — absolutely. We provide structured job placement assistance including resume optimization, LinkedIn profile enhancement, mock interviews with industry hiring experts, and access to our job referral network. Our dedicated placement team works with you until you land a job.',
    },
    {
      q: 'Are the classes live or recorded?',
      a: 'All sessions are live, instructor-led, and interactive. You can ask questions, participate in discussions, and get real-time feedback. Every session is also recorded so you can revisit any topic anytime — you get lifetime access to all recordings.',
    },
    {
      q: 'What if I miss a class?',
      a: 'No worries! Every live session is recorded and uploaded within 24 hours. You can catch up at your own pace. Plus, you can join the next batch for any specific module you want to attend again at no extra cost.',
    },
    {
      q: 'Is there a certificate upon completion?',
      a: 'Yes. You receive an industry-recognized PROITKEYS certificate upon successfully completing the course and capstone project. This certificate is valued by our hiring partners and can be added to your LinkedIn profile.',
    },
    {
      q: `How is this ${course.category} course different from others?`,
      a: `Unlike generic online courses, our program is instructor-led with real-time interaction, includes hands-on capstone projects that simulate actual industry work, provides structured placement support, and is regularly updated with the latest industry trends and tools in the ${course.category} domain.`,
    },
  ];

  return baseFaqs;
}

// ─── Extended Description Generator ──────────────────────
export function generateExtendedDescription(course: Course): string {
  const baseIntro = `The ${course.title} course at PROITKEYS is a comprehensive, industry-aligned training program designed to equip you with job-ready skills in ${course.category}. Over ${course.duration} weeks of intensive, instructor-led live sessions, you will master the tools, techniques, and best practices that top employers look for when hiring ${course.category} professionals.`;

  const levelDetail = course.level === 'Beginner'
    ? `This program assumes no prior experience — we start from absolute fundamentals and build your expertise step-by-step through hands-on exercises, real-world projects, and guided mentorship.`
    : course.level === 'Intermediate'
    ? `Building on foundational knowledge, this program takes you deep into intermediate and advanced concepts, ensuring you can confidently handle complex real-world scenarios.`
    : `This advanced program is designed for professionals who already have foundational experience and want to master expert-level concepts, architecture decisions, and leadership skills in ${course.category}.`;

  const outcomeStatement = `By the end of this training, you will have the practical skills, portfolio projects, and interview readiness to confidently pursue roles in ${course.category}. Our structured placement support — including resume optimization, mock interviews, and job referral assistance — ensures you're not just trained, but truly job-ready.`;

  return `${baseIntro} ${levelDetail} ${outcomeStatement}`;
}

// ─── Why Choose PROITKEYS ─────────────────────────────────
export function getWhyChooseItems() {
  return [
    { icon: 'ri-award-line', title: 'Industry-Designed Curriculum', desc: 'Built with input from working professionals and updated regularly to match hiring trends' },
    { icon: 'ri-user-star-line', title: 'Trainers with Real Corporate Experience', desc: 'Learn from instructors who have hired, managed, and worked in top tech companies' },
    { icon: 'ri-tools-line', title: 'Hands-On Project Exposure', desc: 'Work on real-world applications and capstone projects, not just mock exercises' },
    { icon: 'ri-customer-service-2-line', title: 'Comprehensive Interview Preparation', desc: 'Mock technical and behavioral interviews with experienced hiring managers' },
    { icon: 'ri-briefcase-4-line', title: 'Strong Placement Support Network', desc: 'Resume, LinkedIn, and job search guidance with access to hiring partner network' },
    { icon: 'ri-heart-pulse-line', title: 'Structured Learning Path', desc: 'Clear progression from fundamentals to advanced topics with checkpoints and mentorship' },
    { icon: 'ri-group-line', title: 'Small Batch Sizes', desc: 'Maximum 15-20 learners per batch ensuring personal attention for everyone' },
    { icon: 'ri-graduation-cap-line', title: 'Lifetime Learning Access', desc: 'Access all session recordings and updated course materials forever' },
  ];
}
