(this["webpackJsonpbattleship-game"]=this["webpackJsonpbattleship-game"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var r,a,i,o,s=n(1),c=n(25),l=n.n(c),u=n(5),d=n(13),h=n.n(d),b=n(16),p=n(7),m=n(6),f=n(42),j=n(2),x=Object(m.b)(f.a.div)(r||(r=Object(u.a)(["\n\tbackground: rgba(0, 0, 0, 0.6);\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tfont-family: Special Elite, sans-serif;\n\tfont-size: 1.4rem;\n\tcolor: var(--highlight-yellow);\n\n\tform {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\n\t\tbackground: var(--bg-blue);\n\n\t\twidth: 90%;\n\t\theight: 36.5rem;\n\t\tmax-width: 480px;\n\t\tpadding: 1.8rem 1rem;\n\n\t\tborder: 2px solid var(--highlight-yellow);\n\t\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\t\tborder-radius: 72px;\n\n\t\ttext-align: center;\n\n\t\ttransition: all 0.15s ease-out;\n\t}\n\n\tlabel {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tinput {\n\t\twidth: 83%;\n\t\tmax-width: 430px;\n\n\t\theight: 70%;\n\t\tmax-height: 2.5rem;\n\n\t\tpadding: 0 0.6rem;\n\t\tborder-radius: 5px;\n\n\t\tfont-size: 1.2rem;\n\n\t\tbackground: var(--fullwhite);\n\t}\n"]))),g=m.b.div(a||(a=Object(u.a)(["\n\tdisplay: grid;\n\tjustify-content: center;\n\tgrid-template: 1fr 1fr / 1fr 1fr;\n\tcolumn-gap: 1.8rem;\n\tmax-width: 100%;\n\n\t.forgotPasswordBtn {\n\t\tgrid-row: 2;\n\t\tgrid-column: 1 / 3;\n\t}\n\n\t.toggleLoginBtn {\n\t\tgrid-row: 2;\n\t\tgrid-column: 1 / 3;\n\t}\n\n\t.toggleSignUpBtn {\n\t\tgrid-row: 3;\n\t\tgrid-column: 1 / 3;\n\t}\n\n\t@media (max-width: 420px) {\n\t\tcolumn-gap: 0.2rem;\n\t}\n\n\tbutton {\n\t\tmargin-top: 1.7rem;\n\t\tpadding: 1.5rem 3.6rem;\n\t\tborder-radius: 38px;\n\t\tborder: 1px solid var(--highlight-yellow);\n\n\t\tbackground: var(--bg-blue);\n\t\tcolor: var(--highlight-yellow);\n\t\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\n\t\tfont-family: Special Elite, sans-serif;\n\t\tfont-size: 1.1rem;\n\t\tline-height: 0;\n\n\t\ttransition: all 150ms;\n\n\t\t:hover {\n\t\t\tbox-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);\n\t\t}\n\n\t\t:active {\n\t\t\tborder: 1px inset var(--highlight-yellow);\n\t\t\ttransform: scale(0.97);\n\t\t}\n\n\t\t@media (max-width: 420px) {\n\t\t\tfont-size: 1.1rem;\n\t\t\tpadding: 1.5rem 2rem;\n\t\t}\n\t}\n"])));function O(){var t=Object(s.useContext)(I),e=t.handleModalInputChange,n=t.emailInput,r=t.passwordInput,a=t.confirmPasswordInput,i=t.loadingRequest,o=t.handleSubmit,c=t.hasAccount,l=t.toggleLogin,u=t.passwordReset,d=t.togglePasswordReset,h={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}}},b={hidden:{opacity:0,scale:.6},visible:{opacity:1,scale:1,transition:{duration:.15,delay:.1}}};return u?Object(j.jsx)(x,{variants:h,initial:"hidden",animate:"visible",children:Object(j.jsxs)(f.a.form,{variants:b,style:{height:"20rem",maxWidth:"420px",justifyContent:"space-between"},children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email used:"}),Object(j.jsx)("input",{name:"email",type:"text",value:n,onChange:function(t){return e(t,"email")}}),Object(j.jsxs)(g,{children:[Object(j.jsx)("button",{type:"submit",disabled:i,onClick:function(t){return o(t,"resetPassword")},style:{gridRow:"1",gridColumn:"1/3"},children:"Reset Password"}),Object(j.jsx)("button",{className:"toggleLoginBtn",type:"button",onClick:d,children:"Go back to Log-in"})]})]})}):c?Object(j.jsx)(x,{variants:h,initial:"hidden",animate:"visible",children:Object(j.jsxs)(f.a.form,{variants:b,style:{height:"34rem"},children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{name:"email",type:"text",value:n,onChange:function(t){return e(t,"email")}}),Object(j.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(j.jsx)("input",{name:"password",type:"password",value:r,onChange:function(t){return e(t,"password")}}),Object(j.jsxs)(g,{children:[Object(j.jsx)("button",{type:"submit",disabled:i,onClick:function(t){return o(t,"login")},children:"Log-in"}),Object(j.jsx)("button",{type:"button",onClick:function(t){return o(t,"anonymous")},children:"Anonymous"}),Object(j.jsx)("button",{className:"forgotPasswordBtn",type:"button",onClick:d,children:"I forgot my password!"}),Object(j.jsx)("button",{className:"toggleSignUpBtn",type:"button",onClick:l,children:"Need an account?"})]})]})}):Object(j.jsx)(x,{variants:h,initial:"hidden",animate:"visible",children:Object(j.jsxs)(f.a.form,{variants:b,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{name:"email",type:"text",value:n,onChange:function(t){return e(t,"email")}}),Object(j.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(j.jsx)("input",{name:"password",type:"password",value:r,onChange:function(t){return e(t,"password")}}),Object(j.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password:"}),Object(j.jsx)("input",{name:"confirmPassword",type:"password",value:a,onChange:function(t){return e(t,"confirmPassword")}}),Object(j.jsxs)(g,{children:[Object(j.jsx)("button",{type:"submit",disabled:i,onClick:function(t){return o(t,"register")},children:"Register"}),Object(j.jsx)("button",{type:"button",onClick:function(t){return o(t,"anonymous")},children:"Anonymous"}),Object(j.jsx)("button",{className:"toggleLoginBtn",type:"button",onClick:l,children:"Already have an account?"})]})]})})}var v=Object(m.b)(f.a.div)(i||(i=Object(u.a)(["\n\tbackground: rgba(0, 0, 0, 0.6);\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tfont-family: Special Elite, sans-serif;\n\tfont-size: 1.4rem;\n\tcolor: var(--highlight-yellow);\n"]))),w=Object(m.b)(f.a.div)(o||(o=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\n\tbackground: var(--bg-blue);\n\n\twidth: 90%;\n\tmax-width: 810px;\n\tmax-height: 95%;\n\n\tpadding: 1.6rem 2rem;\n\n\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\tborder: 2px solid var(--highlight-yellow);\n\tborder-radius: 20px;\n\n\ttransition: all 0.15s ease-out;\n\n\th2 {\n\t\tfont-size: 1.7rem;\n\t\tline-height: 2.2rem;\n\n\t\tmargin-bottom: 0.8rem;\n\t\tpadding-top: 1rem;\n\t}\n\n\t.scoresContainer {\n\t\tflex: 1;\n\n\t\twidth: 100%;\n\n\t\toverflow-y: auto;\n\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.individualScore {\n\t\twidth: 100%;\n\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\tline-height: 2rem;\n\t\tpadding: 1rem 1rem 0.7rem 0;\n\t\tmargin-bottom: 0.5rem;\n\n\t\tborder-bottom: 1px solid var(--highlight-yellow);\n\t}\n\n\tbutton {\n\t\tmargin-top: 1.7rem;\n\t\tpadding: 1.5rem 3.6rem;\n\t\tborder-radius: 38px;\n\t\tborder: 1px solid var(--highlight-yellow);\n\n\t\tbackground: var(--bg-blue);\n\t\tcolor: var(--highlight-yellow);\n\t\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\n\t\tfont-family: Special Elite, sans-serif;\n\t\tfont-size: 1.1rem;\n\t\tline-height: 0;\n\n\t\ttransition: all 150ms;\n\n\t\t:hover {\n\t\t\tbox-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);\n\t\t}\n\n\t\t:active {\n\t\t\tborder: 1px inset var(--highlight-yellow);\n\t\t\ttransform: scale(0.97);\n\t\t}\n\n\t\t@media (max-width: 420px) {\n\t\t\tfont-size: 1.1rem;\n\t\t\tpadding: 1.5rem 2rem;\n\t\t}\n\t}\n"])));function y(){var t=Object(s.useContext)(I),e=t.toggleLeaderboards,n=t.savedDocs.map((function(t,e){return Object(j.jsxs)("div",{className:"individualScore",children:[Object(j.jsxs)("span",{children:[t.data().nickname,"'s Wins: ",t.data().score]}),Object(j.jsxs)("span",{children:["AI: ",t.data().scoreAI]})]},e)}));return Object(j.jsx)(v,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}}},initial:"hidden",animate:"visible",children:Object(j.jsxs)(w,{variants:{hidden:{opacity:0,scale:.6},visible:{opacity:1,scale:1,transition:{duration:.15,delay:.1}}},children:[Object(j.jsx)("h2",{children:"Battleship Leaderboards"}),Object(j.jsx)("div",{className:"scoresContainer",children:n}),Object(j.jsx)("button",{type:"button",onClick:e,children:"Close"})]})})}var k=n(29),S=(n(37),n(41),k.a.initializeApp({apiKey:"AIzaSyDPn8IA_FhKnY2MNa9K-_MqUdWUPXpkLE8",authDomain:"battleship-d0a52.firebaseapp.com",projectId:"battleship-d0a52",storageBucket:"battleship-d0a52.appspot.com",messagingSenderId:"battleship-d0a52.appspot.com",appId:"1:596484871324:web:4e4e7c7768202a1ea78959",measurementId:"G-C0EYKMYY4J"})),C=S.auth(),B=S.firestore();function P(t){var e=t,n=0;return{getName:function(){return e},getScore:function(){return n},incrementScore:function(){n++},setName:function(t){e=t},setScore:function(t){return n=t},resetScore:function(){n=0}}}var I=Object(s.createContext)({});function A(t){var e=t.children,n=Object(s.useState)({}),r=Object(p.a)(n,2),a=r[0],i=r[1],o=Object(s.useState)({}),c=Object(p.a)(o,2),l=c[0],u=c[1],d=Object(s.useState)(!1),m=Object(p.a)(d,2),f=m[0],x=m[1],g=Object(s.useState)(!0),v=Object(p.a)(g,2),w=v[0],k=v[1],S=Object(s.useState)(!0),A=Object(p.a)(S,2),W=A[0],R=A[1],E=Object(s.useState)(!1),N=Object(p.a)(E,2),M=N[0],L=N[1],z=Object(s.useState)(!1),F=Object(p.a)(z,2),H=F[0],Y=F[1],G=Object(s.useState)([]),J=Object(p.a)(G,2),T=J[0],U=J[1],D=Object(s.useState)(""),K=Object(p.a)(D,2),q=K[0],X=K[1],_=Object(s.useState)(""),Q=Object(p.a)(_,2),V=Q[0],Z=Q[1],$=Object(s.useState)(""),tt=Object(p.a)($,2),et=tt[0],nt=tt[1],rt=Object(s.useState)(!1),at=Object(p.a)(rt,2),it=at[0],ot=at[1],st=Object(s.useState)(!1),ct=Object(p.a)(st,2),lt=ct[0],ut=ct[1];function dt(){R(!W)}function ht(t,e){return e?B.collection(t).doc(e).get():B.collection(t).orderBy("score","desc").get()}function bt(t,e){return B.collection("leaderboards").doc(t).set(e)}function pt(){return(pt=Object(b.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=q.slice(0,q.indexOf("@")),t.prev=1,t.next=4,bt(q,{nickname:e,email:q,score:a.humanPlayer.getScore(),scoreAI:a.playerAI.getScore()});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.warn("Failed to save results...",t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}function mt(t){return ft.apply(this,arguments)}function ft(){return(ft=Object(b.a)(h.a.mark((function t(e){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ht("leaderboards",e);case 3:return n=t.sent,t.abrupt("return",{score:n.data().score,scoreAI:n.data().scoreAI});case 7:return t.prev=7,t.t0=t.catch(0),console.warn("(1) Failed to retrieve previous scores"),t.abrupt("return",{score:0,scoreAI:0});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function jt(){Y(!H)}function xt(){return(xt=Object(b.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return jt(),e=[],t.prev=2,t.next=5,ht("leaderboards");case 5:t.sent.docs.forEach((function(t){e.push(t)})),U(e),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(2),console.warn("Leaderboards failed to load"),t.abrupt("return");case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))).apply(this,arguments)}function gt(t,e){return C.createUserWithEmailAndPassword(t,e)}function Ot(t,e){return C.signInWithEmailAndPassword(t,e)}function vt(){return C.signOut()}function wt(t){return C.sendPasswordResetEmail(t)}function yt(){return(yt=Object(b.a)(h.a.mark((function t(e,n){var r,a,o,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),t.t0=n,t.next="register"===t.t0?4:"login"===t.t0?33:"anonymous"===t.t0?63:"resetPassword"===t.t0?72:84;break;case 4:if(!(q.search("@")<0)){t.next=7;break}return alert("Please, use a valid email"),t.abrupt("return");case 7:if(!(V.length<6)){t.next=10;break}return alert("Password must contain a minimum of 6 digits"),t.abrupt("return");case 10:if(V===et){t.next=13;break}return alert("Passwords do not match"),t.abrupt("return");case 13:return t.prev=13,x(!0),t.next=17,gt(q,V);case 17:t.next=24;break;case 19:return t.prev=19,t.t1=t.catch(13),alert(t.t1.message),x(!1),t.abrupt("return");case 24:return dt(),L(!0),x(!1),r=P("Player"),a=P("AI"),i(o={humanPlayer:r,playerAI:a}),kt(q,q),t.abrupt("break",86);case 33:return t.prev=33,x(!0),t.next=37,Ot(q,V);case 37:t.next=44;break;case 39:return t.prev=39,t.t2=t.catch(33),alert(t.t2.message),x(!1),t.abrupt("return");case 44:return dt(),L(!0),x(!1),r=P("Player"),a=P("AI"),o={humanPlayer:r,playerAI:a},t.prev=50,t.next=53,mt(q);case 53:s=t.sent,r.setScore(s.score),a.setScore(s.scoreAI),i(o),t.next=62;break;case 59:t.prev=59,t.t3=t.catch(50),console.warn("(2) Failed to retrieve scores");case 62:return t.abrupt("break",86);case 63:return dt(),L(!0),u({}),X(""),r=P("Player"),a=P("AI"),i(o={humanPlayer:r,playerAI:a}),t.abrupt("break",86);case 72:return t.prev=72,x(!0),t.next=76,wt(q);case 76:alert("Check your inbox for further instructions"),t.next=82;break;case 79:t.prev=79,t.t4=t.catch(72),alert("Failed to send email");case 82:return x(!1),t.abrupt("break",86);case 84:return console.warn("Something went wrong. Refresh the page!"),t.abrupt("break",86);case 86:case"end":return t.stop()}}),t,null,[[13,19],[33,39],[50,59],[72,79]])})))).apply(this,arguments)}function kt(t,e){return St.apply(this,arguments)}function St(){return(St=Object(b.a)(h.a.mark((function t(e,n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.slice(0,n.indexOf("@")),t.prev=1,t.next=4,bt(e,{nickname:r,email:n,score:0,scoreAI:0});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.warn("Failed to add reference to database");case 9:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}function Ct(){return(Ct=Object(b.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("anonymous"===e){t.next=10;break}return t.prev=1,t.next=4,vt();case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),alert("Failed to log out... Try again"),t.abrupt("return",!1);case 10:return L(!1),dt(),u({}),i({}),t.abrupt("return",!0);case 15:case"end":return t.stop()}}),t,null,[[1,6]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){var t=C.onAuthStateChanged((function(e){return u(e),k(!1),t}))}),[]),Object(j.jsxs)(I.Provider,{value:{emailInput:q,setEmailInput:X,passwordInput:V,setPasswordInput:Z,confirmPasswordInput:et,setConfirmPasswordInput:nt,passwordReset:lt,togglePasswordReset:function(){ut(!lt)},showModal:W,toggleModal:dt,hasAccount:it,toggleLogin:function(){ot(!it)},playersCtx:a,setPlayersCtx:i,showPage:M,currentUser:l,loadingRequest:f,handleSubmit:function(t,e){return yt.apply(this,arguments)},handleModalInputChange:function(t,e){"email"===e&&X(t.target.value),"password"===e&&Z(t.target.value),"confirmPassword"===e&&nt(t.target.value)},handleLogout:function(t){return Ct.apply(this,arguments)},toggleLeaderboards:jt,loadLeaderboards:function(){return xt.apply(this,arguments)},saveScores:function(){return pt.apply(this,arguments)},savedDocs:T},children:[!w&&e,W&&Object(j.jsx)(O,{}),H&&Object(j.jsx)(y,{})]})}var W,R=n(10),E=Object(m.b)(f.a.div)(W||(W=Object(u.a)(["\n\tbackground: rgba(0, 0, 0, 0.6);\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tfont-family: Special Elite, sans-serif;\n\tfont-size: 1.4rem;\n\tcolor: var(--highlight-yellow);\n\n\t.modal {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\talign-items: center;\n\n\t\tbackground: var(--bg-blue);\n\n\t\twidth: 90%;\n\t\theight: 18.7rem;\n\t\tmax-width: 470px;\n\t\tpadding: 2.5rem 1.1rem;\n\n\t\tborder: 2px solid var(--highlight-yellow);\n\t\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\t\tborder-radius: 60px;\n\t}\n\n\th1,\n\th2 {\n\t\tfont-size: 1.8rem;\n\t}\n\n\tbutton {\n\t\tmargin-top: 0.7rem;\n\t\tpadding: 1.5rem 3.6rem;\n\t\tborder-radius: 12px;\n\t\tborder: 1px solid var(--highlight-yellow);\n\n\t\tbackground: var(--bg-blue);\n\t\tcolor: var(--highlight-yellow);\n\t\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\n\t\tfont-family: Special Elite, sans-serif;\n\t\tfont-size: 1.2rem;\n\t\tline-height: 0;\n\n\t\ttransition: all 150ms;\n\n\t\t:hover {\n\t\t\tbox-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);\n\t\t}\n\n\t\t:active {\n\t\t\tborder: 1px inset var(--highlight-yellow);\n\t\t\ttransform: scale(0.97);\n\t\t}\n\t}\n"])));function N(){var t=Object(s.useContext)(X),e=t.resetGame,n=t.roundWinner;return Object(j.jsx)(E,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.2}}},initial:"hidden",animate:"visible",children:Object(j.jsxs)(f.a.div,{variants:{hidden:{opacity:0,scale:.6},visible:{opacity:1,scale:1,transition:{duration:.15,delay:.1}}},className:"modal",children:[Object(j.jsxs)("h1",{children:[n," Won!"]}),Object(j.jsx)("h2",{children:"Game Over!"}),Object(j.jsx)("button",{onClick:e,children:"Reset"})]})})}function M(){for(var t=[],e=0;e<10;e++){for(var n=[],r=0;r<10;r++)n.push({wasShot:!1});t.push(n)}return{getBoard:function(){return JSON.parse(JSON.stringify(t))},addShip:function(e,n,r,a){var i=0;switch(r){case"x":if(n+a[0].length>10)return null;for(var o=n;o<n+a[0].length;o++)if("shipBlock"in t[e][o])return null;i=0;for(var s=n;s<n+a[0].length;s++)t[e][s]={wasShot:!1,shipBlock:a[i],orientation:r},i++;break;case"y":if(e+a[0].length>10)return null;for(var c=e;c<e+a[0].length;c++)if("shipBlock"in t[c][n])return null;i=0;for(var l=e;l<e+a[0].length;l++)t[l][n]={wasShot:!1,shipBlock:a[i],orientation:r},i++;break;default:console.warn("Oops! Something went wrong!")}return t},makeShot:function(e,n){var r;return e>9||e<0||n>9||n<0||!0===t[e][n].wasShot?null:("shipBlock"in t[e][n]?(t[e][n].wasShot=!0,t[e][n].shipBlock.isHit=!0,r={shipLength:t[e][n].shipBlock.length,blockHit:t[e][n].shipBlock.block,isHit:t[e][n].shipBlock.isHit}):(t[e][n].wasShot=!0,r="water"),r)}}}function L(t){for(var e=[],n=0;n<t;n++)e.push({length:t,isHit:!1,block:n});var r={shipBlocks:e,isSunk:!1,takeHit:function(t){var e=Object(R.a)({},r);return e.shipBlocks[t].isHit=!0,e.shipBlocks.filter((function(t){return t.isHit})).length===e.shipBlocks.length?Object(R.a)(Object(R.a)({},r),{},{isSunk:!0}):e}};return r}function z(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}function F(){var t=z(0,1);return 0===t?"x":1===t?"y":void 0}function H(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}var Y,G,J,T,U,D,K,q,X=Object(s.createContext)({});function _(t){var e=t.children,n=Object(s.useContext)(I),r=n.playersCtx,a=n.setPlayersCtx,i=n.saveScores,o=n.currentUser,c=Object(s.useRef)(M()),l=Object(s.useState)(c.current.getBoard()),u=Object(p.a)(l,2),d=u[0],h=u[1],b=Object(s.useRef)(M()),m=Object(s.useState)(b.current.getBoard()),f=Object(p.a)(m,2),x=f[0],g=f[1],O=Object(s.useState)(!0),v=Object(p.a)(O,2),w=v[0],y=v[1],k=Object(s.useState)({}),S=Object(p.a)(k,2),C=S[0],B=S[1],P=Object(s.useRef)([L(1),L(2),L(3),L(4),L(5)]),A=Object(s.useRef)([L(1),L(2),L(3),L(4),L(5)]),W=Object(s.useState)(5),E=Object(p.a)(W,2),Y=E[0],G=E[1],J=Object(s.useState)(5),T=Object(p.a)(J,2),U=T[0],D=T[1],K=Object(s.useState)(!1),q=Object(p.a)(K,2),_=q[0],Q=q[1],V=Object(s.useState)(""),Z=Object(p.a)(V,2),$=Z[0],tt=Z[1],et=Object(s.useState)(0),nt=Object(p.a)(et,2),rt=nt[0],at=nt[1],it=Object(s.useState)(""),ot=Object(p.a)(it,2),st=ot[0],ct=ot[1],lt=Object(s.useState)("x"),ut=Object(p.a)(lt,2),dt=ut[0],ht=ut[1];function bt(){c.current=M(),h(c.current.getBoard()),b.current=M(),g(b.current.getBoard()),P.current=[L(1),L(2),L(3),L(4),L(5)],A.current=[L(1),L(2),L(3),L(4),L(5)],at(0),ct(""),y(!0),G(5),D(5),Q(!1),tt(""),B({})}return Object(s.useEffect)((function(){if(0===Y){Q(!0),tt("You");var t=Object(R.a)({},r);t.humanPlayer.incrementScore(),a(t),H(o)||i()}else if(0===U){Q(!0),tt(r.playerAI.getName());var e=Object(R.a)({},r);e.playerAI.incrementScore(),a(e),H(o)||i()}}),[Y,U]),Object(j.jsxs)(X.Provider,{value:{handleOrientationBtnClick:function(){ht("x"===dt?"y":"x")},handleResetBtnClick:function(){U<5?alert("Can't reset after your ships have been sunk!"):bt()},handleBoardClick:function(t,e,n){if(rt<5){if("AI"===t)return;if(!c.current.addShip(e,n,dt,P.current[rt].shipBlocks))return void alert("Oops! Can't place your ship there");for(var r=b.current.addShip(z(0,9),z(0,9),F(),A.current[rt].shipBlocks);!r;)r=b.current.addShip(z(0,9),z(0,9),F(),A.current[rt].shipBlocks);h(c.current.getBoard()),g(b.current.getBoard()),at((function(t){return t+1}))}else{if("AI"!==t||!w)return;var a,i,o=b.current.makeShot(e,n);if(null===o)return;if(y(!1),"water"===o)ct("Water! Your aim was off on that one.");else ct("That's a direct hit. Good job!"),A.current[o.shipLength-1].takeHit(o.blockHit).isSunk&&G((function(t){return t-1}));if(g(b.current.getBoard()),_)return;var s=!1,l=0;setTimeout((function(){return ct("Calculating next shot...")}),1200),setTimeout((function(){if("hitWaterColPlus"in C&&!C.hitWaterColPlus)for(;!s;)l++,i={row:C.row,col:C.col+l},((a=c.current.makeShot(i.row,i.col))||l>8)&&(s=!0),"water"!==a&&a||B(Object(R.a)(Object(R.a)({},C),{},{hitWaterColPlus:!0}));if("hitWaterColMinus"in C&&!C.hitWaterColMinus&&!a)for(s=!1,l=0;!s;)l++,i={row:C.row,col:C.col-l},((a=c.current.makeShot(i.row,i.col))||l>8)&&(s=!0),"water"!==a&&a||B(Object(R.a)(Object(R.a)({},C),{},{hitWaterColMinus:!0}));if("hitWaterRowPlus"in C&&!C.hitWaterRowPlus&&!a)for(s=!1,l=0;!s;)l++,i={row:C.row+l,col:C.col},((a=c.current.makeShot(i.row,i.col))||l>8)&&(s=!0),"water"!==a&&a||B(Object(R.a)(Object(R.a)({},C),{},{hitWaterRowPlus:!0}));if("hitWaterRowMinus"in C&&!C.hitWaterRowMinus&&!a)for(s=!1,l=0;!s;)l++,i={row:C.row-l,col:C.col},((a=c.current.makeShot(i.row,i.col))||l>8)&&(s=!0),"water"!==a&&a||B(Object(R.a)(Object(R.a)({},C),{},{hitWaterRowMinus:!0}));for(;!a;)i={row:z(0,9),col:z(0,9)},"water"===(a=c.current.makeShot(i.row,i.col))&&B({});if("water"===a)ct("You dodged that one. Water!");else{if(ct("Ouch. That's a hit!"),C.hitWaterRowPlus||C.hitWaterRowMinus)if(C.hitWaterRowPlus&&C.hitWaterColMinus)B({});else{var t=Object(R.a)({},C);t.row=i.row,t.col=i.col,B(t)}else if(C.hitWaterColPlus||C.hitWaterColMinus)if(C.hitWaterColPlus&&C.hitWaterRowMinus)B({});else{var e=Object(R.a)({},C);e.row=i.row,e.col=i.col,B(e)}else B({row:i.row,col:i.col,hitWaterRowPlus:!1,hitWaterRowMinus:!1,hitWaterColPlus:!1,hitWaterColMinus:!1});P.current[a.shipLength-1].takeHit(a.blockHit).isSunk&&D((function(t){return t-1}))}h(c.current.getBoard()),y(!0)}),2200)}},resetGame:bt,stateBoardHuman:d,stateBoardAI:x,counter:rt,display:st,roundWinner:$,orientation:dt},children:[e,_&&Object(j.jsx)(N,{})]})}var Q=m.b.div(Y||(Y=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\th2,\n\tspan {\n\t\tfont-family: Special Elite, sans-serif;\n\t\tfont-size: 1.4rem;\n\n\t\tcolor: var(--highlight-yellow);\n\n\t\tmargin-bottom: 1rem;\n\t}\n\n\tfooter {\n\t\twidth: 100%;\n\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\n\t\t.rotateBtn,\n\t\t.leaderboardsBtn {\n\t\t\tmargin: 1rem auto 0 auto;\n\t\t}\n\t}\n\n\tbutton {\n\t\tposition: relative;\n\n\t\tpadding: 1rem 2rem;\n\t\tmargin-top: 1rem;\n\t\tborder-radius: 38px;\n\t\tborder: 1px solid var(--highlight-yellow);\n\n\t\tbackground: var(--bg-blue);\n\t\tcolor: var(--highlight-yellow);\n\t\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\n\t\tfont-family: Special Elite, sans-serif;\n\t\tfont-size: 1.1rem;\n\t\tline-height: 0.7rem;\n\n\t\ttransition: all 150ms;\n\n\t\t:hover {\n\t\t\tbox-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.3);\n\t\t}\n\n\t\t:active {\n\t\t\tborder: 1px inset var(--highlight-yellow);\n\t\t\ttransform: scale(0.98);\n\t\t}\n\t}\n"]))),V=m.b.div(G||(G=Object(u.a)(["\n\tbox-shadow: 4px 7px 14px 5px rgba(0, 0, 0, 0.2);\n\tborder-radius: 3px;\n\n\t.row {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t}\n\n\t.col {\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t\tborder: 1px var(--light-black) solid;\n\n\t\tcursor: pointer;\n\n\t\tfont-family: Nunito, sans-serif;\n\t\tfont-size: 2.4rem;\n\t\ttext-align: center;\n\t\tline-height: 2rem;\n\n\t\ttransition: all 0.15s ease-out;\n\n\t\t/* not allowing text selection inside the board */\n\t\t-webkit-touch-callout: none; /* iOS Safari */\n\t\t-webkit-user-select: none; /* Safari */\n\t\t-khtml-user-select: none; /* Konqueror HTML */\n\t\t-moz-user-select: none; /* Old versions of Firefox */\n\t\t-ms-user-select: none; /* Internet Explorer/Edge */\n\t\tuser-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\n\t}\n"]))),Z=m.b.div(J||(J=Object(u.a)(["\n\tposition: absolute;\n\tright: -75px;\n\ttop: 50%;\n\n\twidth: 36px;\n\theight: 8px;\n\n\tborder: 1px solid var(--highlight-yellow);\n\n\tpointer-events: none;\n\n\ttransition: transform 0.2s ease;\n\n\t","\n"])),(function(t){return"x"===t.orientation?Object(m.a)(T||(T=Object(u.a)(["\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t"]))):Object(m.a)(U||(U=Object(u.a)(["\n\t\t\t\ttransform: translateY(-50%) rotate(90deg);\n\t\t\t"])))})),$=m.b.div(D||(D=Object(u.a)(["\n\tposition: absolute;\n\tleft: -70px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\n\twidth: 2rem;\n\theight: 2rem;\n\n\tborder: 1px var(--highlight-yellow) solid;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\ttransition: transform 0.7s cubic-bezier(0.32, -0.15, 0.47, 1.31);\n\n\tpointer-events: none;\n\n\t","\n\n\t&::after {\n\t\tcontent: '","';\n\n\t\ttransform: translateY(25%);\n\t}\n"])),(function(t){return"x"===t.orientation?Object(m.a)(K||(K=Object(u.a)(["\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t"]))):Object(m.a)(q||(q=Object(u.a)(["\n\t\t\t\ttransform: translateY(-50%) rotate(360deg);\n\t\t\t"])))}),(function(t){return t.counter+1}));var tt,et=function(t){var e,n=t.player,r=Object(s.useContext)(X),a=r.stateBoardHuman,i=r.stateBoardAI,o=r.handleBoardClick,c=r.handleOrientationBtnClick,l=r.handleResetBtnClick,u=r.resetGame,d=r.counter,h=r.orientation,b=Object(s.useContext)(I),p=b.emailInput,m=b.handleLogout,x=b.playersCtx,g=b.loadLeaderboards,O={hidden:{scale:.1,opacity:0},visible:{opacity:1,scale:1,transition:{duration:.18}}},v=a.map((function(t,e){return Object(j.jsx)("div",{row:e,className:"row",children:t.map((function(t,n){return Object(j.jsx)("div",{col:n,className:"col",shipblock:t.shipBlock?JSON.stringify(t.shipBlock):void 0,style:t.wasShot?t.shipBlock?{backgroundColor:"#183f57",color:"#ffc678"}:{backgroundColor:"#6baad1"}:t.shipBlock?{backgroundColor:"#183f57"}:{backgroundColor:"#ffc678"},onClick:function(t){o("human",e,n)},children:t.wasShot&&"X"},n)}))},e)})),w=i.map((function(t,e){return Object(j.jsx)("div",{row:e,className:"row",children:t.map((function(t,n){return Object(j.jsx)("div",{col:n,className:"col",shipblock:t.shipBlock?JSON.stringify(t.shipBlock):void 0,style:t.wasShot?t.shipBlock?{backgroundColor:"#183f57",color:"#ffc678"}:{backgroundColor:"#6baad1"}:{backgroundColor:"#ffc678"},onClick:function(){o("AI",e,n)},children:t.wasShot&&"X"},n)}))},e)}));return e=p.length>0?p.slice(0,p.indexOf("@")):"Anonymous","human"===n?Object(j.jsxs)(Q,{children:[Object(j.jsxs)("h2",{children:[e+": ",Object(j.jsx)("span",{children:x.humanPlayer&&x.humanPlayer.getScore()})]}),Object(j.jsx)(V,{children:v}),Object(j.jsx)(f.a.footer,{variants:{hidden:{x:"-30vh",opacity:0},visible:{opacity:1,x:0,transition:{type:"spring",duration:1,delay:2}},exit:{opacity:0,transition:{duration:.5}}},initial:"hidden",animate:"visible",exit:"exit",children:d<5?Object(j.jsxs)("button",{className:"rotateBtn",onClick:c,children:["rotate",Object(j.jsx)($,{orientation:h,counter:d}),Object(j.jsx)(Z,{orientation:h})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.a.button,{variants:O,initial:"hidden",animate:"visible",onClick:function(){m("anonymous")&&u()},children:"Log-Out"}),Object(j.jsx)(f.a.button,{variants:O,initial:"hidden",animate:"visible",onClick:l,children:"Reset"})]})})]}):"AI"===n?Object(j.jsxs)(Q,{children:[Object(j.jsxs)("h2",{children:["AI: ",Object(j.jsx)("span",{children:x.playerAI&&x.playerAI.getScore()})]}),Object(j.jsx)(V,{children:w}),Object(j.jsx)(f.a.footer,{variants:{hidden:{x:"30vh",opacity:0},visible:{opacity:1,x:0,transition:{type:"spring",duration:1,delay:2}},exit:{opacity:0,transition:{duration:.5}}},initial:"hidden",animate:"visible",exit:"exit",children:Object(j.jsx)("button",{className:"leaderboardsBtn",onClick:g,children:"Leaderboards"})})]}):void 0},nt=Object(m.b)(f.a.h1)(tt||(tt=Object(u.a)(["\n\tfont-family: Special Elite, sans-serif;\n\tfont-size: 1.6rem;\n\ttext-align: center;\n\n\tcolor: var(--highlight-yellow);\n\tmargin: 2rem 0;\n\tpadding-top: 1rem;\n\tmin-height: 3.9rem;\n\tline-height: 2.3rem;\n"])));function rt(){var t,e=Object(s.useContext)(X),n=e.counter,r=e.display;t=r.length>0?r:n<5?"Click on your board to place your ships!":"Good luck! Click on the AI board to take your shot!";return Object(j.jsx)(nt,{variants:{hidden:{y:"-20vh",scale:.5,opacity:0},visible:{y:0,scale:1,opacity:1,transition:{type:"spring",delay:1,duration:.6}}},initial:"hidden",animate:"visible",children:t})}var at,it,ot,st,ct,lt,ut=n.p+"static/media/battleshipTitle.1ec916da.png",dt=n.p+"static/media/battleship.3b303186.svg",ht=m.b.div(at||(at=Object(u.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\n\twidth: 100vw;\n\tmin-height: 100vh;\n\n\tbackground: var(--bg-blue);\n\tpadding: 0.8rem 0.2rem;\n\n\ttransition: all 0.2s ease-in;\n"]))),bt=Object(m.b)(f.a.h1)(it||(it=Object(u.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\n\twidth: 100%;\n\tmax-width: 410px;\n"]))),pt=Object(m.b)(f.a.img)(ot||(ot=Object(u.a)(["\n\t","\n\n\t","\n"])),(function(t){return t.title&&Object(m.a)(st||(st=Object(u.a)(["\n\t\t\twidth: 17.8rem;\n\t\t\theight: 6rem;\n\t\t"])))}),(function(t){return t.icon&&Object(m.a)(ct||(ct=Object(u.a)(["\n\t\t\tflex: 0.6;\n\t\t\talign-self: center;\n\n\t\t\twidth: 5rem;\n\t\t\theight: 5.3rem;\n\n\t\t\t@media (min-width: 900px) {\n\t\t\t\tflex: 1;\n\t\t\t}\n\t\t"])))})),mt=Object(m.b)(f.a.div)(lt||(lt=Object(u.a)(["\n\tflex: 1;\n\twidth: 100%;\n\tmax-width: 1100px;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\t.gameArea {\n\t\tflex: 1;\n\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\n\t\twidth: 100%;\n\n\t\tgrid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n\t\tgrid-template-rows: auto;\n\t\trow-gap: 3rem;\n\t}\n"])));var ft=function(){var t=Object(s.useContext)(I).showPage;return Object(j.jsx)(_,{children:Object(j.jsx)(ht,{children:t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(bt,{variants:{hidden:{y:"-50vh",scale:.5},visible:{y:0,scale:1,transition:{type:"spring",delay:.8,duration:.5}}},initial:"hidden",animate:"visible",children:[Object(j.jsx)(pt,{title:!0,src:ut,alt:"battleship"}),Object(j.jsx)(pt,{icon:!0,src:dt,alt:"battleship icon"})]}),Object(j.jsxs)(mt,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.6}}},initial:"hidden",animate:"visible",children:[Object(j.jsx)(rt,{}),Object(j.jsxs)("div",{className:"gameArea",children:[Object(j.jsx)(et,{player:"human"}),Object(j.jsx)(et,{player:"AI"})]})]})]})})})};n(39);l.a.render(Object(j.jsx)(A,{children:Object(j.jsx)(ft,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3e9a528b.chunk.js.map