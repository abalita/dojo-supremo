<template>
    <a-card>
        <a-table :columns="cols" :dataSource="members" :loading="isLoading"></a-table>
    </a-card>
</template>

<script>
export default {
    data(){
        return {
            isLoading:false,
            members:[{}],
            cols:[
                {
                title:"Customer ID",
                dataIndex:"_id"
                },                
                {
                title:"Last Name",
                dataIndex:"last_name"
                },
                {
                title:"First Name",
                dataIndex:"first_name"
                }
            ]
        }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.isLoading=true;
            this.$http.get('members')
            .then(result=>{
                console.log('RESULT ::: ',JSON.stringify(result))
                this.isLoading=false;
                this.members = result.data
            })
            .catch(err=>{
                this.isLoading=false;
                this.$notification.error({
                    message:'Error on retrieving members',
                    description:`request error ::: ${err}`
                })
            })
        }
    }

}
</script>

<style>

</style>