@echo off
:: Array of all shadcn component names
set components=accordion alert alert-dialog aspect-ratio avatar badge button calendar card carousel checkbox collapsible command context-menu dialog drawer dropdown-menu form hover-card input label menubar navigation-menu popover progress radio-group scroll-area select separator sheet skeleton slider switch table tabs textarea toast toggle tooltip

:: Function to install a component
:install_component
set component=%1
echo Installing %component%...
npx shadcn@latest add %component%
goto :eof

:: Main installation loop
for %%C in (%components%) do call :install_component %%C

echo All shadcn components have been installed successfully!
pause
