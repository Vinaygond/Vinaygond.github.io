# Build Resume.pdf from resume.tex using Tectonic.
# Usage: .\build-resume.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$TectonicDir = Join-Path $Root "tools"
$Tectonic = Join-Path $TectonicDir "tectonic.exe"
$TectonicUrl = "https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%400.15.0/tectonic-0.15.0-x86_64-pc-windows-msvc.zip"

if (-not (Test-Path $Tectonic)) {
    Write-Host "Downloading Tectonic..."
    New-Item -ItemType Directory -Force -Path $TectonicDir | Out-Null
    $Zip = Join-Path $TectonicDir "tectonic.zip"
    Invoke-WebRequest -Uri $TectonicUrl -OutFile $Zip
    Expand-Archive -Path $Zip -DestinationPath $TectonicDir -Force
    Remove-Item $Zip -Force
}

Set-Location $Root
Write-Host "Compiling resume.tex..."
& $Tectonic -X compile resume.tex --outdir .

if (-not (Test-Path (Join-Path $Root "Resume.pdf"))) {
    throw "Compile finished but Resume.pdf was not created."
}

$Info = Get-Item (Join-Path $Root "Resume.pdf")
Write-Host "Done: Resume.pdf ($([math]::Round($Info.Length / 1KB, 1)) KB)"
Write-Host "Next: git add resume.tex Resume.pdf && git commit -m 'Update resume' && git push"