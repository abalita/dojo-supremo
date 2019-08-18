<template>
  <a-card style="margin-bottom: 20vh">
      <a-row type="flex" justify="center">
        <a-col :xs="0" :sm="0" :md="24" :lg="24" >
          <a-steps size="small" :current="step_curr">
          <a-step title="Member Profile"></a-step>
          <a-step title="Contact Information"></a-step>
          <a-step title="Membership"></a-step>
          <a-step title="Payment"></a-step>
          <a-step title="Confirm"></a-step>
        </a-steps>
        <a-divider></a-divider>
        </a-col>
        <a-col :xs="24" :sm="24" :md="0" :lg="0" style="margin-top:-3vh">
          <a-affix :offsetTop="60">
            <a-progress size="small" :percent="progress" status="exception" :showInfo="false"></a-progress>
          </a-affix>
        <a-divider></a-divider>
        </a-col>
          <a-col :span="4">
              <a-avatar :size="90" style="font-size:32px; cursor:pointer" @click="takePicture" :src="avatar">
                  <a-icon type="camera" ></a-icon>
            </a-avatar>
            <!-- <a-avatar v-else  :size="90" :src="avatar"></a-avatar> -->
          </a-col>
      </a-row>
      <a-row type="flex" :gutter="16">
        <a-col :span="24" v-if="step_curr==0">
            
            <!-- <a-form> -->
                 <a-divider orientation="left" style="color:#640E0D">Member Profile</a-divider>
                <a-card >
                   
              <a-form-item label="First"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="customer.first_name" placeholder="Enter First Name"></a-input>
              </a-form-item>
              <a-form-item label="Middle"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="customer.middle_name" placeholder="Enter Middle Name"></a-input>
              </a-form-item>
              <a-form-item label="Last"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="customer.last_name" placeholder="Enter Last Name"></a-input>
              </a-form-item>
              <a-form-item label="Birthdate"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-date-picker v-model="customer.birth_date" style="width:100%"></a-date-picker>
              </a-form-item>
              <a-form-item label="Gender"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <!-- <a-date-picker style="width:100%"></a-date-picker> -->
               <a-radio-group v-model="customer.gender">
                   <a-radio value="Male">Male</a-radio>
                   <a-radio value="Female">Female</a-radio>
               </a-radio-group>
              </a-form-item>
              <a-form-item label="Height"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
               <a-input v-model="customer.height" placeholder="in feet (ft in)"></a-input>
              </a-form-item>
              <a-form-item label="Weight"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
               <a-input v-model="customer.weight" placeholder="in pounds (lbs)"></a-input>
              </a-form-item>
              </a-card>
            <!-- </a-form> -->
            <a-divider></a-divider>
        </a-col>
         <a-col :span="24" v-else-if="step_curr==1">
            <a-divider orientation="left" style="color:#640E0D">Contact Information</a-divider>
            <a-card>
              <a-form-item label="Email Address"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="customer.email" placeholder="Enter email"></a-input>
              </a-form-item>
              <a-form-item label="Contact Number"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="customer.contact_no" placeholder="Enter Contact No."></a-input>
              </a-form-item>
               <a-form-item label="Mobile Number"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="customer.mobile_no" placeholder="Enter Mobile No."></a-input>
              </a-form-item>
              <a-form-item label="Address"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-textarea v-model="customer.address" :rows="5" placeholder="Enter Address"></a-textarea>
              </a-form-item>              
            </a-card>  
            <a-divider></a-divider>          
        </a-col>
        <a-col :span="24" v-else-if="step_curr==2">
            <a-divider  orientation="left" style="color:#640E0D">Membership Details</a-divider>
            <a-card>
                <a-form-item label="Enrollment"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <!-- <a-date-picker style="width:100%"></a-date-picker> -->
               <a-radio-group v-model="customer.enrollment">
                   <a-radio value="Member">Member</a-radio>
                   <a-radio value="Walk-in">Walk-in</a-radio>
               </a-radio-group>
              </a-form-item>
              <a-form-item label="Class"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <!-- <a-date-picker style="width:100%"></a-date-picker> -->
              <a-checkbox-group v-model="customer.classes" @change="onChange">
                    <a-row type="flex">
                        <a-col :span="8"><a-checkbox value="AEROBICS">Aerobics</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="AIKIDO">Iwama Aikido</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="BOXING">Boxing</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="LUTA">Luta Livre</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="MUAY">MUAY Thai</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="MMA">Mixed Martial Arts</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="TAEKWONDO">Taekwondo</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="YOGA">Yoga</a-checkbox></a-col>
                        <a-col :span="8"><a-checkbox value="ZUMBA">Zumba</a-checkbox></a-col>
                    </a-row>
                </a-checkbox-group>
              </a-form-item>
              <a-form-item label="Membership Type"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <!-- <a-date-picker style="width:100%"></a-date-picker> -->
               <a-radio-group v-model="customer.membership_type">
                   <a-radio value="D">Per Session</a-radio>
                   <a-radio value="M">Monthly</a-radio>
                   <a-radio value="Q">Quarterly</a-radio>
                   <a-radio value="A">Annual</a-radio>
               </a-radio-group>
              </a-form-item>
            </a-card>
             <a-divider></a-divider>
        </a-col>
        <a-col :span="24" v-else-if="step_curr==3"> 
            <a-divider  orientation="left" style="color:#640E0D">Payment Details</a-divider>
            <a-card>
                <a-form-item label="Fee"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="payment.fee"></a-input>
              </a-form-item>
              <a-form-item label="Mode"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-radio-group v-model="payment.type">
                   <a-radio value="Full">Full Payment</a-radio>
                   <a-radio value="Installment">Installment</a-radio>
               </a-radio-group>
              </a-form-item>
               <a-form-item label="Paid"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="payment.amount_paid"></a-input>
              </a-form-item>
              <a-form-item label="Balance"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input v-model="payment.balance"></a-input>
              </a-form-item>
            </a-card>
              <a-divider></a-divider>
        </a-col>
         <a-col :span="24" v-else-if="step_curr==4"> 
            <a-divider  orientation="left" style="color:#640E0D">Confirmation</a-divider>
            <a-card>
                <template>
                  <p>The Member hereby agrees to abide by all posted safety guidelines and regulations while using DOJO Supremo's facilities and equipment.
                      Additionally, the Member agrees to dress and conduct themselves in a manner deemed appropriate for a fitness facility.</p>
                  <p>The Member shall not consume drugs, alcohol, or tobacco products on DOJO Supremo property.
                  The Member agrees not to photograph or videotape on DOJO Supremo property.</p>
                  <p>DOJO Supremo reserves the right to revoke the Member’s access if these terms are violated.</p>
                </template>
                <p>Member's Signature:</p>
                <vue-sign
                                id="signature"
                                width="100%"
                                ref="signaturePad"
                            />
            </a-card>
            <a-divider></a-divider>
        </a-col>
      </a-row>
       <a-row type="flex" justify="end" :gutter="16">
          <a-col :sm="8" :lg="4" v-if="step_curr==0">           
            <a-button block @click="$router.push('/app')">Cancel</a-button>
            </a-col>
            <a-col :sm="8" :lg="4" v-else>           
                <a-button block @click="step_curr--">Back</a-button>
            </a-col>
            <a-col :sm="8" :lg="4" v-if="step_curr==4">           
                <a-button block type="primary" @click="save" :loading="isLoading">Enroll</a-button>
            </a-col>
            <a-col :sm="8"  :lg="4" v-else>           
                <a-button block type="primary" @click="step_curr++" :loading="isLoading">Next</a-button>
            </a-col>
        </a-row>
  </a-card>
