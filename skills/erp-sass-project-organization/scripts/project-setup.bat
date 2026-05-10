@echo off
REM ERP/SaaS Project Setup Script
REM Initializes new project structure with proper organization

setlocal enabledelayedexpansion

echo ========================================
echo ERP/SaaS Project Setup
echo ========================================
echo.

REM Parse arguments
set "PROJECT_TYPE=erp"
set "TENANT_MODE=single"
set "FRAMEWORK=typescript"

:parse_args
if "%~1"=="" goto :end_parse
if "%~1"=="--type" (
    set "PROJECT_TYPE=%~2"
    shift
    shift
    goto :parse_args
)
if "%~1"=="--tenant" (
    set "TENANT_MODE=%~2"
    shift
    shift
    goto :parse_args
)
if "%~1"=="--framework" (
    set "FRAMEWORK=%~2"
    shift
    shift
    goto :parse_args
)
if "%~1"=="--help" (
    echo Usage: project-setup.bat [options]
    echo.
    echo Options:
    echo   --type ^<erp^|saas^|enterprise^>  Project type (default: erp)
    echo   --tenant ^<single^|multi^>         Tenant mode (default: single)
    echo   --framework ^<typescript^|php^>   Framework (default: typescript)
    echo   --help                          Show this help
    goto :end
)
shift
goto :parse_args

:end_parse

REM Validate arguments
if not "%PROJECT_TYPE%"=="erp" if not "%PROJECT_TYPE%"=="saas" if not "%PROJECT_TYPE%"=="enterprise" (
    echo Error: Invalid project type. Use erp, saas, or enterprise.
    goto :end
)

if not "%TENANT_MODE%"=="single" if not "%TENANT_MODE%"=="multi" (
    echo Error: Invalid tenant mode. Use single or multi.
    goto :end
)

REM Create base structure
echo Creating base project structure...
call :create_dir apps
call :create_dir packages
call :create_dir modules
call :create_dir shared
call :create_dir scripts

REM Create apps structure
echo Creating applications structure...
if "%PROJECT_TYPE%"=="erp" call :create_dir apps\erp
if "%PROJECT_TYPE%"=="saas" call :create_dir apps\saas
call :create_dir apps\api
call :create_dir apps\admin

REM Create packages structure
echo Creating shared packages structure...
call :create_dir packages\ui
call :create_dir packages\utils
call :create_dir packages\types
call :create_dir packages\config

REM Create modules structure (ERP-specific)
echo Creating business modules structure...
call :create_dir modules\inventory
call :create_dir modules\sales
call :create_dir modules\accounting
call :create_dir modules\customers
call :create_dir modules\products

REM Create shared structure
echo Creating shared concerns structure...
call :create_dir shared\auth
call :create_dir shared\logging
call :create_dir shared\config
call :create_dir shared\middleware

REM Create module templates
echo Creating module templates...
call :create_dir modules\inventory\ui
call :create_dir modules\inventory\lib
call :create_dir modules\inventory\api
call :create_dir modules\inventory\config
call :create_dir modules\inventory\tests

REM Create README files
echo Creating README files...
call :create_readme apps\README.md "Applications" "Main application entry points"
call :create_readme packages\README.md "Packages" "Shared packages and libraries"
call :create_readme modules\README.md "Modules" "Business domain modules"
call :create_readme shared\README.md "Shared" "Cross-cutting concerns"

REM Create configuration files
echo Creating configuration files...
call :create_config .eslintrc.json
call :create_config .prettierrc.json
call :create_config tsconfig.json

REM Summary
echo.
echo ========================================
echo Project setup complete!
echo ========================================
echo.
echo Project Type: %PROJECT_TYPE%
echo Tenant Mode: %TENANT_MODE%
echo Framework: %FRAMEWORK%
echo.
echo Next steps:
echo 1. Review modules/README.md for module structure
echo 2. Check scripts/ for automation tools
echo 3. See assets/templates/ for module templates
echo 4. Run module-validator.ps1 to check structure
echo.

:end
endlocal
exit /b 0

:create_dir
if not exist "%~1" mkdir "%~1"
exit /b 0

:create_readme
echo # %~2 > "%~1"
echo. >> "%~1"
echo %~3 >> "%~1"
echo. >> "%~1"
echo --- >> "%~1"
echo. >> "%~1"
exit /b 0

:create_config
echo { > "%~1"
echo   "version": "1.0.0", >> "%~1"
echo   "description": "Configuration file" >> "%~1"
echo } >> "%~1"
exit /b 0
