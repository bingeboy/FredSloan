FredSloan
=========

<img src="http://jpmcgarrity.com/upload/fredsloan1.jpg" width="300" height="auto">

<h1>LESS Framework</h1>

LESS/CSS framework focusing on html5 semantics using minimal markup.


<h2>Installation Instructions</h2>
If you don't have Node running on your computer it is recommended to install NODE from HomeBrew.

<strong>Instructions for Installing Homebrew: </strong>
<code>
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
</code>
<strong>Instructions for Node: </strong>
<code>
$brew install node
</code>

<strong>Instructions for Node: </strong>
<code>
$brew install node
</code>

Grab this repo code and then run the following in the root director of the folder:
<code>
$git clone https://github.com/bingeboy/FredSloan.git
</code>

<!-- <code>
$express myProjectNameHere -c less
</code> -->
  

<strong>Install NPMs for Project</strong>
<p>
	Goto the root folder with "package.json"
</p>

Run: 
<code>
$npm install
</code>
This will grab all the npms required for the project.

<p>
Now start the project with 
<code>
$npm start
</code>

FredSloan should now be running on http://localhost:8000

<p>
The NPM's should auto install with first command above.
After the start command has run can open your browser and open: http://localhost:8000/ 


<p>
	Supervisor is setup to run in the package file.
<code>
$npm start
</code> 
Will default to supervisor and log errors and auto refresh page when any project files have been updated.

<h5>File Watchers</h5>
If you used wstorm as an IDE you can create watchers for JADE and LESS.
http://www.jetbrains.com/webstorm/webhelp/using-file-watchers.html

Basically point the watcher to the NPMs. I recommend installing express, jade, less, supervisor NPM's globally.


<h2>Authors</h2>

<p>
<strong>Kenny Jackson</strong>, kenneth@whoiskenjackson.com currently working at Victoria's Secret. Kenny's site can be found here: <a href="whoiskenjackson.com">http://whoiskenjackson.com</a>

<p>
<strong>JP McGarrity</strong>, design@jpmcgarrity.com, @bingeboy.

The MIT License (MIT)
 
Copyright (c) <year> <copyright holders>
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
