


import {init, olg, size, chev} from '../../_common/js/common.js'

const tl = init()

tl.from(".o", {duration:.3, scale:1, ease:'back.out', opacity:0}, "+=.2")
tl.add("proline", "+=.4")
tl.from(".o-shadow", {duration:.1, opacity:0}, "proline")
tl.from(".proline", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "proline")

tl.to(".proline", {duration:.2, opacity:0}, "+=1")

tl.add("t1-in")
tl.from(".t1a", {x:`-${size.w}`, duration:.2}, "t1-in")
tl.from(".t1b", {x:size.w, duration:.2}, "t1-in")

tl.add("f1-out", "+=2.2")
tl.to(".t1a", {x:`-${size.w}`, duration:.3}, "f1-out")
tl.to(".t1b", {x:size.w, duration:.3}, "f1-out")
tl.to([".o-shadow", ".proline", ".o"], {duration:.1, opacity:0}, "f1-out")

tl.from(".bring",  {duration:.25, x:"-=100", opacity:0})
tl.add(chev())


tl.from(".t2",  {duration:.3, opacity:0}, "+=.3")
tl.to(".t2",  {duration:.3, opacity:0}, "+=2.7")


tl.add("cta", "+=.2")
tl.from(".end",  {duration:.3, opacity:0}, "cta")
tl.from(".cta",  {duration:.3, opacity:0}, "cta")

tl.add("end", "+=.3")
tl.add(olg(), "end")
tl.from(".footer",  {duration:.5, opacity:0}, "end")






module.exports = {};

