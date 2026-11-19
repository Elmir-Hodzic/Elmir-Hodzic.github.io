import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvExportService } from '../../services/cv-export.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experiences = [
    {
      title: 'Lead Software Engineer',
      company: 'Luxoft',
      location: 'Munich · Remote · Client: Apple',
      period: 'August 2026 - Present',
      achievements: [
        'Define technical roadmaps and architecture independently, driving design decisions and end-to-end ownership of complex software initiatives',
        'Architected and built a Retrieval-Augmented Generation (RAG) system that connects LLMs with internal engineering knowledge, making it searchable and actionable',
        'Lead the integration of AI-powered agentic workflows across engineering platforms — from identifying use cases to the architecture, orchestration flows, and hosting infrastructure for RAG and agentic applications across heterogeneous environments',
        'Guide junior engineers through architectural mentoring and knowledge transfer, while maintaining existing platforms and acting as technical point of contact for cross-team collaboration, presentations, and adoption of reusable AI capabilities and engineering best practices'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Luxoft',
      location: 'Munich · Client: Apple',
      period: 'July 2022 - July 2026',
      achievements: [
        'Promoted from Software Engineer to Senior Software Engineer while embedded on a long-term Apple engagement',
        'Re-architected the team\'s Kubeflow compute platform onto Karpenter-based autoscaling, cutting infrastructure costs to ~1/5 (80%) at equivalent usage',
        'Designed, built, and own the roadmap for a new Python data-management package that ingests multi-terabyte datasets and exposes granular access to files inside compressed archives — adopted by 100+ data scientists and ML engineers, with end-to-end user documentation',
        'Maintain the platform in a two-person team, troubleshooting production issues directly for data scientist and ML engineer users, and partnering with project managers and QA to unblock technical issues'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Luxoft',
      location: 'Munich · Client: Apple',
      period: 'May 2021 - June 2022',
      achievements: [
        'Designed and built a CLI/SDK that connects an internal Kubeflow cluster, S3 datasets, and the Kubeflow pipeline compiler so Apple camera-hardware teams (~100 users) can author and run scalable test pipelines',
        'Owned architecture and interfaces end-to-end: reusable Kubeflow components, compiler/configuration work, integrations with internal Apple cloud for macOS/iOS execution, and interfaces to run Zemax optical simulations',
        'Enabled high-load hardware validation (tens–100 pipelines/day, scaling to hundreds/thousands of parallel nodes); shipped the CLI on a bi-weekly release cadence and supported users troubleshooting and rebuilding pipelines'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Luxoft',
      location: 'Munich · Client: BMW Group',
      period: 'February 2020 - April 2021',
      achievements: [
        'Contributed to BMW Natural Interaction (multimodal HMI) on the vehicle MGU/head unit using C++ and Python',
        'Built the in-car path to collect sensor data, send feature vectors to a backend model, and integrate real-time model responses into the head-unit flow',
        'Created Airflow-based test scenarios from real-car HDF5 data: scraped recordings, built C++ in containers (CMake), and exposed a Python bridge/entrypoint to trigger in-car software offline with replayed sensor data'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'artech Informationssysteme GmbH',
      location: 'Munich · Client: Fiducia & GAD IT AG',
      period: 'February 2019 - February 2020',
      achievements: [
        'Built Angular libraries integrated with Java microservices for SEPA direct-debit collection and return-debit flows at Fiducia & GAD IT AG',
        'Delivered Jenkins CI/CD to promote microservices and Angular libraries safely into production banking environments'
      ]
    },
    {
      title: 'Software Engineer and Data Scientist',
      company: 'artech Informationssysteme GmbH',
      location: 'Sarajevo',
      period: 'November 2017 - February 2019',
      achievements: [
        'Delivered the Rote Liste web platform and React Native apps (iOS/Android) for Germany\'s leading drug directory',
        'Built a production recommender (collaborative filtering & clustering) with Python, Apache Spark, Elasticsearch, Docker, and JHipster',
        'Owned design-to-delivery for key product features; interviewed C++ candidates and presented AI capabilities to stakeholders'
      ]
    },
    {
      title: 'University Teaching Assistant (part-time)',
      company: 'Faculty of Electrical Engineering',
      location: 'Sarajevo',
      period: 'October 2014 - January 2019',
      achievements: [
        'Teaching assistant for Algorithms & Data Structures, C, OOP in C++, and Java software development',
        'Mentored students through coursework and exams while supporting lecture delivery'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Info Studio doo',
      location: 'Sarajevo',
      period: 'November 2014 - June 2016',
      hideOnPrint: true,
      achievements: [
        'Developed reporting solutions with SSRS / Oracle BI for business stakeholders',
        'Contributed to the lottery accounting system for Lottery of Bosnia and Herzegovina (SQL, reporting workflows)'
      ]
    }
  ];

  visibleExperiences = 3;
  showAllExperiences = false;
  private subscription?: Subscription;

  constructor(private cvExport: CvExportService) {}

  ngOnInit(): void {
    this.subscription = this.cvExport.exporting$.subscribe((exporting) => {
      this.visibleExperiences = exporting || this.showAllExperiences
        ? this.experiences.length
        : 3;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleShowAll(): void {
    this.showAllExperiences = !this.showAllExperiences;
    this.visibleExperiences = this.showAllExperiences ? this.experiences.length : 3;
  }
}
