function FindProxyForURL(url, host){
if (dnsDomainIs(host, "vhgcssm2ci.hec.globenet.net"))
{
    if(url.substring(0,5) == "http:")
    {
    return "PROXY sapserv3.wdf.sap.corp:8787";
    }
    if(url.substring(0,6) == "https:")
    {
    return "PROXY sapserv3.wdf.sap.corp:8788";
}
return "DIRECT";
}
