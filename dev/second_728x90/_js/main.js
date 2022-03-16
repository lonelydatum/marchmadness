import {init, olg, size, chev, bb, bb2, READ, SECOND} from '../../_common/js/common.js'



function start(){
	TweenLite.set([".bring" ], {
		transformOrigin:`${size.w}px ${size.h}px`,
		x: -size.w/2,
		y: -size.h/2,
		scale: .5
	})

	const tl = init()
	


	tl.from(".o",  {duration:.3, opacity:0}, "+=.2")
	tl.from(".proline", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".proline", {duration:.25, opacity:0}, "+=1")
	tl.from(".t1a", {duration:.25, opacity:0}, "+=.1")
	tl.to(".t1a", {duration:.25, opacity:0}, `+=${SECOND.t1}`)


	tl.from(".t1b", {duration:.25, opacity:0}, "+=.1")
	tl.to(".t1b", {duration:.25, opacity:0}, `+=${SECOND.t2}`)


	tl.from(".bring", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".bring", {duration:.25, opacity:0}, "+=1")

	tl.from(".proline-end", {duration:.25, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.25, opacity:0}, "+=.5")
	tl.to(".t2", {duration:.25, opacity:0}, `+=${READ.t2}`)

	tl.from(".cta", {duration:.25, opacity:0}, "+=.3")
	
	
	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")

}



start()



module.exports = {};

