"use strict";(self["webpackChunkvue3_operation"]=self["webpackChunkvue3_operation"]||[]).push([[693],{6693:function(o,e,t){t.r(e),t.d(e,{default:function(){return K}});var n=t(3396),l=t(7139);const a={class:"text-end mt-4"},s={class:"table mt-4"},p=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),d={key:0,class:"text-success"},i={key:1,class:"text-muted"},u={class:"btn-group"},c=["onClick"],r=["onClick"];function h(o,e,t,h,m,_){const b=(0,n.up)("LoadIng"),C=(0,n.up)("couponModal"),f=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(b,{active:m.isLoading},null,8,["active"]),(0,n._)("div",a,[(0,n._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=o=>_.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,n._)("table",s,[p,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.coupons,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",null,(0,l.zw)(e.title),1),(0,n._)("td",null,(0,l.zw)(e.percent)+"%",1),(0,n._)("td",null,(0,l.zw)(o.$filters.date(e.due_date)),1),(0,n._)("td",null,[1===e.is_enabled?((0,n.wg)(),(0,n.iD)("span",d,"啟用")):((0,n.wg)(),(0,n.iD)("span",i,"未起用"))]),(0,n._)("td",null,[(0,n._)("div",u,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>_.openCouponModal(!1,e)},"編輯",8,c),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>_.openDelCouponModal(e)},"刪除",8,r)])])])))),128))])]),(0,n.Wm)(C,{coupon:m.tempCoupon,ref:"couponModal",onUpdateCoupon:_.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(f,{item:m.tempCoupon,ref:"delModal",onDelItem:_.delCoupon},null,8,["item","onDelItem"])],64)}var m=t(9242);const _={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},b={class:"modal-dialog",role:"document"},C={class:"modal-content"},f=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),g={class:"modal-body"},v={class:"mb-3"},M=(0,n._)("label",{for:"title"},"標題",-1),y={class:"mb-3"},w=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),k={class:"mb-3"},$=(0,n._)("label",{for:"due_date"},"到期日",-1),D={class:"mb-3"},x=(0,n._)("label",{for:"price"},"折扣百分比",-1),L={class:"mb-3"},U={class:"form-check"},j=(0,n._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),S={class:"modal-footer"},V=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function I(o,e,t,l,a,s){return(0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",b,[(0,n._)("div",C,[f,(0,n._)("div",g,[(0,n._)("div",v,[M,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>a.tempCoupon.title=o),placeholder:"請輸入標題"},null,512),[[m.nr,a.tempCoupon.title]])]),(0,n._)("div",y,[w,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=o=>a.tempCoupon.code=o),placeholder:"請輸入優惠碼"},null,512),[[m.nr,a.tempCoupon.code]])]),(0,n._)("div",k,[$,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=o=>a.due_date=o)},null,512),[[m.nr,a.due_date]])]),(0,n._)("div",D,[x,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=o=>a.tempCoupon.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[m.nr,a.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",L,[(0,n._)("div",U,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=o=>a.tempCoupon.is_enabled=o),id:"is_enabled"},null,512),[[m.e8,a.tempCoupon.is_enabled]]),j])])]),(0,n._)("div",S,[V,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>o.$emit("update-coupon",a.tempCoupon))},"更新優惠券 ")])])])],512)}var N=t(1339),Z={name:"couponModal",props:{coupon:{}},watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],mixins:[N.Z]},z=t(89);const W=(0,z.Z)(Z,[["render",I]]);var H=W,O=t(4912),T={data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!1,isLoading:!1}},components:{CouponModal:H,DelModal:O.Z},props:{config:Object},methods:{getCoupons(){this.isLoading=!0;const o="https://vue3-course-api.hexschool.io/api/jay-api/admin/coupons";this.$http.get(o,this.tempProduct).then((o=>{this.coupons=o.data.coupons,this.isLoading=!1,console.log(o)}))},openCouponModal(o,e){this.isNew=o,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.showModal()},updateCoupon(o){if(this.isNew){const e="https://vue3-course-api.hexschool.io/api/jay-api/admin/coupon";this.$http.post(e,{data:o}).then((e=>{console.log(e,o),this.$httpMessageState(e,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}else{const o=`https://vue3-course-api.hexschool.io/api/jay-api/admin/coupon/${this.tempCoupon.id}`;this.$http.put(o,{data:this.tempCoupon}).then((o=>{console.log(o),this.$httpMessageState(o,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}},openDelCouponModal(o){this.tempCoupon={...o};const e=this.$refs.delModal;e.showModal()},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/jay-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(o).then((o=>{console.log(o,this.tempCoupon),this.$httpMessageState(o,"刪除優惠券");const e=this.$refs.delModal;e.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const Y=(0,z.Z)(T,[["render",h]]);var K=Y}}]);
//# sourceMappingURL=693.dd37c1ad.js.map