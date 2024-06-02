import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css';

function Education() {
    const education = [
        {
            instituteName: "Scaler School of Technology",
            course: "BSc + MSc in Computer Science",
            score: "CGPA: 9.0",
            year: "2023 - Present",
        },
        {
            instituteName: "St. John's School",
            course: "Senior Secondary",
            score: "Percentage: 80%",
            year: "2022",        
        },
        {
            instituteName: "St. John's School",
            course: "Secondary",
            score: "Percentage: 90%",
            year: "2020",        
        }
    ];
    return (
        <div>
            <h1 className="heading">Education</h1>
            <VerticalTimeline>
                {education.map((edu, index) => (
                    <VerticalTimelineElement 
                        key={index} 
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(90, 89, 89)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(90, 89, 89)' }}
                        date={edu.year}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title" style={{ backgroundColor: 'rgb(90, 89, 89)' }}>{edu.instituteName}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{ backgroundColor: 'rgb(90, 89, 89)' }}>{edu.course}</h4>
                        <p style={{ backgroundColor: 'rgb(90, 89, 89)' }}>{edu.score}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Education;
