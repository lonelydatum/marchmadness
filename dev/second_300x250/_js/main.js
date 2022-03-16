


import {init, olg, size, chev, bbSecond, bb2} from '../../_common/js/common.js'



function start(){
	const tl = bbSecond()	
	


	tl.from(".proline-end",  {duration:.3, opacity:0}, "+=.2")
	
	tl.add(bb2())

}



start()



module.exports = {};

