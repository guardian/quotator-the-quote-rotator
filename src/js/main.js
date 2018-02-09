import reqwest from 'reqwest'
import mainHTML from './text/main.html!text'
import { Quotator } from './modules/quote'

export function init(el, context, config, mediator) {

  	el.innerHTML = mainHTML;

    var ssKey = '10BgANXZNjJ13P1XRDll5JCY-mqmstIwzsEO4gwbDeh0' ;

    var batch = 'Sheet1' ;

    var sectionColour = '#ad0006' ;

    var rotator = false ;

	reqwest({
	  url: 'https://interactive.guim.co.uk/docsdata-test/' + ssKey + '.json',
	  type: 'json',
	  crossOrigin: true,
	  success: (resp) =>  { 
	  	handleData(resp, batch, sectionColour, rotator) 
	  }
	});
    
}

function handleData(data, batch, sectionColour, rotator) {
  var quote = new Quotator(data, batch, sectionColour, rotator)
}