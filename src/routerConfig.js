
import Home from './component/home.vue'
import news from './component/news.vue'

export default{
	routes:[
		{path:'/home', component:Home},
		{path:'/news', component:news},
		{path:'*', redirect:'/home'}
	]
}
