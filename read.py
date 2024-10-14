import json
import html

# Step 1: Load the JSON file
with open('raw.json', 'r') as file:
    data = json.load(file)  # Load the JSON as Python objects

# Step 2: Loop through the array and reformat each object
for obj in data:
    obj['date'] = obj['startTime']
    
    if 'description' in obj:
        des = obj['description']  # No need to encode or decode here
        
        # Escape HTML special characters, but keep Unicode characters intact
        obj['description'] = html.escape(des)
    
    # Remove the unnecessary fields
    del obj['startTime']
    del obj['endTime']
    del obj['recurring']
    del obj['meetingLink']

# Step 3: Write the reformatted data back to a new JSON file
with open('data.json', 'w', encoding='utf-8') as outfile:
    json.dump(data, outfile, indent=4, ensure_ascii=False)  # Prevent escaping non-ASCII characters
