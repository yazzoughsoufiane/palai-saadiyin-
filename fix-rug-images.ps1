# Fix rug 01 — remove wrong images
Rename-Item "public\rugs\ps-2025-001-winter.jpg" "ps-2025-002-summer.jpg"
Remove-Item "public\rugs\ps-2025-001-detail-3.jpg"
Remove-Item "public\rugs\ps-2025-001-detail-4.jpg"

Write-Host "Done fixing image files"

# Update rugs.ts — fix rug 01 images block
$content = Get-Content "data\rugs.ts" -Raw

$old = @"
    images: {
      primary: '/rugs/ps-2025-001-primary.jpg',
      summerSide: '/rugs/ps-2025-001-summer.jpg',
      winterSide: '/rugs/ps-2025-001-winter.jpg',
      details: [
        '/rugs/ps-2025-001-detail-1.jpg',
        '/rugs/ps-2025-001-detail-2.jpg',
        '/rugs/ps-2025-001-detail-3.jpg',
        '/rugs/ps-2025-001-detail-4.jpg',
      ],
    },
"@

$new = @"
    images: {
      primary: '/rugs/ps-2025-001-primary.jpg',
      summerSide: '/rugs/ps-2025-001-summer.jpg',
      winterSide: '/rugs/ps-2025-001-summer.jpg',
      details: [
        '/rugs/ps-2025-001-detail-1.jpg',
        '/rugs/ps-2025-001-detail-2.jpg',
      ],
    },
"@

$content = $content.Replace($old, $new)
Set-Content "data\rugs.ts" $content

Write-Host "Done updating rugs.ts"

# Push to GitHub
git add data\rugs.ts
git add public\rugs\ps-2025-002-summer.jpg
git rm public\rugs\ps-2025-001-detail-3.jpg
git rm public\rugs\ps-2025-001-detail-4.jpg
git rm public\rugs\ps-2025-001-winter.jpg
git commit -m "fix rug 01 images - remove wrong photos"
git push

Write-Host "All done! Check the site in 2 minutes."
