import os, shutil
from PIL import Image
import numpy as np

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
final_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands\gradient_final'
if os.path.exists(final_dir):
    shutil.rmtree(final_dir)
os.makedirs(final_dir, exist_ok=True)

COLOR_START = np.array([29, 78, 216], dtype=np.float32)  # #1D4ED8
COLOR_END = np.array([225, 29, 72], dtype=np.float32)    # #E11D48

def process_logo(im, name, trim_thresh=225):
    im = im.convert('RGBA')
    arr = np.array(im)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    
    # Calculate luminance
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    
    # Determine mask
    corners = [arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1]]
    is_white_bg = all((c[0] > 220 and c[1] > 220 and c[2] > 220) for c in corners)
    
    if is_white_bg or np.all(a == 255):
        mask = np.clip((trim_thresh - lum) / 45.0 * 255.0, 0, 255).astype(np.uint8)
    else:
        # Transparent background
        mask = a.copy()
        # also mask out near-white background if any
        near_white = (lum > 235) & (a > 180)
        mask[near_white] = 0
        
    col_counts = np.sum(mask > 40, axis=0)
    row_counts = np.sum(mask > 40, axis=1)
    
    valid_cols = np.where(col_counts > 3)[0]
    valid_rows = np.where(row_counts > 3)[0]
    
    if len(valid_cols) < 8 or len(valid_rows) < 8:
        return None
        
    c1, c2 = valid_cols[0], valid_cols[-1] + 1
    r1, r2 = valid_rows[0], valid_rows[-1] + 1
    
    mask_trimmed = mask[r1:r2, c1:c2]
    h, w = mask_trimmed.shape
    if w < 10 or h < 10:
        return None
        
    # Generate horizontal linear gradient
    x_coords = np.linspace(0, 1, w, dtype=np.float32)
    grad = np.zeros((h, w, 3), dtype=np.uint8)
    for i in range(3):
        grad[:, :, i] = np.tile((COLOR_START[i] + x_coords * (COLOR_END[i] - COLOR_START[i])).astype(np.uint8), (h, 1))
        
    res = np.zeros((h, w, 4), dtype=np.uint8)
    res[:, :, :3] = grad
    res[:, :, 3] = mask_trimmed
    
    out_img = Image.fromarray(res, 'RGBA')
    # Standardize height
    target_h = 42
    target_w = max(24, int(w * (target_h / h)))
    out_img = out_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    save_path = os.path.join(final_dir, f"{name}.png")
    out_img.save(save_path, 'PNG')
    return (name, out_img.size)

# 1. Logos from strip image1
im1 = Image.open(os.path.join(brands_dir, 'image1.png'))
boxes1 = [
    ('idbi_bank', (20, 10, 240, 95)),
    ('navitas_solar', (265, 10, 485, 95)),
    ('rupeeboss', (520, 10, 740, 95)),
    ('waacab', (765, 10, 985, 95)),
]
for name, box in boxes1:
    process_logo(im1.crop(box), name)

# 2. Logos from strip image2
im2 = Image.open(os.path.join(brands_dir, 'image2.png'))
boxes2 = [
    ('concepts_green', (10, 10, 230, 105)),
    ('devx', (255, 10, 480, 105)),
    ('glam_greens', (500, 10, 725, 105)),
    ('we_protect_environment', (750, 10, 960, 105)),
    ('inside_building_solutions', (980, 10, 1210, 105)),
]
for name, box in boxes2:
    process_logo(im2.crop(box), name)

# 3. Logos from strip image3
im3 = Image.open(os.path.join(brands_dir, 'image3.png'))
boxes3 = [
    ('zero_waste_3r', (10, 5, 235, 82)),
    ('luxury_wellness', (260, 5, 500, 82)),
    ('agrotis_tech', (525, 5, 755, 82)),
    ('all_about_architecture', (780, 5, 1020, 82)),
    ('body_tales', (1045, 5, 1265, 82)),
]
for name, box in boxes3:
    process_logo(im3.crop(box), name)

# 4. Individual logos image4 to image29
individual_list = [
    ('shivalik_fund', 'image4.png'),
    ('medercial_one', 'image5.png'),
    ('savvy_civic_aarya', 'image6.png'),
    ('apex_venture', 'image7.png'),
    ('zenith_capital', 'image8.png'),
    ('summit_partners', 'image9.png'),
    ('prime_corridor', 'image10.jpeg'),
    ('nova_tech', 'image11.png'),
    ('matrix_global', 'image12.png'),
    ('dynamo_link', 'image13.png'),
    ('crest_holdings', 'image14.png'),
    ('campus_jobs', 'image15.png'),
    ('zybra', 'image16.png'),
    ('nature_coat', 'image17.png'),
    ('wide_reach', 'image18.png'),
    ('sol_energy', 'image19.png'),
    ('shield_capital', 'image20.png'),
    ('alpha_star', 'image21.jpeg'),
    ('omni_corridor', 'image22.png'),
    ('emblem_group', 'image23.png'),
    ('horizon_link', 'image24.png'),
    ('vanguard_hub', 'image25.png'),
    ('beacon_media', 'image26.jpeg'),
    ('phoenix_circle', 'image27.png'),
    ('strata_global', 'image28.png'),
    ('pulse_ventures', 'image29.png'),
]

for name, fn in individual_list:
    fp = os.path.join(brands_dir, fn)
    if os.path.exists(fp):
        im = Image.open(fp)
        process_logo(im, name)

results = sorted(os.listdir(final_dir))
print(f"Total processed brand logos: {len(results)}")
for r in results:
    im = Image.open(os.path.join(final_dir, r))
    print(f"  {r}: {im.size}")
