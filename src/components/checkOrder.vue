<template>
  <div>
    <this-dialog :isShow="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :isShow="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :isShow="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </this-dialog>
  </div>
</template>

<script type="text/javascript">
import Dialog from './base/dialog'
export default {
  components:{
    thisDialog:Dialog
  },
  props:{
    isShowCheckDialog:{
      type:Boolean,
      default:false
    },
    orderId:{
      type:[String,Number]
    }
  },
  data(){
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods:{
    checkStatus(){
      this.$http.get('/api/checkOrder',{
        orderId:this.orderId
      }).then((res)=>{
        this.isShowSuccessDialog=true;
        this.$emit('on-close-check-dialog')
      },(err)=>{
        this.isShowFailDialog=true;
        this.$emit('on-close-check-dialog');
      })
    },
    toOrderList(){
      this.$router.push({path:'/orderList'})
    }
  }
}
</script>