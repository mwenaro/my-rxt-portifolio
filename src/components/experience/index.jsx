
import "./experience.css";

export default function Experience() {

	const job_experience = data.map(({ title, start, end, company, skills }, index) => (
		<div key={index} className="job-container">
			<h3>{title}, {company}, {`${start} - ${end}`} </h3>
			<p> {skills.map(el =>
				<span key={el} className="skill-badge">
					{` ${el}`}
				</span>
			)}</p>
		</div>
	));


	return (
		<div className="container">
			<section>
				<h5>My Experince</h5>
				<h2>My Experince</h2>
				<div className="experiences-container">
					{job_experience}
				</div>
			</section>

		</div>
	)
}



var data = [
	{
		title: "Full Stack Engineer",
		company: "Ipca Laboratories Limited ",
		start: "Aug 2021",
		end: "Jul 2022",
		skills: ["HTML", "CSS", "JavaSript", "React", "Typescript", "Redux", "PHP", "MySQL", "Node", "MongoDb"]
	},
	{
		title: "Full Stack Developer",
		company: "Miyani Digital Solutions",
		start: "Apr 2020",
		end: "Jul 2021",
		skills: ["HTML", "CSS", "JavaSript", "React", "Typescript", "Redux", "PHP", "MySQL", "Node", "MongoDb"]
	},
	{
		title: "Junior Software Engineer",
		company: "Kwale International Sugar Company Ltd",
		start: "Aug 2019",
		end: "Feb 2020",
		skills: ["HTML", "CSS", "JavaSript", "jQuery", "PHP", "MySQL", "AngularJs 1.x", "React"]
	}
]