</template>

<script>
import VueSignature from 'vue-signature-pad'
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;
export default {
  components:{
        'vue-sign':VueSignature
    },
    data(){
        return{
            avatar:null,
            customer:{},
            payment:{},
            isLoading:false,
            step_curr:0
        }
    },
    methods:{
        save(){
          this.isLoading = true;
          this.$http.post('members', this.customer)
          .then(result =>{
            this.isLoading = false;   
            return this.$http.post('payments',this.payment)                   
          })
          .then(result=>{
            this.$notification.success({
              message:'Enrollment Successful',
              description:`New record created for ${this.customer.last_name}, ${this.customer.first_name}`
            })
            this.$router.push('/app')
          })
          .catch(err=>{
            console.log(err)
            this.isLoading = false;            
            this.$notification.error({
              message:'Enrollment Error',
              description:`Error encountered during saving ::: ${err}`
            })
          })
        },
        async takePicture() {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });
            // image.webPath will contain a path that can be set as an image src. 
            // You can access the original file using image.path, which can be 
            // passed to the Filesystem API to read the raw data of the image, 
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            var imageUrl = image.webPath;
            // Can be set to the src of an image now
            // imageElement.src = imageUrl;
            
            console.log('imageUrl ::: ', imageUrl)
            this.avatar=imageUrl
        }
    },
    computed:{
      progress(){
        return ((this.step_curr +1)/5) * 100
      }
    }

}
</script>

<style>
#signature {
  border: double 1px transparent;
  border-radius: 5px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
</style>