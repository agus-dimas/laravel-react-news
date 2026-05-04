import os
import re

files_to_update = [
    'resources/views/dashboard.blade.php',
    'resources/views/dashboard/consultations/index.blade.php',
    'resources/views/dashboard/news/create.blade.php',
    'resources/views/dashboard/users/index.blade.php',
]

for file_path in files_to_update:
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Replace <div class="flex min-h-screen bg-zinc-100"> with flex-col lg:flex-row
    content = content.replace('<div class="flex min-h-screen bg-zinc-100">', '<div class="flex flex-col lg:flex-row min-h-screen bg-zinc-100">')
    
    # Match the <aside>...</aside> completely.
    aside_pattern = re.compile(r'<aside.*?</aside>', re.DOTALL)
    
    content = aside_pattern.sub('<x-dashboard-sidebar />', content, count=1)
    
    with open(file_path, 'w') as f:
        f.write(content)

print("Replacement done.")
