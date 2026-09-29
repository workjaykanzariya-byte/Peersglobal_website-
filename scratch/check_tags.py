import zipfile
import xml.etree.ElementTree as ET

pptx_path = r'C:\Users\hardi\Downloads\Peers Global Founding Partner Presentation.pptx'
with zipfile.ZipFile(pptx_path, 'r') as z:
    xml_content = z.read('ppt/slides/slide1.xml')
    print('XML length:', len(xml_content))
    tree = ET.fromstring(xml_content)
    tags = set([elem.tag for elem in tree.iter()])
    for t in sorted(tags):
        if 'pic' in t.lower() or 'blip' in t.lower() or 'sp' in t.lower():
            print(t)
