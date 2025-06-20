import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ExpList = ({ dimmed }) => {
  const textColor = '#fff'; // Softer than white for readability
  const linkColor = '#aed1e8'; // MUI primary light blue

  const experiences = [
    {
      company: "Ascendion (Previously Collabera Digital)",
      link: "https://ascendion.com/what-we-do/",
      role: "Fullstack Engineer",
      dates: "Aug 19, 2024 - Present"
    },
    {
      company: "DYNAMIC STRATEGY SOLUTIONS EXPERTS CORPORATION",
      link: "https://dsseservices.com/about",
      role: "Intermediate PHP Developer",
      dates: "Nov 28, 2022 - May 31, 2024"
    },
    {
      company: "YEMPO",
      link: "https://www.yempo-solutions.com/",
      role: "PHP Developer",
      dates: "Oct 04, 2022 - Nov 18, 2022"
    },
    {
      company: "DOST-PCIEERD",
      link: "https://pcieerd.dost.gov.ph/",
      role: "Information System Analyst II",
      dates: "Jan 4, 2022 – Sep 30, 2022"
    },
    {
      company: "DBP Service Corporation (Client assignment: DOST-PCIEERD)",
      link: "https://pcieerd.dost.gov.ph/",
      role: "Project Technical Specialist I",
      dates: "Oct 5, 2021 – Dec 31, 2021"
    },
    {
      company: "Optimo International",
      link: "https://dev.optimointernational.com/who-we-are/",
      role: "PHP Developer",
      dates: "Nov 3, 2020 – Oct 1, 2021"
    },
    {
      company: "7rivers Frontend Developer (Project Based)",
      link: "https://7rivers.ph/",
      role: "",
      dates: "July 8, 2020 – Aug 31, 2020"
    },
    {
      company: "Healthcare representative BPO (TaskUs)",
      role: "",
      dates: "June 19, 2019 – Dec 31, 2019"
    },
    {
      company: "PNP CAMP BAGONG DIWA (WAIS) Prototype Developer Outsourced",
      role: "PHP Developer",
      dates: "Oct 12, 2018 – Dec 15, 2018"
    },
    {
      company: "DOST (DEPARTMENT OF SCIENCE AND TECHNOLOGY) - PCIEERD INTERN",
      role: "Laravel Developer",
      dates: "June 30, 2017 – Aug 31, 2017"
    },
    {
      company: "Freelance Web Developer since 2017"
    }
  ];

  return (
    <Box
      sx={{
        color: textColor,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3,
        p: 1,
      }}
    >
      {experiences.map((exp, i) => (
        <Box key={i}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: linkColor,
                  textShadow: !dimmed ? '1px 1px 1px #333' : 'none'
                }}
              >
                {exp.company}
              </a>
            ) : (
              exp.company
            )}
          </Typography>
          {exp.role && (
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              {exp.role}
            </Typography>
          )}
          {exp.dates && (
            <Typography
              variant="caption"
              sx={{ color: '#eee', fontStyle: 'italic' }}
            >
              {exp.dates}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ExpList;
