db.createCollection('employee')
db.employee.insertMany([
    {
        "id": 1,
        "name": "John Doe",
        "position": "Software Engineer",
        "department": "Engineering",
        "salary": 85000,
        "skills": ["JavaScript", "Python", "Docker"],
        "projects": ["ProjectA", "ProjectB"]
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "position": "Product Manager",
        "department": "Product",
        "salary": 95000,
        "skills": ["Product Strategy", "Agile", "Team Leadership"],
        "projects": ["ProjectC"]
    },
    {
        "id": 3,
        "name": "Mike Johnson",
        "position": "DevOps Engineer",
        "department": "Operations",
        "salary": 90000,
        "skills": ["AWS", "Docker", "Kubernetes"],
        "projects": ["ProjectD", "ProjectE"]
    },
    
    {
        "id": 4,
        "name": "Alice Brown",
        "position": "Data Scientist",
        "department": "Engineering",
        "salary": 92000,
        "skills": ["Python", "Machine Learning", "Data Visualization"],
        "projects": ["ProjectF", "ProjectG"]
    },
    {
        "id": 5,
        "name": "Robert Wilson",
        "position": "UX Designer",
        "department": "Design",
        "salary": 75000,
        "skills": ["UI/UX Design", "Figma", "User Research"],
        "projects": ["ProjectH"]
    },
    {
        "id": 6,
        "name": "Emily Davis",
        "position": "Marketing Specialist",
        "department": "Marketing",
        "salary": 68000,
        "skills": ["SEO", "Content Marketing", "Google Analytics"],
        "projects": ["ProjectI", "ProjectJ"]
    },
    {
        "id": 7,
        "name": "William Garcia",
        "position": "IT Support Specialist",
        "department": "IT",
        "salary": 62000,
        "skills": ["Networking", "Troubleshooting", "Windows Server"],
        "projects": ["ProjectK"]
    },
    {
        "id": 8,
        "name": "Sophia Martinez",
        "position": "HR Manager",
        "department": "Human Resources",
        "salary": 88000,
        "skills": ["Recruitment", "Employee Relations", "Compliance"],
        "projects": ["ProjectL"]
    },
    {
        "id": 9,
        "name": "James White",
        "position": "Front-End Developer",
        "department": "Engineering",
        "salary": 80000,
        "skills": ["HTML", "CSS", "React"],
        "projects": ["ProjectM", "ProjectN"]
    },
    {
        "id": 10,
        "name": "Olivia Thompson",
        "position": "Business Analyst",
        "department": "Product",
        "salary": 89000,
        "skills": ["Data Analysis", "Stakeholder Management", "JIRA"],
        "projects": ["ProjectO", "ProjectP"]
    },]
);