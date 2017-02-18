<template>
<div id="header">
	<div id="headerbox">
		<el-row :gutter="20">
			  <el-col :span="6">
			  	<div class="grid-content nav_left">
			  		<a href="javascript:;">zuo</a>
			  		<span>HONEY WASABI</span>
			  	</div>
			  </el-col>
			  <el-col :span="14">
			  	<ul class="grid-content nav_center">
			  		<li @click="clickAct(1)">
						<router-link to="/home" :class="{ active: isActiveH }">
							首页
						</router-link> 
			  		</li>
			  		<li @click="clickAct(2)">
			  			<router-link to="/details" :class="{ active: isActiveDe }">
			  				深度
			  			</router-link>
			  		 </li>
			  		<li @click="clickAct(3)">
						<router-link to="/download" :class="{ active: isActiveDo }">
			  				下载APP
			  			</router-link>
			  		</li>
			  		<el-input
						  placeholder="请输入关键字"
						  icon="search"
						  v-model="input2"
						  :on-icon-click="handleIconClick"
						  id="form">
					</el-input>
			  	</ul>
			  </el-col>
			  <el-col :span="4">
			  	<div class="grid-content nav_right">
			  		<el-button>
			  			登录
			  		</el-button>
			  		<el-button>
			  			注册
			  		</el-button>
			  	</div>
			  </el-col>
		</el-row>
	</div>
	
</div>
</template>

<script type="text/javascript">
export default {
  	data() {
    	return {
    		isActiveH:true,
    		isActiveDe:false,
    		isActiveDo:false,
      		input2: ''
    	}
  	},
 	 methods: {
   		handleIconClick(ev) {
      		// var s = JSON.parse(ev)
      		alert(ev);
    	},
    	clickAct(num){
    		if(num == 1){
    			this.isActiveH= true;
    			this.isActiveDe= false;
    			this.isActiveDo= false;
    			return;
    		}
    		if(num == 2){
    			this.isActiveH= false;
    			this.isActiveDe= true;
    			this.isActiveDo= false;
    			return;
    		}
    		if(num == 3){
    			this.isActiveH= false;
    			this.isActiveDe= false;
    			this.isActiveDo= true;
    			return;
    		}
    	}
  	}
}



</script>
<style type="text/css" scope>
	#header{
		background-color: #272c2f;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
	}	
	#headerbox{
		color: #fff;
		height: 60px;
		margin:0 30px;
	}
	.nav_left{
		font-family: '微软雅黑';
	}
	.grid-content{
		height: 60px;
		line-height: 60px;
	}
	.grid-content>a{
		font-size: 30px;
		color: #fff;
		font-weight: bold;
	}
	.grid-content>span{
		color: #636763;
		font-size: 14px;
	}
	.nav_center{
		display: flex;
		font-size: 15px;
	}
	.nav_center>li{
		flex: 1;
		text-align: center;
		color:#a9a9a9;
	}
	.nav_center>li>a{
		color: #a9a9a9;
	}
	.nav_center .active{
		color:#fff;
	}
	.nav_center>#form{
		flex:2;
		line-height: 60px;
	}
	.nav_center>#form>input{
		margin-top: 12px;
		background-color: #464b4d;
		color: #a9a9a9;
		border:none;
	}
	.nav_center>#form>i{
		font-size: 20px;
	}
	.nav_center>#form>i:hover{
		color:#bfcbd9;
	}
	.nav_right{
		display: flex;
	}
	.nav_right>button{
		flex: 1;
		background-color: transparent;
		border:0;
		color:#a9a9a9;
		height: 100%;
		padding:0;
		margin:0 !important;
	}
	.nav_right>button:hover{
		color:#a9a9a9;
	}
</style>