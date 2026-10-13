<!--
  Source of truth for the website's content. src/content.ts must reflect
  this file; src/cv.test.ts checks the facts that can be checked
  automatically (titles, dates, certifications, languages, degrees).
  When the CV changes: update this file first, then src/content.ts.
  Transcribed from cv_steinnhm.pdf (October 2026).
-->

# Steinn Hauser Magnússon

Berlin, DE · +49 179 6047 257 · hausersteinn@gmail.com ·
[LinkedIn](https://linkedin.com/in/steinnhauser/)

## Professional experience

### Cloud Operator, SENEC GmbH

February 2026 - Present

- Management of multiple large-scale Kubernetes clusters using Terragrunt,
  GitLab CI/CD, Helm templating with 10+ custom charts, and ArgoCD,
  integrated with monitoring systems such as Grafana, Prometheus, and
  Alertmanager.
- Operation of 50+ Ansible-managed servers, including in-depth development
  of a secure pipeline for automated maintenance updates on
  WireGuard-connected hosts, with a strong focus on strict access policies
  and secure networking.
- Oversight and development of an automated server update and maintenance
  system featuring custom aptly-based repository mirrors, an API gateway for
  scheduling host update maintenance slots, dashboards for host package
  lists and update overviews, and a lightweight golang-based client for
  automated and mTLS-secured maintenance checks.

### Software Developer, SENEC GmbH

March 2023 - January 2026

- Oversaw development, maintenance, and migration of multiple Azure Function
  App microservices integrating enterprise solutions (CRM, Business Central)
  with internal and external services.
- Focused on architectural design and implementation using Terraform and
  Terragrunt, delivering modularized releases and modern CI/CD pipelines.
- Contributed significantly to developing a containerized deployment
  framework for microservices, enforcing strict governance-compliant
  policies across Azure Key Vault, Storage Account, MongoDB/PostgreSQL,
  Virtual Network, API Management Service, and Service Bus resources.
- Demonstrated leadership and communication through team management,
  stakeholder coordination, and development of frameworks for onboarding and
  training new team members.

### Senior Data Scientist, Future Ready AS

January 2022 - February 2023

- Develop and maintain an application for LLM chatbot technology, providing
  an online learning platform to simulate call-center conversations to users
  using Django, Flask API, and Azure-based architecture.
- Manage frontend, and UX developer teams to design and build an
  interactive learning platform online.
- Leadership and communication experience through management meetings with
  external shareholders and investors, alongside training and management of
  new team members.

### Data Scientist, Future Ready AS

November 2020 - December 2021

- Provide sales analytics of telecommunications data to identify strengths
  in sales representatives. Developed natural language processing model
  capable of transcribing calls and capturing key sales techniques which
  lead to product sales.
- Extensive use of python libraries such as rasa, numpy, pandas, django, and
  pyspark.

### Cluster Project Manager, University of Oslo Physics Department

February 2020 - July 2020

- Built a rack of computational nodes using hardware donated from the Abel
  supercomputer.
- Set up cluster software and node connectivity using the ROCKS
  High-Performance Computing ISO.

## Certifications

- **ITIL 4 Foundation**, IT Service Management certification provided by
  PeopleCert
- **Azure Administrator Associate**, Microsoft Certification AZ104

## Education

### MSc. in Computational Science: Physics, University of Oslo, Norway

August 2019 - June 2021

Thesis: 'Evaluating Approximate Methods for Computing Extracellular
Potentials from Neuronal Networks'. Advisor(s): Gaute Einevoll & Espen
Hagen. Grade: A. Publication: Hagen E, Magnusson SH, et al. (2022) [1]

- The kernel and hybrid Local Field Potential (LFP) approximation methods
  from Hagen E et al. (2016) [2] were applied in various network
  conditions, and a thorough evaluation of the methods was conducted.
- Neuronal networks were simulated using python and the LFPy library, where
  computational optimizations of the local field potential (LFP) signals
  were of particular interest.

### Theoretical Physics, McGill University, Montréal Canada

Spring Semester 2019

### BSc. In Physics and Astronomy, University of Oslo, Norway

August 2016 - June 2019

Key projects:

- **4D Space Numerical Workshop, Kobe University:** Conducted numerical
  simulations of the effects of the ionosphere on the NORSAT-1 satellite
  using the Kobe University supercomputer.
- **CaNoRock XVI, Andøya Norway:** Conducted numerical simulations of rocket
  trajectory prior to launch to estimate drag coefficient and landing site.

## Skills

- **Languages:** English (Native), Icelandic (Native), Norwegian (Fluent),
  German (Working Proficiency)
- **Technologies:** Advanced: Python, Terraform, Kubernetes, Docker, Linux,
  Azure, Git, AWS

## Volunteer experience

### Guest Developer, Max Planck Institute for Human Cognitive and Brain Sciences

September 2024 - January 2025

- Assisted with developing, packaging, and formalizing a tool for cardiac
  artefact removal in spinal electrophysiology data into an open-source
  library [3]

### Mathematics Tutor, ENT3R

January 2017 - June 2020

## References

1. Hagen E, Magnusson SH, et al. (2022) Brain signal predictions from
   multi-scale networks using a linearized framework. PLoS Comput Biol
   18(8): e1010353. <https://doi.org/10.1371/journal.pcbi.1010353>
2. Espen Hagen, et al. "Hybrid Scheme for Modeling Local Field Potentials
   from Point-Neuron Networks", Cerebral Cortex, Volume 26, Issue 12,
   1 December 2016, Pages 4461–4496, <https://doi.org/10.1093/cercor/bhw237>
3. mne-python pull request: <https://github.com/mne-tools/mne-python/pull/13037>
