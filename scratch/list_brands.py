import os
from PIL import Image

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
files = sorted(os.listdir(brands_dir), key=lambda x: int(''.join(filter(str.isdigit, x)) or 0))

print(f"Total extracted files: {len(files)}")
for f in files:
    p = os.path.join(brands_dir, f)
    with Image.open(p) as img:
        print(f"{f}: size={img.size}, mode={img.mode}")
