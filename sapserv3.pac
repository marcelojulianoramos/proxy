function FindProxyForURL(url, host) 
{
    if(url.substring(0,5) == "http:")
        {
            return "PROXY sapserv3.wdf.sap.corp:8787";
        }
    if(url.substring(0,6) == "https:")
        {
            return "PROXY sapserv3.wdf.sap.corp:8788";
        }
    return "PROXY sapserv3.wdf.sap.corp:8788";
}


if (dnsDomainIs(host, "abcdomain.com") || dnsDomainIs(host, "www.abcdomain.com"))
        return "DIRECT";




        function FindProxyForURL(url, host) 
    {
        // If the hostname matches, send direct.
        // http://vhgcssm1ci.hec.globenet.net:8000/sap/bc/bsp/sap/crm_ui_start/default.htm?sap-client=500&sap-sessioncmd=open&sap-language=EN
        if (dnsDomainIs(host, "vhgcssm1ci.hec.globenet.net") ||
            shExpMatch(host, "*.hec.globenet.net|hec.globenet.net)"))
            {
                if(url.substring(0,5) == "http:")
                {
                    return "PROXY sapserv3.wdf.sap.corp:8787";
                }
                if(url.substring(0,6) == "https:")
                {
                    return "PROXY sapserv3.wdf.sap.corp:8788";
                }
                return "PROXY sapserv3.wdf.sap.corp:8788";
            }
    // DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "DIRECT";
     
    }