## Advanced Linux Commands, Piping, Redirection, and Bash Scripting

### 1.1 Advanced Linux Commands

These commands help automate tasks and manage system operations more efficiently.

- **grep**: Search for patterns in files.
  - *Example*: `grep "pattern" filename` → Finds the word "pattern" in the file.

- **find**: Locate files and directories.
  - *Example*: `find /home -name "file.txt"` → Find file.txt in /home.

- **tar**: Archive and extract files.
  - *Example*:
    - Archive: `tar -cvf archive.tar file1 file2`
    - Extract: `tar -xvf archive.tar`

- **awk**: Text processing in files.
  - *Example*: `awk '{print $1}' file.txt` → Prints the first column.

- **sed**: Stream editor for text substitution.
  - *Example*: `sed 's/old/new/' file.txt` → Replaces "old" with "new" in the file.

- **top / htop**: Display system processes.
  - Use htop for a user-friendly, colorful interface.

### 1.2 Piping and Redirection

#### Piping (|)
Pass the output of one command as input to another.
- *Example*: `ls -l | grep ".txt"` → List only .txt files.

#### Redirection
Send output or input to/from files:
- `>`: Overwrite output to a file
  - *Example*: `echo "Hello" > file.txt` → Writes "Hello" to file.txt.
- `>>`: Append output to a file
  - *Example*: `echo "World" >> file.txt` → Adds "World" to file.txt.
- `<`: Input redirection
  - *Example*: `sort < file.txt` → Sorts the contents of file.txt.

### 1.3 Introduction to Bash Scripting

#### What is Bash Scripting?
Automating repetitive tasks in Linux. Bash scripts are sequences of Linux commands stored in a file.

#### Creating a Bash Script
1. Open a file: `nano script.sh`
2. Add the shebang:
   ```bash
   #!/bin/bash
   echo "Hello, World!"
   ```
3. Save and close the file.
4. Make it executable: `chmod +x script.sh`
5. Run the script: `./script.sh`

#### Variables in Bash
```bash
#!/bin/bash
name="CyberTeam"
echo "Welcome to $name's Masterclass!"
```

#### Conditionals
```bash
#!/bin/bash
if [ -f "file.txt" ]; then
    echo "File exists"
else
    echo "File does not exist"
fi
```

#### Loops
```bash
#!/bin/bash
for i in {1..5}; do
    echo "Number $i"
done
```
---
