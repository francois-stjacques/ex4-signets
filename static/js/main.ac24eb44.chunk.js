(this["webpackJsonpex4-signets"]=this["webpackJsonpex4-signets"]||[]).push([[0],{156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},178:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(14),s=a.n(n),r=(a(156),a(47)),o=a(28),l=a(17),u=(a(157),a(158),a(339)),j=a(326),d=a(9),b=a(7);function h(e){var t=e.utilisateur;return Object(b.jsxs)("header",{className:"Entete",children:[Object(b.jsxs)("div",{className:"logo",children:["Signets",Object(b.jsx)(j.a,{variant:"outlined",size:"small",className:"btn-deconnexion",onClick:function(){return d.a.auth().signOut()},children:"D\xe9connexion"})]}),Object(b.jsxs)("div",{className:"utilisateur",children:[t.displayName," ",Object(b.jsx)(u.a,{className:"avatar",alt:t.displayName,src:t.photoURL})]})]})}var O=a(96),m=a.n(O),f=a(132),p=(a(165),a(166),a(330)),x=a(133),g=a.n(x),v=a(134),N=a.n(v),D=a(143),y=a(340),C=a.p+"static/media/couverture.2dc9ece9.webp";function k(e){e.id;var t=e.nom,a=e.couleur,c=e.datemodif,n=e.couverture,s=i.a.useState(null),r=Object(l.a)(s,2),o=r[0],u=r[1],d=function(){u(null)};return Object(b.jsxs)("article",{className:"Dossier",style:{backgroundColor:a},children:[Object(b.jsxs)("div",{className:"couverture",children:[Object(b.jsx)(p.a,{className:"deplacer","aria-label":"d\xe9placer",disableRipple:!0,children:Object(b.jsx)(g.a,{})}),Object(b.jsx)("img",{src:n||C,alt:t})]}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsxs)("p",{children:["Modifi\xe9 : ",S(c)]})]}),Object(b.jsx)(p.a,{className:"modifier","aria-label":"modifier",size:"small",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},children:Object(b.jsx)(N.a,{})}),Object(b.jsxs)(D.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:d,children:[Object(b.jsx)(y.a,{onClick:d,children:"Modifier"}),Object(b.jsx)(y.a,{onClick:d,children:"Supprimer"})]})]})})]})}function S(e){var t=e?new Date(1e3*e.seconds):new Date;return"".concat(t.getDate()," ").concat(["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][t.getMonth()]," ").concat(t.getFullYear())}var A=a(135);a(288);d.a.apps.length||d.a.initializeApp({apiKey:"AIzaSyBozBJDhErsze0IJgygOky2hplt-rhhlB8",authDomain:"panier-achat-fsj.firebaseapp.com",databaseURL:"https://panier-achat-fsj-default-rtdb.firebaseio.com",projectId:"panier-achat-fsj",storageBucket:"panier-achat-fsj.appspot.com",messagingSenderId:"827452650180",appId:"1:827452650180:web:7c8928380ddc7d8a844f91",measurementId:"G-7SJNXY6SXX"});var I=new A.a.AuthUI(d.a.auth()),w=d.a.firestore();function E(e){var t=e.utilisateur,a=e.etatDossiers,i=Object(l.a)(a,2),n=i[0],s=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,w.collection("utilisateurs-ex4").doc(t.uid).collection("dossiers").get();case 3:e.sent.forEach((function(e){a.push(Object(r.a)({id:e.id},e.data()))})),s(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsx)("ul",{children:Object(b.jsx)("div",{className:"ListeDossiers",children:0==n?Object(b.jsxs)("article",{className:"aucunMsg",children:["Votre liste de dossiers est vide",Object(b.jsx)("p",{children:";-("})]}):n.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(k,Object(r.a)({},e))},e.id)}))})})}var F=a(334),R=a(141),B=a.n(R);a(178),a(179);function V(){return Object(c.useEffect)((function(){return I.start("#firebaseui-widget",{signInOptions:[d.a.auth.GoogleAuthProvider.PROVIDER_ID,d.a.auth.FacebookAuthProvider.PROVIDER_ID,d.a.auth.GithubAuthProvider.PROVIDER_ID],signInFlow:"popup"},[])})),Object(b.jsxs)("div",{className:"Accueil",children:[Object(b.jsxs)("h3",{className:"logo",children:["Signets ",Object(b.jsx)("span",{children:"beta"})]}),Object(b.jsxs)("h2",{className:"amorce",children:["Organisez vos signets Web, ",Object(b.jsx)("br",{}),"Simple comme bonjour !"]}),Object(b.jsx)("h4",{className:"connexion-etiquette",children:"Connexion \xe0 Signets"}),Object(b.jsx)("div",{id:"firebaseui-widget"})]})}var z=a(335),M=a(337),P=a(333),J=a(332),G=a(338),L=a(142);function T(e){var t=e.ouvert,a=e.setOuvert,i=e.gererAjout,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],o=s[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1],m=Object(c.useState)("#537169"),f=Object(l.a)(m,2),p=f[0],x=f[1];function g(){o(""),O(""),x("#537169")}return Object(b.jsx)("div",{className:"AjouterDossier",children:Object(b.jsxs)(M.a,{open:t,onClose:function(){return a(!1)},"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(G.a,{id:"form-dialog-title",children:"Ajouter un dossier"}),Object(b.jsxs)(J.a,{children:[Object(b.jsx)(z.a,{autoFocus:!0,margin:"normal",id:"nomDossier",label:"Nom du dossier",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},defaultValue:r}),Object(b.jsx)(z.a,{margin:"normal",id:"urlImage",label:"Adresse de l'image de couverture",type:"text",fullWidth:!0,onChange:function(e){return O(e.target.value)},defaultValue:h}),Object(b.jsx)(L.a,{width:"100%",triangle:"hide",onChangeComplete:function(e,t){return x(e.hex)},colors:["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3"],color:p})]}),Object(b.jsxs)(P.a,{children:[Object(b.jsx)(j.a,{onClick:function(){a(!1),g()},color:"primary",style:{color:"white",background:"firebrick"},children:"Annuler"}),Object(b.jsx)(j.a,{onClick:function(){""!==r&&i(r,h,p),g()},color:"primary",style:{color:"white",background:"forestgreen"},children:"Ajouter"})]})]})})}function U(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)([]),s=Object(l.a)(n,2),u=s[0],j=s[1],O=Object(c.useState)(!1),m=Object(l.a)(O,2),f=m[0],p=m[1];return Object(c.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){i(e),e&&w.collection("utilisateurs-ex4").doc(e.uid).set({nom:e.displayName,courriel:e.email,datecompte:d.a.firestore.FieldValue.serverTimestamp()},{merge:!0})}))}),[]),Object(b.jsx)("div",{className:"Appli",children:a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{utilisateur:a}),Object(b.jsxs)("section",{className:"contenu-principal",children:[Object(b.jsx)(E,{utilisateur:a,etatDossiers:n}),Object(b.jsx)(T,{ouvert:f,setOuvert:p,gererAjout:function(e,t,c){var i={nom:e,couverture:t,couleur:c,datemodif:d.a.firestore.FieldValue.serverTimestamp(),signets:[]};w.collection("utilisateurs-ex4").doc(a.uid).collection("dossiers").add(i).then((function(e){e.get().then((function(e){return j([].concat(Object(o.a)(u),[Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})]))})),p(!1)}))}}),Object(b.jsx)(F.a,{onClick:function(){return p(!0)},className:"ajoutRessource",color:"primary","aria-label":"Ajouter dossier",children:Object(b.jsx)(B.a,{})})]})]}):Object(b.jsx)(V,{})})}s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("racine"))}},[[286,1,2]]]);
//# sourceMappingURL=main.ac24eb44.chunk.js.map