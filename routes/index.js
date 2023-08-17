var express = require('express');
var router = express.Router();

const itemList = [{ 'id':1, 'term': 'DevOps', 'description': 'DevOps is  concept that emphasises interaction, coordination, and integration between IT operations and software development. Aiming to increase collaboration and automate as much as possible, DevOps is also a practise that aims to release software more quickly and effectively.', 
'reference': '“DevOps Glossary of Terms,” www.globalknowledge.com. https://www.globalknowledge.com/ca-en/topics/devops/glossary-of-terms/ (accessed Jul. 20, 2023).'},
{ 'id':2, 'term': 'SDLC', 'description': 'SDLC stands for Software Development Life Cycle. SDLC is a process that consists of a series of planned activities to develop or alter the Software Products.', 
'reference': '“SDLC Tutorial - Tutorialspoint,” Tutorialspoint.com, 2019. https://www.tutorialspoint.com/sdlc/index.htm (accessed Jul. 20, 2023).'},
{ 'id':3, 'term': 'Waterfall model', 'description': 'The requirements for the software are obtained at the start of a project and then implemented in a linear manner using the waterfall technique, with the start of the subsequent phase occuring only when the previous one is finished.', 
'reference': 'Tutorialspoint, “SDLC Waterfall Model,” www.tutorialspoint.com, 2019. https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm (accessed Jul. 20, 2023).'},
{ 'id':4, 'term': 'shift-left', 'description': 'Testing at an earlier stage of the software delivery process is known as shift-left. Instead of postponing difficult problems to an unknowable future date, testers can increase quality by discovering errors before they accumulate or become significant,', 
'reference': '“DevOps DevOps Terminology: A Glossary,” Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary (accessed Jul. 18, 2023).'},
{ 'id':5, 'term': 'Agile Methodology', 'description': 'A philosophy or process for developing software that puts an emphasis on user feedback, software quality, and the capacity to react fast to changes and demands for new products.', 
'reference': 'Dz. Inc, “48 DevOps Terms You Should Know (A DevOps Glossary),” Medium, Jul. 24, 2017. https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752 (accessed Jul. 22, 2023).'},
{ 'id':6, 'term': 'Continuous Delivery (CD)', 'description': 'Continuous delivery is a collection of procedures and practises that automates the SDLC from build to testing, providing a quick feedback loop between a company and its customers. It is an evolutionary offshoot of continuous integration. The current CI/CD delivery pipeline is formed by continuous integration and continuous delivery.', 
'reference': '“DevOps DevOps Terminology: A Glossary,” Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary (accessed Jul. 18, 2023).'},
{ 'id':7, 'term': 'Continuous Integration (CI)', 'description': 'Software engineers are needed to integrate code into a shared repository numerous times per day as part of the continuous integration process in order to receive quick feedback. It makes up the contemporary CI/CD delivery pipeline along with continuous delivery.', 
'reference': '“DevOps DevOps Terminology: A Glossary,” Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary (accessed Jul. 18, 2023).'},
{ 'id':8, 'term': 'Deployment', 'description': 'All the procedures necessary to set up and run new software correctly in its environment are collectively referred to as deployment. This usually covers tasks like installation, configuration, running, and testing.', 
'reference': '“DevOps DevOps Terminology: A Glossary,” Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary (accessed Jul. 18, 2023).'},
{ 'id':9, 'term': 'Microservices Architecture', 'description': 'Microservices Architecture is a fresh approach to software design that divides large systems into loosely connected services that may be independently created, deployed, and maintained. A discrete procedure, each microservice offers a distinct business capacity.', 
'reference': '“DevOps DevOps Terminology: A Glossary,” Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary (accessed Jul. 18, 2023).'},
{ 'id':10, 'term': 'Monolithic Architecture', 'description': 'Monolithic Architecture means a single-tiered, strongly connected architecture typical of traditional software designs. This means that for code to be performed or compiled, each component and all of its related components need to be present.', 
'reference': '“DevOps DevOps Terminology: A Glossary,” Plutora. https://www.plutora.com/devops-at-scale/terminology-glossary (accessed Jul. 18, 2023).'},
{ 'id':11, 'term': 'Continuous Deployement', 'description': 'It is a form of continuous delivery, but while in continuous delivery the release is a human decision, in continuous deployement it is automated fully. That means, every version is instantly deployed.', 
'reference': '“DASA DEVOPS Glossary Version 1.0.0,” 2016. [Online]. Available: https://www.educore.com.tr/wp-content/uploads/2016/08/DASA-DevOps-Fundamentals-Glossary.pdf (accessed Aug. 05, 2023).'},
{ 'id':12, 'term': 'Version Control', 'description': 'To track changes to codes and different files we use version control', 
'reference': '“DevOps glossary,” octopus.com, Jul. 20, 2022. https://octopus.com/devops/glossary/ (accessed Aug. 04, 2023).'},
{ 'id':13, 'term': 'Git', 'description': 'It is a distributed code version control system.', 
'reference': '“2 Creating your first microservice - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book],” www.oreilly.com. https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/02.htm#heading_id_4 (accessed Aug. 05, 2023).'},
{ 'id':14, 'term': 'Node.js', 'description': 'It is a platform for building fast and scalable applications using JavaScript. Node.js is the runtime and npm is the package manager for Node.js modules.', 
'reference': '“Build Node.js Apps with Visual Studio Code,” code.visualstudio.com. https://code.visualstudio.com/docs/nodejs/nodejs-tutorial (accessed Jul. 18, 2023).'},
{ 'id':15, 'term': 'Visual Studio (VS) Code', 'description': 'VS Code is used for code editing and updating other assets realted to a piece of code.', 
'reference': '“2 Creating your first microservice - Bootstrapping Microservices with Docker, Kubernetes, and Terraform [Book],” www.oreilly.com. https://learning.oreilly.com/library/view/bootstrapping-microservices-with/9781617297212/OEBPS/Text/02.htm#heading_id_4 (accessed Aug. 05, 2023).'},
{ 'id':16, 'term': 'Bootstrap', 'description': 'Bootstrap is a front-end framework using HTML, CSS, and jQuery—is designed to help developers quickly and easily build responsive, mobile-ready websites that are cross-browser compatible.', 
'reference': '“Introduction - Bootstrap Video Tutorial | LinkedIn Learning, formerly Lynda.com,” LinkedIn. https://www.linkedin.com/learning/bootstrap-4-essential-training/introduction?resume=false&u=2104084 (accessed Aug. 05, 2023).‌'},
{ 'id':17, 'term': 'Commit', 'description': 'Commited code is pushed to the repository and changes are logged. So commit is a push for the application code after all changes are made.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 05, 2023).'},
{ 'id':18, 'term': 'Continuous Testing', 'description': 'The objective of continuous testing is to introduce shift-left testing. It is an evolution of automated testing used with DevOps to make testing early in the pipeline ', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 05, 2023).'},
{ 'id':19, 'term': 'MTTR (Mean Time to recovery)', 'description': 'It is one of the Devops metrics, which calculates the average time needed for a device or service to recover from failure.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 05, 2023).'},
{ 'id':20, 'term': 'Production', 'description': 'It is the live environment where an application or feature is available and accessible to end users.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 05, 2023).'},
{ 'id':21, 'term': 'Infrastructure as Code (IaC)', 'description': 'IaC is a practice of managing and provisioning infrastructure using code and automation tools, enabling consistent and repeatable deployments.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':22, 'term': 'Containerization', 'description': 'Containerization is a technology that packages an application and its dependencies together in a lightweight container, ensuring consistency across different environments.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':23, 'term': 'Orchestration', 'description': 'Orchestration involves automating and coordinating various tasks, processes, and services to work together in a streamlined and efficient manner.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':24, 'term': 'DevSecOps', 'description': 'DevSecOps integrates security practices into the DevOps workflow, ensuring security measures are implemented throughout the software development lifecycle.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':25, 'term': 'Scalability', 'description': 'Scalability refers to the ability of a system to handle increasing amounts of work, traffic, or users by adding resources without compromising performance. It is a key consideration in DevOps to ensure applications can accommodate growth.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':26, 'term': 'Kubernetes', 'description': 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It provides tools for managing containerized workloads and services at scale.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':27, 'term': 'Monitoring and Observability', 'description': 'Monitoring involves tracking system performance and health, while observability focuses on gaining insights into system behavior and troubleshooting. Both are essential for maintaining the reliability and availability of applications in a DevOps environment.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':28, 'term': 'SLA (Service Level Agreement)', 'description': 'An SLA is a formal agreement that outlines the expected level of service and performance between a service provider and its customers. It often includes metrics like uptime, response time, and resolution time, helping to set expectations and ensure accountability.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':29, 'term': 'Blue-Green Deployment', 'description': 'Blue-Green deployment is a release strategy where two identical environments (blue and green) are maintained. One environment hosts the current production version, while the other is used for testing and deployment of new releases.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'},
{ 'id':30, 'term': 'Pipeline as Code', 'description': 'Pipeline as Code refers to defining the entire continuous integration and continuous delivery (CI/CD) pipeline in code, typically using domain-specific languages or configuration files. This approach ensures consistency, versioning, and easy replication of the pipeline across different environments.', 
'reference': '“DevOps Glossary of Terms and Definitions: From A to Z,” MSys Technologies. https://www.msystechnologies.com/resource/glossary/devops-glossary/ (accessed Aug. 17, 2023).'}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'SIT722: My DevOps Glossary', 
  subtitle: 'Welcome to my website showing a collection of DevOps terms and their brief descriptions, along with the references to sources that I used to gather the information about the terms listed.', 
  items: itemList });
});

module.exports = router;
