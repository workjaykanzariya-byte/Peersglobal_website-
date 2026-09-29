import zipfile, os
import xml.etree.ElementTree as ET
from PIL import Image

pptx_path = r'C:\Users\hardi\Downloads\Peers Global Founding Partner Presentation.pptx'
with zipfile.ZipFile(pptx_path, 'r') as z:
    xml_content = z.read('ppt/slides/slide1.xml')
    tree = ET.fromstring(xml_content)
    
    rels_content = z.read('ppt/slides/_rels/slide1.xml.rels')
    rels_tree = ET.fromstring(rels_content)
    rel_map = {r.attrib['Id']: r.attrib['Target'] for r in rels_tree}
    
    for pic in tree.iter('{http://schemas.openxmlformats.org/presentationml/2006/main}pic'):
        blip = pic.find('.//{http://schemas.openxmlformats.org/drawingml/2006/main}blip')
        embed = blip.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed') if blip is not None else None
        target = rel_map.get(embed, '')
        cNvPr = pic.find('.//{http://schemas.openxmlformats.org/presentationml/2006/main}cNvPr')
        name = cNvPr.attrib.get('name', '') if cNvPr is not None else ''
        descr = cNvPr.attrib.get('descr', '') if cNvPr is not None else ''
        title = cNvPr.attrib.get('title', '') if cNvPr is not None else ''
        print(f'{embed} ({target}): name="{name}", descr="{descr}", title="{title}"')
