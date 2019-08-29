function FindProxyForURL(url, host) {
if(url.substring(0,21) == "http://vhgcssm1ci.hec")
{
return "PROXY sapserv3.wdf.sap.corp:8787";
}
if(url.substring(0,22) == "https://vhgcssm1ci.hec")
{
return "PROXY sapserv3.wdf.sap.corp:8788";
}
return return "DIRECT";
}
