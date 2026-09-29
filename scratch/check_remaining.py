import os
from PIL import Image

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
files = [f for f in os.listdir(brands_dir) if f.startswith('image') and not f.startswith('image1.') and not f.startswith('image2.') and not f.startswith('image3.')]
files = sorted(files, key=lambda x: int(''.join(filter(str.isdigit, x)) or 0))

print('Inspecting individual images 4 to 29:')
for f in files:
    p = os.path.join(brands_dir, f)
    with Image.open(p) as img:
        print(f'{f}: {img.size}, {img.mode}')
