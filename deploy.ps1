# Change to frontend directory
Set-Location -Path ".\project files\Frontend"

Write-Host "📦 Building the frontend..."
npm run build

# Go back to root
Set-Location -Path "..\.."

# Clear existing docs folder
Write-Host "🧹 Cleaning docs folder..."
Remove-Item -Recurse -Force .\docs\* 

# Copy new build into docs
Write-Host "📁 Copying new build to docs..."
Copy-Item -Recurse -Force ".\project files\Frontend\dist\*" .\docs\

# Stage changes
Write-Host "📂 Staging changes..."
git add docs

# Commit with a timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "🚀 Deploy update on $timestamp"

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..."
git push origin main

Write-Host "`n✅ Deployment Complete! Check your site at: https://mounikakunapareddy01.github.io/BookStore/"
