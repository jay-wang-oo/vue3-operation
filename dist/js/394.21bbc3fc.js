"use strict";(self["webpackChunkvue3_operation"]=self["webpackChunkvue3_operation"]||[]).push([[394],{3844:function(t,e,l){l.r(e),l.d(e,{default:function(){return D}});var r=l(3396),s=l(9242),d=l(7139);const n={class:"my-5 row justify-content-center"},o={class:"table align-middle"},a=(0,r._)("thead",null,[(0,r._)("th",null,"品名"),(0,r._)("th",null,"數量"),(0,r._)("th",null,"單價")],-1),i={class:"text-end"},u=(0,r._)("td",{colspan:"2",class:"text-end"},"總計",-1),c={class:"text-end"},h={class:"table"},_=(0,r._)("th",{width:"100"},"Email",-1),p=(0,r._)("th",null,"姓名",-1),g=(0,r._)("th",null,"收件人電話",-1),w=(0,r._)("th",null,"收件人地址",-1),y=(0,r._)("th",null,"付款狀態",-1),b={key:0},v={key:1,class:"text-success"},m={key:0,class:"text-end"},f=(0,r._)("button",{class:"btn btn-danger"},"確認付款去",-1),k=[f];function z(t,e,l,f,z,x){const I=(0,r.up)("LoadIng");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(I,{active:z.isLoading},null,8,["active"]),(0,r._)("div",n,[(0,r._)("form",{class:"col-md-6",onSubmit:e[0]||(e[0]=(0,s.iM)(((...t)=>x.payOrder&&x.payOrder(...t)),["prevent"]))},[(0,r._)("table",o,[a,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(z.order.products,(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id},[(0,r._)("td",null,(0,d.zw)(t.product.title),1),(0,r._)("td",null,(0,d.zw)(t.qty)+"/"+(0,d.zw)(t.product.unit),1),(0,r._)("td",i,(0,d.zw)(t.final_total),1)])))),128))]),(0,r._)("tfoot",null,[(0,r._)("tr",null,[u,(0,r._)("td",c,(0,d.zw)(z.order.total),1)])])]),(0,r._)("table",h,[(0,r._)("tbody",null,[(0,r._)("tr",null,[_,(0,r._)("td",null,(0,d.zw)(z.order.user.email),1)]),(0,r._)("tr",null,[p,(0,r._)("td",null,(0,d.zw)(z.order.user.name),1)]),(0,r._)("tr",null,[g,(0,r._)("td",null,(0,d.zw)(z.order.user.tel),1)]),(0,r._)("tr",null,[w,(0,r._)("td",null,(0,d.zw)(z.order.user.address),1)]),(0,r._)("tr",null,[y,(0,r._)("td",null,[z.order.is_paid?((0,r.wg)(),(0,r.iD)("span",v,"付款完成")):((0,r.wg)(),(0,r.iD)("span",b,"尚未付款"))])])])]),!1===z.order.is_paid?((0,r.wg)(),(0,r.iD)("div",m,k)):(0,r.kq)("",!0)],32)])],64)}var x={data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/jay-api/order/${this.orderId}`;this.$http.get(t).then((t=>{this.isLoading=!1,console.log(t),t.data.success&&(this.order=t.data.order,console.log(this.order))}))},payOrder(){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/jay-api/pay/${this.orderId}`;this.$http.post(t).then((t=>{this.isLoading=!1,console.log(t),t.data.success&&this.getOrder()}))}},created(){this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()}},I=l(89);const L=(0,I.Z)(x,[["render",z]]);var D=L}}]);
//# sourceMappingURL=394.21bbc3fc.js.map