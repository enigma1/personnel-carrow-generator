## Target
Create a 2-column CSV: name, code.

## Method
- Read `./carrowmore-data-pack/raw/personnel/cla_personnel_export.csv` in full.
- Read ONLY the first 2 files in `./carrowmore-data-pack/raw/logbooks`
  (alphabetically). Do not read any other logbook files.
- Extract keeper names by reading the text directly.
- Do NOT write or execute any scripts.
- Names must be raw ASCII (a-z, A-Z, space, hyphen, apostrophe only).
  Skip any name containing other characters.
- Correlate by name against the personnel CSV to get the code.
- If no match found, use "Not Found" for the missing column.
- Remove duplicate rows.

## Output
- Write the full result to `./data/keepers.csv`.
- In your response, show the CSV in a code block (it will be short).
- Do not modify any other files.

## Hard stop
- Maximum 3 file reads. After that, output what you have.

## Results
- After another 20 minutes this .md did not produce anything meaningful either models tried stuck in parsing names from the log folders.