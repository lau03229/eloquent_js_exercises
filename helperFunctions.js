function show(func) {
	console.log(func);
}

function forEach(array, action) {
 for (var i = 0; i < array.length; i++)
   action(array[i]);
}

function reduce(combine, base, array) {
  forEach(array, function (element) {
    base = combine(base, element);
  });
  return base;
}

function add(a, b) {
  return a + b;
}

function sum(numbers) {
  return reduce(add, 0, numbers);
}

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

function count(test, array) {
	return reduce(function(total, element) {
		return total + (test(element) ? 1 : 0);
	}, 0, array);
}

function equals(x) {
	return function(element) {return x === element;};
}

function countZeroes(array) {
	return count(equals(0), array);
}

function recluseFile() {
  return "% The Book of Programming\n\n%% The Two Aspects\n\nBelow the surface of the machine, the program moves. Without effort,\nit expands and contracts. In great harmony, electrons scatter and\nregroup. The forms on the monitor are but ripples on the water. The\nessence stays invisibly below.\n\nWhen the creators built the machine, they put in the processor and the\nmemory. From these arise the two aspects of the program.\n\nThe aspect of the processor is the active substance. It is called\nControl. The aspect of the memory is the passive substance. It is\ncalled Data.\n\nData is made of merely bits, yet it takes complex forms. Control\nconsists only of simple instructions, yet it performs difficult\ntasks. From the small and trivial, the large and complex arise.\n\nThe program source is Data. Control arises from it. The Control\nproceeds to create new Data. The one is born from the other, the\nother is useless without the one. This is the harmonious cycle of\nData and Control.\n\nOf themselves, Data and Control are without structure. The programmers\nof old moulded their programs out of this raw substance. Over time,\nthe amorphous Data has crystallised into data types, and the chaotic\nControl was restricted into control structures and functions.\n\n%% Short Sayings\n\nWhen a student asked Fu-Tzu about the nature of the cycle of Data and\nControl, Fu-Tzu replied 'Think of a compiler, compiling itself.'\n\nA student asked 'The programmers of old used only simple machines and\nno programming languages, yet they made beautiful programs. Why do we\nuse complicated machines and programming languages?'. Fu-Tzu replied\n'The builders of old used only sticks and clay, yet they made\nbeautiful huts.'\n\nA hermit spent ten years writing a program. 'My program can compute\nthe motion of the stars on a 286-computer running MS DOS', he proudly\nannounced. 'Nobody own a 286-computer or uses MS DOS anymore.', Fu-Tzu\nresponded.\n\nFu-Tzu had written a small program that was full of global state and\ndubious shortcuts. Reading it, a student asked 'You warned us against\nthese techniques, yet I find them in your program. How can this be?'\nFu-Tzu said 'There is no need to fetch water hose when the house is\nnot on fire.'{This is not to be read as an encouragement of sloppy\nprogramming, but rather as a warning against neurotic adherence to\nrules of thumb.}\n\n%% Wisdom\n\nA student was complaining about digital numbers. 'When I take the root\nof two and then square it again, the result is already inaccurate!'.\nOverhearing him, Fu-Tzu laughed. 'Here is a sheet of paper. Write down\nthe precise value of the square root of two for me.'\n\nFu-Tzu said 'When you cut against the grain of the wood, much strength\nis needed. When you program against the grain of a problem, much code\nis needed.'\n\nTzu-li and Tzu-ssu were boasting about the size of their latest\nprograms. 'Two-hundred thousand lines', said Tzu-li, 'not counting\ncomments!'. 'Psah', said Tzu-ssu, 'mine is almost a *million* lines\nalready.' Fu-Tzu said 'My best program has five hundred lines.'\nHearing this, Tzu-li and Tzu-ssu were enlightened.\n\nA student had been sitting motionless behind his computer for hours,\nfrowning darkly. He was trying to write a beautiful solution to a\ndifficult problem, but could not find the right approach. Fu-Tzu hit\nhim on the back of his head and shouted '*Type something!*' The student\nstarted writing an ugly solution. After he had finished, he suddenly\nunderstood the beautiful solution.\n\n%% Progression\n\nA beginning programmer writes his programs like an ant builds her\nhill, one piece at a time, without thought for the bigger structure.\nHis programs will be like loose sand. They may stand for a while, but\ngrowing too big they fall apart{Referring to the danger of internal\ninconsistency and duplicated structure in unorganised code.}.\n\nRealising this problem, the programmer will start to spend a lot of\ntime thinking about structure. His programs will be rigidly\nstructured, like rock sculptures. They are solid, but when they must\nchange, violence must be done to them{Referring to the fact that\nstructure tends to put restrictions on the evolution of a program.}.\n\nThe master programmer knows when to apply structure and when to leave\nthings in their simple form. His programs are like clay, solid yet\nmalleable.\n\n%% Language\n\nWhen a programming language is created, it is given syntax and\nsemantics. The syntax describes the form of the program, the semantics\ndescribe the function. When the syntax is beautiful and the semantics\nare clear, the program will be like a stately tree. When the syntax is\nclumsy and the semantics confusing, the program will be like a bramble\nbush.\n\nTzu-ssu was asked to write a program in the language called Java,\nwhich takes a very primitive approach to functions. Every morning, as\nhe sat down in front of his computer, he started complaining. All day\nhe cursed, blaming the language for all that went wrong. Fu-Tzu\nlistened for a while, and then reproached him, saying 'Every language\nhas its own way. Follow its form, do not try to program as if you\nwere using another language.'\n";
}

function between(string, start, end) {
  var startAt = string.indexOf(start) + start.length;
  var endAt = string.indexOf(end, startAt);
  return {text: string.slice(startAt, endAt), 
          lastPos: endAt};
}
