# Build Resume.pdf from resume.tex using Tectonic.
# Usage: .\build-resume.ps1

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

# Tectonic writes warnings to stderr; check exit code + output file instead.
$PrevEAP = $ErrorActionPreference
$ErrorActionPreference = "Continue"
& $Tectonic -X compile resume.tex --outdir .
$ExitCode = $LASTEXITCODE
$ErrorActionPreference = $PrevEAP

$Pdf = Join-Path $Root "Resume.pdf"
if ($ExitCode -ne 0 -or -not (Test-Path $Pdf)) {
    throw "Resume build failed (exit $ExitCode). Check resume.tex and re-run with --keep-logs."
}

$Info = Get-Item $Pdf
Write-Host "Done: Resume.pdf ($([math]::Round($Info.Length / 1KB, 1)) KB)"
Write-Host "Next: git add resume.tex Resume.pdf; git commit -m 'Update resume'; git push origin master"