webpackJsonp([2],{2:function(e,t){function n(){T=!0}function o(){T=!1}function a(){var e=u.domElement;e&&"function"==typeof e.requestPointerLock&&e.requestPointerLock()}function i(){var e=document.pointerLockElement,t=u.domElement;e&&e===t&&"function"==typeof document.exitPointerLock&&document.exitPointerLock()}function r(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}function s(){u.animate(d)}function d(){var e=60*R.getDelta();if(!0===T){var t=m.children[0];m.remove(t),t.position.set(0,0,-.75),t.position.applyQuaternion(l.quaternion),t.userData.velocity.x=.02*(Math.random()-.5)*e,t.userData.velocity.y=.02*(Math.random()-.5)*e,t.userData.velocity.z=(.01*Math.random()-.05)*e,t.userData.velocity.applyQuaternion(l.quaternion),m.add(t)}E.setFromCamera({x:0,y:0},l);var n=E.intersectObjects(m.children);n.length>0?y!=n[0].object?(y&&y.material.emissive.setHex(y.currentHex),y=n[0].object,y.currentHex=y.material.emissive.getHex(),y.material.emissive.setHex(16711680),h=0,v.setVolume(.5),v.play()):(h+=R.getDelta())>2&&(y.userData.velocity.x=2*y.userData.velocity.x+1e-4,y.userData.velocity.y=2*y.userData.velocity.y+1e-4,y.userData.velocity.z=2*y.userData.velocity.z+1e-4,v.setVolume(2),v.play()):(y&&y.material.emissive.setHex(y.currentHex),y=void 0);for(var o=0;o<m.children.length;o++){var t=m.children[o];t.userData.velocity.multiplyScalar(1-.001*e),t.position.add(t.userData.velocity),(t.position.x<-3||t.position.x>3)&&(t.position.x=THREE.Math.clamp(t.position.x,-3,3),t.userData.velocity.x=-t.userData.velocity.x),(t.position.y<-3||t.position.y>3)&&(t.position.y=THREE.Math.clamp(t.position.y,-3,3),t.userData.velocity.y=-t.userData.velocity.y),(t.position.z<-3||t.position.z>3)&&(t.position.z=THREE.Math.clamp(t.position.z,-3,3),t.userData.velocity.z=-t.userData.velocity.z),t.rotation.x+=2*t.userData.velocity.x*e,t.rotation.y+=2*t.userData.velocity.y*e,t.rotation.z+=2*t.userData.velocity.z*e}u.render(c,l)}var p,l,c,E,u,m,y,w,h,v,H,R=new THREE.Clock,T=!1,M=function(){function e(){}return e.prototype.init=function(){p=document.createElement("div"),document.body.appendChild(p),this.addAppInfo(),c=new THREE.Scene,c.background=new THREE.Color(5263440),l=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,.1,10),c.add(l),this.addCrosshair(),this.addAppObjects(),c.add(new THREE.HemisphereLight(6316128,4210752));var e=new THREE.DirectionalLight(16777215);e.position.set(1,1,1).normalize(),c.add(e);var t=new THREE.AudioListener;l.add(t),v=new THREE.Audio(t),(new THREE.AudioLoader).load("/assets/ping_pong.mp3",function(e){v.setBuffer(e),v.setLoop(!1),v.setVolume(.5)});var s=new THREE.AudioListener;l.add(s),H=new THREE.Audio(s),(new THREE.AudioLoader).load("/assets/dog.ogg",function(e){H.setBuffer(e),H.setLoop(!1),H.setVolume(.5),H.play()}),E=new THREE.Raycaster,u=new THREE.WebGLRenderer({antialias:!0}),u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),u.vr.enabled=!0,p.appendChild(u.domElement),u.domElement.addEventListener("mousedown",n,!1),u.domElement.addEventListener("mouseup",o,!1),u.domElement.addEventListener("touchstart",n,!1),u.domElement.addEventListener("touchend",o,!1),window.addEventListener("resize",r,!1),window.addEventListener("vrdisplaypointerrestricted",a,!1),window.addEventListener("vrdisplaypointerunrestricted",i,!1),document.body.appendChild(WEBVR.createButton(u))},e.prototype.addAppObjects=function(){m=new THREE.Mesh(new THREE.BoxGeometry(6,6,6,8,8,8),new THREE.MeshBasicMaterial({color:4210752,wireframe:!0})),c.add(m);var e=new THREE.TextureLoader,t=e.load("/assets/background-1.png");t.wrapS=THREE.MirroredRepeatWrapping,t.wrapT=THREE.MirroredRepeatWrapping,t.repeat.set(1,1),t.flipY=!1;var n={shininess:1,specular:16777215,map:t},o=new THREE.PlaneGeometry(6,6,8,8),a=new THREE.MeshPhongMaterial(n),i=new THREE.Mesh(o,a);i.position.z=-3.1,c.add(i);var r=(new THREE.TextureLoader,e.load("/assets/textures/sand.png"));r.wrapS=THREE.MirroredRepeatWrapping,r.wrapT=THREE.MirroredRepeatWrapping,r.repeat.set(1,1),r.flipY=!1;var s={shininess:1,specular:16777215,map:r},d=new THREE.PlaneGeometry(6,6,8,8),p=new THREE.MeshPhongMaterial(s),l=new THREE.Mesh(d,p);l.rotation.x=-.5*Math.PI,l.position.y=-3.1,c.add(l);for(var E=new THREE.SphereGeometry(.2,20,20),u=0;u<20;u++){var y=new THREE.Mesh(E,new THREE.MeshLambertMaterial({color:16777215*Math.random()}));y.position.x=4*Math.random()-2,y.position.y=4*Math.random()-2,y.position.z=4*Math.random()-2,y.rotation.x=2*Math.random()*Math.PI,y.rotation.y=2*Math.random()*Math.PI,y.rotation.z=2*Math.random()*Math.PI,y.userData.velocity=new THREE.Vector3,y.userData.velocity.x=.01*Math.random()-.005,y.userData.velocity.y=.01*Math.random()-.005,y.userData.velocity.z=.01*Math.random()-.005,m.add(y)}},e.prototype.addAppInfo=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="10px",e.style.width="100%",e.style.textAlign="center",e.innerHTML="Wander Balls",p.appendChild(e)},e.prototype.addCrosshair=function(){w=new THREE.Mesh(new THREE.RingGeometry(.02,.04,32),new THREE.MeshBasicMaterial({color:16777215,opacity:.5,transparent:!0})),w.position.z=-2,l.add(w)},e.prototype.start=function(){s()},e}(),x=new M;x.init(),x.start()}},[2]);