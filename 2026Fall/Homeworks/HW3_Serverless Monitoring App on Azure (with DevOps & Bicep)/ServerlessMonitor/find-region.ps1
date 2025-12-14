# find-region.ps1 - Clean Version

$regions = @("francecentral", "germanywestcentral", "norwayeast", "uksouth", "switzerlandnorth", "koreacentral", "southafricanorth")

Write-Host "Starting Region Search..." -ForegroundColor Cyan

foreach ($loc in $regions) {
    $rgName = "MonitorApp-$loc"
    Write-Host "`n-------------------------------------------"
    Write-Host "Testing Region: $loc" -ForegroundColor Yellow

    Write-Host "   Creating Resource Group ($rgName)..."
    try {
        # Check if RG exists, if not create
        $exists = az group show --name $rgName --output none 2>$null
        if ($LASTEXITCODE -ne 0) {
             az group create --name $rgName --location $loc --output none 2>$null
        }
    }
    catch {
        Write-Host "   FAILED to create RG. Skipping." -ForegroundColor Red
        continue
    }

    Write-Host "   Deploying Bicep Template..."

    # Run deployment and capture output
    # Using --no-wait might hide errors, so we wait.
    az deployment group create --resource-group $rgName --template-file infra/main.bicep --parameters location=$loc --output none 2>$null

    if ($LASTEXITCODE -eq 0) {
        Write-Host "`nSUCCESS!" -ForegroundColor Green
        Write-Host "Working Region: $loc" -ForegroundColor Green
        Write-Host "Resource Group: $rgName" -ForegroundColor Green
        exit 0
    } else {
        Write-Host "   Deployment FAILED (Quota or other error)." -ForegroundColor Red
    }
}

Write-Host "`nSorry, no working region found." -ForegroundColor Red
