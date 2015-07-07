# minimalist-react-boilerplate
for teaching or learning react

## react/jsx
This is a bare-minimum skeleton for making a beginner single page app in Facebook's React framework. I'm writing this readme for people who want to learn react but might be overwhelmed by node dev tools like npm, grunt, gulp, bower, yeoman, etc.

Maybe you're coming from the railsy world of conventions, and that chaos can be noisy when all you want to do is learn some trendy JS frameworks. You can use this skeleton to make a noise-free app where all you are worrying about learning is the pure react stuff.

My opinionated assumption here is that you want to write your components in the [vastly superior jsx style](https://facebook.github.io/react/docs/jsx-in-depth.html), and that you're also just coming to this from an intermediate or beginner JS background. None of the ES6 stuff or coffeescript is included. Theres also no nonsense about [Flux](https://facebook.github.io/flux/docs/overview.html) because honestly, I don't have a clue either.

Your react components will go in the src/components directory, and the top level component is to be rendered in app.js. Obviously, you'll want to eventually change/remove the HelloWorld component but leave it until you get gulp set up.

## setting up
Here <tt>npm</tt> is going to be your <tt>bundle</tt>. You'll also need <tt>gulp</tt> to handle all the yak-shaving.

Make sure you've got gulp or run this:

```
npm install --global gulp
```

Then run this code to get up and going:

```
npm install
gulp serve
```

You should see a hello world and something that says your .jsx was transformed. Congrats! You can stop here unless you want to know how the gulp task works.

## gulpfile explained
Gulp is a task runner. If you're coming from the ruby/rails world, think <tt>rake</tt>. Gulp is going to be your <tt>rails server</tt> or <tt>shotgun</tt> here.

If you're coming from rails, there's a missing level of abstraction in this kind of project. The magic is more visible. Gulp is going to parse your files, transform the .jsx syntax specific to react, concatenate all your files, and finally put them in a folder called dist (short for distribution ie production code).

Highly recomend checking out the gulpfile.js if you want to learn how these work. These tasks are run by:

```
gulp <task_name>
```

Included tasks:
* <tt>browserify</tt> - does the work of transforming your .jsx into js, then packages all the JS into one file that is then available in the DOM
* <tt>open</tt> - runs a super simple server and serves your index.html file
* <tt>connect</tt> - live reload for the server
* <tt>js</tt> - live reload for the js
* <tt>html</tt> - live reload for the html
* <tt> watch </tt> - watches all your code for changes to trigger reloads or browserfys
* default aka just <tt> gulp </tt> - shortcut for browserify
* <tt> serve </tt> - shortcut for calling all of the above tasks
