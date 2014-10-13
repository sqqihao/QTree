// JavaScript Document

(function($) {
	
	function QTree(data, el) {
		this.data = data;
		var $ul = this.render( data );
		$(el).append( $ul );
		this.events();
	};
	$.fn.QTree = QTree.instance = function(setting) {
		setting.data = setting.data || {};
		$.each(this,function(i,e) {
			this.QTree = new QTree( data , this );
		});
	};
	QTree.prototype.events = function() {
		$(".tree").on("click", ".btn", function(ev) {
			$(this).next(".tree").toggle();
			ev.stopPropagation();
		});
	};
	//迭代数据
	QTree.prototype.render = function(obj) {
		
		//每次都新建一个ul的父级元素;
		var $ul = $("<ul class='tree' >");
		if( obj.children ) {
			for(var child in obj.children) {
				var li = obj.children[child];
						
				//如果没有子元素的话直接
				if( !li.children ) {
						var tempA = $("<a>",{ href : "###", class : "a_text"}).text( li.key );
						var tmpLi = $("<li>").html( tempA );
						obj.attr && tmpLi.attr( li.attr );
						$ul.append( tmpLi );
				}else{
					//如果有子元素的话，迭代添加子元素;
					var tempA = $("<a>",{ href : "###"}).text(li.key).addClass("btn").attr( li.attr );
					var tmpLi = $("<li>").append( tempA );
					tmpLi.append( this.render( li ).hide() );
				}
				
				$ul.append( tmpLi );
			};
		};
		return $ul;
	};
	
})(jQuery);