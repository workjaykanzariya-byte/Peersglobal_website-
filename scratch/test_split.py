import os
from PIL import Image
import numpy as np

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'

# Let's inspect image1, image2, image3 to split them into individual logos
# In image1: size is (1002, 107) with 4 logos
# In image2: size is (1227, 112) with 5 logos
# In image3: size is (1282, 87) with 5 logos

def split_strip(filename, num_parts):
    p = os.path.join(brands_dir, filename)
    im = Image.open(p)
    w, h = im.size
    pw = w // num_parts
    parts = []
    for i in range(num_parts):
        box = (i * pw, 0, (i + 1) * pw, h)
        part = im.crop(box)
        # trim whitespace
        parts.append(part)
    return parts

print("Checking strip splitting...")
p1 = split_strip('image1.png', 4)
print(f"image1 split into {len(p1)} logos")
p2 = split_strip('image2.png', 5)
print(f"image2 split into {len(p2)} logos")
p3 = split_strip('image3.png', 5)
print(f"image3 split into {len(p3)} logos")
