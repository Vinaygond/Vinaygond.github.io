# Run npm ci and npx playwright install chromium before the first build.
$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    & node scripts/build-resume.cjs
    if ($LASTEXITCODE -ne 0) { throw 'Resume generation failed.' }
} finally {
    Pop-Location
}
