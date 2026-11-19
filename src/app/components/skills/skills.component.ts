import { Component } from '@angular/core';

interface CompetencyGroup {
  label: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  readonly competencyGroups: CompetencyGroup[] = [
    {
      label: 'AI & Agentic Systems',
      skills: [
        'Agentic AI Development',
        'Multi-agent Systems',
        'LangGraph',
        'Agent Harness Design',
        'Model Context Protocol (MCP)',
        'RAG Systems',
        'Anthropic Claude',
      ]
    },
    {
      label: 'ML & Data Platforms',
      skills: [
        'Kubeflow',
        'Airflow',
        'ML Pipelines',
        'TensorFlow',
        'Pandas / NumPy',
        'HDF5',
        'Apache Spark',
        'Elasticsearch',
        'Recommender Systems',
      ]
    },
    {
      label: 'Cloud & Infrastructure',
      skills: [
        'AWS (S3, ECR, Boto)',
        'Docker',
        'Karpenter',
        'Software Infrastructure',
        'CI/CD (Jenkins)',
        'Linux',
        'Bash',
      ]
    },
    {
      label: 'Languages',
      skills: [
        'Python',
        'C / C++',
        'TypeScript / JavaScript',
        'SQL',
        'Java / C#',
      ]
    },
    {
      label: 'Engineering & Backend',
      skills: [
        'FastAPI / Django',
        'Angular / React',
        'Microservices',
        'Python Packaging (uv, PyPI)',
        'CMake',
        'Git',
        'OOP & Design Patterns',
      ]
    },
    {
      label: 'Leadership',
      skills: [
        'Technical Leadership',
        'Architecture & Roadmaps',
        'Mentoring & Knowledge Transfer',
        'Cross-team Collaboration & Presentations',
      ]
    }
  ];
}
