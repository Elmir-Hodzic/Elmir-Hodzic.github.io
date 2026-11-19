import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  summary =
    'Lead Software Engineer with 9+ years building ML infrastructure and data platforms across automotive, cloud, and fintech. ' +
    'I design production ML pipelines (Kubeflow, Airflow), high-performance systems in Python and C++, and cloud-native platforms on AWS — ' +
    'including a Kubeflow re-architecture that cut infrastructure costs by 80% and a data-management package adopted by 100+ data scientists and ML engineers. ' +
    'Today I architect RAG systems and agentic workflows (LLM-based, including Anthropic Claude) that make internal engineering knowledge searchable and actionable, ' +
    'while mentoring engineers and owning delivery end to end.';

  highlights = [
    {
      icon: 'fas fa-code',
      title: 'Technical Focus',
      description: 'Python, C++, ML pipelines, RAG & agentic workflows, Cloud'
    },
    {
      icon: 'fas fa-industry',
      title: 'Client & Industry',
      description: 'Apple & BMW (via Luxoft), Automotive, Fintech'
    },
    {
      icon: 'fas fa-users',
      title: 'Career Path',
      description: 'Luxoft SE → Senior SE → Lead SE; mentoring & delivery'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Delivery Style',
      description: 'Ownership, automation, production readiness'
    }
  ];
}
