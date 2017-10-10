export class Quotator {

	constructor(data) {

		var self = this

		this.currQuote = 0

		Array.prototype.shuffle = function() {
		  let m = this.length, i;
		  while (m) {
		    i = (Math.random() * m--) >>> 0;
		    [this[m], this[i]] = [this[i], this[m]]
		  }
		  return this;
		}

		// Create the database
		this.database = data.sheets.Sheet1

		// Set the headline from the first field before you randomize
		document.getElementById('quotePrompter').innerHTML = this.database[0]['headline']

		// Shuffle the deck
		this.database.shuffle();

		this.fontsizer(parseInt(this.database[this.currQuote]['comments'].length))

		document.getElementById('quoteText').innerHTML = self.database[self.currQuote]['comments']

		document.getElementById('getQuoteButton').onclick = function() {

			(self.currQuote < self.database.length - 1) ? self.currQuote++ : self.currQuote = 0;

			self.fontsizer(parseInt(self.database[self.currQuote]['comments'].length))

			document.getElementById('quoteText').innerHTML = self.database[self.currQuote]['comments']
		};

		document.getElementById('getPrevQuote').onclick = function() {

			(self.currQuote == 0) ? self.currQuote = self.database.length - 1 : self.currQuote--;

			self.fontsizer(parseInt(self.database[self.currQuote]['comments'].length))

			document.getElementById('quoteText').innerHTML = self.database[self.currQuote]['comments']
		};

	}

	fontsizer(char) {

	    var fontsize;
	    
	    if ((char >= 1) && (char < 10)) {
	        fontsize = 36
	    }
	    else if ((char >= 10) && (char < 20)) {
	        fontsize = 32
	    }
	    else if ((char >= 20) && (char < 80)) {
	        fontsize = 28
	    }
	    else if ((char >= 80) && (char < 120)) {
	        fontsize = 24
	    }
	    else {
	        fontsize = 20
	    }    

	    document.getElementById("quoteText").style.fontSize = fontsize + "px";

	}

}