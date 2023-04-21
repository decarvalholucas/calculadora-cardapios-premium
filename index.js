function Teste() {
  var items = [];
  JSON.parse(localStorage.getItem("orderformToOrderPlaced")).items.map(
    function (item) {
      items.push({
        item_id: item.productId,
        item_name: item.name,
        item_brand: "Livre e Leve",
        item_variant: item.skuName,
        price: item.listPrice/100,
        discount: (item.listPrice - item.price)/100,
        quantity: item.quantity,
      });
    }
  );
  return items;
}

