import reqwest from 'reqwest'
import mainHTML from './text/main.html!text'
import { Quotator } from './modules/quote'

export function init(el, context, config, mediator) {

  	el.innerHTML = mainHTML;

  	var ssKey = "1uQioCaW7on919nLfs7T7Fpiy3tygPmwHfO5Y-H42zxU";

	reqwest({
	  url: 'https://interactive.guim.co.uk/docsdata/' + ssKey + '.json',
	  type: 'json',
	  crossOrigin: true,
	  success: (resp) =>  { 
	  	handleData(resp) 
	  }
	});
    
}

function handleData(data) {
  var quote = new Quotator(data)
}