// 제품 아이템을 선택할 때 링크에 따라 외부 브라우저로 열리도록 해줌
function pressProduct(linkAddress) {
  var message = {
    linkAddress: linkAddress,
  };
  window.ReactNativeWebView.postMessage(JSON.stringify(message));
}
