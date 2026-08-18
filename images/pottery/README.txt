pottery-01.jpg, pottery-02.jpg, and pottery-03.jpg are live on the site
in a 2x2 "split grid" (.split-grid in index.html) — photo, photo,
caption block, photo, in that DOM order. That puts the caption in the
bottom-left cell. Drop a replacement in with the same filename any
time to swap a photo.

pottery-02.jpg has an extra `background-position: center top;` inline
style so it crops from the top of the frame rather than the center —
adjust or remove that if you swap in a different photo.

pottery-04.jpg (the vase) was removed from the page for now to keep
this a clean 3-photo/1-caption grid, but the file is still here if you
want to bring it back later.

To edit the caption: find <p class="caption-block__text"> in the
Pottery section of index.html.

To swap in a different aspect ratio: set --ar on the .photo block to
its native ratio (check with an image tool) to avoid an awkward crop.
