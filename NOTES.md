## Notes identifying and processing the given data

### Objective:

Find the most suitable keepers for the available roles in Carrowmore Array.

### Basic and Consistent Items derived

- Based on the `clean/keepers.json` I will use the same type schema as the final format to have consistency among keeper records.
- The `raw/personnel/cla_personnel_export.csv` contains all the personnel to select from
- The `keeper_code` is the important field from reading the given data.

## Timeline

#### AI automation attempt using markdown files only

- Tried the automated way with AI, in two separate instances, extracting codes and names from the logs. Failed each time to produce data.
- Tried an AI augmented pipeline wrote some code for extracting the names and from the current keepers and compare them to the logs. Decided to abandon it. But I am creating the repo with this first code attempt for reference.

#### My First attempt with raw data TS/JS scripts AI augmented

- Created some types from the things I read of the data files see `src/types`
- Created a sequencer on `start.js` with branch support to go around different scenarios when processing data files. A sequenced pipeline with branches and loops might be helpful generating a solution
- First 3 steps seem fine in principle using `cla_personnel_export.csv` as the base of keepers code/names
- First attempt with using the raw log data failed although it went further than AI on how to process the raw files.
- Decided to abandon the scenario after checking other csv files. `raw\logbooks\` folders is not a good way to be used for keeper correlation. Era-1 has no code association for the keepers listed, Era-2 is the only keeper code reliable but names are not cleared. Era-3 is similar to Era-1 for correlating, no keeper codes.
- AI didn't help with archtecture, nil viable recommendations towards alternative scenarios but helped speeding up the sequencer's steps.

#### Second attempt with raw data

- New approach is to create a csv with keeper name/code as before then load most recent course file and correlate it with Carrowmore Array new employment listings.
- Took the decision after examining the different course files and certification duration. Seems the quickest method to reach the objective is to reference the most recent one as the primary filter.
- Creating types and steps in the sequencer for the new correlation scenario in `src/types` and `src/steps`
- Referencing `raw/training/vendor-c-learnhub-2017-2026.json` and `employers/certification_schemes.json`
- Generating score scripts where AI helpse generating code. Still unreliable, as it is uses elimination strategies and removing entries, I need to have all keeper codes with scores as it is unknown how many will agree to new roles. And also secondary factors from raw data might influence the score later on.
- I created types for roles based on the new job listings under the `src/contracts/roles.ts` and `src/types/roles.ts`. Put AI to generate score calculations but it ignore keepers past experience at multiple levels. I need to rethink the prompts and include secondary data from raw folders if time permits. I may use the clean data to get around time constraints.
- I manage to add all necessary steps to the sequencer for a rough calculation based on the keepers, courses attended and marks obtained. The output gives an order of potential keepers. The next thing I need to work on is fix bugs on for the different skills on the final `ranked.csv` and then add different scenarios taking into account the older activity logs of keeper to have a fair judgment.

#### Other Notes

1. Identify the parts that are consistent among the raw data. There are three primary elements I will focus on. **station codes**, **keeper codes** and **keeper names**.
2. 68 stations seems to be noted among throughout the raw data and have tasks done on those stations. Does more stations involved for a keeper means more experience and value? I should keep that as a secondary factor.
3. The leavers csv is a list of contractors with the stations they work on. Not important for the initial filtering but might be needed later for correlation of keeper codes not found.

### clean data

Seems the clean data json structure was built from the raw data. Although incomplete it provides sample of structuring raw records into json which represents the final formatting.

## Secondary Associations

- The old `training` material could be compared with the new requirements in Carrowmore in an attempt to see what course might have relevancy to the modern technology deployed. This is a secondary task as an association among the current keepers is weak at best.
- The `raw/personnel/cla_personnel_leavers.csv` is also irrelevant for now. Could be used to identify unused keeper codes mixed with other data.
