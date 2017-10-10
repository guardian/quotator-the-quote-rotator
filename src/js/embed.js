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

    var ssKey = (params.key) ? params.key : '1uQioCaW7on919nLfs7T7Fpiy3tygPmwHfO5Y-H42zxU' ;

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