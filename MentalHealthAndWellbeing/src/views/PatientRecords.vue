<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import db from '@/firebase/init';
import { collection, query, where, getDocs, doc } from 'firebase/firestore';
import { onMounted, ref } from 'vue';

export default{

    setup(){
        const allUsers = ref([]);

        const populateTable = async () => {

            try{
                const q = query(collection(db, 'users'), where('role', '==', 'user'));
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    allUsers.value.push(doc.data());
                });
                console.log(allUsers.value);
            }catch(error){
                console.error('Error fetching data!', error);
            }
        };

        onMounted(() =>{
            populateTable();
        });

        return{
            allUsers
        };
    }
};

</script>

<template>
    <div class="container-fluid col-md-3">
        <h1 class="custom-font text-center">
            Patient Records 
        </h1>
    </div>
    <div>
        <DataTable :value="allUsers" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]">
            <Column field="firstName" header="First Name" sortable style></Column>
            <Column field="lastName" header="Last Name" sortable style></Column>
            <Column field="email" header="Email" sortable style></Column>
            <Column field="viewReports" header=" ">
                <template #body="slotProps">
                    <router-link to="/UserReports">
                        View all reports
                    </router-link>
                </template>
            
            </Column>
        </DataTable>
    </div>

</template>


<style scoped>
.custom-font{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #1c4513;
};


</style>