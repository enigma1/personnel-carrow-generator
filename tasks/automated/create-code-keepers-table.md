## Target: Create a csv table with 2 columns names and code of keepers.
- Use the `./carrowmore-data-pack/raw/personnel/cla_personnel_export.csv` file as reference
- Then search the files under `./carrowmore-data-pack/raw/logbooks` to build the table.
- Era1-ocr has no code association for the keepers listed, use the the names for correlation
- Extract the keeper names raw do not attempt to reconstruct them.
- Remove duplicates. If no association found for a code/name combination leave enter "Not Found".

## Do not read other folders or files.

## Output keepers.csv
- A `./data/keepers.csv` file should be generated. Do not modify any other files.

## Sample output (for preview)
- In your response, show only the first 10 rows of the generated CSV (including header).
- Then report: total row count, and how many rows contain "Not Found".
- Do NOT paste the full CSV in your response.

## 5 minutes task limit
- Do not spend more than 5 minutes to complete the task. Respond with the partial data if there is not enough time.

## Results
- After 20 minutes did not produce anything meaningful models tried stuck in strings decoding Latin, UTF-8, binary content.