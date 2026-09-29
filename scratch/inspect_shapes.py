import zipfile
import xml.etree.ElementTree as ET

pptx_path = r'C:\Users\hardi\Downloads\Peers Global Founding Partner Presentation.pptx'
with zipfile.ZipFile(pptx_path, 'r') as z:
    xml_content = z.read('ppt/slides/slide1.xml')
    rels_content = z.read('ppt/slides/_rels/slide1.xml.rels')
    
    rels_tree = ET.fromstring(rels_content)
    rel_map = {r.attrib['Id']: r.attrib['Target'] for r in rels_tree}
    
    tree = ET.fromstring(xml_content)
    
    # Namespaces
    ns = {
        'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
        'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
    }
    
    for sp in tree.iter('{http://schemas.openxmlformats.org/presentationml/2006/main}sp'):
        blip = sp.find('.//{http://schemas.openxmlformats.org/drawingml/2006/main}blip')
        embed = blip.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed') if blip is not None else None
        target = rel_map.get(embed, '')
        
        # text
        texts = [t.text for t in sp.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}t') if t.text]
        
        # xfrm
        xfrm = sp.find('.//{http://schemas.openxmlformats.org/drawingml/2006/main}xfrm')
        off = xfrm.find('{http://schemas.openxmlformats.org/drawingml/2006/main}off') if xfrm is not None else None
        ext = xfrm.find('{http://schemas.openxmlformats.org/drawingml/2006/main}ext') if xfrm is not None else None
        x = off.attrib.get('x') if off is not None else '0'
        y = off.attrib.get('y') if off is not None else '0'
        cx = ext.attrib.get('cx') if ext is not None else '0'
        cy = ext.attrib.get('cy') if ext is not None else '0'
        
        print(f"Shape: target={target}, text={texts}, pos=({x},{y}), size=({cx},{cy})")
