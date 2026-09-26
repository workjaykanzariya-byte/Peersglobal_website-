import os
from PIL import Image
import numpy as np

brands_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands'
output_dir = r'c:\Users\hardi\OneDrive\Desktop\Peers global\public\images\brands\processed'
os.makedirs(output_dir, exist_ok=True)

# Brand colors from Flutter definition:
# 0xFF1D4ED8 -> (29, 78, 216)
# 0xFFE11D48 -> (225, 29, 72)
COLOR_START = np.array([29, 78, 216], dtype=np.float32)
COLOR_END = np.array([225, 29, 72], dtype=np.float32)

def extract_alpha_mask(im):
    # Convert to RGBA
    im = im.convert('RGBA')
    arr = np.array(im)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    
    # Check if image was predominantly white background (like JPEG or opaque PNG)
    # If the corners/edges are white, background is white
    corners = [arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1]]
    is_white_bg = all((c[0] > 230 and c[1] > 230 and c[2] > 230) for c in corners)
    
    if is_white_bg or np.all(a == 255):
        # Calculate darkness/luminance: darker pixel = more opaque logo
        # Standard luminance: 0.299*R + 0.587*G + 0.114*B
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        # If lum > 245 -> alpha = 0, if lum < 200 -> alpha = 255, smooth transition
        mask = np.clip((245.0 - lum) / 45.0 * 255.0, 0, 255).astype(np.uint8)
    else:
        # Already has alpha channel, but if rgb is dark on transparent or colored on transparent
        # Use existing alpha
        mask = a
        # If there are light background pixels with alpha=255, refine
        white_pixels = (r > 240) & (g > 240) & (b > 240) & (a > 200)
        if np.sum(white_pixels) > (arr.shape[0] * arr.shape[1] * 0.3): # if substantial white bg
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            mask = np.clip((245.0 - lum) / 45.0 * 255.0, 0, 255).astype(np.uint8)
            
    return mask

def apply_gradient(mask):
    h, w = mask.shape
    if w == 0 or h == 0:
        return None
    
    # Create horizontal linear gradient from COLOR_START to COLOR_END
    # X goes from 0 to 1
    x_coords = np.linspace(0, 1, w, dtype=np.float32)
    # Gradient array: shape (h, w, 3)
    grad = np.zeros((h, w, 3), dtype=np.uint8)
    for i in range(3):
        row = (COLOR_START[i] + x_coords * (COLOR_END[i] - COLOR_START[i])).astype(np.uint8)
        grad[:, :, i] = np.tile(row, (h, 1))
        
    # Result RGBA
    out = np.zeros((h, w, 4), dtype=np.uint8)
    out[:, :, :3] = grad
    out[:, :, 3] = mask
    
    return Image.fromarray(out, 'RGBA')

def trim(im):
    bg = Image.new(im.mode, im.size, (0, 0, 0, 0))
    diff = Image.fromarray(np.array(im)[:, :, 3]) # use alpha
    bbox = diff.getbbox()
    if bbox:
        # check min size
        if bbox[2] - bbox[0] > 10 and bbox[3] - bbox[1] > 10:
            return im.crop(bbox)
    return im

print("Script template ready.")
