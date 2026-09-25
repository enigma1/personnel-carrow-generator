# Generating a list of personnel

Using legacy data from mixed formats text, csv, mixed text/binary generate a list of personnel suitable for specific roles.

## Problem Statement

An organisation is transitioning a group of approximately 340 individuals from an operational model to newly defined roles. There will be 6 new distinct position types, with a combined of 54 vacancies from what I measured. The task was to identify from the existing personnel those individuals better suited for each one of the available role, based on documented training history and certification records.

## Data to Process

Given that raw data sources are highly heterogeneous and span among multiple eras I decided based on the following:

- A starting point: Use the current keeper list from `cla_personnel_export.csv` but only keep codes and names.
- With an objective of: **select the most efficient keepers to fullfill the new positions**

Given the starting point and the target along with the time constrains for this prototype.

- Established a trusted baseline (keeper code and keeper name)
- Identified the skillset of the keepers based on the most recent set of courses attended for 3 reasons.
  a. To be able to identify a reliable way of associating keepers with the requirements of the new vancancies.
  b. To identify keepers who actively pursue a career in this discipline
  c. Because the structure of most recent course data is deterministic and trustworthy and specifications are often updated in-between different eras.
- Course participants were added in a separate list with scores from the course results
- From that point, composite scores were created from course records and the list of all keepers was put in place. As it is impossible to tell which of the ~340 individuals is willing to undertake the new positions. So rather than filtering (which eliminates candidates prematurely), all 340 keepers are scored against every role.

## Design Standards Used

1. Traceability over automation. Generated files are derived from a previous one. Scores can be traced: assignment to ranked list to courses joined to raw JSON record.
2. Transformations are isolated steps, to allow expansion and easy modifications to the application.
3. Ranking over elimination. I believe it will be unfair given the data limitations to remove participants of any level.

## Tools Utilization and Pitfalls

I left a NOTES.md with details of my attempts.

- Nearly one hour was spend on AI automation giving the context via the editor and that resulted into nothing.
- Used browser AI also in an attempt to establish a verifiable list of keepers through the logs. Backed off to square-1 as I realized there was no reliable correlation in the logs between keeper codes/names and the different eras.
- Spend one hour next investigating the raw data and requirement documents and decided to take the courses keepers attended, as the next most reliable step for this task. After that there was manual work with AI augmentation based on the pipeline I had in mind.
- Created a pipeline to crossreference keepers, courses and atendendance and determine the scores.
- It is my understanding a final true output from my reasoning is required and that is what I had to to build and provide a functional prototype.

## Answers to the three questions explaining myself:

1. After examining the raw data carefully I decided that processing them will be complex enough and way beyond the time allowed. So my focus was to produce a finalized preliminary true list without assumptions based on concrete data even if limited.

2. The AI was unable to parse the raw data provided. Each attempt was taken long time despite file cuts and focus attempts, the result was the same. Automation did not work for me with the LLMs I had at my pocession. And selective context engineering which I also attempted made no difference. So delegation on automation never successfully happened.

3. In terms of data I will throw out secondary associations for example how well people scored. In terms of logic I made this product flexible enough to remove or add steps to the pipeline. So if you ever come across another set relative data you can replace existing parts without throwing the whole product away. I would keep the sequencer structure I built, it is generalized enough and can have multiple application executing different scenarios. Individual steps can be replaced and are certainly secondary.

## Output

Generated list of personnel should appear under the `data` folder at the root of the project after running the application

| Generated Files          | File Contents                                            |
| ------------------------ | -------------------------------------------------------- |
| `keepers.csv`            | Initial list of currently employed keepers (codes/names) |
| `keepers_duplicates.csv` | List of duplicated names found in the original list      |
| `keepers_courses.csv`    | List of courses keepers attended in 2017-2026            |
| `keepers_ranked.csv`     | List of keepers ranked based on course achievements      |
| `assignments.csv`        | Finalized priority list of keepers                       |

## Installation

```bash
mkdir <application> folder
cd <application> folder
git clone https://github.com/enigma1/personnel-carrow-generator.git .
npm i
cp .env.template .env
```

- Modify the .env file, specify the `DATA_PACK_ROOT` field to point to the folder with all the raw keepers data.

## Execution

```bash
npm run dev
```

## 🧾 License

GNU General Public License (GPL) v3
