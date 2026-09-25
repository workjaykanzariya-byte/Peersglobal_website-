import os
from PIL import Image

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
output_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands\gradient'

# Let's inspect each original brand file and map it with friendly brand name
files = sorted(os.listdir(brands_dir))
for f in files:
    if f.endswith('.png') or f.endswith('.jpeg'):
        p = os.path.join(brands_dir, f)
        im = Image.open(p)
        print(f"{f}: {im.size}")
