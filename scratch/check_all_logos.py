import os
from PIL import Image

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
files = sorted(os.listdir(brands_dir), key=lambda x: int(''.join(filter(str.isdigit, x)) or 0))

print('Total images:', len(files))
for f in files:
    img = Image.open(os.path.join(brands_dir, f))
    print(f'{f}: {img.size} {img.mode}')
