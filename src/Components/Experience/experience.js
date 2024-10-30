import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css';

function Experience() {
    const experience = [
        {
            companyName: "xyz",
            role: "Software Developer",
            year: "2023 - Present",
        },
        {
            companyName: "abc",
            role: "Software Developer Intern",
            year: "2022",
        },
        {
            companyName: "mno",
            role: "Software Developer Intern",
            year: "2021",
        }
    ];

    return (
        <div>
            <h1 className="heading">Experience</h1>
            <VerticalTimeline>
                {experience.map((exp, index) => (
                    <VerticalTimelineElement 
                        key={index} 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(90, 89, 89)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(90, 89, 89)' }}
                        date={exp.year}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ backgroundColor: 'rgb(90, 89, 89)' }}>{exp.companyName}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ backgroundColor: 'rgb(90, 89, 89)' }}>{exp.role}</h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Experience;