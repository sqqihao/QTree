
var data = {
	children:[
		{
		  //这个是根目录;
			key : "root",
			attr : {},
			//跟目录下的所有子元素;
		  children : [
	    ]
	  }
	]
};

1 : 使用方法很简单:
    数据模型, the detail of data in dir "js/data.js";
    $("body").QTree({data : data});
2 : 目前提供 :
  .btn 显示子菜单的按钮
  .tree 主菜单的主体
  .a_text 所有的text文本
