# autogenerate-database-enums
Autogenerates enums from database (.NET). Maps selected db-tables to ID / KeyName pairs in C# enums as well as js objects.

Offers a stable ability hard-code special cases tied to IDs in your database, frontend and backend. View the /Examples folder to see how database tables are mapped to generated .js and .cs files.

## To use in your project
Copy the /DatabaseEnums folder into your project and apply the following customization:

__1. Settings.include.tt__
  - Edit connectionString
  - Edit tableInfoList to include desired enums

__2. dblookup.bat__
  - Edit the relative folder paths in dblookup.bat
  - If your installation of VisualStudio differs: Edit the TextTransform.exe absolute path

__3. If using npm:__
  - Add the package.json script: "scripts": { "dblookup": "dblookup.bat" }
  - Move the dblookup.bat file into the same folder as package.json
  - Remember to reset all relative paths of dblookup.bat

__3. General Notes:__
  - In dblookup.bat: %~dp0 = path to the folder of the dblookup.bat
  - Run dblookup.bat to execute the .tt files generation and copy the output files to your desired locations
  - Debuging of the .tt files is possible if opening them in Visual Studio
  - Don't be afraid to edit the .tt files:
    - You may not need the displayName atribute
    - You may want to add a optional description
    - You may want to edit the .js output format or add .ts output
