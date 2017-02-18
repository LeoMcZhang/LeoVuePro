
import Home from './component/home.vue'
import Details from './component/details.vue'

export default{
	routes:[
		{path:'/home', component:Home},
		{path:'/details', component:Details},
		{path:'*', redirect:'/home'}
	]
}
