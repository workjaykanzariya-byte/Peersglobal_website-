import os
from PIL import Image
import numpy as np

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
output_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands\gradient'
os.makedirs(output_dir, exist_ok=True)

COLOR_START = np.array([29, 78, 216], dtype=np.float32)  # #1D4ED8
COLOR_END = np.array([225, 29, 72], dtype=np.float32)    # #E11D48

def make_gradient_logo(pil_img):
    pil_img = pil_img.convert('RGBA')
    arr = np.array(pil_img)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    
    # Check if background is mostly light / white
    corners = [arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1]]
    is_white_bg = all((c[0] > 220 and c[1] > 220 and c[2] > 220) for c in corners)
    
    # Calculate mask
    if is_white_bg or np.all(a == 255):
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        # Anything close to white becomes transparent
        # Anything dark becomes opaque
        mask = np.clip((240.0 - lum) / 50.0 * 255.0, 0, 255).astype(np.uint8)
    else:
        # Transparent background already: combine alpha and darkness if needed
        # If there are white pixels inside transparent image
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        white_mask = (lum > 240) & (a > 200)
        mask = a.copy()
        mask[white_mask] = 0
        
    # Crop to non-transparent bounding box
    bbox_img = Image.fromarray(mask)
    bbox = bbox_img.getbbox()
    if not bbox or (bbox[2] - bbox[0] < 10) or (bbox[3] - bbox[1] < 10):
        return None
        
    mask_cropped = mask[bbox[1]:bbox[3], bbox[0]:bbox[2]]
    h, w = mask_cropped.shape
    
    # Generate linear gradient across width
    x_coords = np.linspace(0, 1, w, dtype=np.float32)
    grad = np.zeros((h, w, 3), dtype=np.uint8)
    for i in range(3):
        grad[:, :, i] = np.tile((COLOR_START[i] + x_coords * (COLOR_END[i] - COLOR_START[i])).astype(np.uint8), (h, 1))
        
    res = np.zeros((h, w, 4), dtype=np.uint8)
    res[:, :, :3] = grad
    res[:, :, 3] = mask_cropped
    
    out_img = Image.fromarray(res, 'RGBA')
    # Resize so height is standard (e.g., around 48px or proportional)
    # keep aspect ratio
    target_h = 44
    target_w = max(20, int(w * (target_h / h)))
    out_img = out_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    return out_img

# 1. Process image1, image2, image3 by slicing each into its logos
raw_images = []

# image1: 4 logos (IDBI, Navitas, RupeeBoss, Waacab)
im1 = Image.open(os.path.join(brands_dir, 'image1.png'))
w1, h1 = im1.size
pw1 = w1 // 4
for i in range(4):
    raw_images.append(('idbi_navitas_rupeeboss_waacab_' + str(i+1), im1.crop((i * pw1, 0, (i + 1) * pw1, h1))))

# image2: 5 logos (Concepts Green, DevX, GlamGreens, We Protect, IBS)
im2 = Image.open(os.path.join(brands_dir, 'image2.png'))
w2, h2 = im2.size
pw2 = w2 // 5
for i in range(5):
    raw_images.append(('concepts_devx_glam_protect_ibs_' + str(i+1), im2.crop((i * pw2, 0, (i + 1) * pw2, h2))))

# image3: 5 logos (0-Waste, LuxuryWellness, Agrotis, Architecture, Body Tales)
im3 = Image.open(os.path.join(brands_dir, 'image3.png'))
w3, h3 = im3.size
pw3 = w3 // 5
for i in range(5):
    raw_images.append(('waste_luxury_agrotis_arch_body_' + str(i+1), im3.crop((i * pw3, 0, (i + 1) * pw3, h3))))

# 2. Individual images 4 to 29
for i in range(4, 30):
    for ext in ['.png', '.jpeg']:
        fn = f'image{i}{ext}'
        fp = os.path.join(brands_dir, fn)
        if os.path.exists(fp):
            raw_images.append((f'brand_{i}', Image.open(fp)))

print(f"Total raw brand pieces: {len(raw_images)}")

saved_files = []
for name, img in raw_images:
    grad_logo = make_gradient_logo(img)
    if grad_logo is not None:
        out_fn = f"{name}.png"
        out_path = os.path.join(output_dir, out_fn)
        grad_logo.save(out_path, 'PNG')
        saved_files.append((out_fn, grad_logo.size))
        print(f"Saved {out_fn} with size {grad_logo.size}")

print(f"\nSuccessfully generated {len(saved_files)} brand logos in gradient colors!")
