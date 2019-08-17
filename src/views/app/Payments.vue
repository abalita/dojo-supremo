<template>
    <a-row type="flex" justify="end">
      <a-col :span="4">
          <a-button block type="primary" @click="visible=true">
              Add <a-icon type="plus"></a-icon>
          </a-button>
      </a-col>
      <a-col :span="24">
          <a-divider></a-divider>
          <a-table :columns="cols" :dataSource="payments">
        </a-table>
      </a-col>
        <a-modal
            title="New Payment"
            v-model="visible"
            @ok="handleOk"
            >
            <a-form-item label="Member's Name"
                :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }">
                <a-input-search placeholder="Search Member"
                    @search="onSearch"
                    enterButton
                    />
              </a-form-item>
              <a-divider orientation="left"></a-divider>
              <a-form-item label="Payment"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 20 }">
                <!-- <a-date-picker style="width:100%"></a-date-picker> -->
               <a-radio-group>
                   <a-radio value="D">Single Session Class</a-radio>
                   <a-radio value="M">Monthly</a-radio>
                   <a-radio value="Q">Quarterly</a-radio>
                   <a-radio value="A">Annual</a-radio>
                   <a-radio value="O">Others</a-radio>
               </a-radio-group>
              </a-form-item>
              <a-form-item label="Class"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 20 }">
                <!-- <a-date-picker style="width:100%"></a-date-picker> -->
              <a-checkbox-group @change="onChange">
                    <a-row type="flex">
                        <a-col :span="12"><a-checkbox value="AEROBICS">Aerobics</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="AIKIDO">Iwama Aikido</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="BOXING">Boxing</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="LUTA">Luta Livre</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="MUAY">MUAY Thai</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="MMA">Mixed Martial Arts</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="TAEKWONDO">Taekwondo</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="YOGA">Yoga</a-checkbox></a-col>
                        <a-col :span="12"><a-checkbox value="ZUMBA">Zumba</a-checkbox></a-col>
                    </a-row>
                </a-checkbox-group>
              </a-form-item>
              <a-form-item label="Fee"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 20 }">
                <a-input></a-input>
              </a-form-item>
              <a-form-item label="Paid"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 20 }">
                <a-input></a-input>
              </a-form-item>
               <a-form-item label="Notes"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 20 }">
                <a-textarea placeholder="Write comments here..."></a-textarea>
              </a-form-item>
        </a-modal>
    </a-row>   
</template>

<script>
export default {
    data(){
        return {
            visible:false,
            payments:[{}],
            cols:[
                {
                title:"Customer ID",
                dataIndex:"_id"
                },                
                {
                title:"Name",
                dataIndex:"first_name"
                },
                {
                title:"Fee",
                dataIndex:"first_name"
                },
                {
                title:"Amount Paid",
                dataIndex:"first_name"
                },
                {
                title:"Date",
                dataIndex:"first_name"
                },
            ]
        }
    }

}
</script>

<style>

</style>