Drop 3 photos here using these exact filenames — the site checks for
them automatically and swaps out the grey placeholder once found.

  photo-01.jpg
  photo-02.jpg
  photo-03.jpg

They sit in a 2x2 "split grid" (.split-grid in index.html) — photo,
photo, caption block, photo. That puts the caption in the bottom-left
cell (rotated back from Cooking's bottom-right).

Each .photo block is set to a 3:2 box (--ar:3/2), matching the Pottery
section, and crops (cover) to fill it — that's intentional for a
consistent grid, so don't worry about matching it exactly. Portrait
photos will get cropped in harder; if a portrait shot loses too much
in the crop, try a different photo rather than fighting the ratio.

Note: some phone photos carry EXIF rotation (shot in portrait but
stored with landscape pixel dimensions) — browsers apply that rotation
automatically before cropping, so this is normally nothing to worry
about, but if a photo looks cropped strangely, check its orientation:
  python3 -c "from PIL import Image; from PIL.ExifTags import TAGS; \
  img = Image.open('photo-0N.jpg'); print(img.size, \
  [v for k,v in (img._getexif() or {}).items() if TAGS.get(k)=='Orientation'])"

To edit the caption: find <p class="caption-block__text"> in the
Photography section of index.html.
