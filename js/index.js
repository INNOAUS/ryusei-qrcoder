  function encode() {
    var serviceName = document.getElementById("serviceName").value
    var data = document.getElementById("data").value
    return encodeWithData(data, serviceName);
  }

  function encodeWithData(data, serviceName) {
    var temp = "{\"secret\":\"" + data + "\",\"service_name\":\"" + serviceName +"\"}";
    var aa = encodeURIComponent(temp);
    makeqr(aa);
    return aa;
  }

  function makeqr(data) {
    document.getElementById("qrcode").innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: data,
      width: 400,
      height: 400,
      colorDark : "#000000",
      colorLight : "#eee",
      correctLevel : QRCode.CorrectLevel.M
    });
    qrcode.clear(); // clear the code.
    qrcode.makeCode(data); // make another code.
  }

  function copydata() {
    var text = document.getElementById("result").innerHTML
    window.clipboardData.setData("Text", text);
  }

  function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
  }
