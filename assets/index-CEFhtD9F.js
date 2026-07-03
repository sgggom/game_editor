(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();let Qe=[],k=[],be=[],Y=null,zd=1,lt=[],It=[],bt=null,m=null,nn=null;const qd=new Set(["click","link","drag"]),Vd=new Set(["hold","selected","none"]),Ud=new Set(["default","simulator"]),Yd=new Set(["line","band"]),Kd=new Set(["lianliankan","vita-mahjong"]),Xd=new Set(["classic","tray"]),Jd=new Set(["gravity","direction","none"]),Zd=new Set(["1","2","3","unlimited"]),Qd=new Set(["all","partial"]),em=new Set(["time","error","none"]),Ol=6,Hl=10,Wl=6,jl=14,la=8,bo=12,tm=32,nm=180,Gl=300,zl=3;let Be="click",vr="selected",Ur="simulator",Ti="band",Ut="lianliankan",ca="classic",lr="direction",cr="2",Bn="all",Pr=3,Ae="time",ai=null,qr=null,wn=null,Mn=null,qt=Gl,An=0,Et=!1,Pt=!1,ut=!1,et=null;const Yr=["前35%","35%-75%","最后25%"],Kr=Yr.length,xt="all",tt="win",rm=48;let Vr=!1,In=70,oi=xt,re=[],rr=null,Co="",Di=-1,de=-1,Ge=null,Ba=null,Ra=0,xn=[],_a="",Va=!0,qo=null,ze=[],we="placeholder",Re=!1,an=new Set,ue={},Ua=!0,Ya=!1,Ka=10,Te={active:!1,mode:null,lastCellKey:""},V={initialized:!1,active:!1,pointerId:null,rafId:null,startX:0,startY:0,originX:0,originY:0,x:0,y:0,pendingX:0,pendingY:0,minX:0,maxX:0,minY:0,maxY:0,viewportWidth:0,viewportHeight:0,canvasWidth:0,canvasHeight:0},Vo=null,ks=null,qe=[];const ql="levelmake.configGroups.v1",Vl="levelmake.agentApiConfig.v1",Ul="levelmake.agentHumanMode.v1",Yl="levelmake.agentQuickMode.v1",Kl="levelmake.recentGenerations.v1",Xl=10,ii=1,Jl=10,ua=34,si="manual-face-",am=[3,4,6,8],om=[0,1,2,5,7],Ce=0,pe=499,he=99,xr=2,on=1e3,Ue=1,Ye=5,at=501,gt=502,Nt=503,Fe=504,Le=505,$e=506,im=new Set([at,Nt,Fe,Le,$e]),Ei=new Set([at,gt,Nt,Fe,Le,$e]),xe=new Set([Ue,Ye]),Fs=[[-1,0],[1,0],[0,-1],[0,1]],sm=Object.freeze({直线连接:"0","1拐连接":"1",同向2拐:"2",反向2拐:"3"}),Zl=[{key:"placeholder",title:"占位块",idLabel:"499",preview:"img/base.png"},{key:"attach-fanpai",title:"翻牌",idLabel:"1000",preview:"img/fanpai.png"},{key:"attach-iceshell",title:"冰壳",idLabel:"5000",preview:"img/iceshell.png"},{key:"stone",title:"石头",idLabel:"501",preview:"img/shitou.png"},{key:"wood",title:"木块",idLabel:"502",preview:"img/mukuai.png"},{key:"magnet",title:"磁铁",idLabel:"503",preview:"img/citie.png"},{key:"ice1",title:"冰块1",idLabel:"504",preview:"img/bing1.png"},{key:"ice2",title:"冰块2",idLabel:"505",preview:"img/bing2.png"},{key:"ice3",title:"冰块3",idLabel:"506",preview:"img/bing3.png"},{key:"bomb",title:"炸弹",idLabel:"99",preview:"img/zhadan.png"}],lm=new Set(["placeholder","attach-fanpai","attach-iceshell","stone","wood","magnet","ice1","ice2","ice3"]),Bi=Object.freeze({stone:`obstacle-${at}`,wood:`obstacle-${gt}`,magnet:`obstacle-${Nt}`,ice1:`obstacle-${Fe}`,ice2:`obstacle-${Le}`,ice3:`obstacle-${$e}`,"attach-fanpai":`attachment-${Ue}`,"attach-iceshell":`attachment-${Ye}`}),cm=new Set(Object.keys(Bi)),Ri=Object.freeze(Object.values(Bi)),Ls=Object.freeze(["ud","lr","udlr","rot"]),Uo=Object.freeze(["uniform","cluster","edge"]);an=new Set(Ri);const v={elements:null,drag:null,suppressIconClick:!1,chatMessages:[],apiProfiles:[],activeProfileId:"",profileValidation:{},pendingApiConfigData:null,pendingApiConfigSource:"",pendingSelectedProfileId:"",runMode:"continuous",humanModeEnabled:!1,quickModeEnabled:!1,isRunning:!1,isExecutingStep:!1,stopRequested:!1,activeFetchAbortController:null,playSessionSignature:"",playSessionReviewSignature:"",playSessionInitialRemovableCount:0,pendingDecisionFailCount:0,stepMemory:[],lastActionResult:null,userConversation:[],statusLoadingTimer:null,statusLoadingTick:0,statusLoadingBaseText:"",memoryTrendView:"pair_count"};function da(e){return{[at]:"img/shitou.png",[gt]:"img/mukuai.png",[Nt]:"img/citie.png",[Fe]:"img/bing1.png",[Le]:"img/bing2.png",[$e]:"img/bing3.png"}[e]||""}function Xr(e){return{[Ue]:"img/fanpai.png",[Ye]:"img/iceshell.png"}[e]||""}function _e(e){return!Number.isInteger(e)||e<=0}function ie(e){if(_e(e))return{rawId:Ce,baseId:Ce,attachmentId:null,hasAttachment:!1};if(e>=on){const t=Math.floor(e/on),n=e%on;if(xe.has(t)&&n>0)return{rawId:e,baseId:n,attachmentId:t,hasAttachment:!0}}return{rawId:e,baseId:e,attachmentId:null,hasAttachment:!1}}function Vt(e,t){return!Number.isInteger(e)||e<=0?Ce:xe.has(t)?t*on+e:e}function Rt(e){return Ei.has(e)}function um(e){return im.has(e)}function dm(e){return e===pe?!0:e>=1&&e<=99}function kt(e){return dm(e)}function ce(e){const t=ie(e);return!kt(t.baseId)||t.hasAttachment?null:t.baseId}function sn(e){const t=ie(e);return kt(t.baseId)?!t.hasAttachment:!1}function Ql(e,t=null,n={}){const r=ie(e);return!kt(r.baseId)||r.baseId===he&&!n.includeBombs||t&&rc(r.baseId,t)?null:{baseId:r.baseId,attachmentId:r.hasAttachment?r.attachmentId:null}}function $s(e){const t=ie(e);return _e(t.baseId)||t.hasAttachment||Rt(t.baseId)?!1:kt(t.baseId)}function ma(e=ue){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,n])=>[String(t),Number(n)]))}function dt(e,t=null){const n={};if(e&&typeof e=="object"&&Object.entries(e).forEach(([o,i])=>{const s=Math.trunc(Number(o)),l=Math.trunc(Number(i));Number.isInteger(s)&&s>=1&&s<he&&Number.isInteger(l)&&l>=1&&l<=ua&&(n[String(s)]=l)}),!Array.isArray(t)||t.length===0)return n;const r=new Set;for(const o of t)if(Array.isArray(o))for(const i of o){const s=ie(i);r.add(s.baseId)}const a={};return Object.entries(n).forEach(([o,i])=>{r.has(Number(o))&&(a[o]=i)}),a}function Xa(e=k){return ue=dt(ue,e),ma(ue)}function _s(e){return`${si}${e}`}function ki(e){if(typeof e!="string"||!e.startsWith(si))return null;const t=parseInt(e.slice(si.length),10);return!Number.isInteger(t)||t<1||t>ua?null:t}function ec(e){return ki(e)!==null}function tc(e,t=ue){const n=Math.trunc(Number(e));for(const[r,a]of Object.entries(t||{}))if(Number(a)===n)return Number(r);return null}function nc(e,t=ue){const n=Number(t?.[String(e)]);return!Number.isInteger(n)||n<1||n>ua?null:n}function rc(e,t=ue){return nc(e,t)!==null}function li(e=ue){const t=new Set;return Object.keys(e||{}).forEach(n=>{const r=Number(n);Number.isInteger(r)&&r>=1&&r<he&&t.add(r)}),t}function mm(e,t=ue){const n=nc(e,t);return n!==null?n:ym(e)}function Fi(e,t=ue){return e===he?"img/zhadan.png":!Number.isInteger(e)||e<=0||e===pe?"":`img/${mm(e,t)}.png`}function ac(e){const t=ki(e);if(t!==null){const r=tc(t);return{key:e,title:`手动花色 ${t}`,idLabel:r?String(r):"待分配",preview:`img/${t}.png`,isManualFlower:!0,faceId:t}}const n=bm(e);return n?{...n,isManualFlower:!1,faceId:null}:null}function fm(e=k,t=ue){const n=li(t);if(!Array.isArray(e))return n;for(const r of e)if(Array.isArray(r))for(const a of r){const o=ie(a);o.baseId>=1&&o.baseId<he&&n.add(o.baseId)}return n}function hm(e){const t=Math.trunc(Number(e));if(!Number.isInteger(t)||t<1||t>ua)return null;const n=tc(t);if(n!==null)return n;const r=fm();for(let a=1;a<he;a++)if(!r.has(a))return ue[String(a)]=t,a;return alert("可用的手动花色逻辑ID已用尽，无法继续添加新花色。"),null}function pm(e=k,t=ue){const n=dt(t,e),r=[];return Object.entries(n).forEach(([a,o])=>{let i=0;for(const s of e||[])if(Array.isArray(s))for(const l of s)ie(l).baseId===Number(a)&&i++;i%2!==0&&r.push(`${o}:${i}`)}),{valid:r.length===0,invalidFaces:r}}function Mr(e,t=k){const n=pm(t,ue);return n.valid?!0:(alert(`${e}前校验失败：存在非成对手动花色（${n.invalidFaces.join(", ")}）`),!1)}function Tn(e){const t=ie(e);return kt(t.baseId)?t.baseId:null}function oc(e){if(!Array.isArray(e))return{valid:!1,message:"棋盘数据无效"};const t=new Map;for(const r of e)if(Array.isArray(r))for(const a of r){const o=Tn(a);o!==null&&t.set(o,(t.get(o)||0)+1)}const n=[];return t.forEach((r,a)=>{r%2!==0&&n.push(`${a}:${r}`)}),n.length>0?{valid:!1,message:`存在非成对花色ID（${n.join(", ")}）`}:{valid:!0,message:""}}function ic(e){const t=oc(wa());return t.valid?!0:(alert(`${e}前校验失败：${t.message}`),!1)}function gm(e){return am.includes(e)?!0:(om.includes(e),!1)}function Li(){It=Array.from({length:34},(e,t)=>t+1);for(let e=It.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[It[e],It[t]]=[It[t],It[e]]}}function ym(e){(!Array.isArray(It)||It.length===0)&&Li();const n=((Number.isInteger(e)&&e>0?e:1)-1)%It.length;return It[n]||1}function $i(e){document.querySelectorAll(".direction-item").forEach((n,r)=>{n.classList.toggle("selected",r===e)});const t=document.querySelector(`input[name="direction"][value="${e}"]`);t&&(t.checked=!0),m&&m.active&&(m.direction=Number.isFinite(Number(e))?Math.max(0,Math.min(8,Math.round(Number(e)))):0),kn()}function bm(e){return Zl.find(t=>t.key===e)||null}function So(e){const t=Bi?.[e];return typeof t=="string"?t:null}function vo(e){return cm.has(e)}function Oa(e){const t=String(e||"");if(t.startsWith("obstacle-")){const n=parseInt(t.slice(9),10);if(Ei.has(n))return{key:t,kind:"obstacle",baseId:n}}if(t.startsWith("attachment-")){const n=parseInt(t.slice(11),10);if(xe.has(n))return{key:t,kind:"attachment",attachmentId:n}}return null}function _i(){return Ri.filter(e=>an.has(e))}function Ja(e){return{[`obstacle-${at}`]:"石头",[`obstacle-${gt}`]:"木块",[`obstacle-${Nt}`]:"磁铁",[`obstacle-${Fe}`]:"冰块1",[`obstacle-${Le}`]:"冰块2",[`obstacle-${$e}`]:"冰块3",[`attachment-${Ue}`]:"翻牌",[`attachment-${Ye}`]:"冰壳"}[e]||`ID:${e}`}function Po(e){const t=Array.isArray(e)?e:String(e??"").split(/[,，、|/;；\s]+/).map(a=>a.trim()).filter(Boolean),n={无:"",none:"",null:"",石头:`obstacle-${at}`,木块:`obstacle-${gt}`,磁铁:`obstacle-${Nt}`,冰块1:`obstacle-${Fe}`,冰1:`obstacle-${Fe}`,冰块2:`obstacle-${Le}`,冰2:`obstacle-${Le}`,冰块3:`obstacle-${$e}`,冰3:`obstacle-${$e}`,翻牌:`attachment-${Ue}`,冰壳:`attachment-${Ye}`},r=new Set;return t.forEach(a=>{const o=String(a??"").trim();if(!o)return;const i=o.toLowerCase();if(o in n){const u=n[o];u&&Oa(u)&&r.add(u);return}if(i in n){const u=n[i];u&&Oa(u)&&r.add(u);return}if(Oa(o)){r.add(o);return}const s=So(o);if(s){r.add(s);return}const l=Number(o);if(!Number.isFinite(l))return;const c=Math.round(l);if(Ei.has(c))r.add(`obstacle-${c}`);else if(xe.has(c))r.add(`attachment-${c}`);else{const u=c>=on&&c%on===0?c/on:null;xe.has(u)&&r.add(`attachment-${u}`)}}),Ri.filter(a=>r.has(a))}function xo(e){const t=Po(e);return t.length===0?"无":t.map(n=>Ja(n)).join("，")}function fa(e){return Po(e)}function Cm(e){const t=Oa(e);return t?t.kind==="obstacle"?t.baseId:Vt(pe,t.attachmentId):null}function Sm(){return _i().map(e=>Ja(e))}function vm(e){const t={none:"无",ud:"上下对称",lr:"左右对称",udlr:"上下左右对称",rot:"中心旋转对称",random:"随机"};return t[e]||t.lr}function Pm(e){const t={uniform:"纯随机",cluster:"小团簇",edge:"边缘优先",random:"随机"};return t[e]||t.uniform}function Oi(){const e=Sm();return e.length>0?e.join(" / "):"未选择"}function ln(){document.querySelectorAll(".editor-tool").forEach(i=>{const s=i.dataset.tool||"",l=So(s),c=i.dataset.tool===we&&(!Re||!vo(s));i.classList.toggle("selected",c),i.classList.toggle("auto-obstacle-source-selected",Re&&l!==null&&an.has(l))}),document.querySelectorAll(".manual-face-tool").forEach(i=>{i.classList.toggle("selected",i.dataset.tool===we)});const e=document.getElementById("autoObstacleModeToggle");e&&(e.classList.toggle("active",Re),e.textContent=Re?"自动特殊块模式：开":"自动特殊块模式：关");const t=document.getElementById("manualFlowerToggle");t&&(t.textContent=Ua?"手动花色（展开）":"手动花色（收起）");const n=document.getElementById("editorManualFlowerContent");n&&(n.hidden=Ua);const r=document.getElementById("autoObstaclePanelToggle");r&&(r.textContent=Ya?"自动特殊块（展开）":"自动特殊块（收起）");const a=document.getElementById("editorAutoObstacleContent");a&&(a.hidden=Ya);const o=document.getElementById("autoObstacleSelectionSummary");if(o){const i=Oi();o.textContent=Re?`自动特殊块模式已开启：点击“功能刷子”中的特殊块按钮可多选来源。当前来源：${i}`:`自动特殊块来源：${i}。如需修改，请先开启“自动特殊块模式”。`}}function ur(){const e=ac(we),t=document.getElementById("editorTip");if(!t||!e)return;let n=e.isManualFlower?`已选中：${e.title}（逻辑ID:${e.idLabel}）。左键放置，右键删除；支持按住拖动。`:`已选中：${e.title}（ID:${e.idLabel}）。左键放置，右键删除；占位块/障碍/附着支持按住拖动。`;const r=Oi();Re?n+=` 自动特殊块模式已开启，点击特殊块按钮会切换自动生成来源；当前来源：${r}。`:n+=` 当前自动特殊块来源：${r}。`,t.textContent=n}function xm(e=null){const t=typeof e=="boolean"?e:!Re;if(t===Re){ln(),ur();return}if(t&&vo(we)){const n=So(we);n!==null&&an.add(n),we="placeholder"}Re=t,ln(),ur()}function Mm(e){const t=So(e);t!==null&&(an.has(t)?an.delete(t):an.add(t),ln(),ur())}function Os(e=null){Ua=typeof e=="boolean"?e:!Ua,ln()}function Hs(e=null){Ya=typeof e=="boolean"?e:!Ya,ln()}function Ws(){const e=document.getElementById("editorTools");if(!e)return;e.innerHTML="";const t=document.createElement("div");t.className="editor-tool-section";const n=document.createElement("div");n.className="editor-tool-section-header";const r=document.createElement("div");r.className="editor-tool-section-title",r.textContent="功能刷子";const a=document.createElement("button");a.type="button",a.className="editor-tool-mode-toggle",a.id="autoObstacleModeToggle",a.onclick=()=>xm(),n.appendChild(r),n.appendChild(a),t.appendChild(n);const o=document.createElement("div");o.className="editor-tool-grid";for(const g of Zl){const S=document.createElement("button");S.type="button",S.className="editor-tool",S.dataset.tool=g.key,S.onclick=()=>Rn(g.key);const M=document.createElement("img");M.className="editor-tool-preview",M.src=g.preview,M.alt=g.title;const x=document.createElement("div");x.textContent=g.title;const N=document.createElement("div");N.className="editor-tool-id",N.textContent=`ID:${g.idLabel}`,S.appendChild(M),S.appendChild(x),S.appendChild(N),o.appendChild(S)}t.appendChild(o);const i=document.createElement("div");i.className="editor-auto-bomb-control",i.innerHTML=`
        <label for="autoBombPairCount">自动炸弹</label>
        <select id="autoBombPairCount" title="生成时随机将指定对数的花色替换为ID99炸弹">
            <option value="0" selected>0对</option>
            <option value="1">1对</option>
            <option value="2">2对</option>
        </select>
    `,t.appendChild(i);const s=document.createElement("div");s.className="editor-manual-flower-section";const l=document.createElement("div");l.className="editor-manual-flower-header";const c=document.createElement("div");c.className="editor-tool-section-title",c.textContent="手动花色",c.style.cursor="pointer",c.onclick=()=>Os();const u=document.createElement("button");u.type="button",u.className="editor-manual-flower-toggle",u.id="manualFlowerToggle",u.onclick=()=>Os(),l.appendChild(c),l.appendChild(u),s.appendChild(l);const d=document.createElement("div");d.className="editor-manual-flower-content",d.id="editorManualFlowerContent";const f=document.createElement("div");f.className="editor-manual-flower-grid";for(let g=1;g<=ua;g++){const S=document.createElement("button");S.type="button",S.className="manual-face-tool",S.dataset.tool=_s(g),S.onclick=()=>Rn(_s(g));const M=document.createElement("img");M.src=`img/${g}.png`,M.alt=`花色 ${g}`;const x=document.createElement("div");x.className="manual-face-tool-label",x.textContent=`牌面 ${g}`,S.appendChild(M),S.appendChild(x),f.appendChild(S)}d.appendChild(f),s.appendChild(d),t.appendChild(s),e.appendChild(t);const h=document.createElement("div");h.className="editor-tool-section";const C=document.createElement("div");C.className="editor-manual-flower-header";const p=document.createElement("div");p.className="editor-tool-section-title",p.textContent="自动特殊块",p.style.cursor="pointer",p.onclick=()=>Hs();const y=document.createElement("button");y.type="button",y.className="editor-auto-obstacle-toggle",y.id="autoObstaclePanelToggle",y.onclick=()=>Hs(),C.appendChild(p),C.appendChild(y),h.appendChild(C);const b=document.createElement("div");b.className="editor-auto-obstacle-controls editor-auto-obstacle-content",b.id="editorAutoObstacleContent",b.innerHTML=`
        <div class="config-item">
            <label for="autoObstacleTargetCount">总特殊块数</label>
            <input type="number" id="autoObstacleTargetCount" min="0" max="140" value="0">
        </div>
        <div class="config-item">
            <label for="autoObstacleSymmetry">对称模式</label>
            <select id="autoObstacleSymmetry">
                <option value="lr" selected>左右对称</option>
                <option value="ud">上下对称</option>
                <option value="udlr">上下左右对称</option>
                <option value="rot">中心旋转对称</option>
                <option value="random">随机</option>
            </select>
        </div>
        <div class="config-item">
            <label for="autoObstacleStyle">分布风格</label>
            <select id="autoObstacleStyle">
                <option value="uniform" selected>纯随机</option>
                <option value="cluster">小团簇</option>
                <option value="edge">边缘优先</option>
                <option value="random">随机</option>
            </select>
        </div>
        <button type="button" class="btn-primary" onclick="generateAutoObstacles()">生成特殊块</button>
        <div class="editor-auto-obstacle-summary" id="autoObstacleSelectionSummary"></div>
    `,h.appendChild(b),e.appendChild(h),ln(),ur()}function Rn(e){if(Re&&vo(e)){Mm(e);return}ac(e)&&(we=e,ln(),ur())}function ha(){return!!(m&&m.active||Et||ut||Pt)}function Nm(){return Re&&vo(we)?!1:lm.has(we)||ec(we)}function wm(){if(!Array.isArray(k)||k.length===0)return;const e=parseInt(document.getElementById("width")?.value,10)||0,t=parseInt(document.getElementById("height")?.value,10)||0;for(let n=0;n<t;n++)for(let r=0;r<e;r++){const a=k[n]?.[r]??Ce;_e(ie(a).baseId)&&(k[n][r]=pe,Do(n,r,pe))}Br()}function sc(){Nr(null),co(),wm()}function st(e,t,n){Ft(e,t)||Array.isArray(k[e])&&(k[e][t]=n,Do(e,t,n),Lt(),Xa(k),ec(we)&&Rn(we))}function lc(e,t){if(ha()||Ft(e,t))return;const n=ki(we);if(n!==null){const o=hm(n);if(o===null)return;st(e,t,o);return}const r=k[e]?.[t]??Ce,a=ie(r);switch(we){case"placeholder":st(e,t,pe);return;case"bomb":st(e,t,he);return;case"stone":st(e,t,at);return;case"wood":st(e,t,gt);return;case"magnet":st(e,t,Nt);return;case"ice1":st(e,t,Fe);return;case"ice2":st(e,t,Le);return;case"ice3":st(e,t,$e);return;case"attach-fanpai":if(!$s(r))return;st(e,t,Vt(a.baseId,Ue));return;case"attach-iceshell":if(!$s(r))return;st(e,t,Vt(a.baseId,Ye));return;default:return}}function cc(e,t){ha()||Ft(e,t)||st(e,t,Ce)}function Hi(e){const t=ie(e);return Rt(t.baseId)||t.hasAttachment&&xe.has(t.attachmentId)}function Am(e){if(!Array.isArray(e))return 0;let t=0;for(const n of e)if(Array.isArray(n))for(const r of n)Hi(r)&&t++;return t}function Im(e){if(!Array.isArray(e))return 0;let t=0;for(let n=0;n<e.length;n++)if(Array.isArray(e[n]))for(let r=0;r<e[n].length;r++)Hi(e[n][r])&&(e[n][r]=pe,t++);return t}function Tm(e){if(!Array.isArray(e))return 0;let t=0;for(const n of e)if(Array.isArray(n))for(const r of n){const a=ie(r);a.baseId===pe&&!a.hasAttachment&&t++}return t}function Ct(e,t){return`${e},${t}`}function Dm(e,t,n,r,a){const o=[],i=(s,l)=>{const c=Ct(s,l);o.some(u=>Ct(u.row,u.col)===c)||o.push({row:s,col:l})};switch(i(e,t),a){case"ud":i(r-1-e,t);break;case"lr":i(e,n-1-t);break;case"udlr":i(r-1-e,t),i(e,n-1-t),i(r-1-e,n-1-t);break;case"rot":i(r-1-e,n-1-t);break}return o}function Em(e,t){if(!Array.isArray(e)||e.length===0)return[];const n=e.length,r=e[0]?.length||0;if(r<=0)return[];const a=new Set;for(let i=0;i<n;i++)for(let s=0;s<r;s++){const l=ie(e[i]?.[s]);l.baseId===pe&&!l.hasAttachment&&a.add(Ct(i,s))}const o=new Map;for(let i=0;i<n;i++)for(let s=0;s<r;s++){const l=Ct(i,s);if(!a.has(l))continue;const c=Dm(i,s,r,n,t);if(c.some(p=>!a.has(Ct(p.row,p.col))))continue;const u=c.map(p=>Ct(p.row,p.col)).sort().join("|");if(o.has(u))continue;let d=0,f=0;const h=(n-1)/2,C=(r-1)/2;c.forEach(p=>{d+=Math.min(p.row,n-1-p.row,p.col,r-1-p.col),f+=Math.abs(p.row-h)+Math.abs(p.col-C)}),o.set(u,{cells:c,size:c.length,avgEdgeDistance:d/c.length,avgCenterDistance:f/c.length})}return Array.from(o.values())}function uc(e,t){const n=Math.max(0,Math.floor(Number(t)||0));if(n===0)return!0;const r=Array(n+1).fill(!1);r[0]=!0;for(const a of e){const o=Number(a?.size)||0;for(let i=n;i>=o;i--)r[i-o]&&(r[i]=!0)}return r[n]}function Bm(e){const t=[],n=new Set;for(let r=0;r<(e?.length||0);r++)for(let a=0;a<(e[r]?.length||0);a++)Hi(e[r]?.[a])&&(t.push({row:r,col:a}),n.add(Ct(r,a)));return{occupiedCoords:t,occupiedKeys:n}}function js(e,t,n,r,a){const o=(r-1)/2,i=(n-1)/2,s=e<o?"top":e>o?"bottom":"middle-row",l=t<i?"left":t>i?"right":"middle-col";switch(a){case"lr":return l;case"ud":return s;case"udlr":case"rot":return`${s}-${l}`;default:return"all"}}function Rm(e,t,n,r,a){let o=e,i=t;return(a==="ud"||a==="udlr"||a==="rot")&&(o=Math.min(e,r-1-e)),(a==="lr"||a==="udlr"||a==="rot")&&(i=Math.min(t,n-1-t)),{row:o,col:i}}function km(e,t,n,r){if(r==="none")return-e.avgCenterDistance;const a=r==="ud"||r==="udlr"||r==="rot"?Math.floor((n-1)/2)+1:n,o=r==="lr"||r==="udlr"||r==="rot"?Math.floor((t-1)/2)+1:t,i=(a-1)/2,s=(o-1)/2;let l=0;return e.cells.forEach(c=>{const u=Rm(c.row,c.col,t,n,r);l+=Math.abs(u.row-i)+Math.abs(u.col-s)}),-(l/Math.max(1,e.cells.length))}function Fm(e,t,n,r,a,o,i="none"){const s=Math.max(1,a),l=Math.max(1,o),c=t==="cluster"&&i!=="none",u=c?new Map(n.map(h=>[Ct(h.row,h.col),js(h.row,h.col,s,l,i)])):null;let d=n.length>0?Number.POSITIVE_INFINITY:Math.max(s,l),f=0;for(const h of e.cells){const C=c?js(h.row,h.col,s,l,i):"all";if(n.length>0)for(const y of n){if(c&&u.get(Ct(y.row,y.col))!==C)continue;const b=Math.abs(h.row-y.row)+Math.abs(h.col-y.col);b<d&&(d=b)}const p=[[h.row-1,h.col],[h.row+1,h.col],[h.row,h.col-1],[h.row,h.col+1]];for(const[y,b]of p){const g=Ct(y,b);r.has(g)&&(c&&u.get(g)!==C||f++)}}if(Number.isFinite(d)||(d=Math.max(s,l)),t==="cluster"){const h=km(e,s,l,i);return n.length>0?f*8+Math.max(0,5-d)*2.2-e.avgEdgeDistance*.25:h}return t==="edge"?(Math.max(1,Math.floor(Math.min(s,l)/2))-e.avgEdgeDistance)*6+Math.max(0,3-d)*.2:d*4.5-f*2.2-e.avgEdgeDistance*.18}function Lm(e){const t={cluster:{scoreWindow:3.2,topCount:5,temperature:1.05},edge:{scoreWindow:3.8,topCount:6,temperature:1.15},uniform:{scoreWindow:4.8,topCount:7,temperature:1.28}};return t[e]||t.uniform}function $m(e,t){if(!Array.isArray(e)||e.length===0)return null;if(t==="uniform"){const d=Math.floor(Math.random()*e.length);return e[d]||e[0]||null}const{scoreWindow:n,topCount:r,temperature:a}=Lm(t),o=e.map(d=>({...d,tieBreaker:Math.random()}));o.sort((d,f)=>f.score!==d.score?f.score-d.score:d.tieBreaker-f.tieBreaker);const i=o[0].score;let s=o.filter(d=>d.score>=i-n).slice(0,r);s.length===0&&(s=o.slice(0,Math.min(r,o.length)));let l=0;const c=s.map(d=>{const f=Math.exp((d.score-i)/Math.max(.01,a));return l+=f,f});if(!(l>0))return s[0]||null;let u=Math.random()*l;for(let d=0;d<s.length;d++)if(u-=c[d],u<=0)return s[d];return s[s.length-1]||null}function _m(e,t,n,r,a="none"){const o=r[0]?.length||0,i=r.length,s=[...e],{occupiedCoords:l,occupiedKeys:c}=Bm(r),u=[];let d=Math.max(0,Math.floor(Number(t)||0));for(;d>0;){const f=[];for(let p=0;p<s.length;p++){const y=s[p];if(!y||y.size>d)continue;const b=s.filter((S,M)=>M!==p);if(!uc(b,d-y.size))continue;const g=Fm(y,n,l,c,o,i,a);f.push({index:p,score:g})}const h=$m(f,n);if(!h)return{success:!1,groups:[]};const[C]=s.splice(h.index,1);u.push(C),d-=C.size,C.cells.forEach(p=>{l.push({row:p.row,col:p.col}),c.add(Ct(p.row,p.col))})}return{success:!0,groups:u}}function Om(e){if(e!=="random")return Uo.includes(e)?e:"uniform";const t=Math.floor(Math.random()*Uo.length);return Uo[t]||"uniform"}function Hm(e,t,n){const r=n==="random"?Ls:[n],a=[];for(const s of r){const l=Ls.includes(s)?s:"lr",c=Em(e,l);c.length!==0&&uc(c,t)&&a.push({mode:l,candidateGroups:c})}if(a.length===0)return{success:!1,message:n==="random"?"目标特殊块数量与当前可用占位块或所有对称模式都不兼容，请调整后重试。":"目标特殊块数量与当前对称模式或可用占位块不兼容，请调整后重试。"};const o=Math.floor(Math.random()*a.length),i=a[o]||a[0];return{success:!0,actualMode:i.mode,candidateGroups:i.candidateGroups}}function Wm(){if(ha())return;const e=wa();if(!Array.isArray(e)||e.length===0){alert("请先创建棋盘。");return}const t=_i();if(t.length===0){alert(Re?"请先在“功能刷子”中勾选至少一种特殊块类型，再生成自动特殊块。":"当前未选择自动特殊块来源，请先开启“自动特殊块模式”并在“功能刷子”中勾选特殊块类型。");return}const n=Mi("autoObstacleTargetCount",0),r=document.getElementById("autoObstacleSymmetry")?.value||"lr",a=document.getElementById("autoObstacleStyle")?.value||"uniform",o=Im(e),i=n;if(n<=0){k=G(e),un(),Xa(k),_n(k),ra(k),aa(parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10)),setTimeout(Ke,100),J(`已清除特殊块：清除 ${o} 个，当前目标特殊块数为 0。`);return}if(Tm(e)===0){alert("当前没有可用于自动生成特殊块的占位块（499）。");return}const s=Hm(e,i,r);if(!s.success){alert(s.message);return}const l=s.actualMode,c=Om(a),u=_m(s.candidateGroups,i,c,e,l);if(!u.success){alert("未能找到满足当前规则的特殊块分布，请调整数量或样式后重试。");return}const d=G(e);u.groups.forEach(f=>{const h=t[Math.floor(Math.random()*t.length)],C=Cm(h);!Number.isInteger(C)||C<=0||f.cells.forEach(p=>{d[p.row][p.col]=C})}),k=G(d),un(),Xa(k),_n(k),ra(k),aa(parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10)),setTimeout(Ke,100),J(`已自动生成特殊块：先清除 ${o} 个，再生成 ${i} 个；当前总特殊块 ${Am(k)} 个；来源：${Oi()}；对称：${vm(l)}；风格：${Pm(c)}`)}function jm(e){return{0:"无规则",1:"向上",2:"向下",3:"向左",4:"向右",5:"上下向内",6:"左右向内",7:"上下向外",8:"左右向外"}[e]||"无规则"}function Gn(e){const t=Number.isFinite(Number(e))?Math.max(0,Math.min(8,Math.round(Number(e)))):0,n={0:"无位移规则，消除后棋盘不移动。",1:"整列向上压缩，受磁铁锁定和不可移动障碍影响。",2:"整列向下压缩，受磁铁锁定和不可移动障碍影响。",3:"整行向左压缩，受磁铁锁定和不可移动障碍影响。",4:"整行向右压缩，受磁铁锁定和不可移动障碍影响。",5:"上下向内：上半区向下、下半区向上。",6:"左右向内：左半区向右、右半区向左。",7:"上下向外：上半区向上、下半区向下。",8:"左右向外：左半区向左、右半区向右。"};return n[t]||n[0]}function dc(e){return`img/ruleIcon_${Number.isFinite(Number(e))?Math.max(0,Math.min(8,Math.round(Number(e)))):0}.png`}function Gm(){if(m&&m.active&&Number.isInteger(m.direction))return m.direction;const e=parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10);return Number.isFinite(e)?Math.max(0,Math.min(8,Math.round(e))):0}function Nr(e){const t=Number(e);ai=Number.isFinite(t)&&t>0?Math.round(t):null,kn()}function kn(){const e=document.getElementById("simulatorDirectionIcon");if(e){const n=Gm();e.src=dc(n),e.alt=String(n)}const t=document.getElementById("simulatorLevelTitle");t&&(t.textContent=ai?`关卡 ${ai}`:"关卡 临时")}function zm(e){const t=Math.max(0,Math.floor(Number(e)||0)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function mc(){return!m||!m.active?0:Math.max(0,Math.round(Number(m.errorCount)||0))}function ft(){const e=document.getElementById("simulatorLimitHud"),t=document.getElementById("simulatorLimitIcon"),n=document.getElementById("simulatorCountdownTime");if(n){if(e&&(e.classList.toggle("is-hidden",Ae==="none"),e.classList.toggle("is-error-limit",Ae==="error"),e.classList.toggle("is-time-limit",Ae==="time")),t&&t.setAttribute("aria-label",Ae==="error"?"错误次数限制":"时间限制"),Ae==="none"){n.textContent="";return}if(Ae==="error"){n.textContent=`错误 ${mc()}/${zl}`;return}n.textContent=zm(qt)}}function pa(){return!m||!Array.isArray(m.vitaTray)?[]:m.vitaTray}function Tt(){const e=document.getElementById("vitaMahjongTray");if(!e)return;const t=ba();e.classList.toggle("visible",t),e.closest(".simulator-top-hud")?.classList.toggle("has-vita-tray",t);const n=Array.from(e.querySelectorAll(".simulator-vita-tray-slot")),r=t?pa():[];n.forEach((a,o)=>{a.innerHTML="";const i=r[o];a.classList.toggle("filled",!!i),i&&a.appendChild(Au(i.baseId,null,ue))})}function dr(){wn!==null&&(window.clearInterval(wn),wn=null),Mn!==null&&(window.clearTimeout(Mn),Mn=null),An=0}function Gs(){if(!An){ft();return}const e=Math.max(0,Math.ceil((An-Date.now())/1e3));qt=e,ft(),e<=0&&(dr(),m&&m.active&&!m.failed&&Dn("时间耗尽"))}function Wi(){if(Ae!=="time"){dr(),ft();return}dr(),qt=Math.max(0,qt),An=Date.now()+qt*1e3,Gs(),wn=window.setInterval(Gs,1e3)}function qm(e=30){if(!m||!m.active){J("请先进入试玩模式");return}if(Ae!=="time"){J("当前不是时间限制，冰冻道具不可用");return}if(qt<=0){ft();return}An&&(qt=Math.max(0,Math.ceil((An-Date.now())/1e3))),wn!==null&&(window.clearInterval(wn),wn=null),Mn!==null&&window.clearTimeout(Mn),An=0,ft(),J(`冰冻生效：倒计时暂停 ${e} 秒`),Mn=window.setTimeout(()=>{Mn=null,m&&m.active&&qt>0&&Wi()},Math.max(0,Number(e)||0)*1e3)}function ji({start:e=!1}={}){dr(),qt=Gl,ft(),e&&Ae==="time"&&Wi()}function fc(e){return Qd.has(e)?e:"all"}function hc(e){const t=Math.round(Number(e));return Number.isFinite(t)?Math.max(1,Math.min(99,t)):3}function Jr(){document.querySelectorAll('input[name="gameGoalMode"]').forEach(n=>{n.checked=n.value===Bn});const t=document.getElementById("gameGoalTargetPairs");t&&(t.value=String(Pr),t.disabled=Bn!=="partial")}function Vm(e){Bn=fc(e),Jr(),Sa()}function Um(e){Pr=hc(e),Jr(),Sa()}function pc(e){return Kd.has(e)?e:"lianliankan"}function Zr(){document.querySelectorAll('input[name="gamePlayMode"]').forEach(t=>{t.checked=t.value===Ut,t.closest(".game-play-choice")?.classList.toggle("active",t.value===Ut)}),Ym()}function Ym(){const e=document.querySelectorAll('[data-game-play-branch="lianliankan"]'),t=document.querySelectorAll('[data-game-play-branch="vita-mahjong"]');e.forEach(n=>{n.hidden=Ut!=="lianliankan"}),t.forEach(n=>{n.hidden=Ut!=="vita-mahjong"}),Za(),typeof En=="function"&&En()}function Za(){requestAnimationFrame(()=>{document.querySelectorAll(".rule-subtree").forEach(e=>{const t=e.querySelector(":scope > .module-card"),n=e.querySelector(":scope > .rule-subtree-children"),r=t?.offsetHeight||72;let a=0;if(n){const i=window.getComputedStyle(n),s=parseFloat(i.rowGap||i.gap||"0")||0;a=Array.from(n.children).filter(c=>Sr(c)).reduce((c,u,d)=>c+u.offsetHeight+(d>0?s:0),0)}const o=Math.max(r,a,72);e.style.setProperty("--rule-subtree-height",`${Math.ceil(o)}px`)})})}function Km(e){Ut=pc(e),Zr(),Je(),wt(),He(),yt(),Lt(),Tt(),m&&m.active&&J(Ca())}function gc(e){const t=String(e??"");return Xd.has(t)?t:"classic"}function Qa(){document.querySelectorAll('input[name="vitaMahjongMode"]').forEach(t=>{t.checked=t.value===ca}),Tt()}function Xm(e){Ut="vita-mahjong",ca=gc(e),Zr(),Qa(),Je(),wt(),He(),yt(),Lt(),m&&m.active&&(m.vitaTray=[],Tt(),J(Ca()))}function yc(e){return Jd.has(e)?e:"direction"}function eo(){document.querySelectorAll('input[name="gameFillMode"]').forEach(t=>{t.checked=t.value===lr})}function Jm(e){lr=yc(e),eo()}function bc(e){const t=String(e??"");return Zd.has(t)?t:"2"}function Cc(){if(cr==="unlimited")return 1/0;const e=Math.round(Number(cr));return Number.isFinite(e)?Math.max(0,e):2}function to(){document.querySelectorAll('input[name="gameTurnLimitMode"]').forEach(t=>{t.checked=t.value===cr})}function Zm(e){cr=bc(e),to()}function Gi(){return lr==="none"?null:lr==="gravity"?2:Number.isInteger(m?.direction)?m.direction:0}function Sc(e){return em.has(e)?e:"time"}function no(){document.querySelectorAll('input[name="gameLimitMode"]').forEach(t=>{t.checked=t.value===Ae}),ft()}function Qm(e){const t=Ae;if(Ae=Sc(e),no(),t!==Ae){if(Ae==="time"){m&&m.active&&Wi();return}dr(),ft()}}function ef(){const e=parseInt(document.getElementById("count8Min")?.value,10)||0,t=parseInt(document.getElementById("count8Max")?.value,10)||0,n=parseInt(document.getElementById("count6Min")?.value,10)||0,r=parseInt(document.getElementById("count6Max")?.value,10)||0,a=Du(),o=a.phaseConfigs.middle.typeWeights;return{width:parseInt(document.getElementById("width")?.value,10)||8,height:parseInt(document.getElementById("height")?.value,10)||12,boardLayers:be.map(i=>({id:i.id,width:i.width,height:i.height,boardData:G(i.boardData)})),activeBoardLayerId:Y,count8Min:e,count8Max:t,count6Min:n,count6Max:r,count8:e,count6:n,autoBombPairCount:Tu(),rhythmEarlyPairMin:a.phaseConfigs.early.pairCountRange[0],rhythmEarlyPairMax:a.phaseConfigs.early.pairCountRange[1],rhythmEarlyDistanceMin:a.phaseConfigs.early.distanceRange[0],rhythmEarlyDistanceMax:a.phaseConfigs.early.distanceRange[1],rhythmMiddlePairMin:a.phaseConfigs.middle.pairCountRange[0],rhythmMiddlePairMax:a.phaseConfigs.middle.pairCountRange[1],rhythmMiddleDistanceMin:a.phaseConfigs.middle.distanceRange[0],rhythmMiddleDistanceMax:a.phaseConfigs.middle.distanceRange[1],rhythmWaveMin:a.waveCountMin,rhythmWaveMax:a.waveCountMax,rhythmSameLayerChance:a.sameLayerChance,rhythmStuckPairChance:a.stuckPairChance,rhythmStuckPairCount:a.stuckPairCount,rhythmWeightStraight:o.直线连接,rhythmWeightOneTurn:o["1拐连接"],rhythmWeightSameTwoTurn:o.同向2拐,rhythmWeightReverseTwoTurn:o.反向2拐,batchCount:parseInt(document.getElementById("batchCount")?.value,10)||100,batchCampaignRounds:parseInt(document.getElementById("batchCampaignRounds")?.value,10)||1,simulateGameCount:parseInt(document.getElementById("simulateGameCount")?.value,10)||100,gamePlayMode:Ut,vitaMahjongMode:ca,gameFillMode:lr,gameTurnLimitMode:cr,gameGoalMode:Bn,gameGoalTargetPairs:Pr,gameLimitMode:Ae,stepPairExportScope:Er()}}function mr(e,t,n,r=2){const a=document.getElementById(e);a&&(a.value=String(n));const o=document.getElementById(t);if(!o)return;if(r<=0){o.textContent=String(parseInt(String(n),10));return}const i=Number(n);if(!Number.isFinite(i)){o.textContent="0.00";return}o.textContent=i.toFixed(r)}function Mt(e){const t=Math.round(Number(e));return Number.isFinite(t)?Math.max(Ol,Math.min(Hl,t)):la}function Yt(e){const t=Math.round(Number(e));return Number.isFinite(t)?Math.max(Wl,Math.min(jl,t)):bo}function zi(e,t){const n=Mt(e),r=Yt(t);return Array.from({length:r},()=>Array.from({length:n},()=>Ce))}function ro({width:e=la,height:t=bo,boardData:n=null}={}){const r=Array.isArray(n)&&n.length>0?G(n):zi(e,t),a=r.length||Yt(t),o=r[0]?.length||Mt(e);return{id:zd++,width:Mt(o),height:Yt(a),boardData:r}}function ht(e){const t=Number(e);return be.find(n=>n.id===t)||null}function pt(){if(be.length===0){const t=parseInt(document.getElementById("width")?.value,10)||la,n=parseInt(document.getElementById("height")?.value,10)||bo,r=ro({width:t,height:n});be=[r],Y=r.id}let e=ht(Y);return e||(e=be[0],Y=e.id),e}function vc(e=Y){return ht(e)||pt()}function St(e=Y){return vc(e)?.boardData||k}function ci(e=Y){const t=vc(e);return t?.id===Y?document.getElementById("board"):document.querySelector(`.board-layer-preview[data-layer-id="${t?.id}"]`)}function cn(e,t,n){const r=ci(e);return r?r.querySelector(`[data-board-row="${t}"][data-board-col="${n}"]`):null}function un(){const e=ht(Y);if(!e||!Array.isArray(k))return;const t=k.length||e.height,n=k[0]?.length||e.width;e.width=Mt(n),e.height=Yt(t),e.boardData=k}function qi(e,t){mr("width","widthValue",Mt(e),0),mr("height","heightValue",Yt(t),0)}function Qr(e){return Mt(e)>8?120:150}function Pc(e,t){const n=Mt(e),r=Yt(t),a=1,o=16;return{width:n*Qr(n)+(n-1)*a+o,height:r*162+(r-1)*a+o}}function Mo(e){const t=Mt(e?.width),n=Yt(e?.height),r=Pc(t,n);return{width:t,height:n,cellWidth:Qr(t),cellHeight:162,gap:1,padding:8,boardWidth:r.width,boardHeight:r.height}}function fr(e,t,n){const r=Mo(e);return{left:-r.boardWidth/2+r.padding+n*(r.cellWidth+r.gap),top:-r.boardHeight/2+r.padding+t*(r.cellHeight+r.gap),right:-r.boardWidth/2+r.padding+n*(r.cellWidth+r.gap)+r.cellWidth,bottom:-r.boardHeight/2+r.padding+t*(r.cellHeight+r.gap)+r.cellHeight}}function tf(e,t){return!e||!t?!1:e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top}function nf(e,t,n){const r=e?.boardData?.[t]?.[n]??Ce;return!_e(ie(r).baseId)}function rf(e){return be.findIndex(t=>t.id===Number(e))}function Kt(e,t,n){const r=ht(e),a=rf(e);if(!r||a<0)return!1;const o=fr(r,t,n);for(let i=a+1;i<be.length;i++){const s=be[i],l=Mo(s);for(let c=0;c<l.height;c++)for(let u=0;u<l.width;u++)if(nf(s,c,u)&&tf(o,fr(s,c,u)))return!0}return!1}function zs(e){const t=ie(e);return!_e(t.baseId)}function af(e,t,n){const r=ht(e),a=r?.boardData;if(!Array.isArray(a))return!1;const o=n>0&&zs(a[t]?.[n-1]),i=n<r.width-1&&zs(a[t]?.[n+1]);return o&&i}function xc(e,t,n){return Xe()?Kt(e,t,n)||af(e,t,n):!1}function ea(e,t,n,r){return sn(r)?Xe()?!xc(e,t,n):!Kt(e,t,n):!1}function Vi(e){return be.find(n=>n.boardData===e)?.id||Y}function Ft(e,t){return Kt(Y,e,t)}function Fn(e,t,n){return sn(n)&&!Ft(e,t)}function qs(e,t,n){const r=fr(e,t,n);return{x:(r.left+r.right)/2,y:(r.top+r.bottom)/2}}function of(e=[]){const t=new Set(e.map(r=>`${Number(r.layerId)}:${r.row}:${r.col}`)),n=[];for(const r of be){const a=St(r.id),o=Mo(r);for(let i=0;i<o.height;i++)for(let s=0;s<o.width;s++){if(t.has(`${r.id}:${i}:${s}`))continue;const l=a?.[i]?.[s]??Ce;_e(ie(l).baseId)||n.push(fr(r,i,s))}}return n}function sf(e,t,n){if(!e||!t)return!1;const r=.001,a=Math.min(e.x,t.x),o=Math.max(e.x,t.x),i=Math.min(e.y,t.y),s=Math.max(e.y,t.y),l=Math.abs(e.x-t.x)<r,c=Math.abs(e.y-t.y)<r;if(!l&&!c)return!1;for(const u of n){if(l){if(e.x<=u.left+r||e.x>=u.right-r||s<=u.top+r||i>=u.bottom-r)continue;return!1}if(c){if(e.y<=u.top+r||e.y>=u.bottom-r||o<=u.left+r||a>=u.right-r)continue;return!1}}return!0}function lf(e,t){if(!Array.isArray(e)||e.length<2)return!1;for(let n=1;n<e.length;n++)if(!sf(e[n-1],e[n],t))return!1;return!0}function cf(e){if(!Array.isArray(e)||e.length<=2)return e||[];const t=[e[0]];for(let n=1;n<e.length-1;n++){const r=t[t.length-1],a=e[n],o=e[n+1],i=Math.abs(r.x-a.x)<.001&&Math.abs(a.x-o.x)<.001,s=Math.abs(r.y-a.y)<.001&&Math.abs(a.y-o.y)<.001;!i&&!s&&t.push(a)}return t.push(e[e.length-1]),t}function uf(e,t){const n=ht(e?.layerId),r=ht(t?.layerId);if(!n||!r)return null;const a=qs(n,e.row,e.col),o=qs(r,t.row,t.col),i=of([e,t]),s=.001,l=[],c=Cc();(Math.abs(a.x-o.x)<s||Math.abs(a.y-o.y)<s)&&l.push([a,o]),l.push([a,{x:a.x,y:o.y},o],[a,{x:o.x,y:a.y},o]);const u=[...i,fr(n,e.row,e.col),fr(r,t.row,t.col)],d=Math.min(...u.map(g=>g.left)),f=Math.max(...u.map(g=>g.right)),h=Math.min(...u.map(g=>g.top)),C=Math.max(...u.map(g=>g.bottom)),p=Math.max(180,Qr(n.width),Qr(r.width)),y=[d-p,f+p],b=[h-p,C+p];for(const g of y)l.push([a,{x:g,y:a.y},{x:g,y:o.y},o]);for(const g of b)l.push([a,{x:a.x,y:g},{x:o.x,y:g},o]);for(const g of l){const S=cf(g);if(!(S.length>4)&&!(Math.max(0,S.length-2)>c)&&lf(S,i))return S}return null}function df(e){const t=Math.max(0,(Array.isArray(e)?e.length:0)-2);return t<=0?"跨层直线连接":t===1?"跨层一折连接":"跨层二折连接"}function Lt(){const e=ht(Y);if(!e)return;const t=document.getElementById("board");t&&Ui(t,e)}function Ui(e,t){if(!e||!t)return;const n=Mo(t);for(let r=0;r<n.height;r++)for(let a=0;a<n.width;a++){const o=e.querySelector(`[data-board-row="${r}"][data-board-col="${a}"]`);if(!o)continue;const i=Kt(t.id,r,a),s=xc(t.id,r,a);o.classList.toggle("cell-covered-by-upper-layer",i),o.classList.toggle("cell-vita-locked",s&&!i),i||s?o.setAttribute("aria-disabled","true"):o.removeAttribute("aria-disabled")}}function Mc(e,t){if(!e)return;const n=Mt(t),r=Qr(n);e.style.gridTemplateColumns=`repeat(${n}, ${r}px)`,e.style.setProperty("--board-cell-width",`${r}px`)}function Nc(e,t,{interactive:n=!1}={}){if(!e||!Array.isArray(t)||t.length===0)return;const r=t.length,a=t[0]?.length||la;e.innerHTML="",Mc(e,a);for(let o=0;o<r;o++)for(let i=0;i<a;i++){const s=document.createElement("div");s.className="cell",s.dataset.boardRow=String(o),s.dataset.boardCol=String(i),n&&(s.id=`cell-${o}-${i}`),wu(s,t[o]?.[i]??Ce),e.appendChild(s)}}function wc(){const e=document.getElementById("boardWrapper");if(!e)return;const t=be.reduce((i,s)=>{const l=Pc(s.width,s.height);return{width:Math.max(i.width,l.width),height:Math.max(i.height,l.height)}},{width:0,height:0}),r=[document.getElementById("board"),...Array.from(document.querySelectorAll(".board-layer-preview"))].filter(Boolean).reduce((i,s)=>({width:Math.max(i.width,s.offsetWidth||0),height:Math.max(i.height,s.offsetHeight||0)}),t),a=Math.max(1,r.width),o=Math.max(1,r.height);e.style.setProperty("--board-layer-stack-width",`${a}px`),e.style.setProperty("--board-layer-stack-height",`${o}px`),e.style.setProperty("width",`${a}px`,"important"),e.style.setProperty("height",`${o}px`,"important"),e.style.setProperty("max-height","none","important")}function yt(){const e=document.getElementById("boardLayerPreviewStack");if(!e)return;e.innerHTML="";let t=1;be.forEach((n,r)=>{if(n.id===Y)return;const a=document.createElement("div");a.className="board board-layer-board board-layer-preview",a.dataset.layerId=String(n.id),a.style.zIndex=String(r+1);const o=-(t*tm);a.style.setProperty("--board-layer-offset-x",`${o}px`),a.style.setProperty("--board-layer-offset-y",`${o}px`),t++,Nc(a,n.boardData,{interactive:!1}),Ui(a,n),e.appendChild(a)}),wc()}function ga(){const e=pt();qi(e.width,e.height),k=e.boardData;const t=document.getElementById("board");t&&(t.dataset.layerId=String(e.id),t.style.setProperty("--board-layer-offset-x","0px"),t.style.setProperty("--board-layer-offset-y","0px"),Nc(t,k,{interactive:!0}),Ui(t,e)),yt(),ra(k),ya(),Rn(we),requestAnimationFrame(Ke)}function Vs(e){const t=document.querySelector(`[data-board-layer-id="${e.id}"]`);if(!t)return;const n=t.querySelector('[data-layer-dimension="width"]'),r=t.querySelector('[data-layer-dimension="height"]'),a=t.querySelector(".board-layer-width-value"),o=t.querySelector(".board-layer-height-value");n&&(n.value=String(e.width)),r&&(r.value=String(e.height)),a&&(a.textContent=String(e.width)),o&&(o.textContent=String(e.height))}function wr(){const e=document.getElementById("boardLayerList");e&&(pt(),e.innerHTML="",be.forEach((t,n)=>{const r=document.createElement("div");r.className="board-layer-row",r.dataset.boardLayerId=String(t.id),t.id===Y&&r.classList.add("active"),r.addEventListener("click",()=>Ac(t.id));const a=document.createElement("div");a.className="board-layer-label",a.textContent=`第 ${n+1} 层`,r.appendChild(a);const o=document.createElement("div");o.className="board-layer-controls";const i=(s,l,c,u,d)=>{const f=document.createElement("label");f.className="board-layer-dimension",f.addEventListener("click",y=>y.stopPropagation());const h=document.createElement("span");h.className="board-layer-dimension-label",h.textContent=l;const C=document.createElement("input");C.type="range",C.min=String(c),C.max=String(u),C.step="1",C.value=String(t[s]),C.dataset.layerDimension=s;const p=document.createElement("span");return p.className=`slider-value ${d}`,p.textContent=String(t[s]),C.addEventListener("input",y=>{y.stopPropagation();const b=Ic(t.id,s,C.value);C.value=String(b),p.textContent=String(b)}),f.appendChild(h),f.appendChild(C),f.appendChild(p),f};o.appendChild(i("width","宽",Ol,Hl,"board-layer-width-value")),o.appendChild(i("height","高",Wl,jl,"board-layer-height-value")),r.appendChild(o),e.appendChild(r)}))}function Ac(e){const t=ht(e);t&&(m&&m.active&&Zt({restoreBoard:!1,silent:!0}),un(),Y=t.id,k=t.boardData,Xa(k),yn(),wr(),ga(),Vn(),Br())}function Ic(e,t,n){const r=ht(e);if(!r)return 0;const a=t==="height"?Yt(n):Mt(n);return r[t]===a?(Vs(r),a):(r.id===Y&&m&&m.active&&Zt({restoreBoard:!1,silent:!0}),r[t]=a,r.boardData=zi(r.width,r.height),Vs(r),r.id===Y?(k=r.boardData,ue={},qi(r.width,r.height),ga(),Vn(),Br()):(yt(),Lt(),requestAnimationFrame(Ke)),a)}function mf(e){e&&(e.preventDefault(),e.stopPropagation()),m&&m.active&&Zt({restoreBoard:!1,silent:!0}),un();const t=ro({width:la,height:bo});be.push(t),Y=t.id,k=t.boardData,ue={},yn(),wr(),ga(),Vn(),Br()}function Us(){pt();const e=pt();qi(e.width,e.height),wr()}function ff(e){if(!e||typeof e!="object")return;const t=(q,ae,ge)=>Math.min(ge,Math.max(ae,q)),n=t(Number.isFinite(Number(e.width))?Number(e.width):8,6,10),r=t(Number.isFinite(Number(e.height))?Number(e.height):14,6,14),a=Math.round(t(Number.isFinite(Number(e.count8Min))?Number(e.count8Min):Number.isFinite(Number(e.count8))?Number(e.count8):0,0,20)),o=Math.round(t(Number.isFinite(Number(e.count8Max))?Number(e.count8Max):Number.isFinite(Number(e.count8))?Number(e.count8):a,0,20)),i=Math.round(t(Number.isFinite(Number(e.count6Min))?Number(e.count6Min):Number.isFinite(Number(e.count6))?Number(e.count6):0,0,20)),s=Math.round(t(Number.isFinite(Number(e.count6Max))?Number(e.count6Max):Number.isFinite(Number(e.count6))?Number(e.count6):i,0,20)),l=t(Number.isFinite(Number(e.rhythmEarlyPairMin))?Number(e.rhythmEarlyPairMin):8,1,99),c=t(Number.isFinite(Number(e.rhythmEarlyPairMax))?Number(e.rhythmEarlyPairMax):18,1,99),u=t(Number.isFinite(Number(e.rhythmEarlyDistanceMin))?Number(e.rhythmEarlyDistanceMin):1,1,99),d=t(Number.isFinite(Number(e.rhythmEarlyDistanceMax))?Number(e.rhythmEarlyDistanceMax):7,1,99),f=t(Number.isFinite(Number(e.rhythmMiddlePairMin))?Number(e.rhythmMiddlePairMin):4,1,99),h=t(Number.isFinite(Number(e.rhythmMiddlePairMax))?Number(e.rhythmMiddlePairMax):12,1,99),C=t(Number.isFinite(Number(e.rhythmMiddleDistanceMin))?Number(e.rhythmMiddleDistanceMin):3,1,99),p=t(Number.isFinite(Number(e.rhythmMiddleDistanceMax))?Number(e.rhythmMiddleDistanceMax):12,1,99),y=t(Number.isFinite(Number(e.rhythmWaveMin))?Number(e.rhythmWaveMin):0,0,3),b=t(Number.isFinite(Number(e.rhythmWaveMax))?Number(e.rhythmWaveMax):3,0,3),g=t(Number.isFinite(Number(e.rhythmSameLayerChance))?Number(e.rhythmSameLayerChance):.5,0,1),S=t(Number.isFinite(Number(e.rhythmStuckPairChance))?Number(e.rhythmStuckPairChance):0,0,1),M=Math.round(t(Number.isFinite(Number(e.rhythmStuckPairCount))?Number(e.rhythmStuckPairCount):0,0,99)),x=t(Number.isFinite(Number(e.rhythmWeightStraight))?Number(e.rhythmWeightStraight):2.5,0,20),N=t(Number.isFinite(Number(e.rhythmWeightOneTurn))?Number(e.rhythmWeightOneTurn):4,0,20),P=t(Number.isFinite(Number(e.rhythmWeightSameTwoTurn))?Number(e.rhythmWeightSameTwoTurn):3,0,20),w=t(Number.isFinite(Number(e.rhythmWeightReverseTwoTurn))?Number(e.rhythmWeightReverseTwoTurn):2,0,20),I=Math.round(t(Number.isFinite(Number(e.batchCount))?Number(e.batchCount):100,1,1e4)),T=Math.round(t(Number.isFinite(Number(e.batchCampaignRounds))?Number(e.batchCampaignRounds):1,1,100)),A=Math.round(t(Number.isFinite(Number(e.simulateGameCount))?Number(e.simulateGameCount):100,1,1e4)),E=pc(e.gamePlayMode),j=gc(e.vitaMahjongMode),_=yc(e.gameFillMode),O=bc(e.gameTurnLimitMode),F=fc(e.gameGoalMode),D=hc(e.gameGoalTargetPairs),H=Sc(e.gameLimitMode),L=xa(e.stepPairExportScope||e.stepPairScope),U=Math.round(t(Number.isFinite(Number(e.autoBombPairCount))?Number(e.autoBombPairCount):0,0,xr));m&&m.active&&Zt({restoreBoard:!0,silent:!0});const $=(Array.isArray(e.boardLayers)?e.boardLayers:[]).map(q=>{const ae=Jt(q?.boardData),ge=ae?.[0]?.length||q?.width||n,Me=ae?.length||q?.height||r;return{rawId:Number(q?.id),width:Mt(ge),height:Yt(Me),boardData:ae||zi(ge,Me)}}).filter(q=>q.width>0&&q.height>0);if($.length>0){const q=Number(e.activeBoardLayerId);be=$.map(ge=>ro(ge));const ae=$.findIndex(ge=>ge.rawId===q);Y=be[Math.max(0,ae)]?.id||be[0].id}else{const q=ro({width:n,height:r});be=[q],Y=q.id}k=pt().boardData,mr("width","widthValue",Math.round(n),0),mr("height","heightValue",Math.round(r),0);const W=(q,ae)=>{const ge=document.getElementById(q);ge&&(ge.value=String(ae))};W("rhythmEarlyPairMin",Math.min(l,c)),W("rhythmEarlyPairMax",Math.max(l,c)),W("rhythmEarlyDistanceMin",Math.min(u,d)),W("rhythmEarlyDistanceMax",Math.max(u,d)),W("rhythmMiddlePairMin",Math.min(f,h)),W("rhythmMiddlePairMax",Math.max(f,h)),W("rhythmMiddleDistanceMin",Math.min(C,p)),W("rhythmMiddleDistanceMax",Math.max(C,p)),W("rhythmWaveMin",Math.min(Math.round(y),Math.round(b))),W("rhythmWaveMax",Math.max(Math.round(y),Math.round(b))),W("rhythmSameLayerChance",g),W("rhythmStuckPairChance",S),W("rhythmStuckPairCount",M),W("rhythmWeightStraight",x),W("rhythmWeightOneTurn",N),W("rhythmWeightSameTwoTurn",P),W("rhythmWeightReverseTwoTurn",w);const K=document.getElementById("count8Min");K&&(K.value=String(Math.min(a,o)));const ee=document.getElementById("count8Max");ee&&(ee.value=String(Math.max(a,o)));const Z=document.getElementById("count6Min");Z&&(Z.value=String(Math.min(i,s)));const ne=document.getElementById("count6Max");ne&&(ne.value=String(Math.max(i,s)));const me=document.getElementById("batchCount");me&&(me.value=String(I));const se=document.getElementById("batchCampaignRounds");se&&(se.value=String(T));const le=document.getElementById("simulateGameCount");le&&(le.value=String(A));const We=document.getElementById("autoBombPairCount");We&&(We.value=String(U)),pr(A),Ut=E,Zr(),ca=j,Qa(),lr=_,eo(),cr=O,to(),Bn=F,Pr=D,Jr(),Ae=H,no(),xi(L),wr(),ga(),Vn(),ya()}function hf(e){return`${e.width}x${e.height}`}function Yi(){try{localStorage.setItem(ql,JSON.stringify(qe))}catch(e){console.error("Failed to persist config groups:",e)}}function Nn(e=""){const t=document.getElementById("configGroupSelect");if(!t)return;const n=e||t.value||"";t.innerHTML='<option value="">请选择配置组</option>';for(const r of qe){const a=document.createElement("option");a.value=r.name,a.textContent=r.name,t.appendChild(a)}n&&qe.some(r=>r.name===n)?t.value=n:t.value=""}function Ys(){try{const e=localStorage.getItem(ql);if(!e){qe=[],Nn();return}const t=JSON.parse(e);if(!Array.isArray(t)){qe=[],Nn();return}qe=t.filter(n=>n&&typeof n.name=="string"&&n.config),Nn()}catch(e){console.error("Failed to load config groups:",e),qe=[],Nn()}}function pf(e){const t=new Date(e);if(!Number.isFinite(t.getTime()))return"--:--:--";const n=r=>String(r).padStart(2,"0");return`${n(t.getMonth()+1)}-${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}:${n(t.getSeconds())}`}function Tc(){return`gen_${Date.now()}_${Math.floor(Math.random()*1e6)}`}function Dc(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.min(100,t)):null}function Ec(e){const t=Number(e);return Number.isFinite(t)?Math.max(0,Math.round(t)):null}function gf(e){if(!e||typeof e!="object")return null;const t=Jt(e.boardData);if(!t)return null;const n=Number.isFinite(Number(e.direction))?Math.max(0,Math.min(8,Math.round(Number(e.direction)))):0,r=Date.parse(String(e.createdAt||"")),a=Number.isFinite(r)?new Date(r).toISOString():new Date().toISOString();return{recordId:String(e.recordId||Tc()),createdAt:a,direction:n,boardData:G(t),simulationWinRate:Dc(e.simulationWinRate),initialAdjacentPairCount:Ec(e.initialAdjacentPairCount)}}function Bc(e,t){const n=pf(e?.createdAt||""),r=Number.isFinite(Number(e?.simulationWinRate))?`${Number(e.simulationWinRate).toFixed(2)}%`:"--",a=Number.isFinite(Number(e?.initialAdjacentPairCount))?String(Math.max(0,Math.round(Number(e.initialAdjacentPairCount)))):"--";return`#${t+1} ${n} 胜率 ${r} 初始相邻配对 ${a}`}function Rc(){try{localStorage.setItem(Kl,JSON.stringify(ze))}catch(e){console.error("Failed to persist recent generation records:",e)}}function ar(){const e=document.getElementById("recentGenerationSelect");if(!e)return;e.innerHTML="";const t=document.createElement("option");t.value="",t.textContent=ze.length>0?"最近生成记录":"暂无生成记录",e.appendChild(t),ze.forEach((n,r)=>{const a=document.createElement("option");a.value=String(r),a.textContent=Bc(n,r),e.appendChild(a)}),e.value=""}function Ks(){try{const e=localStorage.getItem(Kl);if(!e){ze=[],ar();return}const t=JSON.parse(e);if(!Array.isArray(t)){ze=[],ar();return}ze=t.map(n=>gf(n)).filter(n=>n!==null).slice(0,Xl),ar()}catch(e){console.error("Failed to load recent generation records:",e),ze=[],ar()}}function yf(e,t=0){const n=Jt(e);if(!n)return null;const r=Number.isFinite(Number(t))?Math.max(0,Math.min(8,Math.round(Number(t)))):0,a={recordId:Tc(),createdAt:new Date().toISOString(),direction:r,boardData:G(n),simulationWinRate:null,initialAdjacentPairCount:null};return ze=[a,...ze].slice(0,Xl),Rc(),ar(),a.recordId}function bf(e,t=null,n=null){const r=String(e||"").trim();if(!r)return!1;const a=ze.findIndex(o=>String(o?.recordId||"")===r);return a<0?!1:(ze[a]={...ze[a],simulationWinRate:Dc(t),initialAdjacentPairCount:Ec(n)},Rc(),ar(),!0)}function Cf(){const e=document.getElementById("recentGenerationSelect");if(!e)return;const t=parseInt(e.value||"",10);if(!Number.isFinite(t)||t<0||t>=ze.length)return;const n=ze[t],r=Ma(n.boardData,n.direction,{},{levelId:null});e.value="",r&&J(`已应用最近生成记录：${Bc(n,t)}`)}function Sf(){const e=document.getElementById("configGroupName"),t=ef(),r=(e?.value||"").trim()||hf(t),a=qe.findIndex(l=>l.name===r),o={name:r,config:t},i=a>=0;i?qe[a]=o:qe.push(o),Yi(),Nn(r),e&&(e.value=r);const s=document.getElementById("info");s&&(s.textContent=i?`配置组已覆盖：${r}`:`配置组已保存：${r}`)}function vf(){const e=document.getElementById("configGroupSelect"),t=document.getElementById("configGroupName"),n=e?.value||"";if(!n)return;const r=qe.find(o=>o.name===n);if(!r)return;ff(r.config),t&&(t.value=r.name);const a=document.getElementById("info");a&&(a.textContent=`已加载配置组：${r.name}`)}function Pf(){const e=document.getElementById("configGroupSelect"),t=document.getElementById("configGroupName"),n=e?.value||"";if(!n){alert("请先在下拉列表中选择要删除的配置组。");return}qe=qe.filter(a=>a.name!==n),Yi(),Nn(),t&&t.value.trim()===n&&(t.value="");const r=document.getElementById("info");r&&(r.textContent=`已删除配置组：${n}`)}function xf(){const e=document.getElementById("configGroupFileInput");e&&(e.value="",e.click())}function Mf(e,t,n){const r=Number(e?.序号),a=Number.isFinite(r)?`序号${Math.round(r)}`:`配置${t+1}`;let o=a,i=2;for(;n.has(o);)o=`${a}_${i}`,i++;return n.add(o),o}function Nf(e){const t=(o,i)=>{const s=Number(o);return Number.isFinite(s)?s:i},n=t(e?.["8张同色"],0),r=t(e?.["6张同色"],0),a=t(e?.炸弹对数??e?.自动炸弹对数??e?.autoBombPairCount??e?.bombPairCount,0);return{width:t(e?.宽度,8),height:t(e?.高度,14),count8Min:t(e?.["8张同色最小值"]??e?.["8张同色最小"]??e?.["8张同色min"]??e?.count8Min,n),count8Max:t(e?.["8张同色最大值"]??e?.["8张同色最大"]??e?.["8张同色max"]??e?.count8Max,n),count6Min:t(e?.["6张同色最小值"]??e?.["6张同色最小"]??e?.["6张同色min"]??e?.count6Min,r),count6Max:t(e?.["6张同色最大值"]??e?.["6张同色最大"]??e?.["6张同色max"]??e?.count6Max,r),count8:n,count6:r,batchCount:t(e?.计算局数??e?.batchCount,100),batchCampaignRounds:t(e?.跑关轮数??e?.campaignRounds,1),simulateGameCount:t(e?.模拟局数??e?.simulateGameCount??e?.simGameCount,100),autoBombPairCount:a}}function wf(e){let t;try{t=JSON.parse(e)}catch{throw new Error("JSON格式错误，无法解析。")}if(!Array.isArray(t))throw new Error("JSON根节点必须是数组。");const n=new Set,r=[];for(let i=0;i<t.length;i++){const s=t[i];if(!s||typeof s!="object")continue;const l=Mf(s,i,n);r.push({name:l,config:Nf(s)})}if(r.length===0)throw new Error("JSON中没有可用的配置数据。");qe=r,Yi(),Nn();const a=document.getElementById("configGroupName");a&&(a.value="");const o=document.getElementById("info");o&&(o.textContent=`已导入配置组：${r.length} 条（已覆盖本地配置组）`)}function Af(e){const t=e?.target?.files?.[0];if(!t)return;const n=new FileReader;n.onload=()=>{try{const r=typeof n.result=="string"?n.result:"";wf(r)}catch(r){console.error("Failed to import config groups:",r),alert(r.message||"导入失败，请检查JSON格式。")}},n.onerror=()=>{console.error("Failed to read config group file:",n.error),alert("读取文件失败，请重试。")},n.readAsText(t,"utf-8")}function G(e){return Array.isArray(e)?e.map(t=>Array.isArray(t)?[...t]:[]):[]}function No(e){if(!Array.isArray(e))return!1;for(const t of e)if(Array.isArray(t)){for(const n of t)if(Number.isInteger(n)&&n>0)return!0}return!1}function If(e){const t=typeof e=="string"?e:"";return t?t.includes("失败")||t.includes("错误")||t.includes("无效")||t.includes("未找到")?"error":t.includes("进行中")||t.includes("模拟中")||t.includes("导出中")||t.includes("跑关中")||t.includes("%")?"progress":t.includes("试玩模式")?"mode":t.includes("请先")||t.includes("请稍后")||t.includes("提示")?"warning":t.includes("已")||t.includes("完成")||t.includes("成功")||t.includes("保存")||t.includes("读取")||t.includes("导入")||t.includes("导出")?"success":"default":"default"}function Tf(e="default"){const t=document.getElementById("info");t&&(t.classList.remove("info-default","info-success","info-progress","info-mode","info-warning","info-error"),t.classList.add(`info-${e}`))}function ao(e){const t=Number(e);return Number.isFinite(t)?Math.max(ii,Math.min(Jl,Math.round(t))):ii}function kc(e){return`img/bg/bg_${ao(e)}.png`}function ui(e){const t=ao(e);Ka=t;const n=document.querySelector(".board-container");n&&n.style.setProperty("--board-bg-image",`url('${kc(t)}')`),Fc()}function Fc(){const e=ao(Ka),t=document.getElementById("boardBgDropdownToggleText");t&&(t.textContent=`背景${e}`);const n=document.getElementById("boardBgDropdownMenu");n&&n.querySelectorAll(".board-bg-option").forEach(r=>{const a=ao(r.dataset.index);r.classList.toggle("selected",a===e)})}function Xs(){const e=document.getElementById("boardBgDropdownMenu");if(e){e.innerHTML="";for(let t=ii;t<=Jl;t++){const n=document.createElement("button");n.type="button",n.className="board-bg-option",n.dataset.index=String(t),n.onclick=i=>{i.stopPropagation(),Bf(t)};const r=document.createElement("span");r.className="board-bg-option-thumb";const a=document.createElement("img");a.src=kc(t),a.alt=`背景${t}`,r.appendChild(a);const o=document.createElement("span");o.className="board-bg-option-title",o.textContent=`背景${t}`,n.appendChild(r),n.appendChild(o),e.appendChild(n)}Fc()}}function Df(){const e=document.getElementById("boardBgDropdown");e&&e.classList.add("open")}function ka(){const e=document.getElementById("boardBgDropdown");e&&e.classList.remove("open")}function Ef(e){e&&e.stopPropagation();const t=document.getElementById("boardBgDropdown");t&&(t.classList.contains("open")||Df())}function Bf(e){ui(e)}function di(){const e=document.getElementById("info");e&&Tf(If(e.textContent||""))}function J(e=""){const t=document.getElementById("info");t&&(t.textContent=e,di())}function Rf(){const e=document.getElementById("info");!e||qo||(qo=new MutationObserver(()=>{di()}),qo.observe(e,{childList:!0,characterData:!0,subtree:!0}),di())}function ya(){const e=parseInt(document.getElementById("width").value)||0,t=parseInt(document.getElementById("height").value)||0;e>0&&t>0?J(`棋盘: ${e}×${t} = ${e*t} 格`):J("")}function Wr(e){const t=document.createElement("span");return t.className="campaign-progress-pill",t.textContent=e,t}function Wt(e={}){if(!et?.summaryElement)return;const{totalLevels:t=0,totalRounds:n=1,currentRound:r=1,currentLevelIndex:a=0,successCount:o=0,failureCount:i=0,skippedCount:s=0}=e,l=et.summaryElement;l.innerHTML="",l.appendChild(Wr(n>1?`轮次 ${r}/${n}`:"轮次 1/1")),l.appendChild(Wr(`进度 ${a}/${t}`)),l.appendChild(Wr(`完成 ${o}`)),l.appendChild(Wr(`失败 ${i}`)),l.appendChild(Wr(`跳过 ${s}`))}function vn(e,t=""){et?.currentElement&&(et.currentElement.textContent=t?`${e}：${t}`:e)}function Qn(e,t){if(!et?.logElement)return;et.resultIndex+=1;const n=document.createElement("li");n.className=`campaign-progress-log-item ${e||""}`.trim();const r=document.createElement("div");r.className="campaign-progress-log-index",r.textContent=String(et.resultIndex);const a=document.createElement("div");a.className="campaign-progress-log-text",a.textContent=t,n.appendChild(r),n.appendChild(a),et.logElement.appendChild(n),et.logElement.scrollTop=et.logElement.scrollHeight}function kf(e,t){const n=document.querySelector(".board-container");if(!n)return;Lc(),n.classList.add("campaign-progress-mode");const r=document.createElement("div");r.className="campaign-progress-panel",r.id="batchCampaignProgressPanel";const a=document.createElement("div");a.className="campaign-progress-header";const o=document.createElement("div"),i=document.createElement("div");i.className="campaign-progress-title",i.textContent="批量跑关进度";const s=document.createElement("div");s.className="campaign-progress-current",s.textContent="准备开始",o.appendChild(i),o.appendChild(s);const l=document.createElement("div");l.className="campaign-progress-summary",a.appendChild(o),a.appendChild(l);const c=document.createElement("ol");c.className="campaign-progress-log",r.appendChild(a),r.appendChild(c),n.appendChild(r),et={panel:r,currentElement:s,summaryElement:l,logElement:c,resultIndex:0},Wt({totalLevels:e,totalRounds:t})}function Lc(){const e=document.querySelector(".board-container"),t=document.getElementById("batchCampaignProgressPanel");t&&t.remove(),e&&e.classList.remove("campaign-progress-mode"),et=null,setTimeout(Ke,0)}function Ki(){ut||et&&Lc()}function Ff(e,t=null){switch(e){case"generate":return"生成候选棋盘失败";case"legality":return"牌面对数不合法";case"match_num":return"初始相邻同牌数不在范围";case"simulation_timeout":return"模拟超时";case"unreachable":return"胜率范围不可达，提前停止";case"screen_miss":return Number.isFinite(Number(t?.winRate))?`预筛未命中，胜率 ${(Number(t.winRate)*100).toFixed(1)}%`:"预筛未命中筛选条件";case"error":return t?.error?.message?`执行异常：${t.error.message}`:"执行异常";default:return"未命中筛选条件"}}function Lf(e){const t=Object.entries(e||{}).filter(([,n])=>n>0).sort((n,r)=>r[1]-n[1]);return t.length===0?"未命中筛选条件":t.slice(0,4).map(([n,r])=>`${Ff(n)} ${r}次`).join("，")}function $f(){return Ti}function Xe(){return Ut==="vita-mahjong"}function ba(){return Xe()&&ca==="tray"}function Yo(e=vr){return e==="hold"?"按住提示":e==="none"?"不提示":"始终提示"}function oo(){return(Xe()||nt("click"))&&vr==="hold"}function $c(){return(Xe()||nt("click"))&&vr==="selected"}function Ca(e=Be){if(Xe())return ba()?"试玩模式：点击未锁住的牌收入待选区，待选区两张相同牌会消除":"试玩模式：点击两张相同且未锁住的牌进行消除";switch(e){case"link":return"试玩模式：按住牌并拖动画线，线末端贴到相同牌时消除";case"drag":return"试玩模式：按住牌拖出路径，路径末端贴到相同牌时消除";default:return"试玩模式：点击两张相同且可连通的牌进行消除"}}function nt(e){return Be===e}function ir(){document.querySelectorAll('input[name="playOperationMode"]').forEach(t=>{t.checked=t.value===Be}),hi(),mi(),fi()}function mi(){document.querySelectorAll('input[name="playDisplayStyle"]').forEach(n=>{n.checked=n.value===Ur});const t=document.querySelector(".board-layout");t&&t.classList.toggle("play-style-simulator",Ur==="simulator"),kn(),_c()}function _c(){const e=document.querySelector(".board-container");if(!e)return;if(Ur!=="simulator"){e.style.removeProperty("--simulator-stage-width"),e.style.removeProperty("--simulator-stage-height");return}const t=525,n=934;e.style.setProperty("--simulator-stage-width",`${t}px`),e.style.setProperty("--simulator-stage-height",`${n}px`)}function _f(e){if(!Ud.has(e)){mi();return}Ur=e,mi(),requestAnimationFrame(Ke)}function fi(){document.querySelectorAll('input[name="playLinkStyle"]').forEach(t=>{t.checked=t.value===Ti})}function Of(e){if(!Yd.has(e)){fi();return}Ti=e,fi(),m&&m.active&&m.dragLink&&ns()}function hi(){document.querySelectorAll('input[name="playClickHintMode"]').forEach(n=>{n.checked=n.value===vr});const t=document.getElementById("playClickHintModeButton");t&&(t.textContent=Yo(),t.title=`点击操作：${Yo()}`,t.setAttribute("aria-label",`点击操作提示方式：${Yo()}`))}function Hf(){$t(),ot(),$c()&&m&&m.active&&m.selected&&es(m.selected.row,m.selected.col)}function Oc(e){if(!Vd.has(e)){hi();return}vr=e,Hf(),hi()}function Wf(e){e&&(e.preventDefault(),e.stopPropagation()),Oc(vr==="selected"?"hold":"selected")}function jf(e){if(!qd.has(e)){ir();return}if(Be===e){ir();return}Be=e,m&&m.active&&(dn(),$t(),ot(),wt(),Je(),He(),J(Ca(e))),ir()}function Gf(){const e=document.getElementById("playSettingsPanel");e&&(e.classList.add("open"),ir())}function Ha(){const e=document.getElementById("playSettingsPanel");e&&e.classList.remove("open")}function zf(e){e&&e.stopPropagation();const t=document.getElementById("playSettingsPanel");t&&(t.classList.contains("open")?Ha():Gf())}function io(){const e=document.getElementById("btnPlayMode");e&&(e.textContent=m&&m.active?"退出试玩":"试玩模式"),qf(),Ee()}function qf(){const e=document.getElementById("playStepLogSection");e&&(e.hidden=!(m&&m.active))}function Ln(e=!1){const t=document.getElementById("btnPlayRetry");t&&(t.style.display=e?"inline-flex":"none",t.disabled=!e)}function Ee(){const e=document.getElementById("btnPlayAutoPair");if(!e)return;const t=!!(m&&m.active),n=t?"inline-flex":"none",r=e.style.display!==n;if(e.style.display=n,!t){e.disabled=!0,r&&Ke();return}e.disabled=!!(m.isResolving||m.failed||Oe(m.boardData)),r&&Ke()}function Xi(){return{0:0,1:0,2:0,3:0}}function Hc(){const e=document.getElementById("playStepTypeCounts");e&&(nn||(nn=Xi()),e.textContent=`0拐：${nn[0]}，1拐：${nn[1]}，同向2拐：${nn[2]}，反向2拐：${nn[3]}`)}function Ji(){return!m||!m.active?[]:(Array.isArray(m.stepLogs)||(m.stepLogs=[]),m.stepLogs)}function Vf(){const e=Ji(),t=Xi();for(const n of e){const r=sm[String(n?.connectionType||"")];r&&(t[r]=(t[r]||0)+1)}nn=t,Hc()}function Wc(e=null){const t=document.getElementById("playStepLogList");if(!t)return;const n=t.querySelectorAll(".play-step-log-item");for(const r of n){const a=Number(r.dataset.stepIndex),o=Number.isFinite(Number(e))&&Number(e)>0&&a===Number(e);r.classList.toggle("active-step",o)}}function Uf(e){if(!e||typeof e!="object")return null;const t=Array.isArray(e.boardSnapshotBefore)?e.boardSnapshotBefore:null;return t?{stepIndex:Number(e.stepIndex)||0,move:e.move&&typeof e.move=="object"?{row1:Number(e.move.row1),col1:Number(e.move.col1),row2:Number(e.move.row2),col2:Number(e.move.col2)}:null,boardSnapshotBefore:t}:null}function Yf(e){if(!m||!m.active||m.isResolving)return;const t=Ji(),n=Number.isFinite(Number(e))?Math.max(1,Math.floor(Number(e))):0;if(!n||n>t.length)return;const r=t[n-1];if(!r||!Array.isArray(r.boardSnapshotBefore))return;if(Ve(),dn(),wt(),$t(),ot(),Je(),He(),m.boardData=G(r.boardSnapshotBefore),m.tokenBoard=$n(m.boardData),m.selected=null,m.dragLink=null,m.isResolving=!1,m.failed=!1,m.clearedPairs=Math.max(0,n-1),m.currentStepIndex=Math.max(0,n-1),On(m.boardData),Wc(n),Ee(),Oe(m.boardData)){Ln(!1),J(`试玩模式：已回到第${n}步操作前（当前棋盘已清空）`);return}if(!Ar(m.boardData)){Ln(!1);const i=fn(m.boardData);J(`试玩模式：已回到第${n}步操作前，当前可配对 ${i} 对`)}}function Kf(e){const t=document.createElement("div");t.className="play-step-log-item replayable";const n=Number.isFinite(Number(e?.stepIndex))?Math.max(1,Math.round(Number(e.stepIndex))):1;t.dataset.stepIndex=String(n);const r=document.createElement("span");r.className="play-step-log-index",r.textContent=`第${n}步`;const a=document.createElement("span");a.className="play-step-log-type";const o=Number.isFinite(Number(e?.remainingPairCount))?Math.max(0,Math.round(Number(e.remainingPairCount))):null,i=String(e?.connectionType||"未知连接"),s=String(e?.cancelReason||"").trim();a.textContent=o===null?i:`${i}（可配对：${o}对）`;const l=document.createElement("span");l.className="play-step-log-hint",l.textContent=s?`重选：${s}`:"悬停预览/点击回放";const c=Uf(e);return c&&(t.title="悬停查看该步操作前棋盘，点击回到该步",t.addEventListener("mouseenter",u=>{Gu(c,u?.clientX??t.getBoundingClientRect().left+12,u?.clientY??t.getBoundingClientRect().bottom+8)}),t.addEventListener("mousemove",u=>{Na(u.clientX,u.clientY)}),t.addEventListener("mouseleave",()=>{Ve()})),t.addEventListener("click",()=>{Yf(n)}),t.appendChild(r),t.appendChild(a),t.appendChild(l),t}function wo(e="进入试玩后会在这里按步骤记录消除连接类型"){const t=document.getElementById("playStepLogList");if(!t)return;Ve(),nn=Xi(),Hc(),m&&m.active&&(m.stepLogs=[],m.currentStepIndex=0),t.innerHTML="";const n=document.createElement("div");n.className="play-step-log-empty",n.textContent=e,t.appendChild(n)}function or(e){if(!m||!m.active)return;const t=String(e||"").trim();t&&(m.lastCancelReason=t)}function Ko(e=""){return!m||!m.active||Ae!=="error"?!1:(m.errorCount=mc()+1,ft(),m.errorCount>=zl?(Je(),or(e||"错误次数达到限制"),Dn("错误次数达到限制"),!0):!1)}function Zi(e,t,n=null,r=null){const a=document.getElementById("playStepLogList");if(!a)return;const o=Ji(),i=a.querySelector(".play-step-log-empty");i&&i.remove();const s=Number.isFinite(Number(e))?Math.max(1,Math.round(Number(e))):o.length+1,l=Number.isFinite(Number(n))?Math.max(0,Math.round(Number(n))):null;if(o.length>=s)for(o.splice(s-1);a.children.length>=s;)a.removeChild(a.lastElementChild);const c={stepIndex:s,connectionType:String(t||"未知连接"),remainingPairCount:l,move:r?.move&&typeof r.move=="object"?{row1:Number(r.move.row1),col1:Number(r.move.col1),row2:Number(r.move.row2),col2:Number(r.move.col2)}:null,boardSnapshotBefore:Array.isArray(r?.boardSnapshotBefore)?G(r.boardSnapshotBefore):null,boardSnapshotAfter:Array.isArray(r?.boardSnapshotAfter)?G(r.boardSnapshotAfter):null,cancelReason:String(r?.cancelReason||"").trim()};o.push(c);const u=Kf(c);a.appendChild(u),Vf(),m&&m.active&&(m.currentStepIndex=s),Wc(s),a.scrollHeight>a.clientHeight&&(a.scrollTop=a.scrollHeight)}function Dn(e="无可消除配对"){!m||!m.active||(dn(),wt(),ot(),Je(),He(),m.failed=!0,m.isResolving=!1,J(`试玩模式：失败（${e}）`),Ln(!0),Ee())}function Ar(e){if(!m||!m.active)return!1;if(ba())return zc();const t=Array.isArray(e)?e:m.boardData;return!Array.isArray(t)||Oe(t)||ep(t)?!1:(Dn(),!0)}function jc(){return be.every(e=>Oe(e.boardData))}function Xf(){return!m||!m.active?!1:Bn==="partial"?(m.clearedPairs||0)>=Pr:ba()&&pa().length>0?!1:jc()}function Sa(e=""){if(!Xf())return!1;dr(),Ln(!1),Ee();const t=Bn==="partial"?`已达成部分消除目标 ${Pr} 对`:"已清空棋盘",n=e?`（本次连接：${e}）`:"";return J(`试玩模式：${t}，共消除 ${m.clearedPairs||0} 对${n}`),!0}function Jf(){for(const e of be){const t=e?.boardData;if(Array.isArray(t))for(let n=0;n<t.length;n++)for(let r=0;r<(t[n]?.length||0);r++){const a=t[n]?.[r];if(ea(e.id,n,r,a))return!0}}return!1}function Gc(e=pa()){const t=new Map;for(let n=0;n<e.length;n++){const r=Number(e[n]?.baseId);if(Number.isInteger(r)){if(t.has(r))return[t.get(r),n];t.set(r,n)}}return null}function zc(){if(!m||!m.active)return!1;const e=pa();return Gc(e)?!1:e.length>=4?(Dn("待选区已满"),!0):jc()?e.length===0?!1:(Dn("棋盘已空但待选区仍有未配对牌"),!0):Jf()?!1:(Dn("没有可收入待选区的牌"),!0)}function Zf(){if(!m||!m.active){iu();return}if(sa({silent:!0}),!Array.isArray(m.originalBoard))return;const e=document.getElementById("board");e&&e.classList.remove("play-shifting"),dn(),wt(),Je(),He(),Array.isArray(m.originalBoardLayers)?(m.originalBoardLayers.forEach(t=>{const n=ht(t.id);n&&(n.width=t.width,n.height=t.height,n.boardData=G(t.boardData))}),k=pt().boardData,m.boardData=k,m.tokenBoards=Object.fromEntries(be.map(t=>[t.id,$n(t.boardData)])),m.tokenBoard=m.tokenBoards[Y],On(k),yt(),Lt()):(m.boardData=G(m.originalBoard),m.tokenBoard=$n(m.originalBoard),On(m.boardData)),m.selected=null,m.dragLink=null,m.isResolving=!1,m.failed=!1,m.clearedPairs=0,m.errorCount=0,m.vitaTray=[],m.lastCancelReason="",Ln(!1),Ee(),wo("试玩模式：已重玩，等待新的消除步骤"),ji({start:!0}),Tt(),J("试玩模式：已重玩，请继续选择可消除牌"),Rr(!0)}async function Qf(){if(!m||!m.active||m.isResolving)return;if(m.failed){J("试玩模式：当前无可消除配对，请点击重玩"),Ee();return}const e=m.boardData;if(!Array.isArray(e)||Oe(e)){Ee();return}const t=gs(e,!0);if(!t){Ar(e)||J("试玩模式：当前无可消除配对"),Ee();return}Je(),va();const n=At(e,t.row1,t.col1,t.row2,t.col2);await ta(t,n),Ee()}function eh(){if(!m||!m.active||m.isResolving){J("请先进入试玩模式");return}if(m.failed){J("试玩模式：当前无可消除配对，请点击重玩");return}const e=m.boardData,t=gs(e,!0);if(!t){Ar(e)||J("试玩模式：当前无可提示配对");return}Je(),va(),ot(),[[t.row1,t.col1],[t.row2,t.col2]].forEach(([r,a])=>{if(Ft(r,a))return;const o=document.getElementById(`cell-${r}-${a}`);o&&o.classList.add("play-click-match-hint")});const n=ce(e?.[t.row1]?.[t.col1]);J(`提示：可消除 ${n??""}`)}function th(){if(!m||!m.active||m.isResolving){J("请先进入试玩模式");return}if(m.failed){J("试玩模式：当前无可消除配对，请点击重玩");return}const e=m.boardData;if(!Array.isArray(e)||Oe(e))return;const t=[],n=[];for(let o=0;o<e.length;o++){const i=e[o];if(Array.isArray(i))for(let s=0;s<i.length;s++){const l=i[s];sn(l)&&(t.push({row:o,col:s}),n.push(l))}}if(n.length<=1){J("试玩模式：当前无需洗牌");return}let r=mt(n);for(let o=0;o<30;o++){const i=mt(n),s=G(e);if(t.forEach((l,c)=>{s[l.row][l.col]=i[c]}),fn(s)>0){r=i;break}}if(t.forEach((o,i)=>{e[o.row][o.col]=r[i]}),m.tokenBoard=$n(e),m.selected=null,m.dragLink=null,m.failed=!1,Je(),va(),ot(),He(),On(e),!Ar(e)){const o=fn(e);J(`洗牌完成，当前可配对 ${o} 对`)}Ee()}function nh(){qm(30)}function va(){m&&(Qi(),Vc(),ts(),m.dragLink=null)}function Qi(){const e=document.getElementById("boardWrapper")||document.getElementById("board");e&&e.querySelectorAll(".cell.play-drag-match-hint").forEach(t=>{t.classList.remove("play-drag-match-hint"),t.style.removeProperty("--play-drag-match-hint-strength")})}function qc(){if(Qi(),!nt("drag"))return;const e=m?.dragLink,t=m?.boardData;!e||e.completed||!Array.isArray(t)||Eh(e,t).forEach(n=>{if(Ft(n.row,n.col))return;const r=document.getElementById(`cell-${n.row}-${n.col}`);r&&(r.classList.add("play-drag-match-hint"),r.style.setProperty("--play-drag-match-hint-strength",String(Math.max(0,Math.min(1,n.strength)))))})}function ot(){const e=document.getElementById("boardWrapper")||document.getElementById("board");e&&e.querySelectorAll(".cell.play-click-match-hint").forEach(t=>{t.classList.remove("play-click-match-hint")})}function $t(){qr!==null&&(window.clearTimeout(qr),qr=null),oo()&&ot()}function rh(e,t,n,r=Y){const a=e?.[t]?.[n];if(!sn(a)||Kt(r,t,n))return[];const o=ce(a);if(o===null)return[];const i=[];for(let s=0;s<e.length;s++){const l=e[s];if(Array.isArray(l))for(let c=0;c<l.length;c++){if(s===t&&c===n)continue;const u=l[c];sn(u)&&(Kt(r,s,c)||ce(u)===o&&i.push({row:s,col:c}))}}return i}function es(e,t,n=Y){if(ot(),!nt("click")||!m||!m.active||m.isResolving||m.failed)return;const r=St(n);Array.isArray(r)&&(Kt(n,e,t)||rh(r,e,t,n).forEach(a=>{if(Kt(n,a.row,a.col))return;const o=cn(n,a.row,a.col);o&&o.classList.add("play-click-match-hint")}))}function Js(e,t,n=Y){$t(),qr=window.setTimeout(()=>{qr=null,oo()&&es(e,t,n)},nm)}function dn(){const e=m?.adjacentChoiceOverlay;e&&e.parentNode&&e.parentNode.removeChild(e),m&&(m.adjacentChoiceOverlay=null,m.adjacentChoice=null)}function Vc(){const e=m?.dragSource;if(e){const t=document.getElementById(`cell-${e.row}-${e.col}`);t&&t.classList.remove("play-drag-source-hidden")}m&&(m.dragSource=null)}function ts(){const e=m?.dragGhost;e&&e.parentNode&&e.parentNode.removeChild(e),m&&(m.dragGhost=null)}function Uc(e){const t=document.getElementById("board"),n=document.getElementById("cell-0-0");if(!t||!n||!e)return null;const r=t.getBoundingClientRect(),a=n.getBoundingClientRect(),{stepX:o,stepY:i}=Ir(),s=a.left-r.left+a.width/2,l=a.top-r.top+a.height/2;return{x:r.left+s+(e.col-1)*o,y:r.top+l+(e.row-1)*i}}function Yc(e=null){const t=m?.dragGhost;if(!t)return;const n=e||Uc(m?.dragLink?.path?.[m.dragLink.path.length-1]);n&&(t.style.left=`${n.x}px`,t.style.top=`${n.y}px`)}function ah(e,t){if(!e||!Array.isArray(t)||t.length===0)return null;if(t.length<2){const s=t[0];return s?{x:s.x,y:s.y}:null}const n=t[t.length-1],r=t[t.length-2];if(!r||!n)return null;if(Math.abs(n.x-r.x)>=Math.abs(n.y-r.y)){const s=Math.min(r.x,n.x),l=Math.max(r.x,n.x);return{x:Math.max(s,Math.min(l,e.x)),y:n.y}}const o=Math.min(r.y,n.y),i=Math.max(r.y,n.y);return{x:n.x,y:Math.max(o,Math.min(i,e.y))}}function oh(e){return!e||!Array.isArray(e.path)?[]:mn(e.path).map(t=>Uc(t)).filter(Boolean)}function Zs(e){if(!nt("drag")||!e||typeof e.clientX!="number"||typeof e.clientY!="number")return;const t=ah({x:e.clientX,y:e.clientY},oh(m?.dragLink));Yc(t)}function ih(e,t){if(ts(),!nt("drag"))return;const n=document.getElementById(`cell-${e}-${t}`);if(!n||!document.body)return;const r=n.getBoundingClientRect(),a=n.cloneNode(!0);a.removeAttribute("id"),a.classList.add("play-drag-ghost"),a.style.width=`${r.width}px`,a.style.height=`${r.height}px`,document.body.appendChild(a),m.dragGhost=a,m.dragSource={row:e,col:t},n.classList.add("play-drag-source-hidden"),Yc({x:r.left+r.width/2,y:r.top+r.height/2})}function Je(){if(ot(),!m||!m.selected)return;const{row:e,col:t,layerId:n=Y}=m.selected,r=cn(n,e,t);r&&(r.classList.remove("play-selected"),r.classList.remove("play-clearing")),m.selected=null}function er(e,t,n=Y){if(!m)return;Je();const r=cn(n,e,t);r&&r.classList.add("play-selected"),m.selected={row:e,col:t,layerId:n},$c()&&es(e,t,n)}function sh(e){const t=document.getElementById("board"),n=document.getElementById("cell-0-0");if(!t||!n||!e)return null;const r=m?.boardData;if(!Array.isArray(r)||r.length===0)return null;const a=t.getBoundingClientRect(),o=n.getBoundingClientRect(),{stepX:i,stepY:s}=Ir();if(!i||!s)return null;const l=o.left-a.left+o.width/2,c=o.top-a.top+o.height/2,u=e.clientX-a.left,d=e.clientY-a.top,f=Math.round((u-l)/i)+1;return{row:Math.round((d-c)/s)+1,col:f}}function lh(e=Be){return e==="link"||e==="drag"}function Kc(){const t=document.getElementById("board")?.querySelector(".play-link-overlay");t&&(t.classList.remove("play-link-overturn-warning"),t.getBoundingClientRect(),t.classList.add("play-link-overturn-warning"),window.setTimeout(()=>{t.classList.remove("play-link-overturn-warning")},380))}function ns(){const e=m?.dragLink,t=m?.boardData;if(!(!e||!Array.isArray(t))){if(!lh(Be)){He();return}ms($h(e,t,Be),t[0]?.length||0,t.length,{guideSegments:Fh(e,t,Be),turnCount:e.turns})}}function ch(e,t,n){if(!m||!m.active||m.isResolving||m.failed||Ft(t,n))return!1;const r=Nh(m.boardData,t,n);return r?(e.preventDefault(),Je(),He(),m.dragLink=r,ih(t,n),ns(),qc(),J(`试玩模式：拖动连线 ${r.matchBaseId}`),!0):!1}function Xc(e){const t=m?.dragLink;if(!t||t.completed||m.isResolving)return;const n=sh(e);if(n){if(!Ih(t,m.boardData,n.row,n.col,Be)){Th(t,m.boardData,n.row,n.col)&&(e.preventDefault(),Kc()),Zs(e);return}e.preventDefault(),ns(),qc(),Zs(e)}}async function uh(){const e=m?.dragLink;if(!e||e.completed||m.isResolving)return;const t=ru(e,m.boardData,Be);if(!t){wt("松开后未连接到相同牌，取消当前连线");return}e.completed=!0;const n={row1:e.startRow,col1:e.startCol,row2:t.row,col2:t.col};m.dragLink=null,ts(),Qi();try{await ta(n,au(e,t,Be),{suppressLinkRender:nt("drag")})}finally{Vc()}}function wt(e=""){const t=m?.dragLink;if(!t)return;const n=document.getElementById(`cell-${t.startRow}-${t.startCol}`);n&&n.classList.remove("play-selected"),He(),va(),e&&or(e)}async function Jc(e,t){if(!m||!m.active||m.isResolving)return;dn();const n=m.boardData,r=At(n,e.row,e.col,t.row,t.col);await ta({row1:e.row,col1:e.col,row2:t.row,col2:t.col},r,{suppressSelectionLift:!0})}function dh(e,t,n,r){if(!Array.isArray(e)||!t)return!1;const a=ds(e,t.row,t.col,n,r,6);return!a||so(a)<=2?!1:(ms(a,e[0]?.length||0,e.length,{turnCount:so(a)}),Kc(),window.setTimeout(()=>{He()},420),!0)}function mh(e,t){if(Ft(t.row,t.col))return null;const n=document.getElementById(`cell-${t.row}-${t.col}`);if(!n)return null;const r=n.getBoundingClientRect(),a=n.cloneNode(!0);return a.removeAttribute("id"),a.classList.add("play-adjacent-choice-tile"),a.style.left=`${r.left}px`,a.style.top=`${r.top}px`,a.style.width=`${r.width}px`,a.style.height=`${r.height}px`,a.addEventListener("click",o=>{o.stopPropagation(),Jc(e,t)}),a}function fh(e,t){if(!m||!Array.isArray(t)||t.length===0)return;dn();const n=document.createElement("div");n.className="play-adjacent-choice-overlay",n.addEventListener("click",()=>{dn(),J(Ca())}),m.adjacentChoiceOverlay=n,m.adjacentChoice={source:{row:e.row,col:e.col},targets:t.map(r=>({row:r.row,col:r.col}))};for(const r of t){const a=mh(e,r);a&&n.appendChild(a)}document.body.appendChild(n),J("请选择要配对的相邻牌，点击其他位置取消")}async function hh(e,t){if(!m||!m.active||m.isResolving||m.failed||Ft(e,t))return;va(),He();const n={row:e,col:t},r=_h(m.boardData,e,t);if(r.length!==0){if(r.length===1){await Jc(n,r[0]);return}fh(n,r)}}function rt(e){return new Promise(t=>{setTimeout(t,e)})}function $n(e){if(!Array.isArray(e))return[];let t=1;return e.map(n=>Array.isArray(n)?n.map(r=>{if(!Number.isInteger(r)||r<=0)return null;const a=t;return t++,a}):[])}function Ir(){const e={stepX:151,stepY:166},t=document.getElementById("cell-0-0");if(!t)return e;const n=document.getElementById("cell-0-1"),r=document.getElementById("cell-1-0"),a=t.getBoundingClientRect(),o=n?Math.abs(n.getBoundingClientRect().left-a.left):e.stepX,i=r?Math.abs(r.getBoundingClientRect().top-a.top):e.stepY;return{stepX:o>0?o:e.stepX,stepY:i>0?i:e.stepY}}function Zc(e,t){const n=[];if(!Array.isArray(e)||!Array.isArray(t))return n;const r=new Map,a=e.length;for(let i=0;i<a;i++){const s=e[i]?.length||0;for(let l=0;l<s;l++){const c=e[i]?.[l];!Number.isInteger(c)||c<=0||r.set(c,{row:i,col:l})}}const o=t.length;for(let i=0;i<o;i++){const s=t[i]?.length||0;for(let l=0;l<s;l++){const c=t[i]?.[l];if(!Number.isInteger(c)||c<=0)continue;const u=r.get(c);u&&(u.row===i&&u.col===l||n.push({row:i,col:l,deltaRow:u.row-i,deltaCol:u.col-l}))}}return n}async function Qc(e=[]){const n=document.getElementById("board");if(!n||!Array.isArray(e)||e.length===0)return;const{stepX:r,stepY:a}=Ir();n.classList.add("play-shifting");const o=[];for(const i of e){const s=document.getElementById(`cell-${i.row}-${i.col}`);if(!s||!s.classList.contains("filled"))continue;const l=(i.deltaCol||0)*r,c=(i.deltaRow||0)*a;s.style.setProperty("--shift-start-x",`${l}px`),s.style.setProperty("--shift-start-y",`${c}px`),s.classList.remove("play-shift-anim"),s.offsetWidth,s.classList.add("play-shift-anim"),o.push(s)}await rt(150);for(const i of o)i.classList.remove("play-shift-anim"),i.style.removeProperty("--shift-start-x"),i.style.removeProperty("--shift-start-y");n.classList.remove("play-shifting")}function _n(e){if(Ki(),!!Array.isArray(e)){for(let t=0;t<e.length;t++)for(let n=0;n<e[t].length;n++)Do(t,n,e[t][n]);Lt()}}function On(e){const t=document.getElementById("board");t&&t.classList.add("play-no-transition"),_n(e),t&&(t.offsetWidth,t.classList.remove("play-no-transition"))}function Tr(e){if(!e)return null;const t=e.closest(".board"),n=Number(t?.dataset?.layerId||Y),r=Number(e.dataset?.boardRow),a=Number(e.dataset?.boardCol);if(Number.isInteger(r)&&Number.isInteger(a))return{row:r,col:a,layerId:n};if(!e.id)return null;const o=e.id.match(/^cell-(\d+)-(\d+)$/);return o?{row:parseInt(o[1],10),col:parseInt(o[2],10),layerId:n}:null}function ph(e,t){if(!m||!m.active)return null;const n=[ci(Y),...be.slice().reverse().filter(r=>r.id!==Y).map(r=>ci(r.id))].filter(Boolean);for(const r of n){const a=Array.from(r.querySelectorAll(".cell"));for(const o of a){const i=o.getBoundingClientRect();if(e<i.left||e>i.right||t<i.top||t>i.bottom)continue;const s=Tr(o);if(!s)continue;const c=St(s.layerId)?.[s.row]?.[s.col];if(sn(c)&&!Kt(s.layerId,s.row,s.col))return s}}return null}function rs(e,t){if(e&&typeof e.clientX=="number"&&typeof e.clientY=="number"){const n=ph(e.clientX,e.clientY);if(n)return n}return Tr(t)}function Oe(e){if(!Array.isArray(e))return!0;for(const t of e)if(Array.isArray(t))for(const n of t){const r=ie(n);if(kt(r.baseId))return!1}return!0}function gh(e,t,n,r){const a=[],o=[[-1,0],[1,0],[0,-1],[0,1]];for(const[i,s]of o){const l=e+i,c=t+s;l<0||l>=r||c<0||c>=n||a.push({row:l,col:c})}return a}function zn(e,t,n){if(!Array.isArray(e)||!Array.isArray(n))return;const r=e.length,a=e[0]?.length||0,o=new Map;for(const i of n){const s=gh(i.row,i.col,a,r);for(const l of s)o.set(`${l.row}-${l.col}`,l)}o.forEach(i=>{const s=e[i.row]?.[i.col]??Ce,l=ie(s);if(l.hasAttachment&&xe.has(l.attachmentId)){e[i.row][i.col]=l.baseId;return}if(l.baseId===Fe){e[i.row][i.col]=Ce,Array.isArray(t)&&(t[i.row][i.col]=null);return}(l.baseId===Le||l.baseId===$e)&&(e[i.row][i.col]=l.baseId-1)})}function Dr(e,t,n){const r=[{row:n.row1,col:n.col1},{row:n.row2,col:n.col2}];for(const a of r)e[a.row][a.col]=Ce,Array.isArray(t)&&(t[a.row][a.col]=null);return r}function Pa(e,t){for(let r=0;r<1;r++){const a=rp(e);if(!a)break;const o=Dr(e,t,a);zn(e,t,o)}}function mn(e){if(!Array.isArray(e)||e.length<=2)return e||[];const t=[e[0]];for(let n=1;n<e.length-1;n++){const r=t[t.length-1],a=e[n],o=e[n+1],i=r.row===a.row&&a.row===o.row,s=r.col===a.col&&a.col===o.col;!i&&!s&&t.push(a)}return t.push(e[e.length-1]),t}function yh(e,t,n){if(!e||!t||!n)return 0;const r=t.row-e.row,a=t.col-e.col,o=n.row-t.row,i=n.col-t.col,s=a*o-r*i;return s>0?1:s<0?-1:0}function pn(e){if(!Array.isArray(e)||e.length<2)return"直线连接";const t=so(e);if(t<=0)return"直线连接";if(t===1)return"1拐连接";const n=[];for(let r=1;r<e.length-1;r++){const a=yh(e[r-1],e[r],e[r+1]);a!==0&&n.push(a)}return n.length>=2&&n[0]===n[1]?"同向2拐":"反向2拐"}function so(e){return!Array.isArray(e)||e.length<2?0:Math.max(0,mn(e).length-2)}function Ao(e){if(!Array.isArray(e)||e.length<2)return null;let t=0;for(let n=1;n<e.length;n++){const r=e[n-1],a=e[n],o=Number(r?.row),i=Number(r?.col),s=Number(a?.row),l=Number(a?.col);if(![o,i,s,l].every(Number.isFinite))return null;t+=Math.abs(s-o)+Math.abs(l-i)}return t}function as(e,t){if(!Array.isArray(t)||t.length===0)return{totalDistance:0,pairCount:0,averageDistance:0,totalFriendlyScore:0,averageFriendlyScore:0};let n=0,r=0,a=0;for(const o of t){const i=is(e,o),s=i.distance;if(!Number.isFinite(s))continue;const l=i.connectionType;n+=s,a+=Ch(s,l),r++}return{totalDistance:n,pairCount:r,averageDistance:r>0?n/r:0,totalFriendlyScore:a,averageFriendlyScore:r>0?a/r:0}}function os(e){if(!Array.isArray(e)||e.length===0)return 0;const t=new Map;for(let a=0;a<e.length;a++){const o=e[a];if(Array.isArray(o))for(let i=0;i<o.length;i++){const s=ie(o[i]);Number.isInteger(s.baseId)&&(s.baseId<1||s.baseId>=he||s.baseId===pe||Rt(s.baseId)||(t.has(s.baseId)||t.set(s.baseId,[]),t.get(s.baseId).push({row:a,col:i})))}}let n=0,r=0;return t.forEach(a=>{if(!(!Array.isArray(a)||a.length<2))for(let o=0;o<a.length-1;o++)for(let i=o+1;i<a.length;i++)n+=Math.abs(a[o].row-a[i].row)+Math.abs(a[o].col-a[i].col),r++}),r>0?n/r:0}function bh(e){switch(e){case"1拐连接":return .75;case"同向2拐":return .55;case"反向2拐":return .45;case"直线连接":return 1;default:return .5}}function Ch(e,t){return 20/(20+(Number.isFinite(Number(e))?Math.max(0,Number(e)):0))*bh(t)}function Sh(e){const t=Number(e);return Number.isFinite(t)?t<3?-1:t>=5&&t<=10?1:t>10?2:0:0}function vh(e){switch(e){case"直线连接":return-1;case"1拐连接":return 1;case"同向2拐":return 2;case"反向2拐":return 3;default:return 0}}function is(e,t){if(!t)return{distance:null,connectionType:""};const n=Number(t.connectionDistance??t.distance);let r=Number.isFinite(n)&&n>=0?n:null,a=typeof t.connectionType=="string"?t.connectionType:"",o=Array.isArray(t.connectionPath)?t.connectionPath:null;if((r===null||!a)&&Array.isArray(e)){if(o||(o=At(e,t.row1,t.col1,t.row2,t.col2),Array.isArray(o)&&(t.connectionPath=o)),r===null){const i=Ao(o);r=Number.isFinite(i)&&i>=0?i:null,r!==null&&(t.connectionDistance=r)}a||(a=pn(o),t.connectionType=a)}return{distance:r,connectionType:a}}function Ph(e,t){const n=is(e,t);return Sh(n.distance)+vh(n.connectionType)}function eu(e,t){return!Array.isArray(t)||t.length===0?0:t.reduce((r,a)=>{const o=Ph(e,a);return r+(Number.isFinite(o)?o:0)},0)/t.length}function xh(e,t){const n=Number.isFinite(Number(e))?Math.max(0,Number(e)):0,r=Number.isFinite(Number(t))?Math.max(0,Number(t)):0,a=Math.max(0,n/2);if(a<=0)return 0;const o=Math.max(0,a-r);return Math.max(0,Math.min(1,o/a))}function tu({remainingCardCountBefore:e,availablePairCountBefore:t,sceneDifficultyScoreBefore:n}={}){const r=xh(e,t);if(r<=0)return 0;const a=Number.isFinite(Number(n))?Number(n):0;return Math.max(0,r*a)}function Mh(e,t=null,n=null){if(!Array.isArray(e)||e.length===0)return 0;const r=De(e);if(r<=0)return 0;const a=Array.isArray(n)?n:qn(e),o=Array.isArray(a)?a.length:0,i=as(e,a),s=Math.max(0,Number(i.totalFriendlyScore)||0),l=Number.isFinite(Number(t))&&Number(t)>0?Number(t):r,c=l>0?1+Math.max(0,r)/l*.25:1;return 100/(1+s)*c+(o===0?200:0)}function Qs(e,t=null,n=null){const r=Array.isArray(n)?n:qn(e),a=as(e,r);return{pairCount:Array.isArray(r)?r.length:0,averageAvailableDistance:Number(a.averageDistance)||0,boardFriendlyScore:Number(a.totalFriendlyScore)||0,boardDifficultyScore:Mh(e,t,r)}}const ss=2;function Nh(e,t,n){const r=e?.[t]?.[n];if(!Fn(t,n,r))return null;const a=ce(r);return a===null?null:{startRow:t,startCol:n,matchBaseId:a,path:[{row:t+1,col:n+1}],lastDirection:null,turns:0,completed:!1}}function ls(e,t){if(!e||!t)return null;const n=t.row-e.row,r=t.col-e.col;return n===0&&r===0||n!==0&&r!==0?null:n!==0?"vertical":"horizontal"}function cs(e,t,n){if(!Array.isArray(e)||e.length===0)return!1;const r=e.length,a=e[0]?.length||0;return t>=0&&t<=r+1&&n>=0&&n<=a+1}function pi(e,t,n){if(!cs(e,t,n))return!1;const r=t-1,a=n-1;return r<0||r>=e.length||a<0||a>=(e[0]?.length||0)?!0:_e(e[r]?.[a]??Ce)}function nu(e,t,n,r){if(!e||!Array.isArray(t))return!1;const a=n-1,o=r-1;if(a===e.startRow&&o===e.startCol||Ft(a,o))return!1;const i=t?.[a]?.[o];return Fn(a,o,i)?ce(i)===e.matchBaseId:!1}function us(e,t){return!e||!Array.isArray(e.path)||!t?-1:e.path.findIndex(n=>n.row===t.row&&n.col===t.col)}function wh(e){if(!e||!Array.isArray(e.path))return;let t=null,n=0;for(let r=1;r<e.path.length;r++){const a=ls(e.path[r-1],e.path[r]);a&&(t&&t!==a&&n++,t=a)}e.lastDirection=t,e.turns=n}function Ah(e,t){return!e||!Array.isArray(e.path)||t<0||t>=e.path.length-1?!1:(e.path.splice(t+1),wh(e),!0)}function Ih(e,t,n,r,a="drag"){if(!e||e.completed||!Array.isArray(e.path))return!1;const o={row:Math.round(Number(n)),col:Math.round(Number(r))};if(!Number.isFinite(o.row)||!Number.isFinite(o.col))return!1;const i=e.path[e.path.length-1],s=ls(i,o);if(!s)return!1;const l=us(e,o);if(l>=0)return Ah(e,l);const c=Math.sign(o.row-i.row),u=Math.sign(o.col-i.col),d=e.turns+(e.lastDirection&&e.lastDirection!==s?1:0);if(d>ss)return!1;const f=[];let h=i.row+c,C=i.col+u;for(;h!==o.row||C!==o.col;){if(!pi(t,h,C))return!1;f.push({row:h,col:C}),h+=c,C+=u}const p=pi(t,o.row,o.col),y=a==="link"&&nu(e,t,o.row,o.col);return!p&&!y?!1:(f.push(o),e.path.push(...f),e.lastDirection=s,e.turns=d,!0)}function Th(e,t,n,r){if(!e||e.completed||!Array.isArray(e.path))return!1;const a={row:Math.round(Number(n)),col:Math.round(Number(r))};if(!Number.isFinite(a.row)||!Number.isFinite(a.col)||!cs(t,a.row,a.col)||us(e,a)>=0)return!1;const o=e.path[e.path.length-1],i=ls(o,a);return i?e.turns+(e.lastDirection&&e.lastDirection!==i?1:0)>ss:!1}function Dh(e,t){if(!e||!Array.isArray(e.path)||e.path.length<2)return null;const n=e.path[e.path.length-1],r=[{row:n.row-2,col:n.col-1},{row:n.row,col:n.col-1},{row:n.row-1,col:n.col-2},{row:n.row-1,col:n.col}];for(const a of r){if(a.row===e.startRow&&a.col===e.startCol)continue;const o=t?.[a.row]?.[a.col];if(Fn(a.row,a.col,o)&&ce(o)===e.matchBaseId)return a}return null}function Eh(e,t,n=3){if(!e||!Array.isArray(e.path)||!Array.isArray(t))return[];const r=e.path[e.path.length-1];if(!r)return[];const a=Math.max(1,Number(n)||1),o=[];for(let i=0;i<t.length;i++){const s=t[i];if(Array.isArray(s))for(let l=0;l<s.length;l++){if(i===e.startRow&&l===e.startCol)continue;const c=s[l];if(!Fn(i,l,c)||ce(c)!==e.matchBaseId)continue;const u=Math.abs(r.row-(i+1))+Math.abs(r.col-(l+1));u<=0||u>a||o.push({row:i,col:l,distance:u,strength:Math.max(.12,(a-u+1)/a)})}}return o.sort((i,s)=>i.distance-s.distance||i.row-s.row||i.col-s.col)}function Bh(e,t){if(!e||!Array.isArray(e.path)||e.path.length<2)return null;const n=e.path[e.path.length-1],r=n.row-1,a=n.col-1;if(r===e.startRow&&a===e.startCol)return null;const o=t?.[r]?.[a];return!Fn(r,a,o)||ce(o)!==e.matchBaseId?null:{row:r,col:a}}function ru(e,t,n=Be){return n==="link"?Bh(e,t):Dh(e,t)}function Rh(e,t){if(!e||!t)return!1;const n=t.row!==0?"vertical":"horizontal";return e.turns+(e.lastDirection&&e.lastDirection!==n?1:0)<=ss}function kh(e,t,n,r="link"){if(!e||!Array.isArray(e.path)||e.path.length===0||!Rh(e,n))return null;const a=e.path[e.path.length-1],o=[a];let i=a.row+n.row,s=a.col+n.col;for(;cs(t,i,s);){const l={row:i,col:s};if(us(e,l)>=0)break;if(pi(t,i,s)){o.push(l),i+=n.row,s+=n.col;continue}r==="link"&&nu(e,t,i,s)&&o.push(l);break}return o.length>=2?o:null}function Fh(e,t,n=Be){return n!=="link"&&n!=="drag"||!e||e.completed?[]:[{row:-1,col:0},{row:1,col:0},{row:0,col:-1},{row:0,col:1}].map(a=>kh(e,t,a,n)).filter(Boolean)}function Lh(e,t){if(!e||!Array.isArray(e.path)||!t)return[];const n={row:t.row+1,col:t.col+1},r=[...e.path],a=r[r.length-1];return(!a||a.row!==n.row||a.col!==n.col)&&r.push(n),mn(r)}function au(e,t,n=Be){return n==="link"||n==="drag"?mn(e?.path||[]):t?Lh(e,t):mn(e?.path||[])}function $h(e,t,n=Be){const r=ru(e,t,n);return au(e,r,n)}function _h(e,t,n){const r=e?.[t]?.[n];if(!Fn(t,n,r))return[];const a=ce(r);return a===null?[]:[{row:t-1,col:n},{row:t+1,col:n},{row:t,col:n-1},{row:t,col:n+1}].filter(i=>{const s=e?.[i.row]?.[i.col];return Fn(i.row,i.col,s)?ce(s)===a:!1})}function ds(e,t,n,r,a,o=2){if(!Array.isArray(e)||e.length===0)return null;const i=e.length,s=e[0]?.length||0;if(s===0||t===r&&n===a)return null;const l=Math.max(0,Math.round(Number(o)||0)),c=i+2,u=s+2,d=Array.from({length:c},()=>Array(u).fill(0));for(let x=0;x<i;x++)for(let N=0;N<s;N++){const P=e[x]?.[N];Number.isInteger(P)&&P>0&&(d[x+1][N+1]=P)}const f=t+1,h=n+1,C=r+1,p=a+1;if(d[f][h]===0||d[C][p]===0)return null;const y=[[-1,0],[1,0],[0,-1],[0,1]],b=Array.from({length:c},()=>Array.from({length:u},()=>Array(4).fill(1/0)));d[f][h]=0;const g=[];let S=0;const M={row:f,col:h};for(let x=0;x<4;x++){const[N,P]=y[x];let w=f+N,I=h+P;for(;w>=0&&w<c&&I>=0&&I<u;){if(w===C&&I===p)return mn([M,{row:w,col:I}]);if(d[w][I]!==0)break;b[w][I][x]>0&&(b[w][I][x]=0,g.push({row:w,col:I,dir:x,turns:0,path:[M,{row:w,col:I}]})),w+=N,I+=P}}for(;S<g.length;){const x=g[S];S++;for(let N=0;N<4;N++){const P=x.turns+(N===x.dir?0:1);if(P>l)continue;const[w,I]=y[N];let T=x.row+w,A=x.col+I;for(;T>=0&&T<c&&A>=0&&A<u;){if(T===C&&A===p){const E=[...x.path,{row:T,col:A}];return mn(E)}if(d[T][A]!==0)break;b[T][A][N]>P&&(b[T][A][N]=P,g.push({row:T,col:A,dir:N,turns:P,path:[...x.path,{row:T,col:A}]})),T+=w,A+=I}}}return null}function ou(e){if(!e)return null;let t=e.querySelector(".play-link-overlay");return t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.setAttribute("class","play-link-overlay"),t.setAttribute("aria-hidden","true"),e.appendChild(t),t)}function Oh(e,t,n){if(!Array.isArray(e)||e.length===0)return[];const r=document.getElementById("board"),a=document.getElementById("cell-0-0");if(!r||!a)return[];const o=r.getBoundingClientRect(),i=a.getBoundingClientRect(),s=i.left-o.left+i.width/2,l=i.top-o.top+i.height/2,{stepX:c,stepY:u}=Ir(),d=Math.max(1,t),f=Math.max(1,n),h=-5;return e.map(C=>{const p=Math.max(-1,Math.min(d,C.col-1)),y=Math.max(-1,Math.min(f,C.row-1));return{x:s+p*c,y:l+y*u+h}})}function Hh(){const e=document.getElementById("board"),t=document.getElementById("cell-0-0");if(!e||!t)return null;const n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),{stepX:a,stepY:o}=Ir();return{originX:r.left-n.left+r.width/2,originY:r.top-n.top+r.height/2,stepX:a,stepY:o,cellWidth:Math.max(1,r.width||1),cellHeight:Math.max(1,r.height||1)}}function hr(e,t,n,r){if(!e||!t)return null;const a=Math.max(1,Number(n)||1),o=Math.max(1,Number(r)||1),i=Math.max(-1,Math.min(a,e.col-1)),s=Math.max(-1,Math.min(o,e.row-1)),l=t.originX+i*t.stepX,c=t.originY+s*t.stepY;return{x:l-t.cellWidth/2,y:c-t.cellHeight/2,width:t.cellWidth,height:t.cellHeight}}function Wh(e,t,n,r,a){const o=hr(e,n,r,a),i=hr(t,n,r,a);if(!o||!i)return null;const s=Math.min(o.x,i.x),l=Math.min(o.y,i.y),c=Math.max(o.x+o.width,i.x+i.width),u=Math.max(o.y+o.height,i.y+i.height);return{x:s,y:l,width:c-s,height:u-l}}function jh(e,t,n){if(!e)return!1;const r=.001;return t>e.x+r&&t<e.x+e.width-r&&n>e.y+r&&n<e.y+e.height-r}function el(e,t,n){return e.some(r=>jh(r,t,n))}function tl(e){return Math.abs(e.x1-e.x2)<.001}function nl(e){return Math.abs(e.y1-e.y2)<.001}function rl(e,t){if(tl(e)&&tl(t)){if(Math.abs(e.x1-t.x1)>.001)return!1;const r=Math.min(e.y1,e.y2),a=Math.max(e.y1,e.y2),o=Math.min(t.y1,t.y2),i=Math.max(t.y1,t.y2);return r>=o-.001&&a<=i+.001}if(nl(e)&&nl(t)){if(Math.abs(e.y1-t.y1)>.001)return!1;const r=Math.min(e.x1,e.x2),a=Math.max(e.x1,e.x2),o=Math.min(t.x1,t.x2),i=Math.max(t.x1,t.x2);return r>=o-.001&&a<=i+.001}return!1}function Gh(e,t=[]){if(!Array.isArray(e)||e.length===0)return[];const n=[],r=[];e.forEach(c=>{n.push(c.x,c.x+c.width),r.push(c.y,c.y+c.height)});const a=[...new Set(n)].sort((c,u)=>c-u),o=[...new Set(r)].sort((c,u)=>c-u),i=[],s=.001;e.forEach(c=>{const u=c.x,d=c.x+c.width,f=c.y,h=c.y+c.height;for(let C=0;C<a.length-1;C++){const p=a[C],y=a[C+1];if(p<u-s||y>d+s||y-p<=s)continue;const b=(p+y)/2;[{x1:p,y1:f,x2:y,y2:f,outsideY:f-s},{x1:p,y1:h,x2:y,y2:h,outsideY:h+s}].forEach(g=>{if(el(e,b,g.outsideY))return;const S={x1:g.x1,y1:g.y1,x2:g.x2,y2:g.y2};t.some(M=>rl(S,M))||i.push(S)})}for(let C=0;C<o.length-1;C++){const p=o[C],y=o[C+1];if(p<f-s||y>h+s||y-p<=s)continue;const b=(p+y)/2;[{x1:u,y1:p,x2:u,y2:y,outsideX:u-s},{x1:d,y1:p,x2:d,y2:y,outsideX:d+s}].forEach(g=>{if(el(e,g.outsideX,b))return;const S={x1:g.x1,y1:g.y1,x2:g.x2,y2:g.y2};t.some(M=>rl(S,M))||i.push(S)})}});const l=new Set;return i.filter(c=>{const u=`${c.x1},${c.y1},${c.x2},${c.y2}`;return l.has(u)?!1:(l.add(u),!0)})}function al(e,t,n){return[{offset:"0%",color:e,opacity:String(t)},{offset:"42%",color:e,opacity:String((t+n)/2)},{offset:"100%",color:e,opacity:String(n)}]}function zh(e=0){const t=Math.max(0,Number(e)||0);return t===0?{color:"#58d66d",borderColor:"#b8ffbf",glowColor:"#58d66d"}:t===1?{color:"#ffd54f",borderColor:"#fff6a8",glowColor:"#ffd54f"}:t===2?{color:"#ff9f1c",borderColor:"#ffe0a3",glowColor:"#ff9f1c"}:{color:"#ff3b30",borderColor:"#ffc2bd",glowColor:"#ff3b30"}}function qh(e){return Array.isArray(e)?e.map(t=>[`M ${t.x} ${t.y}`,`H ${t.x+t.width}`,`V ${t.y+t.height}`,`H ${t.x}`,"Z"].join(" ")).join(" "):""}function Vh(e,t,n,r){if(!Array.isArray(e)||e.length<2)return[];const a=e[0],o=e[1],i=e[e.length-2],s=e[e.length-1],l=hr(a,t,n,r),c=hr(s,t,n,r);if(!l||!c)return[];const u=(d,f,h,C)=>{const p=f.row-d.row,y=f.col-d.col;if(y!==0){const g=y>0==!C?h.x:h.x+h.width;return{x1:g,y1:h.y,x2:g,y2:h.y+h.height}}const b=p>0==!C?h.y:h.y+h.height;return{x1:h.x,y1:b,x2:h.x+h.width,y2:b}};return[u(a,o,l,!1),u(i,s,c,!0)]}function Hn(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function Uh(e,t,n,r,a){const o=Hn("linearGradient");o.setAttribute("id",t),o.setAttribute("gradientUnits","userSpaceOnUse"),o.setAttribute("x1",n.x),o.setAttribute("y1",n.y),o.setAttribute("x2",r.x),o.setAttribute("y2",r.y),a.forEach(i=>{const s=Hn("stop");s.setAttribute("offset",i.offset),s.setAttribute("stop-color",i.color),s.setAttribute("stop-opacity",i.opacity),o.appendChild(s)}),e.appendChild(o)}function ol(e,t,n,r,a,o,i,s,l,c={}){if(!Array.isArray(n)||n.length<2||!r)return;const u=!!c.gradientStartsAtEnd,d=mn(n),f=[];for(let M=1;M<d.length;M++){const x=d[M-1],N=d[M],P=Wh(x,N,r,a,o);P&&f.push(P)}if(f.length===0)return;const h=hr(d[0],r,a,o),C=hr(d[d.length-1],r,a,o);if(!h||!C)return;const p={x:h.x+h.width/2,y:h.y+h.height/2},y={x:C.x+C.width/2,y:C.y+C.height/2},b=`${s}-${Math.round(p.x)}-${Math.round(p.y)}`;Uh(t,b,u?y:p,u?p:y,l);const g=Hn("path");g.setAttribute("class",i),g.setAttribute("d",qh(f)),g.setAttribute("fill",`url(#${b})`),e.appendChild(g);const S=Vh(d,r,a,o);Gh(f,S).forEach(M=>{const x=Hn("line");x.setAttribute("class","play-link-band-border"),x.setAttribute("x1",M.x1),x.setAttribute("y1",M.y1),x.setAttribute("x2",M.x2),x.setAttribute("y2",M.y2),e.appendChild(x)})}function il(e,t,n,r,a="play-link-path",o={}){const i=Oh(t,n,r);if(i.length<2)return;const s=Hn("polyline");s.setAttribute("class",a),s.setAttribute("points",i.map(l=>`${l.x},${l.y}`).join(" ")),e.appendChild(s),o.withEndDots&&[i[0],i[i.length-1]].forEach(l=>{const c=Hn("circle");c.setAttribute("class","play-link-end-dot"),c.setAttribute("cx",l.x),c.setAttribute("cy",l.y),c.setAttribute("r","8"),e.appendChild(c)})}function Yh(e,t,n,r={}){const a=document.getElementById("board"),o=Array.isArray(r.guideSegments)?r.guideSegments:[],i=Array.isArray(e)&&e.length>=2;if(!a||!i&&o.length===0)return;const s=ou(a);if(!s)return;s.innerHTML="",s.classList.add("play-link-style-line");const l=a.getBoundingClientRect();s.setAttribute("viewBox",`0 0 ${l.width} ${l.height}`),o.forEach(c=>{il(s,c,t,n,"play-link-path play-link-guide-line")}),i&&il(s,e,t,n,"play-link-path",{withEndDots:!0})}function ms(e,t,n,r={}){if($f()==="line"){Yh(e,t,n,r);return}const a=document.getElementById("board"),o=Array.isArray(r.guideSegments)?r.guideSegments:[],i=Array.isArray(e)&&e.length>=2;if(!a||!i&&o.length===0)return;const s=ou(a);if(!s)return;s.innerHTML="",s.classList.remove("play-link-style-line");const l=a.getBoundingClientRect();s.setAttribute("viewBox",`0 0 ${l.width} ${l.height}`);const c=Hh();if(!c)return;const u=Hn("defs");s.appendChild(u);const d=zh(r.turnCount||0);s.style.setProperty("--play-link-border-color",d.borderColor),s.style.setProperty("--play-link-glow-color",d.glowColor),s.style.setProperty("--play-link-color",d.color);const f=al("var(--play-link-color)",.68,.14),h=al("var(--play-link-color)",.92,.24);o.forEach((C,p)=>{ol(s,u,C,c,t,n,"play-link-guide-band",`play-link-guide-${p}`,f)}),i&&ol(s,u,e,c,t,n,"play-link-current-band","play-link-current",h,{gradientStartsAtEnd:!0})}function He(){const e=document.getElementById("board");if(!e)return;const t=e.querySelector(".play-link-overlay");t&&(t.innerHTML="")}function Io(e,t,n,r,a){if(!Array.isArray(e)||e.length===0)return!1;const o=e.length,i=e[0]?.length||0;if(i===0||t===r&&n===a)return!1;const s=o+2,l=i+2,c=Array.from({length:s},()=>Array(l).fill(0));for(let g=0;g<o;g++)for(let S=0;S<i;S++){const M=e[g]?.[S];Number.isInteger(M)&&M>0&&(c[g+1][S+1]=M)}const u=t+1,d=n+1,f=r+1,h=a+1;if(c[u][d]===0||c[f][h]===0)return!1;const C=[[-1,0],[1,0],[0,-1],[0,1]],p=Array.from({length:s},()=>Array.from({length:l},()=>Array(4).fill(1/0)));c[u][d]=0;const y=[];let b=0;for(let g=0;g<4;g++){const[S,M]=C[g];let x=u+S,N=d+M;for(;x>=0&&x<s&&N>=0&&N<l;){if(x===f&&N===h)return!0;if(c[x][N]!==0)break;p[x][N][g]>0&&(p[x][N][g]=0,y.push({row:x,col:N,dir:g,turns:0})),x+=S,N+=M}}for(;b<y.length;){const g=y[b];b++;for(let S=0;S<4;S++){const M=g.turns+(S===g.dir?0:1);if(M>2)continue;const[x,N]=C[S];let P=g.row+x,w=g.col+N;for(;P>=0&&P<s&&w>=0&&w<l;){if(P===f&&w===h)return!0;if(c[P][w]!==0)break;p[P][w][S]>M&&(p[P][w][S]=M,y.push({row:P,col:w,dir:S,turns:M})),P+=x,w+=N}}}return!1}async function ta(e,t,n={}){if(!m||!m.active||m.isResolving||!e||typeof e!="object")return;const r=!!n.suppressSelectionLift,a=!!n.suppressLinkRender,o=Number(n.layerId||e.layerId||Y),i=St(o);if(!Array.isArray(i))return;const s=i?.[e.row1]?.[e.col1],l=ce(s);if(l===null)return;const c=i[0]?.length||0,u=i.length,d=pn(t),f=G(i),h={row1:e.row1,col1:e.col1,row2:e.row2,col2:e.col2};m.isResolving=!0,$t(),ot(),Ee();const C=cn(o,e.row1,e.col1),p=cn(o,e.row2,e.col2);r||(C&&C.classList.add("play-selected"),p&&p.classList.add("play-selected"));const y=document.getElementById("info");try{if(!a&&t&&t.length>=2&&ms(t,c,u,{turnCount:so(t)}),await rt(150),!m||!m.active||(He(),C&&C.classList.add("play-clearing"),p&&p.classList.add("play-clearing"),await rt(150),!m||!m.active))return;m.tokenBoards||(m.tokenBoards={}),m.tokenBoards[o]||(m.tokenBoards[o]=$n(i));const b=m.tokenBoards[o],g=[{row:e.row1,col:e.col1},{row:e.row2,col:e.col2}];for(const P of g)i[P.row][P.col]=Ce,Array.isArray(b)&&(b[P.row][P.col]=null);zn(i,b,g),l===he&&Pa(i,b);const S=G(b),M=Gi();M!==null&&gn(i,M,b),m.selected=null,o===Y&&On(i),yt(),Lt();const x=Zc(S,b);o===Y&&await Qc(x),m.clearedPairs=(m.clearedPairs||0)+1;const N=Oe(i)?0:fn(i);if(Zi(m.clearedPairs,d,N,{move:h,boardSnapshotBefore:f,boardSnapshotAfter:G(i),cancelReason:m.lastCancelReason||""}),m.lastCancelReason="",Sa(d))return;if(Oe(i))y&&(y.textContent=`试玩模式：当前层已清空，共消除 ${m.clearedPairs} 对（本次连接：${d}）`);else{const P=Ar(i);P&&y&&(y.textContent=`${y.textContent}（本次连接：${d}）`),!P&&y&&(y.textContent=`试玩模式：已消除 ${m.clearedPairs} 对，当前可配对 ${N} 对（本次连接：${d}）`)}}finally{m&&m.active&&(m.isResolving=!1,Ee())}}async function sl(e,t,n){if(!m||!m.active||m.isResolving)return;const r=St(e.layerId),a=St(t.layerId);if(!Array.isArray(r)||!Array.isArray(a))return;const o=r?.[e.row]?.[e.col],i=a?.[t.row]?.[t.col],s=ce(o);if(s===null||s!==ce(i))return;m.isResolving=!0,$t(),ot(),Ee();const l=cn(e.layerId,e.row,e.col),c=cn(t.layerId,t.row,t.col);l&&l.classList.add("play-selected"),c&&c.classList.add("play-selected");const u=df(n);try{if(await rt(150),!m||!m.active||(l&&l.classList.add("play-clearing"),c&&c.classList.add("play-clearing"),await rt(150),!m||!m.active))return;r[e.row][e.col]=Ce,a[t.row][t.col]=Ce,m.tokenBoards?.[e.layerId]&&(m.tokenBoards[e.layerId][e.row][e.col]=null),m.tokenBoards?.[t.layerId]&&(m.tokenBoards[t.layerId][t.row][t.col]=null);const d=Gi();if(d!==null){const h=Array.from(new Set([e.layerId,t.layerId]));for(const C of h){const p=St(C),y=m.tokenBoards?.[C]||null;Array.isArray(p)&&gn(p,d,y)}}m.selected=null,(e.layerId===Y||t.layerId===Y)&&On(St(Y)),yt(),Lt(),m.clearedPairs=(m.clearedPairs||0)+1,Zi(m.clearedPairs,u,null,{move:{layerId1:e.layerId,row1:e.row,col1:e.col,layerId2:t.layerId,row2:t.row,col2:t.col},cancelReason:m.lastCancelReason||""}),m.lastCancelReason="";const f=document.getElementById("info");if(Sa(u))return;f&&(f.textContent=`试玩模式：已消除 ${m.clearedPairs} 对（本次连接：${u}）`)}finally{m&&m.active&&(m.isResolving=!1,Ee())}}async function Kh(e,t,n=Y){if(!m||!m.active||m.isResolving||m.failed)return;const r=St(n),a=r?.[e]?.[t];if(!ea(n,e,t,a))return;const o=ce(a);if(o===null)return;if(Array.isArray(m.vitaTray)||(m.vitaTray=[]),m.vitaTray.length>=4){Dn("待选区已满"),Tt();return}const i=G(r),s=cn(n,e,t);m.isResolving=!0,$t(),ot(),Je(),He(),Ee();try{if(s&&s.classList.add("play-selected"),await rt(90),!m||!m.active||(s&&s.classList.add("play-clearing"),await rt(90),!m||!m.active))return;m.tokenBoards||(m.tokenBoards={}),m.tokenBoards[n]||(m.tokenBoards[n]=$n(r));const l=m.tokenBoards[n];r[e][t]=Ce,Array.isArray(l)&&(l[e][t]=null);const c=G(l),u=Gi();u!==null&&gn(r,u,l),m.vitaTray.push({baseId:o,layerId:n,row:e,col:t}),m.selected=null,n===Y&&On(r),yt(),Lt();const d=Zc(c,l);n===Y&&await Qc(d),Tt();let f=!1;const h=Gc(m.vitaTray);if(h){if(await rt(120),!m||!m.active)return;const[p,y]=h,b=m.vitaTray[p],g=m.vitaTray[y];for(const S of[p,y].sort((M,x)=>x-M))m.vitaTray.splice(S,1);f=!0,m.clearedPairs=(m.clearedPairs||0)+1,Zi(m.clearedPairs,"待选区配对",null,{move:{row1:Number(b?.row),col1:Number(b?.col),row2:Number(g?.row),col2:Number(g?.col)},boardSnapshotBefore:i,boardSnapshotAfter:G(r),cancelReason:m.lastCancelReason||""}),m.lastCancelReason="",Tt()}if(Sa())return;if(!zc()){const p=pa().length;J(f?`试玩模式：待选区已配对消除，当前待选区 ${p}/4`:`试玩模式：已收入待选区，当前待选区 ${p}/4`)}}finally{m&&m.active&&(m.isResolving=!1,Ee(),Tt())}}async function gi(e,t,n=Y){if(!m||!m.active||m.isResolving||m.failed)return;const r=St(n),a=r?.[e]?.[t];if(!ea(n,e,t,a))return;const o=ce(a);if(o===null)return;if(ba()){await Kh(e,t,n);return}const i=document.getElementById("info"),s=m.selected;if(!s){er(e,t,n),i&&(i.textContent=`试玩模式：已选中 ${o}`);return}if(s.layerId===n&&s.row===e&&s.col===t){Je(),or("再次点击同一张牌，取消当前选择"),i&&(i.textContent="试玩模式：已取消选择");return}const c=St(s.layerId)?.[s.row]?.[s.col],u=ce(c);if(u===null){er(e,t,n),i&&(i.textContent=`试玩模式：已选中 ${o}`);return}if(!ea(s.layerId,s.row,s.col,c)){er(e,t,n),i&&(i.textContent=`试玩模式：已选中 ${o}`);return}if(u!==o){if(er(e,t,n),or("数字不同，切换为新选中的牌"),Ko("数字不同"))return;i&&(i.textContent=`试玩模式：数字不同，重新选中 ${o}`);return}if(Xe()){s.layerId===n?await ta({layerId:n,row1:s.row,col1:s.col,row2:e,col2:t},null,{layerId:n,suppressLinkRender:!0}):await sl(s,{layerId:n,row:e,col:t},[{x:0,y:0},{x:1,y:0}]);return}if(s.layerId!==n){const h=uf(s,{layerId:n,row:e,col:t});if(!h){if(er(e,t,n),or("跨层路径不满足连线规则，切换为新选中的牌"),Ko("跨层路径不满足连线规则"))return;i&&(i.textContent="试玩模式：跨层路径不满足连线规则，请重选");return}await sl(s,{layerId:n,row:e,col:t},h);return}const d=Cc(),f=ds(r,s.row,s.col,e,t,d);if(!f){if(dh(r,s,e,t),er(e,t,n),or("路径不满足连连看规则，切换为新选中的牌"),Ko("路径不满足连连看规则"))return;i&&(i.textContent="试玩模式：路径不满足连连看规则，请重选");return}await ta({layerId:n,row1:s.row,col1:s.col,row2:e,col2:t},f,{layerId:n})}function Zt(e={}){const{restoreBoard:t=!0,silent:n=!1}=e;if(!m||!m.active)return;sa({silent:!0}),dn(),$t(),ot(),t&&Array.isArray(m.originalBoard)&&(Array.isArray(m.originalBoardLayers)?(m.originalBoardLayers.forEach(i=>{const s=ht(i.id);s&&(s.width=i.width,s.height=i.height,s.boardData=G(i.boardData))}),k=pt().boardData,ga()):(_n(m.originalBoard),k=G(m.originalBoard),un(),yt()));const r=document.getElementById("board");r&&r.classList.remove("play-mode");const a=document.getElementById("boardWrapper");a&&a.classList.remove("play-mode"),wt(),He(),Ve(),Ln(!1),wo(),ji(),m.vitaTray=[],m=null,Rr(!0),io(),kn(),ft(),Tt(),n||ya()}function iu(){if(m&&m.active)return;if(sa({silent:!0}),!No(k)){alert("请先生成关卡，再进入试玩模式。");return}if(!Mr("试玩")||!ic("试玩"))return;yn();const e=be.map(i=>({id:i.id,width:i.width,height:i.height,boardData:G(i.boardData)}));be.forEach(i=>{i.boardData=G(i.boardData)}),k=pt().boardData;const t=G(k),n=Object.fromEntries(be.map(i=>[i.id,$n(i.boardData)]));m={active:!0,originalBoard:t,originalBoardLayers:e,boardData:pt().boardData,tokenBoard:n[Y],tokenBoards:n,stepLogs:[],currentStepIndex:0,selected:null,dragLink:null,dragGhost:null,dragSource:null,adjacentChoiceOverlay:null,adjacentChoice:null,isResolving:!1,failed:!1,clearedPairs:0,errorCount:0,vitaTray:[],lastCancelReason:"",direction:parseInt(document.querySelector('input[name="direction"]:checked')?.value||0)};const r=document.getElementById("board");r&&r.classList.add("play-mode");const a=document.getElementById("boardWrapper");a&&a.classList.add("play-mode"),Ln(!1),io(),wo("试玩模式：开始记录消除连接类型"),ji({start:!0}),Tt();const o=document.getElementById("info");o&&(o.textContent=Ca()),Ar(m.boardData),Rr(!0),kn()}function Xh(){if(m&&m.active){Zt({restoreBoard:!0,silent:!1});return}iu()}function na(){Te.active=!1,Te.mode=null,Te.lastCellKey=""}function yi(e,t){const n=`${e},${t}`;if(Te.lastCellKey!==n){if(Te.lastCellKey=n,Te.mode==="clear"){cc(e,t);return}lc(e,t)}}function Xo(e){if(!e)return;const t=e.target.closest(".cell");if(!t)return;const n=m&&m.active?rs(e,t):Tr(t);if(n){if(m&&m.active){if(Xe()){e.button===0&&oo()&&Js(n.row,n.col,n.layerId);return}if(n.layerId!==Y&&!nt("click"))return;if(e.button===0&&nt("click")){oo()&&Js(n.row,n.col,n.layerId);return}e.button===0&&!nt("click")&&ch(e,n.row,n.col);return}if(!ha()){if(e.button===2){e.preventDefault(),Te.active=!0,Te.mode="clear",Te.lastCellKey="",yi(n.row,n.col);return}e.button===0&&Nm()&&(e.preventDefault(),Te.active=!0,Te.mode="apply",Te.lastCellKey="",yi(n.row,n.col))}}}function ll(e){if(m&&m.active){if(Xe()||nt("click"))return;if(!e||e.buttons===0){wt("松开后未连接到相同牌，取消当前连线");return}Xc(e);return}if(!Te.active)return;if(ha()){na();return}const t=Te.mode==="clear"?2:1;if((e.buttons&t)===0){na();return}const n=e.target.closest(".cell");if(!n)return;const r=m&&m.active?rs(e,n):Tr(n);r&&yi(r.row,r.col)}function cl(e){m&&m.active||Te.active&&(!e||e.buttons===0)&&na()}function Jh(e){if(!(!m||!m.active||!m.dragLink)){if(!e||e.buttons===0){wt("松开后未连接到相同牌，取消当前连线");return}Xc(e)}}function Zh(){if(m&&m.active){$t(),!Xe()&&!nt("click")&&uh();return}na()}function Jo(e){const t=e.target.closest(".cell");if(!t)return;const n=m&&m.active?rs(e,t):Tr(t);if(n){if(m&&m.active){if(Xe()||nt("click")){if(m.isResolving)return;gi(n.row,n.col,n.layerId);return}if(n.layerId!==Y)return;e.preventDefault(),hh(n.row,n.col);return}lc(n.row,n.col)}}function Zo(e){const t=e.target.closest(".cell");if(!t||(e.preventDefault(),Te.active))return;const n=Tr(t);n&&cc(n.row,n.col)}function fs(e){if(!Array.isArray(e)||e.length===0)return null;const t=e.length,n=e[0]?.length||0;if(n===0)return null;const r=t+2,a=n+2,o=r*a,i=o*4,s=new Uint8Array(o);for(let l=0;l<t;l++)for(let c=0;c<n;c++){const u=e[l][c];Number.isInteger(u)&&u>0&&(s[(l+1)*a+(c+1)]=1)}return{width:n,height:t,extWidth:a,extHeight:r,blocked:s,visitStamp:new Uint16Array(i),visitTurns:new Uint8Array(i),stamp:1,queueRow:new Int16Array(i*4),queueCol:new Int16Array(i*4),queueDir:new Uint8Array(i*4),queueTurns:new Uint8Array(i*4)}}function Qh(e){e&&(e.stamp++,e.stamp>=65535&&(e.visitStamp.fill(0),e.stamp=1))}function ul(e,t,n,r,a){const o=(t*e.extWidth+n<<2)+r;return e.visitStamp[o]===e.stamp&&e.visitTurns[o]<=a?!1:(e.visitStamp[o]=e.stamp,e.visitTurns[o]=a,!0)}function hs(e,t,n,r,a){if(!e||t===r&&n===a)return!1;const o=e.extWidth,i=e.extHeight,s=t+1,l=n+1,c=r+1,u=a+1,d=s*o+l,f=c*o+u;if(e.blocked[d]===0||e.blocked[f]===0)return!1;Qh(e),e.blocked[d]=0;let h=0,C=0;for(let p=0;p<4;p++){const[y,b]=Fs[p];let g=s+y,S=l+b;for(;g>=0&&g<i&&S>=0&&S<o;){if(g===c&&S===u)return e.blocked[d]=1,!0;const M=g*o+S;if(e.blocked[M]!==0)break;ul(e,g,S,p,0)&&(e.queueRow[C]=g,e.queueCol[C]=S,e.queueDir[C]=p,e.queueTurns[C]=0,C++),g+=y,S+=b}}for(;h<C;){const p=e.queueRow[h],y=e.queueCol[h],b=e.queueDir[h],g=e.queueTurns[h];h++;for(let S=0;S<4;S++){const M=g+(S===b?0:1);if(M>2)continue;const[x,N]=Fs[S];let P=p+x,w=y+N;for(;P>=0&&P<i&&w>=0&&w<o;){if(P===c&&w===u)return e.blocked[d]=1,!0;const I=P*o+w;if(e.blocked[I]!==0)break;ul(e,P,w,S,M)&&(e.queueRow[C]=P,e.queueCol[C]=w,e.queueDir[C]=S,e.queueTurns[C]=M,C++),P+=x,w+=N}}}return e.blocked[d]=1,!1}function qn(e){if(!Array.isArray(e)||e.length===0)return[];const t=e.length,n=e[0]?.length||0;if(n===0)return[];const r=fs(e),a=new Map;for(let i=0;i<t;i++)for(let s=0;s<n;s++){const l=ce(e[i]?.[s]);l!==null&&(a.has(l)||a.set(l,[]),a.get(l).push({row:i,col:s}))}const o=[];return a.forEach(i=>{if(!(!i||i.length<2))for(let s=0;s<i.length-1;s++)for(let l=s+1;l<i.length;l++){const c=i[s],u=i[l];if(!hs(r,c.row,c.col,u.row,u.col))continue;const d=Math.abs(c.row-u.row)+Math.abs(c.col-u.col)===1;o.push({row1:c.row,col1:c.col,row2:u.row,col2:u.col,adjacent:d})}}),o}function ep(e){if(Xe())return tp(e,Vi(e));if(!Array.isArray(e)||e.length===0)return!1;const t=e.length,n=e[0]?.length||0;if(n===0)return!1;const r=fs(e);if(!r)return!1;const a=new Map;for(let o=0;o<t;o++)for(let i=0;i<n;i++){const s=ce(e[o]?.[i]);s!==null&&(a.has(s)||a.set(s,[]),a.get(s).push({row:o,col:i}))}for(const o of a.values())if(!(!o||o.length<2))for(let i=0;i<o.length-1;i++)for(let s=i+1;s<o.length;s++){const l=o[i],c=o[s];if(hs(r,l.row,l.col,c.row,c.col))return!0}return!1}function ps(e,t=Y){if(!Array.isArray(e)||e.length===0)return[];const n=e.length,r=e[0]?.length||0;if(r===0)return[];const a=new Map;for(let i=0;i<n;i++)for(let s=0;s<r;s++){const l=e[i]?.[s];if(!ea(t,i,s,l))continue;const c=ce(l);c!==null&&(a.has(c)||a.set(c,[]),a.get(c).push({row:i,col:s}))}const o=[];return a.forEach(i=>{if(!(!i||i.length<2))for(let s=0;s<i.length-1;s++)for(let l=s+1;l<i.length;l++){const c=i[s],u=i[l];o.push({row1:c.row,col1:c.col,row2:u.row,col2:u.col})}}),o}function tp(e,t=Y){return ps(e,t).length>0}function fn(e){return!Array.isArray(e)||e.length===0?0:Xe()?ps(e,Vi(e)).length:qn(e).length}function lo(e){if(!Array.isArray(e)||e.length===0)return 0;const t=new Map;for(const r of e)if(Array.isArray(r))for(const a of r){const o=ie(a);kt(o.baseId)&&o.baseId!==pe&&t.set(o.baseId,(t.get(o.baseId)||0)+1)}let n=0;return t.forEach(r=>{const a=Number(r)||0;a<2||(n+=a*(a-1)/2)}),Math.max(0,Math.round(n))}function gs(e,t=!1){if(!Array.isArray(e)||e.length===0)return null;if(Xe())return Wa(ps(e,Vi(e)));const n=e.length,r=e[0]?.length||0;if(r===0)return null;const a=fs(e);if(!a)return null;const o=new Map;for(let u=0;u<n;u++)for(let d=0;d<r;d++){const f=ce(e[u]?.[d]);f!==null&&(o.has(f)||o.set(f,[]),o.get(f).push({row:u,col:d}))}let i=0,s=0,l=null,c=null;return o.forEach(u=>{if(!(!u||u.length<2))for(let d=0;d<u.length-1;d++)for(let f=d+1;f<u.length;f++){const h=u[d],C=u[f];if(!hs(a,h.row,h.col,C.row,C.col))continue;const p={row1:h.row,col1:h.col,row2:C.row,col2:C.col};i++,Math.floor(Math.random()*i)===0&&(l=p),Math.abs(h.row-C.row)+Math.abs(h.col-C.col)===1&&(s++,Math.floor(Math.random()*s)===0&&(c=p))}}),t&&s>0?c:l}function Wa(e){if(!e||e.length===0)return null;const t=Math.floor(Math.random()*e.length);return e[t]}function np(e){return Number.isInteger(e)&&e>=1&&e<=98}function rp(e){if(!Array.isArray(e)||e.length===0)return null;const t=e.length,n=e[0]?.length||0;if(n===0)return null;const r=new Map;for(let i=0;i<t;i++)for(let s=0;s<n;s++){const l=ce(e[i]?.[s]);np(l)&&(r.has(l)||r.set(l,[]),r.get(l).push({row:i,col:s}))}let a=0,o=null;return r.forEach(i=>{if(!(!i||i.length<2))for(let s=0;s<i.length-1;s++)for(let l=s+1;l<i.length;l++){const c=i[s],u=i[l],d={row1:c.row,col1:c.col,row2:u.row,col2:u.col};a++,Math.floor(Math.random()*a)===0&&(o=d)}}),o}function ap(e,t=!1){if(!Array.isArray(e)||e.length===0)return null;if(!t)return Wa(e);const n=e.filter(r=>!!r?.adjacent);return n.length>0?Wa(n):Wa(e)}function Fa(e,t){const n=[];for(let r=0;r<e;r++){const a=r<e/2;(t&&a||!t&&!a)&&n.push(r)}return n}function su(e){const t=new Set;if(!Array.isArray(e)||e.length===0)return t;const n=e.length,r=e[0]?.length||0,a=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(let o=0;o<n;o++)for(let i=0;i<r;i++)if(ie(e[o]?.[i]).baseId===Nt)for(const[l,c]of a){const u=o+l,d=i+c;if(u<0||u>=n||d<0||d>=r)continue;const f=ie(e[u]?.[d]);_e(f.baseId)||t.add(u*r+d)}return t}function op(e,t,n,r,a){const o=ie(e[t]?.[n]);return _e(o.baseId)?!0:!(um(o.baseId)||r.has(t*a+n))}function dl(e,t,n,r,a,o,i,s){if(!n||n.length===0)return!1;const l=e[0]?.length||0,c=n.map(y=>r(y)),u=t?n.map(y=>{const{row:b,col:g}=o(y);return t[b]?.[g]??null}):null,d=new Set;for(let y=0;y<n.length;y++){const b=c[y];if(_e(b))continue;const{row:g,col:S}=o(n[y]);op(e,g,S,s,l)||d.add(y)}const f=[...c],h=u?[...u]:null;let C=0;for(;C<n.length;){for(;C<n.length&&d.has(C);)C++;if(C>=n.length)break;let y=C;for(;y+1<n.length&&!d.has(y+1);)y++;const b=[];for(let g=C;g<=y;g++){const S=c[g];_e(S)||(b.push({value:S,token:h?u[g]:null}),f[g]=Ce,h&&(h[g]=null))}for(let g=0;g<b.length;g++){const S=i?C+g:y-g,M=i?g:b.length-1-g,x=b[M];f[S]=x.value,h&&(h[S]=x.token)}C=y+1}let p=!1;for(let y=0;y<n.length;y++)c[y]!==f[y]&&(p=!0),a(n[y],f[y],h?h[y]:null);return p}function ip(e,t,n=null){if(!Array.isArray(e)||e.length===0)return!1;const r=e.length,a=e[0]?.length||0;if(a===0)return!1;let o=!1;const i=su(e),s=Fa(r,!0),l=Fa(r,!1),c=Fa(a,!0),u=Fa(a,!1),d=s.concat(l),f=c.concat(u),h=(p,y,b)=>{dl(e,n,y,S=>e[S]?.[p]??null,(S,M,x)=>{e[S][p]=M,Array.isArray(n)&&(n[S][p]=x)},S=>({row:S,col:p}),b,i)&&(o=!0)},C=(p,y,b)=>{dl(e,n,y,S=>e[p]?.[S]??null,(S,M,x)=>{e[p][S]=M,Array.isArray(n)&&(n[p][S]=x)},S=>({row:p,col:S}),b,i)&&(o=!0)};switch(t){case 1:for(let p=0;p<a;p++)h(p,d,!0);break;case 2:for(let p=0;p<a;p++)h(p,d,!1);break;case 3:for(let p=0;p<r;p++)C(p,f,!0);break;case 4:for(let p=0;p<r;p++)C(p,f,!1);break;case 5:for(let p=0;p<a;p++)h(p,s,!1),h(p,l,!0);break;case 6:for(let p=0;p<r;p++)C(p,c,!1),C(p,u,!0);break;case 7:for(let p=0;p<a;p++)h(p,s,!0),h(p,l,!1);break;case 8:for(let p=0;p<r;p++)C(p,c,!0),C(p,u,!1);break}return o}function gn(e,t,n=null){const r=(e.length||0)*((e[0]?.length||0)+1);let a=0;for(;a<r&&ip(e,t,n);)a++}function De(e){if(!Array.isArray(e))return 0;let t=0;for(const n of e)if(Array.isArray(n))for(const r of n){const a=ie(r);kt(a.baseId)&&t++}return t}function Xt(e){const t={removableCount:0,attachmentsTotal:0,attachmentFanpaiCount:0,attachmentIceshellCount:0,obstacleStoneCount:0,obstacleWoodCount:0,obstacleMagnetCount:0,obstacleIce1Count:0,obstacleIce2Count:0,obstacleIce3Count:0,obstacleTotal:0,iceHp:0,magnetLockCount:0};if(!Array.isArray(e)||e.length===0)return t;for(const n of e)if(Array.isArray(n))for(const r of n){const a=ie(r);kt(a.baseId)&&t.removableCount++,a.hasAttachment&&(t.attachmentsTotal++,a.attachmentId===Ue?t.attachmentFanpaiCount++:a.attachmentId===Ye&&t.attachmentIceshellCount++),a.baseId===at&&t.obstacleStoneCount++,a.baseId===gt&&t.obstacleWoodCount++,a.baseId===Nt&&t.obstacleMagnetCount++,a.baseId===Fe&&t.obstacleIce1Count++,a.baseId===Le&&t.obstacleIce2Count++,a.baseId===$e&&t.obstacleIce3Count++}return t.obstacleTotal=t.obstacleStoneCount+t.obstacleWoodCount+t.obstacleMagnetCount+t.obstacleIce1Count+t.obstacleIce2Count+t.obstacleIce3Count,t.iceHp=t.obstacleIce1Count+t.obstacleIce2Count*2+t.obstacleIce3Count*3,t.magnetLockCount=su(e).size,t}function sp(e,t){const n=e&&typeof e=="object"?e:{},r=t&&typeof t=="object"?t:{};return{releasedAttachment:Math.max(0,(Number(n.attachmentsTotal)||0)-(Number(r.attachmentsTotal)||0)),iceHpReduction:Math.max(0,(Number(n.iceHp)||0)-(Number(r.iceHp)||0)),obstacleReduction:Math.max(0,(Number(n.obstacleTotal)||0)-(Number(r.obstacleTotal)||0)),magnetLockReduction:Math.max(0,(Number(n.magnetLockCount)||0)-(Number(r.magnetLockCount)||0)),removableReduction:Math.max(0,(Number(n.removableCount)||0)-(Number(r.removableCount)||0))}}function ys(e,t){if(!e||!Array.isArray(e.boardData)||!t)return null;const n=G(e.boardData);if(!Array.isArray(n)||n.length===0)return null;const r=G(n),a=r[t.row1]?.[t.col1],o=ce(a);if(o===null)return null;const i=Number.isFinite(Number(e.remainingPairs))?Number(e.remainingPairs):fn(n),s=Xt(n),l=Dr(r,null,t);zn(r,null,l),o===he&&Pa(r,null);const c=Number.isFinite(Number(e.direction))?Number(e.direction):0;gn(r,c,null);const u=fn(r),d=Xt(r),f=sp(s,d),h=Math.max(0,f.removableReduction-2);return{beforeRemainingPairs:i,afterRemainingPairs:u,remainingPairsDelta:i-u,beforeState:s,afterState:d,mechanismEffects:f,extraRemovedByMechanism:h}}function lp(e,t,n=null){const r=G(e),a=Number.isFinite(Number(n))?Math.max(0,Number(n)):De(e);if(!No(r))return{cleared:!1,remainingPercent:0};const o=r.length*(r[0]?.length||0);let i=0;for(;i<=o;){const c=gs(r,!0);if(!c){if(Oe(r))return{cleared:!0,remainingPercent:0};const C=De(r),p=a>0?C/a*100:0;return{cleared:!1,remainingPercent:Math.max(0,Math.min(100,p))}}const u=r[c.row1]?.[c.col1],d=ce(u),f=Dr(r,null,c);zn(r,null,f),d===he&&Pa(r,null),gn(r,t),i++}const s=De(r),l=a>0?s/a*100:0;return{cleared:!1,remainingPercent:Math.max(0,Math.min(100,l))}}function lu(e,t){const n=Number.isFinite(Number(t))?Math.max(1,Math.floor(Number(t))):1,r=Number.isFinite(Number(e))?Math.max(0,Math.floor(Number(e))):0,a=Math.max(0,Math.min(.999999,r/n));return a<.35?0:a<.75?1:2}function oe(){return Array.from({length:Kr},()=>0)}function jr(e,t=null){if(!Array.isArray(e)||e.length===0)return{totalStepCount:0,totalPairCountSum:0,averagePairPerStep:0,firstHalfStepCount:0,firstHalfPairCountSum:0,firstHalfAveragePairCount:0,secondHalfStepCount:0,secondHalfPairCountSum:0,secondHalfAveragePairCount:0,progressPhaseStepCounts:oe(),progressPhasePairCountSums:oe(),progressPhaseAveragePairCounts:oe(),stepPairCounts:[]};let n=0;const r=e.map(y=>{const b=Number(y);return Number.isFinite(b)&&b>=0?b:0}),a=Number.isFinite(Number(t))?Math.max(1,Math.floor(Number(t))):Math.max(1,r.length),o=oe(),i=oe();for(const y of r)n+=y;for(let y=0;y<r.length;y++){const b=r[y],g=lu(y,a);o[g]+=1,i[g]+=b}const s=i.map((y,b)=>o[b]>0?y/o[b]:0),l=r.length,c=Math.ceil(l/2),u=r.slice(0,c),d=r.slice(c),f=u.reduce((y,b)=>y+b,0),h=d.reduce((y,b)=>y+b,0),C=u.length,p=d.length;return{totalStepCount:l,totalPairCountSum:n,averagePairPerStep:l>0?n/l:0,firstHalfStepCount:C,firstHalfPairCountSum:f,firstHalfAveragePairCount:C>0?f/C:0,secondHalfStepCount:p,secondHalfPairCountSum:h,secondHalfAveragePairCount:p>0?h/p:0,progressPhaseStepCounts:o,progressPhasePairCountSums:i,progressPhaseAveragePairCounts:s,stepPairCounts:r}}function Gr(e,t=null){const n=()=>({progressPhaseDifficultyStepCounts:oe(),progressPhaseDifficultyScoreSums:oe(),progressPhaseAverageDifficultyScores:oe()});if(!Array.isArray(e)||e.length===0)return n();const r=e.map(l=>{const c=Number(l);return Number.isFinite(c)&&c>=0?c:0}),a=Number.isFinite(Number(t))?Math.max(1,Math.floor(Number(t))):Math.max(1,r.length),o=oe(),i=oe();for(let l=0;l<r.length;l++){const c=r[l],u=lu(l,a);o[u]+=1,i[u]+=c}const s=i.map((l,c)=>o[c]>0?l/o[c]:0);return{progressPhaseDifficultyStepCounts:o,progressPhaseDifficultyScoreSums:i,progressPhaseAverageDifficultyScores:s}}function ml(e,t,n){if(!(!Array.isArray(e)||!Array.isArray(t))&&Array.isArray(n))for(let r=0;r<n.length;r++){const a=Number(n[r]);!Number.isFinite(a)||a<0||(e[r]=(Number(e[r])||0)+a,t[r]=(Number(t[r])||0)+1)}}function fl(e,t,n){if(!(!Array.isArray(e)||!Array.isArray(t))&&Array.isArray(n))for(let r=0;r<n.length;r++){const a=Number(n[r]);!Number.isFinite(a)||a<0||(e[r]=(Number(e[r])||0)+a,t[r]=(Number(t[r])||0)+1)}}function xa(e){return e===tt?tt:xt}function bi(e,t=xt){const n=xa(t);if(n===tt&&Array.isArray(e?.winAverageStepPairCounts))return e.winAverageStepPairCounts.map(s=>Number(s)).filter(s=>Number.isFinite(s)&&s>=0);if(n===xt&&Array.isArray(e?.averageStepPairCounts))return e.averageStepPairCounts.map(s=>Number(s)).filter(s=>Number.isFinite(s)&&s>=0);const r=n===tt?Array.isArray(e?.winStepPairCountSums)?e.winStepPairCountSums:[]:Array.isArray(e?.stepPairCountSums)?e.stepPairCountSums:[],a=n===tt?Array.isArray(e?.winStepPairCountSampleCounts)?e.winStepPairCountSampleCounts:[]:Array.isArray(e?.stepPairCountSampleCounts)?e.stepPairCountSampleCounts:[],o=[],i=Math.max(r.length,a.length);for(let s=0;s<i;s++){const l=Number(r[s]),c=Number(a[s]),u=Number.isFinite(l)&&l>=0?l:0,d=Number.isFinite(c)&&c>0?c:0;d<=0||(o[s]=u/d)}return o}function Ci(e,t=xt){const n=xa(t);if(n===tt&&Array.isArray(e?.winAverageStepDifficultyScores))return e.winAverageStepDifficultyScores.map(s=>Number(s)).filter(s=>Number.isFinite(s)&&s>=0);if(n===xt&&Array.isArray(e?.averageStepDifficultyScores))return e.averageStepDifficultyScores.map(s=>Number(s)).filter(s=>Number.isFinite(s)&&s>=0);const r=n===tt?Array.isArray(e?.winStepDifficultyScoreSums)?e.winStepDifficultyScoreSums:[]:Array.isArray(e?.stepDifficultyScoreSums)?e.stepDifficultyScoreSums:[],a=n===tt?Array.isArray(e?.winStepDifficultyScoreSampleCounts)?e.winStepDifficultyScoreSampleCounts:[]:Array.isArray(e?.stepDifficultyScoreSampleCounts)?e.stepDifficultyScoreSampleCounts:[],o=[],i=Math.max(r.length,a.length);for(let s=0;s<i;s++){const l=Number(r[s]),c=Number(a[s]),u=Number.isFinite(l)&&l>=0?l:0,d=Number.isFinite(c)&&c>0?c:0;d<=0||(o[s]=u/d)}return o}function cu(e,t=rm){const n=Array.isArray(e)?e:[],r=Number.isFinite(Number(t))?Math.max(0,Math.floor(Number(t))):0,a=Math.max(r,n.length),o=[];for(let i=0;i<a;i++){const s=Number(n[i]);o.push(Number.isFinite(s)&&s>=0?s.toFixed(2):"")}return o}function hn(){return{zeroTurnCount:0,oneTurnCount:0,sameDirTwoTurnCount:0,reverseTwoTurnCount:0}}function uu(e,t){if(!(!e||typeof e!="object"))switch(t){case"直线连接":e.zeroTurnCount+=1;break;case"1拐连接":e.oneTurnCount+=1;break;case"同向2拐":e.sameDirTwoTurnCount+=1;break;case"反向2拐":e.reverseTwoTurnCount+=1;break}}function du(e,t=null){const n=hn();if(!Array.isArray(e)||e.length===0)return n;const r=Array.isArray(t)?t:qn(e);if(!Array.isArray(r)||r.length===0)return n;for(const a of r){if(!a||typeof a!="object")continue;const i=is(e,a).connectionType;uu(n,i)}return n}function cp(e,t,n){const r=Array.isArray(e)?G(e):[],a=Array.isArray(n)?n:[];return{boardData:r,width:r[0]?.length||0,height:r.length,direction:t,directionRule:Gn(t),mechanismSummary:Xt(r),remainingPairs:a.length,pairCombinationTotal:lo(r),removablePairs:a.map(o=>({row1:Number(o?.row1),col1:Number(o?.col1),row2:Number(o?.row2),col2:Number(o?.col2)}))}}function up(e,t,n={}){const r=Ie(n?.besidePercent,Qt(70)),a=qn(e);if(!Array.isArray(a)||a.length===0)return{pair:null,decisionFailCount:0};const o=cp(e,t,a),i=fd(o,{exhaustiveScan:!0}),s=Array.isArray(i?.failedBaseSummaries)?i.failedBaseSummaries.length:0,l=gd(i,{besidePercent:r});return!l?.ok||!l.move?{pair:null,decisionFailCount:Math.max(1,s||1)}:As(o,l.move,{humanMode:!0}).ok?{pair:{row1:Number(l.move.row1),col1:Number(l.move.col1),row2:Number(l.move.row2),col2:Number(l.move.col2)},decisionFailCount:Math.max(0,s)}:{pair:null,decisionFailCount:Math.max(1,s||1)}}function dp(e,t,n=null,r={}){const a=!!r?.humanMode,o=Ie(r?.humanModeBesidePercent,Qt(70)),i=G(e),s=Number.isFinite(Number(n))?Math.max(0,Number(n)):De(e),l=Math.max(1,Math.floor(s/2)),c=hn(),u=hn();let d=0,f=0,h=0,C=0,p=0,y=0,b=0,g=0;const S=os(e);if(!No(i))return{cleared:!1,remainingPercent:0,stepCount:0,failedStepCount:0,failedProgressPercent:0,pairSummary:jr([],l),stepDifficultyScores:[],difficultySummary:Gr([],l),connectionTypeCounts:c,availableConnectionTypeCountTotals:u,totalTrialErrorCount:0,maxTrialErrorCount:0,totalActualPairDistance:0,actualPairDistanceCount:0,totalAvailablePairDistance:0,availablePairDistanceStepCount:0,totalStepDifficultyScore:0,maxStepDifficultyScore:0,initialFaceDistributionDistance:S};const M=i.length*(i[0]?.length||0);let x=0;const N=[],P=[];for(;x<=M;){const T=qn(i);if(!Array.isArray(T)||T.length===0){if(Oe(i))return{cleared:!0,remainingPercent:0,stepCount:x,failedStepCount:null,failedProgressPercent:null,pairSummary:jr(N,l),stepDifficultyScores:P,difficultySummary:Gr(P,l),connectionTypeCounts:c,availableConnectionTypeCountTotals:u,totalTrialErrorCount:d,maxTrialErrorCount:f,totalActualPairDistance:h,actualPairDistanceCount:C,totalAvailablePairDistance:p,availablePairDistanceStepCount:y,totalStepDifficultyScore:b,maxStepDifficultyScore:g,initialFaceDistributionDistance:S};const Z=De(i),ne=s>0?Z/s*100:0,me=Math.max(0,Math.min(100,x/l*100));return{cleared:!1,remainingPercent:Math.max(0,Math.min(100,ne)),stepCount:x,failedStepCount:x,failedProgressPercent:me,pairSummary:jr(N,l),stepDifficultyScores:P,difficultySummary:Gr(P,l),connectionTypeCounts:c,availableConnectionTypeCountTotals:u,totalTrialErrorCount:d,maxTrialErrorCount:f,totalActualPairDistance:h,actualPairDistanceCount:C,totalAvailablePairDistance:p,availablePairDistanceStepCount:y,totalStepDifficultyScore:b,maxStepDifficultyScore:g,initialFaceDistributionDistance:S}}N.push(T.length);const A=du(i,T);u.zeroTurnCount+=Number(A.zeroTurnCount)||0,u.oneTurnCount+=Number(A.oneTurnCount)||0,u.sameDirTwoTurnCount+=Number(A.sameDirTwoTurnCount)||0,u.reverseTwoTurnCount+=Number(A.reverseTwoTurnCount)||0;const E=De(i),j=T.length,_=eu(i,T),O=as(i,T);O.pairCount>0&&(p+=O.averageDistance,y++);let F=null,D=0;if(a){const ee=up(i,t,{besidePercent:o});F=ee?.pair||null,D=Math.max(0,Number.isFinite(Number(ee?.decisionFailCount))?Number(ee.decisionFailCount):0)}else F=ap(T,!0);if(!F){const ee=De(i),Z=s>0?ee/s*100:0,ne=Math.max(0,Math.min(100,x/l*100));return{cleared:!1,remainingPercent:Math.max(0,Math.min(100,Z)),stepCount:x,failedStepCount:x,failedProgressPercent:ne,pairSummary:jr(N,l),stepDifficultyScores:P,difficultySummary:Gr(P,l),connectionTypeCounts:c,availableConnectionTypeCountTotals:u,totalTrialErrorCount:d,maxTrialErrorCount:f,totalActualPairDistance:h,actualPairDistanceCount:C,totalAvailablePairDistance:p,availablePairDistanceStepCount:y,totalStepDifficultyScore:b,maxStepDifficultyScore:g,initialFaceDistributionDistance:S}}d+=D,f=Math.max(f,D);const H=Array.isArray(F.connectionPath)?F.connectionPath:At(i,F.row1,F.col1,F.row2,F.col2),L=Ao(H);Number.isFinite(L)&&L>=0&&(h+=L,C++);const U=pn(H);uu(c,U);const Q=i[F.row1]?.[F.col1],$=ce(Q),W=Dr(i,null,F);zn(i,null,W),$===he&&Pa(i,null),gn(i,t);const K=tu({remainingCardCountBefore:E,availablePairCountBefore:j,sceneDifficultyScoreBefore:_});Number.isFinite(K)&&K>=0&&(P.push(K),b+=K,g=Math.max(g,K)),x++}const w=De(i),I=s>0?w/s*100:0;return{cleared:!1,remainingPercent:Math.max(0,Math.min(100,I)),stepCount:x,failedStepCount:x,failedProgressPercent:Math.max(0,Math.min(100,x/l*100)),pairSummary:jr(N,l),stepDifficultyScores:P,difficultySummary:Gr(P,l),connectionTypeCounts:c,availableConnectionTypeCountTotals:u,totalTrialErrorCount:d,maxTrialErrorCount:f,totalActualPairDistance:h,actualPairDistanceCount:C,totalAvailablePairDistance:p,availablePairDistanceStepCount:y,totalStepDifficultyScore:b,maxStepDifficultyScore:g,initialFaceDistributionDistance:S}}async function bs(e,t,n=100,r=null,a={}){const o=Number.isFinite(Number(n))?Math.max(1,Math.floor(Number(n))):100,i=!!a?.humanMode,s=Ie(a?.humanModeBesidePercent,Qt(70)),l=Su(a?.winRateRange,o),c=!!a?.enableUnreachableEarlyStop,u=De(e);let d=0,f=0,h=0,C=0,p=0,y=0,b=0,g=0,S=0,M=0,x=0,N=0,P=0,w=0,I=0,T=0,A=0,E=0,j=0,_=0;const O=os(e);let F=oe(),D=oe(),H=oe(),L=oe(),U=[],Q=[],$=[],W=[],K=[],ee=[],Z=[],ne=[],me=!1,se=!1,le=!1,We=!1;const q=hn(),ae=hn();if(l&&l.minWins>l.maxWins)return{gameCount:o,completedGames:0,winCount:0,winRate:0,failedGameCount:0,failedRemainPercent:0,averageFailureStep:null,averageFailureProgressPercent:null,averagePairPerStep:0,firstHalfAveragePairCount:0,secondHalfAveragePairCount:0,progressPhaseStepCounts:oe(),progressPhasePairCountSums:oe(),progressPhaseAveragePairCounts:oe(),progressPhaseDifficultyStepCounts:oe(),progressPhaseDifficultyScoreSums:oe(),progressPhaseAverageDifficultyScores:oe(),stepPairCountSums:[],stepPairCountSampleCounts:[],averageStepPairCounts:[],stepDifficultyScoreSums:[],stepDifficultyScoreSampleCounts:[],averageStepDifficultyScores:[],winStepPairCountSums:[],winStepPairCountSampleCounts:[],winAverageStepPairCounts:[],winStepDifficultyScoreSums:[],winStepDifficultyScoreSampleCounts:[],winAverageStepDifficultyScores:[],zeroTurnCount:0,oneTurnCount:0,sameDirTwoTurnCount:0,reverseTwoTurnCount:0,averageAvailableZeroTurnCountPerStep:0,averageAvailableOneTurnCountPerStep:0,averageAvailableSameDirTwoTurnCountPerStep:0,averageAvailableReverseTwoTurnCountPerStep:0,averageTrialErrorPerStep:0,maxTrialErrorCount:0,averageActualPairDistance:0,averageAvailablePairDistance:0,initialFaceDistributionDistance:O,averageStepDifficultyScore:0,maxStepDifficultyScore:0,stoppedEarly:!0,unreachable:!0};try{const R=await Ap(e,t,o,(te,fe,je)=>{d=te,f=je,typeof r=="function"&&r(te,fe,je)},(te,fe,je)=>!c||!l?!1:sr(je,te,fe,l),{humanMode:i,humanModeBesidePercent:s,maxWorkerCount:a?.maxWorkerCount,disableWorkerPoolReuse:a?.disableWorkerPoolReuse});if(R&&Number.isFinite(R.winCount)){me=!0,f=R.winCount,d=R.completedGames||o,h=Number.isFinite(Number(R.failedGameCount))?Number(R.failedGameCount):0,y=Number.isFinite(Number(R.failedRemainPercentSum))?Number(R.failedRemainPercentSum):0,C=Number.isFinite(Number(R.failureStepCountSum))?Number(R.failureStepCountSum):0,p=Number.isFinite(Number(R.failureProgressPercentSum))?Number(R.failureProgressPercentSum):0,b=Number.isFinite(Number(R.totalStepCount))?Number(R.totalStepCount):0,g=Number.isFinite(Number(R.totalPairCountSum))?Number(R.totalPairCountSum):0,S=Number.isFinite(Number(R.firstHalfStepCount))?Number(R.firstHalfStepCount):0,M=Number.isFinite(Number(R.firstHalfPairCountSum))?Number(R.firstHalfPairCountSum):0,x=Number.isFinite(Number(R.secondHalfStepCount))?Number(R.secondHalfStepCount):0,N=Number.isFinite(Number(R.secondHalfPairCountSum))?Number(R.secondHalfPairCountSum):0,P=Number.isFinite(Number(R.totalTrialErrorCountSum))?Number(R.totalTrialErrorCountSum):0,w=Number.isFinite(Number(R.maxTrialErrorCount))?Number(R.maxTrialErrorCount):0,I=Number.isFinite(Number(R.totalActualPairDistance))?Number(R.totalActualPairDistance):0,T=Number.isFinite(Number(R.actualPairDistanceCount))?Number(R.actualPairDistanceCount):0,A=Number.isFinite(Number(R.totalAvailablePairDistance))?Number(R.totalAvailablePairDistance):0,E=Number.isFinite(Number(R.availablePairDistanceStepCount))?Number(R.availablePairDistanceStepCount):0,j=Number.isFinite(Number(R.totalStepDifficultyScore))?Number(R.totalStepDifficultyScore):0,_=Number.isFinite(Number(R.maxStepDifficultyScore))?Number(R.maxStepDifficultyScore):0;const te=je=>{const _t=oe();if(!Array.isArray(je))return _t;for(let Ne=0;Ne<Kr;Ne++){const Sn=Number(je[Ne]);_t[Ne]=Number.isFinite(Sn)&&Sn>0?Sn:0}return _t};F=te(R.progressPhaseStepCounts),D=te(R.progressPhasePairCountSums),H=te(R.progressPhaseDifficultyStepCounts),L=te(R.progressPhaseDifficultyScoreSums);const fe=je=>Array.isArray(je)?je.map(_t=>{const Ne=Number(_t);return Number.isFinite(Ne)&&Ne>=0?Ne:0}):[];U=fe(R.stepPairCountSums),Q=fe(R.stepPairCountSampleCounts),K=fe(R.stepDifficultyScoreSums),ee=fe(R.stepDifficultyScoreSampleCounts),$=fe(R.winStepPairCountSums),W=fe(R.winStepPairCountSampleCounts),Z=fe(R.winStepDifficultyScoreSums),ne=fe(R.winStepDifficultyScoreSampleCounts),q.zeroTurnCount=Number(R.zeroTurnCount)||0,q.oneTurnCount=Number(R.oneTurnCount)||0,q.sameDirTwoTurnCount=Number(R.sameDirTwoTurnCount)||0,q.reverseTwoTurnCount=Number(R.reverseTwoTurnCount)||0,ae.zeroTurnCount=Number(R.availableZeroTurnCountSum)||0,ae.oneTurnCount=Number(R.availableOneTurnCountSum)||0,ae.sameDirTwoTurnCount=Number(R.availableSameDirTwoTurnCountSum)||0,ae.reverseTwoTurnCount=Number(R.availableReverseTwoTurnCountSum)||0,se=!!R.stoppedEarly,We=!!R.timedOut,le=se&&sr(f,d,o,l)}}catch(R){console.error("Worker pair metrics simulate failed, fallback to single thread:",R)}if(!me)for(let R=0;R<o;R++){const te=dp(e,t,u,{humanMode:i,humanModeBesidePercent:s});if(te?.cleared)f++;else{h++;const Se=Number(te?.failedStepCount),Ot=Number(te?.failedProgressPercent),Ht=Number(te?.remainingPercent);C+=Number.isFinite(Se)?Se:0,p+=Number.isFinite(Ot)?Ot:0,y+=Number.isFinite(Ht)?Ht:0}const fe=te?.pairSummary||{};b+=Number(fe.totalStepCount)||0,g+=Number(fe.totalPairCountSum)||0,ml(U,Q,fe.stepPairCounts),fl(K,ee,te?.stepDifficultyScores),te?.cleared&&(ml($,W,fe.stepPairCounts),fl(Z,ne,te?.stepDifficultyScores)),P+=Number(te?.totalTrialErrorCount)||0,w=Math.max(w,Number(te?.maxTrialErrorCount)||0),I+=Number(te?.totalActualPairDistance)||0,T+=Number(te?.actualPairDistanceCount)||0,A+=Number(te?.totalAvailablePairDistance)||0,E+=Number(te?.availablePairDistanceStepCount)||0,j+=Number(te?.totalStepDifficultyScore)||0,_=Math.max(_,Number(te?.maxStepDifficultyScore)||0),S+=Number(fe.firstHalfStepCount)||0,M+=Number(fe.firstHalfPairCountSum)||0,x+=Number(fe.secondHalfStepCount)||0,N+=Number(fe.secondHalfPairCountSum)||0;const je=Array.isArray(fe.progressPhaseStepCounts)?fe.progressPhaseStepCounts:[],_t=Array.isArray(fe.progressPhasePairCountSums)?fe.progressPhasePairCountSums:[],Ne=te?.difficultySummary||{},Sn=Array.isArray(Ne.progressPhaseDifficultyStepCounts)?Ne.progressPhaseDifficultyStepCounts:[],Go=Array.isArray(Ne.progressPhaseDifficultyScoreSums)?Ne.progressPhaseDifficultyScoreSums:[];for(let Se=0;Se<Kr;Se++){const Ot=Number(je[Se]),Ht=Number(_t[Se]),Jn=Number(Sn[Se]),Zn=Number(Go[Se]);F[Se]+=Number.isFinite(Ot)&&Ot>0?Ot:0,D[Se]+=Number.isFinite(Ht)&&Ht>0?Ht:0,H[Se]+=Number.isFinite(Jn)&&Jn>0?Jn:0,L[Se]+=Number.isFinite(Zn)&&Zn>0?Zn:0}const Kn=te?.connectionTypeCounts||{};q.zeroTurnCount+=Number(Kn.zeroTurnCount)||0,q.oneTurnCount+=Number(Kn.oneTurnCount)||0,q.sameDirTwoTurnCount+=Number(Kn.sameDirTwoTurnCount)||0,q.reverseTwoTurnCount+=Number(Kn.reverseTwoTurnCount)||0;const Xn=te?.availableConnectionTypeCountTotals||{};if(ae.zeroTurnCount+=Number(Xn.zeroTurnCount)||0,ae.oneTurnCount+=Number(Xn.oneTurnCount)||0,ae.sameDirTwoTurnCount+=Number(Xn.sameDirTwoTurnCount)||0,ae.reverseTwoTurnCount+=Number(Xn.reverseTwoTurnCount)||0,d=R+1,typeof r=="function"&&r(d,o,f),c&&l&&(le=sr(f,d,o,l),le)){se=!0;break}d%5===0&&await rt(0)}const ge=o>0?f/o*100:0,Me=h>0?y/h:0,kr=h>0?C/h:null,Fr=h>0?p/h:null,Lr=b>0?g/b:0,$r=b>0?P/b:0,_r=T>0?I/T:0,Un=E>0?A/E:0,Ta=b>0?j/b:0,en=S>0?M/S:0,Da=x>0?N/x:0,Or=D.map((R,te)=>F[te]>0?R/F[te]:0),Ea=L.map((R,te)=>H[te]>0?R/H[te]:0),Cn=bi({stepPairCountSums:U,stepPairCountSampleCounts:Q}),it=bi({winStepPairCountSums:$,winStepPairCountSampleCounts:W},tt),Ze=Ci({stepDifficultyScoreSums:K,stepDifficultyScoreSampleCounts:ee}),Yn=Ci({winStepDifficultyScoreSums:Z,winStepDifficultyScoreSampleCounts:ne},tt),B=d>0?q.zeroTurnCount/d:0,Lo=d>0?q.oneTurnCount/d:0,$o=d>0?q.sameDirTwoTurnCount/d:0,_o=d>0?q.reverseTwoTurnCount/d:0,Oo=b>0?ae.zeroTurnCount/b:0,Ho=b>0?ae.oneTurnCount/b:0,Wo=b>0?ae.sameDirTwoTurnCount/b:0,jo=b>0?ae.reverseTwoTurnCount/b:0;return{gameCount:o,completedGames:d,winCount:f,winRate:ge,failedGameCount:h,failedRemainPercent:Me,averageFailureStep:kr,averageFailureProgressPercent:Fr,averagePairPerStep:Lr,firstHalfAveragePairCount:en,secondHalfAveragePairCount:Da,progressPhaseStepCounts:F,progressPhasePairCountSums:D,progressPhaseAveragePairCounts:Or,progressPhaseDifficultyStepCounts:H,progressPhaseDifficultyScoreSums:L,progressPhaseAverageDifficultyScores:Ea,stepPairCountSums:U,stepPairCountSampleCounts:Q,averageStepPairCounts:Cn,stepDifficultyScoreSums:K,stepDifficultyScoreSampleCounts:ee,averageStepDifficultyScores:Ze,winStepPairCountSums:$,winStepPairCountSampleCounts:W,winAverageStepPairCounts:it,winStepDifficultyScoreSums:Z,winStepDifficultyScoreSampleCounts:ne,winAverageStepDifficultyScores:Yn,zeroTurnCount:q.zeroTurnCount,oneTurnCount:q.oneTurnCount,sameDirTwoTurnCount:q.sameDirTwoTurnCount,reverseTwoTurnCount:q.reverseTwoTurnCount,averageZeroTurnCount:B,averageOneTurnCount:Lo,averageSameDirTwoTurnCount:$o,averageReverseTwoTurnCount:_o,availableZeroTurnCountSum:ae.zeroTurnCount,availableOneTurnCountSum:ae.oneTurnCount,availableSameDirTwoTurnCountSum:ae.sameDirTwoTurnCount,availableReverseTwoTurnCountSum:ae.reverseTwoTurnCount,averageAvailableZeroTurnCountPerStep:Oo,averageAvailableOneTurnCountPerStep:Ho,averageAvailableSameDirTwoTurnCountPerStep:Wo,averageAvailableReverseTwoTurnCountPerStep:jo,averageTrialErrorPerStep:$r,maxTrialErrorCount:w,averageActualPairDistance:_r,averageAvailablePairDistance:Un,initialFaceDistributionDistance:O,averageStepDifficultyScore:Ta,maxStepDifficultyScore:_,stoppedEarly:se,unreachable:le,timedOut:We}}function mu(e){if(!e||!e.failedGameCount)return"0.00%";const t=Number(e.averageFailureStep),n=Number(e.averageFailureProgressPercent),r=Number.isFinite(t)?t:0,a=Number.isFinite(n)?n:0;return r<0?"0.00%":`${a.toFixed(2)}%`}function mp(e){return!e||!e.failedGameCount?"无失败局":mu(e)}function fp(e){const t=Number(e?.firstHalfAveragePairCount),n=Number(e?.secondHalfAveragePairCount),r=Number.isFinite(t)?t:0,a=Number.isFinite(n)?n:0;return(r-a).toFixed(4)}function hp(e){const t=e||{};if(Array.isArray(t.progressPhaseAveragePairCounts))return Yr.map((a,o)=>{const i=Number(t.progressPhaseAveragePairCounts[o]);return Number.isFinite(i)&&i>=0?i:0});const n=Array.isArray(t.progressPhaseStepCounts)?t.progressPhaseStepCounts:oe(),r=Array.isArray(t.progressPhasePairCountSums)?t.progressPhasePairCountSums:oe();return Yr.map((a,o)=>{const i=Number(n[o]),s=Number(r[o]),l=Number.isFinite(i)&&i>0?i:0,c=Number.isFinite(s)&&s>0?s:0;return l>0?c/l:0})}function pp(e){return hp(e).map(n=>Number(n||0).toFixed(2))}function gp(e){const t=e||{};if(Array.isArray(t.progressPhaseAverageDifficultyScores))return Yr.map((a,o)=>{const i=Number(t.progressPhaseAverageDifficultyScores[o]);return Number.isFinite(i)&&i>=0?i:0});const n=Array.isArray(t.progressPhaseDifficultyStepCounts)?t.progressPhaseDifficultyStepCounts:oe(),r=Array.isArray(t.progressPhaseDifficultyScoreSums)?t.progressPhaseDifficultyScoreSums:oe();return Yr.map((a,o)=>{const i=Number(n[o]),s=Number(r[o]),l=Number.isFinite(i)&&i>0?i:0,c=Number.isFinite(s)&&s>0?s:0;return l>0?c/l:0})}function yp(e){return gp(e).map(n=>Number(n||0).toFixed(2))}function bp(e,t=xt){const n=bi(e,t);return cu(n)}function Cp(e,t=xt){const n=Ci(e,t);return cu(n)}function Cs(e,t,n,r,a,o,i,s=!0,l=!1,c=70,u=xt){const d=(()=>{const ee=String(e??"").trim();return ee||"1"})(),f=Array.isArray(t)?t:[],h=Number.isFinite(Number(n))?Math.max(0,Math.min(8,Math.round(Number(n)))):0,C=Number.isFinite(Number(r))?Number(r):Number(a?.winRate)||0,p=mu(a),y=Number(a?.averagePairPerStep||0).toFixed(2),b=fp(a),g=pp(a),S=yp(a),M=bp(a,u),x=Cp(a,u),N=Number(a?.averageTrialErrorPerStep||0).toFixed(2),P=Math.max(0,Math.round(Number(a?.maxTrialErrorCount)||0)),w=Number(a?.averageActualPairDistance||0).toFixed(2),I=Number(a?.averageAvailablePairDistance||0).toFixed(2),T=Number(a?.initialFaceDistributionDistance||0).toFixed(2),A=Number(a?.averageStepDifficultyScore||0).toFixed(2),E=Number(a?.maxStepDifficultyScore||0).toFixed(2),j=l?1:0,_=Ie(c,70),O=Number.isFinite(Number(a?.completedGames))?Math.max(0,Number(a.completedGames)):0,F=(ee,Z)=>Number.isFinite(Number(ee))?Math.max(0,Number(ee)):O>0&&Number.isFinite(Number(Z))?Math.max(0,Number(Z)/O):0,D=F(a?.averageZeroTurnCount,a?.zeroTurnCount),H=F(a?.averageOneTurnCount,a?.oneTurnCount),L=F(a?.averageSameDirTwoTurnCount,a?.sameDirTwoTurnCount),U=F(a?.averageReverseTwoTurnCount,a?.reverseTwoTurnCount),Q=[Number(a?.averageAvailableZeroTurnCountPerStep||0).toFixed(2),Number(a?.averageAvailableOneTurnCountPerStep||0).toFixed(2),Number(a?.averageAvailableSameDirTwoTurnCountPerStep||0).toFixed(2),Number(a?.averageAvailableReverseTwoTurnCountPerStep||0).toFixed(2)],$=Math.max(0,Math.round(Number(o)||0)),W=Math.max(0,Math.round(Number(i)||0)),K=`${JSON.stringify(f)}	${h}	${C.toFixed(2)}	${p}	${$}	${W}	${y}	${b}	${D.toFixed(2)}	${H.toFixed(2)}	${L.toFixed(2)}	${U.toFixed(2)}	${Q.join("	")}	${g.join("	")}	${S.join("	")}	${N}	${P}	${w}	${I}	${T}	${A}	${E}	${j}	${_}`+(M.length>0?`	${M.join("	")}`:"")+(x.length>0?`	${x.join("	")}`:"");return s?`${d}	${K}`:K}function Si(e=100){const t=Number.isFinite(Number(e))?Math.max(1,Math.min(1e4,Math.round(Number(e)))):100,n=document.getElementById("simulateGameCount");if(!n)return t;const r=Number(n.value),a=Number.isFinite(r)?Math.max(1,Math.min(1e4,Math.round(r))):t;return n.value!==String(a)&&(n.value=String(a)),a}function pr(e=null){const t=Number.isFinite(Number(e))?Si(Number(e)):Si(100),n=document.getElementById("levelStatsSimulationTitle");n&&(n.textContent=`模拟${t}局胜率`);const r=document.getElementById("btnSimulatePlay");r&&!r.classList.contains("simulating")&&(r.textContent=`模拟${t}局`)}function Ie(e,t=70){const n=Number.isFinite(Number(t))?Math.max(0,Math.min(100,Math.round(Number(t)))):70,r=Number(e);return Number.isFinite(r)?Math.max(0,Math.min(100,Math.round(r))):n}function Qt(e=70){const t=document.getElementById("humanModeBesidePercent"),n=Ie(t?t.value:In,e);return In=n,t&&t.value!==String(n)&&(t.value=String(n)),n}function hl(e){In=Ie(e,70);const t=document.getElementById("humanModeBesidePercent");return t&&(t.value=String(In)),In}function Sp(){Qt(70)}function vi(){const e=document.getElementById("btnStatsLocalHumanMode");if(!e)return;const t=!!Vr;e.classList.toggle("active",t),e.textContent=t?"人类模式：开":"人类模式：关",e.setAttribute("aria-pressed",t?"true":"false")}function vp(e=null){e==null?Vr=!Vr:Vr=!!e,vi()}function Er(e=xt){return xa(oi||e)}function Pi(){const e=document.getElementById("btnStepPairExportScope");if(!e)return;const n=Er()===tt;e.classList.toggle("active",n),e.textContent=n?"每步数据：胜利局":"每步数据：所有局",e.setAttribute("aria-pressed",n?"true":"false")}function xi(e){return oi=xa(e),Pi(),oi}function Pp(e=null){if(e!=null)return xi(e);const t=Er()===tt?xt:tt;return xi(t)}function pl(e,t,n=null){const r=n||document.getElementById("btnSimulatePlay");if(!r)return;const a=Number.isFinite(Number(e))?Number(e):0,o=Math.max(0,Math.min(100,a));r.style.setProperty("--simulate-progress",o.toFixed(2)),t&&(r.textContent=t)}function xp(e=null){const t=e||document.getElementById("btnSimulatePlay");if(!t)return;if(t.disabled=!1,t.classList.remove("simulating"),t.style.removeProperty("--simulate-progress"),t.id==="btnSimulatePlay"){pr();return}const n=t.dataset.defaultLabel||"生成";t.textContent=n}function Mp(){return`
self.onmessage = function(event) {
  const payload = event && event.data ? event.data : {};
  const taskId = Number.isInteger(payload.taskId) ? payload.taskId : 0;
  const games = Number.isInteger(payload.games) ? payload.games : 0;
  const boardData = Array.isArray(payload.boardData) ? payload.boardData : [];
  const direction = Number.isInteger(payload.direction) ? payload.direction : 0;
  const options = payload && typeof payload.options === 'object' ? payload.options : {};
  if (payload.type === 'cancel') {
    if (taskId > 0) canceledTaskIds.add(taskId);
    return;
  }
  if (payload.type === 'run') {
    runBatch(games, boardData, direction, taskId);
    return;
  }
  if (payload.type === 'run_pair_metrics') {
    runBatchPairMetrics(games, boardData, direction, taskId, options);
    return;
  }
};

const canceledTaskIds = new Set();

function isTaskCanceled(taskId) {
  return Number.isInteger(taskId) && taskId > 0 && canceledTaskIds.has(taskId);
}

function normalizeHumanModeBesidePercent(value, fallbackValue) {
  const fallback = Number.isFinite(Number(fallbackValue))
    ? Math.max(0, Math.min(100, Math.round(Number(fallbackValue))))
    : 70;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(0, Math.min(100, Math.round(numeric)));
}

const EMPTY_CELL_ID = 0;
const PLACEHOLDER_CELL_ID = 499;
const BOMB_CELL_ID = 99;
const ATTACHMENT_MULTIPLIER = 1000;
const ATTACHMENT_IDS = new Set([1, 5]);
const STONE_CELL_ID = 501;
const WOOD_CELL_ID = 502;
const MAGNET_CELL_ID = 503;
const ICE_LEVEL_1_CELL_ID = 504;
const ICE_LEVEL_2_CELL_ID = 505;
const ICE_LEVEL_3_CELL_ID = 506;
const IMMOBILE_OBSTACLE_IDS = new Set([
  STONE_CELL_ID,
  MAGNET_CELL_ID,
  ICE_LEVEL_1_CELL_ID,
  ICE_LEVEL_2_CELL_ID,
  ICE_LEVEL_3_CELL_ID
]);
const LLK_DIRECTION_STEPS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

function cloneBoardData(boardData) {
  if (!Array.isArray(boardData)) return [];
  return boardData.map((row) => Array.isArray(row) ? row.slice() : []);
}

function hasFilledCells(boardData) {
  if (!Array.isArray(boardData)) return false;
  for (const row of boardData) {
    if (!Array.isArray(row)) continue;
    for (const value of row) {
      if (Number.isInteger(value) && value > 0) return true;
    }
  }
  return false;
}

function isEmptyCellId(cellId) {
  return !Number.isInteger(cellId) || cellId <= 0;
}

function decodeCellId(cellId) {
  if (isEmptyCellId(cellId)) {
    return { baseId: EMPTY_CELL_ID, attachmentId: null, hasAttachment: false };
  }
  if (cellId >= ATTACHMENT_MULTIPLIER) {
    const attachmentId = Math.floor(cellId / ATTACHMENT_MULTIPLIER);
    const baseId = cellId % ATTACHMENT_MULTIPLIER;
    if (ATTACHMENT_IDS.has(attachmentId) && baseId > 0) {
      return { baseId, attachmentId, hasAttachment: true };
    }
  }
  return { baseId: cellId, attachmentId: null, hasAttachment: false };
}

function isNormalBaseId(baseId) {
  if (baseId === PLACEHOLDER_CELL_ID) return true;
  return baseId >= 1 && baseId <= 99;
}

function isRemovableBaseId(baseId) {
  return isNormalBaseId(baseId);
}

function isImmobileObstacleBaseId(baseId) {
  return IMMOBILE_OBSTACLE_IDS.has(baseId);
}

function getMatchableBaseId(cellId) {
  const parsed = decodeCellId(cellId);
  if (!isRemovableBaseId(parsed.baseId)) return null;
  if (parsed.hasAttachment) return null;
  return parsed.baseId;
}

function isPlayBoardCleared(boardData) {
  if (!Array.isArray(boardData)) return true;
  for (const row of boardData) {
    if (!Array.isArray(row)) continue;
    for (const value of row) {
      const parsed = decodeCellId(value);
      if (isRemovableBaseId(parsed.baseId)) return false;
    }
  }
  return true;
}

function getFourNeighbors(row, col, width, height) {
  const result = [];
  const offsets = [[-1,0],[1,0],[0,-1],[0,1]];
  for (const [dr, dc] of offsets) {
    const nextRow = row + dr;
    const nextCol = col + dc;
    if (nextRow < 0 || nextRow >= height || nextCol < 0 || nextCol >= width) continue;
    result.push({ row: nextRow, col: nextCol });
  }
  return result;
}

function triggerAdjacentMechanisms(boardData, removedPositions) {
  if (!Array.isArray(boardData) || !Array.isArray(removedPositions)) return;
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  const targetPositions = new Map();

  for (const position of removedPositions) {
    const neighbors = getFourNeighbors(position.row, position.col, width, height);
    for (const neighbor of neighbors) {
      targetPositions.set(neighbor.row + '-' + neighbor.col, neighbor);
    }
  }

  targetPositions.forEach((position) => {
    const currentId = boardData[position.row][position.col];
    const parsed = decodeCellId(currentId);

    if (parsed.hasAttachment && ATTACHMENT_IDS.has(parsed.attachmentId)) {
      boardData[position.row][position.col] = parsed.baseId;
      return;
    }

    if (parsed.baseId === ICE_LEVEL_1_CELL_ID) {
      boardData[position.row][position.col] = EMPTY_CELL_ID;
      return;
    }
    if (parsed.baseId === ICE_LEVEL_2_CELL_ID || parsed.baseId === ICE_LEVEL_3_CELL_ID) {
      boardData[position.row][position.col] = parsed.baseId - 1;
    }
  });
}

function removePairFromBoard(boardData, pair) {
  const removed = [
    { row: pair.row1, col: pair.col1 },
    { row: pair.row2, col: pair.col2 }
  ];
  for (const position of removed) {
    boardData[position.row][position.col] = EMPTY_CELL_ID;
  }
  return removed;
}

function createLianliankanSearchContext(boardData) {
  if (!Array.isArray(boardData) || boardData.length === 0) return null;
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  if (width === 0) return null;

  const extHeight = height + 2;
  const extWidth = width + 2;
  const cellCount = extHeight * extWidth;
  const stateCount = cellCount * 4;
  const blocked = new Uint8Array(cellCount);

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const value = boardData[row][col];
      if (Number.isInteger(value) && value > 0) {
blocked[(row + 1) * extWidth + (col + 1)] = 1;
      }
    }
  }

  return {
    extWidth,
    extHeight,
    blocked,
    visitStamp: new Uint16Array(stateCount),
    visitTurns: new Uint8Array(stateCount),
    stamp: 1,
    queueRow: new Int16Array(stateCount * 4),
    queueCol: new Int16Array(stateCount * 4),
    queueDir: new Uint8Array(stateCount * 4),
    queueTurns: new Uint8Array(stateCount * 4)
  };
}

function beginLianliankanSearch(searchContext) {
  searchContext.stamp++;
  if (searchContext.stamp >= 65535) {
    searchContext.visitStamp.fill(0);
    searchContext.stamp = 1;
  }
}

function markLianliankanVisited(searchContext, row, col, dir, turns) {
  const stateIndex = (((row * searchContext.extWidth) + col) << 2) + dir;
  const visitedStamp = searchContext.visitStamp[stateIndex];
  if (visitedStamp === searchContext.stamp &&
      searchContext.visitTurns[stateIndex] <= turns) {
    return false;
  }
  searchContext.visitStamp[stateIndex] = searchContext.stamp;
  searchContext.visitTurns[stateIndex] = turns;
  return true;
}

function canConnectByLianliankanWithContext(searchContext, startRow, startCol, targetRow, targetCol) {
  if (!searchContext) return false;
  if (startRow === targetRow && startCol === targetCol) return false;

  const extWidth = searchContext.extWidth;
  const extHeight = searchContext.extHeight;
  const startExtRow = startRow + 1;
  const startExtCol = startCol + 1;
  const targetExtRow = targetRow + 1;
  const targetExtCol = targetCol + 1;
  const startCellIndex = (startExtRow * extWidth) + startExtCol;
  const targetCellIndex = (targetExtRow * extWidth) + targetExtCol;

  if (searchContext.blocked[startCellIndex] === 0 || searchContext.blocked[targetCellIndex] === 0) {
    return false;
  }

  beginLianliankanSearch(searchContext);
  searchContext.blocked[startCellIndex] = 0;

  let queueHead = 0;
  let queueTail = 0;

  for (let dir = 0; dir < 4; dir++) {
    const step = LLK_DIRECTION_STEPS[dir];
    let nextRow = startExtRow + step[0];
    let nextCol = startExtCol + step[1];
    while (nextRow >= 0 && nextRow < extHeight && nextCol >= 0 && nextCol < extWidth) {
      if (nextRow === targetExtRow && nextCol === targetExtCol) {
searchContext.blocked[startCellIndex] = 1;
return true;
      }
      const nextIndex = (nextRow * extWidth) + nextCol;
      if (searchContext.blocked[nextIndex] !== 0) break;
      if (markLianliankanVisited(searchContext, nextRow, nextCol, dir, 0)) {
searchContext.queueRow[queueTail] = nextRow;
searchContext.queueCol[queueTail] = nextCol;
searchContext.queueDir[queueTail] = dir;
searchContext.queueTurns[queueTail] = 0;
queueTail++;
      }
      nextRow += step[0];
      nextCol += step[1];
    }
  }

  while (queueHead < queueTail) {
    const currentRow = searchContext.queueRow[queueHead];
    const currentCol = searchContext.queueCol[queueHead];
    const currentDir = searchContext.queueDir[queueHead];
    const currentTurns = searchContext.queueTurns[queueHead];
    queueHead++;

    for (let nextDir = 0; nextDir < 4; nextDir++) {
      const nextTurns = currentTurns + (nextDir === currentDir ? 0 : 1);
      if (nextTurns > 2) continue;

      const step = LLK_DIRECTION_STEPS[nextDir];
      let nextRow = currentRow + step[0];
      let nextCol = currentCol + step[1];
      while (nextRow >= 0 && nextRow < extHeight && nextCol >= 0 && nextCol < extWidth) {
if (nextRow === targetExtRow && nextCol === targetExtCol) {
  searchContext.blocked[startCellIndex] = 1;
  return true;
}
const nextIndex = (nextRow * extWidth) + nextCol;
if (searchContext.blocked[nextIndex] !== 0) break;
if (markLianliankanVisited(searchContext, nextRow, nextCol, nextDir, nextTurns)) {
  searchContext.queueRow[queueTail] = nextRow;
  searchContext.queueCol[queueTail] = nextCol;
  searchContext.queueDir[queueTail] = nextDir;
  searchContext.queueTurns[queueTail] = nextTurns;
  queueTail++;
}
nextRow += step[0];
nextCol += step[1];
      }
    }
  }

  searchContext.blocked[startCellIndex] = 1;
  return false;
}

function getRemovablePairsForBoard(boardData) {
  if (!Array.isArray(boardData) || boardData.length === 0) return [];
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  if (width === 0) return [];
  const searchContext = createLianliankanSearchContext(boardData);
  if (!searchContext) return [];

  const positionsByNumber = new Map();
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const baseId = getMatchableBaseId(boardData[row][col]);
      if (baseId === null) continue;
      if (!positionsByNumber.has(baseId)) positionsByNumber.set(baseId, []);
      positionsByNumber.get(baseId).push({ row, col });
    }
  }

  const pairs = [];
  positionsByNumber.forEach((positions) => {
    if (!positions || positions.length < 2) return;
    for (let left = 0; left < positions.length - 1; left++) {
      for (let right = left + 1; right < positions.length; right++) {
const first = positions[left];
const second = positions[right];
if (!canConnectByLianliankanWithContext(
  searchContext,
  first.row,
  first.col,
  second.row,
  second.col
)) {
  continue;
}
const isAdjacent = Math.abs(first.row - second.row) +
  Math.abs(first.col - second.col) === 1;
pairs.push({
  row1: first.row,
  col1: first.col,
  row2: second.row,
  col2: second.col,
  adjacent: isAdjacent
});
      }
    }
  });
  return pairs;
}

function compressPathPoints(pathPoints) {
  if (!Array.isArray(pathPoints) || pathPoints.length <= 2) return pathPoints || [];
  const compressed = [pathPoints[0]];
  for (let index = 1; index < pathPoints.length - 1; index++) {
    const prev = compressed[compressed.length - 1];
    const current = pathPoints[index];
    const next = pathPoints[index + 1];
    const sameRow = prev.row === current.row && current.row === next.row;
    const sameCol = prev.col === current.col && current.col === next.col;
    if (!sameRow && !sameCol) compressed.push(current);
  }
  compressed.push(pathPoints[pathPoints.length - 1]);
  return compressed;
}

function getTurnDirectionSign(prevPoint, currentPoint, nextPoint) {
  if (!prevPoint || !currentPoint || !nextPoint) return 0;
  const dr1 = currentPoint.row - prevPoint.row;
  const dc1 = currentPoint.col - prevPoint.col;
  const dr2 = nextPoint.row - currentPoint.row;
  const dc2 = nextPoint.col - currentPoint.col;
  const cross = (dc1 * dr2) - (dr1 * dc2);
  if (cross > 0) return 1;
  if (cross < 0) return -1;
  return 0;
}

function getPlayConnectionTypeByPath(pathPoints) {
  if (!Array.isArray(pathPoints) || pathPoints.length < 2) return '直线连接';
  const turnCount = Math.max(0, pathPoints.length - 2);
  if (turnCount <= 0) return '直线连接';
  if (turnCount === 1) return '1拐连接';

  const turnSigns = [];
  for (let index = 1; index < pathPoints.length - 1; index++) {
    const sign = getTurnDirectionSign(
      pathPoints[index - 1],
      pathPoints[index],
      pathPoints[index + 1]
    );
    if (sign !== 0) turnSigns.push(sign);
  }
  if (turnSigns.length >= 2 && turnSigns[0] === turnSigns[1]) {
    return '同向2拐';
  }
  return '反向2拐';
}

function computePathLengthByGridSteps(pathPoints) {
  if (!Array.isArray(pathPoints) || pathPoints.length < 2) return null;
  let length = 0;
  for (let index = 1; index < pathPoints.length; index++) {
    const prev = pathPoints[index - 1];
    const current = pathPoints[index];
    const prevRow = Number(prev && prev.row);
    const prevCol = Number(prev && prev.col);
    const row = Number(current && current.row);
    const col = Number(current && current.col);
    if (![prevRow, prevCol, row, col].every(Number.isFinite)) {
      return null;
    }
    length += Math.abs(row - prevRow) + Math.abs(col - prevCol);
  }
  return length;
}

function computePairConnectionDistance(boardData, pair) {
  if (!pair) return null;
  const path = findConnectionPathByLianliankan(
    boardData,
    pair.row1,
    pair.col1,
    pair.row2,
    pair.col2
  );
  const distance = computePathLengthByGridSteps(path);
  return Number.isFinite(distance) && distance >= 0 ? distance : null;
}

function summarizeRemovablePairDistances(boardData, removablePairs) {
  if (!Array.isArray(removablePairs) || removablePairs.length === 0) {
    return {
      totalDistance: 0,
      pairCount: 0,
      averageDistance: 0,
      totalFriendlyScore: 0,
      averageFriendlyScore: 0
    };
  }
  let totalDistance = 0;
  let pairCount = 0;
  let totalFriendlyScore = 0;
  for (const pair of removablePairs) {
    const details = getAvailablePairConnectionDetails(boardData, pair);
    const distance = details.distance;
    if (!Number.isFinite(distance)) continue;
    const connectionType = details.connectionType;
    totalDistance += distance;
    totalFriendlyScore += calculateAvailablePairFriendlyScore(distance, connectionType);
    pairCount++;
  }
  return {
    totalDistance,
    pairCount,
    averageDistance: pairCount > 0 ? (totalDistance / pairCount) : 0,
    totalFriendlyScore,
    averageFriendlyScore: pairCount > 0 ? (totalFriendlyScore / pairCount) : 0
  };
}

function calculateInitialFaceDistributionDistance(boardData) {
  if (!Array.isArray(boardData) || boardData.length === 0) return 0;
  const positionsByBaseId = new Map();
  for (let row = 0; row < boardData.length; row++) {
    const sourceRow = boardData[row];
    if (!Array.isArray(sourceRow)) continue;
    for (let col = 0; col < sourceRow.length; col++) {
      const parsed = decodeCellId(sourceRow[col]);
      if (!Number.isInteger(parsed.baseId)) continue;
      if (parsed.baseId < 1 || parsed.baseId >= BOMB_CELL_ID) continue;
      if (
parsed.baseId === PLACEHOLDER_CELL_ID ||
parsed.baseId === STONE_CELL_ID ||
parsed.baseId === WOOD_CELL_ID ||
parsed.baseId === MAGNET_CELL_ID ||
parsed.baseId === ICE_LEVEL_1_CELL_ID ||
parsed.baseId === ICE_LEVEL_2_CELL_ID ||
parsed.baseId === ICE_LEVEL_3_CELL_ID
      ) {
continue;
      }
      if (!positionsByBaseId.has(parsed.baseId)) {
positionsByBaseId.set(parsed.baseId, []);
      }
      positionsByBaseId.get(parsed.baseId).push({ row, col });
    }
  }

  let totalDistance = 0;
  let pairCount = 0;
  positionsByBaseId.forEach((positions) => {
    if (!Array.isArray(positions) || positions.length < 2) return;
    for (let left = 0; left < positions.length - 1; left++) {
      for (let right = left + 1; right < positions.length; right++) {
totalDistance +=
  Math.abs(positions[left].row - positions[right].row) +
  Math.abs(positions[left].col - positions[right].col);
pairCount++;
      }
    }
  });
  return pairCount > 0 ? (totalDistance / pairCount) : 0;
}

function getConnectionTypeDifficultyMultiplier(connectionType) {
  switch (connectionType) {
    case '1拐连接':
      return 1.2;
    case '同向2拐':
      return 1.45;
    case '反向2拐':
      return 1.6;
    case '直线连接':
    default:
      return 1;
  }
}

function calculateMoveDifficultyFactor(pairDistance, connectionType) {
  const safeDistance = Number.isFinite(Number(pairDistance))
    ? Math.max(0, Number(pairDistance))
    : 0;
  const distanceFactor = 1 + (Math.min(safeDistance, 20) / 20);
  return distanceFactor * getConnectionTypeDifficultyMultiplier(connectionType);
}

function getConnectionTypeFriendlyWeight(connectionType) {
  switch (connectionType) {
    case '1拐连接':
      return 0.75;
    case '同向2拐':
      return 0.55;
    case '反向2拐':
      return 0.45;
    case '直线连接':
      return 1;
    default:
      return 0.5;
  }
}

function calculateAvailablePairFriendlyScore(pairDistance, connectionType) {
  const safeDistance = Number.isFinite(Number(pairDistance))
    ? Math.max(0, Number(pairDistance))
    : 0;
  const distanceFriendlyScore = 20 / (20 + safeDistance);
  return distanceFriendlyScore * getConnectionTypeFriendlyWeight(connectionType);
}

function calculatePairDistanceDifficultyScore(pairDistance) {
  const safeDistance = Number(pairDistance);
  if (!Number.isFinite(safeDistance)) return 0;
  if (safeDistance < 3) return -1;
  if (safeDistance >= 5 && safeDistance <= 10) return 1;
  if (safeDistance > 10) return 2;
  return 0;
}

function calculateConnectionTypeDifficultyScore(connectionType) {
  switch (connectionType) {
    case '直线连接':
      return -1;
    case '1拐连接':
      return 1;
    case '同向2拐':
      return 2;
    case '反向2拐':
      return 3;
    default:
      return 0;
  }
}

function getAvailablePairConnectionDetails(boardData, pair) {
  if (!pair) {
    return { distance: null, connectionType: '' };
  }
  const explicitDistance = Number(pair.connectionDistance ?? pair.distance);
  let distance = Number.isFinite(explicitDistance) && explicitDistance >= 0
    ? explicitDistance
    : null;
  let connectionType = typeof pair.connectionType === 'string'
    ? pair.connectionType
    : '';
  let path = Array.isArray(pair.connectionPath) ? pair.connectionPath : null;
  if ((distance === null || !connectionType) && Array.isArray(boardData)) {
    if (!path) {
      path = findConnectionPathByLianliankan(
boardData,
pair.row1,
pair.col1,
pair.row2,
pair.col2
      );
      if (Array.isArray(path)) pair.connectionPath = path;
    }
    if (distance === null) {
      const pathDistance = computePathLengthByGridSteps(path);
      distance = Number.isFinite(pathDistance) && pathDistance >= 0
? pathDistance
: null;
      if (distance !== null) pair.connectionDistance = distance;
    }
    if (!connectionType) {
      connectionType = getPlayConnectionTypeByPath(path);
      pair.connectionType = connectionType;
    }
  }
  return { distance, connectionType };
}

function calculateAvailablePairDifficultyScore(boardData, pair) {
  const details = getAvailablePairConnectionDetails(boardData, pair);
  return calculatePairDistanceDifficultyScore(details.distance) +
    calculateConnectionTypeDifficultyScore(details.connectionType);
}

function calculateAvailablePairSceneDifficultyScore(boardData, removablePairs) {
  if (!Array.isArray(removablePairs) || removablePairs.length === 0) return 0;
  const totalScore = removablePairs.reduce((total, pair) => {
    const pairScore = calculateAvailablePairDifficultyScore(boardData, pair);
    return total + (Number.isFinite(pairScore) ? pairScore : 0);
  }, 0);
  return totalScore / removablePairs.length;
}

function calculatePairAvailabilityPressure(remainingCardCount, availablePairCount) {
  const remainingCards = Number.isFinite(Number(remainingCardCount))
    ? Math.max(0, Number(remainingCardCount))
    : 0;
  const availablePairs = Number.isFinite(Number(availablePairCount))
    ? Math.max(0, Number(availablePairCount))
    : 0;
  const remainingPairCount = Math.max(0, remainingCards / 2);
  if (remainingPairCount <= 0) return 0;
  const unavailablePairGap = Math.max(0, remainingPairCount - availablePairs);
  return Math.max(0, Math.min(1, unavailablePairGap / remainingPairCount));
}

function calculateNormalizedStepDifficultyScore({
  remainingCardCountBefore,
  availablePairCountBefore,
  sceneDifficultyScoreBefore
} = {}) {
  const pairPressure = calculatePairAvailabilityPressure(
    remainingCardCountBefore,
    availablePairCountBefore
  );
  if (pairPressure <= 0) return 0;
  const safeSceneDifficultyScore = Number.isFinite(Number(sceneDifficultyScoreBefore))
    ? Number(sceneDifficultyScoreBefore)
    : 0;
  return Math.max(0, pairPressure * safeSceneDifficultyScore);
}

function calculateBoardDifficultyScore(boardData, initialRemovableCount, removablePairs) {
  if (!Array.isArray(boardData) || boardData.length === 0) return 0;
  const remainingCount = countRemovableCellCount(boardData);
  if (remainingCount <= 0) return 0;

  const pairs = Array.isArray(removablePairs)
    ? removablePairs
    : getRemovablePairsForBoard(boardData);
  const pairCount = Array.isArray(pairs) ? pairs.length : 0;
  const distanceSummary = summarizeRemovablePairDistances(boardData, pairs);
  const boardFriendlyScore = Math.max(
    0,
    Number(distanceSummary.totalFriendlyScore) || 0
  );
  const safeInitialCount = Number.isFinite(Number(initialRemovableCount)) &&
    Number(initialRemovableCount) > 0
    ? Number(initialRemovableCount)
    : remainingCount;
  const remainingScale = safeInitialCount > 0
    ? 1 + (Math.max(0, remainingCount) / safeInitialCount) * 0.25
    : 1;
  const accessibilityDifficulty = 100 / (1 + boardFriendlyScore);
  return (accessibilityDifficulty * remainingScale) + (pairCount === 0 ? 200 : 0);
}

function findConnectionPathByLianliankan(boardData, startRow, startCol, targetRow, targetCol) {
  if (!Array.isArray(boardData) || boardData.length === 0) return null;
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  if (width === 0) return null;
  if (startRow === targetRow && startCol === targetCol) return null;

  const extHeight = height + 2;
  const extWidth = width + 2;
  const grid = Array.from({ length: extHeight }, () => Array(extWidth).fill(0));

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const value = boardData[row][col];
      if (Number.isInteger(value) && value > 0) grid[row + 1][col + 1] = value;
    }
  }

  const startExtRow = startRow + 1;
  const startExtCol = startCol + 1;
  const targetExtRow = targetRow + 1;
  const targetExtCol = targetCol + 1;
  if (grid[startExtRow][startExtCol] === 0 || grid[targetExtRow][targetExtCol] === 0) {
    return null;
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const visited = Array.from(
    { length: extHeight },
    () => Array.from({ length: extWidth }, () => Array(4).fill(Infinity))
  );

  grid[startExtRow][startExtCol] = 0;
  const queue = [];
  let queueIndex = 0;
  const startPoint = { row: startExtRow, col: startExtCol };

  for (let dir = 0; dir < 4; dir++) {
    const step = directions[dir];
    let nextRow = startExtRow + step[0];
    let nextCol = startExtCol + step[1];
    while (nextRow >= 0 && nextRow < extHeight && nextCol >= 0 && nextCol < extWidth) {
      if (nextRow === targetExtRow && nextCol === targetExtCol) {
return compressPathPoints([
  startPoint,
  { row: nextRow, col: nextCol }
]);
      }
      if (grid[nextRow][nextCol] !== 0) break;
      if (visited[nextRow][nextCol][dir] > 0) {
visited[nextRow][nextCol][dir] = 0;
queue.push({
  row: nextRow,
  col: nextCol,
  dir,
  turns: 0,
  path: [startPoint, { row: nextRow, col: nextCol }]
});
      }
      nextRow += step[0];
      nextCol += step[1];
    }
  }

  while (queueIndex < queue.length) {
    const current = queue[queueIndex];
    queueIndex++;

    for (let nextDir = 0; nextDir < 4; nextDir++) {
      const nextTurns = current.turns + (nextDir === current.dir ? 0 : 1);
      if (nextTurns > 2) continue;

      const step = directions[nextDir];
      let nextRow = current.row + step[0];
      let nextCol = current.col + step[1];
      while (nextRow >= 0 && nextRow < extHeight && nextCol >= 0 && nextCol < extWidth) {
if (nextRow === targetExtRow && nextCol === targetExtCol) {
  const targetPath = current.path.concat([{ row: nextRow, col: nextCol }]);
  return compressPathPoints(targetPath);
}
if (grid[nextRow][nextCol] !== 0) break;
if (visited[nextRow][nextCol][nextDir] > nextTurns) {
  visited[nextRow][nextCol][nextDir] = nextTurns;
  queue.push({
    row: nextRow,
    col: nextCol,
    dir: nextDir,
    turns: nextTurns,
    path: current.path.concat([{ row: nextRow, col: nextCol }])
  });
}
nextRow += step[0];
nextCol += step[1];
      }
    }
  }

  return null;
}

function pickRandomPair(pairs) {
  if (!Array.isArray(pairs) || pairs.length === 0) return null;
  const index = Math.floor(Math.random() * pairs.length);
  return pairs[index];
}

function pickRandomPairWithPreference(pairs, preferAdjacent) {
  if (!Array.isArray(pairs) || pairs.length === 0) return null;
  if (!preferAdjacent) return pickRandomPair(pairs);
  const adjacentPairs = pairs.filter((pair) => Boolean(pair && pair.adjacent));
  if (adjacentPairs.length > 0) return pickRandomPair(adjacentPairs);
  return pickRandomPair(pairs);
}

function buildHumanModeVisibleTiles(boardData) {
  const tiles = [];
  const typeBuckets = new Map();
  if (!Array.isArray(boardData)) {
    return { tiles, typeBuckets };
  }
  for (let row = 0; row < boardData.length; row++) {
    const line = boardData[row];
    if (!Array.isArray(line)) continue;
    for (let col = 0; col < line.length; col++) {
      const baseId = getMatchableBaseId(line[col]);
      if (baseId === null) continue;
      const tile = { row, col, baseId };
      tiles.push(tile);
      if (!typeBuckets.has(baseId)) typeBuckets.set(baseId, []);
      typeBuckets.get(baseId).push(tile);
    }
  }
  return { tiles, typeBuckets };
}

function buildHumanModeAnchorKey(tile) {
  if (!tile) return '';
  return tile.row + '_' + tile.col + '_' + tile.baseId;
}

function pickHumanModeAnchor(tiles, typeBuckets, usedAnchorKeys, blockedBaseIds) {
  if (!Array.isArray(tiles) || tiles.length === 0) return null;
  const candidates = [];
  for (const tile of tiles) {
    if (!tile) continue;
    const key = buildHumanModeAnchorKey(tile);
    if (usedAnchorKeys instanceof Set && usedAnchorKeys.has(key)) continue;
    if (blockedBaseIds instanceof Set && blockedBaseIds.has(tile.baseId)) continue;
    const bucket = Array.isArray(typeBuckets.get(tile.baseId)) ? typeBuckets.get(tile.baseId) : [];
    if (bucket.length <= 1) continue;
    let nearestDistance = Infinity;
    for (const other of bucket) {
      if (!other || (other.row === tile.row && other.col === tile.col)) continue;
      const distance = Math.abs(other.row - tile.row) + Math.abs(other.col - tile.col);
      if (distance < nearestDistance) nearestDistance = distance;
    }
    if (!Number.isFinite(nearestDistance)) continue;
    let salience = 0;
    if (nearestDistance <= 2) salience += 3.2;
    else if (nearestDistance <= 4) salience += 2.4;
    else if (nearestDistance <= 6) salience += 1.5;
    else salience += 0.8;
    if (tile.row <= 1 || tile.col <= 1) salience += 0.35;
    salience += (Math.random() - 0.5) * 0.9;
    candidates.push({ tile, salience });
  }
  if (candidates.length === 0) return null;
  candidates.sort((a, b) => b.salience - a.salience);
  const obviousTake = Math.max(1, Math.min(6, candidates.length));
  const obviousPool = candidates.slice(0, obviousTake);
  if (Math.random() < 0.78) {
    const pick = obviousPool[Math.floor(Math.random() * obviousPool.length)];
    return pick ? pick.tile : null;
  }
  const randomPick = candidates[Math.floor(Math.random() * candidates.length)];
  return randomPick ? randomPick.tile : null;
}

function pickHumanModeMoveByScore(scoredMoves) {
  if (!Array.isArray(scoredMoves) || scoredMoves.length === 0) return null;
  const sorted = scoredMoves.slice().sort((a, b) => (Number(b.score) || 0) - (Number(a.score) || 0));
  const topPool = sorted.slice(0, Math.max(1, Math.min(4, sorted.length)));
  const bestScore = Number(topPool[0] ? topPool[0].score : 0) || 0;
  const temperature = 0.75 + (Math.random() * 0.85);
  const weights = topPool.map((item) => {
    const value = Number(item && item.score);
    if (!Number.isFinite(value)) return 0.05;
    return Math.max(0.03, Math.exp((value - bestScore) / Math.max(0.25, temperature)));
  });
  const totalWeight = weights.reduce((sum, value) => sum + value, 0);
  if (!(totalWeight > 0)) return topPool[0] || null;
  let randomValue = Math.random() * totalWeight;
  for (let index = 0; index < topPool.length; index++) {
    randomValue -= weights[index];
    if (randomValue <= 0) return topPool[index];
  }
  return topPool[topPool.length - 1] || null;
}

function getHumanModeAdjacentScoredMoves(scoredMoves) {
  if (!Array.isArray(scoredMoves)) return [];
  return scoredMoves.filter((item) => Number(item && item.distance) === 1);
}

function shouldPreferAdjacentMoveByProbability(besidePercent) {
  const probability = normalizeHumanModeBesidePercent(besidePercent, 70);
  if (probability <= 0) return false;
  if (probability >= 100) return true;
  return Math.random() < (probability / 100);
}

function getConnectionDifficultyRank(connectionType, turnCount) {
  if (connectionType === '直线连接') return 0;
  if (connectionType === '1拐连接') return 1;
  if (connectionType === '同向2拐') return 2;
  if (connectionType === '反向2拐') return 3;
  const numericTurn = Number(turnCount);
  if (!Number.isFinite(numericTurn) || numericTurn <= 0) return 0;
  if (numericTurn === 1) return 1;
  return 3;
}

function estimateHumanModePairScore(boardData, pair, direction) {
  if (!Array.isArray(boardData) || !pair) return 0;
  const distance = Math.abs(pair.row1 - pair.row2) + Math.abs(pair.col1 - pair.col2);
  const path = findConnectionPathByLianliankan(
    boardData,
    pair.row1,
    pair.col1,
    pair.row2,
    pair.col2
  );
  const pathNodeCount = Array.isArray(path) ? path.length : 0;
  const turnCount = Math.max(0, pathNodeCount - 2);
  const connectionType = getPlayConnectionTypeByPath(path);
  const connectionDifficultyRank = getConnectionDifficultyRank(connectionType, turnCount);
  const simulatedBoard = cloneBoardData(boardData);
  const firstValue = simulatedBoard[pair.row1] ? simulatedBoard[pair.row1][pair.col1] : 0;
  const selectedBaseId = getMatchableBaseId(firstValue);
  const removedPositions = removePairFromBoard(simulatedBoard, pair);
  triggerAdjacentMechanisms(simulatedBoard, removedPositions);
  if (selectedBaseId === BOMB_CELL_ID) {
    triggerBombEffect(simulatedBoard);
  }
  applyDirectionShiftUntilStable(simulatedBoard, direction);
  const nextRemovablePairs = getRemovablePairsForBoard(simulatedBoard);
  const nextPairCount = Array.isArray(nextRemovablePairs) ? nextRemovablePairs.length : 0;
  const centerRow = (simulatedBoard.length - 1) / 2;
  const centerCol = ((simulatedBoard[0] ? simulatedBoard[0].length : 1) - 1) / 2;
  const centerBias = (
    (4 - Math.min(4, Math.abs(pair.row1 - centerRow) + Math.abs(pair.col1 - centerCol))) +
    (4 - Math.min(4, Math.abs(pair.row2 - centerRow) + Math.abs(pair.col2 - centerCol)))
  ) * 0.12;
  const obviousScore =
    (distance <= 2 ? 2.4 : (distance <= 4 ? 1.8 : 1.2)) +
    (connectionDifficultyRank === 0
      ? 1.35
      : (connectionDifficultyRank === 1 ? 0.78 : (connectionDifficultyRank === 2 ? 0.35 : 0.12)));
  return {
    score: (obviousScore * (0.6 + (Math.random() * 0.35))) +
      (nextPairCount * (0.35 + (Math.random() * 0.25))) +
      centerBias +
      ((Math.random() - 0.5) * 1.2) -
      (connectionDifficultyRank * 0.2),
    distance,
    connectionType
  };
}

function pickHumanModePairForSimulation(boardData, direction, options) {
  const besidePercent = normalizeHumanModeBesidePercent(options && options.besidePercent, 70);
  const removablePairs = getRemovablePairsForBoard(boardData);
  if (!Array.isArray(removablePairs) || removablePairs.length === 0) {
    return { pair: null, decisionFailCount: 0 };
  }
  const { tiles, typeBuckets } = buildHumanModeVisibleTiles(boardData);
  const usedAnchorKeys = new Set();
  const rejectedBaseIds = new Set();
  const anchorPairMap = new Map();
  for (const pair of removablePairs) {
    const firstValue = boardData[pair.row1] ? boardData[pair.row1][pair.col1] : null;
    const secondValue = boardData[pair.row2] ? boardData[pair.row2][pair.col2] : null;
    const firstBaseId = getMatchableBaseId(firstValue);
    const secondBaseId = getMatchableBaseId(secondValue);
    if (firstBaseId === null || secondBaseId === null || firstBaseId !== secondBaseId) continue;
    const firstKey = buildHumanModeAnchorKey({ row: pair.row1, col: pair.col1, baseId: firstBaseId });
    const secondKey = buildHumanModeAnchorKey({ row: pair.row2, col: pair.col2, baseId: secondBaseId });
    if (!anchorPairMap.has(firstKey)) anchorPairMap.set(firstKey, []);
    if (!anchorPairMap.has(secondKey)) anchorPairMap.set(secondKey, []);
    anchorPairMap.get(firstKey).push(pair);
    anchorPairMap.get(secondKey).push({
      row1: pair.row2,
      col1: pair.col2,
      row2: pair.row1,
      col2: pair.col1,
      adjacent: pair.adjacent
    });
  }

  const scoredMoves = [];
  const failedBaseSummaries = [];
  const anchorTryLimit = Math.max(1, Number(typeBuckets.size) || 1);
  let anchorsTried = 0;
  while (anchorsTried < anchorTryLimit) {
    const anchor = pickHumanModeAnchor(tiles, typeBuckets, usedAnchorKeys, rejectedBaseIds);
    if (!anchor) break;
    anchorsTried++;
    usedAnchorKeys.add(buildHumanModeAnchorKey(anchor));
    const anchorCandidates = Array.isArray(anchorPairMap.get(buildHumanModeAnchorKey(anchor)))
      ? anchorPairMap.get(buildHumanModeAnchorKey(anchor))
      : [];
    if (anchorCandidates.length === 0) {
      rejectedBaseIds.add(anchor.baseId);
      failedBaseSummaries.push(anchor.baseId);
      continue;
    }
    for (const candidate of anchorCandidates) {
      const estimate = estimateHumanModePairScore(boardData, candidate, direction);
      scoredMoves.push({
move: {
  row1: Number(candidate.row1),
  col1: Number(candidate.col1),
  row2: Number(candidate.row2),
  col2: Number(candidate.col2)
},
score: estimate.score,
distance: estimate.distance,
connectionType: estimate.connectionType
      });
    }
    if (scoredMoves.length > 0 && Math.random() < 0.8) break;
  }

  if (scoredMoves.length === 0) {
    const fallbackPair = pickRandomPairWithPreference(removablePairs, true);
    return {
      pair: fallbackPair || null,
      decisionFailCount: Math.max(1, failedBaseSummaries.length || 1)
    };
  }

  const adjacentMoves = getHumanModeAdjacentScoredMoves(scoredMoves);
  const preferAdjacent = adjacentMoves.length > 0 && shouldPreferAdjacentMoveByProbability(besidePercent);
  const selected = preferAdjacent
    ? (pickHumanModeMoveByScore(adjacentMoves) || pickHumanModeMoveByScore(scoredMoves))
    : pickHumanModeMoveByScore(scoredMoves);
  return {
    pair: selected && selected.move ? selected.move : null,
    decisionFailCount: Math.max(0, failedBaseSummaries.length)
  };
}

// 模拟导出的阶段字段按消除进度核对：
// 前35%：消除进度 [0%, 35%)；35%-75%：消除进度 [35%, 75%)；
// 75%-100%：消除进度 [75%, 100%)。
const SIMULATION_PROGRESS_PHASE_LABELS = ['前35%', '35%-75%', '最后25%'];
const SIMULATION_PROGRESS_PHASE_COUNT = SIMULATION_PROGRESS_PHASE_LABELS.length;

function getSimulationProgressPhaseIndex(stepIndex, totalProgressSteps) {
  const safeTotalProgressSteps = Number.isFinite(Number(totalProgressSteps))
    ? Math.max(1, Math.floor(Number(totalProgressSteps)))
    : 1;
  const safeStepIndex = Number.isFinite(Number(stepIndex))
    ? Math.max(0, Math.floor(Number(stepIndex)))
    : 0;
  // 用本步开始时的进度归段，保证 10 步时正好是 4 / 4 / 2 步。
  const progressRatio = Math.max(0, Math.min(0.999999, safeStepIndex / safeTotalProgressSteps));
  if (progressRatio < 0.35) return 0;
  if (progressRatio < 0.75) return 1;
  return 2;
}

function createEmptySimulationProgressPhaseSummary() {
  return Array.from({ length: SIMULATION_PROGRESS_PHASE_COUNT }, () => 0);
}

function summarizeStepPairCounts(stepPairCounts, totalProgressSteps) {
  if (!Array.isArray(stepPairCounts) || stepPairCounts.length === 0) {
    return {
      totalStepCount: 0,
      totalPairCountSum: 0,
      averagePairPerStep: 0,
      firstHalfStepCount: 0,
      firstHalfPairCountSum: 0,
      firstHalfAveragePairCount: 0,
      secondHalfStepCount: 0,
      secondHalfPairCountSum: 0,
      secondHalfAveragePairCount: 0,
      progressPhaseStepCounts: createEmptySimulationProgressPhaseSummary(),
      progressPhasePairCountSums: createEmptySimulationProgressPhaseSummary(),
      progressPhaseAveragePairCounts: createEmptySimulationProgressPhaseSummary(),
      stepPairCounts: []
    };
  }

  let totalPairCountSum = 0;
  const normalizedStepPairCounts = stepPairCounts.map((rawValue) => {
    const value = Number(rawValue);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  });
  const safeTotalProgressSteps = Number.isFinite(Number(totalProgressSteps))
    ? Math.max(1, Math.floor(Number(totalProgressSteps)))
    : Math.max(1, normalizedStepPairCounts.length);
  const progressPhaseStepCounts = createEmptySimulationProgressPhaseSummary();
  const progressPhasePairCountSums = createEmptySimulationProgressPhaseSummary();
  for (const value of normalizedStepPairCounts) {
    totalPairCountSum += value;
  }
  for (let index = 0; index < normalizedStepPairCounts.length; index++) {
    const value = normalizedStepPairCounts[index];
    const phaseIndex = getSimulationProgressPhaseIndex(index, safeTotalProgressSteps);
    progressPhaseStepCounts[phaseIndex] += 1;
    progressPhasePairCountSums[phaseIndex] += value;
  }
  const progressPhaseAveragePairCounts = progressPhasePairCountSums.map((sum, index) =>
    progressPhaseStepCounts[index] > 0
      ? (sum / progressPhaseStepCounts[index])
      : 0
  );
  const totalStepCount = normalizedStepPairCounts.length;
  const splitIndex = Math.ceil(totalStepCount / 2);
  const firstHalfCounts = normalizedStepPairCounts.slice(0, splitIndex);
  const secondHalfCounts = normalizedStepPairCounts.slice(splitIndex);
  const firstHalfPairCountSum = firstHalfCounts.reduce(
    (sum, value) => sum + value,
    0
  );
  const secondHalfPairCountSum = secondHalfCounts.reduce(
    (sum, value) => sum + value,
    0
  );
  const firstHalfStepCount = firstHalfCounts.length;
  const secondHalfStepCount = secondHalfCounts.length;

  return {
    totalStepCount,
    totalPairCountSum,
    averagePairPerStep: totalStepCount > 0 ? (totalPairCountSum / totalStepCount) : 0,
    firstHalfStepCount,
    firstHalfPairCountSum,
    firstHalfAveragePairCount: firstHalfStepCount > 0
      ? (firstHalfPairCountSum / firstHalfStepCount)
      : 0,
    secondHalfStepCount,
    secondHalfPairCountSum,
    secondHalfAveragePairCount: secondHalfStepCount > 0
      ? (secondHalfPairCountSum / secondHalfStepCount)
      : 0,
    progressPhaseStepCounts,
    progressPhasePairCountSums,
    progressPhaseAveragePairCounts,
    stepPairCounts: normalizedStepPairCounts
  };
}

function addStepPairCountsToAggregation(stepPairCountSums, stepPairCountSampleCounts, stepPairCounts) {
  if (!Array.isArray(stepPairCountSums) || !Array.isArray(stepPairCountSampleCounts)) return;
  if (!Array.isArray(stepPairCounts)) return;
  for (let index = 0; index < stepPairCounts.length; index++) {
    const value = Number(stepPairCounts[index]);
    if (!Number.isFinite(value) || value < 0) continue;
    stepPairCountSums[index] = (Number(stepPairCountSums[index]) || 0) + value;
    stepPairCountSampleCounts[index] = (Number(stepPairCountSampleCounts[index]) || 0) + 1;
  }
}

function summarizeStepDifficultyScores(stepDifficultyScores, totalProgressSteps) {
  const emptySummary = () => ({
    progressPhaseDifficultyStepCounts: createEmptySimulationProgressPhaseSummary(),
    progressPhaseDifficultyScoreSums: createEmptySimulationProgressPhaseSummary(),
    progressPhaseAverageDifficultyScores: createEmptySimulationProgressPhaseSummary()
  });
  if (!Array.isArray(stepDifficultyScores) || stepDifficultyScores.length === 0) {
    return emptySummary();
  }
  const normalizedStepDifficultyScores = stepDifficultyScores.map((rawValue) => {
    const value = Number(rawValue);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  });
  const safeTotalProgressSteps = Number.isFinite(Number(totalProgressSteps))
    ? Math.max(1, Math.floor(Number(totalProgressSteps)))
    : Math.max(1, normalizedStepDifficultyScores.length);
  const progressPhaseDifficultyStepCounts = createEmptySimulationProgressPhaseSummary();
  const progressPhaseDifficultyScoreSums = createEmptySimulationProgressPhaseSummary();
  for (let index = 0; index < normalizedStepDifficultyScores.length; index++) {
    const value = normalizedStepDifficultyScores[index];
    const phaseIndex = getSimulationProgressPhaseIndex(index, safeTotalProgressSteps);
    progressPhaseDifficultyStepCounts[phaseIndex] += 1;
    progressPhaseDifficultyScoreSums[phaseIndex] += value;
  }
  const progressPhaseAverageDifficultyScores = progressPhaseDifficultyScoreSums.map((sum, index) =>
    progressPhaseDifficultyStepCounts[index] > 0
      ? (sum / progressPhaseDifficultyStepCounts[index])
      : 0
  );
  return {
    progressPhaseDifficultyStepCounts,
    progressPhaseDifficultyScoreSums,
    progressPhaseAverageDifficultyScores
  };
}

function addStepDifficultyScoresToAggregation(stepDifficultyScoreSums, stepDifficultyScoreSampleCounts, stepDifficultyScores) {
  if (!Array.isArray(stepDifficultyScoreSums) || !Array.isArray(stepDifficultyScoreSampleCounts)) return;
  if (!Array.isArray(stepDifficultyScores)) return;
  for (let index = 0; index < stepDifficultyScores.length; index++) {
    const value = Number(stepDifficultyScores[index]);
    if (!Number.isFinite(value) || value < 0) continue;
    stepDifficultyScoreSums[index] = (Number(stepDifficultyScoreSums[index]) || 0) + value;
    stepDifficultyScoreSampleCounts[index] =
      (Number(stepDifficultyScoreSampleCounts[index]) || 0) + 1;
  }
}

function createConnectionTypeCountSummary() {
  return {
    zeroTurnCount: 0,
    oneTurnCount: 0,
    sameDirTwoTurnCount: 0,
    reverseTwoTurnCount: 0
  };
}

function accumulateConnectionTypeCount(summary, connectionType) {
  if (!summary || typeof summary !== 'object') return;
  switch (connectionType) {
    case '直线连接':
      summary.zeroTurnCount += 1;
      break;
    case '1拐连接':
      summary.oneTurnCount += 1;
      break;
    case '同向2拐':
      summary.sameDirTwoTurnCount += 1;
      break;
    case '反向2拐':
      summary.reverseTwoTurnCount += 1;
      break;
    default:
      break;
  }
}

function countAvailableConnectionTypeCounts(boardData, removablePairs) {
  const summary = createConnectionTypeCountSummary();
  if (!Array.isArray(boardData) || boardData.length === 0) return summary;
  const pairs = Array.isArray(removablePairs)
    ? removablePairs
    : getRemovablePairsForBoard(boardData);
  if (!Array.isArray(pairs) || pairs.length === 0) return summary;
  for (const pair of pairs) {
    if (!pair || typeof pair !== 'object') continue;
    const details = getAvailablePairConnectionDetails(boardData, pair);
    const connectionType = details.connectionType;
    accumulateConnectionTypeCount(summary, connectionType);
  }
  return summary;
}

function simulateSingleGameWithPairStats(baseBoardData, direction, initialRemovableCount, options) {
  const humanMode = Boolean(options && options.humanMode);
  const humanModeBesidePercent = normalizeHumanModeBesidePercent(
    options && options.humanModeBesidePercent,
    70
  );
  const boardData = cloneBoardData(baseBoardData);
  const baseCount = Number.isFinite(Number(initialRemovableCount))
    ? Math.max(0, Number(initialRemovableCount))
    : countRemovableCellCount(baseBoardData);
  const estimatedTotalSteps = Math.max(1, Math.floor(baseCount / 2));
  const connectionTypeCounts = createConnectionTypeCountSummary();
  const availableConnectionTypeCountTotals = createConnectionTypeCountSummary();
  let totalTrialErrorCount = 0;
  let maxTrialErrorCount = 0;
  let totalActualPairDistance = 0;
  let actualPairDistanceCount = 0;
  let totalAvailablePairDistance = 0;
  let availablePairDistanceStepCount = 0;
  let totalStepDifficultyScore = 0;
  let maxStepDifficultyScore = 0;
  const initialFaceDistributionDistance = calculateInitialFaceDistributionDistance(baseBoardData);
  if (!hasFilledCells(boardData)) {
    return {
      cleared: false,
      remainingPercent: 0,
      stepCount: 0,
      failedStepCount: 0,
      failedProgressPercent: 0,
      pairSummary: summarizeStepPairCounts([], estimatedTotalSteps),
      stepDifficultyScores: [],
      difficultySummary: summarizeStepDifficultyScores([], estimatedTotalSteps),
      connectionTypeCounts,
      availableConnectionTypeCountTotals,
      totalTrialErrorCount: 0,
      maxTrialErrorCount: 0,
      totalActualPairDistance: 0,
      actualPairDistanceCount: 0,
      totalAvailablePairDistance: 0,
      availablePairDistanceStepCount: 0,
      totalStepDifficultyScore: 0,
      maxStepDifficultyScore: 0,
      initialFaceDistributionDistance
    };
  }

  const maxSteps = boardData.length * (boardData[0] ? boardData[0].length : 0);
  let stepCount = 0;
  const stepPairCounts = [];
  const stepDifficultyScores = [];

  while (stepCount <= maxSteps) {
    const removablePairs = getRemovablePairsForBoard(boardData);
    if (!Array.isArray(removablePairs) || removablePairs.length === 0) {
      const cleared = isPlayBoardCleared(boardData);
      if (cleared) {
return {
  cleared: true,
  remainingPercent: 0,
  stepCount,
  failedStepCount: null,
  failedProgressPercent: null,
  pairSummary: summarizeStepPairCounts(stepPairCounts, estimatedTotalSteps),
  stepDifficultyScores,
  difficultySummary: summarizeStepDifficultyScores(stepDifficultyScores, estimatedTotalSteps),
  connectionTypeCounts,
  availableConnectionTypeCountTotals,
  totalTrialErrorCount,
  maxTrialErrorCount,
  totalActualPairDistance,
  actualPairDistanceCount,
  totalAvailablePairDistance,
  availablePairDistanceStepCount,
  totalStepDifficultyScore,
  maxStepDifficultyScore,
  initialFaceDistributionDistance
};
      }
      const remainingCount = countRemovableCellCount(boardData);
      const remainingPercent = baseCount > 0 ? (remainingCount / baseCount) * 100 : 0;
      const failureProgressPercent = Math.max(
0,
Math.min(100, (stepCount / estimatedTotalSteps) * 100)
      );
      return {
cleared: false,
remainingPercent: Math.max(0, Math.min(100, remainingPercent)),
stepCount,
failedStepCount: stepCount,
failedProgressPercent: failureProgressPercent,
pairSummary: summarizeStepPairCounts(stepPairCounts, estimatedTotalSteps),
stepDifficultyScores,
difficultySummary: summarizeStepDifficultyScores(stepDifficultyScores, estimatedTotalSteps),
connectionTypeCounts,
availableConnectionTypeCountTotals,
totalTrialErrorCount,
maxTrialErrorCount,
totalActualPairDistance,
actualPairDistanceCount,
totalAvailablePairDistance,
availablePairDistanceStepCount,
totalStepDifficultyScore,
maxStepDifficultyScore,
initialFaceDistributionDistance
      };
    }

    stepPairCounts.push(removablePairs.length);
    const availableConnectionTypeCounts = countAvailableConnectionTypeCounts(
      boardData,
      removablePairs
    );
    availableConnectionTypeCountTotals.zeroTurnCount +=
      Number(availableConnectionTypeCounts.zeroTurnCount) || 0;
    availableConnectionTypeCountTotals.oneTurnCount +=
      Number(availableConnectionTypeCounts.oneTurnCount) || 0;
    availableConnectionTypeCountTotals.sameDirTwoTurnCount +=
      Number(availableConnectionTypeCounts.sameDirTwoTurnCount) || 0;
    availableConnectionTypeCountTotals.reverseTwoTurnCount +=
      Number(availableConnectionTypeCounts.reverseTwoTurnCount) || 0;
    const remainingCardCountBefore = countRemovableCellCount(boardData);
    const availablePairCountBefore = removablePairs.length;
    const sceneDifficultyScoreBefore = calculateAvailablePairSceneDifficultyScore(
      boardData,
      removablePairs
    );
    const availableDistanceSummary = summarizeRemovablePairDistances(boardData, removablePairs);
    if (availableDistanceSummary.pairCount > 0) {
      totalAvailablePairDistance += availableDistanceSummary.averageDistance;
      availablePairDistanceStepCount++;
    }
    let selectedPair = null;
    let stepTrialErrorCount = 0;
    if (humanMode) {
      const humanPickResult = pickHumanModePairForSimulation(boardData, direction, {
besidePercent: humanModeBesidePercent
      });
      selectedPair = humanPickResult && humanPickResult.pair ? humanPickResult.pair : null;
      stepTrialErrorCount = Math.max(
0,
Number.isFinite(Number(humanPickResult && humanPickResult.decisionFailCount))
  ? Number(humanPickResult.decisionFailCount)
  : 0
      );
    } else {
      selectedPair = pickRandomPairWithPreference(removablePairs, true);
    }
    if (!selectedPair) {
      const remainingCount = countRemovableCellCount(boardData);
      const remainingPercent = baseCount > 0 ? (remainingCount / baseCount) * 100 : 0;
      const failureProgressPercent = Math.max(
0,
Math.min(100, (stepCount / estimatedTotalSteps) * 100)
      );
      return {
cleared: false,
remainingPercent: Math.max(0, Math.min(100, remainingPercent)),
stepCount,
failedStepCount: stepCount,
failedProgressPercent: failureProgressPercent,
pairSummary: summarizeStepPairCounts(stepPairCounts, estimatedTotalSteps),
stepDifficultyScores,
difficultySummary: summarizeStepDifficultyScores(stepDifficultyScores, estimatedTotalSteps),
connectionTypeCounts,
availableConnectionTypeCountTotals,
totalTrialErrorCount,
maxTrialErrorCount,
totalActualPairDistance,
actualPairDistanceCount,
totalAvailablePairDistance,
availablePairDistanceStepCount,
totalStepDifficultyScore,
maxStepDifficultyScore,
initialFaceDistributionDistance
      };
    }
    totalTrialErrorCount += stepTrialErrorCount;
    maxTrialErrorCount = Math.max(maxTrialErrorCount, stepTrialErrorCount);

    const linkPath = Array.isArray(selectedPair.connectionPath)
      ? selectedPair.connectionPath
      : findConnectionPathByLianliankan(
boardData,
selectedPair.row1,
selectedPair.col1,
selectedPair.row2,
selectedPair.col2
      );
    const actualPairDistance = computePathLengthByGridSteps(linkPath);
    if (Number.isFinite(actualPairDistance) && actualPairDistance >= 0) {
      totalActualPairDistance += actualPairDistance;
      actualPairDistanceCount++;
    }
    const connectionType = getPlayConnectionTypeByPath(linkPath);
    accumulateConnectionTypeCount(connectionTypeCounts, connectionType);

    const firstValue = boardData[selectedPair.row1][selectedPair.col1];
    const selectedBaseId = getMatchableBaseId(firstValue);
    const removedPositions = removePairFromBoard(boardData, selectedPair);
    triggerAdjacentMechanisms(boardData, removedPositions);
    if (selectedBaseId === BOMB_CELL_ID) {
      triggerBombEffect(boardData);
    }
    applyDirectionShiftUntilStable(boardData, direction);
    const stepDifficultyScore = calculateNormalizedStepDifficultyScore({
      remainingCardCountBefore,
      availablePairCountBefore,
      sceneDifficultyScoreBefore
    });
    if (Number.isFinite(stepDifficultyScore) && stepDifficultyScore >= 0) {
      stepDifficultyScores.push(stepDifficultyScore);
      totalStepDifficultyScore += stepDifficultyScore;
      maxStepDifficultyScore = Math.max(maxStepDifficultyScore, stepDifficultyScore);
    }
    stepCount++;
  }

  const remainingCount = countRemovableCellCount(boardData);
  const remainingPercent = baseCount > 0 ? (remainingCount / baseCount) * 100 : 0;
  return {
    cleared: false,
    remainingPercent: Math.max(0, Math.min(100, remainingPercent)),
    stepCount,
    failedStepCount: stepCount,
    failedProgressPercent: Math.max(
      0,
      Math.min(100, (stepCount / estimatedTotalSteps) * 100)
    ),
    pairSummary: summarizeStepPairCounts(stepPairCounts, estimatedTotalSteps),
    stepDifficultyScores,
    difficultySummary: summarizeStepDifficultyScores(stepDifficultyScores, estimatedTotalSteps),
    connectionTypeCounts,
    availableConnectionTypeCountTotals,
    totalTrialErrorCount,
    maxTrialErrorCount,
    totalActualPairDistance,
    actualPairDistanceCount,
    totalAvailablePairDistance,
    availablePairDistanceStepCount,
    totalStepDifficultyScore,
    maxStepDifficultyScore,
    initialFaceDistributionDistance
  };
}

function pickRandomRemovablePairForBoard(boardData, preferAdjacent) {
  if (!Array.isArray(boardData) || boardData.length === 0) return null;
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  if (width === 0) return null;
  const searchContext = createLianliankanSearchContext(boardData);
  if (!searchContext) return null;

  const positionsByNumber = new Map();
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const baseId = getMatchableBaseId(boardData[i][j]);
      if (baseId === null) continue;
      if (!positionsByNumber.has(baseId)) positionsByNumber.set(baseId, []);
      positionsByNumber.get(baseId).push({ row: i, col: j });
    }
  }

  let allCount = 0;
  let adjacentCount = 0;
  let sampledAllPair = null;
  let sampledAdjacentPair = null;

  positionsByNumber.forEach((positions) => {
    if (!positions || positions.length < 2) return;
    for (let left = 0; left < positions.length - 1; left++) {
      for (let right = left + 1; right < positions.length; right++) {
const first = positions[left];
const second = positions[right];
if (!canConnectByLianliankanWithContext(
  searchContext,
  first.row,
  first.col,
  second.row,
  second.col
)) {
  continue;
}

const pair = { row1: first.row, col1: first.col, row2: second.row, col2: second.col };
allCount++;
if (Math.floor(Math.random() * allCount) === 0) sampledAllPair = pair;

const isAdjacent = Math.abs(first.row - second.row) + Math.abs(first.col - second.col) === 1;
if (!isAdjacent) continue;
adjacentCount++;
if (Math.floor(Math.random() * adjacentCount) === 0) sampledAdjacentPair = pair;
      }
    }
  });

  if (preferAdjacent && adjacentCount > 0) return sampledAdjacentPair;
  return sampledAllPair;
}

function isBombEffectTargetBaseId(baseId) {
  return Number.isInteger(baseId) && baseId >= 1 && baseId <= 98;
}

function pickRandomBombEffectPairForBoard(boardData) {
  if (!Array.isArray(boardData) || boardData.length === 0) return null;
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  if (width === 0) return null;

  const positionsByNumber = new Map();
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const baseId = getMatchableBaseId(boardData[i][j]);
      if (!isBombEffectTargetBaseId(baseId)) continue;
      if (!positionsByNumber.has(baseId)) positionsByNumber.set(baseId, []);
      positionsByNumber.get(baseId).push({ row: i, col: j });
    }
  }

  let candidateCount = 0;
  let sampledPair = null;
  positionsByNumber.forEach((positions) => {
    if (!positions || positions.length < 2) return;
    for (let left = 0; left < positions.length - 1; left++) {
      for (let right = left + 1; right < positions.length; right++) {
const first = positions[left];
const second = positions[right];
const pair = { row1: first.row, col1: first.col, row2: second.row, col2: second.col };
candidateCount++;
if (Math.floor(Math.random() * candidateCount) === 0) {
  sampledPair = pair;
}
      }
    }
  });
  return sampledPair;
}

function triggerBombEffect(boardData) {
  const EXTRA_PAIR_COUNT = 1;
  for (let index = 0; index < EXTRA_PAIR_COUNT; index++) {
    const selectedPair = pickRandomBombEffectPairForBoard(boardData);
    if (!selectedPair) break;
    const removedPositions = removePairFromBoard(boardData, selectedPair);
    triggerAdjacentMechanisms(boardData, removedPositions);
  }
}

function getPartitionIndices(length, isFirstPart) {
  const indices = [];
  for (let index = 0; index < length; index++) {
    const inFirstPart = index < (length / 2);
    if ((isFirstPart && inFirstPart) || (!isFirstPart && !inFirstPart)) {
      indices.push(index);
    }
  }
  return indices;
}

function buildMagnetLockSet(boardData) {
  const lockSet = new Set();
  if (!Array.isArray(boardData) || boardData.length === 0) return lockSet;
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  const magnetOffsets = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const parsed = decodeCellId(boardData[row][col]);
      if (parsed.baseId !== MAGNET_CELL_ID) continue;
      for (const [dr, dc] of magnetOffsets) {
const nextRow = row + dr;
const nextCol = col + dc;
if (nextRow < 0 || nextRow >= height || nextCol < 0 || nextCol >= width) continue;
const neighborParsed = decodeCellId(boardData[nextRow][nextCol]);
if (isEmptyCellId(neighborParsed.baseId)) continue;
lockSet.add((nextRow * width) + nextCol);
      }
    }
  }
  return lockSet;
}

function canCellMoveByRules(boardData, row, col, magnetLockSet, width) {
  const parsed = decodeCellId(boardData[row][col]);
  if (isEmptyCellId(parsed.baseId)) return true;
  if (isImmobileObstacleBaseId(parsed.baseId)) return false;
  if (magnetLockSet.has((row * width) + col)) return false;
  return true;
}

function compactSegmentByRules(
  boardData,
  segmentIndices,
  getValue,
  setValue,
  getCoord,
  towardStart,
  magnetLockSet
) {
  if (!segmentIndices || segmentIndices.length === 0) return false;
  const boardWidth = boardData[0] ? boardData[0].length : 0;
  const originalValues = segmentIndices.map((index) => getValue(index));

  const fixedIndices = new Set();
  for (let index = 0; index < segmentIndices.length; index++) {
    const value = originalValues[index];
    if (isEmptyCellId(value)) continue;
    const coord = getCoord(segmentIndices[index]);
    if (!canCellMoveByRules(boardData, coord.row, coord.col, magnetLockSet, boardWidth)) {
      fixedIndices.add(index);
    }
  }

  const resultValues = originalValues.slice();

  let segmentStart = 0;
  while (segmentStart < segmentIndices.length) {
    while (segmentStart < segmentIndices.length && fixedIndices.has(segmentStart)) segmentStart++;
    if (segmentStart >= segmentIndices.length) break;
    let segmentEnd = segmentStart;
    while (segmentEnd + 1 < segmentIndices.length && !fixedIndices.has(segmentEnd + 1)) segmentEnd++;

    const movingEntries = [];
    for (let idx = segmentStart; idx <= segmentEnd; idx++) {
      const value = originalValues[idx];
      if (isEmptyCellId(value)) continue;
      movingEntries.push(value);
      resultValues[idx] = EMPTY_CELL_ID;
    }

    for (let moveIndex = 0; moveIndex < movingEntries.length; moveIndex++) {
      const slotIndex = towardStart
? (segmentStart + moveIndex)
: (segmentEnd - moveIndex);
      const entryIndex = towardStart
? moveIndex
: (movingEntries.length - 1 - moveIndex);
      resultValues[slotIndex] = movingEntries[entryIndex];
    }

    segmentStart = segmentEnd + 1;
  }

  let changed = false;
  for (let idx = 0; idx < segmentIndices.length; idx++) {
    if (originalValues[idx] !== resultValues[idx]) changed = true;
    setValue(segmentIndices[idx], resultValues[idx]);
  }
  return changed;
}

function applyDirectionShiftOnce(boardData, direction) {
  if (!Array.isArray(boardData) || boardData.length === 0) return false;
  const height = boardData.length;
  const width = boardData[0] ? boardData[0].length : 0;
  if (width === 0) return false;

  let changed = false;
  const magnetLockSet = buildMagnetLockSet(boardData);
  const topRows = getPartitionIndices(height, true);
  const bottomRows = getPartitionIndices(height, false);
  const leftCols = getPartitionIndices(width, true);
  const rightCols = getPartitionIndices(width, false);
  const allRows = topRows.concat(bottomRows);
  const allCols = leftCols.concat(rightCols);

  const compactColumn = (colIndex, rowIndices, towardTop) => {
    const segmentChanged = compactSegmentByRules(
      boardData,
      rowIndices,
      (rowIndex) => boardData[rowIndex][colIndex],
      (rowIndex, value) => { boardData[rowIndex][colIndex] = value; },
      (rowIndex) => ({ row: rowIndex, col: colIndex }),
      towardTop,
      magnetLockSet
    );
    if (segmentChanged) changed = true;
  };

  const compactRow = (rowIndex, colIndices, towardLeft) => {
    const segmentChanged = compactSegmentByRules(
      boardData,
      colIndices,
      (colIndex) => boardData[rowIndex][colIndex],
      (colIndex, value) => { boardData[rowIndex][colIndex] = value; },
      (colIndex) => ({ row: rowIndex, col: colIndex }),
      towardLeft,
      magnetLockSet
    );
    if (segmentChanged) changed = true;
  };

  switch (direction) {
    case 1:
      for (let col = 0; col < width; col++) compactColumn(col, allRows, true);
      break;
    case 2:
      for (let col = 0; col < width; col++) compactColumn(col, allRows, false);
      break;
    case 3:
      for (let row = 0; row < height; row++) compactRow(row, allCols, true);
      break;
    case 4:
      for (let row = 0; row < height; row++) compactRow(row, allCols, false);
      break;
    case 5:
      for (let col = 0; col < width; col++) {
compactColumn(col, topRows, false);
compactColumn(col, bottomRows, true);
      }
      break;
    case 6:
      for (let row = 0; row < height; row++) {
compactRow(row, leftCols, false);
compactRow(row, rightCols, true);
      }
      break;
    case 7:
      for (let col = 0; col < width; col++) {
compactColumn(col, topRows, true);
compactColumn(col, bottomRows, false);
      }
      break;
    case 8:
      for (let row = 0; row < height; row++) {
compactRow(row, leftCols, true);
compactRow(row, rightCols, false);
      }
      break;
    default:
      break;
  }

  return changed;
}

function applyDirectionShiftUntilStable(boardData, direction) {
  const maxIterations = (boardData.length || 0) * ((boardData[0] ? boardData[0].length : 0) + 1);
  let iteration = 0;
  while (iteration < maxIterations) {
    const changed = applyDirectionShiftOnce(boardData, direction);
    if (!changed) break;
    iteration++;
  }
}

function countRemovableCellCount(boardData) {
  if (!Array.isArray(boardData)) return 0;
  let count = 0;
  for (const row of boardData) {
    if (!Array.isArray(row)) continue;
    for (const rawId of row) {
      const parsed = decodeCellId(rawId);
      if (isRemovableBaseId(parsed.baseId)) count++;
    }
  }
  return count;
}

function simulateSingleGame(baseBoardData, direction, initialRemovableCount) {
  const boardData = cloneBoardData(baseBoardData);
  const baseCount = Number.isFinite(Number(initialRemovableCount))
    ? Math.max(0, Number(initialRemovableCount))
    : countRemovableCellCount(baseBoardData);
  if (!hasFilledCells(boardData)) return { cleared: false, remainingPercent: 0 };

  const maxSteps = boardData.length * ((boardData[0] ? boardData[0].length : 0));
  let stepCount = 0;

  while (stepCount <= maxSteps) {
    const selectedPair = pickRandomRemovablePairForBoard(boardData, true);
    if (!selectedPair) {
      const cleared = isPlayBoardCleared(boardData);
      if (cleared) return { cleared: true, remainingPercent: 0 };
      const remainingCount = countRemovableCellCount(boardData);
      const remainingPercent = baseCount > 0 ? (remainingCount / baseCount) * 100 : 0;
      return { cleared: false, remainingPercent: Math.max(0, Math.min(100, remainingPercent)) };
    }

    const firstValue = boardData[selectedPair.row1][selectedPair.col1];
    const selectedBaseId = getMatchableBaseId(firstValue);
    const removedPositions = removePairFromBoard(boardData, selectedPair);
    triggerAdjacentMechanisms(boardData, removedPositions);
    if (selectedBaseId === BOMB_CELL_ID) {
      triggerBombEffect(boardData);
    }
    applyDirectionShiftUntilStable(boardData, direction);
    stepCount++;
  }

  const remainingCount = countRemovableCellCount(boardData);
  const remainingPercent = baseCount > 0 ? (remainingCount / baseCount) * 100 : 0;
  return { cleared: false, remainingPercent: Math.max(0, Math.min(100, remainingPercent)) };
}

function runBatch(games, baseBoardData, direction, taskId) {
  let partialCompleted = 0;
  let partialWins = 0;
  let partialFailedGames = 0;
  let partialFailedRemainPercentSum = 0;
  const initialRemovableCount = countRemovableCellCount(baseBoardData);

  for (let gameIndex = 0; gameIndex < games; gameIndex++) {
    if (isTaskCanceled(taskId)) {
      canceledTaskIds.delete(taskId);
      postMessage({ type: 'done', taskId, canceled: true });
      return;
    }
    const gameResult = simulateSingleGame(baseBoardData, direction, initialRemovableCount);
    if (gameResult && gameResult.cleared) {
      partialWins++;
    } else {
      partialFailedGames++;
      const remainPercent = Number(gameResult?.remainingPercent);
      partialFailedRemainPercentSum += Number.isFinite(remainPercent) ? remainPercent : 0;
    }
    partialCompleted++;

    if (partialCompleted >= 5) {
      postMessage({
type: 'progress',
taskId,
completed: partialCompleted,
wins: partialWins,
failedGames: partialFailedGames,
failedRemainPercentSum: partialFailedRemainPercentSum
      });
      partialCompleted = 0;
      partialWins = 0;
      partialFailedGames = 0;
      partialFailedRemainPercentSum = 0;
    }
  }

  if (partialCompleted > 0) {
    postMessage({
      type: 'progress',
      taskId,
      completed: partialCompleted,
      wins: partialWins,
      failedGames: partialFailedGames,
      failedRemainPercentSum: partialFailedRemainPercentSum
    });
  }
  canceledTaskIds.delete(taskId);
  postMessage({ type: 'done', taskId });
}

function runBatchPairMetrics(games, baseBoardData, direction, taskId, options) {
  const progressFlushSize = Math.max(2, Math.min(25, Math.floor(games / 8) || 2));
  let partialCompleted = 0;
  let partialWins = 0;
  let partialFailedGames = 0;
  let partialFailedRemainPercentSum = 0;
  let partialFailureStepCountSum = 0;
  let partialFailureProgressPercentSum = 0;
  let partialTotalStepCount = 0;
  let partialTotalPairCountSum = 0;
  let partialFirstHalfStepCount = 0;
  let partialFirstHalfPairCountSum = 0;
  let partialSecondHalfStepCount = 0;
  let partialSecondHalfPairCountSum = 0;
  let partialProgressPhaseStepCounts = createEmptySimulationProgressPhaseSummary();
  let partialProgressPhasePairCountSums = createEmptySimulationProgressPhaseSummary();
  let partialProgressPhaseDifficultyStepCounts = createEmptySimulationProgressPhaseSummary();
  let partialProgressPhaseDifficultyScoreSums = createEmptySimulationProgressPhaseSummary();
  let partialStepPairCountSums = [];
  let partialStepPairCountSampleCounts = [];
  let partialWinStepPairCountSums = [];
  let partialWinStepPairCountSampleCounts = [];
  let partialStepDifficultyScoreSums = [];
  let partialStepDifficultyScoreSampleCounts = [];
  let partialWinStepDifficultyScoreSums = [];
  let partialWinStepDifficultyScoreSampleCounts = [];
  let partialZeroTurnCount = 0;
  let partialOneTurnCount = 0;
  let partialSameDirTwoTurnCount = 0;
  let partialReverseTwoTurnCount = 0;
  let partialAvailableZeroTurnCountSum = 0;
  let partialAvailableOneTurnCountSum = 0;
  let partialAvailableSameDirTwoTurnCountSum = 0;
  let partialAvailableReverseTwoTurnCountSum = 0;
  let partialTotalTrialErrorCountSum = 0;
  let partialMaxTrialErrorCount = 0;
  let partialTotalActualPairDistance = 0;
  let partialActualPairDistanceCount = 0;
  let partialTotalAvailablePairDistance = 0;
  let partialAvailablePairDistanceStepCount = 0;
  let partialTotalStepDifficultyScore = 0;
  let partialMaxStepDifficultyScore = 0;
  const initialRemovableCount = countRemovableCellCount(baseBoardData);

  for (let gameIndex = 0; gameIndex < games; gameIndex++) {
    if (isTaskCanceled(taskId)) {
      canceledTaskIds.delete(taskId);
      postMessage({ type: 'done_pair_metrics', taskId, canceled: true });
      return;
    }
    const gameResult = simulateSingleGameWithPairStats(
      baseBoardData,
      direction,
      initialRemovableCount,
      options
    );
    if (gameResult && gameResult.cleared) {
      partialWins++;
    } else {
      partialFailedGames++;
      const failedStep = Number(gameResult ? gameResult.failedStepCount : 0);
      const failedProgressPercent = Number(gameResult ? gameResult.failedProgressPercent : 0);
      const failedRemainPercent = Number(gameResult ? gameResult.remainingPercent : 0);
      partialFailureStepCountSum += Number.isFinite(failedStep) ? failedStep : 0;
      partialFailureProgressPercentSum += Number.isFinite(failedProgressPercent)
? failedProgressPercent
: 0;
      partialFailedRemainPercentSum += Number.isFinite(failedRemainPercent)
? failedRemainPercent
: 0;
    }

    const pairSummary = gameResult && gameResult.pairSummary ? gameResult.pairSummary : {};
    partialTotalStepCount += Number(pairSummary.totalStepCount) || 0;
    partialTotalPairCountSum += Number(pairSummary.totalPairCountSum) || 0;
    addStepPairCountsToAggregation(
      partialStepPairCountSums,
      partialStepPairCountSampleCounts,
      pairSummary.stepPairCounts
    );
    addStepDifficultyScoresToAggregation(
      partialStepDifficultyScoreSums,
      partialStepDifficultyScoreSampleCounts,
      gameResult && gameResult.stepDifficultyScores
    );
    if (gameResult && gameResult.cleared) {
      addStepPairCountsToAggregation(
partialWinStepPairCountSums,
partialWinStepPairCountSampleCounts,
pairSummary.stepPairCounts
      );
      addStepDifficultyScoresToAggregation(
partialWinStepDifficultyScoreSums,
partialWinStepDifficultyScoreSampleCounts,
gameResult && gameResult.stepDifficultyScores
      );
    }
    partialFirstHalfStepCount += Number(pairSummary.firstHalfStepCount) || 0;
    partialFirstHalfPairCountSum += Number(pairSummary.firstHalfPairCountSum) || 0;
    partialSecondHalfStepCount += Number(pairSummary.secondHalfStepCount) || 0;
    partialSecondHalfPairCountSum += Number(pairSummary.secondHalfPairCountSum) || 0;
    const pairProgressPhaseStepCounts = Array.isArray(pairSummary.progressPhaseStepCounts)
      ? pairSummary.progressPhaseStepCounts
      : [];
    const pairProgressPhasePairCountSums = Array.isArray(pairSummary.progressPhasePairCountSums)
      ? pairSummary.progressPhasePairCountSums
      : [];
    const difficultySummary = gameResult && gameResult.difficultySummary
      ? gameResult.difficultySummary
      : {};
    const difficultyProgressPhaseStepCounts =
      Array.isArray(difficultySummary.progressPhaseDifficultyStepCounts)
? difficultySummary.progressPhaseDifficultyStepCounts
: [];
    const difficultyProgressPhaseScoreSums =
      Array.isArray(difficultySummary.progressPhaseDifficultyScoreSums)
? difficultySummary.progressPhaseDifficultyScoreSums
: [];
    for (let phaseIndex = 0; phaseIndex < SIMULATION_PROGRESS_PHASE_COUNT; phaseIndex++) {
      const stepCountValue = Number(pairProgressPhaseStepCounts[phaseIndex]);
      const pairSumValue = Number(pairProgressPhasePairCountSums[phaseIndex]);
      const difficultyStepCountValue = Number(difficultyProgressPhaseStepCounts[phaseIndex]);
      const difficultyScoreSumValue = Number(difficultyProgressPhaseScoreSums[phaseIndex]);
      partialProgressPhaseStepCounts[phaseIndex] +=
Number.isFinite(stepCountValue) && stepCountValue > 0
  ? stepCountValue
  : 0;
      partialProgressPhasePairCountSums[phaseIndex] +=
Number.isFinite(pairSumValue) && pairSumValue > 0
  ? pairSumValue
  : 0;
      partialProgressPhaseDifficultyStepCounts[phaseIndex] +=
Number.isFinite(difficultyStepCountValue) && difficultyStepCountValue > 0
  ? difficultyStepCountValue
  : 0;
      partialProgressPhaseDifficultyScoreSums[phaseIndex] +=
Number.isFinite(difficultyScoreSumValue) && difficultyScoreSumValue > 0
  ? difficultyScoreSumValue
  : 0;
    }

    const connectionTypeCounts = gameResult && gameResult.connectionTypeCounts
      ? gameResult.connectionTypeCounts
      : {};
    partialZeroTurnCount += Number(connectionTypeCounts.zeroTurnCount) || 0;
    partialOneTurnCount += Number(connectionTypeCounts.oneTurnCount) || 0;
    partialSameDirTwoTurnCount += Number(connectionTypeCounts.sameDirTwoTurnCount) || 0;
    partialReverseTwoTurnCount += Number(connectionTypeCounts.reverseTwoTurnCount) || 0;
    const availableConnectionTypeCounts = gameResult && gameResult.availableConnectionTypeCountTotals
      ? gameResult.availableConnectionTypeCountTotals
      : {};
    partialAvailableZeroTurnCountSum += Number(availableConnectionTypeCounts.zeroTurnCount) || 0;
    partialAvailableOneTurnCountSum += Number(availableConnectionTypeCounts.oneTurnCount) || 0;
    partialAvailableSameDirTwoTurnCountSum +=
      Number(availableConnectionTypeCounts.sameDirTwoTurnCount) || 0;
    partialAvailableReverseTwoTurnCountSum +=
      Number(availableConnectionTypeCounts.reverseTwoTurnCount) || 0;
    partialTotalTrialErrorCountSum += Number(gameResult && gameResult.totalTrialErrorCount) || 0;
    partialMaxTrialErrorCount = Math.max(
      partialMaxTrialErrorCount,
      Number(gameResult && gameResult.maxTrialErrorCount) || 0
    );
    partialTotalActualPairDistance += Number(gameResult && gameResult.totalActualPairDistance) || 0;
    partialActualPairDistanceCount += Number(gameResult && gameResult.actualPairDistanceCount) || 0;
    partialTotalAvailablePairDistance +=
      Number(gameResult && gameResult.totalAvailablePairDistance) || 0;
    partialAvailablePairDistanceStepCount +=
      Number(gameResult && gameResult.availablePairDistanceStepCount) || 0;
    partialTotalStepDifficultyScore += Number(gameResult && gameResult.totalStepDifficultyScore) || 0;
    partialMaxStepDifficultyScore = Math.max(
      partialMaxStepDifficultyScore,
      Number(gameResult && gameResult.maxStepDifficultyScore) || 0
    );
    partialCompleted++;

    if (partialCompleted >= progressFlushSize) {
      postMessage({
type: 'progress_pair_metrics',
taskId,
completed: partialCompleted,
wins: partialWins,
failedGames: partialFailedGames,
failedRemainPercentSum: partialFailedRemainPercentSum,
failureStepCountSum: partialFailureStepCountSum,
failureProgressPercentSum: partialFailureProgressPercentSum,
totalStepCount: partialTotalStepCount,
totalPairCountSum: partialTotalPairCountSum,
firstHalfStepCount: partialFirstHalfStepCount,
firstHalfPairCountSum: partialFirstHalfPairCountSum,
secondHalfStepCount: partialSecondHalfStepCount,
secondHalfPairCountSum: partialSecondHalfPairCountSum,
progressPhaseStepCounts: partialProgressPhaseStepCounts,
progressPhasePairCountSums: partialProgressPhasePairCountSums,
progressPhaseDifficultyStepCounts: partialProgressPhaseDifficultyStepCounts,
progressPhaseDifficultyScoreSums: partialProgressPhaseDifficultyScoreSums,
stepPairCountSums: partialStepPairCountSums,
stepPairCountSampleCounts: partialStepPairCountSampleCounts,
stepDifficultyScoreSums: partialStepDifficultyScoreSums,
stepDifficultyScoreSampleCounts: partialStepDifficultyScoreSampleCounts,
winStepPairCountSums: partialWinStepPairCountSums,
winStepPairCountSampleCounts: partialWinStepPairCountSampleCounts,
winStepDifficultyScoreSums: partialWinStepDifficultyScoreSums,
winStepDifficultyScoreSampleCounts: partialWinStepDifficultyScoreSampleCounts,
zeroTurnCount: partialZeroTurnCount,
oneTurnCount: partialOneTurnCount,
sameDirTwoTurnCount: partialSameDirTwoTurnCount,
reverseTwoTurnCount: partialReverseTwoTurnCount,
availableZeroTurnCountSum: partialAvailableZeroTurnCountSum,
availableOneTurnCountSum: partialAvailableOneTurnCountSum,
availableSameDirTwoTurnCountSum: partialAvailableSameDirTwoTurnCountSum,
availableReverseTwoTurnCountSum: partialAvailableReverseTwoTurnCountSum,
totalTrialErrorCountSum: partialTotalTrialErrorCountSum,
maxTrialErrorCount: partialMaxTrialErrorCount,
totalActualPairDistance: partialTotalActualPairDistance,
actualPairDistanceCount: partialActualPairDistanceCount,
totalAvailablePairDistance: partialTotalAvailablePairDistance,
availablePairDistanceStepCount: partialAvailablePairDistanceStepCount,
totalStepDifficultyScore: partialTotalStepDifficultyScore,
maxStepDifficultyScore: partialMaxStepDifficultyScore
      });
      partialCompleted = 0;
      partialWins = 0;
      partialFailedGames = 0;
      partialFailedRemainPercentSum = 0;
      partialFailureStepCountSum = 0;
      partialFailureProgressPercentSum = 0;
      partialTotalStepCount = 0;
      partialTotalPairCountSum = 0;
      partialFirstHalfStepCount = 0;
      partialFirstHalfPairCountSum = 0;
      partialSecondHalfStepCount = 0;
      partialSecondHalfPairCountSum = 0;
      partialProgressPhaseStepCounts = createEmptySimulationProgressPhaseSummary();
      partialProgressPhasePairCountSums = createEmptySimulationProgressPhaseSummary();
      partialProgressPhaseDifficultyStepCounts = createEmptySimulationProgressPhaseSummary();
      partialProgressPhaseDifficultyScoreSums = createEmptySimulationProgressPhaseSummary();
      partialStepPairCountSums = [];
      partialStepPairCountSampleCounts = [];
      partialWinStepPairCountSums = [];
      partialWinStepPairCountSampleCounts = [];
      partialStepDifficultyScoreSums = [];
      partialStepDifficultyScoreSampleCounts = [];
      partialWinStepDifficultyScoreSums = [];
      partialWinStepDifficultyScoreSampleCounts = [];
      partialZeroTurnCount = 0;
      partialOneTurnCount = 0;
      partialSameDirTwoTurnCount = 0;
      partialReverseTwoTurnCount = 0;
      partialAvailableZeroTurnCountSum = 0;
      partialAvailableOneTurnCountSum = 0;
      partialAvailableSameDirTwoTurnCountSum = 0;
      partialAvailableReverseTwoTurnCountSum = 0;
      partialTotalTrialErrorCountSum = 0;
      partialMaxTrialErrorCount = 0;
      partialTotalActualPairDistance = 0;
      partialActualPairDistanceCount = 0;
      partialTotalAvailablePairDistance = 0;
      partialAvailablePairDistanceStepCount = 0;
      partialTotalStepDifficultyScore = 0;
      partialMaxStepDifficultyScore = 0;
    }
  }

  if (partialCompleted > 0) {
    postMessage({
      type: 'progress_pair_metrics',
      taskId,
      completed: partialCompleted,
      wins: partialWins,
      failedGames: partialFailedGames,
      failedRemainPercentSum: partialFailedRemainPercentSum,
      failureStepCountSum: partialFailureStepCountSum,
      failureProgressPercentSum: partialFailureProgressPercentSum,
      totalStepCount: partialTotalStepCount,
      totalPairCountSum: partialTotalPairCountSum,
      firstHalfStepCount: partialFirstHalfStepCount,
      firstHalfPairCountSum: partialFirstHalfPairCountSum,
      secondHalfStepCount: partialSecondHalfStepCount,
      secondHalfPairCountSum: partialSecondHalfPairCountSum,
      progressPhaseStepCounts: partialProgressPhaseStepCounts,
      progressPhasePairCountSums: partialProgressPhasePairCountSums,
      progressPhaseDifficultyStepCounts: partialProgressPhaseDifficultyStepCounts,
      progressPhaseDifficultyScoreSums: partialProgressPhaseDifficultyScoreSums,
      stepPairCountSums: partialStepPairCountSums,
      stepPairCountSampleCounts: partialStepPairCountSampleCounts,
      stepDifficultyScoreSums: partialStepDifficultyScoreSums,
      stepDifficultyScoreSampleCounts: partialStepDifficultyScoreSampleCounts,
      winStepPairCountSums: partialWinStepPairCountSums,
      winStepPairCountSampleCounts: partialWinStepPairCountSampleCounts,
      winStepDifficultyScoreSums: partialWinStepDifficultyScoreSums,
      winStepDifficultyScoreSampleCounts: partialWinStepDifficultyScoreSampleCounts,
      zeroTurnCount: partialZeroTurnCount,
      oneTurnCount: partialOneTurnCount,
      sameDirTwoTurnCount: partialSameDirTwoTurnCount,
      reverseTwoTurnCount: partialReverseTwoTurnCount,
      availableZeroTurnCountSum: partialAvailableZeroTurnCountSum,
      availableOneTurnCountSum: partialAvailableOneTurnCountSum,
      availableSameDirTwoTurnCountSum: partialAvailableSameDirTwoTurnCountSum,
      availableReverseTwoTurnCountSum: partialAvailableReverseTwoTurnCountSum,
      totalTrialErrorCountSum: partialTotalTrialErrorCountSum,
      maxTrialErrorCount: partialMaxTrialErrorCount,
      totalActualPairDistance: partialTotalActualPairDistance,
      actualPairDistanceCount: partialActualPairDistanceCount,
      totalAvailablePairDistance: partialTotalAvailablePairDistance,
      availablePairDistanceStepCount: partialAvailablePairDistanceStepCount,
      totalStepDifficultyScore: partialTotalStepDifficultyScore,
      maxStepDifficultyScore: partialMaxStepDifficultyScore
    });
  }
  canceledTaskIds.delete(taskId);
  postMessage({ type: 'done_pair_metrics', taskId });
}
`}function fu(){if(Ba)return Ba;const e=Mp(),t=new Blob([e],{type:"text/javascript"});return Ba=URL.createObjectURL(t),Ba}function hu(){return Ra+=1,Ra>=2147483647&&(Ra=1),Ra}function pu(){for(const e of xn)try{e.terminate()}catch{}xn=[],_a=""}function gu(e){Va=!!e,Va||pu()}function Np(){const e=document.getElementById("workerPoolReuseToggle");gu(!!e?.checked)}function Ss(){const e=document.getElementById("workerPoolReuseToggle");return e&&(Va=!!e.checked),Va}function yu(e,t){if(!Ss())return[];for(_a&&_a!==t&&pu(),_a=t;xn.length>e;){const n=xn.pop();try{n?.terminate()}catch{}}for(;xn.length<e;)xn.push(new Worker(t));return xn.slice(0,e)}function bu(e,t){if(!(!e||!Number.isInteger(t)||t<=0))try{e.postMessage({type:"cancel",taskId:t})}catch{}}function Cu(e,t=null){const n=Number.isFinite(Number(e))?Math.max(1,Math.floor(Number(e))):1,r=Math.max(1,parseInt(String(navigator.hardwareConcurrency||0),10)||1),a=Math.max(1,r),o=Number.isFinite(Number(t))?Math.max(1,Math.floor(Number(t))):64,i=Math.max(1,Math.min(o,64,a));return Math.max(1,Math.min(n,i))}async function wp(e,t,n,r,a,o={}){if(typeof Worker>"u"||typeof Blob>"u"||typeof URL>"u")return null;const i=Cu(n,o?.maxWorkerCount);if(i<=1)return null;const s=Math.floor(n/i),l=n%i,c=[];for(let y=0;y<i;y++)c.push(s+(y<l?1:0));const u=c.filter(y=>y>0);if(u.length<=1)return null;const d=fu(),f=hu(),h=Ss()&&!o?.disableWorkerPoolReuse,C=h?yu(u.length,d):[],p=[];return new Promise((y,b)=>{let g=0,S=0,M=0,x=0,N=0,P=!1,w=0;const I=Date.now();let T=I,A=null;const E=(H={})=>({winCount:S,completedGames:g,failedGameCount:M,failedRemainPercentSum:x,...H}),j=()=>{A&&(clearInterval(A),A=null)},_=(H=!1)=>{j();for(const L of p)if(L){L.onmessage=null,L.onerror=null;try{L.terminate()}catch{}}if(h)for(let L=0;L<w;L++){const U=C[L];U&&(U.onmessage=null,U.onerror=null,H&&bu(U,f))}},O=H=>{P||(P=!0,_(h),b(H))},F=Number.isFinite(Number(o?.timeoutIdleMs))?Math.max(5e3,Math.floor(Number(o.timeoutIdleMs))):3e4,D=Number.isFinite(Number(o?.timeoutTotalMs))?Math.max(F,Math.floor(Number(o.timeoutTotalMs))):12e4;A=setInterval(()=>{if(P)return;const H=Date.now();H-T<F&&H-I<D||(P=!0,_(h),y(E({stoppedEarly:!0,timedOut:!0})))},1e3),u.forEach((H,L)=>{if(P)return;const U=h?C[L]:new Worker(d);if(!U){O(new Error("Worker init failed"));return}h||p.push(U),w++,U.onmessage=Q=>{if(P)return;const $=Q?.data||{};if(!(Number.isInteger($.taskId)&&$.taskId!==f)){if($.type==="progress"){T=Date.now();const W=Number.isFinite(Number($.completed))?Number($.completed):0,K=Number.isFinite(Number($.wins))?Number($.wins):0,ee=Number.isFinite(Number($.failedGames))?Number($.failedGames):0,Z=Number.isFinite(Number($.failedRemainPercentSum))?Number($.failedRemainPercentSum):0;g+=W,S+=K,M+=ee,x+=Z,typeof r=="function"&&r(g,n,S),typeof a=="function"&&a(g,n,S)&&(P=!0,_(h),y({winCount:S,completedGames:g,failedGameCount:M,failedRemainPercentSum:x,stoppedEarly:!0}));return}if($.type==="done"){if(N++,N<u.length)return;P=!0,_(!1),y({winCount:S,completedGames:g,failedGameCount:M,failedRemainPercentSum:x,stoppedEarly:!1})}}},U.onerror=Q=>{O(Q instanceof Error?Q:new Error("Worker runtime error"))},U.postMessage({type:"run",taskId:f,games:H,boardData:e,direction:t})})})}async function Ap(e,t,n,r,a,o={}){if(typeof Worker>"u"||typeof Blob>"u"||typeof URL>"u")return null;const i=Cu(n,o?.maxWorkerCount);if(i<=1)return null;const s=Math.floor(n/i),l=n%i,c=[];for(let y=0;y<i;y++)c.push(s+(y<l?1:0));const u=c.filter(y=>y>0);if(u.length<=1)return null;const d=fu(),f=hu(),h=Ss()&&!o?.disableWorkerPoolReuse,C=h?yu(u.length,d):[],p=[];return new Promise((y,b)=>{let g=0,S=0,M=0,x=0,N=0,P=0,w=0,I=0,T=0,A=0,E=0,j=0,_=oe(),O=oe(),F=oe(),D=oe(),H=[],L=[],U=[],Q=[],$=[],W=[],K=[],ee=[],Z=0,ne=0,me=0,se=0,le=0,We=0,q=0,ae=0,ge=0,Me=0,kr=0,Fr=0,Lr=0,$r=0,_r=0,Un=0,Ta=0,en=!1,Da=0;const Or=(Cn=!1)=>{for(const it of p)if(it){it.onmessage=null,it.onerror=null;try{it.terminate()}catch{}}if(h)for(let it=0;it<Da;it++){const Ze=C[it];Ze&&(Ze.onmessage=null,Ze.onerror=null,Cn&&bu(Ze,f))}},Ea=Cn=>{en||(en=!0,Or(h),b(Cn))};u.forEach((Cn,it)=>{if(en)return;const Ze=h?C[it]:new Worker(d);if(!Ze){Ea(new Error("Worker init failed"));return}h||p.push(Ze),Da++,Ze.onmessage=Yn=>{if(en)return;const B=Yn?.data||{};if(!(Number.isInteger(B.taskId)&&B.taskId!==f)){if(B.type==="progress_pair_metrics"){const Lo=Number.isFinite(Number(B.completed))?Number(B.completed):0,$o=Number.isFinite(Number(B.wins))?Number(B.wins):0,_o=Number.isFinite(Number(B.failedGames))?Number(B.failedGames):0,Oo=Number.isFinite(Number(B.failedRemainPercentSum))?Number(B.failedRemainPercentSum):0,Ho=Number.isFinite(Number(B.failureStepCountSum))?Number(B.failureStepCountSum):0,Wo=Number.isFinite(Number(B.failureProgressPercentSum))?Number(B.failureProgressPercentSum):0,jo=Number.isFinite(Number(B.totalStepCount))?Number(B.totalStepCount):0,R=Number.isFinite(Number(B.totalPairCountSum))?Number(B.totalPairCountSum):0,te=Number.isFinite(Number(B.firstHalfStepCount))?Number(B.firstHalfStepCount):0,fe=Number.isFinite(Number(B.firstHalfPairCountSum))?Number(B.firstHalfPairCountSum):0,je=Number.isFinite(Number(B.secondHalfStepCount))?Number(B.secondHalfStepCount):0,_t=Number.isFinite(Number(B.secondHalfPairCountSum))?Number(B.secondHalfPairCountSum):0,Ne=z=>{const Hr=oe();if(!Array.isArray(z))return Hr;for(let tn=0;tn<Kr;tn++){const zo=Number(z[tn]);Hr[tn]=Number.isFinite(zo)&&zo>0?zo:0}return Hr},Sn=Ne(B.progressPhaseStepCounts),Go=Ne(B.progressPhasePairCountSums),Kn=Ne(B.progressPhaseDifficultyStepCounts),Xn=Ne(B.progressPhaseDifficultyScoreSums),Se=z=>Array.isArray(z)?z.map(Hr=>{const tn=Number(Hr);return Number.isFinite(tn)&&tn>=0?tn:0}):[],Ot=Se(B.stepPairCountSums),Ht=Se(B.stepPairCountSampleCounts),Jn=Se(B.stepDifficultyScoreSums),Zn=Se(B.stepDifficultyScoreSampleCounts),Ds=Se(B.winStepPairCountSums),Es=Se(B.winStepPairCountSampleCounts),Bs=Se(B.winStepDifficultyScoreSums),Rs=Se(B.winStepDifficultyScoreSampleCounts),Md=Number.isFinite(Number(B.zeroTurnCount))?Number(B.zeroTurnCount):0,Nd=Number.isFinite(Number(B.oneTurnCount))?Number(B.oneTurnCount):0,wd=Number.isFinite(Number(B.sameDirTwoTurnCount))?Number(B.sameDirTwoTurnCount):0,Ad=Number.isFinite(Number(B.reverseTwoTurnCount))?Number(B.reverseTwoTurnCount):0,Id=Number.isFinite(Number(B.availableZeroTurnCountSum))?Number(B.availableZeroTurnCountSum):0,Td=Number.isFinite(Number(B.availableOneTurnCountSum))?Number(B.availableOneTurnCountSum):0,Dd=Number.isFinite(Number(B.availableSameDirTwoTurnCountSum))?Number(B.availableSameDirTwoTurnCountSum):0,Ed=Number.isFinite(Number(B.availableReverseTwoTurnCountSum))?Number(B.availableReverseTwoTurnCountSum):0,Bd=Number.isFinite(Number(B.totalTrialErrorCountSum))?Number(B.totalTrialErrorCountSum):0,Rd=Number.isFinite(Number(B.maxTrialErrorCount))?Number(B.maxTrialErrorCount):0,kd=Number.isFinite(Number(B.totalActualPairDistance))?Number(B.totalActualPairDistance):0,Fd=Number.isFinite(Number(B.actualPairDistanceCount))?Number(B.actualPairDistanceCount):0,Ld=Number.isFinite(Number(B.totalAvailablePairDistance))?Number(B.totalAvailablePairDistance):0,$d=Number.isFinite(Number(B.availablePairDistanceStepCount))?Number(B.availablePairDistanceStepCount):0,_d=Number.isFinite(Number(B.totalStepDifficultyScore))?Number(B.totalStepDifficultyScore):0,Od=Number.isFinite(Number(B.maxStepDifficultyScore))?Number(B.maxStepDifficultyScore):0;g+=Lo,S+=$o,M+=_o,x+=Oo,N+=Ho,P+=Wo,w+=jo,I+=R,T+=te,A+=fe,E+=je,j+=_t;for(let z=0;z<Kr;z++)_[z]+=Sn[z],O[z]+=Go[z],F[z]+=Kn[z],D[z]+=Xn[z];const Hd=Math.max(Ot.length,Ht.length);for(let z=0;z<Hd;z++)H[z]=(Number(H[z])||0)+(Number(Ot[z])||0),L[z]=(Number(L[z])||0)+(Number(Ht[z])||0);const Wd=Math.max(Jn.length,Zn.length);for(let z=0;z<Wd;z++)$[z]=(Number($[z])||0)+(Number(Jn[z])||0),W[z]=(Number(W[z])||0)+(Number(Zn[z])||0);const jd=Math.max(Ds.length,Es.length);for(let z=0;z<jd;z++)U[z]=(Number(U[z])||0)+(Number(Ds[z])||0),Q[z]=(Number(Q[z])||0)+(Number(Es[z])||0);const Gd=Math.max(Bs.length,Rs.length);for(let z=0;z<Gd;z++)K[z]=(Number(K[z])||0)+(Number(Bs[z])||0),ee[z]=(Number(ee[z])||0)+(Number(Rs[z])||0);Z+=Md,ne+=Nd,me+=wd,se+=Ad,le+=Id,We+=Td,q+=Dd,ae+=Ed,ge+=Bd,Me=Math.max(Me,Rd),kr+=kd,Fr+=Fd,Lr+=Ld,$r+=$d,_r+=_d,Un=Math.max(Un,Od),typeof r=="function"&&r(g,n,S),typeof a=="function"&&a(g,n,S)&&(en=!0,Or(h),y({winCount:S,completedGames:g,failedGameCount:M,failedRemainPercentSum:x,failureStepCountSum:N,failureProgressPercentSum:P,totalStepCount:w,totalPairCountSum:I,firstHalfStepCount:T,firstHalfPairCountSum:A,secondHalfStepCount:E,secondHalfPairCountSum:j,progressPhaseStepCounts:_,progressPhasePairCountSums:O,progressPhaseDifficultyStepCounts:F,progressPhaseDifficultyScoreSums:D,stepPairCountSums:H,stepPairCountSampleCounts:L,stepDifficultyScoreSums:$,stepDifficultyScoreSampleCounts:W,winStepPairCountSums:U,winStepPairCountSampleCounts:Q,winStepDifficultyScoreSums:K,winStepDifficultyScoreSampleCounts:ee,zeroTurnCount:Z,oneTurnCount:ne,sameDirTwoTurnCount:me,reverseTwoTurnCount:se,availableZeroTurnCountSum:le,availableOneTurnCountSum:We,availableSameDirTwoTurnCountSum:q,availableReverseTwoTurnCountSum:ae,totalTrialErrorCountSum:ge,maxTrialErrorCount:Me,totalActualPairDistance:kr,actualPairDistanceCount:Fr,totalAvailablePairDistance:Lr,availablePairDistanceStepCount:$r,totalStepDifficultyScore:_r,maxStepDifficultyScore:Un,stoppedEarly:!0}));return}if(B.type==="done_pair_metrics"){if(Ta++,Ta<u.length)return;en=!0,Or(!1),y({winCount:S,completedGames:g,failedGameCount:M,failedRemainPercentSum:x,failureStepCountSum:N,failureProgressPercentSum:P,totalStepCount:w,totalPairCountSum:I,firstHalfStepCount:T,firstHalfPairCountSum:A,secondHalfStepCount:E,secondHalfPairCountSum:j,progressPhaseStepCounts:_,progressPhasePairCountSums:O,progressPhaseDifficultyStepCounts:F,progressPhaseDifficultyScoreSums:D,stepPairCountSums:H,stepPairCountSampleCounts:L,stepDifficultyScoreSums:$,stepDifficultyScoreSampleCounts:W,winStepPairCountSums:U,winStepPairCountSampleCounts:Q,winStepDifficultyScoreSums:K,winStepDifficultyScoreSampleCounts:ee,zeroTurnCount:Z,oneTurnCount:ne,sameDirTwoTurnCount:me,reverseTwoTurnCount:se,availableZeroTurnCountSum:le,availableOneTurnCountSum:We,availableSameDirTwoTurnCountSum:q,availableReverseTwoTurnCountSum:ae,totalTrialErrorCountSum:ge,maxTrialErrorCount:Me,totalActualPairDistance:kr,actualPairDistanceCount:Fr,totalAvailablePairDistance:Lr,availablePairDistanceStepCount:$r,totalStepDifficultyScore:_r,maxStepDifficultyScore:Un,stoppedEarly:!1})}}},Ze.onerror=Yn=>{Ea(Yn instanceof Error?Yn:new Error("Worker runtime error"))},Ze.postMessage({type:"run_pair_metrics",taskId:f,games:Cn,boardData:e,direction:t,options:{humanMode:!!o?.humanMode,humanModeBesidePercent:Ie(o?.humanModeBesidePercent,70)}})})})}function gr(e){const t=document.body;t&&t.classList.toggle("simulation-locked",!!e)}async function vs(e=null,t={}){const r=e!=null&&Number.isFinite(Number(e))?Math.max(1,Math.min(1e4,Math.round(Number(e)))):Si(100),a=t?.copyResult!==!1,o=typeof t?.progressButtonId=="string"?t.progressButtonId:"btnSimulatePlay",i=t?.showProgressLabel===!0||o==="btnSimulatePlay";if(Et||Pt||ut)return;const s=m&&m.active&&Array.isArray(m.originalBoard)?G(m.originalBoard):G(k),l=m&&m.active?m.direction:parseInt(document.querySelector('input[name="direction"]:checked')?.value||0),c=!!(t?.humanMode??Vr),u=Ie(t?.humanModeBesidePercent,Qt(70));if(!No(s))return alert("请先生成关卡，再进行模拟试玩。"),null;if(!Mr("模拟")||!ic("模拟"))return null;const d=document.getElementById("btnSimulatePlay"),f=document.getElementById(o)||d,h=!!f;Et=!0,gr(!0),f&&(f.dataset.defaultLabel=f.textContent||"",h&&(f.disabled=!0,f.classList.add("simulating"))),pr(r),h&&pl(0,i?"模拟中 0%":null,f);try{const C=await bs(s,l,r,(D,H)=>{const L=Number.isFinite(Number(H))&&Number(H)>0?Number(H):r,Q=Math.max(0,Number.isFinite(Number(D))?Number(D):0)/L*100;h&&pl(Q,i?`模拟中 ${Math.round(Q)}%`:null,f)},{humanMode:c,humanModeBesidePercent:u}),p=Number(C?.winCount)||0,y=Number(C?.winRate)||0,b=`${p}/${r}（${y.toFixed(2)}%）`,g=document.getElementById("levelStatsSimulation");g&&(g.textContent=b);const S=Ro(s),M=document.getElementById("levelStatsInitialPairCount");M&&(M.textContent=String(Math.max(0,S)));const x=Number(C?.averagePairPerStep)||0,N=document.getElementById("levelStatsAveragePairCount");N&&(N.textContent=x.toFixed(2));const P=document.getElementById("levelStatsFailurePosition");P&&(P.textContent=mp(C));const w=Number(C?.averageTrialErrorPerStep)||0,I=Number(C?.maxTrialErrorCount)||0,T=document.getElementById("levelStatsAvgTrialError");T&&(T.textContent=w.toFixed(2));const A=document.getElementById("levelStatsMaxTrialError");A&&(A.textContent=String(Math.max(0,Math.round(I))));const E=S,j=Ms(s,4),_=Cs(1,s,l,y,C,E,j,!1,c,u,Er()),O=document.getElementById("info");let F=!1;if(a&&navigator.clipboard&&typeof navigator.clipboard.writeText=="function")try{await navigator.clipboard.writeText(_),F=!0}catch(D){console.error("Failed to copy single simulation result:",D)}return O&&(a?O.textContent=F?`模拟试玩完成：胜利 ${p} 局 / ${r} 局，胜率 ${y.toFixed(2)}%，模式：${c?`人类模式(相邻优先${u}%)`:"标准模式"}，结果已复制到剪贴板`:`模拟试玩完成：胜利 ${p} 局 / ${r} 局，胜率 ${y.toFixed(2)}%，模式：${c?`人类模式(相邻优先${u}%)`:"标准模式"}（复制失败，请检查剪贴板权限）`:O.textContent=`模拟试玩完成：胜利 ${p} 局 / ${r} 局，胜率 ${y.toFixed(2)}%，模式：${c?`人类模式(相邻优先${u}%)`:"标准模式"}`),{winCount:p,gameCount:r,winRate:y,initialPairCount:S}}finally{Et=!1,gr(!1),xp(f)}}function Su(e,t){if(!Array.isArray(e)||e.length<2)return null;let n=Number(e[0]),r=Number(e[1]);if(!Number.isFinite(n)||!Number.isFinite(r))return null;if(n>r){const i=n;n=r,r=i}n=Math.max(0,Math.min(100,n)),r=Math.max(0,Math.min(100,r));const a=Math.ceil(n/100*t-1e-9),o=Math.floor(r/100*t+1e-9);return{minRate:n,maxRate:r,minWins:a,maxWins:o}}function sr(e,t,n,r){if(!r)return!1;const a=Math.max(0,n-t),o=e;return e+a<r.minWins||o>r.maxWins}async function Ip(e,t,n=100,r=null,a={}){const o=Su(a?.winRateRange,n),i=!!a?.enableUnreachableEarlyStop;let s=0,l=0,c=0,u=0,d=!1,f=!1,h=!1,C=!1;if(o&&o.minWins>o.maxWins)return{winCount:0,completedGames:0,gameCount:n,winRate:0,failedGameCount:0,failedRemainPercent:0,stoppedEarly:!0,unreachable:!0,timedOut:!1};try{const b=await wp(e,t,n,(g,S,M)=>{l=g,s=M,typeof r=="function"&&r(g,S,M)},(g,S,M)=>!i||!o?!1:sr(M,g,S,o),{maxWorkerCount:a?.maxWorkerCount,timeoutIdleMs:a?.timeoutIdleMs,timeoutTotalMs:a?.timeoutTotalMs,disableWorkerPoolReuse:a?.disableWorkerPoolReuse});b&&Number.isFinite(b.winCount)&&(d=!0,s=b.winCount,l=b.completedGames||n,c=Number.isFinite(Number(b.failedGameCount))?Number(b.failedGameCount):0,u=Number.isFinite(Number(b.failedRemainPercentSum))?Number(b.failedRemainPercentSum):0,f=!!b.stoppedEarly,C=!!b.timedOut,h=f&&sr(s,l,n,o))}catch(b){console.error("Worker simulate failed, fallback to single thread:",b)}if(!d){const b=De(e);for(let g=0;g<n;g++){const S=lp(e,t,b);if(S?.cleared)s++;else{c++;const M=Number(S?.remainingPercent);u+=Number.isFinite(M)?M:0}if(l=g+1,typeof r=="function"&&r(l,n,s),i&&o&&(h=sr(s,l,n,o),h)){f=!0;break}l%5===0&&await rt(0)}}const p=n>0?s/n*100:0,y=c>0?u/c:0;return{winCount:s,completedGames:l,gameCount:n,winRate:p,failedGameCount:c,failedRemainPercent:y,stoppedEarly:f,unreachable:h,timedOut:C}}function gl(e,t,n=[0,0],r=20){const a=Number.isFinite(Number(n?.[0]))?Number(n[0]):0,o=Number.isFinite(Number(n?.[1]))?Number(n[1]):a,i=Mi(e,a),s=Mi(t,o),l=Math.max(0,Math.min(r,i)),c=Math.max(0,Math.min(r,s)),u=Math.min(l,c),d=Math.max(l,c),f=document.getElementById(e);f&&f.value!==String(u)&&(f.value=String(u));const h=document.getElementById(t);return h&&h.value!==String(d)&&(h.value=String(d)),[u,d]}function To(){return{count8Range:gl("count8Min","count8Max",[0,0],20),count6Range:gl("count6Min","count6Max",[0,0],20)}}function vu(e,t,n){const r=Ns(e,t,n);return!Array.isArray(r)||r.length===0?null:r[Math.floor(Math.random()*r.length)]}function tr(e,t){const n=Number.isFinite(Number(e))?Number(e):0,r=Number.isFinite(Number(t))?Number(t):n;return n===r?String(n):`${n}~${r}`}function Vn(){const e=parseInt(document.getElementById("width").value,10)||8,t=parseInt(document.getElementById("height").value,10)||12,n=e*t,{count8Range:r,count6Range:a}=To(),o=Ns(n,r,a),i=document.getElementById("errorMsg"),s=document.getElementById("resultSection");if(!Array.isArray(o)||o.length===0){i&&(i.style.display="block",i.textContent="错误：当前8张/6张区间在该棋盘尺寸下无可用组合。"),s&&(s.style.display="none");return}i&&(i.style.display="none"),s&&(s.style.display="block");let l=1/0,c=-1/0,u=1/0,d=-1/0,f=1/0,h=-1/0,C=1/0,p=-1/0,y=1/0,b=-1/0,g=1/0,S=-1/0;for(const T of o){const A=Number(T?.count8)||0,E=Number(T?.count6)||0,j=n-(A*8+E*6),_=Math.floor(j/4),O=j%4>=2?1:0,F=A+E+_+O,D=A*8+E*6+_*4+O*2;l=Math.min(l,A),c=Math.max(c,A),u=Math.min(u,E),d=Math.max(d,E),f=Math.min(f,_),h=Math.max(h,_),C=Math.min(C,O),p=Math.max(p,O),y=Math.min(y,F),b=Math.max(b,F),g=Math.min(g,D),S=Math.max(S,D)}const M=document.getElementById("result8"),x=document.getElementById("result6"),N=document.getElementById("result4"),P=document.getElementById("result2"),w=document.getElementById("resultTotalTypes"),I=document.getElementById("resultTotalCards");M&&(M.textContent=tr(l,c)),x&&(x.textContent=tr(u,d)),N&&(N.textContent=tr(f,h)),P&&(P.textContent=tr(C,p)),w&&(w.textContent=tr(y,b)),I&&(I.textContent=tr(g,S))}function ra(e){if(!Array.isArray(e)||e.length===0)return;const t=new Map;for(const u of e)if(Array.isArray(u))for(const d of u){const f=Tn(d);f!==null&&t.set(f,(t.get(f)||0)+1)}const n=u=>{let d=0;return t.forEach(f=>{f===u&&d++}),d};let r=0;t.forEach(u=>{r+=u});const a=document.getElementById("result8"),o=document.getElementById("result6"),i=document.getElementById("result4"),s=document.getElementById("result2"),l=document.getElementById("resultTotalTypes"),c=document.getElementById("resultTotalCards");a&&(a.textContent=String(n(8))),o&&(o.textContent=String(n(6))),i&&(i.textContent=String(n(4))),s&&(s.textContent=String(n(2))),l&&(l.textContent=String(t.size)),c&&(c.textContent=String(r))}function co(){Ki(),Zt({restoreBoard:!1,silent:!0}),yn(),ue={};const e=parseInt(document.getElementById("width").value)||8,t=parseInt(document.getElementById("height").value)||12;if(e<6||e>10||t<6||t>14){alert("尺寸请设置在：宽度 6-10，高度 6-14");return}const n=document.getElementById("btnExportSingle");n&&(n.style.background=""),Vn(),Rg(e,t);const r=pt();r.width=e,r.height=t;const a=document.getElementById("board");if(a){a.innerHTML="",Mc(a,e),k=[];for(let o=0;o<t;o++){k[o]=[];for(let i=0;i<e;i++){k[o][i]=Ce;const s=document.createElement("div");s.className="cell",s.id=`cell-${o}-${i}`,s.dataset.boardRow=String(o),s.dataset.boardCol=String(i),a.appendChild(s)}}r.boardData=k,ya(),Br(),Rn(we),wr(),yt(),wc(),Lt(),setTimeout(Ke,100)}}function Pu(){if(Ki(),Zt({restoreBoard:!1,silent:!0}),yn(),Nr(null),!k||k.length===0)return;ue={};const e=parseInt(document.getElementById("width").value)||8,t=parseInt(document.getElementById("height").value)||12,n=document.getElementById("btnExportSingle");n&&(n.style.background="");for(let r=0;r<t;r++)if(k[r])for(let a=0;a<e;a++){k[r][a]=Ce;const o=document.getElementById(`cell-${r}-${a}`);o&&(o.className="cell",o.innerHTML="")}lt=[],un(),yt(),Br(),ya(),Rn(we)}function yn(){bt=null,xu(),Nu();const e=document.getElementById("btnStepGenerate");e&&(e.textContent="分步生成")}function Tp(e,t){const n=[];let r=[];for(const l of e)l.firstInGroup&&r.length>0&&(n.push(r),r=[]),r.push(l);if(r.length>0&&n.push(r),n.length<=1)return n;const a=gm(t),o=n.map((l,c)=>{let u=null;for(const d of l){const f=a?d.groupRow:d.groupCol;if(f!=null){u=f;break}}return{group:l,originalIndex:c,axisIndex:u}}),i=[o[0]],s=new Set([o[0].originalIndex]);for(;i.length<o.length;){const l=i.map(u=>u.axisIndex).filter(u=>u!=null);let c=null;for(const u of o){if(s.has(u.originalIndex))continue;let d=Number.POSITIVE_INFINITY,f=!1;if(l.length>0&&u.axisIndex!==null&&u.axisIndex!==void 0)for(const h of l){const C=Math.abs(u.axisIndex-h);C<d&&(d=C),C===1&&(f=!0)}if(!c){c={candidate:u,isAdjacent:f,minGap:d};continue}if(f&&!c.isAdjacent){c={candidate:u,isAdjacent:f,minGap:d};continue}if(f===c.isAdjacent){if(d<c.minGap){c={candidate:u,isAdjacent:f,minGap:d};continue}d===c.minGap&&u.originalIndex<c.candidate.originalIndex&&(c={candidate:u,isAdjacent:f,minGap:d})}}if(!c)break;i.push(c.candidate),s.add(c.candidate.originalIndex)}return i.map(l=>l.group)}function Dp(e,t){const n=t===1?e?.initialPosition1:e?.initialPosition2;if(n&&Number.isInteger(n.row)&&Number.isInteger(n.col))return{i:n.row,j:n.col};const r=t===1?"row1":"row2",a=t===1?"col1":"col2",o=Math.trunc(Number(e?.[r])),i=Math.trunc(Number(e?.[a]));return!Number.isInteger(o)||!Number.isInteger(i)?null:{i:o,j:i}}function Ep(e,t){if(!Array.isArray(e)||e.length===0)return[];const n=Array.isArray(t)?t.length:0,r=n>0&&Array.isArray(t[0])?t[0].length:0,a=[],o=new Set;for(let i=e.length-1;i>=0;i--){const s=e[i],l=[];for(const c of[1,2]){const u=Dp(s,c);if(!u||u.i<0||u.i>=n||u.j<0||u.j>=r)continue;const d=`${u.i},${u.j}`;o.has(d)||(o.add(d),l.push({i:u.i,j:u.j,firstInGroup:l.length===0}))}l.length>0&&(l.stepMeta={phase:s?.phase||null,waveId:s?.waveId??null,waveRole:s?.waveRole||null,wavePressureType:s?.wavePressureType||null,isSameLayerPair:!!s?.isSameLayerPair,isStuckPair:!!s?.isStuckPair,connectionType:s?.connectionType||""},a.push(l))}return a}function xu(){document.querySelectorAll("[data-rhythm-logic]").forEach(t=>t.classList.remove("rhythm-config-group-active")),Mu(null)}function Mu(e){document.querySelectorAll("[data-rhythm-phase]").forEach(a=>a.classList.remove("rhythm-phase-range-active"));const n=e?.stepMeta?.phase||null;if(n!=="early"&&n!=="middle")return;document.querySelectorAll(`[data-rhythm-phase="${n}"]`).forEach(a=>a.classList.add("rhythm-phase-range-active"))}function Bp(e){const t=e?.stepMeta||{},n=new Set;return(t.phase==="early"||t.phase==="middle")&&n.add("stage"),t.waveId!==null&&t.waveId!==void 0&&n.add("wave"),t.isSameLayerPair&&n.add("placement"),t.isStuckPair&&n.add("stuck"),["直线连接","1拐连接","同向2拐","反向2拐"].includes(t.connectionType)&&n.add("connection"),Array.from(n)}function Rp(e){xu(),Mu(e);const t=Bp(e);for(const n of t){const r=document.querySelector(`[data-rhythm-logic="${n}"]`);r&&r.classList.add("rhythm-config-group-active")}}function Nu(){document.querySelectorAll(".cell.step-generation-recent-pair").forEach(t=>t.classList.remove("step-generation-recent-pair"))}function kp(e){for(const t of e||[]){const n=document.getElementById(`cell-${t.i}-${t.j}`);n&&n.classList.add("step-generation-recent-pair")}}function Fp(e,t){const n=G(e);for(const r of t||[])for(const a of r||[])n[a.i]&&(n[a.i][a.j]=pe);return n}function wu(e,t,n=ue){if(!e)return;const r=ie(t);if(_e(r.baseId)){e.className="cell",e.innerHTML="";return}if(Rt(r.baseId)){e.className="cell filled obstacle-cell",e.innerHTML="";const a=da(r.baseId);if(a){const o=document.createElement("img");o.className="card-image-obstacle",(r.baseId===at||r.baseId===gt||r.baseId===Fe||r.baseId===Le||r.baseId===$e)&&o.classList.add("card-image-obstacle-scale130"),o.src=a,o.alt=String(r.baseId),e.appendChild(o)}return}e.className="cell filled playable-card",e.innerHTML="",e.appendChild(Au(r.baseId,r.attachmentId,n))}function Do(e,t,n){const r=document.getElementById(`cell-${e}-${t}`);wu(r,n)}function Au(e,t=null,n=ue){const r="img/base.png",a=document.createElement("div");a.className="card-image-stack";const o=document.createElement("img");o.className="card-image-base",o.src=r,o.alt="",o.setAttribute("aria-hidden","true");const i=document.createElement("img");if(i.className="card-image-guide",i.src="img/GuideTips.png",i.alt="",i.setAttribute("aria-hidden","true"),a.appendChild(o),a.appendChild(i),e!==pe){const s=document.createElement("img");s.className="card-image-face",e===he?(s.classList.add("card-image-face-bomb"),s.src="img/zhadan.png",s.alt="99"):(s.src=Fi(e,n),s.alt=String(e)),a.appendChild(s)}if(xe.has(t)){const s=Xr(t);if(s){const l=document.createElement("img");l.className="card-image-attachment",t===Ue?l.classList.add("card-image-attachment-fanpai"):t===Ye&&l.classList.add("card-image-attachment-iceshell"),l.src=s,l.alt=String(t*on),a.appendChild(l)}}return a}function Iu(){if(!bt)return;const{groups:e,boardData:t,direction:n}=bt;if(bt.currentStepIndex>=e.length){yn();return}const r=e[bt.currentStepIndex];Rp(r),Nu();for(const o of r){const{i,j:s}=o,l=t[i]?.[s]??0;k[i]||(k[i]=[]),k[i][s]=l,Do(i,s,l)}kp(r),bt.currentStepIndex++,aa(),setTimeout(Ke,100);const a=document.getElementById("btnStepGenerate");a&&(bt.currentStepIndex>=e.length?(a.textContent="分步生成",bt=null):a.textContent=`下一步 (${bt.currentStepIndex}/${e.length})`)}function Ps(e,t=k,n=ue,r={}){const a=[];for(const o of e){const i=Ql(t[o.i]?.[o.j],n,r);i&&a.push({...o,attachmentId:i.attachmentId})}return a}function Lp(e){return!Array.isArray(e)||e.length===0?(alert("当前棋盘没有可重新生成的数字或占位块。"),!1):e.length%2!==0?(alert("可生成格子数量必须为偶数，当前无法生成成对花色。"),!1):!0}function Tu(){const e=document.getElementById("autoBombPairCount"),t=Number(e?.value),n=Number.isFinite(t)?Math.max(0,Math.min(xr,Math.round(t))):0;return e&&e.value!==String(n)&&(e.value=String(n)),n}function $p(e,t,n){const r=Number.isFinite(Number(n))?Math.max(0,Math.min(xr,Math.round(Number(n)))):0;if(r<=0)return{success:!0,appliedPairs:0};if(!Array.isArray(e)||!Array.isArray(t))return{success:!1,appliedPairs:0,message:"自动炸弹生成失败：棋盘数据无效。"};const a=new Map;for(const i of t){const s=Math.trunc(Number(i?.i)),l=Math.trunc(Number(i?.j));if(!Number.isInteger(s)||!Number.isInteger(l))continue;const c=ie(e[s]?.[l]);c.baseId<1||c.baseId>=he||c.baseId===pe||Rt(c.baseId)||(a.has(c.baseId)||a.set(c.baseId,[]),a.get(c.baseId).push({row:s,col:l}))}if(Array.from(a.values()).reduce((i,s)=>i+Math.floor(s.length/2),0)<r)return{success:!1,appliedPairs:0,message:`自动炸弹生成失败：可替换的成对花色不足，当前需要 ${r} 对。`};for(let i=0;i<r;i++){const s=Array.from(a.entries()).filter(([,f])=>f.length>=2),[l,c]=s[Math.floor(Math.random()*s.length)],u=mt(c).slice(0,2),d=new Set(u.map(f=>`${f.row},${f.col}`));for(const f of u){const h=ie(e[f.row]?.[f.col]),C=h.hasAttachment&&xe.has(h.attachmentId)?h.attachmentId:null;e[f.row][f.col]=xe.has(C)?Vt(he,C):he}a.set(l,c.filter(f=>!d.has(`${f.row},${f.col}`)))}return{success:!0,appliedPairs:r}}const yl={easy:{targetPairCount:8,maxPairCount:14,distanceTarget:4,connectionWeights:{直线连接:5,"1拐连接":3,同向2拐:1,反向2拐:.5}},normal:{targetPairCount:6,maxPairCount:10,distanceTarget:6,connectionWeights:{直线连接:3,"1拐连接":4,同向2拐:2,反向2拐:1}},hard:{targetPairCount:4,maxPairCount:7,distanceTarget:9,connectionWeights:{直线连接:1,"1拐连接":2,同向2拐:4,反向2拐:5}}};function _p(e,t="normal"){const n=yl[t]?t:"normal",r=String(e||n).trim().toLowerCase();return yl[r]?r:n}function jt(e,t,n,r){const a=document.getElementById(e),o=Number(a?.value),i=Number.isFinite(Number(t))?Number(t):0,s=Number.isFinite(Number(n))?Number(n):-1/0,l=Number.isFinite(Number(r))?Number(r):1/0,c=Number.isFinite(o)?o:i,u=Math.max(s,Math.min(l,c));return a&&String(a.value)!==String(u)&&(a.value=String(u)),u}function La(e,t,n,r,a){const o=Array.isArray(n)?n:[r,a],i=jt(e,o[0],r,a),s=jt(t,o[1],r,a);return[Math.min(i,s),Math.max(i,s)]}function Du(){const e=Wn.early,t=Wn.middle,n=La("rhythmEarlyPairMin","rhythmEarlyPairMax",e.pairCountRange,1,99),r=La("rhythmEarlyDistanceMin","rhythmEarlyDistanceMax",e.distanceRange,1,99),a=La("rhythmMiddlePairMin","rhythmMiddlePairMax",t.pairCountRange,1,99),o=La("rhythmMiddleDistanceMin","rhythmMiddleDistanceMax",t.distanceRange,1,99),i=jt("rhythmSameLayerChance",.5,0,1),s=jt("rhythmStuckPairChance",0,0,1),l=Math.round(jt("rhythmStuckPairCount",0,0,99)),c={直线连接:jt("rhythmWeightStraight",2.5,0,20),"1拐连接":jt("rhythmWeightOneTurn",4,0,20),同向2拐:jt("rhythmWeightSameTwoTurn",3,0,20),反向2拐:jt("rhythmWeightReverseTwoTurn",2,0,20)};return{waveCountMin:0,waveCountMax:0,sameLayerChance:i,stuckPairChance:s,stuckPairCount:l,phaseConfigs:{early:{pairCountRange:n,distanceRange:r,nextPairCountRange:n,typeWeights:e.typeWeights},middle:{pairCountRange:a,distanceRange:o,nextPairCountRange:a,typeWeights:c}}}}const bl=1,Wn={early:{pairCountRange:[8,18],distanceRange:[1,7],typeWeights:{直线连接:5,"1拐连接":4,同向2拐:1.5,反向2拐:1},nextPairCountRange:[8,20]},middle:{pairCountRange:[4,12],distanceRange:[3,12],typeWeights:{直线连接:2.5,"1拐连接":4,同向2拐:3,反向2拐:2},nextPairCountRange:[4,14]},late:{pairCountRange:[1,999],distanceRange:[1,999],typeWeights:{直线连接:1,"1拐连接":1,同向2拐:1,反向2拐:1},nextPairCountRange:[1,999]}};function ja(e,t){const n=Array.isArray(t)?t:[0,999],r=Number(Array.isArray(e)?e[0]:NaN),a=Number(Array.isArray(e)?e[1]:NaN),o=Number.isFinite(r)?r:n[0],i=Number.isFinite(a)?a:n[1];return[Math.min(o,i),Math.max(o,i)]}function Qo(e,t={}){const n=Wn[e]||Wn.middle,r=t&&typeof t=="object"?t:{},a={...n.typeWeights,...r.typeWeights||{}};return{pairCountRange:ja(r.pairCountRange,n.pairCountRange),distanceRange:ja(r.distanceRange,n.distanceRange),nextPairCountRange:ja(r.nextPairCountRange,n.nextPairCountRange||n.pairCountRange),typeWeights:a}}function Op(e={}){const t=e.phaseConfigs||{};return{waveCountMin:Number.isFinite(Number(e.waveCountMin))?Math.max(0,Math.min(3,Math.floor(Number(e.waveCountMin)))):0,waveCountMax:Number.isFinite(Number(e.waveCountMax))?Math.max(0,Math.min(3,Math.floor(Number(e.waveCountMax)))):3,phases:{early:Qo("early",t.early),middle:Qo("middle",t.middle),late:Qo("late",t.late)}}}function Eu(e,t={}){const n=Math.max(0,Math.floor(Number(e)||0));if(n<=0)return[];const r=Op(t),a=Math.max(1,Math.floor(n*.15)),o=Math.max(a+1,Math.floor(n*.65));return Array.from({length:n},(s,l)=>{const c=l<a?"early":l<o?"middle":"late";return{stepIndex:l,phase:c,waveId:null,waveRole:null,wavePressureType:null,config:r.phases[c]}})}function Hp(e,t){const n=G(e),r=e.map(i=>Array(i.length).fill(null)),a=new Map;let o=1;for(const i of t||[]){const s=Math.trunc(Number(i?.i)),l=Math.trunc(Number(i?.j));!Number.isInteger(s)||!Number.isInteger(l)||!n[s]||(n[s][l]=xe.has(i.attachmentId)?Vt(bl,i.attachmentId):bl,r[s][l]=o,a.set(o,{row:s,col:l}),o++)}return{boardData:n,tokenBoard:r,initialTokenPositions:a}}function Bu(e){const t=[];if(!Array.isArray(e))return t;for(let n=0;n<e.length;n++){const r=e[n];if(Array.isArray(r))for(let a=0;a<r.length;a++){const o=r[a];!Number.isInteger(o)||o<=0||t.push({row:n,col:a,token:o})}}return t}function Cl(e,t,n,r){const a=Math.trunc(Number(e)),o=Math.trunc(Number(t)),i=Math.trunc(Number(n)),s=Math.trunc(Number(r));return!Number.isInteger(a)||!Number.isInteger(o)||!Number.isInteger(i)||!Number.isInteger(s)||i<=0||s<=0||a<0||o<0||a>=s||o>=i?null:Math.min(a,o,s-1-a,i-1-o)+1}function Wp(e,t,n,r){if(!t||typeof t.get!="function")return null;const a=e?.candidate,o=t.get(a?.token1),i=t.get(a?.token2);if(!o||!i)return null;const s=Cl(o.row,o.col,n,r),l=Cl(i.row,i.col,n,r);return s===null||l===null?null:s===l}function jp(e,t,n,r,a){if(!Array.isArray(e)||e.length===0)return[];const o=e.filter(i=>Wp(i,t,n,r)===!!a);return o.length>0?o:e}function Gp(e,t,n){return!Array.isArray(e)||e.length===0?[]:!Array.isArray(t)||t.length===0?[]:!n||typeof n.get!="function"?[]:e.filter(r=>{const a=r?.candidate,o=n.get(a?.token1),i=n.get(a?.token2);if(!o||!i)return!1;const s=At(t,o.row,o.col,i.row,i.col);return!Array.isArray(s)||s.length<2})}function Sl(e,t,n={}){const r=Bu(t).filter(u=>ce(e[u.row]?.[u.col])!==null),a=Number.isFinite(Number(n.exhaustiveLimit))?Math.max(4,Math.floor(Number(n.exhaustiveLimit))):44,o=Number.isFinite(Number(n.maxRandomChecks))?Math.max(24,Math.floor(Number(n.maxRandomChecks))):900,i=[],s=new Set,l=(u,d)=>{if(u===d)return;const f=Math.min(u,d),h=Math.max(u,d),C=`${f},${h}`;if(s.has(C))return;s.add(C);const p=r[f],y=r[h],b=At(e,p.row,p.col,y.row,y.col);if(!Array.isArray(b)||b.length<2)return;const g=pn(b);i.push({row1:p.row,col1:p.col,row2:y.row,col2:y.col,token1:p.token,token2:y.token,connectionType:g,distance:Ao(b)||0})};if(r.length<=a){for(let u=0;u<r.length-1;u++)for(let d=u+1;d<r.length;d++)l(u,d);return i}const c=r.length*(r.length-1)/2;for(let u=0;u<o&&s.size<c;u++){const d=Math.floor(Math.random()*r.length);let f=Math.floor(Math.random()*(r.length-1));f>=d&&f++,l(d,f)}if(i.length>0)return i;for(let u=0;u<r.length-1;u++)for(let d=u+1;d<r.length;d++)if(l(u,d),i.length>=24)return i;return i}function Ga(e,t){const n=Number(e);if(!Number.isFinite(n))return 999;const[r,a]=ja(t,[0,999]);return n<r?r-n:n>a?n-a:0}function zp(e,t){const n=t?.config?.distanceRange;return Array.isArray(n)?Ga(e?.distance,n)===0:!0}function qp(e,t,n,r){return t?.phase!=="middle"||Math.max(0,Math.floor(Number(r)||0))<=Math.max(0,Math.floor(Number(n)||0))||!Array.isArray(e)||e.length===0?!1:!e.some(a=>zp(a,t))}function vl(e,t,n,r){const a=G(e),o=t.map(s=>[...s]),i=Dr(a,o,r);return zn(a,o,i),gn(a,n,o),{boardData:a,tokenBoard:o}}function Vp(e){const t=e?.config||Wn.middle;return{pairCountRange:[...t.pairCountRange],distanceRange:[...t.distanceRange],nextPairCountRange:[...t.nextPairCountRange],typeWeights:{...t.typeWeights}}}function Pl(e,t){const n=Vp(t.stageEntry),r=Number(t.currentPairCount)||0,a=Number(t.nextPairCount)||0,o=Ga(r,n.pairCountRange)+Ga(a,n.nextPairCountRange)*.8,i=Ga(e.distance,n.distanceRange),s=Number(n.typeWeights?.[e.connectionType])||0,l=t.stageEntry?.phase==="late"?Math.random()*6:0;return s*4+l+Math.random()*.75-o*1.8-i*1.25}function Up(e,t={}){if(!Array.isArray(e)||e.length===0)return{success:!1,message:"抽象棋盘为空。"};const n=Number.isFinite(Number(t.direction))?Math.max(0,Math.min(8,Math.round(Number(t.direction)))):0,r=Array.isArray(t.targetOrder)?t.targetOrder:[];if(r.length===0||r.length%2!==0)return{success:!1,message:"抽象轨迹目标格数量必须为正偶数。"};const a=r.length/2,o=Array.isArray(t.stagePlan)&&t.stagePlan.length>=a?t.stagePlan:Eu(a,t),i=Number.isFinite(Number(t.maxSearchAttempts))?Math.max(1,Math.floor(Number(t.maxSearchAttempts))):8,s=Number.isFinite(Number(t.candidateBranchLimit))?Math.max(1,Math.floor(Number(t.candidateBranchLimit))):10,l=Number.isFinite(Number(t.sameLayerChance))?Math.max(0,Math.min(1,Number(t.sameLayerChance))):0,c=Number.isFinite(Number(t.stuckPairChance))?Math.max(0,Math.min(1,Number(t.stuckPairChance))):0,u=Number.isFinite(Number(t.stuckPairCount))?Math.max(0,Math.floor(Number(t.stuckPairCount))):0,d=e.length,f=e[0]?.length||0;for(let h=0;h<i;h++){const C=Hp(e,r),p=[];let y=C.boardData,b=C.tokenBoard,g=!1,S=0;for(let M=0;M<a;M++){const x=Sl(y,b,{exhaustiveLimit:28,maxRandomChecks:220});if(x.length===0){g=!0;break}const N=o[M]||o[o.length-1];let P=null,w=!1,I=!1;const T=qp(x,N,S,u);if(N?.phase==="middle"&&S<u&&(T||c>0&&Math.random()<c)){const j=Gp(x.map(_=>({candidate:_,score:0})),C.boardData,C.initialTokenPositions);if(j.length>0){const _=mt(j).slice(0,Math.min(s,j.length)),O=_[Math.floor(Math.random()*_.length)];O?.candidate&&(P={candidate:O.candidate,nextState:vl(y,b,n,O.candidate)}),w=!0}}if(!P){const j=x.map(H=>({candidate:H,score:Pl(H,{stageEntry:N,currentPairCount:x.length,nextPairCount:x.length})})).sort((H,L)=>L.score-H.score).slice(0,Math.min(8,x.length)),_=[];for(const{candidate:H}of j){const L=vl(y,b,n,H),U=Sl(L.boardData,L.tokenBoard,{exhaustiveLimit:22,maxRandomChecks:36}).length;_.push({candidate:H,nextState:L,score:Pl(H,{stageEntry:N,currentPairCount:x.length,nextPairCount:U})})}_.sort((H,L)=>L.score-H.score);const O=l>0&&Math.random()<l,F=l>0?jp(_,C.initialTokenPositions,f,d,O):_;I=O&&F!==_;const D=F.slice(0,Math.min(s,F.length));P=D[Math.floor(Math.random()*D.length)]}if(!P){g=!0;break}const{candidate:E}=P;w&&S++,p.push({row1:E.row1,col1:E.col1,row2:E.row2,col2:E.col2,token1:E.token1,token2:E.token2,connectionType:E.connectionType,distance:E.distance,generationSource:"rhythm-abstract-trace",phase:N?.phase||"middle",waveId:N?.waveId??null,waveRole:N?.waveRole||null,wavePressureType:N?.wavePressureType||null,isSameLayerPair:I,isStuckPair:w}),y=P.nextState.boardData,b=P.nextState.tokenBoard}if(!g&&Bu(b).length===0)return{success:!0,solutionTrace:p,stagePlan:o,initialTokenPositions:C.initialTokenPositions}}return{success:!1,message:"抽象节奏轨迹规划失败。"}}function Yp(e){if(!(e instanceof Set))return null;let t=1;for(;t<he&&(e.has(t)||t===pe);)t++;return t>=he?null:(e.add(t),t)}function Kp(e,t,n=null){const r=Array.isArray(t)?t.length:0,a=mt((Array.isArray(e)?e:[]).filter(c=>Number.isInteger(c)&&c>0));if(r<=0)return a;const o=new Set(a);n instanceof Set&&n.forEach(c=>{Number.isInteger(c)&&c>0&&o.add(c)});const i=new Map;for(const c of a)i.set(c,(i.get(c)||0)+1);const s=[...a],l=Array(r).fill(null);for(let c=0;c<r;c++){if(!t[c]?.isStuckPair)continue;const d=s.findIndex(f=>i.get(f)===1);d<0||(l[c]=s.splice(d,1)[0])}for(let c=0;c<r;c++){if(!t[c]?.isStuckPair||l[c]!==null)continue;const d=Yp(o);d!==null&&(l[c]=d)}for(let c=0;c<r;c++)l[c]===null&&(l[c]=s.shift()??a[a.length-1]??1);return l}function Xp(e,t,n,r,a=null){const o=G(e);for(const s of t||[])o[s.i]&&(o[s.i][s.j]=Ce);const i=Kp(r,n,a);for(let s=0;s<n.length;s++){const l=n[s],c=i[s];if(!Number.isInteger(c)||c<=0)continue;const u=l.initialPosition1,d=l.initialPosition2;!u||!d||!o[u.row]||!o[d.row]||(o[u.row][u.col]=c,o[d.row][d.col]=c,l.baseId=c)}return o}function Ru(e,t={}){if(!Array.isArray(e)||e.length===0)return{success:!1,message:"棋盘数据为空。"};const n=e.length,r=e[0]?.length||0;if(r<=0)return{success:!1,message:"棋盘宽度无效。"};if(!e.every(p=>Array.isArray(p)&&p.length===r))return{success:!1,message:"棋盘数据必须是规则二维数组。"};const o=Number.isFinite(Number(t.direction))?Math.max(0,Math.min(8,Math.round(Number(t.direction)))):0,i=Number.isFinite(Number(t.autoBombPairCount))?Math.max(0,Math.min(xr,Math.round(Number(t.autoBombPairCount)))):0,s=xs(r,n,o),l=dt(t.manualFaceBindings,e),c=Ps(s,e,l,{includeBombs:i>0});if(!Array.isArray(c)||c.length===0)return{success:!1,message:"当前棋盘没有可重新生成的数字或占位块。"};if(c.length%2!==0)return{success:!1,message:"可生成格子数量必须为偶数。"};const u=Number.isFinite(Number(t.count8))?Math.max(0,Math.floor(Number(t.count8))):0,d=Number.isFinite(Number(t.count6))?Math.max(0,Math.floor(Number(t.count6))):0,f=Jp(c.length,u,d,li(l));if(!f.success)return f;const h=Number.isFinite(Number(t.maxAttempts))?Math.max(1,Math.floor(Number(t.maxAttempts))):10;let C="";for(let p=0;p<h;p++){const y=Eu(c.length/2,t),b=Up(e,{...t,direction:o,targetOrder:c,stagePlan:y,maxSearchAttempts:1});if(!b.success){C=b.message||"节奏轨迹规划失败。";continue}const g=b.solutionTrace.map(I=>{const T=b.initialTokenPositions.get(I.token1),A=b.initialTokenPositions.get(I.token2);return{...I,initialPosition1:T,initialPosition2:A}}),S=Xp(e,c,g,f.pairNumbers,li(l)),M=xl(S,o,g);if(!M.success){C=M.message||"节奏轨迹真实验证失败。";continue}const{attachmentMap:x}=Zp(c),N=Qp(S,x),P=xl(N,o,g);if(!P.success){C=P.message||"附着机关轨迹验证失败。";continue}const w=$p(N,c,i);if(!w.success){C=w.message||"自动炸弹生成失败。";continue}return Qe=f.pool.map(I=>({...I})),lt=mt(f.cards),{success:!0,boardData:N,direction:o,generatedCellCount:c.length,targetOrder:c,solutionTrace:g,generationStrategy:"rhythm-abstract-trace",usedStableAdjacentFallback:!1,pool:f.pool,stagePlan:y}}return{success:!1,message:C||"节奏生成未找到可用解，请调整棋盘尺寸或数字配置。"}}function Jp(e,t=null,n=null,r=null){const a=Number.isInteger(e)&&e>0?e:0;if(a<=0||a%2!==0)return{success:!1,message:"可生成格子数量必须为正偶数。"};const o=Number.isFinite(Number(t))?Math.max(0,Math.floor(Number(t))):0,i=Number.isFinite(Number(n))?Math.max(0,Math.floor(Number(n))):0,s=o*8+i*6;if(s>a)return{success:!1,message:"8张/6张数量超过可生成格子数量。"};const l=a-s,c=Math.floor(l/4),u=l%4>=2?1:0,d=r instanceof Set?new Set(Array.from(r).map(g=>Number(g))):new Set,f=[];let h=1;const C=()=>{for(;h<he&&(d.has(h)||h===pe);)h++;if(h>=he)return null;const g=h;return h++,g},p=(g,S)=>{for(let M=0;M<g;M++){const x=C();if(x===null)return!1;f.push({number:x,count:S})}return!0};if(!p(o,8)||!p(i,6)||!p(c,4)||!p(u,2))return{success:!1,message:"可用花色ID不足，无法生成。"};const y=[],b=[];for(const g of f){for(let S=0;S<g.count;S++)y.push(g.number);for(let S=0;S<Math.floor(g.count/2);S++)b.push(g.number)}return y.length!==a?{success:!1,message:"数字池与可生成格子数量不匹配。"}:{success:!0,pool:f,cards:mt(y),pairNumbers:mt(b)}}function Zp(e){const t=new Set,n=new Map;for(const r of e||[]){const a=Math.trunc(Number(r?.i)),o=Math.trunc(Number(r?.j));if(!Number.isInteger(a)||!Number.isInteger(o))continue;const i=`${a},${o}`;t.add(i),n.set(i,xe.has(r.attachmentId)?r.attachmentId:null)}return{targetKeySet:t,attachmentMap:n}}function Qp(e,t){const n=G(e);return t instanceof Map&&t.forEach((r,a)=>{if(!xe.has(r))return;const[o,i]=String(a).split(","),s=Number(o),l=Number(i),c=ie(n[s]?.[l]);!kt(c.baseId)||c.baseId===pe||(n[s][l]=Vt(c.baseId,r))}),n}function eg(e,t,n){const r=G(e),a=ce(r[n.row1]?.[n.col1]);if(a===null)return{success:!1,boardData:r};const o=Dr(r,null,n);return zn(r,null,o),a===he&&Pa(r,null),gn(r,t,null),{success:!0,boardData:r}}function At(e,t,n,r,a){return ds(e,t,n,r,a,2)}function xl(e,t,n){if(!Array.isArray(e)||e.length===0)return{success:!1,cleared:!1,message:"棋盘数据为空。"};if(!Array.isArray(n))return{success:!1,cleared:!1,message:"解法轨迹无效。"};const r=G(e);for(let o=0;o<n.length;o++){const i=n[o],s={row1:Math.trunc(Number(i?.row1)),col1:Math.trunc(Number(i?.col1)),row2:Math.trunc(Number(i?.row2)),col2:Math.trunc(Number(i?.col2))},l=ce(r[s.row1]?.[s.col1]),c=ce(r[s.row2]?.[s.col2]);if(l===null||c===null||l!==c)return{success:!1,cleared:!1,message:`第${o+1}步不是可消同牌。`};if(!Io(r,s.row1,s.col1,s.row2,s.col2))return{success:!1,cleared:!1,message:`第${o+1}步不满足连连看路径。`};const u=eg(r,t,s);if(!u.success)return{success:!1,cleared:!1,message:`第${o+1}步模拟失败。`};r.splice(0,r.length,...u.boardData)}const a=Oe(r);return{success:a,cleared:a,message:a?"":"解法轨迹执行完后仍有可消牌。"}}function ku(e){const t=parseInt(document.getElementById("width")?.value,10)||8,n=parseInt(document.getElementById("height")?.value,10)||12,r=xs(t,n,e),a=Tu(),o=Ps(r,k,ue,{includeBombs:a>0});if(!Lp(o))return null;const{count8Range:i,count6Range:s}=To(),l=vu(o.length,i,s);if(!l)return alert("数字配置区间无可用组合，请调整8张/6张min-max。"),null;const c=G(k),u=Ru(k,{direction:e,count8:l.count8,count6:l.count6,manualFaceBindings:ue,autoBombPairCount:a,...Du()});if(!u.success)return alert(u.message||"反向生成失败，请调整数字配置。"),null;const d=Tp(o,e);return{boardBefore:c,boardAfter:u.boardData,groups:d,solutionTrace:u.solutionTrace}}function tg(e,t={}){if(!Array.isArray(e)||e.length===0)return{success:!1,message:"棋盘数据为空。"};const n=e.length,r=e[0]?.length||0;if(r<=0)return{success:!1,message:"棋盘宽度无效。"};if(!e.every(C=>Array.isArray(C)&&C.length===r))return{success:!1,message:"棋盘数据必须是规则二维数组。"};const o=Number.isFinite(Number(t.direction))?Math.round(Number(t.direction)):0,i=Math.max(0,Math.min(8,o)),s=xs(r,n,i),l=dt(t.manualFaceBindings,e),c=Number.isFinite(Number(t.autoBombPairCount))?Math.max(0,Math.min(xr,Math.round(Number(t.autoBombPairCount)))):0,u=Ps(s,e,l,{includeBombs:c>0});if(!Array.isArray(u)||u.length===0)return{success:!1,message:"当前棋盘没有可重新生成的数字或占位块。"};if(u.length%2!==0)return{success:!1,message:"可生成格子数量必须为偶数。"};const d=Number.isFinite(Number(t.count8))?Math.max(0,Math.floor(Number(t.count8))):null,f=Number.isFinite(Number(t.count6))?Math.max(0,Math.floor(Number(t.count6))):null,h=Ru(e,{direction:i,count8:d,count6:f,manualFaceBindings:l,autoBombPairCount:c,difficulty:t.difficulty||"normal",waveCountMin:t.waveCountMin,waveCountMax:t.waveCountMax,sameLayerChance:t.sameLayerChance,stuckPairChance:t.stuckPairChance,stuckPairCount:t.stuckPairCount,phaseConfigs:t.phaseConfigs,maxAttempts:t.maxAttempts,maxCandidateChecks:t.maxCandidateChecks,maxCandidates:t.maxCandidates});return h.success?{success:!0,boardData:h.boardData,direction:i,generatedCellCount:u.length,solutionTrace:h.solutionTrace}:h}function ng(){if(Zt({restoreBoard:!1,silent:!0}),Li(),parseInt(document.getElementById("width").value),parseInt(document.getElementById("height").value),!Mr("分步生成"))return;const e=parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10),t=ku(e);if(!t)return;const n=Ep(t.solutionTrace,t.boardAfter),r=n.length>0?n:t.groups;if(k=Fp(t.boardBefore,r),un(),_n(k),bt={boardData:t.boardAfter,groups:r,currentStepIndex:0,direction:e},r.length===0){yn();return}Iu()}function rg(){if(!bt){ng();return}Iu()}function Fu(){if(Zt({restoreBoard:!1,silent:!0}),yn(),Nr(null),Li(),parseInt(document.getElementById("width").value),parseInt(document.getElementById("height").value),!Mr("生成"))return;const e=parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10),t=document.getElementById("btnExportSingle");t&&(t.style.background="");const n=ku(e);if(!n)return;k=G(n.boardAfter),un(),_n(k);const r=yf(k,e);ra(k),aa(),setTimeout(Ke,100),vs(100,{copyResult:!1,progressButtonId:"btnFillBoard",showProgressLabel:!1}).then(a=>{!a||!r||bf(r,a.winRate,a.initialPairCount)})}function Br(){const e=document.getElementById("levelStatsSimulation");e&&(e.textContent="-")}function aa(e){const t=document.getElementById("levelStatsSimulation");t&&(t.textContent="-")}function mt(e){const t=[...e];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}function xs(e,t,n){const r=[],a=new Set,o=(s,l,c,u,d)=>{const f=`${s},${l}`;a.has(f)||(r.push({i:s,j:l,prevI:null,prevJ:null,firstInGroup:c,groupCol:u,groupRow:d}),a.add(f))},i=(s,l,c,u,d,f)=>{const h=c?[[s,l-1],[s,l+1]]:[[s-1,l],[s+1,l]];for(const[C,p]of h)if(C>=0&&C<t&&p>=0&&p<e){const y=`${C},${p}`;a.has(y)||(r.push({i:C,j:p,prevI:s,prevJ:l,firstInGroup:!1,groupCol:d,groupRow:f}),a.add(y))}};switch(n){case 0:{const s=mt(Array.from({length:e},(l,c)=>c));for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<t;u++)o(u,c,u===0,c,null),u<t-1&&i(u,c,!1,!1,c,null)}break}case 1:{for(let s=0;s<e;s++)for(let l=t-1;l>=0;l--){const c=l===t-1;o(l,s,c,s,null),l>0&&i(l,s,!1,!1,s,null)}break}case 2:{for(let s=0;s<e;s++)for(let l=0;l<t;l++)o(l,s,l===0,s,null),l<t-1&&i(l,s,!1,!1,s,null);break}case 3:{const s=mt(Array.from({length:t},(l,c)=>c));for(let l=0;l<s.length;l++){const c=s[l];for(let u=e-1;u>=0;u--){const d=u===e-1;o(c,u,d,null,c),u>0&&i(c,u,!0,!1,null,c)}}break}case 4:{const s=mt(Array.from({length:t},(l,c)=>c));for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<e;u++)o(c,u,u===0,null,c),u<e-1&&i(c,u,!0,!1,null,c)}break}case 5:{const s=[...Array(e).keys()].sort((l,c)=>Math.abs(l-e/2)-Math.abs(c-e/2)).reverse();for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<t;u++)o(u,c,u===0,c,null),u<t-1&&i(u,c,!1,!1,c,null)}break}case 6:{const s=[...Array(t).keys()].sort((l,c)=>Math.abs(l-t/2)-Math.abs(c-t/2)).reverse();for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<e;u++)o(c,u,u===0,null,c),u<e-1&&i(c,u,!0,!1,null,c)}break}case 7:{const s=[...Array(e).keys()].sort((l,c)=>Math.abs(l-e/2)-Math.abs(c-e/2));for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<t;u++)o(u,c,u===0,c,null),u<t-1&&i(u,c,!1,!1,c,null)}break}case 8:{const s=[...Array(t).keys()].sort((l,c)=>Math.abs(l-t/2)-Math.abs(c-t/2));for(let l=0;l<s.length;l++){const c=s[l];for(let u=0;u<e;u++)o(c,u,u===0,null,c),u<e-1&&i(c,u,!0,!1,null,c)}break}}return r}function Mi(e,t=0){const n=Number.isFinite(Number(t))?Math.max(0,Math.floor(Number(t))):0,r=document.getElementById(e);if(!r)return n;const a=Number(r.value);let o=Number.isFinite(a)?Math.max(0,Math.floor(a)):n;const i=Number(r.max);return Number.isFinite(i)&&i>=0&&(o=Math.min(o,Math.floor(i))),r.value!==String(o)&&(r.value=String(o)),o}function ag(){const e=parseInt(document.getElementById("width")?.value,10)||8,t=parseInt(document.getElementById("height")?.value,10)||12,{count8Range:n,count6Range:r}=To(),o=[e,t,n[0],n[1],r[0],r[1]].join("	");navigator.clipboard.writeText(o).then(()=>{const i=document.getElementById("info");i&&(i.textContent="配置数值已复制到剪贴板（TAB分隔）")}).catch(i=>{console.error("Failed to export config:",i),alert("配置导出失败，请手动复制。")})}function og(){const e=wa(),t=parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10),n=dt(ue,e),r=Object.keys(n).length>0?{boardData:e,direction:Number.isFinite(t)?t:0,manualFaceBindings:n}:e,a=JSON.stringify(r);navigator.clipboard.writeText(a).then(()=>{const o=document.getElementById("btnExportSingle");o&&(o.style.background="rgba(150, 150, 150, 0.6)",o.style.cursor="pointer")}).catch(()=>{alert("复制失败，请手动复制")})}function Jt(e){if(!Array.isArray(e)||e.length===0||!Array.isArray(e[0])||e[0].length===0)return null;const t=e[0].length,n=[];for(const r of e){if(!Array.isArray(r)||r.length!==t)return null;const a=r.map(o=>{const i=Number(o);return Number.isFinite(i)?Math.trunc(i):Ce});n.push(a)}return n}function ig(e){if(Array.isArray(e)){if(e.length>0&&Array.isArray(e[0]))return{boardData:e,direction:null,manualFaceBindings:{}};if(e.length>0&&e[0]&&typeof e[0]=="object"){const t=e[0];if(Array.isArray(t.zhenxing)||Array.isArray(t.board)||Array.isArray(t.boardData))return{boardData:t.zhenxing||t.board||t.boardData,direction:Number(t.fangxiang??t.direction),manualFaceBindings:t.manualFaceBindings||{}}}}if(e&&typeof e=="object"){if(Array.isArray(e.zhenxing)||Array.isArray(e.board)||Array.isArray(e.boardData))return{boardData:e.zhenxing||e.board||e.boardData,direction:Number(e.fangxiang??e.direction),manualFaceBindings:e.manualFaceBindings||{}};if(Array.isArray(e.levels)&&e.levels.length>0){const t=e.levels[0];if(t&&(Array.isArray(t.zhenxing)||Array.isArray(t.board)||Array.isArray(t.boardData)))return{boardData:t.zhenxing||t.board||t.boardData,direction:Number(t.fangxiang??t.direction),manualFaceBindings:t.manualFaceBindings||{}}}}return null}function sg(e){if(typeof e!="string")return null;const t=e.trim();if(!t)return null;const n=s=>{try{const l=JSON.parse(s);return ig(l)}catch{return null}},r=n(t);if(r)return r;const a=t.split("	");for(const s of a){const l=n(s.trim());if(l)return l}const o=t.indexOf("[["),i=t.lastIndexOf("]]");if(o!==-1&&i!==-1&&i>o){const s=t.slice(o,i+2),l=n(s);if(l)return l}return null}async function lg(){if(Et||ut||Pt){alert("当前有任务进行中，请稍后再试。");return}if(!navigator.clipboard||typeof navigator.clipboard.readText!="function"){alert("当前环境不支持读取剪贴板。");return}let e="";try{e=await navigator.clipboard.readText()}catch(i){console.error("Failed to read clipboard:",i),alert("读取剪贴板失败，请检查浏览器权限。");return}const t=sg(e),n=Jt(t?.boardData);if(!n){alert("剪贴板中未找到有效阵型数据。");return}const r=parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10);if(!Ma(n,Number.isFinite(Number(t?.direction))?Number(t.direction):r,t?.manualFaceBindings||{},{levelId:null}))return;const o=document.getElementById("info");o&&(o.textContent=`已读取阵型：${n[0].length}×${n.length}`)}function Ma(e,t=0,n={},r={}){const a=Jt(e);if(!a)return alert("阵型数据无效。"),!1;const o=a.length,i=a[0].length;if(i<6||i>10||o<6||o>14)return alert("读取失败：阵型尺寸超出范围（宽度 6-10，高度 6-14）。"),!1;const s=Number.isFinite(Number(t))?Math.max(0,Math.min(8,Math.round(Number(t)))):0;$i(s),mr("width","widthValue",i,0),mr("height","heightValue",o,0),Vn(),co(),k=G(a);const l=pt();return l.width=i,l.height=o,l.boardData=k,ue=dt(n,a),_n(k),ra(k),aa(),Rn(we),wr(),yt(),Object.prototype.hasOwnProperty.call(r,"levelId")&&Nr(r.levelId),setTimeout(Ke,100),!0}function cg(){if(!Array.isArray(re)||re.length===0)return 1;let e=0;for(const t of re){const n=Number(t?.id);Number.isFinite(n)&&n>e&&(e=Math.floor(n))}return e+1}function Lu(){if(Array.isArray(re))for(let e=0;e<re.length;e++){const t=re[e];!t||typeof t!="object"||(t.id=e+1)}}function Ml(e){if(e==="bomb")return"img/zhadan.png";if(e===`attachment-${Ue}`)return Xr(Ue);if(e===`attachment-${Ye}`)return Xr(Ye);if(String(e).startsWith("obstacle-")){const t=parseInt(String(e).slice(9),10);if(Number.isFinite(t))return da(t)}return""}function Nl(e){return{bomb:"火箭",[`attachment-${Ue}`]:"翻牌附着",[`attachment-${Ye}`]:"冰壳附着",[`obstacle-${at}`]:"石头",[`obstacle-${gt}`]:"木块",[`obstacle-${Nt}`]:"磁铁",[`obstacle-${Fe}`]:"冰块1",[`obstacle-${Le}`]:"冰块2",[`obstacle-${$e}`]:"冰块3"}[e]||`ID:${e}`}function ug(e){const t=new Set;if(!Array.isArray(e))return[];for(const a of e)if(Array.isArray(a))for(const o of a){const i=ie(o);i.baseId===he&&t.add("bomb"),Rt(i.baseId)&&t.add(`obstacle-${i.baseId}`),i.hasAttachment&&xe.has(i.attachmentId)&&t.add(`attachment-${i.attachmentId}`)}const r=["bomb",`attachment-${Ue}`,`attachment-${Ye}`,`obstacle-${at}`,`obstacle-${gt}`,`obstacle-${Nt}`,`obstacle-${Fe}`,`obstacle-${Le}`,`obstacle-${$e}`].filter(a=>t.has(a));return t.forEach(a=>{r.includes(a)||r.push(a)}),r}function dg(e){if(!e||typeof e!="object")return{hasConfig:!1,sourceKeys:[]};const t=["autoSpecialSourceKeys","autoSpecialSources","specialBlock","specialBlocks","special","teshukuai","teshu","特殊块"];for(const n of t)if(Object.prototype.hasOwnProperty.call(e,n))return{hasConfig:!0,sourceKeys:Po(e[n])};return{hasConfig:!1,sourceKeys:[]}}function Eo(e){return fa(e?.autoSpecialSourceKeys)}function $u(e){return xo(Eo(e))}function _u(){return{hasAutoSpecialConfig:!0,autoSpecialSourceKeys:Re?_i():[]}}function Ou(e){if(!Re||!e?.hasAutoSpecialConfig)return null;const t=Eo(e);return an=new Set(t),ln(),ur(),t}function Hu(){const e=document.getElementById("savedLevelSaveMode");return String(e?.value||"layout")==="data"?"data":(e&&e.value!=="layout"&&(e.value="layout"),"layout")}function Wu(e,t=ue,n={}){const r=Jt(e);if(!r)return null;const a=dt(t,r);if(n.saveMode==="data")return{boardData:G(r),manualFaceBindings:dt(a,r)};const o=r.map(i=>i.map(s=>{const l=ie(s);return _e(l.baseId)?Ce:Rt(l.baseId)?l.baseId:rc(l.baseId,a)?l.hasAttachment&&xe.has(l.attachmentId)?Vt(l.baseId,l.attachmentId):l.baseId:l.baseId>=1&&l.baseId<=98?l.hasAttachment&&xe.has(l.attachmentId)?Vt(pe,l.attachmentId):pe:l.hasAttachment&&xe.has(l.attachmentId)?Vt(l.baseId,l.attachmentId):l.baseId}));return{boardData:o,manualFaceBindings:dt(a,o)}}function mg(e,t=null){return e===pe?"img/base.png":Rt(e)?da(e):e===he?"img/zhadan.png":e>=1&&e<=98?Fi(e,t||{}):""}function ju(){const n=document.getElementById("cell-0-0");if(!n)return{width:150,height:162,ratio:162/150};const r=n.getBoundingClientRect(),a=r.width>0?r.width:150,o=r.height>0?r.height:162;return{width:a,height:o,ratio:o/a}}function Na(e,t){const n=document.getElementById("savedLevelPreview");if(!n||!n.classList.contains("visible"))return;const r=14,a=window.innerWidth||0,o=window.innerHeight||0,i=n.offsetWidth||220,s=n.offsetHeight||140,l=Math.min(Math.max(0,e+r),Math.max(0,a-i-8)),c=Math.min(Math.max(0,t+r),Math.max(0,o-s-8));n.style.left=`${l}px`,n.style.top=`${c}px`}function Ve(){const e=document.getElementById("savedLevelPreview");e&&(e.classList.remove("visible"),e.innerHTML="")}function fg(e,t,n){const r=document.getElementById("savedLevelPreview"),a=re[e];if(!r||!a||!Array.isArray(a.boardData))return;const o=a.boardData.length,i=a.boardData[0]?.length||0;if(!o||!i)return;r.innerHTML="";const s=document.createElement("div");s.className="saved-level-preview-header",s.textContent=`#${a.id}  ${i}×${o}  方向 ${a.direction}`,r.appendChild(s);const l=document.createElement("div");l.className="saved-level-preview-board";const c=Math.max(1,i),u=Math.max(1,o),d=260,f=220,h=ju(),C=h.ratio>0?h.ratio:162/150,p=Math.floor(d/c-1),y=Math.floor(f/u/C),b=Math.max(10,Math.min(18,Math.min(p,y))),g=Math.max(10,Math.round(b*C));l.style.gridTemplateColumns=`repeat(${c}, ${b}px)`;const S=Math.min(b/150,g/162);l.style.setProperty("--preview-scale",S.toFixed(4));for(const M of a.boardData)for(const x of M){const N=ie(x),P=document.createElement("div");if(P.className="saved-level-preview-cell",P.style.width=`${b}px`,P.style.height=`${g}px`,_e(N.baseId)){P.classList.add("is-empty"),l.appendChild(P);continue}if(Rt(N.baseId)){const T=da(N.baseId);if(T){const A=document.createElement("img");A.className="saved-level-preview-obstacle",(N.baseId===at||N.baseId===gt||N.baseId===Fe||N.baseId===Le||N.baseId===$e)&&A.classList.add("saved-level-preview-obstacle-scale130"),A.src=T,A.alt="",P.appendChild(A)}l.appendChild(P);continue}const w=document.createElement("div");w.className="saved-level-preview-stack";const I=document.createElement("img");if(I.className="saved-level-preview-base",I.src="img/base.png",I.alt="",w.appendChild(I),N.baseId!==pe){const T=mg(N.baseId,a.manualFaceBindings);if(T){const A=document.createElement("img");A.className="saved-level-preview-face",N.baseId===he&&A.classList.add("saved-level-preview-face-bomb"),A.src=T,A.alt="",w.appendChild(A)}}if(N.hasAttachment&&xe.has(N.attachmentId)){const T=Xr(N.attachmentId);if(T){const A=document.createElement("img");A.className="saved-level-preview-attachment",N.attachmentId===Ue?A.classList.add("saved-level-preview-attachment-fanpai"):N.attachmentId===Ye&&A.classList.add("saved-level-preview-attachment-iceshell"),A.src=T,A.alt="",w.appendChild(A)}}P.appendChild(w),l.appendChild(P)}r.appendChild(l),r.classList.add("visible"),Na(t,n)}function hg(e){const t=new Set;if(!e||typeof e!="object")return t;const n=(r,a)=>{!Number.isInteger(r)||!Number.isInteger(a)||t.add(`${r}-${a}`)};return n(Number(e.row1),Number(e.col1)),n(Number(e.row2),Number(e.col2)),t}function pg(e){return Fi(e,ue)}function gg(e,t,n){const r=Array.isArray(e?.boardSnapshotBefore)?e.boardSnapshotBefore:null,a=e?.move&&typeof e.move=="object"?e.move:null;if(!r||!a)return null;const o=Number(a.row1),i=Number(a.col1),s=Number(a.row2),l=Number(a.col2),c=(d,f)=>Number.isInteger(d)&&Number.isInteger(f)&&d>=0&&d<t&&f>=0&&f<n;if(!c(o,i)||!c(s,l)||!Io(r,o,i,s,l))return null;const u=At(r,o,i,s,l);return Array.isArray(u)&&u.length>=2?u:null}function yg(e,t,n,r,a,o,i){if(!Array.isArray(e)||e.length<2)return[];const s=Math.max(1,t),l=Math.max(1,n),c=[];for(const u of e){if(!u||!Number.isFinite(Number(u.row))||!Number.isFinite(Number(u.col)))continue;const d=Math.max(-1,Math.min(s,Number(u.col)-1)),f=Math.max(-1,Math.min(l,Number(u.row)-1));c.push({x:(d+.5)*r+o,y:(f+.5)*a+i})}return c}function bg(e,t,n,r,a,o){if(!e||!Array.isArray(t)||t.length<2)return;const i=Math.max(1,n)*a,s=Math.max(1,r)*o,l=a,c=o,u=i+l*2,d=s+c*2,f=yg(t,n,r,a,o,l,c);if(f.length<2)return;const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.classList.add("saved-level-preview-link-overlay"),h.setAttribute("viewBox",`0 0 ${u} ${d}`),h.style.left=`${-l}px`,h.style.top=`${-c}px`,h.style.width=`${u}px`,h.style.height=`${d}px`;const C=document.createElementNS("http://www.w3.org/2000/svg","polyline");C.classList.add("saved-level-preview-link-path"),C.setAttribute("points",f.map(p=>`${p.x},${p.y}`).join(" ")),h.appendChild(C),e.appendChild(h)}function Gu(e,t,n){const r=document.getElementById("savedLevelPreview"),a=Array.isArray(e?.boardSnapshotBefore)?e.boardSnapshotBefore:null;if(!r||!a||a.length===0)return;const o=a.length,i=a[0]?.length||0;if(!o||!i)return;r.innerHTML="";const s=document.createElement("div");s.className="saved-level-preview-header";const l=Number(e?.stepIndex)>0?`第 ${Number(e.stepIndex)} 步`:"当前步";s.textContent=`${l} 操作前棋盘预览`,r.appendChild(s);const c=document.createElement("div");c.className="saved-level-preview-board";const u=Math.max(1,i),d=Math.max(1,o),f=260,h=220,C=ju(),p=C.ratio>0?C.ratio:162/150,y=Math.floor(f/u-1),b=Math.floor(h/d/p),g=Math.max(10,Math.min(18,Math.min(y,b))),S=Math.max(10,Math.round(g*p));c.style.gridTemplateColumns=`repeat(${u}, ${g}px)`;const M=Math.min(g/150,S/162);c.style.setProperty("--preview-scale",M.toFixed(4));const x=gg(e,o,i),N=hg(e?.move);for(let P=0;P<o;P++){const w=Array.isArray(a[P])?a[P]:[];for(let I=0;I<i;I++){const T=w[I],A=ie(T),E=document.createElement("div");if(E.className="saved-level-preview-cell",E.style.width=`${g}px`,E.style.height=`${S}px`,N.has(`${P}-${I}`)&&E.classList.add("agent-step-selected"),_e(A.baseId)){E.classList.add("is-empty"),c.appendChild(E);continue}if(Rt(A.baseId)){const F=da(A.baseId);if(F){const D=document.createElement("img");D.className="saved-level-preview-obstacle",(A.baseId===at||A.baseId===gt||A.baseId===Fe||A.baseId===Le||A.baseId===$e)&&D.classList.add("saved-level-preview-obstacle-scale130"),D.src=F,D.alt="",E.appendChild(D)}c.appendChild(E);continue}const j=document.createElement("div");j.className="saved-level-preview-stack";const _=document.createElement("img");_.className="saved-level-preview-base",_.src="img/base.png",_.alt="",j.appendChild(_);const O=document.createElement("img");if(O.className="saved-level-preview-guide",O.src="img/GuideTips.png",O.alt="",j.appendChild(O),A.baseId!==pe){const F=pg(A.baseId);if(F){const D=document.createElement("img");D.className="saved-level-preview-face",A.baseId===he&&D.classList.add("saved-level-preview-face-bomb"),D.src=F,D.alt="",j.appendChild(D)}}if(A.hasAttachment&&xe.has(A.attachmentId)){const F=Xr(A.attachmentId);if(F){const D=document.createElement("img");D.className="saved-level-preview-attachment",A.attachmentId===Ue?D.classList.add("saved-level-preview-attachment-fanpai"):A.attachmentId===Ye&&D.classList.add("saved-level-preview-attachment-iceshell"),D.src=F,D.alt="",j.appendChild(D)}}E.appendChild(j),c.appendChild(E)}}bg(c,x,u,d,g,S),r.appendChild(c),r.classList.add("visible"),Na(t,n)}function Bo(){const e=document.getElementById("btnSaveCurrentLevel");if(!e)return;const t=de>=0;e.disabled=t,e.title=t?"当前处于编辑模式，请使用关卡列表中的“保存”按钮":""}function oa(){de=-1,Ge=null,Bo()}function Cg(e){if(e<0||e>=re.length)return;if(de!==-1&&de!==e){alert("请先保存或取消当前编辑关卡。");return}const t=re[e];if(!t||(Dt(),!Ma(t.boardData,t.direction,t.manualFaceBindings||{},{levelId:t.id})))return;de=e,Ge={index:e,boardData:G(t.boardData),direction:Number.isFinite(t.direction)?t.direction:0,manualFaceBindings:ma(t.manualFaceBindings),hasAutoSpecialConfig:!!t.hasAutoSpecialConfig,autoSpecialSourceKeys:fa(t.autoSpecialSourceKeys)};const r=Ou(t);Bo(),Bt();const a=Array.isArray(r)?`；自动特殊块：${xo(r)}`:"";J(`已进入编辑：关卡 #${t.id}（保存/取消）${a}`)}function zu(){if(de<0||de>=re.length||!Mr("保存"))return;const e=Hu(),t=Wu(wa(),ue,{saveMode:e});if(!t||!Array.isArray(t.boardData)){alert("当前棋盘无可保存数据。");return}const n=parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10),r=re[de];if(!r){oa(),Bt();return}const a=Re?_u():{hasAutoSpecialConfig:!!r.hasAutoSpecialConfig,autoSpecialSourceKeys:fa(r.autoSpecialSourceKeys)};re[de]={...r,boardData:G(t.boardData),manualFaceBindings:ma(t.manualFaceBindings),direction:Number.isFinite(n)?n:0,...a};const o=r.id;oa(),Bt(),Nr(o),J(`已保存编辑：关卡 #${o}`)}function Sg(){if(de<0)return;const e=Ge?{boardData:G(Ge.boardData),direction:Ge.direction,manualFaceBindings:ma(Ge.manualFaceBindings),hasAutoSpecialConfig:!!Ge.hasAutoSpecialConfig,autoSpecialSourceKeys:fa(Ge.autoSpecialSourceKeys)}:null,n=re[de]?.id;oa(),Bt(),e&&Array.isArray(e.boardData)&&Ma(e.boardData,e.direction,e.manualFaceBindings||{},{levelId:n}),Number.isFinite(Number(n))?J(`已取消编辑：关卡 #${n}`):J("已取消编辑")}function Bt(){Dt(),Ve(),Bo();const e=document.getElementById("savedLevelList");if(e){if(e.innerHTML="",!Array.isArray(re)||re.length===0){const t=document.createElement("div");t.className="saved-level-empty",t.textContent="暂无保存关卡。点击“保存本关”可加入列表。",e.appendChild(t);return}re.forEach((t,n)=>{const r=t?.boardData?.length||0,a=t?.boardData?.[0]?.length||0,o=ug(t?.boardData),i=Eo(t),s=document.createElement("div");s.className="saved-level-item",s.dataset.index=String(n);const l=Number(t?.id);if(Number.isFinite(l)){const b=l%5;b===1?s.classList.add("saved-level-item-mod-1"):b===0&&s.classList.add("saved-level-item-mod-0")}if(de===n){s.classList.add("saved-level-item-editing");const b=document.createElement("div");b.className="saved-level-item-edit-actions";const g=document.createElement("button");g.type="button",g.className="btn-primary",g.textContent="保存",g.onclick=M=>{M.stopPropagation(),zu()};const S=document.createElement("button");S.type="button",S.className="btn-secondary",S.textContent="取消",S.onclick=M=>{M.stopPropagation(),Sg()},b.appendChild(g),b.appendChild(S),s.appendChild(b),e.appendChild(s);return}const u=document.createElement("div");u.className="saved-level-item-main";const d=document.createElement("div");d.className="saved-level-item-left";const f=document.createElement("div");f.className="saved-level-item-id",f.textContent=`#${t.id}`;const h=document.createElement("div");h.className="saved-level-item-meta";const C=document.createElement("span");if(C.textContent=`${a}×${r}`,h.appendChild(C),t?.hasAutoSpecialConfig){const b=document.createElement("span");b.className="saved-level-special-config-text",b.textContent=`特殊:${$u(t)}`,h.appendChild(b)}d.appendChild(f),d.appendChild(h),u.appendChild(d);const p=document.createElement("img");p.className="saved-level-direction-icon",p.src=dc(t.direction),p.alt=String(t.direction),p.title=jm(t.direction),u.appendChild(p);const y=document.createElement("div");if(y.className="saved-level-item-icons",t?.hasAutoSpecialConfig)if(i.length>0)i.forEach(b=>{const g=Ml(b);if(!g)return;const S=document.createElement("img");S.className="saved-level-item-icon saved-level-item-config-icon",S.src=g,S.alt=`配置特殊块：${Ja(b)}`,S.title=`配置特殊块：${Ja(b)}`,y.appendChild(S)});else{const b=document.createElement("span");b.className="saved-level-item-icons-empty",b.textContent="无",b.title="配置特殊块：无",y.appendChild(b)}o.forEach(b=>{const g=Ml(b);if(!g)return;const S=document.createElement("img");S.className="saved-level-item-icon",S.src=g,S.alt=Nl(b),S.title=Nl(b),y.appendChild(S)}),u.appendChild(y),s.appendChild(u),s.onclick=()=>{Ve(),vg(n)},s.oncontextmenu=b=>{Ve(),Mg(b,n)},s.onmouseenter=b=>{fg(n,b.clientX,b.clientY)},s.onmousemove=b=>{Na(b.clientX,b.clientY)},s.onmouseleave=()=>{Ve()},e.appendChild(s)})}}function vg(e){if(e<0||e>=re.length)return;if(de!==-1&&de!==e){alert("请先保存或取消当前编辑关卡。");return}const t=re[e];if(!t||!Ma(t.boardData,t.direction,t.manualFaceBindings||{},{levelId:t.id}))return;const r=Ou(t),a=Array.isArray(r)?`；自动特殊块：${xo(r)}`:"";J(`已应用关卡 #${t.id} 到棋盘${a}`)}function qu(){if(de>=0){alert("当前处于编辑模式，请使用关卡列表中的“保存”按钮。");return}if(Et||ut||Pt){alert("当前有任务进行中，请稍后再试。");return}if(!Mr("保存"))return;const e=Hu(),t=Wu(wa(),ue,{saveMode:e});if(!t||!Array.isArray(t.boardData)){alert("当前棋盘无可保存数据。");return}const n=parseInt(document.querySelector('input[name="direction"]:checked')?.value||0,10),r={id:cg(),boardData:G(t.boardData),manualFaceBindings:ma(t.manualFaceBindings),direction:Number.isFinite(n)?n:0,..._u()};re.push(r),Bt(),Nr(r.id),J(`已保存关卡 #${r.id}`)}function Pg(e){if(e<0||e>=re.length)return;const t=re.splice(e,1),n=Number(t?.[0]?.id);de===e?oa():de>e&&(de-=1),Lu(),Bt(),Number.isFinite(n)&&J(`已删除关卡 #${n}，其后关卡序号已顺延`)}function xg(e,t){if(e<0||e>=re.length)return;const r=Math.max(1,Math.min(re.length,t))-1;if(r===e)return;const[a]=re.splice(e,1);re.splice(r,0,a),de===e?(de=r,Ge&&(Ge.index=r)):de>e&&de<=r?(de-=1,Ge&&(Ge.index=de)):de<e&&de>=r&&(de+=1,Ge&&(Ge.index=de)),Lu(),Bt()}function Mg(e,t){e.preventDefault(),Ve();const n=document.getElementById("savedLevelContextMenu");if(!n)return;Di=t,n.classList.add("visible");const r=window.innerWidth||0,a=window.innerHeight||0,o=140,i=132,s=Math.min(Math.max(0,e.clientX),Math.max(0,r-o-6)),l=Math.min(Math.max(0,e.clientY),Math.max(0,a-i-6));n.style.left=`${s}px`,n.style.top=`${l}px`}function Dt(){const e=document.getElementById("savedLevelContextMenu");e&&(e.classList.remove("visible"),Di=-1)}function Ng(e){const t=Di;if(t<0||t>=re.length){Dt();return}if(e==="edit"||e==="read"){Cg(t),Dt();return}if(e==="delete"){Pg(t),Dt();return}if(e==="reorder"){const n=prompt("请输入新的序号（从1开始）",String(t+1));if(n!==null){const r=parseInt(n,10);Number.isFinite(r)&&xg(t,r)}Dt()}}async function wg(){if(ut||Pt||Et){alert("当前有任务进行中，请稍后再试。");return}if(typeof window.showOpenFilePicker=="function")try{const[t]=await window.showOpenFilePicker({multiple:!1,types:[{description:"关卡列表",accept:{"text/plain":[".txt"],"application/json":[".json"]}}]});if(!t)return;await Eg(t);return}catch(t){if(t?.name==="AbortError")return;console.error("Failed to import saved levels via picker:",t)}const e=document.getElementById("savedLevelFileInput");e&&(e.value="",e.click())}function Vu(e){const t=[];if(typeof e!="string")return t;const n=e.trim();if(!n||((()=>{try{const o=JSON.parse(n);if(!Array.isArray(o))return;for(const i of o){const s=Array.isArray(i?.zhenxing)?i.zhenxing:Array.isArray(i?.boardData)?i.boardData:i?.board,l=Jt(s);if(!l)continue;const c=Number(i?.fangxiang??i?.direction),u=Number.isFinite(c)?Math.max(0,Math.min(8,Math.round(c))):0,d=dt(i?.manualFaceBindings,l),f=dg(i),h=Number(i?.id??i?.level),C=Number.isFinite(h)?Math.max(1,Math.floor(h)):null;t.push({id:C,boardData:l,direction:u,manualFaceBindings:d,hasAutoSpecialConfig:f.hasConfig,autoSpecialSourceKeys:f.sourceKeys})}}catch{}})(),t.length>0))return t;const a=n.split(/\r?\n/).map(o=>o.trim()).filter(Boolean);for(const o of a){const i=o.split("	").map(b=>b.trim());if(i.length<3)continue;const s=i[0],l=i[1],c=i[2],u=i.length>=4?i.slice(3).join("	").trim():"";let d=null;try{d=JSON.parse(l)}catch{d=null}const f=Jt(d);if(!f)continue;const h=Number(s),C=Number.isFinite(h)?Math.max(1,Math.floor(h)):null,p=Number(c),y=Number.isFinite(p)?Math.max(0,Math.min(8,Math.round(p))):0;t.push({id:C,boardData:f,direction:y,manualFaceBindings:{},hasAutoSpecialConfig:i.length>=4,autoSpecialSourceKeys:i.length>=4?Po(u):[]})}return t}function Ag(e){const t=[],n=new Set;let r=1;for(const a of e){let o=Number.isFinite(Number(a.id))?Math.floor(Number(a.id)):null;if(!o||o<=0||n.has(o)){for(;n.has(r);)r++;o=r}n.add(o);const i=a.hasAutoSpecialConfig?{hasAutoSpecialConfig:!0,autoSpecialSourceKeys:fa(a.autoSpecialSourceKeys)}:{hasAutoSpecialConfig:!1,autoSpecialSourceKeys:[]};t.push({id:o,boardData:G(a.boardData),direction:a.direction,manualFaceBindings:dt(a.manualFaceBindings,a.boardData),...i})}return t}function Uu(e,t=""){if(!Array.isArray(e)||e.length===0)return alert("读取失败：文件中没有有效关卡。"),!1;re=Ag(e),oa(),Bt();const n=t?`（${t}）`:"";return J(`已读取关卡列表${n}：${re.length} 关`),!0}function Yu(){const e=re.map(t=>{const n=Eo(t),r={id:t.id,boardData:G(t.boardData),direction:t.direction,specialBlock:xo(n)};n.length>0&&(r.autoSpecialSourceKeys=n);const a=dt(t.manualFaceBindings,t.boardData);return Object.keys(a).length>0&&(r.manualFaceBindings=a),r});return JSON.stringify(e,null,2)}function Ig(){return re.map(e=>[e.id,JSON.stringify(G(e.boardData)),e.direction,$u(e)].join("	")).join(`
`)}function Tg(){return/\.txt$/i.test(Co||"")?Ig():Yu()}async function Ku(){if(!Array.isArray(re)||re.length===0){alert("列表为空，暂无可保存关卡。");return}if(!rr){alert("当前未绑定可覆盖保存文件，请先通过“读取”选择文件，或使用“导出”另存为。");return}try{if(typeof rr.requestPermission=="function"&&await rr.requestPermission({mode:"readwrite"})!=="granted"){alert("未获得文件写入权限，无法保存。");return}const e=await rr.createWritable();await e.write(Tg()),await e.close(),J(`已保存关卡列表到：${Co||"当前文件"}`)}catch(e){console.error("Failed to save saved levels file:",e),alert("保存失败，请重试。")}}function Dg(){if(!Array.isArray(re)||re.length===0){alert("列表为空，暂无可导出关卡。");return}const e=Yu(),t=new Blob([e],{type:"application/json;charset=utf-8"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=`关卡列表_${re.length}关.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(n),0)}async function Eg(e){if(!e)return;const t=await e.getFile(),n=await t.text(),r=Vu(n);Uu(r,t.name||"")&&(rr=e,Co=t.name||"")}function Bg(e){const t=e?.target||document.getElementById("savedLevelFileInput"),n=e?.target?.files?.[0];if(!n)return;const r=new FileReader;r.onload=()=>{try{const a=typeof r.result=="string"?r.result:"",o=Vu(a);Uu(o,n.name||""),rr=null,Co=n.name||""}catch(a){console.error("Failed to import saved levels:",a),alert("读取失败，请检查文件格式。")}finally{t&&(t.value="")}},r.onerror=()=>{alert("读取文件失败，请重试。"),t&&(t.value="")},r.readAsText(n,"utf-8")}function wa(){const e=parseInt(document.getElementById("width").value)||8,t=parseInt(document.getElementById("height").value)||12,n=[];for(let r=0;r<t;r++){const a=[];for(let o=0;o<e;o++)a.push(k[r]?.[o]??0);n.push(a)}return n}function Rg(e,t,n=null,r=null,a=null,o=null){const i=Number.isInteger(n)&&n>0?n:e*t,s=Number.isFinite(Number(r))&&Number.isFinite(Number(a)),{count8Range:l,count6Range:c}=To(),u=s?{count8:Math.max(0,Math.floor(Number(r))),count6:Math.max(0,Math.floor(Number(a)))}:vu(i,l,c);if(!u)return Qe=[],lt=[],[];const d=Number.isFinite(Number(u.count8))?Math.max(0,Math.floor(Number(u.count8))):0,f=Number.isFinite(Number(u.count6))?Math.max(0,Math.floor(Number(u.count6))):0,h=d*8,C=f*6,p=h+C;if(p>i)return Qe=[],lt=[],[];const y=i-p;let b=Math.floor(y/4);const g=y%4;let S=0;g>=2&&(S=1),Qe=[];const M=o instanceof Set?new Set(Array.from(o).map(P=>Number(P))):new Set;let x=1;const N=()=>{for(;x<he&&(M.has(x)||x===pe);)x++;if(x>=he)return null;const P=x;return x++,P};for(let P=0;P<d;P++){const w=N();if(w===null)return Qe=[],lt=[],[];Qe.push({number:w,count:8})}for(let P=0;P<f;P++){const w=N();if(w===null)return Qe=[],lt=[],[];Qe.push({number:w,count:6})}for(let P=0;P<b;P++){const w=N();if(w===null)return Qe=[],lt=[],[];Qe.push({number:w,count:4})}for(let P=0;P<S;P++){const w=N();if(w===null)return Qe=[],lt=[],[];Qe.push({number:w,count:2})}lt=[],Qe.forEach(P=>{for(let w=0;w<P.count;w++)lt.push(P.number)}),lt=mt(lt)}function kg(){if(ut||Pt||Et)return;const e=document.getElementById("batchRunCampaignFileInput");e&&(e.value="",e.click())}function Fg(){const e=document.getElementById("batchCampaignRounds"),t=Number(e?.value),n=Number.isFinite(t)?Math.max(1,Math.min(100,Math.round(t))):1;return e&&e.value!==String(n)&&(e.value=String(n)),n}function Lg(e){return new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{const a=typeof r.result=="string"?r.result:"";t(a)},r.onerror=()=>{n(r.error||new Error("读取文件失败"))},r.readAsText(e,"utf-8")})}function $g(e){return new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result instanceof ArrayBuffer?r.result:new ArrayBuffer(0))},r.onerror=()=>{n(r.error||new Error("读取文件失败"))},r.readAsArrayBuffer(e)})}function _g(e){const t=String(e||"").trim().toLowerCase(),n=t.lastIndexOf(".");return n>=0?t.slice(n):""}function Og(e){const t=_g(e?.name),n=String(e?.type||"").toLowerCase();return t===".xlsx"||n==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}function Hg(e){let t=null;try{t=JSON.parse(e)}catch(r){throw new Error(`JSON解析失败：${r.message||"格式错误"}`)}const n=Array.isArray(t)?t:Array.isArray(t?.levels)?t.levels:null;if(!Array.isArray(n)||n.length===0)throw new Error("JSON中没有可用的关卡数组。");return n}function Pn(e,t){return e[t]|e[t+1]<<8}function nr(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function Wg(e){const t=Math.max(0,e.length-65557);for(let n=e.length-22;n>=t;n--)if(nr(e,n)===101010256)return n;return-1}async function jg(e){if(typeof DecompressionStream!="function")throw new Error("当前浏览器不支持直接读取xlsx压缩数据，请使用新版Chrome/Edge，或继续导入JSON。");const t=new Blob([e]).stream().pipeThrough(new DecompressionStream("deflate-raw")),n=await new Response(t).arrayBuffer();return new Uint8Array(n)}async function Gg(e){const t=new Uint8Array(e),n=Wg(t);if(n<0)throw new Error("Excel文件格式无效，未找到xlsx压缩目录。");const r=Pn(t,n+10);let a=nr(t,n+16);const o=new TextDecoder("utf-8"),i=new Map;for(let s=0;s<r;s++){if(nr(t,a)!==33639248)throw new Error("Excel文件格式无效，中央目录损坏。");const l=Pn(t,a+10),c=nr(t,a+20),u=Pn(t,a+28),d=Pn(t,a+30),f=Pn(t,a+32),h=nr(t,a+42),C=t.slice(a+46,a+46+u),p=o.decode(C).replace(/\\/g,"/");if(nr(t,h)!==67324752)throw new Error(`Excel文件格式无效，${p}本地文件头损坏。`);const y=Pn(t,h+26),b=Pn(t,h+28),g=h+30+y+b,S=t.slice(g,g+c);let M=S;if(l===8)M=await jg(S);else if(l!==0)throw new Error(`Excel文件包含暂不支持的压缩方式：${l}`);i.set(p,M),a+=46+u+d+f}return i}function uo(e,t="XML"){if(typeof DOMParser!="function")throw new Error("当前浏览器不支持解析Excel XML内容。");const n=new DOMParser().parseFromString(e,"application/xml");if(n.getElementsByTagName("parsererror").length>0)throw new Error(`${t}解析失败。`);return n}function yr(e,t){return Array.from(e.getElementsByTagName("*")).filter(n=>n.localName===t)}function mo(e,t){const n=e.get(t);return n?new TextDecoder("utf-8").decode(n):""}function zg(e,t){const n=String(t||"").replace(/\\/g,"/");if(!n)return"";if(n.startsWith("/"))return n.slice(1);const r=String(e).replace(/\\/g,"/").split("/");r.pop();for(const a of n.split("/"))!a||a==="."||(a===".."?r.pop():r.push(a));return r.join("/")}function qg(e){const t=mo(e,"xl/workbook.xml"),n=mo(e,"xl/_rels/workbook.xml.rels");if(!t||!n)return"xl/worksheets/sheet1.xml";const r=uo(t,"workbook.xml"),a=yr(r,"sheet")[0],o=a?.getAttribute("r:id")||a?.getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships","id");if(!o)return"xl/worksheets/sheet1.xml";const i=uo(n,"workbook.xml.rels"),l=yr(i,"Relationship").find(c=>c.getAttribute("Id")===o)?.getAttribute("Target");return l?zg("xl/workbook.xml",l):"xl/worksheets/sheet1.xml"}function Vg(e){const t=mo(e,"xl/sharedStrings.xml");if(!t)return[];const n=uo(t,"sharedStrings.xml");return yr(n,"si").map(r=>yr(r,"t").map(a=>a.textContent||"").join(""))}function Ug(e,t){const n=String(e||"").match(/^[A-Z]+/i)?.[0];if(!n)return t;let r=0;for(const a of n.toUpperCase())r=r*26+(a.charCodeAt(0)-64);return r-1}function Xu(e,t){return Array.from(e.childNodes||[]).find(n=>n.nodeType===1&&n.localName===t)||null}function Yg(e,t){const n=Xu(e,t);return n&&n.textContent||""}function Kg(e,t){const n=e.getAttribute("t")||"";if(n==="inlineStr"){const o=Xu(e,"is");return o?yr(o,"t").map(i=>i.textContent||"").join(""):""}const r=Yg(e,"v");if(r==="")return"";if(n==="s"){const o=Number(r);return Number.isInteger(o)&&t[o]||""}if(n==="b")return r==="1";if(n==="str")return r;const a=Number(r);return Number.isFinite(a)?a:r}function Xg(e,t){const n=uo(e,"worksheet.xml");return yr(n,"row").map(r=>{const a=[];return Array.from(r.childNodes||[]).filter(i=>i.nodeType===1&&i.localName==="c").forEach((i,s)=>{const l=Ug(i.getAttribute("r"),s);a[l]=Kg(i,t)}),a})}async function Jg(e){const t=await $g(e),n=await Gg(t),r=qg(n),a=mo(n,r);if(!a)throw new Error("Excel中没有找到第一张工作表。");return Xg(a,Vg(n))}function Ju(e){if(e==null)return;if(typeof e=="number"||typeof e=="boolean")return e;const t=String(e).trim();if(t){if(/^-?\d+(?:\.\d+)?$/.test(t))return Number(t);if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch{return t}return t}}function Zg(e){const t=String(e||"").trim(),n=t.replace(/\s+/g,"").toLowerCase();return{关卡:"level",关卡号:"level",level:"level",阵型:"zhenxing",棋盘:"zhenxing",zhenxing:"zhenxing",board:"zhenxing",方向:"fangxiang",fangxiang:"fangxiang",direction:"fangxiang","8张":"8zhang","8zhang":"8zhang",count8:"8zhang","6张":"6zhang","6zhang":"6zhang",count6:"6zhang",胜率:"shenglv",shenglv:"shenglv",winrate:"shenglv",失败剩余:"remain",剩余:"remain",remain:"remain",初始相邻配对:"match_num",相邻同牌对数:"match_num",match_num:"match_num",matchnum:"match_num",测试局数:"testnum",模拟局数:"testnum",testnum:"testnum",test_num:"testnum",难度:"difficulty",difficulty:"difficulty",跳过:"jump",jump:"jump",skip:"jump",人类模式:"humanMode",humanmode:"humanMode",human_mode:"humanMode",人类模式相邻优先概率:"humanmode_beside",humanmode_beside:"humanmode_beside",humanmodebeside:"humanmode_beside",自动炸弹对数:"autoBombPairCount",炸弹对数:"autoBombPairCount",autobombpaircount:"autoBombPairCount",bombpaircount:"autoBombPairCount",variable_1:"Variable_1",variable1:"Variable_1",variable_2:"Variable_2",variable2:"Variable_2",variable_3:"Variable_3",variable3:"Variable_3",variable_4:"Variable_4",variable4:"Variable_4",variable_5:"Variable_5",variable5:"Variable_5",前期配对:"rhythmEarlyPairRange",前期配对数:"rhythmEarlyPairRange",前期配对范围:"rhythmEarlyPairRange",前期配对数范围:"rhythmEarlyPairRange",前期配对最小:"rhythmEarlyPairMin",前期配对数最小:"rhythmEarlyPairMin",前期配对最大:"rhythmEarlyPairMax",前期配对数最大:"rhythmEarlyPairMax",前期距离:"rhythmEarlyDistanceRange",前期路径距离:"rhythmEarlyDistanceRange",前期距离范围:"rhythmEarlyDistanceRange",前期路径距离范围:"rhythmEarlyDistanceRange",前期距离最小:"rhythmEarlyDistanceMin",前期路径距离最小:"rhythmEarlyDistanceMin",前期距离最大:"rhythmEarlyDistanceMax",前期路径距离最大:"rhythmEarlyDistanceMax",中期配对:"rhythmMiddlePairRange",中期配对数:"rhythmMiddlePairRange",中期配对范围:"rhythmMiddlePairRange",中期配对数范围:"rhythmMiddlePairRange",中期配对最小:"rhythmMiddlePairMin",中期配对数最小:"rhythmMiddlePairMin",中期配对最大:"rhythmMiddlePairMax",中期配对数最大:"rhythmMiddlePairMax",中期距离:"rhythmMiddleDistanceRange",中期路径距离:"rhythmMiddleDistanceRange",中期距离范围:"rhythmMiddleDistanceRange",中期路径距离范围:"rhythmMiddleDistanceRange",中期距离最小:"rhythmMiddleDistanceMin",中期路径距离最小:"rhythmMiddleDistanceMin",中期距离最大:"rhythmMiddleDistanceMax",中期路径距离最大:"rhythmMiddleDistanceMax",同层概率:"rhythmSameLayerChance",卡点概率:"rhythmStuckPairChance",卡点数量:"rhythmStuckPairCount",直线权重:"rhythmWeightStraight",直线连接权重:"rhythmWeightStraight","1拐权重":"rhythmWeightOneTurn","1拐连接权重":"rhythmWeightOneTurn",同向2拐权重:"rhythmWeightSameTwoTurn",同向二拐权重:"rhythmWeightSameTwoTurn",反向2拐权重:"rhythmWeightReverseTwoTurn",反向二拐权重:"rhythmWeightReverseTwoTurn"}[n]||t}function wl(e){return!Array.isArray(e)||e.every(t=>Ju(t)===void 0)}function Qg(e){if(!Array.isArray(e)||e.length===0)return[];const t=e.findIndex(a=>!wl(a));if(t<0)return[];const n=e[t].map(Zg),r=[];for(let a=t+1;a<e.length;a++){const o=e[a];if(wl(o))continue;const i={};n.forEach((s,l)=>{if(!s)return;const c=Ju(o?.[l]);c!==void 0&&(i[s]=c)}),Object.keys(i).length>0&&r.push(i)}return r}async function ey(e){if(Og(e)){const t=await Jg(e),n=Qg(t);if(n.length===0)throw new Error("Excel中没有可用的关卡配置。");return n}return Hg(await Lg(e))}async function ty(e){const t=e?.target||document.getElementById("batchRunCampaignFileInput"),n=e?.target?.files?.[0];if(n)try{const r=await ey(n),a=Fg();await uy(r,a)}catch(r){console.error("Failed to run campaign:",r),alert(r.message||"跑关失败，请检查配置。")}finally{t&&(t.value="")}}function Al(e){return String(e||"").replace(/[^a-z0-9]/gi,"").toLowerCase()}function ve(e,t=[]){if(!e||typeof e!="object")return;const n=new Map;Object.keys(e).forEach(r=>{n.set(Al(r),e[r])});for(const r of t){const a=Al(r);if(n.has(a))return n.get(a)}}function Gt(e,t,n,r){const a=Number.isFinite(Number(t?.[0]))?Number(t[0]):0,o=Number.isFinite(Number(t?.[1]))?Number(t[1]):a;let i=a,s=o;if(Array.isArray(e)&&e.length>=2?(i=Number(e[0]),s=Number(e[1])):Number.isFinite(Number(e))&&(i=Number(e),s=Number(e)),Number.isFinite(i)||(i=a),Number.isFinite(s)||(s=o),i>s){const l=i;i=s,s=l}if(i=Math.max(n,Math.min(r,i)),s=Math.max(n,Math.min(r,s)),i>s&&(i=Math.max(n,Math.min(r,a)),s=Math.max(n,Math.min(r,o)),i>s)){const l=i;i=s,s=l}return[i,s]}function za(e,t,n,r){const a=Gt(e,t,n,r);let o=Math.ceil(a[0]),i=Math.floor(a[1]);if(o>i){const s=Number.isFinite(Number(t?.[0]))?Number(t[0]):n,l=Number.isFinite(Number(t?.[1]))?Number(t[1]):s;o=Math.ceil(Math.max(n,Math.min(r,Math.min(s,l)))),i=Math.floor(Math.max(n,Math.min(r,Math.max(s,l))))}return[o,i]}function zr(e){const t=Number(e?.[0]),n=Number(e?.[1]);return!Number.isFinite(t)||!Number.isFinite(n)?0:n<=t?t:t+Math.random()*(n-t)}function ny(e){if(!Array.isArray(e)||e.length===0)return null;const t=Array.isArray(e[0])?e[0].length:0;if(t<=0)return null;const n=[];for(const r of e){if(!Array.isArray(r)||r.length!==t)return null;const a=r.map(o=>{const i=Number(o);return Number.isFinite(i)?Math.trunc(i):Ce});n.push(a)}return n}function ry(e,t=null){if(!Array.isArray(e))return 0;let n=0;for(const r of e)if(Array.isArray(r))for(const a of r)Ql(a,t)&&n++;return n}function Ro(e){if(!Array.isArray(e)||e.length===0)return 0;const t=e.length,n=e[0]?.length||0;if(n<=0)return 0;let r=0;for(let a=0;a<t;a++)for(let o=0;o<n;o++){const i=Tn(e[a]?.[o]);i!==null&&i!==pe&&(o+1<n&&Tn(e[a]?.[o+1])===i&&r++,a+1<t&&Tn(e[a+1]?.[o])===i&&r++)}return r}function Ms(e,t=4){if(!Array.isArray(e)||e.length===0)return 0;const n=e.length,r=e[0]?.length||0;if(r<=0)return 0;const a=Number.isFinite(Number(t))?Math.max(1,Math.floor(Number(t))):4,o=Array.from({length:n},()=>Array(r).fill(!1)),i=[[-1,0],[1,0],[0,-1],[0,1]];let s=0;for(let l=0;l<n;l++)for(let c=0;c<r;c++){if(o[l][c])continue;const u=Tn(e[l]?.[c]);if(u===null||u===pe){o[l][c]=!0;continue}const d=[{row:l,col:c}];o[l][c]=!0;let f=0;for(;d.length>0;){const h=d.pop();if(h){f++;for(const[C,p]of i){const y=h.row+C,b=h.col+p;if(y<0||y>=n||b<0||b>=r||o[y][b])continue;const g=Tn(e[y]?.[b]);g===u&&g!==pe&&(o[y][b]=!0,d.push({row:y,col:b}))}}}f>=a&&s++}return s}function Ns(e,t,n){const r=Number.isFinite(Number(t?.[0]))?Number(t[0]):0,a=Number.isFinite(Number(t?.[1]))?Number(t[1]):r,o=Number.isFinite(Number(n?.[0]))?Number(n[0]):0,i=Number.isFinite(Number(n?.[1]))?Number(n[1]):o,s=[];for(let l=r;l<=a;l++)for(let c=o;c<=i;c++){const u=l*8+c*6;if(u>e)continue;const d=e-u;d<0||d%2!==0||s.push({count8:l,count6:c})}return s}function ay(e,t,n,r,a=!1){const o=Number.isFinite(Number(t))?Number(t):0,i=Number.isFinite(Number(n))?Number(n):-1/0,s=Number.isFinite(Number(r))?Number(r):1/0,l=Number(e);let c=Number.isFinite(l)?l:o;return a&&(c=Math.round(c)),Math.max(i,Math.min(s,c))}function zt(e,t,n,r,a,o=!1){return ay(ve(e,t),n,r,a,o)}function $a(e,t,n,r,a,o,i,s=!1){const l=ve(e,t);if(l!==void 0)return s?za(l,a,o,i):Gt(l,a,o,i);const c=Array.isArray(a)?a[0]:o,u=Array.isArray(a)?a[1]:c,d=zt(e,n,c,o,i,s),f=zt(e,r,u,o,i,s);return[Math.min(d,f),Math.max(d,f)]}function oy(e){const t=Wn.early,n=Wn.middle,r=$a(e,["rhythmEarlyPairRange","rhythmEarlyPair","earlyPairRange","earlyPair"],["rhythmEarlyPairMin","earlyPairMin"],["rhythmEarlyPairMax","earlyPairMax"],t.pairCountRange,1,99,!0),a=$a(e,["rhythmEarlyDistanceRange","rhythmEarlyDistance","earlyDistanceRange","earlyDistance"],["rhythmEarlyDistanceMin","earlyDistanceMin"],["rhythmEarlyDistanceMax","earlyDistanceMax"],t.distanceRange,1,99,!0),o=$a(e,["rhythmMiddlePairRange","rhythmMiddlePair","middlePairRange","middlePair"],["rhythmMiddlePairMin","middlePairMin"],["rhythmMiddlePairMax","middlePairMax"],n.pairCountRange,1,99,!0),i=$a(e,["rhythmMiddleDistanceRange","rhythmMiddleDistance","middleDistanceRange","middleDistance"],["rhythmMiddleDistanceMin","middleDistanceMin"],["rhythmMiddleDistanceMax","middleDistanceMax"],n.distanceRange,1,99,!0);return{waveCountMin:0,waveCountMax:0,sameLayerChance:zt(e,["rhythmSameLayerChance","sameLayerChance"],.5,0,1),stuckPairChance:zt(e,["rhythmStuckPairChance","stuckPairChance"],0,0,1),stuckPairCount:zt(e,["rhythmStuckPairCount","stuckPairCount"],0,0,99,!0),phaseConfigs:{early:{pairCountRange:r,distanceRange:a,nextPairCountRange:r},middle:{pairCountRange:o,distanceRange:i,nextPairCountRange:o,typeWeights:{直线连接:zt(e,["rhythmWeightStraight","weightStraight"],n.typeWeights.直线连接,0,20),"1拐连接":zt(e,["rhythmWeightOneTurn","weightOneTurn"],n.typeWeights["1拐连接"],0,20),同向2拐:zt(e,["rhythmWeightSameTwoTurn","weightSameTwoTurn"],n.typeWeights.同向2拐,0,20),反向2拐:zt(e,["rhythmWeightReverseTwoTurn","weightReverseTwoTurn"],n.typeWeights.反向2拐,0,20)}}}}}function iy(e,t){if(!e||typeof e!="object")return{valid:!1,message:"关卡配置必须是对象。"};const n=Number(e.level),r=Number.isFinite(n)?Math.max(1,Math.trunc(n)):t+1,a=ve(e,["jump","skip","tiaoguo","跳过"]);if(Number.isFinite(Number(a))?Math.round(Number(a))===1:String(a||"").trim().toLowerCase()==="true")return{valid:!0,level:r,jump:!0};const i=ve(e,["zhenxing","board"]),s=ny(i);if(!s)return{valid:!1,level:r,message:"zhenxing棋盘数据格式无效。"};const l=ve(e,["fangxiang","direction"]),c=Number.isFinite(Number(l))?Math.max(0,Math.min(8,Math.round(Number(l)))):0,u=ve(e,["8zhang","count8"]),d=ve(e,["6zhang","count6"]),f=ve(e,["Variable_1","variable1"]),h=ve(e,["Variable_2","variable2"]),C=ve(e,["Variable_3","variable3"]),p=ve(e,["Variable_4","variable4"]),y=ve(e,["Variable_5","variable5"]),b=ve(e,["shenglv","winrate"]),g=ve(e,["difficulty","nandu","难度"]),S=ve(e,["match_num","matchnum","matchNum"]),M=ve(e,["remain","remainpercent","remaining","shengyu"]),x=ve(e,["testnum","test_num","testNum","测试局数","模拟局数"]),N=ve(e,["humanMode","human_mode","renleimoshi","人类模式"]),P=ve(e,["humanmode_beside","humanModeBeside","human_mode_beside","人类模式相邻优先概率"]),w=ve(e,["autoBombPairCount","bombPairCount","bomb_pairs","bombpairs","自动炸弹对数","炸弹对数","自动炸弹","炸弹"]),I=za(u,[0,0],0,200),T=za(d,[0,0],0,200),A=Gt(f,[.1,.1],0,1),E=Gt(h,[.1,.1],0,1),j=Gt(C,[.1,.1],0,1),_=Gt(p,[.5,.5],0,1),O=Gt(y,[.1,.1],0,1),F=Gt(b,[0,100],0,100),D=Gt(M,[0,100],0,100),H=_p(g,"normal"),L=Number.isFinite(Number(x))?Math.max(1,Math.min(1e4,Math.round(Number(x)))):100,U=Number.isFinite(Number(N))?Number(N)===1:/^(true|on|yes|human)$/i.test(String(N||"").trim()),Q=Ie(P,70),$=Number.isFinite(Number(w))?Math.max(0,Math.min(xr,Math.round(Number(w)))):0,W=s.length*Math.max(0,(s[0]?.length||0)-1)+(s.length-1)*(s[0]?.length||0),K=za(S,[0,W],0,W),ee=oy(e);return{valid:!0,level:r,boardTemplate:s,direction:c,count8Range:I,count6Range:T,sameLieRange:A,sameNumRange:E,xianglinSameRange:j,directionBothRange:_,distanceRange:O,difficulty:H,winRateRange:F,remainRange:D,testNum:L,matchNumRange:K,humanMode:U,humanModeBesidePercent:Q,autoBombPairCount:$,rhythmGenerationOptions:ee,jump:!1}}function sy(e){const t=Math.max(1,parseInt(String(navigator.hardwareConcurrency||0),10)||1),n=Number.isFinite(Number(e))?Math.max(1,Math.floor(Number(e))):1;return t<16||n<40?1:Math.max(1,Math.min(4,Math.floor(t/8),Math.floor(n/25)))}function ly(e){const t=Math.max(1,parseInt(String(navigator.hardwareConcurrency||0),10)||1),n=Number.isFinite(Number(e))?Math.max(1,Math.floor(Number(e))):1;return Math.max(1,Math.floor(t/n))}function Il(e,t){if(!e||!t)return!1;const n=Number(e.winRate),r=Number(e.failedRemainPercent)||0;return Number.isFinite(n)?n>=t.winRateRange[0]&&n<=t.winRateRange[1]&&r>=t.remainRange[0]&&r<=t.remainRange[1]:!1}async function cy(e,t,n,r,a={}){const o=tg(e.boardTemplate,{direction:e.direction,count8:t.count8,count6:t.count6,sameLie:zr(e.sameLieRange),sameNum:zr(e.sameNumRange),xianglinSame:zr(e.xianglinSameRange),directionBothCtrl:zr(e.directionBothRange),distanceCtrl:zr(e.distanceRange),difficulty:e.difficulty,autoBombPairCount:e.autoBombPairCount,...e.rhythmGenerationOptions});if(!o.success)return{attempt:n,matched:!1,skipped:!0,reason:"generate"};if(!oc(o.boardData).valid)return{attempt:n,matched:!1,skipped:!0,reason:"legality"};const s=Ro(o.boardData);if(s<e.matchNumRange[0]||s>e.matchNumRange[1])return{attempt:n,matched:!1,skipped:!0,reason:"match_num"};const{runButton:l=null,info:c=null,roundPrefix:u="",displayLevel:d="",levelIndex:f=0,totalLevels:h=0,maxAttemptsPerLevel:C=0,simulationWorkerLimit:p=null,disableWorkerPoolReuse:y=!1,onStep:b=null}=a||{},g=()=>typeof a?.isCancelled=="function"&&a.isCancelled(),S=T=>{g()||typeof b=="function"&&b(T)};!g()&&l&&(l.textContent=`${u}跑关 ${f+1}/${h} (${n}/${C})`),S(`第${d}关：第${n}/${C}次尝试，生成候选棋盘`),!g()&&c&&(n===1||n%5===0)&&(c.textContent=`${u}跑关中：第${d}关，尝试 ${n}/${C}`);const M=T=>(A,E)=>{const j=Number.isFinite(Number(E))&&Number(E)>0?Number(E):r,_=Math.max(0,Number.isFinite(Number(A))?Number(A):0),O=Math.max(1,Math.floor(j/10));if(!(_>=j||_===1||_%O===0))return;const D=j>0?_/j*100:0;g()||(l&&(l.textContent=`${u}跑关 ${f+1}/${h} (${n}/${C}, ${T}${_}/${j})`),c&&(c.textContent=`${u}跑关中：第${d}关，尝试 ${n}/${C}，${T}${_}/${j} (${Math.round(D)}%)`),S(`第${d}关：第${n}/${C}次尝试，${T}${_}/${j} (${Math.round(D)}%)`))},x={winRateRange:e.winRateRange,enableUnreachableEarlyStop:!0,maxWorkerCount:p,disableWorkerPoolReuse:y},N=!e.humanMode;if(N){const T=await Ip(o.boardData,e.direction,r,M("预筛 "),x);if(T.timedOut)return{attempt:n,matched:!1,skipped:!0,reason:"simulation_timeout"};if(T.unreachable)return{attempt:n,matched:!1,skipped:!0,reason:"unreachable"};if(!Il(T,e))return{attempt:n,matched:!1,skipped:!1,reason:"screen_miss",winRate:T.winRate}}const P=await bs(o.boardData,e.direction,r,M(N?"指标 ":"模拟 "),{winRateRange:e.winRateRange,enableUnreachableEarlyStop:!0,humanMode:!!e.humanMode,humanModeBesidePercent:Ie(e.humanModeBesidePercent,70),maxWorkerCount:p,disableWorkerPoolReuse:y});if(P.timedOut)return{attempt:n,matched:!1,skipped:!0,reason:"simulation_timeout"};if(P.unreachable)return{attempt:n,matched:!1,skipped:!0,reason:"unreachable"};const w=P.winRate,I=Il(P,e);return{attempt:n,matched:I,skipped:!1,boardData:o.boardData,winRate:w,pairMetrics:P,initialAdjacentMatchCount:s}}async function uy(e,t=1){if(ut)return;if(Pt){alert("当前正在批量导出，请稍后再试。");return}if(Et){alert("当前正在执行模拟试玩，请稍后再试。");return}const r=document.getElementById("btnBatchRunCampaign"),a=document.getElementById("info"),o=r?r.textContent:"",i=Array.isArray(e)?e.length:0;if(i<=0){alert("没有可跑关的配置。");return}const s=Number.isFinite(Number(t))?Math.max(1,Math.min(100,Math.round(Number(t)))):1;let l=0,c=0,u=0,d=0;ut=!0,gr(!0),kf(i,s),vn("准备跑关",`共${i}关，${s}轮`),r&&(r.disabled=!0,r.textContent="跑关中...");try{for(let f=1;f<=s;f++){let h="",C=0,p=0,y=0,b=0;const g={totalLevels:i,totalRounds:s,currentRound:f,currentLevelIndex:0,successCount:0,failureCount:0,skippedCount:0};Wt(g),vn(s>1?`第${f}/${s}轮开始`:"跑关开始","等待处理第1关");for(let I=0;I<i;I++){const T=iy(e[I],I),A=T.level||I+1,E=s>1?`第${f}/${s}轮 `:"";if(g.currentLevelIndex=I,Wt(g),vn(`${E}第${A}关`,"读取配置"),!T.valid){y++,g.currentLevelIndex=I+1,g.failureCount++,Wt(g),Qn("failure",`${E}第${A}关失败：配置无效，${T.message||"未知错误"}`),a&&(a.textContent=`${E}第${A}关配置无效，已跳过：${T.message||"未知错误"}`);continue}if(T.jump){b++,g.currentLevelIndex=I+1,g.skippedCount++,Wt(g),Qn("skipped",`${E}第${A}关跳过：配置 jump=1`),a&&(a.textContent=`${E}第${A}关配置 jump=1，已跳过。`);continue}const j=ry(T.boardTemplate);if(j<=0||j%2!==0){y++,g.currentLevelIndex=I+1,g.failureCount++,Wt(g),Qn("failure",`${E}第${A}关失败：无可生成偶数格子`),a&&(a.textContent=`${E}第${A}关无可生成偶数格子，已跳过。`);continue}const _=Ns(j,T.count8Range,T.count6Range);if(_.length===0){y++,g.currentLevelIndex=I+1,g.failureCount++,Wt(g),Qn("failure",`${E}第${A}关失败：8张/6张范围无可用组合`),a&&(a.textContent=`${E}第${A}关的8张/6张范围无可用组合，已跳过。`);continue}let O=null,F=null,D=null,H=0,L=0;const U=Number.isFinite(Number(T.testNum))?Math.max(1,Math.min(1e4,Math.round(Number(T.testNum)))):100,Q=100,$=sy(U),W=ly($);let K=1;const ee={cancelled:!1},Z={},ne=[];vn(`${E}第${A}关`,`开始筛选，最多尝试${Q}次，每次模拟${U}局`);const me=q=>{const ae=_[Math.floor(Math.random()*_.length)];let ge=null;ge=cy(T,ae,q,U,{runButton:r,info:a,roundPrefix:E,displayLevel:A,levelIndex:I,totalLevels:i,maxAttemptsPerLevel:Q,simulationWorkerLimit:W,disableWorkerPoolReuse:$>1,isCancelled:()=>ee.cancelled,onStep:Me=>{vn(`${E}${Me}`)}}).then(Me=>({result:Me,wrapped:ge})).catch(Me=>({result:{attempt:q,matched:!1,skipped:!0,reason:"error",error:Me},wrapped:ge})),ne.push(ge)};for(;(K<=Q||ne.length>0)&&!O;){for(;K<=Q&&ne.length<$;)me(K),K++;if(ne.length===0)break;const{result:q,wrapped:ae}=await Promise.race(ne),ge=ne.indexOf(ae);if(ge>=0&&ne.splice(ge,1),q?.matched){O=q.boardData,F=q.winRate,D=q.pairMetrics,H=q.initialAdjacentMatchCount,L=q.attempt,ee.cancelled=!0;break}const Me=q?.reason||"unknown";Z[Me]=(Z[Me]||0)+1,Number(q?.attempt)%2===0&&await rt(0)}if(O&&(ee.cancelled=!0),!O){p++;const q=Lf(Z);g.currentLevelIndex=I+1,g.failureCount++,Wt(g),Qn("failure",`${E}第${A}关失败：连续${Q}次未命中筛选条件，${q}`),a&&(a.textContent=`${E}第${A}关连续${Q}次未命中筛选条件，已跳过。`);continue}const se=D||{averagePairPerStep:0,firstHalfAveragePairCount:0,secondHalfAveragePairCount:0,progressPhaseAveragePairCounts:oe(),progressPhaseDifficultyStepCounts:oe(),progressPhaseDifficultyScoreSums:oe(),progressPhaseAverageDifficultyScores:oe(),stepPairCountSums:[],stepPairCountSampleCounts:[],averageStepPairCounts:[],stepDifficultyScoreSums:[],stepDifficultyScoreSampleCounts:[],averageStepDifficultyScores:[],winStepDifficultyScoreSums:[],winStepDifficultyScoreSampleCounts:[],winAverageStepDifficultyScores:[],averageFailureProgressPercent:0,failedGameCount:0,zeroTurnCount:0,oneTurnCount:0,sameDirTwoTurnCount:0,reverseTwoTurnCount:0,averageAvailableZeroTurnCountPerStep:0,averageAvailableOneTurnCountPerStep:0,averageAvailableSameDirTwoTurnCountPerStep:0,averageAvailableReverseTwoTurnCountPerStep:0,averageTrialErrorPerStep:0,maxTrialErrorCount:0,averageActualPairDistance:0,averageAvailablePairDistance:0,initialFaceDistributionDistance:os(O),averageStepDifficultyScore:0,maxStepDifficultyScore:0},le=Math.max(0,Number.isFinite(Number(H))?Number(H):Ro(O)),We=Ms(O,4);h+=Cs(A,O,T.direction,F,se,le,We,!0,!!T.humanMode,Ie(T.humanModeBesidePercent,70),Er())+`
`,C++,g.currentLevelIndex=I+1,g.successCount++,Wt(g),Qn("success",`${E}第${A}关完成：第${L||"?"}次尝试命中，胜率${((Number(F)||0)*100).toFixed(1)}%`),a&&(a.textContent=`${E}第${A}关完成（${C}/${i}）。`)}const S=new Date,M=[S.getFullYear(),String(S.getMonth()+1).padStart(2,"0"),String(S.getDate()).padStart(2,"0"),"_",String(S.getHours()).padStart(2,"0"),String(S.getMinutes()).padStart(2,"0"),String(S.getSeconds()).padStart(2,"0")].join(""),x=s>1?`第${f}轮_`:"",N=new Blob([h],{type:"text/plain;charset=utf-8"}),P=URL.createObjectURL(N),w=document.createElement("a");if(w.href=P,w.download=`跑关结果_${x}${C}关_${M}.txt`,w.click(),setTimeout(()=>URL.revokeObjectURL(P),0),l+=C,c+=p,u+=y,d+=b,a){const I=s>1?`第${f}轮完成：`:"跑关完成：";a.textContent=`${I}成功${C}关，超限跳过${p}关，配置跳过${y}关，jump跳过${b}关。`}vn(s>1?`第${f}/${s}轮完成`:"跑关完成",`成功${C}关，失败${p+y}关，跳过${b}关`)}a&&s>1&&(a.textContent=`跑关全部完成（${s}轮）：成功${l}关，超限跳过${c}关，配置跳过${u}关，jump跳过${d}关。`),s>1&&vn("跑关全部完成",`成功${l}关，失败${c+u}关，跳过${d}关`)}finally{ut=!1,gr(!1),r&&(r.disabled=!1,r.textContent=o||"跑关导出")}}function dy(e=100){const t=Number.isFinite(Number(e))?Math.max(1,Math.min(1e4,Math.round(Number(e)))):100,n=document.getElementById("batchCount");if(!n)return t;const r=Number(n.value),a=Number.isFinite(r)?Math.max(1,Math.min(1e4,Math.round(r))):t;return n.value!==String(a)&&(n.value=String(a)),a}function my(e){const t=[];if(typeof e!="string")return t;const n=e.split(/\r?\n/).map(r=>r.trim()).filter(Boolean);for(const r of n){const a=r.split("	").map(y=>y.trim());if(a.length<3)continue;const o=String(a[0]||"").trim(),i=String(a[1]||"").trim(),s=String(a[2]||"").trim();let l="",c="";if(a.length>=5)l=String(a[a.length-2]||"").trim(),c=String(a[a.length-1]||"").trim();else if(a.length>=4){const y=String(a[a.length-1]||"").trim();/^(0|1|true|false|on|off|yes|no|human)$/i.test(y)?l=y:c=y}if(!o||!i)continue;let u=null;try{u=JSON.parse(i)}catch{u=null}const d=Jt(u);if(!d)continue;const f=Number(s);if(!Number.isFinite(f))continue;const h=Math.max(0,Math.min(8,Math.round(f))),C=Number.isFinite(Number(l))?Number(l)===1:/^(true|on|yes|human)$/i.test(l),p=Ie(c,70);t.push({levelName:o,boardData:d,direction:h,humanMode:C,humanModeBesidePercent:p})}return t}async function Zu(e,t=""){const n=my(e);if(!Array.isArray(n)||n.length===0){alert("读取失败：配置文件中没有有效关卡。");return}const r=dy(100),a=document.getElementById("btnBatchGenerate"),o=document.getElementById("info"),i=a?a.textContent:"",s=n.length;let l="";Pt=!0,gr(!0),a&&(a.disabled=!0,a.textContent="计算中...");try{for(let p=0;p<s;p++){const y=n[p],b=String(y.levelName||`第${p+1}关`).trim();o&&(o.textContent=`批量计算中：${p+1}/${s}（${b}）`);const g=await bs(y.boardData,y.direction,r,(x,N)=>{const P=Number.isFinite(Number(N))&&Number(N)>0?Number(N):r,w=Number.isFinite(Number(x))?Math.max(0,Number(x)):0,I=Math.max(1,Math.floor(P/10));(w>=P||w===1||w%I===0)&&o&&(o.textContent=`批量计算中：${p+1}/${s}（${b}），模拟 ${w}/${P}`)},{humanMode:!!y.humanMode,humanModeBesidePercent:Ie(y.humanModeBesidePercent,70)}),S=Ro(y.boardData),M=Ms(y.boardData,4);l+=Cs(b,y.boardData,y.direction,g.winRate,g,S,M,!0,!!y.humanMode,Ie(y.humanModeBesidePercent,70),Er())+`
`,p%2===0&&await rt(0)}const c=new Date,u=[c.getFullYear(),String(c.getMonth()+1).padStart(2,"0"),String(c.getDate()).padStart(2,"0"),"_",String(c.getHours()).padStart(2,"0"),String(c.getMinutes()).padStart(2,"0"),String(c.getSeconds()).padStart(2,"0")].join(""),d=t?`_${t.replace(/[\\/:*?"<>|]+/g,"_")}`:"",f=new Blob([l],{type:"text/plain;charset=utf-8"}),h=URL.createObjectURL(f),C=document.createElement("a");C.href=h,C.download=`批量计算结果_${s}关_${r}局${d}_${u}.txt`,C.click(),setTimeout(()=>URL.revokeObjectURL(h),0),o&&(o.textContent=`批量计算完成：共${s}关，每关模拟${r}局。`)}catch(c){console.error("Batch calculate failed:",c),alert("批量计算失败，请检查配置后重试。")}finally{Pt=!1,gr(!1),a&&(a.disabled=!1,a.textContent=i||"导出批量")}}async function fy(e){const t=e?.target||document.getElementById("batchGenerateFileInput"),n=e?.target?.files?.[0];if(n)try{const r=await n.text();await Zu(r,n.name||"")}catch(r){console.error("Read batch generate file failed:",r),alert("读取配置文件失败，请重试。")}finally{t&&(t.value="")}}async function hy(){if(Pt||ut||Et)return;if(typeof window.showOpenFilePicker=="function")try{const[t]=await window.showOpenFilePicker({multiple:!1,types:[{description:"批量计算配置",accept:{"text/plain":[".txt"]}}]});if(!t)return;const n=await t.getFile(),r=await n.text();await Zu(r,n.name||"");return}catch(t){if(t?.name==="AbortError")return;console.error("Batch generate picker failed:",t)}const e=document.getElementById("batchGenerateFileInput");if(!e){alert("当前浏览器不支持文件选择，请手动更新浏览器后重试。");return}e.value="",e.click()}function fo(e,t,n){const r=Number(e);return Number.isFinite(r)?Math.max(t,Math.min(n,r)):t}function ho(e,t,n){e&&(e.style.left=`${Math.round(t)}px`,e.style.top=`${Math.round(n)}px`)}function po(e){if(!e)return;const t=e.getBoundingClientRect(),n=Math.max(0,window.innerWidth-t.width),r=Math.max(0,window.innerHeight-t.height),a=fo(t.left,0,n),o=fo(t.top,0,r);ho(e,a,o)}function py(e){return!e||!Number.isInteger(e.row1)||!Number.isInteger(e.col1)||!Number.isInteger(e.row2)||!Number.isInteger(e.col2)?"未给出":`(${e.row1}, ${e.col1}) -> (${e.row2}, ${e.col2})`}function gy(e){const t=e.role==="assistant"?"assistant":"user",n=document.createElement("div");n.className=`agent-chat-msg agent-chat-msg-${t}`;const r=String(e.collapseBaseText||e.text||""),a=Number(e.collapseCount);return Number.isFinite(a)&&a>1?n.textContent=`${r}（+${a-1}）`:n.textContent=String(e.text||""),n}function yy(e){const t=document.createElement("div");t.className="agent-chat-step-card";const n=document.createElement("div");n.className="agent-step-head";const r=document.createElement("div");r.className="agent-step-title",r.textContent=`第 ${Number(e.stepIndex)||0} 步`;const a=document.createElement("div"),o=String(e.gameOutcome||"").trim().toLowerCase(),i=o==="victory"?"胜利":o==="failure"?"失败":"",s=!e.success||o==="failure";a.className=`agent-step-result ${s?"fail":"ok"}`;const l=e.success?"操作结果：正确":`操作结果：错误${e.error?`（${e.error}）`:""}`;a.textContent=i?`${l}｜结局：${i}`:l,Array.isArray(e.boardSnapshotBefore)&&e.boardSnapshotBefore.length>0&&(a.classList.add("previewable"),a.title="悬停查看该步操作前棋盘",a.addEventListener("mouseenter",S=>{const M=a.getBoundingClientRect().left+12,x=a.getBoundingClientRect().bottom+8;Gu(e,S?.clientX??M,S?.clientY??x)}),a.addEventListener("mousemove",S=>{Na(S.clientX,S.clientY)}),a.addEventListener("mouseleave",()=>{Ve()})),n.appendChild(r),n.appendChild(a),t.appendChild(n);const u=document.createElement("div");u.className="agent-step-grid";const d=`${Number.isFinite(Number(e.remainingPairsBefore))?Number(e.remainingPairsBefore):"-"} -> ${Number.isFinite(Number(e.remainingPairsAfter))?Number(e.remainingPairsAfter):"-"}`,f=Number.isFinite(Number(e.preStepDecisionFailCount))?String(Math.max(0,Number(e.preStepDecisionFailCount))):"0",h=ct(e.stepDifficultyScore),C=ct(e.availableDistanceBefore),p=[["剩余配对数",d],["每步难度分",h],["试错次数",f],["平均可配对距离",C]];for(const[S,M]of p){const x=document.createElement("div");x.className="agent-step-cell";const N=document.createElement("div");N.className="agent-step-label",N.textContent=S;const P=document.createElement("div");P.className="agent-step-value",P.textContent=M,x.appendChild(N),x.appendChild(P),u.appendChild(x)}t.appendChild(u);const y=String(e.thought||"").trim(),b=String(e.reason||"").trim(),g=String(e.cancelReason||"").trim();if(y||b||g){const S=document.createElement("details");S.className="agent-step-thought";const M=document.createElement("summary");M.textContent="思考过程（默认折叠）",S.appendChild(M);const x=document.createElement("div");x.className="agent-step-thought-content";const N=[];y&&N.push(`思考：${y}`),b&&N.push(`依据：${b}`),g&&N.push(`取消/重选：${g}`),x.textContent=N.join(`
`),S.appendChild(x),t.appendChild(S)}return t}function br(){const e=v.elements;if(e?.chatList){if(e.chatList.innerHTML="",!Array.isArray(v.chatMessages)||v.chatMessages.length===0){const t=document.createElement("div");t.className="agent-chat-empty",t.textContent="这里会显示对话消息。先读取本地 API 配置文件，再开始聊天。",e.chatList.appendChild(t);return}for(const t of v.chatMessages)if(!(!t||typeof t!="object")){if(t.kind==="step"){e.chatList.appendChild(yy(t));continue}typeof t.text=="string"&&e.chatList.appendChild(gy(t))}e.chatList.scrollTop=e.chatList.scrollHeight}}function ye(e,t,n=null){const r=typeof t=="string"?t.trim():"";if(!r)return;const a=e==="assistant"?"assistant":"user";Array.isArray(v.chatMessages)||(v.chatMessages=[]);const o={role:a,text:r};n&&typeof n=="object"&&Object.assign(o,n),v.chatMessages.push(o),br()}function by(e,t){const n=String(e||"").trim(),r=String(t).trim();if(!n)return;if(!r){ye("assistant",n);return}Array.isArray(v.chatMessages)||(v.chatMessages=[]);const a=v.chatMessages,o=a.length>0?a[a.length-1]:null;if(o&&typeof o=="object"&&o.kind!=="step"&&o.role==="assistant"&&String(o.collapseKey||"")===r){const i=Math.max(1,Number(o.collapseCount)||1)+1;o.collapseCount=i,o.collapseBaseText||(o.collapseBaseText=String(o.text||n)),o.text=String(o.collapseBaseText),br();return}a.push({role:"assistant",text:n,collapseKey:r,collapseCount:1,collapseBaseText:n}),br()}function Cy(e){!e||typeof e!="object"||(Array.isArray(v.chatMessages)||(v.chatMessages=[]),v.chatMessages.push({kind:"step",role:"assistant",stepIndex:Number(e.stepIndex)||0,success:!!e.success,move:e?.move&&typeof e.move=="object"?{row1:Number(e.move.row1),col1:Number(e.move.col1),row2:Number(e.move.row2),col2:Number(e.move.col2)}:null,moveText:String(e.moveText||"未给出"),candidateCount:Number(e.candidateCount),reason:String(e.reason||""),connectionType:String(e.connectionType||""),turnCount:Number(e.turnCount),connectionDistance:Number(e.connectionDistance),availableDistanceBefore:Number(e.availableDistanceBefore),availableDistanceAfter:Number(e.availableDistanceAfter),boardDifficultyBefore:Number(e.boardDifficultyBefore),boardDifficultyAfter:Number(e.boardDifficultyAfter),stepDifficultyScore:Number(e.stepDifficultyScore),maxStepDifficultyScore:Number(e.maxStepDifficultyScore),availableConnectionTypeCountsBefore:e?.availableConnectionTypeCountsBefore&&typeof e.availableConnectionTypeCountsBefore=="object"?{...e.availableConnectionTypeCountsBefore}:hn(),cancelReason:String(e.cancelReason||""),remainingPairsBefore:Number(e.remainingPairsBefore),remainingPairsAfter:Number(e.remainingPairsAfter),remainingCardCountBefore:Number(e.remainingCardCountBefore),remainingCardCountAfter:Number(e.remainingCardCountAfter),clearedCardCountBefore:Number(e.clearedCardCountBefore),clearedCardCountAfter:Number(e.clearedCardCountAfter),gameOutcome:String(e.gameOutcome||""),preStepDecisionFailCount:Number(e.preStepDecisionFailCount),feelingLevel:String(e.feelingLevel||""),feelingDetail:String(e.feelingDetail||""),thought:String(e.thought||""),error:String(e.error||""),humanMode:!!e.humanMode,boardSnapshotBefore:Array.isArray(e.boardSnapshotBefore)?G(e.boardSnapshotBefore):null}),br())}function Sy(){v.chatMessages=[],v.userConversation=[],br()}function ei(e){if(!e||typeof e!="object")return null;const t=String(e.baseUrl??e.apiBaseUrl??e.url??"").trim(),n=String(e.apiKey??e.key??e.token??"").trim(),r=String(e.model??e.modelName??"").trim();if(!t||!n||!r)return null;const o=String(e.name??e.profileName??"").trim()||r;return{id:String(e.id||"").trim(),name:o,baseUrl:t,apiKey:n,model:r}}function Qu(e){if(!e||typeof e!="object")return{profiles:[],activeProfileId:""};const t=[],n=s=>{const l=ei(s);l&&t.push(l)};if(Array.isArray(e.profiles))for(const s of e.profiles)n(s);if(t.length===0&&Array.isArray(e.models)&&e.models.length>0){const s=ei(e);if(s)for(const l of e.models){const c=typeof l=="string"?l.trim():String(l?.model||l?.name||"").trim();c&&t.push({id:"",name:c,baseUrl:s.baseUrl,apiKey:s.apiKey,model:c})}}if(t.length===0){const s=[e];e.api&&typeof e.api=="object"&&s.push(e.api),e.agentApi&&typeof e.agentApi=="object"&&s.push(e.agentApi),e.agent&&typeof e.agent=="object"&&s.push(e.agent);for(const l of s){const c=ei(l);if(c){t.push(c);break}}}const r=new Set,a=[];for(let s=0;s<t.length;s++){const l=t[s],c=`profile_${s+1}`;let u=String(l.id||c).replace(/[^a-zA-Z0-9_-]/g,"_");for(u||(u=c);r.has(u);)u=`${u}_${s+1}`;r.add(u),a.push({id:u,name:String(l.name||l.model||`模型${s+1}`),baseUrl:l.baseUrl,apiKey:l.apiKey,model:l.model})}const o=String(e.activeProfileId??e.defaultProfileId??e.selectedProfileId??"").trim(),i=a.some(s=>s.id===o)?o:a[0]?.id||"";return{profiles:a,activeProfileId:i}}function ed(e){const t=Array.isArray(e?.profiles)?e.profiles.map(r=>({...r})):[],n=String(e?.activeProfileId||"").trim();return{profiles:t,activeProfileId:n}}function td(e){const t=String(e||"").trim();return t&&(Array.isArray(v.apiProfiles)?v.apiProfiles:[]).find(r=>r.id===t)||null}function vt(){const e=td(v.activeProfileId);return e||(Array.isArray(v.apiProfiles)?v.apiProfiles:[])[0]||null}function nd(){const e={profiles:Array.isArray(v.apiProfiles)?v.apiProfiles.map(t=>({...t})):[],activeProfileId:String(v.activeProfileId||"").trim()};try{localStorage.setItem(Vl,JSON.stringify(e))}catch(t){console.error("Save agent config failed:",t)}}function vy(){try{const e=localStorage.getItem(Vl);if(!e){v.apiProfiles=[],v.activeProfileId="";return}const t=JSON.parse(e),n=Qu(t);v.apiProfiles=n.profiles,v.activeProfileId=n.activeProfileId}catch(e){console.error("Load agent config failed:",e),v.apiProfiles=[],v.activeProfileId=""}}function Py(){try{localStorage.setItem(Ul,v.humanModeEnabled?"1":"0")}catch(e){console.error("Save agent human mode failed:",e)}}function xy(){try{const e=String(localStorage.getItem(Ul)||"").trim();v.humanModeEnabled=e==="1"||/^true$/i.test(e)}catch(e){console.error("Load agent human mode failed:",e),v.humanModeEnabled=!1}}function My(){try{localStorage.setItem(Yl,v.quickModeEnabled?"1":"0")}catch(e){console.error("Save agent quick mode failed:",e)}}function Ny(){try{const e=String(localStorage.getItem(Yl)||"").trim();v.quickModeEnabled=e==="1"||/^true$/i.test(e)}catch(e){console.error("Load agent quick mode failed:",e),v.quickModeEnabled=!1}}function wy(e){const t=String(e||"");return t?t.length<=6?`${t.slice(0,2)}***`:`${t.slice(0,3)}***${t.slice(-3)}`:"-"}function Ay(e){const t=String(e||"").trim();return t&&v.profileValidation?.[t]||null}function go(e){const t=Ay(e);return t?t.ok?`可用（${t.reason||"验证成功"}）`:`不可用（${t.reason||"未知原因"}）`:"未验证"}function Tl(e,t,n){const r=String(e||"").trim();r&&((!v.profileValidation||typeof v.profileValidation!="object")&&(v.profileValidation={}),v.profileValidation[r]={ok:!!t,reason:String(n||"").trim(),checkedAt:Date.now()})}function Iy(){const e=v.pendingApiConfigData||{profiles:[]},t=Array.isArray(e.profiles)?e.profiles:[];return t.length===0?null:t.find(n=>n.id===v.pendingSelectedProfileId)||t[0]}function Ty(){const e=v.elements;if(!e?.configProfileSelect)return;const t=e.configProfileSelect,n=v.pendingApiConfigData||{profiles:[],activeProfileId:""},r=Array.isArray(n.profiles)?n.profiles:[],a=r.some(o=>o.id===v.pendingSelectedProfileId)?v.pendingSelectedProfileId:n.activeProfileId||r[0]?.id||"";if(v.pendingSelectedProfileId=a,t.innerHTML="",r.length===0){const o=document.createElement("option");o.value="",o.textContent="未读取配置项",t.appendChild(o),t.value="";return}for(const o of r){const i=document.createElement("option");i.value=o.id,i.textContent=`${o.name} (${o.model})`,t.appendChild(i)}t.value=a}function ws(){const e=v.elements;if(!e?.modelSelect)return;const t=e.modelSelect,n=Array.isArray(v.apiProfiles)?v.apiProfiles:[],r=String(t.value||"");if(t.innerHTML="",n.length===0){const o=document.createElement("option");o.value="",o.textContent="未配置",t.appendChild(o),t.value="";return}for(const o of n){const i=document.createElement("option");i.value=o.id,i.textContent=`${o.name} (${o.model})`,t.appendChild(i)}const a=n.some(o=>o.id===v.activeProfileId)?v.activeProfileId:n.some(o=>o.id===r)?r:n[0].id;t.value=a,v.activeProfileId=a}function ti(e,t={}){const{persist:n=!0,silent:r=!1}=t,a=td(e)||vt();v.activeProfileId=a?.id||"",n&&nd(),ws(),r||(a?X(`状态：当前模型 ${a.name}，验证：${go(a.id)}`):X("状态：未配置模型",!0)),ke()}function rn(e="",t=!1){const n=v.elements;if(!n)return;const r=Iy()||{id:"",name:"",baseUrl:"",apiKey:"",model:""};Ty(),n.configPreviewName.textContent=r.name||"-",n.configPreviewBaseUrl.textContent=r.baseUrl||"-",n.configPreviewApiKey.textContent=wy(r.apiKey),n.configPreviewModel.textContent=r.model||"-",n.configPreviewValidation.textContent=r.id?go(r.id):"未验证";const a=typeof e=="string"&&e.trim()?e.trim():v.pendingApiConfigSource?`已加载：${v.pendingApiConfigSource}`:"未加载配置文件";n.configFileStatus.textContent=a,n.configFileStatus.classList.toggle("error",!!t)}function Dy(){const e=v.elements;e&&(e.icon.classList.add("hidden"),e.dialog.classList.add("visible"),po(e.dialog),e.chatInput.focus(),ke())}function Ey(){const e=v.elements;e&&(e.dialog.classList.remove("visible"),Ni(),e.icon.classList.remove("hidden"),po(e.icon))}function By(){const e=v.elements;e&&(v.pendingApiConfigData=ed({profiles:v.apiProfiles,activeProfileId:v.activeProfileId}),v.pendingSelectedProfileId=v.pendingApiConfigData.activeProfileId,v.pendingApiConfigSource=Array.isArray(v.apiProfiles)&&v.apiProfiles.length>0?"当前已保存配置":"",rn(),e.configOverlay.classList.add("visible"))}function ni(){const e=v.elements;e&&e.configOverlay.classList.remove("visible")}function Ry(){const e=v.elements;e?.runSettingsOverlay&&e.runSettingsOverlay.classList.add("visible")}function Ni(){const e=v.elements;e?.runSettingsOverlay&&e.runSettingsOverlay.classList.remove("visible")}async function ky(e){if(!e)return;let t="";try{t=await e.text()}catch(a){console.error("Read agent config file failed:",a),rn("读取配置文件失败，请重试。",!0);return}let n=null;try{n=JSON.parse(t)}catch{rn("配置文件不是有效 JSON。",!0);return}const r=Qu(n);if(!r||!Array.isArray(r.profiles)||r.profiles.length===0){rn("配置缺少可用模型项。请提供 profiles 或 baseUrl/apiKey/model。",!0);return}v.pendingApiConfigData=ed(r),v.pendingSelectedProfileId=r.activeProfileId||r.profiles[0]?.id||"",v.pendingApiConfigSource=e.name||"本地文件",rn()}function ri(){v.statusLoadingTimer&&(clearInterval(v.statusLoadingTimer),v.statusLoadingTimer=null),v.statusLoadingTick=0,v.statusLoadingBaseText=""}function Fy(e,t){if(!e)return;const n=["status-idle","status-running","status-waiting","status-success","status-warning","status-error"];for(const a of n)e.classList.remove(a);const r=n.includes(`status-${t}`)?`status-${t}`:"status-idle";e.classList.add(r)}function Ly(e,t=!1){if(t)return{type:"error",loading:!1};const n=String(e||"");return n?/思考中|执行操作中|等待结算反馈|持续操作中|正在验证|正在读取|请求中|加载中/i.test(n)?{type:"running",loading:!0}:/等待进入试玩模式|单步模式，就绪|待机|等待/i.test(n)?{type:"waiting",loading:!1}:/已通关|验证通过|可继续|请求成功/i.test(n)?{type:"success",loading:!1}:/已终止|已停止|空闲|单步模式|持续模式/i.test(n)?{type:"idle",loading:!1}:/失败|不可用|错误|异常|缺少|未配置/i.test(n)?{type:"warning",loading:!1}:{type:"idle",loading:!1}:{type:"idle",loading:!1}}function X(e,t=!1){const n=v.elements;if(!n?.runStatus)return;const r=String(e||"状态：空闲"),a=Ly(r,t);if(Fy(n.runStatus,a.type),!a.loading){ri(),n.runStatus.textContent=r;return}const o=r.replace(/(?:\s*[.。…]+)\s*$/,"");v.statusLoadingTimer&&v.statusLoadingBaseText===o||(ri(),v.statusLoadingBaseText=o,n.runStatus.textContent=`${o}.`,v.statusLoadingTimer=setInterval(()=>{const i=v.elements?.runStatus;if(!i){ri();return}v.statusLoadingTick=(v.statusLoadingTick+1)%3;const s=v.statusLoadingTick+1;i.textContent=`${v.statusLoadingBaseText}${".".repeat(s)}`},360))}function ke(){const e=v.elements;if(!e)return;const t=v.runMode==="step",n=v.isRunning&&!t,r=Array.isArray(v.apiProfiles)&&v.apiProfiles.length>0,a=r||!!v.humanModeEnabled||!!v.quickModeEnabled;e.runModeSelect&&(e.runModeSelect.value=t?"step":"continuous",e.runModeSelect.disabled=v.isExecutingStep||n),e.humanModeToggle&&(e.humanModeToggle.checked=!!v.humanModeEnabled,e.humanModeToggle.disabled=v.isExecutingStep||v.isRunning),e.quickModeToggle&&(e.quickModeToggle.checked=!!v.quickModeEnabled,e.quickModeToggle.disabled=v.isExecutingStep||v.isRunning),e.modelSelect&&(ws(),e.modelSelect.disabled=v.isExecutingStep||v.isRunning||!r),e.validateApiBtn&&(e.validateApiBtn.disabled=v.isExecutingStep||!r),e.runSettingsBtn&&(e.runSettingsBtn.disabled=v.isExecutingStep),e.runStartBtn&&(e.runStartBtn.disabled=v.isExecutingStep||n||!a),e.runStepBtn&&(e.runStepBtn.disabled=!t||v.isExecutingStep||!a),e.runStopBtn&&(e.runStopBtn.disabled=!v.isRunning&&!v.isExecutingStep)}function $y(){if(!m||!m.active)return"";const e=Array.isArray(m.originalBoard)?m.originalBoard:m.boardData,t=Number.isInteger(m.direction)?m.direction:0;return`${JSON.stringify(e)}|${t}`}function Rr(e=!1){const t=$y();if(!t){v.playSessionSignature="",v.playSessionReviewSignature="",v.playSessionInitialRemovableCount=0,v.pendingDecisionFailCount=0,v.stepMemory=[],v.lastActionResult=null,Cr();return}if(e||t!==v.playSessionSignature){const n=Array.isArray(m?.originalBoard)?m.originalBoard:m?.boardData,r=Array.isArray(n)?De(n):0;v.playSessionSignature=t,v.playSessionReviewSignature="",v.playSessionInitialRemovableCount=Number.isFinite(Number(r))?Math.max(0,Math.round(Number(r))):0,v.pendingDecisionFailCount=0,v.stepMemory=[],v.lastActionResult=null,Cr(),ye("assistant","已创建新关卡记忆会话。")}}function rd(e=null){const t=Number(v.playSessionInitialRemovableCount);if(Number.isFinite(t)&&t>0)return Math.max(0,Math.round(t));const n=Array.isArray(m?.originalBoard)?m.originalBoard:Array.isArray(e)?e:m?.boardData,r=Array.isArray(n)?De(n):0;return Number.isFinite(Number(r))?Math.max(0,Math.round(Number(r))):0}function ad(e=null){const t=e||vt(),n=String(t?.baseUrl||"").trim().replace(/\/+$/,"");return n?`${n}/chat/completions`:""}function _y(e){return typeof e=="string"?e:Array.isArray(e)?e.map(t=>typeof t=="string"?t:t&&typeof t=="object"&&typeof t.text=="string"?t.text:"").join(`
`):""}async function jn(e,t={}){const n=t.profile||vt(),r=ad(n),a=String(n?.apiKey||"").trim(),o=String(n?.model||"").trim();if(!r||!a||!o)throw new Error("API 配置不完整");const i=new AbortController;v.activeFetchAbortController=i;try{const s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},signal:i.signal,body:JSON.stringify({model:o,temperature:Number.isFinite(Number(t.temperature))?Number(t.temperature):.2,max_tokens:Number.isFinite(Number(t.maxTokens))?Math.max(1,Math.floor(Number(t.maxTokens))):void 0,messages:e})});if(!s.ok){const d=await s.text();throw new Error(`模型请求失败(${s.status})：${d||"未知错误"}`)}const c=(await s.json())?.choices?.[0]?.message?.content,u=_y(c).trim();if(!u)throw new Error("模型返回内容为空");return u}catch(s){throw s?.name==="AbortError"?new Error("请求已终止"):s}finally{v.activeFetchAbortController===i&&(v.activeFetchAbortController=null)}}function Oy(e,t=null){const n=String(e).replace(/\s+/g," ").trim(),r=ad(t);if(/failed to fetch/i.test(n)||/networkerror/i.test(n)||/load failed/i.test(n)){const a=String(t?.baseUrl||"").trim();return/^https?:\/\//i.test(a)?location.protocol==="https:"&&/^http:\/\//i.test(a)?"当前页面是 HTTPS，但配置了 HTTP API，浏览器会拦截混合内容。":/cloud\.siliconflow\.cn/i.test(a)?"当前像是控制台域名（cloud.*），请改为 API 域名（例如 https://api.siliconflow.cn/v1）。":`浏览器无法连通该接口（可能是 CORS/网络/域名错误）。请检查：${r}`:"Base URL 缺少 http/https 协议头。"}return n?n.length<=160?n:`${n.slice(0,160)}...`:"未知原因"}async function Hy(e=!0){const t=vt();if(!t){X("状态：验证失败，未选择模型",!0),e&&ye("assistant","验证失败：当前没有可用模型配置。");return}X(`状态：正在验证 ${t.name}...`),ke();try{await jn([{role:"system",content:"你是连通性测试助手。"},{role:"user",content:"请仅回复：pong"}],{temperature:0,maxTokens:8,profile:t}),Tl(t.id,!0,"请求成功");const n=`模型 ${t.name} 验证通过`;X(`状态：${n}`),e&&ye("assistant",`${n}。`)}catch(n){const r=Oy(n?.message||"请求失败",t);Tl(t.id,!1,r),X(`状态：模型 ${t.name} 不可用，原因：${r}`,!0),e&&ye("assistant",`验证失败：模型 ${t.name} 不可用。原因：${r}`)}finally{rn(),ke()}}function Aa(){if(!m||!m.active||!Array.isArray(m.boardData))return null;const e=G(m.boardData),t=qn(e),n=lo(e),r=Number.isInteger(m.direction)?m.direction:0;return{boardData:e,width:e[0]?.length||0,height:e.length,direction:r,directionRule:Gn(r),mechanismSummary:Xt(e),remainingPairs:Array.isArray(t)?t.length:0,pairCombinationTotal:n,removablePairs:Array.isArray(t)?t:[]}}function ct(e,t=2){const n=Number(e);return Number.isFinite(n)?Number.isInteger(n)?String(n):n.toFixed(t):"-"}function Wy(){return[{key:"pair_count",label:"剩余配对数"},{key:"step_difficulty_score",label:"每步难度分"},{key:"trial_error_count",label:"试错次数"},{key:"available_distance_before",label:"平均可配对距离"}]}function od(e){const t=Number(e?.connectionDistance);if(Number.isFinite(t)&&t>=0)return t;const n=e?.move&&typeof e.move=="object"?e.move:null;if(!n)return null;const r=Number(n.row1),a=Number(n.col1),o=Number(n.row2),i=Number(n.col2);return[r,a,o,i].every(Number.isFinite)?Math.abs(r-o)+Math.abs(a-i):null}function id(e,t={}){const n=Number(e?.trialErrorCount);if(Number.isFinite(n)&&n>=0)return Math.round(n);const r=Number(t?.carryFailures),a=Number.isFinite(r)&&r>0?Math.round(r):0,o=Number(e?.humanMetrics?.searchAttempts),i=Number(e?.humanMetrics?.successfulCandidateCount);let s=0;return Number.isFinite(o)&&Number.isFinite(i)?s=Math.max(0,Math.round(o-i)):s=e?.success?0:1,Math.max(0,Math.round(s+a))}function jy(e,t){const n=[],r={available_zero_turn_count:{key:"zeroTurnCount",label:"本步0拐数量"},available_one_turn_count:{key:"oneTurnCount",label:"本步1拐数量"},available_same_dir_two_turn_count:{key:"sameDirTwoTurnCount",label:"本步同向2拐数量"},available_reverse_two_turn_count:{key:"reverseTwoTurnCount",label:"本步反向2拐数量"}};for(const a of e){const o=Number(a?.step)||0;if(t==="pair_count"){const i=Number(a?.remainingPairsBefore),s=Number(a?.candidateCountBefore),l=Number.isFinite(i)&&i>=0?i:s;if(!Number.isFinite(l)||l<0)continue;n.push({step:o,value:l,tip:`第${o}步：可配对数 ${Math.round(l)}`});continue}if(t==="connection_distance"){const i=od(a);if(!Number.isFinite(i)||i<0)continue;n.push({step:o,value:i,tip:`第${o}步：连接距离 ${Number.isInteger(i)?i:i.toFixed(2)}`});continue}if(t==="available_distance_before"){const i=Number(a?.availableDistanceBefore);if(!Number.isFinite(i)||i<0)continue;n.push({step:o,value:i,tip:`第${o}步：平均可配对距离 ${ct(i)}`});continue}if(t==="step_difficulty_score"){const i=Number(a?.stepDifficultyScore);if(!Number.isFinite(i)||i<0)continue;n.push({step:o,value:i,tip:`第${o}步：难度分 ${ct(i)}`});continue}if(t==="max_step_difficulty_score"){const i=Number(a?.maxStepDifficultyScore);if(!Number.isFinite(i)||i<0)continue;n.push({step:o,value:i,tip:`第${o}步：当前最高分 ${ct(i)}`});continue}if(r[t]){const i=r[t],s=Number(a?.availableConnectionTypeCountsBefore?.[i.key]);if(!Number.isFinite(s)||s<0)continue;const l=Math.round(s);n.push({step:o,value:l,tip:`第${o}步：${i.label} ${l}`});continue}if(t==="trial_error_count"){const i=Number(a?.preStepDecisionFailCount),s=Number.isFinite(i)&&i>=0?Math.round(i):id(a);n.push({step:o,value:s,tip:`第${o}步：前置试错次数 ${s}`});continue}if(t==="pair_delta_after_move"){const i=Number(a?.remainingPairsBefore),s=Number(a?.remainingPairsAfter);if(!Number.isFinite(i)||!Number.isFinite(s))continue;const l=i-s;n.push({step:o,value:l,tip:`第${o}步：配对数变动 ${l>=0?"+":""}${l}`});continue}if(t==="remaining_card_count"){const i=Number(a?.remainingCardCountAfter);if(!Number.isFinite(i)||i<0)continue;n.push({step:o,value:i,tip:`第${o}步：剩余牌数 ${Math.round(i)}`});continue}if(t==="cleared_card_count"){const i=Number(a?.clearedCardCountAfter);if(!Number.isFinite(i)||i<0)continue;n.push({step:o,value:i,tip:`第${o}步：已消除牌数 ${Math.round(i)}`});continue}if(t==="board_difficulty_before_after"){const i=Number(a?.boardDifficultyBefore),s=Number(a?.boardDifficultyAfter);if(!Number.isFinite(i)&&!Number.isFinite(s))continue;const l=Number.isFinite(s)?s:i;n.push({step:o,value:l,tip:`第${o}步：场面难度 ${ct(i)} -> ${ct(s)}`})}}return n}function Gy(e){const t=Array.isArray(e)?e:[],n=i=>t.map(s=>Number(s?.[i])).filter(s=>Number.isFinite(s)&&s>=0),r=i=>{const s=n(i);return s.length===0?null:s.reduce((l,c)=>l+c,0)/s.length},a=i=>{const s=n(i);return s.length>0?Math.max(...s):null},o=t.reduce((i,s)=>{const l=Number(s?.trialErrorCount??s?.preStepDecisionFailCount);return i+(Number.isFinite(l)&&l>0?l:0)},0);return[["平均每步分",ct(r("stepDifficultyScore"))],["最高分",ct(a("stepDifficultyScore"))],["平均实际距离",ct(r("connectionDistance"))],["平均可配对距离",ct(r("availableDistanceBefore"))],["累计试错",ct(o,0)]]}function Cr(){const e=v.elements?.memoryPanel;if(!e)return;e.innerHTML="";const t=Array.isArray(v.stepMemory)?v.stepMemory:[];if(t.length===0){const $=document.createElement("div");$.className="agent-memory-empty",$.textContent="每步记忆会在这里显示（摘要与趋势）。",e.appendChild($);return}const n=document.createElement("div");n.className="agent-memory-header";const r=document.createElement("div");r.className="agent-memory-title",r.textContent="每步记忆面板",n.appendChild(r);const a=Wy(),o=a.some($=>$.key===v.memoryTrendView)?v.memoryTrendView:a[0].key;v.memoryTrendView=o;const i=document.createElement("div");i.className="agent-memory-view-tabs";const s=document.createElement("select");s.className="agent-memory-view-select",s.setAttribute("aria-label","选择统计图表");for(const $ of a){const W=document.createElement("option");W.value=$.key,W.textContent=$.label,W.selected=$.key===o,s.appendChild(W)}s.addEventListener("change",()=>{const $=String(s.value||"").trim();a.some(W=>W.key===$)&&(v.memoryTrendView=$,Cr())}),i.appendChild(s),n.appendChild(i),e.appendChild(n);const l=document.createElement("div");l.className="agent-memory-summary";for(const[$,W]of Gy(t)){const K=document.createElement("span");K.className="agent-memory-summary-item",K.textContent=`${$}：${W}`,l.appendChild(K)}e.appendChild(l);const c=document.createElement("div");c.className="agent-memory-trend";const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("agent-memory-trend-svg");const d=Number(e?.clientWidth)||320,f=Math.max(320,Math.floor(d-2)),h=86,C=28,p=6,y=8,g=h-16,S=C,M=f-C-p,x=Math.max(1,g-y-4);u.setAttribute("viewBox",`0 0 ${f} ${h}`);const N=t,P=jy(N,o),w=document.createElementNS("http://www.w3.org/2000/svg","line");w.classList.add("agent-memory-trend-axis"),w.setAttribute("x1",String(S)),w.setAttribute("y1",String(g)),w.setAttribute("x2",String(f-p)),w.setAttribute("y2",String(g)),u.appendChild(w);const I=document.createElementNS("http://www.w3.org/2000/svg","line");I.classList.add("agent-memory-trend-axis"),I.setAttribute("x1",String(S)),I.setAttribute("y1",String(y)),I.setAttribute("x2",String(S)),I.setAttribute("y2",String(g)),u.appendChild(I);const T=($,W,K,ee="middle")=>{const Z=document.createElementNS("http://www.w3.org/2000/svg","text");return Z.classList.add("agent-memory-trend-label"),Z.setAttribute("x",String($)),Z.setAttribute("y",String(W)),Z.setAttribute("text-anchor",ee),Z.textContent=K,Z},A=$=>Number.isInteger($)?String($):Number($).toFixed(2),E=Number(P[0]?.step),j=Number(P[P.length-1]?.step),_=Number(N[0]?.step)||1,O=Number(N[N.length-1]?.step)||N.length,F=Number.isFinite(E)?E:_,D=Number.isFinite(j)?j:O,H=document.createElementNS("http://www.w3.org/2000/svg","line");H.classList.add("agent-memory-trend-tick"),H.setAttribute("x1",String(S)),H.setAttribute("y1",String(g)),H.setAttribute("x2",String(S)),H.setAttribute("y2",String(g+3)),u.appendChild(H),u.appendChild(T(S,g+11,`${F}`,"middle"));const L=f-p,U=document.createElementNS("http://www.w3.org/2000/svg","line");U.classList.add("agent-memory-trend-tick"),U.setAttribute("x1",String(L)),U.setAttribute("y1",String(g)),U.setAttribute("x2",String(L)),U.setAttribute("y2",String(g+3)),u.appendChild(U),u.appendChild(T(L,g+11,`${D}`,"middle"));const Q=P.map($=>Number($?.value)).filter($=>Number.isFinite($));if(Q.length>0){const $=Math.min(...Q),W=Math.max(...Q),K=Math.max(1,W-$),ee=[W,W-K/2,$];for(const ne of ee){const me=y+(W-ne)/K*x,se=document.createElementNS("http://www.w3.org/2000/svg","line");se.classList.add("agent-memory-trend-grid"),se.setAttribute("x1",String(S)),se.setAttribute("y1",me.toFixed(2)),se.setAttribute("x2",String(f-p)),se.setAttribute("y2",me.toFixed(2)),u.appendChild(se);const le=document.createElementNS("http://www.w3.org/2000/svg","line");le.classList.add("agent-memory-trend-tick"),le.setAttribute("x1",String(S-3)),le.setAttribute("y1",me.toFixed(2)),le.setAttribute("x2",String(S)),le.setAttribute("y2",me.toFixed(2)),u.appendChild(le),u.appendChild(T(S-5,me+2.4,A(ne),"end"))}const Z=[];for(let ne=0;ne<P.length;ne++){const me=Number(P[ne]?.value);if(!Number.isFinite(me))continue;const se=P.length<=1?S+M/2:S+M*ne/Math.max(1,P.length-1),le=y+(W-me)/K*x;Z.push({x:se,y:le,value:me,step:Number(P[ne]?.step)||ne+1,tip:String(P[ne]?.tip||"")})}if(Z.length>0){const ne=Z.length>120?.95:Z.length>72?1.3:2.2,me=document.createElementNS("http://www.w3.org/2000/svg","path");me.classList.add("agent-memory-trend-line"),me.setAttribute("d",Z.map((se,le)=>`${le===0?"M":"L"} ${se.x.toFixed(2)} ${se.y.toFixed(2)}`).join(" ")),u.appendChild(me);for(const se of Z){const le=document.createElementNS("http://www.w3.org/2000/svg","circle");le.classList.add("agent-memory-trend-point"),le.setAttribute("cx",se.x.toFixed(2)),le.setAttribute("cy",se.y.toFixed(2)),le.setAttribute("r",String(ne));const We=document.createElementNS("http://www.w3.org/2000/svg","title");We.textContent=se.tip||`第${se.step}步：${se.value}`,le.appendChild(We),u.appendChild(le)}}}c.appendChild(u),e.appendChild(c)}function Dl(e){if(!e||typeof e!="object")return null;const t=Array.isArray(v.stepMemory)?v.stepMemory:[],n={...e},r=Number(n.step);return n.step=Number.isFinite(r)&&r>0?Math.floor(r):t.length+1,t.push(n),v.stepMemory=t.length>200?t.slice(-200):t,Cr(),n}function Ia(e=8,t={}){const n=Math.max(1,Math.floor(Number(e)||8)),r=t?.includeRemaining!==!1,a=t?.includeHumanMetrics!==!1;return(Array.isArray(v.stepMemory)?v.stepMemory:[]).slice(-n).map(s=>{const l={step:s.step,move:s.move,success:s.success,connectionType:s.connectionType,turnCount:s.turnCount,pathNodeCount:s.pathNodeCount,connectionDistance:s.connectionDistance,availableDistanceBefore:s.availableDistanceBefore,boardDifficultyBefore:s.boardDifficultyBefore,boardDifficultyAfter:s.boardDifficultyAfter,stepDifficultyScore:s.stepDifficultyScore,maxStepDifficultyScore:s.maxStepDifficultyScore,availableConnectionTypeCountsBefore:s?.availableConnectionTypeCountsBefore&&typeof s.availableConnectionTypeCountsBefore=="object"?{...s.availableConnectionTypeCountsBefore}:hn(),cancelReason:s.cancelReason,candidateCountBefore:s.candidateCountBefore};return r&&(l.remainingPairsAfter=s.remainingPairsAfter),a&&s?.humanMetrics&&typeof s.humanMetrics=="object"&&(l.humanMetrics={...s.humanMetrics}),l})}function sd(e){const t=String(e||"").trim();if(!t)return null;const n=t.match(/```(?:json)?\s*([\s\S]*?)\s*```/i),r=[];n&&n[1]&&r.push(n[1].trim()),r.push(t);const a=t.indexOf("{"),o=t.lastIndexOf("}");a>=0&&o>a&&r.push(t.slice(a,o+1));for(const i of r)try{const s=JSON.parse(i);if(s&&typeof s=="object")return s}catch{continue}return null}function ld(e){const t=sd(e);if(!t)return{ok:!1,error:"未解析到有效 JSON，请求返回格式错误。"};const n=t.move&&typeof t.move=="object"?t.move:null,r=n?{row1:Number(n.row1),col1:Number(n.col1),row2:Number(n.row2),col2:Number(n.col2)}:null,a=r&&Number.isInteger(r.row1)&&Number.isInteger(r.col1)&&Number.isInteger(r.row2)&&Number.isInteger(r.col2);return{ok:!0,thought:String(t.thought||t.analysis||"").trim(),reason:String(t.reason||t.why||"").trim(),currentFeeling:String(t.current_feeling||t.feeling||"").trim(),move:a?r:null}}function Pe(e){const t=Number(e);return!Number.isFinite(t)||t<=0?0:t>=1?1:t}function zy(e){const t=Array.isArray(e?.boardData)?e.boardData:[],n=[],r=new Map;for(let a=0;a<t.length;a++){const o=t[a];if(Array.isArray(o))for(let i=0;i<o.length;i++){const s=ce(o[i]);if(s===null)continue;const l={row:a,col:i,baseId:s};n.push(l),r.has(s)||r.set(s,[]);const c=r.get(s);c.length<36&&c.push(l)}}return{tiles:n,typeBuckets:r}}function cd(e){return e?`${e.row}_${e.col}_${e.baseId}`:""}function qy(e,t,n,r=null){if(!Array.isArray(e)||e.length===0)return null;const a=[];for(const l of e){if(!l)continue;const c=cd(l);if(n.has(c)||r instanceof Set&&r.has(l.baseId))continue;const u=Array.isArray(t.get(l.baseId))?t.get(l.baseId):[];if(u.length<=1)continue;let d=1/0;for(const h of u){if(!h||h.row===l.row&&h.col===l.col)continue;const C=Math.abs(h.row-l.row)+Math.abs(h.col-l.col);C<d&&(d=C)}if(!Number.isFinite(d))continue;let f=0;d<=2?f+=3.2:d<=4?f+=2.4:d<=6?f+=1.5:f+=.8,(l.row<=1||l.col<=1)&&(f+=.35),f+=(Math.random()-.5)*.9,a.push({tile:l,salience:f})}if(a.length===0)return null;a.sort((l,c)=>c.salience-l.salience);const o=Math.max(1,Math.min(6,a.length)),i=a.slice(0,o);return Math.random()<.78?i[Math.floor(Math.random()*i.length)]?.tile||null:a[Math.floor(Math.random()*a.length)]?.tile||null}function Vy(e,t,n=36){if(!e||!(t instanceof Map))return{candidates:[],inspectedCount:0};const r=Math.max(2,Math.floor(Number(n)||36)),a=Array.isArray(t.get(e.baseId))?t.get(e.baseId):[],o=[];let i=0;for(const s of a){if(!s||s.row===e.row&&s.col===e.col)continue;i++;const l=Math.abs(s.row-e.row)+Math.abs(s.col-e.col);if(o.push({row:s.row,col:s.col,baseId:s.baseId,distance:l}),o.length>=r)break}return{candidates:o,inspectedCount:i}}function ud(e,t){const n=Array.isArray(e?.boardData)?G(e.boardData):[];if(!Array.isArray(n)||n.length===0||!t)return 0;const{row1:r,col1:a,row2:o,col2:i}=t;if(!n[r]||!n[o])return 0;n[r][a]=0,n[o][i]=0;const s=(d,f)=>{let h=0;const C=[[1,0],[-1,0],[0,1],[0,-1]];for(const[p,y]of C){let b=0,g=d+p,S=f+y;for(;g>=0&&g<n.length&&S>=0&&S<(n[0]?.length||0)&&b<6&&n[g]?.[S]===0;)h+=.6,b++,g+=p,S+=y}return h},l=(n.length-1)/2,c=((n[0]?.length||1)-1)/2,u=(4-Math.min(4,Math.abs(r-l)+Math.abs(a-c))+(4-Math.min(4,Math.abs(o-l)+Math.abs(i-c))))*.12;return s(r,a)+s(o,i)+u}function Uy(e,t){const n=ud(e,t),r=ys(e,t);if(!r)return{score:n,summary:{remainingPairsDelta:0,releasedAttachment:0,iceHpReduction:0,obstacleReduction:0,magnetLockReduction:0,extraRemovedByMechanism:0}};const a=r.mechanismEffects||{};return{score:(Number(r.remainingPairsDelta)||0)*1.25+(Number(a.releasedAttachment)||0)*.95+(Number(a.iceHpReduction)||0)*.58+(Number(a.obstacleReduction)||0)*.78+(Number(a.magnetLockReduction)||0)*.36+(Number(r.extraRemovedByMechanism)||0)*.82+n*.52,summary:{remainingPairsDelta:Number(r.remainingPairsDelta)||0,releasedAttachment:Number(a.releasedAttachment)||0,iceHpReduction:Number(a.iceHpReduction)||0,obstacleReduction:Number(a.obstacleReduction)||0,magnetLockReduction:Number(a.magnetLockReduction)||0,extraRemovedByMechanism:Number(r.extraRemovedByMechanism)||0},simulated:r}}function Yy(e,t,n){const r=Array.isArray(e?.boardData)?e.boardData:[],a=r[0]?.length||0,o=r.length,i=Array.isArray(t)?t.length:0,s=n instanceof Map?n.size:0,l=n instanceof Map?Array.from(n.values()).map(b=>Array.isArray(b)?b.length:0):[],c=l.reduce((b,g)=>b+(Number(g)||0),0);let u=0;if(c>0){for(const g of l){const S=Number(g);if(!Number.isFinite(S)||S<=0)continue;const M=S/c;u+=-M*Math.log2(M)}const b=Math.log2(Math.max(2,s));u=b>0?u/b:0}const d=Pe(s/12),f=Pe(u*.6+d*.4);let h=0,C=0;const p=(b,g)=>b>=0&&b<o&&g>=0&&g<a;for(const b of t){if(!b)continue;const g=[[1,0],[-1,0],[0,1],[0,-1]];let S=0;for(const[M,x]of g){const N=b.row+M,P=b.col+x;if(!p(N,P)){S++;continue}(Number(r[N]?.[P])||0)!==0&&S++}h+=S/4,C++}const y=C>0?Pe(h/C):0;return{clickableTileCount:i,visibleTypeCount:s,typeComplexityScore:f,spaceComplexityScore:y}}function ia(e,t=null){if(e==="直线连接")return 0;if(e==="1拐连接")return 1;if(e==="同向2拐")return 2;if(e==="反向2拐")return 3;const n=Number(t);return!Number.isFinite(n)||n<=0?0:n===1?1:3}function qa(e){if(!Array.isArray(e)||e.length===0)return null;const t=e.slice().sort((l,c)=>c.score-l.score),n=t.slice(0,Math.max(1,Math.min(4,t.length))),r=Number(n[0]?.score)||0,a=.75+Math.random()*.85,o=n.map(l=>{const c=Number(l?.score);return Number.isFinite(c)?Math.max(.03,Math.exp((c-r)/Math.max(.25,a))):.05}),i=o.reduce((l,c)=>l+c,0);if(!(i>0))return n[0]||null;let s=Math.random()*i;for(let l=0;l<n.length;l++)if(s-=o[l],s<=0)return n[l];return n[n.length-1]||null}function dd(e){return Array.isArray(e)?e.filter(t=>Number(t?.distance)===1):[]}function md(e=null){const t=Ie(e,Qt(70));return t<=0?!1:t>=100?!0:Math.random()<t/100}function Ky(e,t={}){const n=Ie(t?.besidePercent,Qt(70)),r=dd(e),a=r.length>0&&md(n);return{picked:a&&qa(r)||qa(e),preferAdjacent:a,besidePercent:n,adjacentCandidateCount:r.length}}function fd(e,t={}){const{tiles:n,typeBuckets:r}=zy(e);if(!Array.isArray(n)||n.length===0)return{ok:!1,error:"人类模式：未观察到可点击的普通牌。"};const a=Xt(e?.boardData),o=Gn(e?.direction),i=Yy(e,n,r),s=new Set,l=new Set,c=[],u=[],d=[];let f=0,h=0,C=0;const p=[],y=!!t?.exhaustiveScan,b=y?Math.max(1,Number(r.size)||1):Math.max(2,Math.min(Math.max(2,r.size||0),1+Math.floor(Math.random()*4)));for(;f<b;){const S=qy(n,r,s,l);if(!S)break;s.add(cd(S)),f++,u.length<5&&u.push({row:S.row,col:S.col,baseId:S.baseId});const M=Vy(S,r,36);h+=Number(M?.inspectedCount)||0;const x=Array.isArray(M?.candidates)?M.candidates.slice():[];x.sort((I,T)=>I.distance-T.distance+(Math.random()-.5)*.35);const N=x,P=c.length;let w=0;for(const I of N){C++;const T=Math.abs(S.row-I.row)+Math.abs(S.col-I.col);p.push(T);const A={row1:S.row,col1:S.col,row2:I.row,col2:I.col};if(!Io(e.boardData,A.row1,A.col1,A.row2,A.col2))continue;const E=At(e.boardData,A.row1,A.col1,A.row2,A.col2),j=Array.isArray(E)?E.length:0,_=Math.max(0,j-2),O=pn(E),F=ia(O,_);w++;const D=(T<=2?2.4:T<=4?1.8:1.2)+(F===0?1.35:F===1?.78:F===2?.35:.12),H=Uy(e,A),L=Number(H?.score)||0,U=.6+Math.random()*.35,Q=.35+Math.random()*.45,$=(Math.random()-.5)*1.2,W=F*.2,K=D*U+L*Q+$-W;c.push({move:A,score:K,turnCount:_,connectionType:O,connectionDifficultyRank:F,distance:T,obviousScore:D,forecastScore:L,forecastSummary:H?.summary||null,anchor:S,target:I,sameTypeCandidateCount:x.length,legalCandidateCount:0})}if(w<=0)l.add(S.baseId),d.length<6&&d.push({baseId:S.baseId,anchorRow:S.row,anchorCol:S.col,checkedCount:x.length});else for(let I=P;I<c.length;I++)c[I].legalCandidateCount=w;if(c.length>0&&!y&&Math.random()<.8)break}const g=p.length>0?p.reduce((S,M)=>S+M,0)/p.length:0;return{ok:!0,anchorsTried:f,inspectedCount:h,sameTypeChecked:C,avgDistance:g,anchorSummaries:u,failedBaseSummaries:d,rejectedBaseCount:l.size,scoredMoves:c,mechanismSummary:a,directionRule:o,...i}}function wi(e,t=null){const n=Number.isFinite(Number(e?.avgDistance))?Number(e.avgDistance):Number(t?.distance)||0;return{anchorsTried:Number(e?.anchorsTried)||0,searchAttempts:Number(e?.sameTypeChecked)||0,localObservedCells:Number(e?.inspectedCount)||0,avgDistance:n,typeComplexityScore:Pe(e?.typeComplexityScore),spaceComplexityScore:Pe(e?.spaceComplexityScore),visibleTypeCount:Number(e?.visibleTypeCount)||0,clickableTileCount:Number(e?.clickableTileCount)||0,successfulCandidateCount:Array.isArray(e?.scoredMoves)?e.scoredMoves.length:0}}function Xy(e){return!e||typeof e!="object"?null:{ok:!!e.ok,error:String(e.error||""),connectionType:String(e.connectionType||""),turnCount:Number.isFinite(Number(e.turnCount))?Number(e.turnCount):null,pathNodeCount:Number.isFinite(Number(e.pathNodeCount))?Number(e.pathNodeCount):null}}function Jy(e,t){if(!e||!t)return!1;const n=Number(e.row1),r=Number(e.col1),a=Number(e.row2),o=Number(e.col2),i=Number(t.row1),s=Number(t.col1),l=Number(t.row2),c=Number(t.col2);return n===i&&r===s&&a===l&&o===c||n===l&&r===c&&a===i&&o===s}function Zy(e,t){if(!Array.isArray(e)||!t)return null;for(const n of e)if(Jy(n?.move,t))return n;return null}function hd(e={}){const t=String(e?.directionRule||"").trim()||"无位移规则",n=e?.mechanismSummary&&typeof e.mechanismSummary=="object"?e.mechanismSummary:{},r=Number(n?.obstacleTotal)||0,a=Number(n?.attachmentsTotal)||0,o=Number(n?.magnetLockCount)||0,i=r>0?`障碍 ${r} 个`:"无明显障碍",s=a>0?`附着层 ${a} 个`:"无附着层",l=o>0?`，锁定位 ${o} 处`:"";return`先观察棋盘：${i}，${s}${l}；位移规则：${t}。`}function pd(e,t={}){const n=String(e||"").trim();if(/^先观察棋盘[:：]/.test(n))return n;const r=hd(t);return n?`${r}${n}`:`${r}继续执行本步观察与配对判断。`}function Ai(e,t){const n=hd({directionRule:e?.directionRule,mechanismSummary:e?.mechanismSummary}),r=t?.anchor,a=t?.move;if(!r||!a){const l=Array.isArray(e?.failedBaseSummaries)&&e.failedBaseSummaries.length>0?e.failedBaseSummaries[e.failedBaseSummaries.length-1]:null;return l?`${n}观察锚点(${l.anchorRow},${l.anchorCol})后，核对同花色候选 ${l.checkedCount} 个，均无法与该锚点合法连通。`:`${n}本轮观察了 ${Number(e?.anchorsTried)||0} 个锚点，同花色检查 ${Number(e?.sameTypeChecked)||0} 次，暂未找到可连通配对。`}const o=Number(t?.sameTypeCandidateCount)||0,i=Number(t?.legalCandidateCount)||0,s=String(t?.connectionType||"-");return[n,`先观察到锚点牌(${r.row},${r.col})，同花色候选共 ${o} 张。`,`逐个检查连通后，可合法连线 ${i} 组。`,`本步执行 (${a.row1},${a.col1}) -> (${a.row2},${a.col2})，连法 ${s}。`].join("")}function gd(e,t={}){if(!e?.ok)return{ok:!1,error:String(e?.error||"人类模式：无法构建观察上下文。"),humanMode:!0};const n=Array.isArray(e.scoredMoves)?e.scoredMoves:[];if(n.length===0)return{ok:!1,error:"该花色无可连接配对",thought:Ai(e,null),reason:`已尝试锚点 ${e.anchorsTried} 个，同花色检查 ${e.sameTypeChecked} 次，已切换到其他花色继续观察。当前位移规则：${e.directionRule||"无规则"}`,candidateCountBefore:Number(e.sameTypeChecked)||0,humanMode:!0,humanMetrics:wi(e)};const r=Ky(n,t),a=r.picked||n[0],o=Ai(e,a),i=ia(a.connectionType,a.turnCount),s=[`锚点尝试 ${e.anchorsTried}，同花色检查 ${e.sameTypeChecked} 个。`,`本步连法 ${a.connectionType}（难度级别 ${i}），拐点 ${a.turnCount}，并结合机关触发与位移后局面偏好选择。`,`相邻优先概率 ${r.besidePercent}%（本步${r.preferAdjacent?"已优先相邻候选":"未触发相邻优先"}）。`,`当前位移规则：${e.directionRule||"无规则"}`].join(" ");return{ok:!0,thought:o,reason:s,currentFeeling:"",move:a.move,candidateCountBefore:Number(e.sameTypeChecked)||0,humanMode:!0,humanMetrics:wi(e,a)}}function Qy(e,t){const r=(Array.isArray(t?.scoredMoves)?t.scoredMoves:[]).slice(0,8).map(o=>({move:o.move,distance:o.distance,connectionType:o.connectionType,connectionDifficultyRank:Number(o.connectionDifficultyRank),turnCount:o.turnCount,forecastSummary:o.forecastSummary||null,obviousScore:Number(o.obviousScore?.toFixed(3)),forecastScore:Number(o.forecastScore?.toFixed(3)),score:Number(o.score?.toFixed(3))})),a={goal:"通关本关卡（人类模式）",mode:v.runMode,board:e?.boardData||[],boardWidth:e?.width||0,boardHeight:e?.height||0,direction:e?.direction||0,directionRule:t?.directionRule||Gn(e?.direction),observation:{anchorsTried:Number(t?.anchorsTried)||0,localObservedCells:Number(t?.inspectedCount)||0,sameTypeChecked:Number(t?.sameTypeChecked)||0,avgDistance:Number(t?.avgDistance?.toFixed?.(3)||t?.avgDistance||0),clickableTileCount:Number(t?.clickableTileCount)||0,visibleTypeCount:Number(t?.visibleTypeCount)||0,typeComplexityScore:Number(Pe(t?.typeComplexityScore).toFixed(3)),spaceComplexityScore:Number(Pe(t?.spaceComplexityScore).toFixed(3)),mechanismSummary:t?.mechanismSummary||Xt(e?.boardData),anchorSample:Array.isArray(t?.anchorSummaries)?t.anchorSummaries.slice(0,5):[],candidateMovesSample:r},lastActionResult:Xy(v.lastActionResult),memory:Ia(10,{includeRemaining:!1,includeHumanMetrics:!0})};return[{role:"system",content:["你是连连看试玩智能体，当前必须以人类思路操作。","限制：你只能根据棋盘数据与局部观察进行决策，不能使用“剩余配对数”等全局计数捷径。","流程：先选显眼锚点牌A1 -> 找出同花色A2/A3/A4... -> 逐个判断是否与A1合法连通 -> 结合消除后局面预估选步。","你必须考虑机关影响（翻牌/冰壳/冰块/磁铁等）和方向位移规则对后续局面的改变。","每一步 thought 的第一句必须是“先观察棋盘：...”，且包含障碍概况与方向规则。","除非本步机关直接决定成败，不要反复将单一机关（如磁铁）作为主因。","不要全盘穷举，不要固定每次选同类最优，要保留人类式概率偏好。","thought 字段只写本步实际观察与比对过程，不要写“方法、规则、策略说明”。","必须严格输出 JSON，不要输出其他文本。",'JSON格式：{"thought":"...","reason":"...","move":{"row1":0,"col1":0,"row2":0,"col2":0}}。',"如果无法决定合法步，move 设为 null，并解释原因。"].join(`
`)},{role:"user",content:`请按人类模式给出下一步：
${JSON.stringify(a)}`}]}async function eb(e,t=null,n={}){const r=Ie(n?.besidePercent,Qt(70)),a=fd(e),o=gd(a,{besidePercent:r});if(!a?.ok||!t)return o;try{const i=Qy(e,a),s=await jn(i,{temperature:.55,maxTokens:240,profile:t}),l=ld(s);if(!l.ok||!l.move)return o;const c=As(e,l.move,{humanMode:!0});if(!c.ok)return o;const u=Array.isArray(a.scoredMoves)?a.scoredMoves:[];let f=Zy(u,l.move);if(!f){const g=String(c.connectionType||""),S=Number(c.turnCount);f={move:l.move,anchor:{row:Number(l.move.row1),col:Number(l.move.col1)},target:{row:Number(l.move.row2),col:Number(l.move.col2)},sameTypeCandidateCount:0,legalCandidateCount:1,connectionType:g,turnCount:S,connectionDifficultyRank:ia(g,S),distance:Math.abs(Number(l.move.row1)-Number(l.move.row2))+Math.abs(Number(l.move.col1)-Number(l.move.col2))}}const h=dd(u),C=h.length>0&&md(r);C&&(f=qa(h)||f);const p=Ai(a,f),y=ia(f.connectionType,f.turnCount),b=[`锚点尝试 ${a.anchorsTried}，同花色检查 ${a.sameTypeChecked} 个。`,`本步连法 ${f.connectionType||"-"}（难度级别 ${y}），拐点 ${Number.isFinite(Number(f.turnCount))?Number(f.turnCount):"-"}。`,`相邻优先概率 ${r}%（本步${C?"已优先相邻候选":"未触发相邻优先"}）。`,`位移规则：${a.directionRule||"无规则"}，并已纳入机关结算影响。`].join(" ");return{ok:!0,thought:p,reason:b,currentFeeling:"",move:f?.move||l.move,candidateCountBefore:Number(a?.sameTypeChecked)||0,humanMode:!0,humanMetrics:wi(a,f)}}catch{return o}}function tb(e,t=24){const n=Array.isArray(e?.removablePairs)?e.removablePairs:[],r=Math.max(1,Math.min(48,Math.floor(Number(t)||24))),a=[];for(const o of n.slice(0,r)){if(!o)continue;const i=At(e.boardData,o.row1,o.col1,o.row2,o.col2),s=Array.isArray(i)?i.length:0,l=Math.max(0,s-2),c=pn(i),u=ys(e,o),d=u?.mechanismEffects||{};a.push({move:{row1:o.row1,col1:o.col1,row2:o.row2,col2:o.col2},connectionType:c,turnCount:l,remainingPairsDelta:Number(u?.remainingPairsDelta)||0,effects:{releasedAttachment:Number(d.releasedAttachment)||0,iceHpReduction:Number(d.iceHpReduction)||0,obstacleReduction:Number(d.obstacleReduction)||0,magnetLockReduction:Number(d.magnetLockReduction)||0,extraRemovedByMechanism:Number(u?.extraRemovedByMechanism)||0}})}return a}function nb(e){if(!e||!Array.isArray(e.boardData))return{ok:!1,error:"棋盘数据不可用"};const t=Array.isArray(e.removablePairs)?e.removablePairs:[];if(t.length<=0)return{ok:!1,error:"当前无可消除配对，无法继续操作。"};const n=Xt(e.boardData),r=Gn(e.direction);let a=null;for(const s of t){if(!s)continue;const l=At(e.boardData,s.row1,s.col1,s.row2,s.col2),c=Array.isArray(l)?l.length:0,u=Math.max(0,c-2),d=pn(l),f=ia(d,u),h=ys(e,s),C=h?.mechanismEffects||{},p=ud(e,s),y=(Number(h?.remainingPairsDelta)||0)*1.35+(Number(C.releasedAttachment)||0)*.9+(Number(C.iceHpReduction)||0)*.55+(Number(C.obstacleReduction)||0)*.72+(Number(C.extraRemovedByMechanism)||Number(h?.extraRemovedByMechanism)||0)*.8+p*.52-f*.24;(!a||y>a.score)&&(a={move:{row1:s.row1,col1:s.col1,row2:s.row2,col2:s.col2},score:y,connectionType:d,turnCount:u,connectionDifficultyRank:f})}if(!a||!a.move)return{ok:!1,error:"本地决策失败：未找到可执行操作。"};const o=pd(`观察合法候选 ${t.length} 组后，优先选择消除后局面更稳的一手，执行 (${a.move.row1},${a.move.col1}) -> (${a.move.row2},${a.move.col2})。`,{directionRule:r,mechanismSummary:n}),i=[`本地快速决策：评估合法候选 ${t.length} 组。`,`本步连法 ${a.connectionType||"-"}（难度级别 ${a.connectionDifficultyRank}，拐点 ${a.turnCount}）。`,"已结合方向规则与机关结算后的局面收益进行选择。"].join(" ");return{ok:!0,thought:o,reason:i,currentFeeling:"",move:a.move,candidateCountBefore:t.length,humanMode:!1}}function rb(e){const t=Array.isArray(e?.removablePairs)?e.removablePairs.slice(0,180):[],n=Xt(e?.boardData),r=Gn(e?.direction),a={goal:"通关本关卡",humanMode:!!v.humanModeEnabled,mode:v.runMode,board:e?.boardData||[],boardWidth:e?.width||0,boardHeight:e?.height||0,direction:e?.direction||0,directionRule:r,mechanismSummary:n,lastActionResult:v.lastActionResult,memory:Ia(10,{includeRemaining:!0,includeHumanMetrics:!0})};return a.remainingPairCount=e?.remainingPairs||0,a.legalPairsSample=t,a.legalPairsTotal=e?.remainingPairs||0,a.evaluatedMovesSample=tb(e,24),[{role:"system",content:["你是连连看试玩智能体。","规则：只能消除两张“可点击且数字相同”的牌，且两牌路径最多2个拐点。","棋盘ID说明：0=空格，1-99=可消除普通牌，>=1000含附着层不可直接消除，501/502/503/504/505/506是障碍。","你必须考虑机关触发（翻牌/冰壳/冰块层级/磁铁锁定等）与方向位移规则对消除后局面的影响。","每一步 thought 必须先写“先观察棋盘：...”并概括障碍与方向规则，再写本步观察与选择。","除非该机关直接影响本步合法性或收益，不要反复把单一机关作为核心理由。","请优先选择“当前合法且消除后局面更优”的一步，而不是只看当前连通。 ","坐标从0开始，row是行，col是列。","必须严格输出 JSON，不要输出其他内容。",'JSON格式：{"thought":"...","reason":"...","current_feeling":"...","move":{"row1":0,"col1":0,"row2":0,"col2":0}}。',"如果无法决定合法步，move 设为 null，并解释原因。"].join(`
`)},{role:"user",content:`请根据当前局面给出下一步：
${JSON.stringify(a)}`}]}function As(e,t,n={}){if(!e||!Array.isArray(e.boardData))return{ok:!1,error:"棋盘数据不可用"};const r=!!n?.humanMode;if(!t)return{ok:!1,error:"Agent 未给出 move"};const{row1:a,col1:o,row2:i,col2:s}=t,l=e.boardData.length,c=e.boardData[0]?.length||0,u=(M,x)=>M>=0&&M<l&&x>=0&&x<c;if(!u(a,o)||!u(i,s))return{ok:!1,error:"坐标越界"};if(a===i&&o===s)return{ok:!1,error:"不能选择同一张牌两次"};const d=e.boardData[a]?.[o],f=e.boardData[i]?.[s];if(!sn(d)||!sn(f))return{ok:!1,error:"目标包含不可点击牌"};const h=ce(d),C=ce(f);if(h===null||C===null)return{ok:!1,error:"目标包含不可配对牌"};if(h!==C)return{ok:!1,error:r?"该花色无可连接配对":"两张牌数字不一致"};if(!Io(e.boardData,a,o,i,s))return{ok:!1,error:"路径不满足连连看规则（超过2拐或被阻挡）"};const p=At(e.boardData,a,o,i,s),y=Array.isArray(p)?p.length:0,b=Math.max(0,y-2),g=pn(p),S=Ao(p);return{ok:!0,connectionType:g,turnCount:b,pathNodeCount:y,connectionDistance:Number.isFinite(S)?S:null}}async function ab(e,t=null){const n=Aa();if(!n)return{ok:!1,error:"当前不在试玩模式，无法执行。"};const r=G(n.boardData),a=Number.isFinite(Number(n.pairCombinationTotal))?Math.max(0,Math.round(Number(n.pairCombinationTotal))):lo(n.boardData),o=rd(n.boardData),i=De(n.boardData),s=Math.max(0,o-i),l=t?.humanMetrics&&typeof t.humanMetrics=="object"?{...t.humanMetrics}:null,c=Number(t?.candidateCountBefore),u=Number.isFinite(c)?Math.max(0,Math.floor(c)):Math.max(0,Number(n.remainingPairs)||0),d=Array.isArray(n.removablePairs)?n.removablePairs.length:Number(n.remainingPairs)||0,f=Math.max(0,Number.isFinite(Number(t?.preStepDecisionFailCount))?Number(t.preStepDecisionFailCount):0),h=Qs(n.boardData,o,n.removablePairs),C=eu(n.boardData,n.removablePairs),p=du(n.boardData,n.removablePairs),y=Math.max(0,...Array.isArray(v.stepMemory)?v.stepMemory.map(L=>Number(L?.maxStepDifficultyScore??L?.stepDifficultyScore)).filter(L=>Number.isFinite(L)&&L>=0):[]),b=As(n,e,{humanMode:!!(t?.humanMode||v.humanModeEnabled)});if(!b.ok){const L={ok:!1,error:b.error,move:e,remainingPairsBefore:n.remainingPairs,remainingPairsAfter:n.remainingPairs,pairCombinationTotalBefore:a,pairCombinationTotalAfter:a,remainingCardCountBefore:i,remainingCardCountAfter:i,clearedCardCountBefore:s,clearedCardCountAfter:s,gameOutcome:"",preStepDecisionFailCount:f,boardCleared:!1,playFailed:!1,connectionType:"",turnCount:null,pathNodeCount:null,connectionDistance:null,availableDistanceBefore:h.averageAvailableDistance,availableDistanceAfter:h.averageAvailableDistance,boardDifficultyBefore:h.boardDifficultyScore,boardDifficultyAfter:h.boardDifficultyScore,stepDifficultyScore:0,maxStepDifficultyScore:y,availableConnectionTypeCountsBefore:p,cancelReason:b.error,candidateCountBefore:u,humanMetrics:l,boardSnapshotBefore:r},U=Dl({step:(v.stepMemory.length||0)+1,success:!1,move:L.move,connectionType:"",turnCount:null,pathNodeCount:null,connectionDistance:null,availableDistanceBefore:h.averageAvailableDistance,availableDistanceAfter:h.averageAvailableDistance,boardDifficultyBefore:h.boardDifficultyScore,boardDifficultyAfter:h.boardDifficultyScore,stepDifficultyScore:0,maxStepDifficultyScore:y,availableConnectionTypeCountsBefore:p,cancelReason:b.error,candidateCountBefore:u,remainingPairsBefore:n.remainingPairs,remainingPairsAfter:n.remainingPairs,pairCombinationTotalBefore:a,pairCombinationTotalAfter:a,remainingCardCountBefore:i,remainingCardCountAfter:i,clearedCardCountBefore:s,clearedCardCountAfter:s,gameOutcome:"",preStepDecisionFailCount:f,thought:String(t?.thought||""),reason:String(t?.reason||""),error:b.error,humanMode:!!(t?.humanMode||v.humanModeEnabled),humanMetrics:l,boardSnapshotBefore:r});return L.memoryStep=Number(U?.step)||v.stepMemory.length||0,v.lastActionResult=L,L}const g=Number(m?.clearedPairs)||0,S=n.remainingPairs;if(await gi(e.row1,e.col1),!m||!m.active){const L={ok:!1,error:"执行中已退出试玩模式。",move:e};return v.lastActionResult=L,L}if(await gi(e.row2,e.col2),!m||!m.active){const L={ok:!1,error:"执行中已退出试玩模式。",move:e};return v.lastActionResult=L,L}const M=Number(m?.clearedPairs)||0,x=M>g,N=m.boardData,P=Oe(N),w=P?0:fn(N),I=P?0:lo(N),T=De(N),A=Math.max(0,o-T),E=!!m.failed&&T>0,j=P?"victory":E?"failure":"",_=Qs(N,o),O=x?tu({remainingCardCountBefore:i,availablePairCountBefore:d,sceneDifficultyScoreBefore:C}):0,F=Math.max(y,Number.isFinite(O)?O:0),D={ok:x,move:e,step:M,remainingPairsBefore:S,remainingPairsAfter:w,pairCombinationTotalBefore:a,pairCombinationTotalAfter:I,remainingCardCountBefore:i,remainingCardCountAfter:T,clearedCardCountBefore:s,clearedCardCountAfter:A,gameOutcome:j,preStepDecisionFailCount:f,boardCleared:P,playFailed:!!m.failed,connectionType:b.connectionType,turnCount:b.turnCount,pathNodeCount:b.pathNodeCount,connectionDistance:Number.isFinite(Number(b.connectionDistance))?Number(b.connectionDistance):null,availableDistanceBefore:h.averageAvailableDistance,availableDistanceAfter:_.averageAvailableDistance,boardDifficultyBefore:h.boardDifficultyScore,boardDifficultyAfter:_.boardDifficultyScore,stepDifficultyScore:Number.isFinite(O)?O:0,maxStepDifficultyScore:F,availableConnectionTypeCountsBefore:p,cancelReason:String(m?.lastCancelReason||""),candidateCountBefore:u,humanMetrics:l,error:x?"":"执行后未产生有效消除，请重新规划。"};v.lastActionResult=D;const H=Dl({step:(v.stepMemory.length||0)+1,success:D.ok,move:D.move,connectionType:D.connectionType,turnCount:D.turnCount,pathNodeCount:D.pathNodeCount,connectionDistance:Number.isFinite(Number(D.connectionDistance))?Number(D.connectionDistance):null,availableDistanceBefore:D.availableDistanceBefore,availableDistanceAfter:D.availableDistanceAfter,boardDifficultyBefore:D.boardDifficultyBefore,boardDifficultyAfter:D.boardDifficultyAfter,stepDifficultyScore:D.stepDifficultyScore,maxStepDifficultyScore:D.maxStepDifficultyScore,availableConnectionTypeCountsBefore:D.availableConnectionTypeCountsBefore,cancelReason:D.cancelReason,candidateCountBefore:D.candidateCountBefore,remainingPairsBefore:D.remainingPairsBefore,remainingPairsAfter:D.remainingPairsAfter,pairCombinationTotalBefore:D.pairCombinationTotalBefore,pairCombinationTotalAfter:D.pairCombinationTotalAfter,remainingCardCountBefore:D.remainingCardCountBefore,remainingCardCountAfter:D.remainingCardCountAfter,clearedCardCountBefore:D.clearedCardCountBefore,clearedCardCountAfter:D.clearedCardCountAfter,gameOutcome:D.gameOutcome,preStepDecisionFailCount:D.preStepDecisionFailCount,thought:String(t?.thought||""),reason:String(t?.reason||""),error:D.error||"",humanMode:!!(t?.humanMode||v.humanModeEnabled),humanMetrics:l,boardSnapshotBefore:r});return D.memoryStep=Number(H?.step)||v.stepMemory.length||0,D}function El(e){const t=String(e||"").trim();return t?/困难|hard|challeng|受阻|复杂|卡住/i.test(t)?"困难":/简单|easy|轻松|顺畅|容易/i.test(t)?"简单":"正常":"正常"}function Is(e,t){const n=e?.humanMetrics&&typeof e.humanMetrics=="object"?e.humanMetrics:null,r=t?.humanMetrics&&typeof t.humanMetrics=="object"?t.humanMetrics:null,a=Array.isArray(v.stepMemory)&&v.stepMemory.length>0?v.stepMemory[v.stepMemory.length-1]:null,i={...(a?.humanMetrics&&typeof a.humanMetrics=="object"?a.humanMetrics:null)||{},...r||{},...n||{}};return{anchorsTried:Number(i.anchorsTried)||0,searchAttempts:Number(i.searchAttempts)||0,localObservedCells:Number(i.localObservedCells)||0,avgDistance:Number(i.avgDistance)||0,typeComplexityScore:Pe(i.typeComplexityScore),spaceComplexityScore:Pe(i.spaceComplexityScore),visibleTypeCount:Number(i.visibleTypeCount)||0,clickableTileCount:Number(i.clickableTileCount)||0,successfulCandidateCount:Number(i.successfulCandidateCount)||0}}function ob(e=6){const t=Math.max(1,Math.floor(Number(e)||6)),n=Array.isArray(v.stepMemory)?v.stepMemory:[],r=n.slice(-t);let a=0,o=0;for(let l=r.length-1;l>=0;l--)if(!!!r[l]?.success)a++,o===r.length-1-l&&o++;else if(o>0)break;const i=n.length>0?n[n.length-1]:null;let s=0;if(i&&i.success===!0)for(let l=n.length-2;l>=0&&!n[l]?.success;l--)s++;return{sampleCount:r.length,failRatio:r.length>0?a/r.length:0,consecutiveFailCount:o,preSuccessFailCount:s}}function yo(e,t,n={}){const r=!!n?.humanMode,a=n?.humanMetrics&&typeof n.humanMetrics=="object"?n.humanMetrics:Is(e,t),o=Number(t?.candidateCountBefore??e?.candidateCountBefore),i=Number(a?.successfulCandidateCount),s=Number(a?.searchAttempts)||0,l=Number(t?.remainingPairsBefore),c=Number(t?.remainingPairsAfter),u=Number(t?.pairCombinationTotalBefore),d=Number.isFinite(l)&&Number.isFinite(c)?c>=l:!1,f=ob(6),h=Number.isFinite(i)&&i>0?i:Number.isFinite(o)?o:0,C=Number.isFinite(l)&&l>=0&&Number.isFinite(u)&&u>0,p=Pe(C?l/u:h/(r?8:16)),y=Number.isFinite(Number(t?.connectionDistance))?Number(t.connectionDistance):od({move:t?.move||e?.move||null}),b=Number.isFinite(y)?Pe(y/8):0,g=t?.ok?0:1,S=d?1:0,M=Pe(f.consecutiveFailCount/3),x=Pe(f.preSuccessFailCount/3),N=Pe(f.failRatio),P=Pe(s/12),w=[g,S,M,x,N,P].filter(E=>Number(E)>.08).length,I=Pe(w/6),T=Pe(g*.24+S*.2+M*.16+x*.2+N*.1+P*.04+I*.06),A=Pe(T*.82+b*.18+(1-p)*.04);return{trialErrorComplexity:T,totalComplexity:A,connectionDistance:Number.isFinite(y)?y:null,availableChoiceCount:Math.max(0,h),preSuccessFailCount:Number(f.preSuccessFailCount)||0}}function yd(e,t,n={}){const r=!!n?.humanMode,a=yo(e,t,n),o=Number(a?.preSuccessFailCount)||0;if(a.totalComplexity<.34)return o>0?{level:"正常",detail:"",complexity:a}:{level:"简单",detail:"",complexity:a};if(a.totalComplexity<.66)return{level:"正常",detail:"",complexity:a};const i=Number(a?.connectionDistance),s=Number.isFinite(i)?`连接距离 ${Number.isInteger(i)?i:i.toFixed(2)}`:"连接距离 -";return{level:"困难",detail:r?`${s}，试错复杂度 ${a.trialErrorComplexity.toFixed(2)}，本步决策压力较高。`:`${s}，试错复杂度 ${a.trialErrorComplexity.toFixed(2)}，当前推进阻力较大。`,complexity:a}}function bd(e,t={}){const n=t?.decision&&typeof t.decision=="object"?t.decision:null;return yd(n,e,{humanMode:!!t?.humanMode,humanMetrics:t?.humanMetrics})}function ib(e,t){const n=Is(e,t);return yd(e,t,{humanMode:!0,humanMetrics:n})}function Bl(e,t,n={}){const r=sd(e),a=n?.fallbackFeeling&&typeof n.fallbackFeeling=="object"?n.fallbackFeeling:null;if(!r||typeof r!="object"){if(a)return{level:String(a.level||"正常"),detail:String(a.level)==="困难"?String(a.detail||""):""};const l=El(e);return{level:l,detail:l==="困难"?String(e||"").trim():""}}const o=El(r.level??r.difficulty??r.feeling_level??r.feeling),i=String(r.detail??r.reason??r.analysis??r.comment??"").trim();if(o!=="困难")return{level:o,detail:""};if(i)return{level:o,detail:i};if(a&&a.level==="困难"&&a.detail)return{level:"困难",detail:String(a.detail)};const s=bd(t,n);return{level:o,detail:s.level==="困难"?s.detail:"局面阻力较高，需要重新规划。"}}async function sb(e,t,n={}){const r=!!(n?.forceLocal||v.quickModeEnabled);if(!!(v.humanModeEnabled||e?.humanMode)){const c=Is(e,t),u=ib(e,t),d=u?.complexity&&typeof u.complexity=="object"?u.complexity:yo(e,t,{humanMode:!0,humanMetrics:c}),f=vt();if(r||!f)return u;try{const h=await jn([{role:"system",content:["你是人类模式下的关卡体验分析助手。","你只能基于给定指标做难度感受判断。","请重点结合 connectionDistance（连接距离）和 trialErrorComplexity（试错复杂度）做评价。",'仅输出 JSON，格式：{"level":"简单|正常|困难","detail":"仅当困难时填写，其余留空"}。'].join(`
`)},{role:"user",content:JSON.stringify({metrics:c,complexity:d,actionResult:{ok:!!t?.ok,connectionType:String(t?.connectionType||""),turnCount:Number.isFinite(Number(t?.turnCount))?Number(t.turnCount):null,pathNodeCount:Number.isFinite(Number(t?.pathNodeCount))?Number(t.pathNodeCount):null}})}],{temperature:.25,maxTokens:120,profile:f});return Bl(h,t,{humanMode:!0,decision:e,fallbackFeeling:u})}catch{return u}}const o=Aa(),i=bd(t,{humanMode:!1,decision:e});if(r)return i;const s=i?.complexity&&typeof i.complexity=="object"?i.complexity:yo(e,t,{humanMode:!1}),l=[{role:"system",content:["你是关卡体验分析助手。","请结合 connectionDistance（连接距离）与 trialErrorComplexity（试错复杂度）判断本步难度。","仅输出 JSON，不要输出任何额外文本。",'格式：{"level":"简单|正常|困难","detail":"仅当level=困难时填写，其余留空"}。'].join(`
`)},{role:"user",content:JSON.stringify({decision:{thought:e?.thought||"",reason:e?.reason||"",currentFeeling:e?.currentFeeling||""},complexity:s,actionResult:t,boardSummary:o?{remainingPairCount:o.remainingPairs,width:o.width,height:o.height}:null,memory:Ia(8,{includeRemaining:!0,includeHumanMetrics:!0})})}];try{const c=await jn(l,{temperature:.2});return Bl(c,t,{humanMode:!1,decision:e,fallbackFeeling:i})}catch{return i}}function Ts(e){const t=!!e?.boardCleared,n=!!e?.playFailed,r=Number(e?.remainingCardCountAfter),a=Number.isFinite(r)&&r>=0,o=a&&r<=0;return t||o?{code:"victory",label:"胜利",ruleText:a?`胜利规则：棋盘可消除牌已清空（剩余牌数=${r}）。`:"胜利规则：棋盘可消除牌已清空（boardCleared=true）。"}:n?{code:"defeat",label:"失败",ruleText:a?`失败规则：已进入无可消除配对状态，且仍有剩余牌 ${r} 张。`:"失败规则：进入无可消除配对状态（playFailed=true）。"}:{code:"unfinished",label:"未结束",ruleText:"规则判定：既未清盘也未进入失败状态。"}}function Rl(e,t={}){const n=!!t?.humanMode,r=Ts(e),a=Array.isArray(v.stepMemory)?v.stepMemory:[],o=a.length,i=a.filter(d=>d?.success).length,s=o>0?a.map(d=>Number(d?.turnCount)).filter(d=>Number.isFinite(d)&&d>=0).reduce((d,f)=>d+f,0)/Math.max(1,i):0,l=a.map(d=>d?.humanMetrics).filter(d=>d&&typeof d=="object"),c=d=>{const f=l.map(h=>Number(h?.[d])).filter(h=>Number.isFinite(h)&&h>=0);return f.length===0?0:f.reduce((h,C)=>h+C,0)/f.length};return(n?[`结果判定：${r.label}。`,`判定依据：${r.ruleText}`,`回合统计：总步数 ${o}。`,`观察维度：平均搜索尝试 ${c("searchAttempts").toFixed(2)} 次，平均局部观察 ${c("localObservedCells").toFixed(2)} 格。`,`稳定性维度：成功步数 ${i}，平均拐点 ${s.toFixed(2)}。`,`策略维度：平均目标距离 ${c("avgDistance").toFixed(2)}，会先做消除后局面假设，再带概率偏好选择下一手。`,`复杂度维度：花色复杂度 ${c("typeComplexityScore").toFixed(2)}，空间复杂度 ${c("spaceComplexityScore").toFixed(2)}。`,"趣味维度：更接近人类试错节奏，存在波动但探索感更强。"]:(()=>{const d=Number(a[0]?.remainingPairsBefore),f=Number(a[a.length-1]?.remainingPairsAfter),h=Number.isFinite(d)&&d>0&&Number.isFinite(f)?Math.max(0,Math.min(1,(d-f)/d)):0;return[`结果判定：${r.label}。`,`判定依据：${r.ruleText}`,`回合统计：总步数 ${o}。`,`效率维度：成功步数 ${i}，推进比例 ${(h*100).toFixed(1)}%。`,`稳定性维度：平均拐点 ${s.toFixed(2)}，高拐点步数越多表示决策压力越大。`,"策略维度：前期候选较多、后期候选收缩明显，说明后程更依赖路径质量与顺序规划。","趣味维度：局面在“可解性”和“路径博弈”之间平衡，具备持续试错与优化空间。"]})()).join(`
`)}async function lb(e,t={}){const n=!!(t?.forceLocal||v.quickModeEnabled),r=!!v.humanModeEnabled;if(r||n)return Rl(e,{humanMode:r});const a=Aa(),o=Ts(e),i={finalResult:e,finalOutcome:o,boardSummary:a?{width:a.width,height:a.height,remainingPairCount:a.remainingPairs}:null,memory:Ia(60)};try{return await jn([{role:"system",content:["你是关卡复盘助手。","先给出明确结论：结果判定（胜利/失败/未结束）+判定依据（基于规则）。","规则：胜利=棋盘可消除牌清空（boardCleared=true 或 remainingCardCountAfter<=0）；失败=无可消除配对且仍有剩余牌（playFailed=true 且 remainingCardCountAfter>0）。","请输出中文多维点评，至少覆盖：通关效率、稳定性、策略质量、趣味性、难度判断。","每个维度1句，最后给出1句总体结论。"].join(`
`)},{role:"user",content:JSON.stringify(i)}],{temperature:.5,maxTokens:420})}catch(s){return`${Rl(e,{humanMode:!1})}
（模型点评失败：${s.message||"未知错误"}）`}}async function Ii(e){const t=String(v.playSessionSignature||"").trim();if(!t||v.playSessionReviewSignature===t)return;v.playSessionReviewSignature=t;const n=Ts(e),r=await lb(e,{forceLocal:v.quickModeEnabled}),a=[`结果判定：${n.label}。`,`判定依据：${n.ruleText}`].join(`
`),o=String(r||"").trim(),i=/^结果判定：/m.test(o)?o:`${a}
${o}`;ye("assistant",`本局整体点评：
${i}`)}async function Cd(e="step"){if(v.isExecutingStep)return;if(!m||!m.active){ye("assistant","请先进入试玩模式，再启动 Agent。"),X("状态：等待进入试玩模式");return}const t=vt();if(!t&&!v.humanModeEnabled&&!v.quickModeEnabled){ye("assistant","请先在“配置”里读取并保存本地 API 配置文件。"),X("状态：缺少 API 配置",!0);return}Rr();const n=Aa();if(!n){ye("assistant","无法获取棋盘数据。");return}if(n.remainingPairs<=0){ye("assistant","当前无可消除配对，无法继续操作。");return}v.isExecutingStep=!0,X(`状态：思考中（${e}）`),ke();try{let r=null;if(v.humanModeEnabled)r=await eb(n,v.quickModeEnabled?null:t,{besidePercent:Qt(70)});else if(v.quickModeEnabled)r=nb(n);else{const f=rb(n),h=await jn(f,{temperature:.15});r=ld(h)}if(!r.ok){v.pendingDecisionFailCount=Math.max(0,(Number(v.pendingDecisionFailCount)||0)+1),v.lastActionResult={ok:!1,error:r.error};const f=v.humanModeEnabled?"人类模式决策失败":"思考结果解析失败";by(`${f}：${r.error}`,"agent-decision-failure"),X("状态：决策解析失败");return}if(r.thought=pd(r.thought,{directionRule:n.directionRule,mechanismSummary:n.mechanismSummary}),!r.move){const f="Agent 未给出合法 move。";v.pendingDecisionFailCount=Math.max(0,(Number(v.pendingDecisionFailCount)||0)+1),v.lastActionResult={ok:!1,error:f},ye("assistant",`操作结果：错误（${f}）`),X("状态：未产出操作");return}const a=Math.max(0,Number(v.pendingDecisionFailCount)||0);r.preStepDecisionFailCount=a,X("状态：执行操作中");const o=await ab(r.move,r);v.pendingDecisionFailCount=0,X("状态：等待结算反馈");const i=await sb(r,o,{forceLocal:v.quickModeEnabled}),s=Array.isArray(v.stepMemory)?v.stepMemory[v.stepMemory.length-1]:null,l=s?.humanMetrics&&typeof s.humanMetrics=="object"?s.humanMetrics:o?.humanMetrics&&typeof o.humanMetrics=="object"?o.humanMetrics:r?.humanMetrics&&typeof r.humanMetrics=="object"?r.humanMetrics:null,c=i?.complexity&&typeof i.complexity=="object"?i.complexity:yo(r,o,{humanMode:!!(r.humanMode||v.humanModeEnabled),humanMetrics:l}),u=Number(c?.preSuccessFailCount)||0,d=id({trialErrorCount:s?.trialErrorCount,humanMetrics:l,success:!!o?.ok},{carryFailures:u});s&&typeof s=="object"&&(s.trialErrorComplexity=Number(c?.trialErrorComplexity)||0,s.totalComplexity=Number(c?.totalComplexity)||0,s.trialErrorCount=Number(d)||0,s.preSuccessFailCount=u,s.availableChoiceCount=Number(c?.availableChoiceCount)||0,Cr()),Cy({stepIndex:Number(s?.step)||Number(o?.memoryStep)||0,success:!!o?.ok,move:o?.move||r?.move||null,moveText:py(o?.move),candidateCount:Number(s?.candidateCountBefore??o?.candidateCountBefore),reason:String(r.reason||r.thought||"未提供"),connectionType:String(o?.connectionType||"-"),turnCount:Number(o?.turnCount),connectionDistance:Number(s?.connectionDistance??o?.connectionDistance),availableDistanceBefore:Number(s?.availableDistanceBefore??o?.availableDistanceBefore),availableDistanceAfter:Number(s?.availableDistanceAfter??o?.availableDistanceAfter),boardDifficultyBefore:Number(s?.boardDifficultyBefore??o?.boardDifficultyBefore),boardDifficultyAfter:Number(s?.boardDifficultyAfter??o?.boardDifficultyAfter),stepDifficultyScore:Number(s?.stepDifficultyScore??o?.stepDifficultyScore),maxStepDifficultyScore:Number(s?.maxStepDifficultyScore??o?.maxStepDifficultyScore),availableConnectionTypeCountsBefore:s?.availableConnectionTypeCountsBefore||o?.availableConnectionTypeCountsBefore||hn(),cancelReason:String(s?.cancelReason||o?.cancelReason||o?.error||""),remainingPairsBefore:Number(o?.remainingPairsBefore),remainingPairsAfter:Number(o?.remainingPairsAfter),remainingCardCountBefore:Number(o?.remainingCardCountBefore),remainingCardCountAfter:Number(o?.remainingCardCountAfter),clearedCardCountBefore:Number(o?.clearedCardCountBefore),clearedCardCountAfter:Number(o?.clearedCardCountAfter),gameOutcome:String(o?.gameOutcome||""),preStepDecisionFailCount:Number(s?.preStepDecisionFailCount??o?.preStepDecisionFailCount??a),feelingLevel:String(i?.level||"正常"),feelingDetail:String(i?.detail||""),thought:String(r.thought||""),error:String(o?.error||""),humanMode:!!(r.humanMode||v.humanModeEnabled),boardSnapshotBefore:Array.isArray(s?.boardSnapshotBefore)?s.boardSnapshotBefore:null}),o.gameOutcome==="victory"?(X("状态：已通关"),v.isRunning=!1,await Ii(o)):o.gameOutcome==="failure"?(X("状态：局面失败（无可消除配对）"),v.isRunning=!1,await Ii(o)):X("状态：可继续")}catch(r){if(v.stopRequested&&String(r?.message||"").includes("终止")){X("状态：已终止");return}ye("assistant",`Agent 执行失败：${r.message||"未知错误"}`),X("状态：执行失败")}finally{v.isExecutingStep=!1,ke()}}async function cb(){if(v.isRunning)return;if(!m||!m.active){ye("assistant","请先进入试玩模式，再启动持续操作。"),X("状态：等待进入试玩模式");return}for(Rr(),v.stopRequested=!1,v.isRunning=!0,X("状态：持续操作中"),ke();v.isRunning&&!v.stopRequested&&!(!m||!m.active||(await Cd("continuous"),v.stopRequested)||!m||!m.active||Oe(m.boardData)||m.failed||v.runMode!=="continuous");)await rt(120);const e=Array.isArray(m?.boardData)?m.boardData:[],t=!!(m&&m.active&&Oe(e)),n=!!(m&&m.active&&m.failed),r=e.length>0?De(e):null,a=n&&Number.isFinite(Number(r))&&Number(r)>0;if(!v.stopRequested&&(t||a)){const o=t?0:e.length>0?fn(e):null,i=rd(e),s=Number.isFinite(Number(r))?Math.max(0,i-Number(r)):null;await Ii({boardCleared:t,playFailed:a,remainingPairsAfter:o,remainingCardCountAfter:r,clearedCardCountAfter:s})}v.isRunning=!1,v.stopRequested?X("状态：已终止"):X(t?"状态：已通关":a?"状态：局面失败（无可消除配对）":"状态：已停止"),ke()}function Sd(){if(!m||!m.active){ye("assistant","请先进入试玩模式，再启动单步模式。"),X("状态：等待进入试玩模式");return}Rr(),v.stopRequested=!1,v.isRunning=!0,X("状态：单步模式，就绪"),ke()}async function ub(){if(v.runMode!=="step"){ye("assistant","请先切换到“单步操作”模式。");return}if(v.isRunning||Sd(),!v.isRunning)return;await Cd("manual-step");const e=String(v.lastActionResult?.gameOutcome||"").trim().toLowerCase();(e==="victory"||e==="failure"||m&&m.active&&Oe(m.boardData))&&(v.isRunning=!1),ke()}function sa(e={}){const t=!!e?.silent;if(v.stopRequested=!0,v.isRunning=!1,v.activeFetchAbortController)try{v.activeFetchAbortController.abort()}catch{}t||ye("assistant","已终止 Agent 操作。"),X("状态：已终止"),ke()}async function kl(){const e=v.elements;if(!e)return;const t=e.chatInput.value,n=typeof t=="string"?t.trim():"";if(!n)return;ye("user",n),e.chatInput.value="";const r=vt();if(!r){ye("assistant","请先点击“配置”并读取本地配置文件。");return}const a=Aa(),o=!!v.humanModeEnabled,i={playerQuestion:n,currentModel:{name:r.name,model:r.model},humanModeEnabled:!!v.humanModeEnabled,quickModeEnabled:!!v.quickModeEnabled,playModeActive:!!(m&&m.active),boardSummary:a?{width:a.width,height:a.height,direction:a.direction,directionRule:Gn(a.direction),mechanismSummary:Xt(a.boardData),remainingPairCount:o?null:a.remainingPairs,boardData:a.boardData}:null,memory:Ia(10,{includeRemaining:!o,includeHumanMetrics:!0}),lastActionResult:v.lastActionResult};try{const l=(Array.isArray(v.userConversation)?v.userConversation.slice(-10):[]).map(u=>({role:u.role==="assistant"?"assistant":"user",content:String(u.text||"")})),c=await jn([{role:"system",content:["你是试玩助手，请结合棋盘局面、规则和历史操作回答玩家问题。","回答使用中文，给出理解、评价和建议。"].join(`
`)},...l,{role:"user",content:JSON.stringify(i)}],{temperature:.6});ye("assistant",c),v.userConversation.push({role:"user",text:n}),v.userConversation.push({role:"assistant",text:c}),v.userConversation.length>24&&(v.userConversation=v.userConversation.slice(-24))}catch(s){ye("assistant",`对话失败：${s.message||"未知错误"}`)}}function Fl(e,t){if(!t||t.button!==0)return;const n=v.elements;if(!n)return;const r=e==="dialog"?n.dialog:n.icon;if(!r)return;const a=r.getBoundingClientRect();if(v.drag={target:e,pointerId:t.pointerId,offsetX:t.clientX-a.left,offsetY:t.clientY-a.top,startX:t.clientX,startY:t.clientY,moved:!1},e==="dialog"?n.dialogHeader.classList.add("dragging"):n.icon.classList.add("dragging"),typeof r.setPointerCapture=="function")try{r.setPointerCapture(t.pointerId)}catch{}t.preventDefault()}function db(e){const t=v.drag;if(!t||!e||Number.isInteger(t.pointerId)&&e.pointerId!==t.pointerId)return;const n=v.elements;if(!n)return;const r=t.target==="dialog"?n.dialog:n.icon;if(!r)return;const a=Math.max(0,window.innerWidth-r.offsetWidth),o=Math.max(0,window.innerHeight-r.offsetHeight),i=fo(e.clientX-t.offsetX,0,a),s=fo(e.clientY-t.offsetY,0,o);if(ho(r,i,s),!t.moved){const l=Math.abs(e.clientX-t.startX),c=Math.abs(e.clientY-t.startY);(l>3||c>3)&&(t.moved=!0)}e.preventDefault()}function Ll(e){const t=v.drag;if(!t||!e||Number.isInteger(t.pointerId)&&e.pointerId!==t.pointerId)return;const n=v.elements;n&&(n.icon.classList.remove("dragging"),n.dialogHeader.classList.remove("dragging"),t.target==="icon"&&t.moved&&(v.suppressIconClick=!0)),v.drag=null}function mb(){const e={icon:document.getElementById("agentFloatIcon"),dialog:document.getElementById("agentDialog"),dialogHeader:document.getElementById("agentDialogHeader"),minimizeBtn:document.getElementById("agentMinimizeBtn"),newChatBtn:document.getElementById("agentNewChatBtn"),configBtn:document.getElementById("agentConfigBtn"),memoryPanel:document.getElementById("agentMemoryPanel"),chatList:document.getElementById("agentChatList"),chatInput:document.getElementById("agentChatInput"),sendBtn:document.getElementById("agentSendBtn"),runSettingsBtn:document.getElementById("agentRunSettingsBtn"),runSettingsOverlay:document.getElementById("agentRunSettingsOverlay"),runSettingsPanel:document.getElementById("agentRunSettingsPanel"),runSettingsCloseBtn:document.getElementById("agentRunSettingsCloseBtn"),runModeSelect:document.getElementById("agentRunModeSelect"),humanModeToggle:document.getElementById("agentHumanModeToggle"),quickModeToggle:document.getElementById("agentQuickModeToggle"),modelSelect:document.getElementById("agentModelSelect"),validateApiBtn:document.getElementById("agentValidateApiBtn"),runStartBtn:document.getElementById("agentRunStartBtn"),runStepBtn:document.getElementById("agentRunStepBtn"),runStopBtn:document.getElementById("agentRunStopBtn"),runStatus:document.getElementById("agentRunStatus"),configOverlay:document.getElementById("agentConfigOverlay"),configModal:document.getElementById("agentConfigModal"),configCancelBtn:document.getElementById("agentConfigCancelBtn"),configSaveBtn:document.getElementById("agentConfigSaveBtn"),configLoadFileBtn:document.getElementById("agentConfigLoadFileBtn"),configFileInput:document.getElementById("agentConfigFileInput"),configProfileSelect:document.getElementById("agentConfigProfileSelect"),configFileStatus:document.getElementById("agentConfigFileStatus"),configPreviewName:document.getElementById("agentConfigPreviewName"),configPreviewBaseUrl:document.getElementById("agentConfigPreviewBaseUrl"),configPreviewApiKey:document.getElementById("agentConfigPreviewApiKey"),configPreviewModel:document.getElementById("agentConfigPreviewModel"),configPreviewValidation:document.getElementById("agentConfigPreviewValidation")};if(!e.icon||!e.dialog||!e.dialogHeader||!e.minimizeBtn||!e.newChatBtn||!e.configBtn||!e.memoryPanel||!e.chatList||!e.chatInput||!e.sendBtn||!e.runSettingsBtn||!e.runSettingsOverlay||!e.runSettingsPanel||!e.runSettingsCloseBtn||!e.runModeSelect||!e.humanModeToggle||!e.quickModeToggle||!e.modelSelect||!e.validateApiBtn||!e.runStartBtn||!e.runStepBtn||!e.runStopBtn||!e.runStatus||!e.configOverlay||!e.configModal||!e.configCancelBtn||!e.configSaveBtn||!e.configLoadFileBtn||!e.configFileInput||!e.configProfileSelect||!e.configFileStatus||!e.configPreviewName||!e.configPreviewBaseUrl||!e.configPreviewApiKey||!e.configPreviewModel||!e.configPreviewValidation)return;v.elements=e,vy(),xy(),Ny(),ws(),ti(v.activeProfileId,{persist:!1,silent:!0}),br(),Cr(),e.humanModeToggle.checked=!!v.humanModeEnabled,e.quickModeToggle.checked=!!v.quickModeEnabled;const t=Math.max(8,window.innerWidth-84),n=Math.max(8,window.innerHeight-100);ho(e.icon,t,n);const r=Math.max(8,window.innerWidth-594);ho(e.dialog,r,15),e.icon.addEventListener("pointerdown",i=>{Fl("icon",i)}),e.icon.addEventListener("click",()=>{if(v.suppressIconClick){v.suppressIconClick=!1;return}Dy()}),e.dialogHeader.addEventListener("pointerdown",i=>{i.target&&i.target.closest("button")||Fl("dialog",i)}),e.minimizeBtn.addEventListener("click",()=>{Ey()}),e.newChatBtn.addEventListener("click",()=>{Sy()}),e.runSettingsBtn.addEventListener("click",()=>{Ry()}),e.runSettingsCloseBtn.addEventListener("click",()=>{Ni()}),e.runSettingsOverlay.addEventListener("click",i=>{i.target===e.runSettingsOverlay&&Ni()}),e.runModeSelect.addEventListener("change",()=>{const i=e.runModeSelect.value==="step"?"step":"continuous";i!==v.runMode&&v.isRunning&&v.runMode==="continuous"&&sa({silent:!0}),v.runMode=i,X(i==="step"?"状态：单步模式":"状态：持续模式"),ke()}),e.humanModeToggle.addEventListener("change",()=>{const i=!!e.humanModeToggle.checked;v.humanModeEnabled=i,Py(),i?(ye("assistant","已开启人类模式：采用局部观察 + 概率策略，不做全盘穷举。"),!vt()&&!v.quickModeEnabled&&X("状态：人类模式已开启（可直接运行）")):(ye("assistant","已关闭人类模式：恢复标准策略。"),!vt()&&!v.quickModeEnabled&&X("状态：未配置模型",!0)),ke()}),e.quickModeToggle.addEventListener("change",()=>{const i=!!e.quickModeToggle.checked;if(v.quickModeEnabled=i,My(),i)ye("assistant","已开启快速模式：每步决策、难度反馈与复盘点评改为本地计算。"),X("状态：快速模式（全本地）");else{ye("assistant","已关闭快速模式：恢复模型参与决策链路。");const s=vt();s?X(`状态：当前模型 ${s.name}，验证：${go(s.id)}`):v.humanModeEnabled?X("状态：人类模式已开启（可直接运行）"):X("状态：未配置模型",!0)}ke()}),e.modelSelect.addEventListener("change",()=>{const i=String(e.modelSelect.value||"").trim();ti(i,{persist:!0,silent:!1})}),e.validateApiBtn.addEventListener("click",async()=>{await Hy(!0)}),e.runStartBtn.addEventListener("click",async()=>{if(v.runMode==="step"){Sd();return}await cb()}),e.runStepBtn.addEventListener("click",async()=>{await ub()}),e.runStopBtn.addEventListener("click",()=>{sa()}),e.configBtn.addEventListener("click",()=>{By()}),e.configCancelBtn.addEventListener("click",()=>{ni()}),e.configLoadFileBtn.addEventListener("click",()=>{e.configFileInput.value="",e.configFileInput.click()}),e.configFileInput.addEventListener("change",async i=>{const s=i?.target?.files?.[0];s&&(await ky(s),e.configFileInput.value="")}),e.configProfileSelect.addEventListener("change",()=>{v.pendingSelectedProfileId=String(e.configProfileSelect.value||"").trim(),rn()}),e.configSaveBtn.addEventListener("click",()=>{const i=v.pendingApiConfigData,s=Array.isArray(i?.profiles)?i.profiles:[];if(s.length===0){rn("请先读取有效的本地配置文件。",!0);return}const l=String(v.pendingSelectedProfileId||i.activeProfileId||s[0]?.id||"").trim();v.apiProfiles=s.map(c=>({...c})),v.activeProfileId=l,nd(),ti(v.activeProfileId,{persist:!1,silent:!0}),ni(),ye("assistant",`API 配置已保存，共 ${s.length} 个模型。`)}),e.configOverlay.addEventListener("click",i=>{i.target===e.configOverlay&&ni()}),e.sendBtn.addEventListener("click",async()=>{await kl()}),e.chatInput.addEventListener("keydown",async i=>{i.key==="Enter"&&!i.shiftKey&&(i.preventDefault(),await kl())}),document.addEventListener("pointermove",db),document.addEventListener("pointerup",Ll),document.addEventListener("pointercancel",Ll),window.addEventListener("resize",()=>{e.icon.classList.contains("hidden")||po(e.icon),e.dialog.classList.contains("visible")&&po(e.dialog)});const o=vt();v.quickModeEnabled?X("状态：快速模式（全本地）"):o?X(`状态：当前模型 ${o.name}，验证：${go(o.id)}`):v.humanModeEnabled?X("状态：人类模式已开启（可直接运行）"):X("状态：未配置模型",!0),ke()}function fb(){hb(),Ys(),Ks(),Us(),Ws(),Bt(),mb(),Rf(),Xs(),ui(Ka),ir(),Zr(),Qa(),eo(),to(),Jr(),no(),kn(),ft(),Bo(),pr(),vi(),Pi(),hl(In),gu(!!document.getElementById("workerPoolReuseToggle")?.checked);const e=document.getElementById("board"),t=document.getElementById("boardLayerPreviewStack");e?(e.addEventListener("mousedown",Xo),e.addEventListener("mousemove",ll),e.addEventListener("mouseleave",cl),e.addEventListener("click",Jo),e.addEventListener("contextmenu",Zo),t&&(t.addEventListener("mousedown",Xo),t.addEventListener("click",Jo),t.addEventListener("contextmenu",Zo)),co()):window.addEventListener("DOMContentLoaded",()=>{Ys(),Ks(),Us(),Ws(),Xs(),ui(Ka),ir(),Zr(),Qa(),eo(),to(),Jr(),no(),kn(),ft(),pr(),vi(),Pi(),hl(In);const r=document.getElementById("board");r&&(r.addEventListener("mousedown",Xo),r.addEventListener("mousemove",ll),r.addEventListener("mouseleave",cl),r.addEventListener("click",Jo),r.addEventListener("contextmenu",Zo)),co(),io(),Bt()}),document.addEventListener("click",()=>{Dt(),Ve(),ka(),Ha()}),document.addEventListener("contextmenu",r=>{const a=r.target;a&&a.closest&&a.closest("#savedLevelContextMenu")||a&&a.closest&&a.closest(".saved-level-item")||a&&a.closest&&a.closest("#boardBgDropdown")||a&&a.closest&&a.closest("#playSettingsPanel")||(Dt(),Ve(),ka(),Ha())}),document.addEventListener("mouseup",Zh),document.addEventListener("mousemove",Jh);const n=document.getElementById("savedLevelContextMenu");n&&(n.addEventListener("contextmenu",r=>r.preventDefault()),n.addEventListener("click",r=>r.stopPropagation())),window.addEventListener("resize",()=>{Dt(),Ve(),ka(),Ha()}),window.addEventListener("blur",()=>{wt("窗口失焦，取消当前连线"),$t(),na(),Dt(),Ve(),ka()}),document.addEventListener("keydown",Ab),Nb(),io(),wo(),window.addEventListener("resize",()=>{vb(),En(),_c(),Ke()})}function hb(){const{canvas:e}=bn();if(!e||e.querySelector(":scope > .rules-panel"))return;const t=document.querySelector(".module-play-log"),n=document.querySelector(".module-level-stats");t&&n&&n.parentNode&&n.parentNode.insertBefore(t,n.nextSibling);const r=document.createElement("div");r.className="rules-panel";const a=(b,g,S)=>{const M=document.createElement("div");return M.className=`play-settings-panel module-card board-settings-node ${b} module-group-rules open`,M.id=g,M.addEventListener("click",x=>x.stopPropagation()),M.innerHTML=`<div class="play-settings-title module-card-title">${S}</div>`,M},o=document.createElement("div");o.className="board-rule-subtree rule-subtree";const i=a("module-board-rule-settings","boardRuleSettingsPanel","棋盘规则"),s=document.createElement("div");s.className="board-rule-children rule-subtree-children",[document.querySelector(".module-board-size"),document.querySelector(".module-direction-rule"),document.querySelector(".module-fill-settings")].filter(Boolean).forEach(b=>{s.appendChild(b)}),o.appendChild(i),s.children.length>0&&o.appendChild(s);const l=document.createElement("div");l.className="game-play-subtree rule-subtree";const c=document.createElement("div");c.className="game-play-children rule-subtree-children";const u=document.querySelector(".module-game-play-settings"),d=[document.querySelector(".module-operation-settings"),document.querySelector(".module-link-settings"),document.querySelector(".module-turn-limit-settings")].filter(Boolean),f=[document.querySelector(".module-vita-classic-settings"),document.querySelector(".module-vita-tray-settings")].filter(Boolean);if(u){l.appendChild(u);for(const b of d)b.dataset.gamePlayBranch="lianliankan",c.appendChild(b);for(const b of f)b.dataset.gamePlayBranch="vita-mahjong",c.appendChild(b);c.children.length>0&&l.appendChild(c)}const h=document.createElement("div");h.className="game-rule-subtree rule-subtree";const C=a("module-game-rule-settings","gameRuleSettingsPanel","游戏规则"),p=document.createElement("div");p.className="game-rule-children rule-subtree-children",[document.querySelector(".module-game-goal-settings"),document.querySelector(".module-game-limit-settings"),document.querySelector(".module-click-hint-settings")].filter(Boolean).forEach(b=>{p.appendChild(b)}),h.appendChild(C),p.children.length>0&&h.appendChild(p);const y=[s.children.length>0?o:null,u?l:null,p.children.length>0?h:null].filter(Boolean);for(const b of y)r.appendChild(b);e.appendChild(r),Za()}function bn(){return{viewport:document.querySelector(".container"),canvas:document.querySelector(".main-content")}}function pb(){const{canvas:e}=bn();if(!e)return null;let t=e.querySelector(":scope > .canvas-tree-links");return t||(t=document.createElementNS("http://www.w3.org/2000/svg","svg"),t.classList.add("canvas-tree-links"),t.setAttribute("aria-hidden","true"),e.prepend(t)),t}function Sr(e){if(!e||typeof e.getBoundingClientRect!="function"||e.hidden)return!1;const t=window.getComputedStyle(e);if(t.display==="none"||t.visibility==="hidden")return!1;const n=e.getBoundingClientRect();return n.width>0&&n.height>0}function gb(){return[".module-number-config",".module-rhythm",".module-level-editor",".module-level-stats",".module-config-result",".module-saved-levels",".module-board-rule-settings",".module-game-play-settings",".module-game-rule-settings",".module-play-log"].flatMap(t=>Array.from(document.querySelectorAll(t))).filter(Sr)}function yb(){return[{parent:document.querySelector(".module-board-rule-settings"),children:[document.querySelector(".module-board-size"),document.querySelector(".module-direction-rule"),document.querySelector(".module-fill-settings")].filter(Boolean)},{parent:document.querySelector(".module-game-play-settings"),children:[document.querySelector(".module-operation-settings"),document.querySelector(".module-link-settings"),document.querySelector(".module-turn-limit-settings"),document.querySelector(".module-vita-classic-settings"),document.querySelector(".module-vita-tray-settings")].filter(Boolean)},{parent:document.querySelector(".module-game-rule-settings"),children:[document.querySelector(".module-game-goal-settings"),document.querySelector(".module-game-limit-settings"),document.querySelector(".module-click-hint-settings")].filter(Boolean)}].filter(({parent:e,children:t})=>Sr(e)&&t.some(Sr))}function vd(){const{canvas:e}=bn(),t=pb(),n=document.querySelector(".board-container");if(!e||!t||!n||!Sr(n))return;const r=e.getBoundingClientRect(),a=n.getBoundingClientRect(),o=gb();t.setAttribute("viewBox",`0 0 ${e.offsetWidth} ${e.offsetHeight}`),t.setAttribute("width",String(e.offsetWidth)),t.setAttribute("height",String(e.offsetHeight)),t.innerHTML="";const i=a.left-r.left+a.width/2,s=a.top-r.top+a.height/2,l=a.left-r.left,c=a.right-r.left,u=(h,C,p="canvas-tree-junction",y=4.5)=>{const b=document.createElementNS("http://www.w3.org/2000/svg","circle");b.setAttribute("cx",h.toFixed(2)),b.setAttribute("cy",C.toFixed(2)),b.setAttribute("r",String(y)),b.setAttribute("class",p),t.appendChild(b)},d=(h,C)=>{const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("class",C),p.setAttribute("d",h),t.appendChild(p)},f={left:[],right:[]};for(const h of o){if(h===n)continue;const C=h.getBoundingClientRect(),p=C.left-r.left+C.width/2,y=C.top-r.top+C.height/2,b=p<i?"left":"right";f[b].push({targetX:b==="left"?C.right-r.left:C.left-r.left,targetY:y})}for(const h of["left","right"]){const C=f[h];if(!C.length)continue;const p=h==="left"?-1:1,y=h==="left"?l:c,b=h==="left"?Math.max(...C.map(({targetX:w})=>w)):Math.min(...C.map(({targetX:w})=>w)),g=Math.abs(b-y),S=Math.max(24,g-36),M=Math.min(Math.max(54,g*.45),S),x=y+p*M,N=Math.min(s,...C.map(({targetY:w})=>w)),P=Math.max(s,...C.map(({targetY:w})=>w));d(`M ${y.toFixed(2)} ${s.toFixed(2)} L ${x.toFixed(2)} ${s.toFixed(2)} M ${x.toFixed(2)} ${N.toFixed(2)} L ${x.toFixed(2)} ${P.toFixed(2)}`,`canvas-tree-link is-${h} is-trunk`);for(const{targetX:w,targetY:I}of C)d(`M ${x.toFixed(2)} ${I.toFixed(2)} L ${w.toFixed(2)} ${I.toFixed(2)}`,`canvas-tree-link is-${h}`),u(x,I,"canvas-tree-junction",3.5),u(w,I,"canvas-tree-junction",3.5)}for(const{parent:h,children:C}of yb()){const p=h.getBoundingClientRect(),y=p.right-r.left,b=p.top-r.top+p.height/2,g=C.filter(Sr).map(P=>{const w=P.getBoundingClientRect();return{targetX:w.left-r.left,targetY:w.top-r.top+w.height/2}});if(!g.length)continue;if(g.length===1){const{targetX:P,targetY:w}=g[0];d(`M ${y.toFixed(2)} ${b.toFixed(2)} L ${P.toFixed(2)} ${w.toFixed(2)}`,"canvas-tree-link is-right is-subtree"),u(y,b,"canvas-tree-junction is-subtree",3.5),u(P,w,"canvas-tree-junction is-subtree",3);continue}const S=Math.min(...g.map(({targetX:P})=>P)),M=y+(S-y)*.5,x=Math.min(b,...g.map(({targetY:P})=>P)),N=Math.max(b,...g.map(({targetY:P})=>P));d(`M ${y.toFixed(2)} ${b.toFixed(2)} L ${M.toFixed(2)} ${b.toFixed(2)} M ${M.toFixed(2)} ${x.toFixed(2)} L ${M.toFixed(2)} ${N.toFixed(2)}`,"canvas-tree-link is-right is-subtree is-trunk"),u(y,b,"canvas-tree-junction is-subtree",3.5);for(const{targetX:P,targetY:w}of g)d(`M ${M.toFixed(2)} ${w.toFixed(2)} L ${P.toFixed(2)} ${w.toFixed(2)}`,"canvas-tree-link is-right is-subtree"),u(M,w,"canvas-tree-junction is-subtree",3),u(P,w,"canvas-tree-junction is-subtree",3)}u(l,s,"canvas-tree-junction",5.5),u(c,s,"canvas-tree-junction",5.5)}function En(){V.active||requestAnimationFrame(vd)}function bb(){const{viewport:e,canvas:t}=bn();if(!e||!t)return null;const n=e.clientWidth,r=e.clientHeight,a=t.offsetWidth,o=t.offsetHeight,i=Math.min(0,n-a),s=Math.min(0,r-o);return{minX:i,maxX:0,minY:s,maxY:0,viewportWidth:n,viewportHeight:r,canvasWidth:a,canvasHeight:o}}function ko(){const e=bb();return e?(V.minX=e.minX,V.maxX=e.maxX,V.minY=e.minY,V.maxY=e.maxY,V.viewportWidth=e.viewportWidth,V.viewportHeight=e.viewportHeight,V.canvasWidth=e.canvasWidth,V.canvasHeight=e.canvasHeight,e):null}function $l(e,t,n){const r=Number(e);return Number.isFinite(r)?Math.max(t,Math.min(n,r)):0}function Fo(e,t){const n=V.canvasWidth>0?V:ko();if(!n)return;V.x=$l(e,n.minX,n.maxX),V.y=$l(t,n.minY,n.maxY);const{canvas:r}=bn();r&&(r.style.transform=`translate3d(${Math.round(V.x)}px, ${Math.round(V.y)}px, 0)`)}function Cb(){V.rafId=null,Fo(V.pendingX,V.pendingY)}function Sb(e,t){V.pendingX=e,V.pendingY=t,V.rafId===null&&(V.rafId=requestAnimationFrame(Cb))}function Pd(){const e=ko();e&&Fo((e.viewportWidth-e.canvasWidth)/2,(e.viewportHeight-e.canvasHeight)/2)}function vb(){ko(),Fo(V.x,V.y)}function xd(e){if(!e||e.pointerType==="mouse"&&e.button!==0)return!1;const t=e.target;return!t||typeof t.closest!="function"||t.closest('.config-section, .editor-section, .stats-section, .result-section, .play-step-log-section, .saved-levels-section, .board-container, .agent-dialog, .agent-float-icon, .saved-level-context-menu, .saved-level-preview, .play-style-option, .play-operation-option, label, button, input, select, textarea, a, [contenteditable="true"]')?!1:!!(t.closest(".container")||t.closest(".main-content"))}function Pb(e){if(!xd(e))return;const{viewport:t}=bn();if(t&&(e.preventDefault(),V.active=!0,V.pointerId=e.pointerId,ko(),V.startX=e.clientX,V.startY=e.clientY,V.originX=V.x,V.originY=V.y,t.classList.add("canvas-panning"),typeof t.setPointerCapture=="function"))try{t.setPointerCapture(e.pointerId)}catch{}}function xb(e){if(!V.active||V.pointerId!==e.pointerId)return;e.preventDefault();const t=e.clientX-V.startX,n=e.clientY-V.startY;Sb(V.originX+t,V.originY+n)}function _l(e=null){if(!V.active)return;const{viewport:t}=bn();if(t&&(t.classList.remove("canvas-panning"),e&&typeof t.releasePointerCapture=="function"&&V.pointerId!==null))try{t.releasePointerCapture(V.pointerId)}catch{}V.active=!1,V.pointerId=null,V.rafId!==null&&(cancelAnimationFrame(V.rafId),V.rafId=null,Fo(V.pendingX,V.pendingY)),En()}function Mb(e){xd(e)&&Pd()}function Nb(){if(V.initialized)return;const{viewport:e,canvas:t}=bn();!e||!t||(V.initialized=!0,e.addEventListener("pointerdown",Pb),e.addEventListener("pointermove",xb),e.addEventListener("pointerup",_l),e.addEventListener("pointercancel",_l),e.addEventListener("dblclick",Mb),[".config-panel",".board-editor-panel",".board-side-panel"].forEach(n=>{const r=document.querySelector(n);r&&r.addEventListener("scroll",En,{passive:!0})}),typeof ResizeObserver=="function"&&(Vo=new ResizeObserver(()=>{Za(),En()}),Vo.observe(t),document.querySelectorAll(".board-container, .config-section, .editor-section, .stats-section, .result-section, .board-settings-node, .play-step-log-section, .saved-levels-section, .rules-panel").forEach(n=>Vo.observe(n))),typeof MutationObserver=="function"&&(ks=new MutationObserver(()=>{Za(),En()}),document.querySelectorAll(".board-container, .config-section, .editor-section, .stats-section, .result-section, .board-settings-node, .play-step-log-section, .saved-levels-section, .rules-panel, .board-layout").forEach(n=>{ks.observe(n,{attributes:!0,attributeFilter:["class","hidden","style"]})})),requestAnimationFrame(()=>{Pd(),vd(),Ke()}))}function Ke(){const e=document.getElementById("boardWrapper"),t=document.querySelector(".board-container");!e||!t||requestAnimationFrame(()=>{const o=window.getComputedStyle(t),i=parseFloat(o.paddingLeft||"0")+parseFloat(o.paddingRight||"0"),s=parseFloat(o.paddingTop||"0")+parseFloat(o.paddingBottom||"0"),l=t.querySelector(".board-top-tools"),c=Ur==="simulator",u=l?window.getComputedStyle(l):null,d=u&&u.display!=="none",f=d?parseFloat(u.marginBottom||"0"):0,h=d?l.offsetHeight+f:0,C=c?0:2,p=t.clientWidth-i-2,y=t.clientHeight-s-h-C,b=parseFloat(e.style.getPropertyValue("--board-layer-stack-width")||""),g=parseFloat(e.style.getPropertyValue("--board-layer-stack-height")||""),S=b||e.offsetWidth||e.scrollWidth,M=g||e.offsetHeight||e.scrollHeight,{stepY:x}=Ir(),N=Math.max(0,x)*2,P=M+N,w=Math.max(1,y-200);let I=1;S>p&&p>0&&(I=Math.min(I,p/S)),c&&M>w?I=Math.min(I,w/M):P>y&&y>0&&(I=Math.min(I,y/P));const T=S*I,A=M*I,E=Math.max(0,(p-T)/2),j=Math.max(0,(y-A)/2);e.style.transform=`translate(${E.toFixed(2)}px, ${j.toFixed(2)}px) scale(${I.toFixed(4)})`})}function wb(e){return!e||typeof e.closest!="function"?!1:!!e.closest('input, textarea, select, [contenteditable="true"]')}function Ab(e){if(!e||e.defaultPrevented||e.repeat)return;const t=String(e.key||"").toLowerCase();if(!t)return;const n=e.ctrlKey||e.metaKey;if(n&&!e.altKey&&t==="s"){e.preventDefault(),Ku();return}if(n||e.altKey||wb(e.target)||Pt||ut)return;const r=t>="0"&&t<="8",a=/^Numpad[0-8]$/.test(String(e.code||""));if(r||a){e.preventDefault();const o=parseInt(r?t:String(e.code).replace("Numpad",""),10);Number.isFinite(o)&&$i(o);return}if(t==="r"){e.preventDefault(),Fu();return}if(t==="n"){e.preventDefault(),sc();return}if(t==="c"){e.preventDefault(),Pu();return}if(t==="s"){e.preventDefault(),de>=0?zu():qu();return}(e.code==="Space"||t===" ")&&(e.preventDefault(),vs())}function Ib(){Object.assign(window,{applyRecentGenerationRecordFromDropdown:Cf,addBoardLayer:mf,autoMatchPlayPair:Qf,batchGenerate:hy,calculatePool:Vn,clearBoard:Pu,deleteSelectedConfigGroup:Pf,exportConfigToClipboard:ag,exportSavedLevels:Dg,exportToClipboard:og,fillBoard:Fu,generateAutoObstacles:Wm,handleBatchGenerateFileChange:fy,handleBatchRunCampaignFileChange:ty,handleConfigGroupFileChange:Af,handleHumanModeBesidePercentInput:Sp,handleSavedLevelContextAction:Ng,handleSavedLevelFileChange:Bg,importBoardFromClipboard:lg,loadSelectedConfigGroup:vf,refreshBoardWithPlaceholder:sc,restartPlayMode:Zf,saveCurrentConfigGroup:Sf,saveCurrentLevelToList:qu,saveSavedLevelsToCurrentFile:Ku,selectDirection:$i,setActiveBoardLayer:Ac,setBoardLayerSize:Ic,setGameFillMode:Jm,setGamePlayMode:Km,setGameTurnLimitMode:Zm,setGameLimitMode:Qm,setGameGoalMode:Vm,setGameGoalTargetPairs:Um,setPlayClickHintMode:Oc,setPlayDisplayStyle:_f,setPlayLinkStyle:Of,setPlayOperationMode:jf,setVitaMahjongMode:Xm,simulatePlayGames:vs,stepGenerateOrNext:rg,toggleBoardBackgroundDropdown:Ef,togglePlayClickHintMode:Wf,togglePlayMode:Xh,togglePlaySettingsPanel:zf,toggleStatsLocalHumanMode:vp,toggleStepPairExportScope:Pp,toggleWorkerPoolReuse:Np,triggerBatchRunCampaignImport:kg,triggerImportConfigGroups:xf,triggerImportSavedLevels:wg,updateSimulateUiLabels:pr,usePlayFreezeTool:nh,usePlayHintTool:eh,usePlayShuffleTool:th})}Ib();fb();
