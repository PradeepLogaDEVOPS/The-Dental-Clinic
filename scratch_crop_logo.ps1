Add-Type -AssemblyName System.Drawing
$filePath = "C:\Users\pradeep\.gemini\antigravity\scratch\the-dental-clinics\src\assets\logo.png"
$bmp = New-Object System.Drawing.Bitmap($filePath)
$w = $bmp.Width
$h = $bmp.Height
Write-Host "Width: $w, Height: $h"

$minX = $w
$maxX = 0
$minY = $h
$maxY = 0

for ($y = 0; $y -lt $h; $y += 2) {
    for ($x = 0; $x -lt $w; $x += 2) {
        $c = $bmp.GetPixel($x, $y)
        # Check if non-white and non-transparent
        if ($c.A -gt 10 -and ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240)) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Bounding Box - MinX: $minX, MaxX: $maxX, MinY: $minY, MaxY: $maxY"
$cropW = $maxX - $minX + 1
$cropH = $maxY - $minY + 1
Write-Host "Cropped Width: $cropW, Cropped Height: $cropH"

if ($cropW -gt 0 -and $cropH -gt 0 -and ($minX -gt 5 -or $minY -gt 5 -or ($w - $maxX) -gt 5 -or ($h - $maxY) -gt 5)) {
    $rect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $cropped.Save("C:\Users\pradeep\.gemini\antigravity\scratch\the-dental-clinics\src\assets\logo-cropped.png")
    $cropped.Save("C:\Users\pradeep\.gemini\antigravity\scratch\the-dental-clinics\public\logo-cropped.png")
    $cropped.Dispose()
    Write-Host "Cropped logo saved successfully!"
}
$bmp.Dispose()
