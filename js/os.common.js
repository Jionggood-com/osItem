
	$(document).on("click",".dropdown-menu a",function(){
		if($(this).parents(".dropdown-menu").attr("data")==0)
		{
			var text = $(this).text();
			$(this).parents(".dropdown-menu").prev().find(".active").text(text);
			//if($(this).parents(".dropdown-menu").attr("off")==0)
		//	{
				var cid = $(this).attr("cid");
				$(this).parent().parent().next().val(cid);
			//}
		}
	});
	
	$(".mini-search").attr("autocomplete", "off").on("input propertychange", "", function(){
		var _this = $(this);
		var keyword = _this.val();
		_this.parent().siblings().hide().each(function(){
			if($(this).find("a").text().toLowerCase().indexOf(keyword.toLowerCase())==0)
			{
				$(this).show();
			}
		});
	});
	
	$(document).on("mouseenter",".navbar-nav .nav-box",function(){										
		if($(".nav-box").hasClass("open"))
		{
			$(".nav-box").removeClass("open");
			$(this).addClass("open");
		}
	});
	$(document).on("mouseleave",".navbar-nav",function(){
		$(this).children(".nav-box").removeClass("open");
	});
	  
	  
	 //order full width
	 $(".os-table tr").each(function(){
		var containerWidth = $(".container:eq(0)").outerWidth();
		var orderEmailWidth = $(this).find(".order-email").outerWidth();
		var orderIpWidth = $(this).find(".order-ip").outerWidth();
		var orderOaWidth = $(this).find(".order-oa").outerWidth();
		$(this).find(".order-email").css("width",orderEmailWidth);
		
		if(orderEmailWidth>89 && containerWidth<1500)
		{
			$(this).find(".order-email").tooltip();
		}
		if(orderIpWidth>39 && containerWidth<1400)
		{
			$(this).find(".order-ip").tooltip();
		}
		if(orderOaWidth>59  && containerWidth<1500)
		{
			$(this).find(".order-oa").tooltip();
		}
	});
	 
	 //Modal Confirm
	function ModalConfirm(i,j){
		$(document).off("click",".modal .btn-primary").on("click",".modal .btn-primary",function(i){if( i ) j(i);});
	};
	
	