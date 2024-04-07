<template>
    <table border="4" cellpadding="15" cellspacing="15">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>School</th>
            <th>Trade</th>
            <th>Age</th>
        </tr>
        <tr v-for="data in lists" :key="data.id" :value="data.id">
            <td>{{ data.id }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.school }}</td>
            <td>{{ data.trade }}</td>
            <td>{{ data.age }}</td>
        </tr>
    </table>
</template>
<script>
export default{
    data(){
        return{
            lists:[
                {id:1, name:"Vicky", school:"St KIZITO", trade:"SOD", age:30},
                {id:2, name:"Vicky", school:"St KIZITO", trade:"SOD", age:30},
                {id:3, name:"Vicky", school:"St KIZITO", trade:"SOD", age:30},
                {id:4, name:"Vicky", school:"St KIZITO", trade:"SOD", age:30}
            ]
        }
    }
}
</script>