function ordersSearchSubmit()
{
	$("#ordersSearchSubmit").submit();
}

function checkOrdersStatus(OrdersStatus)
{
	OrdersStatus = parseInt(OrdersStatus);
	alert(OrdersStatus);
	ordersSearchSubmit();
}

function checkOrdersType(OrdersType)
{
	OrdersType = parseInt(OrdersType);
	alert(OrdersType);
	ordersSearchSubmit();
}

function checkPaymentMethod(PaymentMethod)
{
	PaymentMethod = parseInt(PaymentMethod);
	alert(PaymentMethod);
	ordersSearchSubmit();
}