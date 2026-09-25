## Notes identifying and processing the given data

### Objective:

Find the most suitable keepers for the available roles in Carrowmore Array.

### Basic and Consistent Items derived

- Based on the `clean/keepers.json` I will use the same type schema as the final format to have consistency among keeper records.
- The `raw/personnel/cla_personnel_export.csv` contains all the personnel to select from
- The `keeper_code` is the important field from reading the given data.

## Timeline

- Tried the automated way with AI 2 times, extracting codes and names from the logs. Failed
- Tried an AI augmented pipeline wrote some code for extracting the names and from the current keepers and compare them to the logs. Decided to abandon it. But I am creating the repo with this first code attempt for reference.
- Created some types from the things I read of the data files see `src/types`
- Created a sequencer on `start.js` with branch support to go around different scenarios processing data files.
- First 3 steps seem fine in principle using `cla_personnel_export.csv` as the base of keepers code/names
- First attempt with using the raw log data failed although it went further than AI on how to process the raw files.
- Decided to abandon the scenario after checking other csv files. `raw\logbooks\` folders is not a good way to be used for keeper correlation. Era-1 has no code association for the keepers listed, Era-2 is the only keeper code reliable but names are not cleared. Era-3 is similar to Era-1 for correlating.

#### Other Notes

1. Identify the parts that are consistent among the raw data. There are three primary elements I will focus on. **station codes**, **keeper codes** and **keeper names**.
2. 68 stations seems to be noted among throughout the raw data and have tasks done on those stations
3. The leavers csv is a list of contractors with the stations they work on. Not important for the initial filtering

### clean data

Seems the clean data json structure was built from the raw data. Although incomplete it provides sample of structuring raw records into json.

## Secondary Associations

- The old `training` material could be compared with the new requirements in Carrowmore in an attempt to see what course might have relevancy to the modern technology deployed. This is a secondary task as an association among the current keepers is weak at best.
- The `raw/personnel/cla_personnel_leavers.csv` is also irrelevant for now. Could be used to identify unused keeper codes mixed with other data.
