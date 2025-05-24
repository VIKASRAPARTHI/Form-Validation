@echo off
echo 🚀 Starting deployment process...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Run build
echo 🔨 Building application...
npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build successful!

REM Check if Vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 📥 Installing Vercel CLI...
    npm install -g vercel
)

REM Deploy to Vercel
echo 🚀 Deploying to Vercel...
vercel --prod

if %errorlevel% equ 0 (
    echo 🎉 Deployment successful!
    echo 📱 Your app is now live on Vercel!
) else (
    echo ❌ Deployment failed
    echo 💡 Try running 'vercel login' first, then run this script again
)

pause
