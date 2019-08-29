function FindProxyForURL(url, host) {
    if (shExpMatch(url, "http://vhgcssm1ci.hec.*"))
        {
        return "PROXY sapserv3.wdf.sap.corp:8787";
        }
    if (shExpMatch(url, "https://vhgcssm1ci.hec.*"))
        {
        return "PROXY sapserv3.wdf.sap.corp:8788";
        }
    return "DIRECT";
}
