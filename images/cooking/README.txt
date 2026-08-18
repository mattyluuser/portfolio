Drop 3 photos here using these exact filenames — the site checks for
them automatically and swaps out the grey placeholder once found.

  cooking-01.jpg
  cooking-02.jpg
  cooking-03.jpg

They sit in a 2x2 "split grid" (.split-grid in index.html) — photo,
photo, photo, caption block. That puts the caption in the bottom-right
cell (rotated from Pottery's bottom-left; Photography rotates back to
bottom-left, and so on).

Each .photo block is set to a 3:2 box (--ar:3/2), matching the Pottery
section, and crops (cover) to fill it — that's intentional for a
consistent grid, so don't worry about matching it exactly.

To edit the caption: find <p class="caption-block__text"> in the
Food and Cooking section of index.html.
