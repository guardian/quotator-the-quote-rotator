export class Quotator {

	constructor(data, batch, sectionColour, rotator) {

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
		this.database = data.sheets[batch]

		var sorted = self.database.sort(function(a, b){
		  return b.quote.length - a.quote.length;
		});


		//this.fontsizer(parseInt(sorted[0].quote))

		document.getElementById('quoteText').innerHTML = sorted[0].quote

		document.getElementById('quotePrompter').innerHTML = sorted[0].attribution

		var qh = document.getElementById('quotator').clientHeight;

		document.getElementById("quotator").style.minHeight = (qh + 75) + 'px'

		// Shuffle the deck
		//this.database.shuffle();

		if (rotator) {

			document.getElementById('getQuoteButton').onclick = function() {

				document.getElementById('quotePrompter').innerHTML = self.database[self.currQuote]['attribution'];

				document.getElementById('quoteText').innerHTML = self.database[self.currQuote]['quote'];

				(self.currQuote < self.database.length - 1) ? self.currQuote++ : self.currQuote = 0;

				//self.fontsizer(parseInt(self.database[self.currQuote]['quote'].length))

				
			};

			document.getElementById('getPrevQuote').onclick = function() {

				document.getElementById('quotePrompter').innerHTML = self.database[self.currQuote]['attribution'];

				document.getElementById('quoteText').innerHTML = self.database[self.currQuote]['quote'];

				(self.currQuote == 0) ? self.currQuote = self.database.length - 1 : self.currQuote--;

				//self.fontsizer(parseInt(self.database[self.currQuote]['quote'].length))

				
			};

		} else {

			setInterval(function() { 

				document.getElementById('quotePrompter').innerHTML = self.database[self.currQuote]['attribution'];

				document.getElementById('quoteText').innerHTML = self.database[self.currQuote]['quote'];

				(self.currQuote < self.database.length - 1) ? self.currQuote++ : self.currQuote = 0;

				//self.fontsizer(parseInt(self.database[self.currQuote]['quote'].length))
				console.log("Check")
				

			}, 8000);

		}

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