import os
from PIL import Image
import numpy as np

grad_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands\gradient'
files = [f for f in os.listdir(grad_dir) if f.endswith('.png')]

# Check if any image has vertical border lines or stray pixels
for f in files:
    im = Image.open(os.path.join(grad_dir, f))
    w, h = im.size
    print(f"{f}: {w}x{h}")
