(self.webpackChunk=self.webpackChunk||[]).push([[826],{33064:(e,t,r)=>{"use strict";var n=r(73935),l=r(67294),o=r(21530),c=r(26516),a=r(54809),s=(r(19601),r(40865)),i=r(77385),u=r(22318);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=(0,r(41120).Z)({title:{flex:1,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},spacer:{flex:1}});const E=function(e){var t=p();return l.createElement(i.Z,m({},e,{title:"Kala kama kely "}),l.createElement(u.Z,{variant:"h6",color:"inherit",className:t.title,id:"react-admin-title"}),l.createElement("span",{className:t.spacer}))};r(21249),r(68309);var f=r(37703),b=r(63457),d=r(3818),h=r(67752),v=r(70349),x=r(3133),y=r(92201);const Z=function(e){var t=e.onMenuClick,r=e.logout,n=(0,b.Z)((function(e){return e.breakpoints.down("xs")})),o=(0,f.useSelector)((function(e){return e.admin.ui.sidebarOpen})),c=(0,f.useSelector)(d.jh);return l.createElement("div",null,l.createElement(h.Z,{onClick:t,sidebarIsOpen:o}),c.map((function(e){return l.createElement(v.Z,{key:e.name,to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:e.icon?l.createElement(e.icon,null):l.createElement(x.Z,null),onClick:t,sidebarIsOpen:o})})),l.createElement(v.Z,{to:"/custom-route",primaryText:"Miscellaneous",leftIcon:l.createElement(y.Z,null),onClick:t,sidebarIsOpen:o}),n&&r)};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const g=function(e){return l.createElement(s.Z,k({},e,{appBar:E,menu:Z}))};var P=r(80363),T=r(48380);const S=function(e){return l.createElement(o.ep,e,l.createElement(o.x7,{source:"photoProfile"}),l.createElement(o.x7,{source:"email"}),l.createElement(o.x7,{source:"login"}),l.createElement(o.x7,{source:"username"}),l.createElement(o.x7,{source:"nom"}),l.createElement(o.x7,{source:"prenom"}),l.createElement(o.x7,{source:"situationMatrimoniale"}),l.createElement(o.x7,{source:"civilite"}),l.createElement(o.x7,{source:"dateDeNaissance"}),l.createElement(o.x7,{source:"competence"}),l.createElement(o.x7,{source:"dateEntree"}),l.createElement(o.x7,{source:"date_sortie"}),l.createElement(o.x7,{source:"remarque"}),l.createElement(o.x7,{source:"enable"}),l.createElement(o.x7,{source:"entite"}),l.createElement(P.Z,{source:"profiles",reference:"profiles",label:"Profile",filterToQuery:function(e){return{libelle:e}}},l.createElement(T.Z,{optionText:"libelle"})))};const w=function(e){return l.createElement(o.ep,e,l.createElement(o.x7,{source:"libelle"}),l.createElement(o.x7,{source:"code"}),l.createElement(P.Z,{source:"sites",reference:"sites",label:"Site",filterToQuery:function(e){return{libelle:e}}},l.createElement(T.Z,{optionText:"libelle"})),l.createElement(P.Z,{source:"entite_types",reference:"entite_types",label:"Type d'entité",filterToQuery:function(e){return{libelle:e}}},l.createElement(T.Z,{optionText:"libelle"})))};var O=r(5541);const _=function(e){return l.createElement(o.eo,e,l.createElement(o.x7,{source:"libelle"}),l.createElement(o.x7,{source:"code"}),l.createElement(P.Z,{source:"sites",reference:"sites",label:"Site"},l.createElement(O.Z,{optionText:"libelle"})),l.createElement(P.Z,{source:"entite_types",reference:"entite_types",label:"Type d'entité"},l.createElement(O.Z,{optionText:"libelle"})))};var I=r(23284),j=r(66889);const C=function(e){return l.createElement(o.cJ,e,l.createElement(o.m5,{source:"libelle",addLabel:!0}),l.createElement(o.m5,{source:"code",addLabel:!0}),l.createElement(I.ZP,{label:"Site",source:"site",reference:"sites"},l.createElement(j.Z,{source:"libelle"})),l.createElement(I.ZP,{label:"Type",source:"type",reference:"entite_types"},l.createElement(j.Z,{source:"libelle"})))};const N=function(e){return l.createElement(o.id,e,l.createElement(o.m5,{source:"libelle",addLabel:!0}),l.createElement(o.m5,{source:"code",addLabel:!0}),l.createElement(I.ZP,{label:"Site",source:"site",reference:"sites"},l.createElement(j.Z,{source:"libelle"})),l.createElement(I.ZP,{label:"Type",source:"type",reference:"entite_types"},l.createElement(j.Z,{source:"libelle"})))};r(88674),r(41539);var L=r(96245),q=r(2564),B=r.n(q);const D=JSON.parse('{"base_url":"","routes":{"api_login_check":{"tokens":[["text","/authentication_token"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost:8001","port":"","scheme":"http","locale":[]}');B().setData(D),console.log(B());const J=B(),M={login:function(e){var t=e.username,r=e.password,n=new Request(J.generate("api_login_check"),{method:"POST",body:JSON.stringify({username:t,password:r}),headers:new Headers({"Content-Type":"application/json"})});return fetch(n).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.token,r=(0,L.Z)(t);localStorage.setItem("token",t),localStorage.setItem("permissions",r.permissions)}))},logout:function(){return localStorage.removeItem("token"),localStorage.removeItem("permissions"),Promise.resolve()},checkError:function(e){},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){var e=localStorage.getItem("permissions");return e?Promise.resolve(e):Promise.reject()}};var Q=(0,c.Z)((function(){return a.Z}),"fr");console.log("http://patisserie.vinou.mg/public/index.php/api");var A=function(){return l.createElement(o.BD,{entrypoint:"http://patisserie.vinou.mg/public/index.php/api",authProvider:M,layout:g,i18nProvider:Q,locale:"fr"},l.createElement(o.k1,{name:"users",create:S,options:{label:"Utilisateurs"}}),l.createElement(o.k1,{name:"profiles",options:{label:"Profiles"}}),l.createElement(o.k1,{name:"sites",options:{label:"Sites"}}),l.createElement(o.k1,{name:"entites",list:N,show:C,edit:_,create:w,options:{label:"Entités"}}),l.createElement(o.k1,{name:"entite_types",options:{label:"Type d'entités"}}))};n.render(l.createElement(A,null),document.getElementById("root"))},6055:()=>{},96642:()=>{},75877:()=>{},97670:()=>{}},e=>{"use strict";e.O(0,[660,23,622],(()=>{return t=33064,e(e.s=t);var t}));e.O()}]);