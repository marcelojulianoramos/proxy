function FindProxyForURL(url, host){
if (dnsDomainIs(host, "vhgcssm2ci.hec.globenet.net"))
{
return "PROXY sapserv3.wdf.sap.corp:8788";
}
return "DIRECT";
}