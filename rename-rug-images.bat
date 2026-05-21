@echo off
:: ============================================================
:: Palais Saadiyin — rename uploaded photos to clean filenames
:: Run this from your project root:
::   C:\Users\Administrator\Desktop\palais-saadiyin> rename-rug-images.bat
:: ============================================================

set DIR=public\rugs

echo Renaming uploaded rug photos...

:: imgi_6 → Azilal indigo multicolour contemporary
for %%f in ("%DIR%\imgi_6_*.jpg") do ren "%%f" "ps-photo-001-primary.jpg"

:: imgi_2 → Showroom red + blue rugs on wall
for %%f in ("%DIR%\imgi_2_*.jpg") do ren "%%f" "ps-photo-002-primary.jpg"

:: imgi_3 → Mrirt ochre/blush with pouf
for %%f in ("%DIR%\imgi_3_*.jpg") do ren "%%f" "ps-photo-003-primary.jpg"

:: imgi_5 → Beni Ourain ivory diamond folded
for %%f in ("%DIR%\imgi_5_*.jpg") do ren "%%f" "ps-photo-004-primary.jpg"

:: imgi_7 → Boucherouite rag rug
for %%f in ("%DIR%\imgi_7_*.jpg") do ren "%%f" "ps-photo-005-primary.jpg"

:: imgi_8 → Zemour terracotta diamond vintage
for %%f in ("%DIR%\imgi_8_*.jpg") do ren "%%f" "ps-photo-006-primary.jpg"

:: imgi_4 → Showroom stools (used as detail image)
for %%f in ("%DIR%\imgi_4_*.jpg") do ren "%%f" "ps-photo-007-primary.jpg"

:: imgi_1 is the logo PNG — already in place, no rename needed

echo Done! All photos renamed to ps-photo-00X-primary.jpg
echo.
echo Next step: replace data/rugs.ts with the new version from Claude.
pause
