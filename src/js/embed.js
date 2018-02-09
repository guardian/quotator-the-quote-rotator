import iframeMessenger from 'guardian/iframe-messenger'
import reqwest from 'reqwest'
import embedHTML from './text/embed.html!text'
import { Quotator } from './modules/quote'

window.init = function init(el, config) {

    iframeMessenger.enableAutoResize();
    
    el.innerHTML = embedHTML;

    var urlParams; 
    var params = {};

    urlParams = window.location.search.substring(1).split('&');
    
    urlParams.forEach(function(param){
     
        if (param.indexOf('=') === -1) {
            params[param.trim()] = true;
        } else {
            var pair = param.split('=');
            params[ pair[0] ] = pair[1];
        }
        
    });

    var ssKey = (params.key) ? params.key : '10BgANXZNjJ13P1XRDll5JCY-mqmstIwzsEO4gwbDeh0' ;

    var batch = (params.batch) ? params.batch : 'Sheet1' ;

    var sectionColour = (params.section) ? params.section : '#ad0006' ;

    var rotator = (params.rotator) ? true : false ;

	reqwest({
	  url: 'https://interactive.guim.co.uk/docsdata-test/' + ssKey + '.json', //https://interactive.guim.co.uk/docsdata/1uQioCaW7on919nLfs7T7Fpiy3tygPmwHfO5Y-H42zxU.json
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