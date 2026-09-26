import os
from PIL import Image
import numpy as np

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
output_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands\gradient'

COLOR_START = np.array([29, 78, 216], dtype=np.float32)  # #1D4ED8
COLOR_END = np.array([225, 29, 72], dtype=np.float32)    # #E11D48

def clean_and_gradient(im, name):
    im = im.convert('RGBA')
    arr = np.array(im)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    
    # Calculate luminance
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    
    # Determine mask
    # Pure white / near white (> 230) is transparent
    # Very light grey divider lines (> 220) should also be transparent
    mask = np.clip((225.0 - lum) / 45.0 * 255.0, 0, 255).astype(np.uint8)
    
    # If the original image had alpha, take min with original alpha
    if not np.all(a == 255):
        mask = np.minimum(mask, a)
        
    # Trim borders: find columns and rows that have real logo content (ignore faint 1px vertical dividers)
    # A real logo has substantial vertical height in its columns
    col_counts = np.sum(mask > 50, axis=0)
    row_counts = np.sum(mask > 50, axis=1)
    
    valid_cols = np.where(col_counts > 5)[0]
    valid_rows = np.where(row_counts > 5)[0]
    
    if len(valid_cols) < 10 or len(valid_rows) < 10:
        return None
        
    c1, c2 = valid_cols[0], valid_cols[-1] + 1
    r1, r2 = valid_rows[0], valid_rows[-1] + 1
    
    mask_trimmed = mask[r1:r2, c1:c2]
    h, w = mask_trimmed.shape
    if w < 10 or h < 10:
        return None
        
    # Build linear gradient
    x_coords = np.linspace(0, 1, w, dtype=np.float32)
    grad = np.zeros((h, w, 3), dtype=np.uint8)
    for i in range(3):
        grad[:, :, i] = np.tile((COLOR_START[i] + x_coords * (COLOR_END[i] - COLOR_START[i])).astype(np.uint8), (h, 1))
        
    res = np.zeros((h, w, 4), dtype=np.uint8)
    res[:, :, :3] = grad
    res[:, :, 3] = mask_trimmed
    
    out_img = Image.fromarray(res, 'RGBA')
    # Standardize height to 44px
    target_h = 44
    target_w = max(20, int(w * (target_h / h)))
    out_img = out_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    return out_img

# Process image1: 4 logos
im1 = Image.open(os.path.join(brands_dir, 'image1.png'))
# Split around x coordinates of the dividers:
# w=1002, 4 logos: ~0-240, 260-490, 510-740, 760-1002
boxes1 = [
    ('idbi_bank', (20, 10, 240, 95)),
    ('navitas_solar', (265, 10, 485, 95)),
    ('rupeeboss', (520, 10, 740, 95)),
    ('waacab', (765, 10, 985, 95)),
]
for name, box in boxes1:
    crop = im1.crop(box)
    res = clean_and_gradient(crop, name)
    if res:
        res.save(os.path.join(output_dir, f"{name}.png"), 'PNG')

# Process image2: 5 logos (w=1227, h=112)
im2 = Image.open(os.path.join(brands_dir, 'image2.png'))
boxes2 = [
    ('concepts_green', (10, 10, 230, 105)),
    ('devx', (255, 10, 480, 105)),
    ('glam_greens', (500, 10, 725, 105)),
    ('we_protect_env', (750, 10, 960, 105)),
    ('inside_building_solutions', (980, 10, 1210, 105)),
]
for name, box in boxes2:
    crop = im2.crop(box)
    res = clean_and_gradient(crop, name)
    if res:
        res.save(os.path.join(output_dir, f"{name}.png"), 'PNG')

# Process image3: 5 logos (w=1282, h=87)
im3 = Image.open(os.path.join(brands_dir, 'image3.png'))
boxes3 = [
    ('zero_waste_3r', (10, 5, 235, 82)),
    ('luxury_wellness', (260, 5, 500, 82)),
    ('agrotis_tech', (525, 5, 755, 82)),
    ('all_about_architecture', (780, 5, 1020, 82)),
    ('body_tales', (1045, 5, 1265, 82)),
]
for name, box in boxes3:
    crop = im3.crop(box)
    res = clean_and_gradient(crop, name)
    if res:
        res.save(os.path.join(output_dir, f"{name}.png"), 'PNG')

# Individual brand images
individual_brands = [
    ('shivalik_fund', 'image4.png'),
    ('savvy_civic_aarya', 'image5.png'),
    ('medercial_one', 'image6.png'),
    ('brand_crest', 'image7.png'),
    ('brand_symbol', 'image8.png'),
    ('brand_emblem', 'image9.png'),
    ('brand_circle', 'image10.jpeg'),
    ('brand_shield', 'image11.png'),
    ('brand_square', 'image12.png'),
    ('brand_star', 'image13.png'),
    ('brand_tech', 'image14.png'),
    ('brand_corp', 'image15.png'),
    ('brand_global', 'image16.png'),
    ('brand_venture', 'image17.png'),
    ('brand_apex', 'image18.png'),
    ('brand_prime', 'image19.png'),
    ('brand_sol', 'image20.png'),
    ('brand_dynamo', 'image21.jpeg'),
    ('brand_summit', 'image22.png'),
    ('brand_zenith', 'image23.png'),
    ('brand_matrix', 'image24.png'),
    ('brand_nova', 'image25.png'),
    ('brand_corridor', 'image26.jpeg'),
    ('brand_link', 'image27.png'),
    ('brand_capital', 'image28.png'),
    ('brand_hub', 'image29.png'),
]

for name, fn in individual_brands:
    fp = os.path.join(brands_dir, fn)
    if os.path.exists(fp):
        im = Image.open(fp)
        res = clean_and_gradient(im, name)
        if res:
            res.save(os.path.join(output_dir, f"{name}.png"), 'PNG')

print("Refined gradient logos generated successfully!")
