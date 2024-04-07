<template>
<div class="container">
    <div class="row">
        <div v-for="profile in profiles" :key="profile.id" class="col-md-4">
            <div class="card mb-3">
                <img :src="profile.image" class="card-img-top" :alt="profile.name">
                <div class="card-body">
                    <h5 class="card-title">{{ profile.name }}</h5>
                    <p class="card-text">{{ profile.description }}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated {{ profile.lastUpdated }}</small>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
export default{
    data(){
        return{
            profiles:[
                {
                    id:1,
                    name:"IPRC TUMBA",
                    image: require("@/assets/Tumba.jpg"),
                    description:"IPRC TUMBA was established by the cabinet decision in September 14, 2007 and officially inaugurated in June 2008 by the then Hon. Minister of Education Dr. Daphrose GAHAKWA on behalf of His Excellency the President of the Republic of Rwanda Paul KAGAME, and in the presence of Her Excellency the president of Japan International Cooperation Agency (JICA) Mrs.SADAKO Ogata, as an A1 (Diploma). ",
                    lastUpdated: "3 mins ago"
                },
                {
                    id: 2,
                    name: "IPRC Musanze",
                    image: require('@/assets/Musanze.jpg'),
                    description: "IPRC Musanze is one of the eight colleges of Rwanda Polytechnic. ,Rwanda Polytechnic is a Public Higher Learning Institution that was established by the Government of Rwanda in 2017 by the Law N° 22/2017 of 30/05/2017 to merge 8 Polytechnics that were existing already.",
                    lastUpdated: "3 mins ago"   
                },
                {
                    id: 3,
                    name: "IPRC Kigali",
                    image: require('@/assets/Kigali.jpg'),
                    description: "IPRC kigali is the leading public college inclined towards Technology programmes. We are about discovering possibilities and potentials for students fresh out of high school,transfer students, returning students pursuing advanced diploma and faculty and staff who are passionate about their fields.",
                    lastUpdated: "3 mins ago"
                }
            ]
        }
    }
}
</script>