<template>
    <div class="container">
    <h2>REGISTRATION FORM</h2>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
    <div class="mb-3">
    <label for="username" class="form-label">Username:</label>
    <input type="text" id="username" class="form-control" v-model="username" required>
    </div>

    <div>
    <label for="email" class="form-label">Email:</label>
    <input type="text" id="email" class="form-control" v-model="email" required>
    </div>

    <div>
    <label for="password" class="form-label">Password:</label>
    <input type="password" id="password" class="form-control" v-model="password" required>
    </div>

    <div class="mb-3">
    <label for="gender" class="form-check-label">Gender:</label>
    <div form-check>
    <input type="radio" id="male" value="Male" v-model="gender" class="form-check-input">
    <label for="male" class="form-check-label">Male</label>
    </div>
    <div form-check>
    <input type="radio" id="female" value="Female" v-model="gender" class="form-check-input">
    <label for="female" class="form-check-label">Female</label>  
    </div>  
    </div>

    <div class="mb-3">
<label for="school" class="form-label">School:</label>
<select id="school" class="form-select" v-model="selectedSchool" required>
<option value:="">Selected School</option>
<option v-for="school in schools" :key="school.id" :value="school.id">{{ school.name 
}}</option>
</select>
</div>

<div class="mb-3">
<label for="trade" class="form-label">Trade:</label>
<select id="trade" class="form-select" v-model="selectedTrade" required>
<option value="">Select Trade</option>
<option v-for="trade in trades" :key="trade.id" :value="trade.id">{{ trade.name 
}}</option>
</select>
</div>

<div class="mb-3">
<label class="form-check-label">Courses:</label> 
<div class="form-check" v-for="course in 
courses" :key="course.id">
<input type="checkbox" :id="'course_' + course.id" :value="course.id" vmodel="selectedCourses" class="form-check-input">
<label :for="'course_' + course.id" class="form-check-label">{{ course.name 
}}</label>
</div>
</div>

<div class="mb-3">
<label for="comments" class="form-label">Comments:</label>
<textarea id="comments" class="form-control" v-model="comments"></textarea>
</div>
<div>
<button class="btn btn-success">Submit</button>
</div>
</form>
</div>
</template>
<script>
export default{
data(){
return{
username:'',
email:'',
password:'',
gender:'',
selectedSchool:'',
selectedTrade:'',
selectedCourses:[],
comments:'',
schools:[
{id:'1',name:'RUNDA TSS'},
{id:'2',name:'APEC TSS'},
{id:'3',name:'CSAMZ TSS'},
{id:'4',name:'NYANZA TSS'}
],
trades:[
{id:'1', name:'CSA'},
{id:'2', name:'SOD'},
{id:'3', name:'BUC'} ],
courses:[
{id:'1', name:'Java'},
{id:'2', name:'PHP'},
{id:'3', name:'Vue'}, ]
}
},
}
</script>