import os
from PIL import Image

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'

# Let's inspect image4 to image29 to see their background and content
for i in range(4, 30):
    for ext in ['.png', '.jpeg']:
        fn = f'image{i}{ext}'
        fp = os.path.join(brands_dir, fn)
        if os.path.exists(fp):
            with Image.open(fp) as im:
                print(f"{fn}: size={im.size}, mode={im.mode}")
